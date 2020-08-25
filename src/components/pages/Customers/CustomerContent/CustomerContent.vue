<template>
  <section class="customer-content" id="customer-content">
    <div class="container container--big customer-content__container">
      <div class="customer-content-stats">
        <h4 class="customer-content-stats__heading">
          Core statistics
        </h4>
        <ul class="customer-content-stats__list">
          <li class="customer-content-stats__item">
            <figure class="customer-content-stats__img">
              <!-- <g-image
                class="customer-content-stats__img-inner"
                alt=""
                src=""
              /> -->
            </figure>
            <p class="customer-content-stats__text">
              Number of users: 74
            </p>
          </li>
           <li class="customer-content-stats__item">
            <figure class="customer-content-stats__img">
              <!-- <g-image
                class="customer-content-stats__img-inner"
                alt=""
                src=""
              /> -->
            </figure>
            <p class="customer-content-stats__text">
             Frequency of login: Every day
            </p>
          </li>
           <li class="customer-content-stats__item">
            <figure class="customer-content-stats__img">
              <!-- <g-image
                class="customer-content-stats__img-inner"
                alt=""
                src=""
              /> -->
            </figure>
            <p class="customer-content-stats__text">
              lient joined: June 2018
            </p>
          </li>
        </ul>
        <div class="customer-content-stats__actions">
          <base-button
            title="Get started for free"
            type="primary"
            class="customer-content-stats__button"
          >
            Get started for free
          </base-button>
        </div>
      </div>

      <div class="customer-content-inner">
        <h3 class="customer-content-inner__heading">
          Lotto.com customer story
        </h3>
        <!-- <p
          class="customer-content-inner__content"
          v-html="test"
        /> -->
        <div class="customer-content-inner__content">
          <h2>Highly secure, resilient and innovative</h2>
          <h4>The best-in-class lottery distribution platform that delivers a secure and seamless online experience to players.</h4>
          <p></p>
          <p></p>
          <p>At Lotto.com they are on a mission to increase contributions to good causes that are tied to every ticket sold. Depending on the state, up to 50% of all lottery ticket sales support initiatives such as: scholarships and educational programs, social services and much more. The Lotto.com team is here to promote the lottery in a way no one else imagined.</p>
          <blockquote>
            The primary concern for our business is the safety and security of our data, the continuity of the game, demonstrable resilience and security management. Within the lottify ecosystem, lottify provides an industry-leading operational environment, plus expertise that both meet and exceed our needs, ensuring peace of mind for us and our players.
            <div class="blockquote-author">
              <g-image
                src="@/assets/images/customers/avatar.png"
                class="blockquote-author__avatar"
                alt=""
              />
              <div class="blockquote-author__content">
                <h4 class="blockquote-author__name">
                  Thomas Metzger
                </h4>
                <p class="blockquote-author__position">
                  CEO at Lottoland.com
                </p>
              </div>
            </div>
          </blockquote>

          <img
            src="https://st.focusedcollection.com/8860618/i/1800/focused_171492860-stock-photo-man-sitting-desk-using-laptop.jpg"
            alt
          />
          <h5>The Business Challenge</h5>
          <p> What most people don’t know: The lottery business is a highly dynamic playground – worldwide. It is moving at enormous speed into the digital landscape, and this brings very interesting product and UX challenges that need to be solved. It is the challenge to translate an old-school industry (Lottery) into a dynamic, digital world. Gone are the days of lottery players huddled around their television sets, clutching their lottery tickets, eagerly awaiting the broadcast of the winning numbers. <br/><br/> The lottery business has come a long way since the introduction of several lotteries marking the first time players could pick their own numbers. The industry continues to change and adapt based on expectations of players, but it faces a number of challenges including the pace of changing consumer demands, evolution of shopping practices, and proliferation of entertainment and consumer activity on mobile devices. The Lotto.com team’s objective is to provide there customers with the right products and features at the right time, significantly growing there customer base and revenues by doing so. How do they do that? With the help of lottify they create online lottery shop with several lottery products and provide them in the best possible, customer-centric way. <br/><br/>They manage and optimise the Lotto.com e-commerce shop to deliver an awesome playing experience for there customers. With lottify they meet all customer expectations and business requirements. It’s that simple. The strategy from Lotto.com was to outsource Information and communications technology and keep core staff to a minimum. They were also looking for a partner that could deliver a range of potential partners and suppliers moving forwards, as new technologies like the cloud and mobile create new opportunities for the industry.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default {
  name: 'CustomerConent',
  methods: {
    richtextToHTML (payload) {
      return documentToHtmlString(payload);
    },
  },
  computed: {
    test() {
      return `
        <h2>Highly secure, resilient and innovative</h2>
        <h4>The best-in-class lottery distribution platform that delivers a secure and seamless online experience to players.</h4>
        <p></p>
        <p></p>
        <p>At Lotto.com they are on a mission to increase contributions to good causes that are tied to every ticket sold. Depending on the state, up to 50% of all lottery ticket sales support initiatives such as: scholarships and educational programs, social services and much more. The Lotto.com team is here to promote the lottery in a way no one else imagined.</p>
        <blockquote>
          The primary concern for our business is the safety and security of our data, the continuity of the game, demonstrable resilience and security management. Within the lottify ecosystem, lottify provides an industry-leading operational environment, plus expertise that both meet and exceed our needs, ensuring peace of mind for us and our players.
        </blockquote>
        <img
          src="https://st.focusedcollection.com/8860618/i/1800/focused_171492860-stock-photo-man-sitting-desk-using-laptop.jpg"
          alt
        />
        <h5>The Business Challenge</h5>
        <p> What most people don’t know: The lottery business is a highly dynamic playground – worldwide. It is moving at enormous speed into the digital landscape, and this brings very interesting product and UX challenges that need to be solved. It is the challenge to translate an old-school industry (Lottery) into a dynamic, digital world. Gone are the days of lottery players huddled around their television sets, clutching their lottery tickets, eagerly awaiting the broadcast of the winning numbers. <br/><br/> The lottery business has come a long way since the introduction of several lotteries marking the first time players could pick their own numbers. The industry continues to change and adapt based on expectations of players, but it faces a number of challenges including the pace of changing consumer demands, evolution of shopping practices, and proliferation of entertainment and consumer activity on mobile devices. The Lotto.com team’s objective is to provide there customers with the right products and features at the right time, significantly growing there customer base and revenues by doing so. How do they do that? With the help of lottify they create online lottery shop with several lottery products and provide them in the best possible, customer-centric way. <br/><br/>They manage and optimise the Lotto.com e-commerce shop to deliver an awesome playing experience for there customers. With lottify they meet all customer expectations and business requirements. It’s that simple. The strategy from Lotto.com was to outsource Information and communications technology and keep core staff to a minimum. They were also looking for a partner that could deliver a range of potential partners and suppliers moving forwards, as new technologies like the cloud and mobile create new opportunities for the industry.</p>
      `
    },
  },
};
</script>

<style lang="sass" src="./CustomerContent.sass" />
