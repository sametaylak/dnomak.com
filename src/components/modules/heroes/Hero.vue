<template lang="pug">
  .xl-m40.md-m16(v-if='heroes.length')
    .wrap.xl-gutter-24.md-1
      .col.xl-2-3
        .xl-mb16.xl-tal.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200.xl-p24.lg-p16
          .xl-mb8.xl-h40
            .wrap.xl-auto.xl-middle.xl-gutter-8
              .col
                .xl-dib.xl-fs28.xl-fw600.xl-lh40 {{ hero.name }}
              .col(v-for='tag in hero.tags')
                .xl-dib.xl-ba-black-500.xl-co-white.xl-py4.xl-px8.xl-br4.xl-ffscp.xl-fs14 {{ tag.name }}
          div.xl-h24.xl-lh24(v-if='hero.title')
            |{{ hero.title }}
          .xl-oh.xl-br8.xl-lh0.xl-mt24
            .embed-responsive.embed-responsive-16by9(v-if='videoLoading')
              .embed-responsive-item
            youtube.xl-br8.embed-responsive.embed-responsive-16by9(v-if='!videoLoading', :video-id='hero.videoId', @ready='ready', :player-vars='{ autoplay: 1, start: questionTime, rel: 0 }')
      .col.xl-1-3
        .xl-mb16(v-if='times.length')
          .xl-bo-gray-200.xl-bwl2.xl-bwr2.xl-bwt2.xl-ba-gray-200.xl-p16.xl-brt8.xl-fw600.xl-fs18
            |{{ $t("globals.questions") }}
          .xl-ba-white.xl-fs14.xl-lh20.xl-brb8.xl-bo-gray-200.xl-bw2.xl-oh
            .xl-ba-gray-100
              span(v-for='time in times')
                a.xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200.xl-cp(@click.stop.prevent='changeQuestionTime(time.second)', :class="{'active': time.second === questionTime}")
                  |{{ time.question.name }}
        subscribe-form
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        hero: [],
        questionTime: 0,
        player: null,
        videoLoading: false,
      };
    },
    created() {
      this.allHeroes();
      this.allTimes(this.$route.params.heroUsername);
    },
    watch: {
      heroes() {
        this.hero = this.heroByUsername(this.$route.params.heroUsername);
      },
    },
    computed: {
      ...mapGetters('heroes', [
        'heroByUsername',
        'heroes',
      ]),
      ...mapGetters('times', [
        'times',
      ]),
    },
    methods: {
      ...mapActions('heroes', [
        'allHeroes',
      ]),
      ...mapActions('times', [
        'allTimes',
      ]),
      ready(player) {
        this.player = player;
      },
      changeQuestionTime(questionTime) {
        this.videoLoading = true;
        setTimeout(() => {
          this.questionTime = parseInt(questionTime, 10);
          this.videoLoading = false;
        }, 1);
      },
    },
  };
</script>

<style>
  .embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
  }
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    background: #000000;
  }
  .embed-responsive-16by9 {
    padding-bottom: 56.25%;
  }
  .embed-responsive-4by3 {
    padding-bottom: 75%;
  }
  .active,
  .active:hover {
    background-color: #1094F6;
    color: #FFFFFF;
  } 
</style>
