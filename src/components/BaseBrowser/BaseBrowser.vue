<template>
  <div class="base-browser">
    <div class="container">
      <div class="header">
        <div class="icon-container">
          <div v-for="n in 3" :key="n" class="icon"/>
        </div>
        <div class="input"/>
      </div>
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  border-radius: 5px;
  background: var(--color-white-1);
  border: var(--border-1);
}
.header {
  height: 34px;
  width: 100%;
  background: #eef1f5;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.icon-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
}
.icon {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #9fadb6;
}
.input {
  width: 100%;
  height: 60%;
  border-radius: 3px;
  background: var(--color-white-1);
}
.content {
  position: relative;
  overflow: hidden;
}
</style>
