<template lang="pug">
  div
    locale-switcher(:label='$t("locale")')
    h1 {{ $t("globals.heroes") }}
    div(v-for='title in titles')
      router-link(:to='{ name: "heroes", params: { titleUrl: title.url }}') {{ title.type }}
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
