<template>
  <div class="nav">
    <BaseNavImproved>
      <template #section-left>
        <BaseLogo/>
      </template>
      <template #section-right>
        <BaseButtonNav text="Login" link="/login"/>
        <BaseButtonNav class="sign-up-button" text="Sign Up" link="/register"/>
      </template>
    </BaseNavImproved>
  </div>
</template>

<script>
import BaseNavImproved from '@/components/BaseNavImproved/BaseNavImproved'
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
import BaseLogo from '@/components/BaseLogo/BaseLogo'
export default {
  components: {
    BaseNavImproved,
    BaseButtonNav,
    BaseLogo
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
}
::v-deep .sign-up-button * {
  color: var(--color-black-2);
}
</style>
