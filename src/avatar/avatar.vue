<template>
<div class="component-avatar">
  <div class="avatar" :class="{'is-letter': !src }">
    <span v-if="src" class="img"
      :style="{'background-image': imageSrc,
      'background-size': 'cover'}"></span>
    <span v-else class="letter">{{letter}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-avatar',
  props: {
    src: String,
    letter: {
      default: '未'
    }
  },
  computed: {
    imageSrc () {
      return `url("${this.src}")`
    }
  }
}
</script>

<style lang="scss">
.component-avatar {
  display: inline-block;
  &.large {
    .avatar {
      line-height: 60px;
      width: 60px;
      height: 60px;
      .letter {
        font-size: 26px;
      }
    }
  }
  &.small {
    .avatar {
      line-height: 24px;
      width: 24px;
      height: 24px;
      .letter {
        font-size: 12px;
      }
    }
  }
  .avatar {
    font-size: 0;
    line-height: 41px;
    display: inline-block;
    box-sizing: border-box;
    width: 41px;
    height: 41px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border-radius: 50%;
    &.is-letter {
      background-color: #0884ce;
    }
    .img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .letter {
      font-size: 18px;
    }
  }
}
</style>
