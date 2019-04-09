<template>
  <form
    class="base-form-search"
    @submit.prevent>
    <div class="row">
      <BaseFieldPlace
        @placeChanged="updateSearch({ property: 'search.location', value: $event })"
        placeholder="Search for a suburb"
      />
    </div>
    <div class="row">
      <BaseFieldSelect
        @select="updateSearch({ property: 'search.bedrooms', value: $event })"
        :selected="search.bedrooms"
        :options="[
          { value: '', display: 'Any' },
          { value: '1', display: '1' },
          { value: '2', display: '2' },
          { value: '3', display: '3' },
          { value: '4', display: '4' },
          { value: '5+', display: '5+' }
        ]"
      />
      <BaseFieldSelect
        @select="updateSearch({ property: 'search.bathrooms', value: $event })"
        :selected="search.bathrooms"
        :options="[
          { value: '', display: 'Any' },
          { value: '0', display: '0' },
          { value: '1', display: '1' },
          { value: '2', display: '2' },
          { value: '3', display: '3' },
          { value: '4', display: '4' },
          { value: '5+', display: '5+' }
        ]"
      />
      <BaseFieldSelect
        @select="updateSearch({ property: 'search.carspaces', value: $event })"
        :selected="search.carspaces"
        :options="[
          { value: '', display: 'Any' },
          { value: '0', display: '0' },
          { value: '1', display: '1' },
          { value: '2', display: '2' },
          { value: '3', display: '3' },
          { value: '4', display: '4' },
          { value: '5+', display: '5+' }
        ]"
      />
    </div>
    <div class="row">
      <BaseFieldSelect
        @select="updateSearch({ property: 'search.listingType', value: $event })"
        :selected="search.listingType"
        :options="[
          { value: 'buy', display: 'Buy' },
          { value: 'rent', display: 'Rent' },
          { value: 'sold', display: 'Sold' }
        ]"
      />
    </div>
    <div class="row">
      <BaseButtonSubmit
        @click.native="submit"
        text="Search"
      />
    </div>
  </form>
</template>

<script>
import BaseFieldPlace from '@/components/BaseFieldPlace/BaseFieldPlace'
import BaseFieldSelect from '@/components/BaseFieldSelect/BaseFieldSelect'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
import { mapState } from 'vuex'
export default {
  components: {
    BaseFieldPlace,
    BaseFieldSelect,
    BaseButtonSubmit
  },
  computed: mapState({
    search: state => state.listingsStore.search
  }),
  methods: {
    updateSearch ({ property, value }) {
      this.$store.commit('updateSearch', { property, value })
    },
    async submit () {
      await this.$store.dispatch('fetchResults')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form-search {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
  width: 100%;
  max-width: 400px;
}
.row {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
}
</style>
