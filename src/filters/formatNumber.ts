import Vue from 'vue'
import * as numeral from 'numeral'

Vue.filter('formatNumber', (number, format) => {
  switch (format) {
    case 'price':
      return formatPrice(number, true)
    case 'priceNoSymbol':
      return formatPrice(number, false)
    case 'percentage':
      return numeral(number).format('%0.00')
    default: return number
  }
})

const formatPrice = (number, displaySymbol) => {
  const symbol = displaySymbol ? '$' : ''
  if (number >= 1000000) return numeral(number).format(`${symbol}0.[0]a`)
  if (number >= 100000) return numeral(number).format(`${symbol}0a`)
  if (number >= 1000) return numeral(number).format(`${symbol}0.[00]a`)
  return numeral(number).format(`${symbol}0`)
}

// Vue.filter('formatNumber', (number, format) => {
//   switch (format) {
//     case 'price':
//       switch (true) {
//         case number > 1000000:
//           return numeral(number).format('$0,0')
//         case number > 100000:
//           return numeral(number).format('$0,0')
//         case number > 1000:
//           return numeral(number).format('$0,0')
//         default:
//           return numeral(number).format('$0,0')
//       }
//     case 'percentage':
//       return numeral(number).format('%0.00')
//     default: return number
//   }
// })
