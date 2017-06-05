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
  import { mapGetters, mapActions } from 'vuex';

  export default {
    mounted() {
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
