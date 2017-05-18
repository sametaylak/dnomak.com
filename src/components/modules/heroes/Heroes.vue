<template>
  <div>
    <h1>{{ $route.params.heroesTitle }}</h1>
    <div v-for="title in titles" v-if="title.name === $route.params.heroesTitle">
      <div v-for="hero in title.heroes">
        <router-link :to="{ name: 'hero', params: { heroUsername: hero.username }}">{{hero.name}}</router-link>
      </div>
    </div>
  </div>
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
