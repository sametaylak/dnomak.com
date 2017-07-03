<template lang="pug">
  div
    c-header
    .xl-mt24.xl-mx16(v-if='heroes.length || hero')
      .container
        .wrap.xl-gutter-24.md-1
          .col.xl-2-3
            .xl-mb16.xl-tal.xl-co-black-500.xl-br8.xl-ba-white.xl-bw2.xl-bo-gray-200.xl-p24.lg-p16
              .wrap.xl-auto.xl-gutter-16.xl-middle.xl-pr
                .col.sm-hidden(v-if='hero.username')
                  .avatar--hero.xl-br8(:style="{ 'background-image': 'url(/static/img/heroes/' + hero.username + '.jpg)' }")
                .col
                  .youtube
                    .g-ytsubscribe(data-channelid='UCbu25feEIe6fY9fZx8BCMSA' data-layout='default' data-count='default')
                  .xl-mb4
                    .wrap.xl-auto.xl-middle.xl-gutter-8
                      .col
                        .xl-dib.xl-fs28.xl-fw600.xl-lh40 {{ hero.name }}
                      .col(v-for='tag in hero.tags')
                        .xl-dib.xl-ba-black-500.xl-co-white.xl-py4.xl-px8.xl-br4.xl-ffscp.xl-fs14.xl-my8 {{ tag.name }}
                  div.xl-lh24(v-if='hero.title')
                    |{{ hero.title }}
              .xl-oh.xl-br8.xl-lh0.xl-mt24
                .embed-responsive.embed-responsive-16by9(v-if='videoLoading')
                  .embed-responsive-item
                youtube.xl-br8.embed-responsive.embed-responsive-16by9(v-if='!videoLoading', :video-id='hero.videoId', @ready='ready', :player-vars='{ autoplay: 1, start: questionTime, rel: 0 }')
                .wrap.xl-auto.xl-left.xl-gutter-8.xl-middle.xl-pt24.xl-ffscp.xl-lh20(v-if='links.length')
                  .col.xl-co-gray-500.xl-fs14
                    | {{ $t("globals.socialMedia") }}:
                  .col(v-for='link in links')
                    a.xl-dib.xl-co-black-500.ho-co-black-500.xl-fs14.xl-tdu(:href='`${link.socialMedia.baseUrl}${link.username}`', target='_blank') {{ link.socialMedia.name }}
            .xl-p16.xl-bo-gray-200.xl-ba-white.xl-bw2.xl-br8
              #disqus_thread
            c-footer
          .col.xl-1-3
            a.xl-db.xl-p8.xl-br8.xl-fs14.xl-mb16.xl-tac.xl-bo-purple-300.xl-bw2.xl-co-white.xl-ba-purple-300.xl-cp.xl-lh24(href='//patreon.com/dnomak' target='_blank')
              span(v-html='$t("globals.coffee")')
            .xl-mb16(v-if='times.length')
              .xl-bo-gray-200.xl-bwl2.xl-bwr2.xl-bwt2.xl-ba-gray-200.xl-p16.xl-brt8.xl-fw600.xl-fs18
                | {{ $t("globals.questions") }}
              .xl-ba-white.xl-fs14.xl-lh20.xl-brb8.xl-bo-gray-200.xl-bw2.xl-oh
                .xl-ba-gray-100
                  span(v-for='time in times')
                    a.xl-db.xl-py8.xl-px16.ho-ba-gray-100.ho-co-black-500.ho-bo-gray-200.xl-ba-white.xl-co-black-500.xl-bwt1.xl-bo-gray-200.xl-cp(@click.stop.prevent='changeQuestionTime(time.second)', :class="{'active': time.second === questionTime}")
                      span.xl-1-1.xl-db.xl-wsnw.xl-oh.xl-toe(v-if='$t("lang") === "tr"') {{ time.question.name }}
                      span.xl-1-1.xl-db.xl-wsnw.xl-oh.xl-toe(v-if='$t("lang") === "en"') {{ time.question.nameEnglish }}
            subscribe-form
            a.xl-p16.xl-br8.xl-ba-black-500.xl-bw2.xl-bo-black-500.xl-cp.xl-db(href='https://www.graph.cool/?utm_medium=partner&utm_source=dnomak.com', target='_blank')
              .wrap.xl-auto.xl-center.xl-middle.xl-gutter-16
                .col
                  .xl-co-black-100.xl-ls1.xl-fs16.xl-lh24.xl-fw600 {{ $t("globals.dataSponsor") }}
                .col.xl-lh0
                  div(v-html='graphCoolIcon')
                .col
                  .graphcool-color.xl-fw600.xl-ls1.xl-fs20.xl-lh24 GRAPHCOOL
            .xl-tac
              a.xl-ffscp.xl-fs14.xl-tac.xl-co-gray-500.xl-my24.xl-dib.xl-lh24(href='https://github.com/dnomak/dnomak.com', target='_blank')
                | {{ $t("globals.contribute") }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        hero: [],
        questionTime: 0,
        player: {
          j: {
            currentTime: 0,
          },
        },
        playerSecond: null,
        videoLoading: false,
        graphCoolIcon: `
          <svg stroke="none" fill="rgba(39,174,96,1)" style="width: 40px; height: 46px;" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="66 46 18 21"><path d="M82.18 53.28c-.92-.52-2.07.16-2.26.27l-3.96 2.26a1.53 1.53 0 0 0-1.98.05 1.57 1.57 0 0 0-.31 1.97c.38.65 1.17.93 1.87.66.7-.26 1.11-.99.98-1.73l3.95-2.26.02-.01c.26-.16.86-.41 1.14-.25.2.12.32.5.33 1.07v4.99c0 .47-.25.9-.65 1.13l-5.68 3.3c-.4.23-.89.23-1.3 0l-5.67-3.3c-.4-.24-.65-.66-.65-1.13v-6.61c0-.47.25-.9.65-1.13l5.14-2.99c.49.57 1.31.7 1.95.32.64-.38.92-1.17.67-1.87-.25-.71-.97-1.12-1.7-1-.73.12-1.28.76-1.29 1.51l-5.3 3.08c-.74.43-1.2 1.22-1.2 2.08v6.6c0 .86.46 1.65 1.2 2.08l5.68 3.3c.74.43 1.65.43 2.39 0l5.68-3.3c.74-.43 1.19-1.22 1.2-2.08v-4.8c.01-1.12-.29-1.86-.9-2.21z"></path></svg>
        `,
      };
    },
    // head: {
    //   // <!-- Open Graph data -->
    //   // <meta property="og:title" content="Title Here" />
    //   // <meta property="og:type" content="article" />
    //   // <meta property="og:url" content="http://www.example.com/" />
    //   // <meta property="og:image" content="http://example.com/image.jpg" />
    //   // <meta property="og:description" content="Description Here" />
    //   title: function () {
    //     return {
    //       inner: this.hero.name
    //     }
    //   },
    //   meta: [
    //     { name: 'description', content: this.hero.title, id: 'desc' },
    //     { property: 'og:title', content: this.hero.name },
    //     { property: 'og:description', content: this.hero.title }
    //   ]
    // },
    created() {
      this.allHeroes();
      this.allTimes(this.$route.params.heroUsername);
      this.allLinks(this.$route.params.heroUsername);
      /* TODO: Video dakikasına göre sorunun aktif olması kısmı video hızlandırıldığında
               sıkıntılı çalışıyor bu kısmın tekrar gözden geçirilmesi gerekli */
      setInterval(() => {
        const playerSecond = parseInt(this.player.j.currentTime, 10);
        this.times.forEach((time) => {
          if (playerSecond === time.second) {
            this.questionTime = time.second;
          }
        });
      }, 1000);
    },
    mounted() {
      this.includeJs('https://apis.google.com/js/platform.js');
      this.installDisqus();
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
      ...mapGetters('links', [
        'links',
      ]),
    },
    methods: {
      ...mapActions('heroes', [
        'allHeroes',
      ]),
      ...mapActions('times', [
        'allTimes',
      ]),
      ...mapActions('links', [
        'allLinks',
      ]),
      /* eslint-disable
         func-names,
         wrap-iife,
         space-before-function-paren,
         one-var,
         one-var-declaration-per-line */
      installDisqus() {
        (function() { // DON'T EDIT BELOW THIS LINE
          const d = document, s = d.createElement('script');
          s.src = 'https://dnomak-com.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();
        this.includeJs('//dnomak-com.disqus.com/count.js');
      },
      includeJs(jsFilePath) {
        const js = document.createElement('script');
        js.type = 'text/javascript';
        js.src = jsFilePath;
        document.body.appendChild(js);
      },
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
  .avatar--hero {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
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
  .graphcool-color {
    color: #27ae60;
  }
  .youtube {
    position: absolute;
    right: 8px;
    bottom: 0;
  }
</style>
