<template>
  <div class="base-search">
    <div class="input-container">
      <img class="icon" src="@/assets/img/search-tall.svg">
      <input
        ref="input"
        @input="onInput"
        placeholder="Search for a suburb"
        @keydown.enter="submit"
        @keydown.down="updateFocusIndex('+')"
        @keydown.up="updateFocusIndex('-')"
        type="text">
    </div>
    <div class="suggestions-container">
      <div
        class="suggestion-item"
        :class="{'focused': index === focusIndex}"
        v-for="(suggestion, index) in suggestions"
        @mouseenter="focusIndex = index"
        @click="submit"
        :key="index">
        {{ suggestion.longName }}
      </div>
    </div>
  </div>
</template>

<script>
import autocompleteService from '@/services/autocompleteService/autocompleteService'
import debounce from 'lodash/debounce'
export default {
  mounted () {
    this.$refs['input'].focus()
  },
  data () {
    return {
      suggestions: [],
      focusIndex: 0
    }
  },
  methods: {
    onInput: debounce(async function (e) {
      this.suggestions = await autocompleteService.findAll(e.target.value)
      this.focusIndex = 0
    }, 0),
    submit () {
      const item = this.suggestions[this.focusIndex]
      if (!item) return
      if (!this.$route.fullPath.includes('/workspace/suburb')) this.$router.push('/workspace/suburb')
      this.$store.commit('ui/setSearchModalStatus', false)
      this.$store.dispatch('entities/suburbs/addItem', item)
    },
    updateFocusIndex (direction) {
      if (direction === '+') {
        this.focusIndex !== this.suggestions.length - 1
          ? this.focusIndex++
          : this.focusIndex = 0
      }
      if (direction === '-') {
        this.focusIndex !== 0
          ? this.focusIndex--
          : this.focusIndex = this.suggestions.length - 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-search {
  width: 540px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-2);
  overflow: hidden;
}
.input-container {
  font-weight: var(--font-weight-regular);
  background: var(--color-gray-5);
  padding: var(--spacing-2);
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
}
.icon {
  height: 1em;
  margin-right: var(--spacing-4);
}
input {
  font-size: inherit;
  color: var(--color-black-2);
  width: 100%;
}
.suggestions-container {
  height: 100%;
  background: white;
  padding-top: var(--spacing-5);
}
.suggestion-item {
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-3) var(--spacing-2);
  cursor: pointer;
  &.focused {
    background: var(--color-hover);
  }
}
</style>
