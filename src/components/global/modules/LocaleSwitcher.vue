<template lang="pug">
  div
    .xl-cp.xl-ffscp.xl-vam.xl-px8.xl-px8.xl-m8.xl-dib.xl-fs14.xl-lh24.xl-fw400.xl-br4.xl-co-gray-500(v-for='locale in locales', :key='locale', @click.stop.prevent='set(locale)', :class='$t("locale", locale) === $t("locale") ? "xl-ba-black-300" : ""')
      | {{ $t('locale', locale) }}
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
