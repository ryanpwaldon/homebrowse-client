<template>
  <div class="statistic-card">
    <div class="content">
      <div class="value">{{ formattedValue }}</div>
      <div class="label">{{ label }}</div>
    </div>
  </div>
</template>

<script>
import numeral from 'numeral'
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedValue () {
      switch (this.type) {
        case 'price':
          return this.formatPrice(this.value)
        case 'number':
          return this.value
        case 'percentage':
          return this.value + '%'
        default:
          return 'ERROR'
      }
    }
  },
  methods: {
    formatPrice (number) {
      let format
      switch (true) {
        case (number < 1000):
          format = '$0a'
          break
        case (number < 100000):
          format = '$0.0a'
          break
        case (number < 1000000):
          format = '$0a'
          break
        case (number < 1000000000):
          format = '$0.0a'
          break
      }
      return numeral(this.value).format(format)
    }
  }
}
</script>

<style lang="scss" scoped>
.statistic-card {
  background: var(--color-white);
  box-shadow: var(--box-shadow-1);
  border-radius: var(--border-radius-1);
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.value {
  font-size: 36px;
  margin-bottom: var(--spacing-2);
  font-weight: var(--font-weight-bold);
}
.label {
  font-size: 12px;
  text-transform: uppercase;
  color: var(--color-gray);
  font-weight: var(--font-weight-bold);
}
</style>
