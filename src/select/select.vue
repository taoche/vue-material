<template>
<div class="component-select">
  <div class="select-input" @click.stop="showDropdownList">
    {{selected}}
    <i class="select-triangle" :class="{'open': showList}">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path fill="currentColor" d="M3 2l10 6-10 6z"></path>
      </svg>
    </i>
  </div>
  <slot name="selectList">
    <div class="list-box shadow--2dp"
      v-show="showList"
      transition="select-list">
      <coponent-search class="select-search-bar"
        v-if="filterable"
        :on-key-down="onSearchKeyDown"
        :query-text.sync="queryText"
        @click.stop></coponent-search>
      <ul>
        <li
          v-for="item of options | filterBy queryText" track-by="$index"
          :class="{'active': $index === activeIndex}"
          @click="handleSelect(item, $index)">{{item.label}}</li>
      </ul>
    </div>
  </slot>
</div>
</template>

<script>
import CoponentSearch from '../search/search'

const KEY_PRESS_UP = 38
const KEY_PRESS_DOWN = 40
const KEY_PRESS_ENTER = 13

export default {
  name: 'component-select',
  components: {
    'coponent-search': CoponentSearch
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    selected: String,
    onSelect: Function
  },
  data () {
    return {
      activeIndex: 0,
      showList: false,
      queryText: ''
    }
  },
  computed: {
    filteredValues () {
      return this.$options.filters.filterBy(this.options, this.queryText, 'label')
    }
  },
  created () {
    this.activeIndex = this.findActiveIndex()
  },
  ready () {
    document.addEventListener('click', (evnet) => {
      this.showList = false
    })
  },
  methods: {
    findActiveIndex () {
      return this.options.findIndex(item => item.value === this.selected)
    },
    handleSelect (item, index) {
      this.selected = item.value
      this.activeIndex = this.findActiveIndex()
      this.showList = false
      this.queryText = ''

      this.onSelect && this.onSelect(this.selected)
    },
    showDropdownList () {
      this.showList = !this.showList
    },
    onSearchKeyDown (query, event) {
      let keyCode = event.keyCode

      switch (keyCode) {
        case KEY_PRESS_UP:
          this.activeIndex = Math.max(this.activeIndex - 1, 0)
          break
        case KEY_PRESS_DOWN:
          this.activeIndex = Math.min(this.activeIndex + 1, this.filteredValues.length - 1)
          break
        case KEY_PRESS_ENTER:
          this.selected = this.filteredValues[this.activeIndex]
          this.activeIndex = this.findActiveIndex()
          this.showList = false
          this.queryText = ''

          this.onSelect && this.onSelect(this.selected)
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
.component-select {
  position: relative;
  display: inline-block;
  .select-input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 180px;
    height: 32px;
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 16px;
    line-height: 32px;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    &:focus,
    &:hover {
      border-bottom: 2px solid #3c80f6;
      .select-triangle {
        svg {
          color: #3c80f6;
        }
      }
    }
    .select-triangle {
      position: absolute;
      right: 5px;
      width: 12px;
      color: rgba(0, 0, 0, .54);
      transform: rotate(90deg);
      svg {
        transition: transform .3s ease-in-out;
      }
      &.open {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  .list-box {
    position: absolute;
    top: 32px;
    z-index: 1;
    width: 180px;
    overflow: hidden;
    overflow-y: auto;
    background-color: #fff;
    border-radius: 2px;
    .select-search-bar {
      height: 10px;
      font-size: 12px;
      border: none;
      border-bottom: 1px solid rgba(0,0,0,.16);
      border-radius: 0;
      .search-icon {
        width: 12px;
        height: 12px;
      }
    }
    li {
      padding: 5px 0;
      overflow: hidden;
      color: rgba(0, 0, 0, .87);
      text-indent: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      &:focus,
      &:hover,
      &.active {
        background: rgba(0, 0, 0, .031);
      }
    }
    &.select-list-transition {
      max-height: 300px;
      transition: all .5s cubic-bezier(.55, 0, .1, 1);
    }
    &.select-list-enter,
    &.select-list-leave {
      max-height: 0;
      opacity: 0;
    }
  }
}
</style>
