<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: () => import('@/layouts/CardContainerFixedLayout/CardContainerFixedLayout')
    }
  }
}
</script>
