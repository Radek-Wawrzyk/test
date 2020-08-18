<template>
  <div
    :ref="`map-${name}`"
    id="map"
    class="section-coverage__map"
  />
</template>

<script>
let am4core;
let am4maps;
let am4geodata_worldLow;
let am4themes_animated;
let chart;

export default {
  name: 'HomeMap',
  props: {
    pins: {
      type: Array,
      require: true,
    },
    data: {
      type: Array,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    map: null,
  }),
  methods: {
    renderMap() {
      // Configuration of chart
      chart = am4core.create(this.$refs[`map-${this.name}`], am4maps.MapChart);
      chart.geodata = am4geodata_worldLow;
      chart.projection = new am4maps.projections.Miller();
      chart.seriesContainer.draggable = false;
      chart.seriesContainer.resizable = false;
      chart.maxZoomLevel = 1;
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antartica
      polygonSeries.exclude = ["AQ"];
      polygonSeries.useGeodata = true;

      polygonSeries.data = this.data;

      // Configure series
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = '#DDDDDD';
      polygonTemplate.propertyFields.fill = "fill";

      // Create hover state and set alternative fill color
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = chart.colors.getIndex(0);

      // Add image series
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      imageSeries.data = this.pins;

      // add events to recalculate map position when the map is moved or zoomed
      chart.events.on("ready", updateCustomMarkers );
      chart.events.on("mappositionchanged", updateCustomMarkers );

      // this function will take current images on the map and create HTML elements for them
      function updateCustomMarkers(event) {
        imageSeries.mapImages.each(function(image) {

          if (!image.dummyData || !image.dummyData.externalElement) {
            image.dummyData = {
              externalElement: createCustomMarker(image)
            };
          }

          // reposition the element accoridng to coordinates
          let xy = chart.geoPointToSVG( { longitude: image.longitude, latitude: image.latitude } );
          image.dummyData.externalElement.style.top = xy.y + 'px';
          image.dummyData.externalElement.style.left = xy.x + 'px';
        });
      }

      // this function creates and returns a new marker element
      function createCustomMarker( image ) {
        let chart = image.dataItem.component.chart;

        // create holder
        let holder = document.createElement('div');
        holder.className = 'map__marker';
        holder.title = image.dataItem.dataContext.title;
        holder.style.position = 'absolute';
        // holder.style.background = 'red';

        // maybe add a link to it?
        if ( undefined != image.url ) {
          holder.onclick = function() {
            window.location.href = image.url;
          };
          holder.className += ' map-clickable';
        }

        // create dot
        let dot = document.createElement('div');
        dot.className = 'map__marker-label';
        dot.innerHTML = image.dataItem.dataContext.title;
        holder.appendChild(dot);

        // create pulse
        let pulse = document.createElement('div');
        pulse.className = 'map__marker-dot';
        holder.appendChild( pulse );

        // append the marker to the map container
        chart.svgContainer.htmlElement.appendChild( holder );
        return holder;
      }

      this.map = chart;
    },
  },
  mounted() {
    if (process.isClient) {
      am4core = require("@amcharts/amcharts4/core");
      am4maps = require("@amcharts/amcharts4/maps");
      am4geodata_worldLow = require("@amcharts/amcharts4-geodata/worldLow").default;
      am4themes_animated = require("@amcharts/amcharts4/themes/animated").default;
      am4core.useTheme(am4themes_animated);
      this.renderMap();
    }
  },
};
</script>

<style>

</style>
