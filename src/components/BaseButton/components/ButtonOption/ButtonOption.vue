<template>
  <div class="button-option" @click.stop>
    <img :src="icon">
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button-option {
  position: relative;
  cursor: pointer;
  z-index: 0;
  img {
    height: 0.8em;
    display: block;
  }
}
.button-option::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(-1 * var(--spacing-6));
  left: calc(-1 * var(--spacing-6));
  padding: var(--spacing-6);
  border-radius: var(--border-radius-2);
  transition: background-color 120ms ease-in-out;
  z-index: -1;
}
.button-option:hover::before {
  background: var(--color-hover);
}
</style>
