<template>
<div class="component-slider">
  <div class="left"
    v-if="hasArrows"
    @click="clickLeftHandle" ></div>

  <ul class="slider-box">
    <li class="slider-item" v-for="item of collections" track-by="$index">
      <img :src="item">
    </li>
  </ul>

  <div class="right"
    v-if="hasArrows"
    @click="clickRightHandle"></div>

  <div class="slider-dots" v-if="hasDots">
    <i v-for="item of collectionsLength" track-by="$index"></i>
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
    },
    onChange: Function
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    collectionsLength () {
      return this.collections.length
    }
  },
  events: {
    handleChang () {
      this.onChange && this.onChange(this.currentIndex)
    }
  },
  methods: {
    clickLeftHandle () {
      this.currentIndex = Math.max(this.currentIndex - 1, 0)
      this.$emit('handleChang')
    },
    clickRightHandle () {
      this.currentIndex = Math.min(this.currentIndex + 1, this.collectionsLength)
      this.$emit('handleChang')
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
