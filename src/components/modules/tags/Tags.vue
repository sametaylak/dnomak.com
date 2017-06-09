<template lang="pug">
  div
    c-header
    .container.xl-mt24.xl-px24.md-mt16.sm-px16
      .wrap.xl-3.xl-left.xl-gutter-24.lg-2.md-1.md-gutter
        .col(v-for='tag in tags', :class='tag.name')
          div(v-for='hero in tag.heroes')
            router-link.link.xl-bw2.xl-db.xl-oh.xl-cp.xl-tal.xl-br8.xl-bw2.xl-p16.xl-mb24.md-mb16(:to='{ name: "hero", params: { heroUsername: hero.username }}')
              .wrap.xl-auto.xl-middle.xl-table
                .col(style='width: 80px;')
                  .avatar--tags.xl-br8(:style="{ 'background-image': 'url(/static/img/heroes/' + hero.username + '.jpg)' }")
                .col.xl-px16
                    .xl-mb4.xl-lh24.xl-mb8
                      .wrap.xl-auto.xl-middle.xl-gutter-8
                        .col
                          .xl-dib.xl-fs20.xl-fw600 {{ hero.name }}
                    div.xl-fw400.xl-fs14.xl-lh24(v-if='hero.title')
                      |{{ hero.title }}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    created() {
      this.allTags();
    },
    computed: {
      ...mapGetters('tags', [
        'tags',
      ]),
    },
    methods: {
      ...mapActions('tags', [
        'allTags',
      ]),
    },
  };
</script>

<style>
  .avatar--tags {
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .developer .link {
    border-color: #0A5994;
    background: #1094F6;
    color: #FFFFFF;
  }
  .designer .link {
    border-color: #0B7F3F;
    background: #12D469;
    color: #FFFFFF;
  }
  .youtuber .link {
    border-color: #94182B;
    background: #F72848;
    color: #FFFFFF;
  }
  .clevel .link {
    border-color: #5B2471;
    background: #973CBD;
    color: #FFFFFF;
  }
  .junior .link {
    border-color: #997A00;
    background: #FFCC00;
    color: #222222;
  }
</style>
