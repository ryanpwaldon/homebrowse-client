<template>
  <button
    class="base-button-submit"
    :class="[design]"
    type="submit">
    <BaseButtonLoader v-if="loading"/>
    <span>{{ text }}</span>
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
  flex-shrink: 0;
  margin-right: var(--spacing-4);
}
.primary {
  color: var(--color-blue-2);
  background: var(--color-blue-4);
  border: solid 1px var(--color-blue-3)
}
</style>
