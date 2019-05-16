<template>
  <component
    class="base-button-nav"
    :class="{ selected: selected || $route.path.includes(link) }"
    :is="link ? 'router-link' : 'div'"
    :to="link || ''">
    <BaseButton
      :text="text"
      :selected="selected || $route.path.includes(link)"
    />
  </component>
</template>

<script>
import BaseButton from '@/components/BaseButton/BaseButton'
export default {
  components: {
    BaseButton
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    selected: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-nav {
  position: relative;
}
.base-button-nav::after {
  content: '';
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: calc(-1 * var(--spacing-2));
  background: var(--color-transparent);
  border-radius: var(--border-radius-2);
  transition: background-color 120ms ease-in-out;
}
.selected::after {
  background: var(--color-black-2);
}
</style>
