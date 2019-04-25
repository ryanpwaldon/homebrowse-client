import pick from 'lodash/pick'

const mergeSelect = (objects, properties) => {
  let merged = {}
  objects.forEach(obj => (merged = { ...obj, ...merged }))
  return pick(merged, properties)
}

export default mergeSelect
