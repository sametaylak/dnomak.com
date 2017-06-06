<template lang="pug">
  div
    locale-switcher(:label='$t("locale")')
    h1 {{ $t("globals.heroes") }}
      div(v-for='title in titles')
        h3 {{ title.name }}
        .wrap.xl-5.xl-center
          .col(v-for='hero in title.heroes')
            router-link(:to="{ name: 'hero', params: { heroUsername: hero.username }}") {{hero.name}}
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    created() {
      this.allTitles();
    },
    computed: {
      ...mapGetters('titles', [
        'titles',
      ]),
    },
    methods: {
      ...mapActions('titles', [
        'allTitles',
      ]),
    },
  };
</script>
