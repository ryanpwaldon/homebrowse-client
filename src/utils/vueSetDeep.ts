import Vue from 'vue'

const vueSetDeep = (obj, props, value) => {
  let propsArr
  if (Array.isArray(props)) {
    propsArr = props
  } else {
    propsArr = props.split('.')
  }
  const prop = propsArr.shift()
  if (!obj[prop]) {
    Vue.set(obj, prop, {})
  }
  if (!propsArr.length) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      obj[prop] = { ...obj[prop], ...value }
    } else {
      obj[prop] = value
    }
    return
  }
  vueSetDeep(obj[prop], propsArr, value)
}

export default vueSetDeep
