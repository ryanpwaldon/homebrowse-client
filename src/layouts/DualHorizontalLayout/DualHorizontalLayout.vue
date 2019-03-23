<template>
  <div class="dual-horizontal-layout" ref="dual-horizontal-layout">
    <div class="a container" ref="a">
      <component :is="a"/>
    </div>
    <div class="adjustor-container" ref="adjustor-container" @mousedown="mouseDownHandler">
      <div class="adjustor-item"/>
    </div>
    <div class="b container">
      <component :is="b"/>
    </div>
    <div class="clear-panel" v-if="isResizing"/>
  </div>
</template>

<script>
export default {
  props: {
    a: {
      type: Function,
      required: true
    },
    b: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      isResizing: false
    }
  },
  methods: {
    mouseDownHandler () {
      this.isResizing = true
      document.addEventListener('mousemove', this.mouseMoveHandler)
      document.addEventListener('mouseup', () => {
        this.isResizing = false
        document.removeEventListener('mousemove', this.mouseMoveHandler)
      }, { once: true })
    },
    mouseMoveHandler (e) {
      this.$refs['a'].style.width = e.clientX - this.$refs['dual-horizontal-layout'].offsetLeft - this.$refs['adjustor-container'].offsetWidth / 2 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.dual-horizontal-layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.container {
  min-width: 200px;
  max-width: calc(100% - 200px);
}
.a.container {
  width: 50%;
  height: 100%;
  background: var(--color-white);
  flex-shrink: 0;
}
.b.container {
  width: 50%;
  height: 100%;
  background: var(--color-white);
  flex-grow: 1;
}
.adjustor-container {
  width: 9px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;
  &:hover .adjustor-item {
    background-color: var(--color-light-gray);
  }
}
.adjustor-item {
  width: calc(100% / 3);
  padding-top: 700%;
  background-color: var(--color-gray);
  border-radius: 100px;
  transition: background-color 0.25s ease-in-out;
}
.clear-panel {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  cursor: ew-resize;
  z-index: 1;
}
</style>
