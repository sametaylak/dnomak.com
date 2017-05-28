<template lang="pug">
  div
    h3 {{ label }}
    div(v-for='locale in locales', :key='locale')
      a(href='#', @click.stop.prevent='set(locale)') {{ $t('locale', locale) }}
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['label'],
    data() {
      const locales = Object.keys(this.$i18n.messages);
      return {
        locales,
      };
    },
    methods: mapActions('i18n', ['set']),
  };
</script>
