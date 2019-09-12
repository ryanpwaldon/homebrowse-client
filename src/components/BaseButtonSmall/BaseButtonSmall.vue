<template>
  <div class="base-button-small" :style="{ flexDirection: iconPosition === 'left' ? 'row' : 'row-reverse' }">
    <img class="icon" :src="icon" :style="{ [iconPosition === 'left' ? 'margin-right' : 'margin-left']: 'var(--spacing-5)' }" v-if="icon">
    <div class="text" v-if="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-small {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-black-2);
  font-weight: var(--font-weight-medium);
  background: var(--color-white-1);
  padding: 0 var(--spacing-4);
  height: calc(var(--spacing-5) * 2 + 1em);
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow-1);
}
.icon {
  height: 1.3em;
}
</style>
