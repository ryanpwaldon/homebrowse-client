<template>
  <div class="dashboard-sidebar-suburbs-button">
    <BaseButton
      :text="text"
      :selected="selected"
    />
    <div class="close"><img src="@/assets/img/close.svg"></div>
  </div>
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
    selected: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar-suburbs-button {
  position: relative;
  &:hover .close {
    opacity: 1;
  }
}
.close {
  position: absolute;
  display: block;
  right: 0;
  top: 0;
  width: 1.4em;
  height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-2);
  transition: background-color 120ms ease-in-out, opacity 120ms ease-in-out;
  pointer-events: none;
  cursor: pointer;
  opacity: 0;
  img {
    height: 60%;
  }
  &:hover {
    background: var(--color-hover);
  }
}
</style>
