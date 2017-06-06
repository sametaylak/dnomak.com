<template lang="pug">
  #app
    router-view
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
    created() {
      this.$i18n.locale = this.$store.getters['i18n/locale'];
    },
    watch: {
      locale() {
        this.$i18n.locale = this.locale;
      },
    },
    computed: {
      ...mapGetters('i18n', ['locale']),
    },
    methods: {
      ...mapActions('i18n', ['set']),
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
