<template>
<div class="component-slider">
  <div class="left" @click="clickLeftHandle" v-if="hasArrows"></div>

  <ul class="slider-box">
    <li class="slider-item" v-for="item in collections" track-by="$index">
      <img :src="item">
    </li>
  </ul>

  <div class="right" @click="clickRightHandle" v-if="hasArrows"></div>

  <div class="slider-dots" v-if="hasDots">
    <i v-for="item in collectionsLength"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-slider',
  props: {
    collections: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    hasDots: {
      type: Boolean,
      default: false
    },
    hasArrows: {
      type: Boolean,
      default: true
    }
  },
  data () {
    currentIndex: 0
  },
  computed: {
    collectionsLength () {
      return this.collections.length
    }
  },
  methods: {
    clickLeftHandle () {
      this.currentIndex = Math.max(currentIndex - 1, 0)
    },
    clickRightHandle () {
      this.currentIndex = Math.min(currentIndex + 1, collectionsLength)
    }
  }
}
</script>

<style lang="scss">
.component-slider {
  position: relative;
  .slider-box {
    position: absolute;
    .slider-item {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
