<template>
  <router-link
    class="base-button-nav"
    :to="link">
    <BaseButton
      :text="text"
      :selected="$route.path.includes(link)"
      :icon="icon"
      :icon-last="true"
    />
  </router-link>
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
      required: true
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.router-link-active::v-deep {
  position: relative;
}
.router-link-active::v-deep::after {
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: calc(-1 * var(--spacing-2));
  background: var(--color-black-1);
}
</style>
