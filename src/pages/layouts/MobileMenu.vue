<template>
  <slot>
    <div>
      <button @click="toggleMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <template v-if="isMenuOpen">
        <div class="overlay" @click="closeMenu">
          <sidebar />
        </div>
      </template>
    </div>
  </slot>
</template>

<script>
export default {
  props: [],
  emits: ['toggleMenu', 'closeMenu'],
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
    closeMenu() {
      this.$emit('closeMenu');
    },
  },
  computed: {
    isMenuOpen() {
      return this.$parent.isMenuOpen;
    },
  },
};
</script>

<style>
button {
  background: none;
}

.menu button i {
  margin-top: 30px;
  font-size: 20px;
  color: rgb(176, 175, 175);
}

.overlay {
  width: 20rem;

}
</style>
