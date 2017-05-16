import merge from 'webpack-merge';

export function store(object) {
  return merge(object, {
    namespaced: true,
  });
}

export function storeMixin(name, object) {
  return {
    created() {
      this.$store.registerModule(name, store(object));
    },
    destroyed() {
      this.$store.unregisterModule(name);
    },
  };
}

export function titleSetter(subTitle) {
  return {
    mounted() {
      this.$store.dispatch('global/setSubtitle', this.$i18n.t(subTitle));
    },
  };
}

export function loadingModalMixin(refName = 'modal') {
  return {
    mounted() {
      this.$refs[refName].$on('hidden', (e) => {
        this.$refs[refName].visible = e.isOK === true;
        this.$refs[refName].body.classList.remove('modal-open');
      });
    },
    watch: {
      isLoading(value) {
        if (value === false) {
          this.$refs[refName].visible = false;
        }
      },
    },
    methods: {
      forceModalVisible: modal => modal.cancel(),
      hideModal() {
        this.$refs[refName].hide(true);
      },
    },
  };
}

export default {
  store,
  storeMixin,
  titleSetter,
  loadingModalMixin,
};
