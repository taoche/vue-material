<template>
  <div class="component-tabs">
    <ul class="tabs">
      <li class="tabs-item" v-for="item of tabs" track-by="$index"
        @click="itemClickHandle($index)"
        :class="{'active': activeTabIndex === $index}">{{item}}</li>
    </ul>
    <i class="indicator" :style="{'width': widthPercentage, 'left': leftPercentage}"></i>
  </div>
</template>

<script>
export default {
  name: 'component-tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTabIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    widthPercentage () {
      return `${100 / this.tabs.length}%`
    },
    leftPercentage () {
      return `${100 / this.tabs.length * this.activeTabIndex}%`
    }
  },
  methods: {
    itemClickHandle (index) {
      this.activeTabIndex = index

      this.$dispatch('component-tabs-changed', index)
    }
  }
}
</script>

<style lang="scss">
.component-tabs {
  position: relative;
  height: 48px;
  background: #3993e5;
  .tabs {
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    .tabs-item {
      cursor: pointer;
      color: rgba(#fff, .7);

      flex: 1;
      &.active {
        color: #fff;
      }
    }
  }
  .indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    transition: all .3s ease-out;
    background: #ffff86;
  }
}
</style>
