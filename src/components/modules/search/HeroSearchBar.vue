<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('tags', [
      'searchInTags',
    ]),
  },
};
</script>

<template lang="pug">
  div
    input.xl-1-1.xl-db.xl-h56.xl-ba-white.xl-bw2.xl-bo-gray-300.xl-br8.xl-pl16.xl-pr16.xl-mb24.pl-co-gray-500(@input="searchInTags($event.target.value)")
</template>
