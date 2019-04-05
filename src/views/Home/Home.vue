<template>
  <div class="home">
    <div class="container">
      <BaseNav/>
      <div class="content">
        <BaseFormSearch/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseFormSearch from '@/components/BaseFormSearch/BaseFormSearch'
export default {
  name: 'home',
  components: {
    BaseFormSearch,
    BaseNav
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.container {
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
}
.content {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: var(--spacing-1);
}
.base-form-search {
  width: 100%;
}
</style>
