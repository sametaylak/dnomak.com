<template>
  <div class="hello">
    <h1>{{$t("globals.heroes")}}</h1>
    <div v-for="title in titles">
     <a href="#" @click.stop.prevent>{{title.name}}</a>
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
