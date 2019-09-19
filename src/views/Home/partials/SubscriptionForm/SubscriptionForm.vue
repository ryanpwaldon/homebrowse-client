<template>
  <div class="subscription-form">
    <transition name="fade" mode="out-in">>
      <form class="form" @submit.prevent="submit" v-if="!submitted">
        <BaseFieldInput
          class="input"
          type="email"
          placeholder="Enter your email..."
          :value="email"
          @input="email = $event"
        />
        <BaseButtonSubmit
          class="button"
          text="Request beta access"
          :loading="loading"
        />
      </form>
      <BasePrompt
        class="prompt"
        text="You're on the list! We'll notify you when a position becomes available."
        v-else
      />
    </transition>
  </div>
</template>

<script>
import BasePrompt from '@/components/BasePrompt/BasePrompt'
import BaseFieldInput from '@/components/BaseFieldInput/BaseFieldInput'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
import subscriberService from '@/services/api/subscriberService/subscriberService'
export default {
  components: {
    BasePrompt,
    BaseFieldInput,
    BaseButtonSubmit
  },
  data: () => ({
    email: '',
    submitted: false,
    loading: false
  }),
  methods: {
    async submit () {
      this.loading = true
      await subscriberService.post(this.email)
      setTimeout(() => {
        this.submitted = true
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription-form {
  display: flex;
}
.form {
  width: 100%;
  display: flex;
  max-width: 30rem;
}
.input {
  margin-right: var(--spacing-4);
}
.button {
  width: auto;
}
.prompt {
  width: auto;
}
</style>
