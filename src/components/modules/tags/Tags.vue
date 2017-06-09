<template lang="pug">
  div
    c-header
    .xl-mt16.xl-px16
      .container
        .wrap.xl-3.xl-left.xl-gutter-16.lg-2.md-1.md-gutter
          .col(v-for='tag in tags')
            div(v-for='hero in tag.heroes')
              router-link.xl-ba-white.xl-bo-gray-200.xl-co-black-500.link.xl-bw2.xl-db.xl-oh.xl-cp.xl-tal.xl-br8.xl-bw2.xl-p8.xl-mb16(:to='{ name: "hero", params: { heroUsername: hero.username }}')
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
</style>
