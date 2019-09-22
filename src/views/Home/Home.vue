<template>
  <div class="home">
    <Nav class="nav"/>
    <div class="content">
      <div class="main">
        <div class="title">
          All-in-one<br>
          real estate<br>
          platform
        </div>
        <div class="aside">
          <div class="subtitle">
            Search for Australian property<br>
            and analyse the market – in one tool.
          </div>
          <SubscriptionForm/>
        </div>
      </div>
      <BaseVideo
        class="video"
        :path="require('@/assets/vid/demo.mp4')"
      />
    </div>
  </div>
</template>

<script>
import BaseVideo from '@/components/BaseVideo/BaseVideo'
import SubscriptionForm from './partials/SubscriptionForm/SubscriptionForm'
import Nav from './partials/Nav/Nav'
export default {
  name: 'home',
  components: {
    BaseVideo,
    SubscriptionForm,
    Nav
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-gray-5);
}
.nav {
  position: sticky;
  top: 0;
}
.content {
  width: 100%;
  max-width: 60rem;
  padding: calc(var(--spacing-1) * 3) 0;
}
.main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: calc(var(--spacing-1) * 3);
}
.title {
  font-size: 4rem;
  color: var(--color-black-2);
  font-weight: 700;
  line-height: 1em;
  flex-shrink: 0;
  margin-right: calc(var(--spacing-1) * 2);
}
.aside {
  width: 100%;
  margin-bottom: 0.5rem;
}
.subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-2);
}
.video {
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
}
</style>
