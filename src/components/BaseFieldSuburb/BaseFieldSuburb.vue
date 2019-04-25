<template>
  <div class="base-field-suburb">
    <div class="input-container">
      <img class="icon" src="@/assets/img/search-tall.svg">
      <input
        class="input"
        ref="input"
        @input="onInput"
        :placeholder="placeholder"
        @keydown.enter="onEnter"
        @keydown.down="updateFocusedIndex('+')"
        @keydown.up="updateFocusedIndex('-')"
        type="text"
      >
    </div>
    <div class="suggestions-container">
      <div
        class="suggestion-item"
        :class="{'focused': index === focusedIndex}"
        v-for="(suggestion, index) in suggestions"
        :key="index">
        {{ suggestion.title }}
      </div>
    </div>
    <div class="attribution" ref="attribution"/>
  </div>
</template>

<script>
import AutocompleteService from '@/services/autocompleteService/autocompleteService'
import debounce from 'lodash/debounce'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$refs['input'].focus()
    this.autocompleteService = new AutocompleteService(this.$refs['attribution'])
  },
  data () {
    return {
      suggestions: [],
      focusedIndex: 0
    }
  },
  methods: {
    onInput: debounce(async function (e) {
      this.suggestions = await this.autocompleteService.findAll(e.target.value)
      this.focusedIndex = 0
    }, 0),
    onEnter (e) {
      e.preventDefault()
      this.$emit('suburb-selected', this.autocompleteService.findOne(this.suggestions[this.focusedIndex].id))
    },
    updateFocusedIndex (direction) {
      if (direction === '+') {
        this.focusedIndex !== this.suggestions.length - 1
          ? this.focusedIndex++
          : this.focusedIndex = 0
      }
      if (direction === '-') {
        this.focusedIndex !== 0
          ? this.focusedIndex--
          : this.focusedIndex = this.suggestions.length - 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-field-suburb {
  width: 540px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-3);
  overflow: hidden;
}
.input-container {
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-2-5) var(--spacing-2);
  background: var(--color-light-gray-2);
  line-height: normal;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
}
.icon {
  height: 1em;
  margin-right: var(--spacing-3);
}
.input {
  font-size: inherit;
  width: 100%;
}
.suggestions-container {
  height: 100%;
  background: white;
  padding-top: var(--spacing-4);
}
.suggestion-item {
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-2-5) var(--spacing-2);
  &.focused {
    background: var(--color-hover);
  }
}
</style>
