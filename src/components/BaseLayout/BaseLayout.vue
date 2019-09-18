<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script>
const layouts = {
  BLANK: () => import('./partials/BlankLayout/BlankLayout'),
  FIXED: () => import('./partials/FixedLayout/FixedLayout'),
  APP: () => import('./partials/AppLayout/AppLayout')
}
export default {
  computed: {
    layout () {
      const layout = this.$route.matched.reduce((acc, route) => route.meta.layout || acc, null)
      return layouts[layout || 'BLANK']
    }
  }
}
</script>
