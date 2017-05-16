<template lang="pug">
  header
    b-navbar(toggleable, type='inverse', variant='inverse')
      b-nav-toggle(target='nav_collapse')
      b-link.navbar-brand(to='/')
        c-logo(fill='#fff', height='25', :type='logoType', :title='$t("globals.composto")')
        span.module {{ module }}
      b-collapse#nav_collapse(is-nav)
        b-nav.ml-auto(is-nav-bar)
          b-nav-item(to='/switch', v-if='loggedIn') {{$t("globals.switch_property")}}
          b-nav-item-dropdown(right-alignment, v-if='loggedIn')
            template(slot='text')
              span {{ fullName }}
            b-dropdown-item(to='/profile') {{$t("globals.profile")}}
            b-dropdown-item(@click='logout') {{$t("globals.signout")}}
          c-locale-switcher(:label='$t("locale")', right-alignment)
          c-dev-api-switcher(right-alignment)
    slot
</template>

<script>
  import router from '@/router';
  import { isDevelopment } from '@/utils';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        module: 'CLOUD',
      };
    },
    methods: {
      ...mapActions('session', ['destroy']),
      ...mapActions('i18n', ['set']),
      logout() {
        this.destroy().then(() => router.replace('/login'));
      },
    },
    computed: {
      ...mapGetters('session', [
        'currentUser',
        'loggedIn',
      ]),
      fullName() {
        if (!this.currentUser) {
          return '';
        }
        return `${this.currentUser.first_name} ${this.currentUser.last_name}`;
      },
      logoType() {
        return this.isDevelopment ? 'shorter-test' : 'shorter';
      },
      isDevelopment: () => isDevelopment(),
    },
  };
</script>

<style scoped>
  header {
    margin-bottom: 20px;
  }
  .module {
    text-transform: uppercase;
    font-size: 0.6rem;
    letter-spacing: 0.15rem;
    display: inline-block;
    padding: 0.22rem;
    border-radius: 3px;
    border: 1px solid #fff;
    margin: 0.2rem 0.3rem;
    vertical-align: middle;
    opacity: 0.5;
    font-weight: bold;
  }
  .module-status {
    margin-left: 5px;
  }
</style>
