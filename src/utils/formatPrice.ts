import * as numeral from 'numeral'

const formatPrice = value => {
  return numeral(value).format('0.0a')
}

export default formatPrice
