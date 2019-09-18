<template>
  <form class="subscription-form" @submit.prevent="submit">
    <BaseFieldInput
      class="input"
      type="email"
      placeholder="Enter your email..."
      :value="email"
      @input="email = $event"
    />
    <BaseButtonSubmit
      class="button"
      text="Request access"
      :loading="loading"
      design="primary"
    />
  </form>
</template>

<script>
import BaseFieldInput from '@/components/BaseFieldInput/BaseFieldInput'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
export default {
  components: {
    BaseFieldInput,
    BaseButtonSubmit
  },
  data: () => ({
    email: '',
    success: true,
    loading: false
  }),
  methods: {
    submit () {
      this.loading = true
      setTimeout(() => {
        this.success = true
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-form {
  display: flex;
}
.input {
  width: 100%;
  margin-right: var(--spacing-4);
}
.button {
  width: auto;
}
</style>
