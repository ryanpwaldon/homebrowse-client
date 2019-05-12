<template>
  <div class="base-property-card">
    <div
      class="image"
      :style="{'background-image': `url(${property.image})`}"
    />
    <div class="content">
      <div class="features">
        {{ property.bedrooms }}
        {{ property.bathrooms }}
        {{ property.carspaces }}
      </div>
      <div class="price">{{property.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-property-card {
  background: var(--color-white);
  box-shadow: var(--box-shadow-3);
  border-radius: var(--border-radius-1);
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}
.image {
  width: 100%;
  padding-top: calc(100% / 3 * 2);
  height: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  filter: saturate(0.75);
}
.content {
  padding: var(--spacing-2);
  display: flex;
  font-size: 14px;
  font-weight: var(--font-weight-bold);
}
.features {
  color: var(--color-gray-1);
  text-align: left;
  flex-shrink: 0;
}
.price {
  text-align: right;
  width: 100%;
}
</style>
