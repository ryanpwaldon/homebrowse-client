<template>
  <div class="dashboard-sidebar-suburbs">
    <template v-if="suburbs.length">
      <BaseLabel text="Suburbs"/>
      <BaseButton
        v-for="(suburb, index) in suburbs" :key="index"
        :selected="index === selectedSuburbIndex"
        :text="suburb.name"
        @click.native="updateSelectedSuburbIndex(index)">
        <BaseButtonOption :icon="require('@/assets/img/close.svg')" @click.native="removeSuburb(index)"/>
      </BaseButton>
    </template>
    <BaseButton
      text="Add a suburb"
      @click.native="$store.commit('ui/setSearchModalStatus', true)"
      style="color: var(--color-blue-1)"
    />
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import BaseButton from '@/components/BaseButton/BaseButton'
import BaseButtonOption from '@/components/BaseButton/components/BaseButtonOption/BaseButtonOption'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    BaseLabel,
    BaseButton,
    BaseButtonOption
  },
  computed: mapState({
    suburbs: state => state.suburbs.suburbs.map(suburb => suburb.details),
    selectedSuburbIndex: state => state.suburbs.selectedSuburbIndex
  }),
  methods: mapActions('suburbs', [
    'updateSelectedSuburbIndex',
    'removeSuburb'
  ])
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-2);
}
.base-button:not(:last-child) {
  margin-bottom: var(--spacing-4);
}
</style>
