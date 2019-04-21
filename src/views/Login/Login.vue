<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <img class="logo" src="@/assets/img/logo-letter.svg">
      <BaseFieldEmail label="Email"/>
      <BaseFieldPassword label="Password"/>
      <div class="forgot-password">I forgot my password</div>
      <BaseButtonSubmit text="Login to Homebrowse"/>
    </form>
  </div>
</template>

<script>
import BaseFieldEmail from '@/components/BaseFieldEmail/BaseFieldEmail'
import BaseFieldPassword from '@/components/BaseFieldPassword/BaseFieldPassword'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
export default {
  name: 'login',
  components: {
    BaseFieldEmail,
    BaseFieldPassword,
    BaseButtonSubmit
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
  flex-direction: column;
}
form {
  width: 256px;
  position: relative;
}
.logo {
  position: absolute;
  transform: translate(-50%, -100%);
  top: calc(-1 * var(--spacing--1));
  width: 25px;
  left: 50%;
}
.base-field-email {
  margin-bottom: var(--spacing-2);
}
.base-field-password {
  margin-bottom: var(--spacing-4);
}
.forgot-password {
  font-size: 12px;
  color: var(--color-medium-gray);
  text-decoration: underline;
  margin-bottom: calc(var(--spacing-2) + 5px);
  display: inline-block;
  cursor: pointer;
}
</style>
