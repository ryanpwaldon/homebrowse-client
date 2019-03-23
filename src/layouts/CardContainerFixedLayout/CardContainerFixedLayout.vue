<template>
  <div class="card-container-fixed-layout">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container-fixed-layout {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  padding: 9px;
}
.content {
  width: 100%;
  height: 100%;
  // border-radius: 20px;
  overflow: hidden;
}
</style>
