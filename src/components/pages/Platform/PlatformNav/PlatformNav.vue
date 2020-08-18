<template>
  <nav class="platform-nav">
    <div class="container">
      <ul class="platform-nav__menu">
        <li
          class="platform-nav__menu-item"
          v-for="item in menu"
          :key="item.name"
        >
          <a
            :ref="item.link"
            class="platform-nav__menu-link"
            :class="[
              activeSection === item.link ? 'platform-nav__menu-link--active' : '',
            ]"
            :href="`#${item.link}`"
            :aria-label="item.name"
            :title="item.name"
            @click.prevent="scrollTo(item.link)"
          >
            {{ item.name }}
          </a>
        </li>
        <div
          class="platform-nav__active-line"
          :style="{
            width: `${activeLineWidth}px`,
            transform: `translateX(${activeLineOffset}px)`
          }"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'PlatformNav',
  data: () => ({
    activeSection: '',
    activeLineWidth: 0,
    activeLineOffset: 0,
    hasScrolled: false,
    observer: null,
    options: null,
    isLoaded: false,
  }),
  methods: {
    scrollTo(payload) {
      this.moveActiveLine(payload);
      this.observer.disconnect();
      this.isLoaded = false;
      // Get formatted ID from the link
      const id = payload.includes('#') ? payload.substr(1) : payload;
      const target = document.querySelector(`#${id}`);
      const sections = document.querySelectorAll('.platform-section');

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      // Start again observer
      this.observer = new IntersectionObserver(this.navChecker, this.options);
      sections.forEach(section => {
        this.observer.observe(section);
      });

      setTimeout(() => {
        this.isLoaded = true;
      }, 700);
    },
    moveActiveLine(payload) {
      if (!this.$refs[payload]) {
        return;
      }

      let element = this.$refs[payload][0];
      this.activeSection = payload;
      this.activeLineWidth = element.clientWidth;
      this.activeLineOffset = element.offsetLeft;
    },
    navChecker(payload) {
      console.log(payload)
      payload.forEach(entry => {
        if (this.isLoaded) {
          this.activeSection = entry.target.id;
          this.moveActiveLine(entry.target.id);
        }
      });
    },
  },
  mounted() {
    const sections = document.querySelectorAll('.platform-section');
    this.options = {
      threshold: 0.7,
    };

    // Setup observer
    this.observer = new IntersectionObserver(this.navChecker, this.options);
    sections.forEach(section => {
      this.observer.observe(section);
    });

    setTimeout(() => {
      this.isLoaded = true;
    }, 500);

    // this.isLoaded = true;
    // Timeout for execute chaning section based on #hash
    setTimeout(() => {
      this.activeSection = this.currentSection;
      this.moveActiveLine(this.currentSection);
    }, 100);
  },
  computed: {
    currentSection() {
      return this.$route.hash ? this.$route.hash.substr(1) : false;
    },
    menu() {
      return [
        {
          name: 'Why Lottify?',
          link: 'why'
        },
        {
          name: 'Features',
          link: 'features'
        },
        {
          name: 'Benefits',
          link: 'benefits'
        },
        {
          name: 'Architecture',
          link: 'architecture'
        },
        {
          name: 'Developers',
          link: 'developers'
        },
        {
          name: 'Compliance',
          link: 'compliance'
        },
        {
          name: 'Licenses',
          link: 'licenses'
        },
      ];
    },
  },
};
</script>

<style lang="sass" src="./PlatformNav.sass" />
