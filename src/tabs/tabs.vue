<template>
  <div class="component-tabs">
    <ul class="tabs">
      <li class="tabs-item" v-for="item in tabs" track-by="$index"
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
  background: #3993e5;
  height: 48px;
  position: relative;
  .tabs {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    .tabs-item{
      flex: 1;
      color:rgba(#fff, .7);
      cursor: pointer;
      &.active{
        color:#fff;
      }
    }
  }

  .indicator {
    height: 2px;
    background: #ffff86;
    position: absolute;
    left:0;
    bottom: 0;
    transition: all .3s ease-out;
  }
}
</style>
