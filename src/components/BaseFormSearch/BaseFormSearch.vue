<template>
  <form
    class="base-form-search"
    @submit.prevent>
    <BaseFieldPlace
      @placeChanged="$store.commit('updateSearchLocation', $event)"
      placeholder="Search for a suburb"
    />
    <BaseFieldSelect
      @select="$store.commit('updateSearchListings', { listingType: $event })"
      selected="Sale"
      :options="[
        { value: 'Sale', display: 'Buy' },
        { value: 'Rent', display: 'Rent' },
        { value: 'Sold', display: 'Sold' }
      ]"
    />
    <BaseFieldSelect
      @select="
        $store.commit('updateSearchListings', {
          minBedrooms: map[$event][0],
          maxBedrooms: map[$event][1]
        })
      "
      selected="ANY"
      :options="[
        { value: 'ANY', display: 'ANY' },
        { value: 'S', display: 'S' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <BaseFieldSelect
      @select="
        $store.commit('updateSearchListings', {
          minBathrooms: map[$event][0],
          maxBathrooms: map[$event][1]
        })
      "
      selected="ANY"
      :options="[
        { value: 'ANY', display: 'ANY' },
        { value: '0', display: '0' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <BaseFieldSelect
      @select="
        $store.commit('updateSearchListings', {
          minCarspaces: map[$event][0],
          maxCarspaces: map[$event][1]
        })
      "
      selected="ANY"
      :options="[
        { value: 'ANY', display: 'ANY' },
        { value: '0', display: '0' },
        { value: '1', display: '1' },
        { value: '2', display: '2' },
        { value: '3', display: '3' },
        { value: '4', display: '4' },
        { value: '5+', display: '5+' }
      ]"
    />
    <BaseButtonSubmit
      @click.native="submit"
      text="Search"
    />
  </form>
</template>

<script>
import BaseFieldPlace from '@/components/BaseFieldPlace/BaseFieldPlace'
import BaseFieldSelect from '@/components/BaseFieldSelect/BaseFieldSelect'
import BaseButtonSubmit from '@/components/BaseButtonSubmit/BaseButtonSubmit'
export default {
  components: {
    BaseFieldPlace,
    BaseFieldSelect,
    BaseButtonSubmit
  },
  data () {
    return {
      map: {
        'ANY': ['', ''],
        'S': ['S', 'S'],
        '0': ['0', '0'],
        '1': ['1', '1'],
        '2': ['2', '2'],
        '3': ['3', '3'],
        '4': ['4', '4'],
        '5+': ['5', '']
      }
    }
  },
  methods: {
    async submit () {
      await this.$store.dispatch('updateResults')
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form-search {
  display: grid;
  grid-gap: var(--spacing-3);
  grid-auto-flow: column;
}
.base-field-place {
  width: 100%;
}
</style>
