<template lang="pug">
  .xl-ba-black-500.xl-co-white
    .container
      .xl-tal.xl-py8.xl-px24
        .wrap.xl-middle.md-1.md-my8
          .col.xl-9-12.lg-5-7
            .wrap.xl-gutter-8.xl-middle.xl-auto.md-1.md-center
              .col
                router-link.xl-vam.xl-dib.xl-py8.xl-fs28.xl-ffscp.xl-cp.xl-fw600.xl-ls1(to='heroes')
                  .xl-dib.xl-co-red-300 H
                  .xl-dib.xl-co-green-300 e
                  .xl-dib.xl-co-blue-300 r
                  .xl-dib.xl-co-purple-300 o
                  .xl-dib.xl-co-yellow-300 e
                  .xl-dib.xl-co-blue-300 s
          // .col.xl-3-12.xl-tar.lg-2-7.md-tac
          //   .xl-cp.xl-ffscp.xl-vam.xl-px8.xl-px8.xl-m8.xl-dib.xl-fs14.xl-lh24.xl-fw400.xl-br4.xl-ba-black-300.xl-co-gray-500 Türkçe
            // locale-switcher(:label='$t("locale")')
            // div {{ $t("globals.heroes") }}
</template>
