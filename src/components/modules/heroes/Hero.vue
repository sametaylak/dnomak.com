<template lang="pug">
  .xl-m40
    .wrap.xl-gutter-24
      .col.xl-2-3
        .xl-tal.xl-p24.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200
          .xl-mb8
            .wrap.xl-auto.xl-middle.xl-gutter-8
              .col
                .xl-dib.xl-fs28.xl-lh40.xl-fw600 {{ hero.name }}
              .col(v-for='title in hero.titles')
                .xl-dib.xl-ba-black-500.xl-co-white.xl-py4.xl-px8.xl-br4.xl-ffscp.xl-fs14 {{ title.url }}
          div(v-if='hero.title')
            |{{ hero.title }}
          .xl-oh.xl-br8.xl-lh0.xl-mt24
            youtube(v-if='!videoLoading', :video-id='hero.videoId', @ready='ready', :player-vars='{ autoplay: 1, start: questionTime }')
      .col.xl-1-3(v-if='times.length')
        .xl-bo-gray-200.xl-bwl2.xl-bwr2.xl-bwt2.xl-ba-gray-200.xl-p16.xl-brt8.xl-fw600.xl-fs18
          |Sorular
        .xl-ba-white.xl-fs14.xl-lh20.xl-brb8.xl-bo-gray-200.xl-bw2.xl-oh
          .xl-ba-gray-100
            span(v-for='time in times')
              a.xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200(href='#' @click.stop.prevent='change(time.second)')
                |{{ time.question.name }}
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
      this.hero = this.heroByUsername(this.$route.params.heroUsername);
    },
    computed: {
      ...mapGetters('heroes', [
        'heroByUsername',
      ]),
      ...mapGetters('times', [
        'times',
      ]),
    },
    methods: {
      ...mapActions('times', [
        'allTimes',
      ]),
      ...mapActions('heroes', [
        'allHeroes',
      ]),
      ready(player) {
        this.player = player;
      },
      change(questionTime) {
        this.videoLoading = true;
        setTimeout(() => {
          this.videoLoading = false;
          this.questionTime = parseInt(questionTime, 10);
        }, 1);
      },
    },
  };
</script>
