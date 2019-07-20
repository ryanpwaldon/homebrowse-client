<template>
  <div class="content">
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.content {
  min-height: 100%;
  min-width: 520px;
  align-self: flex-start;
  padding: var(--spacing-1);
}
</style>
