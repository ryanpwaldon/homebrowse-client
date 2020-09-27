<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <img class="logo" src="@/assets/img/logo-circle.svg">
      <BaseFieldInput
        class="email"
        label="Email"
        :value="email"
        type="email"
        placeholder="tom@hanks.com"
        autocomplete="username"
        :required="true"
        @input="email = $event"
      />
      <BaseFieldInput
        class="password"
        label="Password"
        :value="password"
        type="password"
        placeholder="At least 8 characters"
        autocomplete="current-password"
        :required="true"
        @input="password = $event"
      />
      <div class="forgot-password">I forgot my password</div>
      <BaseButtonSubmit
        text="Login to Homebrowse"
        :loading="loading"
      />
      <transition name="fade">
        <div class="auth-error" v-if="loginFailed">
          Your login info isn't right. Try again, or reset your password.
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import BaseFieldInput from '@/components/BaseFieldInput/BaseFieldInput'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
import { mapState } from 'vuex'
export default {
  name: 'login',
  components: {
    BaseFieldInput,
    BaseButtonSubmit
  },
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  computed: mapState('user', [
    'loginFailed'
  ]),
  methods: {
    async onSubmit () {
      this.loading = true
      const { userProfile, accessToken } = await this.$store.dispatch('user/login', { email: this.email, password: this.password })
      if (accessToken) return this.$router.push('/workspace')
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
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
.email {
  margin-bottom: var(--spacing-2);
}
.password {
  margin-bottom: var(--spacing-5);
}
.forgot-password {
  font-size: 12px;
  color: var(--color-medium-gray);
  text-decoration: underline;
  margin-bottom: calc(var(--spacing-2) + 5px);
  display: inline-block;
  cursor: pointer;
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
