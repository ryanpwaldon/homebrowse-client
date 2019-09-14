<template>
  <div class="base-description-expandable">
    <div class="full" v-html="text" v-if="expanded"/>
    <div class="truncated" v-html="text" v-else/>
    <BaseButton class="button" :text="`Read ${expanded ? 'less' : 'more'}`" @click.native="expanded = !expanded"/>
  </div>
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
    }
  },
  data: () => ({
    expanded: false
  })
}
</script>

<style lang="scss" scoped>
.base-description-expandable {
  font-size: 14px;
  color: var(--color-black-2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.truncated {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.full {
  white-space: pre-line;
}
.button {
  margin-top: var(--spacing-4);
}
</style>
