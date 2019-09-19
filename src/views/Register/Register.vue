<template>
  <div class="register">
    <form @submit.prevent="onSubmit">
      <img class="logo" src="@/assets/img/logo-circle.svg">
      <BaseFieldInput
        class="input"
        label="Name"
        :value="name"
        type="text"
        placeholder="Tom Hanks"
        autocomplete="name"
        :required="true"
        @input="name = $event"
      />
      <BaseFieldInput
        class="input"
        label="Email"
        :value="email"
        type="email"
        placeholder="tom@hanks.com"
        autocomplete="username"
        :required="true"
        @input="email = $event"
      />
      <BaseFieldInput
        class="input"
        label="Password"
        :value="password"
        type="password"
        placeholder="At least 8 characters"
        autocomplete="new-password"
        :required="true"
        @input="password = $event"
      />
      <BaseButtonSubmit
        class="submit"
        text="Sign up to Homebrowse"
        :loading="loading"
      />
      <transition name="fade">
        <div class="auth-error" v-if="error">
          There was an issue creating your account. Your email may already be registered in our system.
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import BaseFieldInput from '@/components/BaseFieldInput/BaseFieldInput'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
import userService from '@/services/api/userService/userService'
import { mapState } from 'vuex'
export default {
  name: 'register',
  components: {
    BaseFieldInput,
    BaseButtonSubmit
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      loading: false,
      error: false
    }
  },
  computed: {
    user () {
      return {
        name: this.name,
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    async onSubmit () {
      this.error = false
      this.loading = true
      const accessToken = await userService.register(this.user)
        .then(res => res.data.access_token)
        .catch(() => (this.error = true))
      this.loading = false
      if (this.error) return
      this.$store.dispatch('user/updateAccessToken', accessToken)
      this.$router.push('/workspace')
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-5);
}
form {
  width: 256px;
  position: relative;
}
.logo {
  position: absolute;
  transform: translate(-50%, -100%);
  top: calc(-1 * var(--spacing-1));
  width: 40px;
  left: 50%;
}
.input {
  margin-bottom: var(--spacing-2);
}
.submit {
  margin-top: var(--spacing-1);
}
.auth-error {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--spacing-2);
  color: var(--color-red-2);
  line-height: 1.2em;
}
</style>
