<template>
  <div id="app">
    <BaseLayout>
      <router-view/>
    </BaseLayout>
  </div>
</template>

<script>
import BaseLayout from '@/components/BaseLayout/BaseLayout'
export default {
  components: { BaseLayout }
}
</script>
