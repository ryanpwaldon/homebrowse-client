import Vue from 'vue'
import * as numeral from 'numeral'

Vue.filter('formatNumber', (number, format) => {
  switch (format) {
    case 'price':
      switch (true) {
        case number > 1000000:
          return numeral(number).format('$0.00a')
        case number > 100000:
          return numeral(number).format('$0a')
        case number > 1000:
          return numeral(number).format('$0.00a')
        default:
          return numeral(number).format('$0')
      }
    case 'percentage':
      return numeral(number).format('%0.00')
    default: return number
  }
})
