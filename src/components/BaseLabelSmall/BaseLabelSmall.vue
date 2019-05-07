<template>
  <div class="base-label-small">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-label-small {
  font-size: 8px;
  color: var(--color-gray-1);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
