<template>
  <form
    class="base-form-listings-search"
    @submit.prevent>
    <BaseFieldInput
      v-model="form.search"
    />
  </form>
</template>

<script>
export default {
  components: {
    BaseFieldInput
  },
  data () {
    return {
      form: {
        search: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .base-form-listings-search {
// }
</style>
