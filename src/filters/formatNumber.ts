import Vue from 'vue'
import * as numeral from 'numeral'

Vue.filter('formatNumber', (number, format) => {
  switch (format) {
    case 'price':
      return formatPrice(number, true)
    case 'priceNoSymbol':
      return formatPrice(number, false)
    case 'percent':
      return numeral(number).format('%0.[00]')
    case 'number':
      return numeral(number).format('0,0')
    default: return number
  }
})

const formatPrice = (number, displaySymbol) => {
  const instance = numeral(number)
  const symbol = displaySymbol ? '$' : ''
  if (instance.value() >= 1000000) return instance.format(symbol + '0.[00]a')
  if (instance.value() >= 100000) return instance.format(symbol + '0.[0]a')
  if (instance.value() >= 10000) return instance.format(symbol + '0.[0]a')
  if (instance.value() >= 1000) return instance.format(symbol + '0.[00]a')
  if (instance.value() >= 0) return instance.format(symbol + '0')
}
