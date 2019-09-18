<template>
  <div class="base-nav-primary">
    <div class="section">
      <router-link to="/">
        <BaseLogo/>
      </router-link>
      <BaseButtonNav
        text="Workspace"
        link="/workspace"
      />
    </div>
    <div class="section">
      <BaseButtonNav
        @click.native="logout"
        text="Logout"
      />
    </div>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo'
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
export default {
  components: {
    BaseLogo,
    BaseButtonNav
  },
  methods: {
    logout () {
      this.$store.dispatch('user/removeAccessToken')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-nav-primary {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: var(--border-1);
  padding: var(--spacing-2) var(--spacing-1);
  background: var(--color-white-1);
}
.section {
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-2);
  align-items: center;
}
</style>
