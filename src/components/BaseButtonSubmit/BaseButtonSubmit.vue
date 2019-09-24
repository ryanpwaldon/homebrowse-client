<template>
  <button
    class="base-button-submit"
    :class="[design]"
    type="submit">
    <BaseButtonLoader v-if="loading"/>
    <span :style="{opacity: loading ? 0 : 1}">{{ text }}</span>
  </button>
</template>

<script>
import BaseButtonLoader from '@/components/BaseButtonLoader/BaseButtonLoader'
export default {
  components: {
    BaseButtonLoader
  },
  props: {
    text: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    design: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-submit {
  position: relative;
  color: var(--color-white-1);
  background: var(--color-black-2);
  font-weight: var(--font-weight-regular);
  border-radius: var(--border-radius-2);
  padding: var(--spacing-4);
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.base-button-loader {
  width: 1.2em;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.primary {
  color: var(--color-red-2);
  border: solid 1px var(--color-red-3);
  background: var(--color-red-4);
  font-weight: 500;
}
</style>
