<template>
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
        design="primary"
      />
      <div class="altcopy">
        We'll let you know when a position becomes available.
      </div>
    </form>
    <BasePrompt
      class="prompt"
      text="Thanks for your interest! We'll let you know when a position becomes available."
      v-else
    />
  </transition>
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
.form {
  width: 100%;
  display: flex;
  position: relative;
}
.sm .form {
  flex-direction: column;
}
.input {
  margin-right: var(--spacing-4);
}
.sm .input {
  margin-right: 0;
  margin-bottom: var(--spacing-4);
}
.button {
  width: auto;
}
.altcopy {
  line-height: 1.3;
  color: var(--color-gray-1);
  margin-top: var(--spacing-4);
}
.lg .altcopy {
  position: absolute;
  top: 100%;
  left: 0;
}
.prompt {
  width: auto;
}
</style>
