<template lang="pug">
  div
    div(v-for='tag in tags').xl-left
      .xl-fs24.xl-ba-black-500.xl-co-white.xl-ffscp.xl-br8.xl-p16.xl-dib.xl-mx16.xl-mb16.xl-mt40 {{ tag.name }}
      .wrap.xl-3.xl-left.xl-gutter-16.xl-outside-16
        .col(v-for='hero in tag.heroes')
          router-link.xl-db.xl-cp.xl-mb16.xl-tal.xl-br8.xl-bw2.xl-p24.lg-p16.xl-bo-gray-200.xl-ba-white.xl-co-black-500.ho-bo-blue-400.ho-ba-blue-300.ho-co-white(:to='{ name: "hero", params: { heroUsername: hero.username }}')
            .xl-mb8.xl-lh24
              .wrap.xl-auto.xl-middle.xl-gutter-8
                .col
                  .xl-dib.xl-fs20.xl-fw600 {{ hero.name }}
            div.xl-fw400.xl-fs14.xl-h16(v-if='hero.title')
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
