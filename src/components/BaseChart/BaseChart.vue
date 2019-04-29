<template>
  <div class="base-chart"/>
</template>

<script>
import Chart from 'chart.js';
export default {
  components: {},
  mounted () {
    this.chart = new Chart(this.$el, {})
  }
}
</script>
