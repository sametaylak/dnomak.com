<template lang="pug">
  div
    h1 {{ $route.params.titleUrl }}
    div(v-for='title in titles', v-if='title.url === $route.params.titleUrl')
      div(v-for='hero in title.heroes')
        router-link(:to="{ name: 'hero', params: { heroUsername: hero.username }}") {{hero.name}}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters('titles', [
        'titles',
      ]),
    },
    mounted() {
      this.getAllTitles();
    },
    methods: {
      ...mapActions('titles', [
        'getAllTitles',
      ]),
    },
  };
</script>
