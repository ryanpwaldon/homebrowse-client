<template>
  <div class="home" :class="[$mq]">
    <Nav class="nav"/>
    <div class="container">
      <div class="content">
        <div class="header">
          <div class="title">
            Search homes<br>
            the easy way
          </div>
          <div class="side" :style="{width: !$store.state.ui.registrationsEnabled ? '100%' : 'auto' }">
            <div class="subtitle">
              Save time and gain insights with<br>
              our all-in-one tool for Australian property.
            </div>
            <div class="cta-container" v-if="$store.state.ui.registrationsEnabled">
              <router-link class="button" to="/register">
                <BaseButtonSubmit design="primary" text="Get free beta access"/>
              </router-link>
              <div class="altcopy">
                Limited positions available.<br>
                Sign up now for guaranteed access.
              </div>
            </div>
            <SubscriptionForm class="subscription-form" v-else/>
          </div>
        </div>
        <Demo/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
import SubscriptionForm from './partials/SubscriptionForm/SubscriptionForm'
import Nav from './partials/Nav/Nav'
import Demo from './partials/Demo/Demo'
export default {
  name: 'home',
  components: {
    BaseButtonSubmit,
    SubscriptionForm,
    Demo,
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
.sm ::v-deep br {
  display: none;
}
.nav {
  position: sticky;
  top: 0;
}
.container {
  width: 100%;
  display: flex;
  padding: 0 var(--spacing-1);
  justify-content: center;
}
.content {
  width: 100%;
  max-width: 60rem;
  padding: calc(var(--spacing-1) * 3) 0;
}
.sm .content {
  padding: calc(var(--spacing-1) * 1.5) 0 calc(var(--spacing-1) * 3);
}
.header {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: calc(var(--spacing-1) * 3);
}
.sm .header {
  align-items: center;
  flex-direction: column;
  margin-bottom: calc(var(--spacing-1) * 1.5);
  * {
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
}
.title {
  font-size: 4rem;
  color: var(--color-black-1);
  margin-right: var(--spacing-1);
  font-weight: 700;
  line-height: 1.1;
  flex-shrink: 0;
}
.sm .title {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.lg .side {
  padding-top: 0.9rem;
}
.subtitle {
  font-size: 1.3rem;
  margin-bottom: 0.9rem;
  line-height: 1.5;
}
.sm .subtitle {
  font-size: 1.2em;
  margin-bottom: 1rem;
}
.cta-container {
  display: flex;
  align-items: center;
}
.sm .cta-container {
  flex-direction: column;
}
.button {
  width: auto;
  margin-right: var(--spacing-2);
}
.sm .button {
  width: 100%;
  margin-bottom: 1rem;
}
.altcopy {
  color: var(--color-gray-1);
  line-height: 1.3;
}
</style>
