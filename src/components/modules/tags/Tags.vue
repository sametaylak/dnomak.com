<template lang="pug">
  div
    c-header
    .wrap.xl-center.xl-ba-white.xl-bwb2.xl-bo-gray-200
      .col.xl-8-12.lg-1-1
        .xl-m40.md-m24
          input(type='text', v-model='keyword', @input='searchInTags', :placeholder='$t("globals.searchHero")', class='xl-fs18 xl-1-1 xl-db xl-h56 xl-ba-white xl-bw2 xl-bo-gray-200 xl-br8 xl-brr0 xl-ffscp xl-pl16 lg-pl8 md-pl16 pl-co-gray-500')
    .xl-px16
      .container
        .wrap.xl-3.xl-left.xl-gutter-16.lg-2.md-1.md-gutter
          .col(v-for='tag in AllTags' v-if='tag.heroes.length')
            .xl-mt24.xl-ffscp.xl-mb16.xl-fs24.xl-dib.xl-py8.xl-px16.xl-br8(:class='tag.name') {{ tag.name }}
            .xl-pr.xl-mb8
              .shadow
              .scroll
                div(v-for='hero in tag.heroes')
                  router-link.xl-ba-white.xl-bo-gray-200.xl-co-black-500.link.xl-bw2.xl-db.xl-oh.xl-cp.xl-tal.xl-br8.xl-bw2.xl-p8.xl-mb16(:to='{ name: "hero", params: { heroUsername: hero.username }}')
                    .wrap.xl-auto.xl-middle.xl-table
                      .col(style='width: 80px;')
                        .avatar--tags.xl-br8(:style="{ 'background-image': 'url(/static/img/heroes/' + hero.username + '.jpg)' }")
                      .col.xl-px16
                          .xl-mb4.xl-lh24
                            .wrap.xl-auto.xl-middle.xl-gutter-8
                              .col
                                .xl-dib.xl-fs20.xl-fw600 {{ hero.name }}
                          div.xl-fw400.xl-fs14.xl-lh24(v-if='hero.title')
                            |{{ hero.title }}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { cloneDeep, lowerCase } from 'lodash';

  export default {
    data() {
      return {
        AllTags: null,
        keyword: null,
      };
    },
    created() {
      this.allTags();
    },
    computed: {
      ...mapGetters('tags', [
        'tags',
      ]),
    },
    watch: {
      tags() {
        this.AllTags = this.tags;
      },
    },
    methods: {
      ...mapActions('tags', [
        'allTags',
      ]),
      searchInTags() {
        const keyword = lowerCase(this.keyword);
        let filteredTags = [];
        if (keyword) {
          this.tags.forEach((tag) => {
            const tempTag = cloneDeep(tag);
            tempTag.heroes = tempTag.heroes.filter(hero =>
              lowerCase(hero.name).includes(keyword) || lowerCase(hero.title).includes(keyword),
            );
            filteredTags.push(tempTag);
          });
        } else {
          filteredTags = this.tags;
        }

        this.AllTags = filteredTags;
      },
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
  .scroll {
    max-height: 400px;
    overflow: scroll;
    position: relative;
  }
  .shadow {
    position: absolute;
    z-index: 2;
    pointer-events: none;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 24px;
    background: -moz-linear-gradient(top, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 100%);
    background: -webkit-linear-gradient(top, rgba(245,245,245,0) 0%,rgba(245,245,245,1) 100%);
    background: linear-gradient(to bottom, rgba(245,245,245,0) 0%,rgba(245,245,245,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00f5f5f5', endColorstr='#f5f5f5',GradientType=0 );
  }
  .developer {
    background: #1094F6;
    color: #fff;
  }
  .designer {
    background: #12D469;
    color: #fff;
  }
  .youtuber {
    background: #F72848;
    color: #fff;
  }
  .clevel {
    background: #973CBD;
    color: #fff;
  }
  .junior {
    background: #FFCC00;
    color: #222;
  }
</style>
