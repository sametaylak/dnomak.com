<i18n>
  en:
    title: Not Found!
    message: The page you are looking for is not found.
  tr:
    title: Bulamadık!
    message: Aradığınız sayfa bulunamadı.
</i18n>

<template lang="pug">
  div
    h1 {{ $t('title') }}
    h2 {{ $t('message') }}
</template>
