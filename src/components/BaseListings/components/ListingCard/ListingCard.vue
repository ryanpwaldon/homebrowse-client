<template>
  <div class="listing-card">
    <div
      class="image"
      :style="{'background-image': `url(${listing.image})`}"
    />
    <div class="content">
      <div class="features">
        {{ listing.bedrooms }}
        {{ listing.bathrooms }}
        {{ listing.carspaces }}
      </div>
      <div class="price">{{listing.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listing: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.listing-card {
  background: var(--color-white);
  box-shadow: var(--box-shadow-1);
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
}
.content {
  padding: var(--spacing-2);
  display: flex;
  font-size: 14px;
  font-weight: bolder;
}
.features {
  color: var(--color-gray);
  text-align: left;
  flex-shrink: 0;
}
.price {
  text-align: right;
  width: 100%;
}
</style>
