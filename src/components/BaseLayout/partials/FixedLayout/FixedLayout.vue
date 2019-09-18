<template>
  <div class="fixed-layout">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.fixed-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
