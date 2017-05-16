<template>
  <div id="app">
    <img src="./assets/logo.png">
    <locale-switcher :label='$t("locale")'></locale-switcher>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      const locales = Object.keys(this.$i18n.messages);
      return {
        locales,
      };
    },
    watch: {
      locale() {
        this.$i18n.locale = this.locale;
      },
    },
    methods: {
      ...mapActions('i18n', ['set']),
    },
    computed: {
      ...mapGetters('i18n', ['locale']),
    },
    created() {
      this.$i18n.locale = this.$store.getters['i18n/locale'];
    },
  };
</script>

<style>
  body {
    text-align: center;
  }
  ul {
    display: inline-block;
  }
  ul li {
    text-align: left;
  }
</style>
