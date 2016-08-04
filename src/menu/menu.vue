<template>
<div class="menu-wrapper"
  v-if="show"
  v-el:menu
  :style="{width: width,
    left: positionData.left +'px',
    top: positionData.top +'px',
    transformOrigin: origin}"
  transition="menu">

  <div class="menu-container" :style="{font: size}">
    <ul v-for="menuData of menuList" track-by="$index">
      <a
        v-for="item of menuData" track-by="$index"
        :class="[item.class]"
        :href="item.href">
        <li>
          <p>
            <i class="{{item.leftIcon}}" v-if="item.leftIcon"></i>
            {{item.name}}
          </p>
          <span v-if="item.rightText">{{item.rightText}}</span>
          <i class="{{item.rightIcon}}" v-if="item.rightIcon"></i>
        </li>
      </a>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      positionData: {},
      origin: 'left top'
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    direction: {
      type: String,
      default: 'leftBottom'
    },
    target: {
      required: true
    },
    menuList: {
      type: Array,
      require: true
    },
    width: String,
    size: String
  },
  watch:{
    target(){
      this.$nextTick(()=> {
        if(!this.$els.menu) return false;

        this.positionData = this.computedPositon(this.target)
      })
    }
  },
  methods: {
    computedPositon(target){

      let _tPosition = target.getBoundingClientRect(),
          _tWidth = _tPosition.width,
          _tHeight = _tPosition.height,
          _tLeft = _tPosition.left,
          _tTop = _tPosition.top,
          domMenu = this.$els.menu,
          _sWidth = domMenu.offsetWidth,
          _sHeight = domMenu.offsetHeight;

      let setDirection = {
        leftBottom:() => {
          this.origin = 'left top';
          return {
            left: _tLeft,
            top: _tTop + _tHeight

          }
        },

        rightBottom:() => {
          this.origin = 'right top';
          return {
            left: _tLeft + _tWidth - _sWidth,
            top: _tTop + _tHeight
          }
        },

        leftTop:() => {
          this.origin = 'left bottom';
          return {
            left: _tLeft,
            top: _tTop - _sHeight
          }
        },

        rightTop:() => {
          this.origin = 'right bottom';
          return {
            left: _tLeft + _tWidth - _sWidth,
            top: _tTop - _sHeight
          }
        }
      }

      return setDirection[this.direction]()
    }
  }
}
</script>
<style lang="scss">
.menu-wrapper {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  display: inline-block;
  transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1);
  transform: scale(1);
  opacity: 1;

  will-change: transform;
  .menu-container {
    font-size: 15px;
    line-height: 32px;
    box-sizing: border-box;
    padding: 8px 0;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, .117647) 0 1px 6px, rgba(0, 0, 0, .239216) 0 1px 4px;
    ul {
      margin: 0;
      padding: 8px 0;
      border-bottom: 1px solid rgb(224, 224, 224);
      a {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: auto;
        padding: 0 16px;
        color: rgba(0, 0, 0, .870588);
        background-color: #fff;
        li {
          display: flex;
          list-style: none;

          justify-content: space-between;
          p {
            margin: 0;
            padding: 0;
            i {
              margin-right: 15px;
            }
          }
        }
        &:hover {
          background-color: #eee;
        }
        &.current {
          background-color: #eee;
        }
        &.disabled {
          cursor: default;
          color: rgba(0, 0, 0, .298039);
          i {
            color: rgba(0, 0, 0, .298039);
          }
        }
        &.disabled:hover {
          cursor: default;
          background-color: #fff;
          i {
            color: rgba(0, 0, 0, .298039);
          }
        }
      }
      &:last-child {
        border: none;
      };
    }
  }
  &.menu-enter,
  &.menu-leave {
    z-index: -1;
    transform: scale(0);
    opacity: 0;
  }
}
</style>
