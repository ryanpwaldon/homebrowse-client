<template>
  <router-link
    class="base-button-nav"
    :to="link">
    <BaseButton
      :text="text"
      :selected="$route.path === link"
      :icon="icon"
      :icon-last="true"
    />
  </router-link>
</template>

<script>
import BaseButton from '@/components/BaseButton/BaseButton'
export default {
  components: {
    BaseButton
  },
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    }
  }
}
</script>
