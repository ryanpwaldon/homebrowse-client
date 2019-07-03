<template>
  <div>
    <BaseLabel text="Properties"/>
    <template v-for="item in items">
      <BaseButton
        @click.native="onClick(item.id)"
        :selected="item.id === selectedId && $route.fullPath.includes('/workspace/property')"
        :text="item.displayAddress"
        :key="item.id">
        <ButtonOption
          :icon="require('@/assets/img/close.svg')"
          @click.native="$store.dispatch('entities/properties/deleteId', item.id)"
        />
      </BaseButton>
    </template>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton/BaseButton'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import ButtonOption from '@/components/BaseButton/components/ButtonOption/ButtonOption'
import BaseDivider from '@/components/BaseDivider/BaseDivider'
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    BaseButton,
    BaseLabel,
    ButtonOption
  },
  computed: {
    ...mapState('entities/properties', {
      selectedId: state => state.selectedId,
      items: state => state.ids.map(id => state.items[id])
    })
  },
  methods: {
    onClick (id) {
      this.$store.commit('entities/properties/setSelectedId', id)
      this.$router.push('/workspace/property')
    }
  }
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
