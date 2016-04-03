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
    <div class="list-box shadow--2dp" v-show="showList" transition="select-list" v-el:list-box>
      <coponent-search class="select-search-bar" v-if="values.length > 10"
        :query-text.sync="queryText"
        @click.stop></coponent-search>
      <ul>
        <li v-for="item in values | filterBy queryText" track-by="$index"
          :class="{'active': item === selected}"
          @click="select(item, $index)">{{item}}</li>
      </ul>
    </div>
  </slot>
</div>
</template>

<script >
export default {
  name: 'component-select',
  props: {
    values: {
      required: true
    },
    index: null,
    selected: null
  },
  data () {
    return {
      showList: false,
      queryText: ''
    }
  },
  transitions: {
    'select-list': {
      enter (el) {
        el.style.height = Math.min(parseInt(window.getComputedStyle(el)['max-height'], 10), parseInt(this.computedHeight(el), 10)) + 'px'
      },
      beforeLeave (el) {
        el.style.height = 0
      }
    }
  },
  methods: {
    select (item, index) {
      this.queryText = ''
      this.selected = item
      this.index = index
      this.showList = false
    },
    showDropdownList () {
      this.$dispatch('component-select-show-list', this.showList)
      this.showList = !this.showList
    },
    computedHeight (el) {
      let height = 0
      Array.from(el.childNodes).forEach((child)=>{
        if (child.nodeType === 1) {
          let _style = window.getComputedStyle(child)
          height += child.clientHeight +
            (parseInt(_style.borderTopWidth, 10) || 0) +
            (parseInt(_style.borderBottomWidth, 10) || 0)
        }
      })
      return height + 'px'
    }
  },
  events: {
    'search-inputing' () {
      this.$els.listBox.style.height = this.computedHeight(this.$els.listBox)
    }
  },
  ready () {
    document.addEventListener('click', (evnet)=>{
      this.showList = false
    })
  },
  components: {
    'coponent-search': require('../search/search')
  }
}
</script>

<style lang="scss">
.component-select {
  position: relative;
  display: inline-block;
  .select-input {
    font-size: 16px;
    line-height: 32px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    min-width: 180px;
    height: 32px;
    padding-left: 10px;
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
      transform: rotate(90deg);
      color: rgba(0, 0, 0, .54);
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
    z-index: 1;
    top: 32px;
    overflow: hidden;
    width: 180px;
    transition: all .3s ease-in-out;
    border-radius: 2px;
    background-color: #fff;
    max-height: 300px;
    overflow-y: auto;
    .select-search-bar {
      height: 10px;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid rgba(0,0,0,.16);
      font-size: 12px;
      .search-icon {
        width: 12px;
        height: 12px;
      }
    }
    li {
      overflow: hidden;
      padding: 5px 0;
      cursor: pointer;
      white-space: nowrap;
      text-indent: 20px;
      text-overflow: ellipsis;
      color: rgba(0, 0, 0, .87);
      &:hover{
        background: rgba(0, 0, 0, .031);
      }
    }
    &.select-list-transition {
      transition: all .3s ease-in-out;
    }
    &.select-list-enter, &.select-list-leave {
      height: 0;
      opacity: 0;
    }
  }
}
</style>
