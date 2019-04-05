<template>
  <div class="base-button-submit">
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
.base-button-submit {
  color: var(--color-white);
  font-weight: var(--font-weight-regular);
  background: var(--color-dark-gray);
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
