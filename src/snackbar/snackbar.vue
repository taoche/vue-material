<template>
<div v-if="show" class="component-snackbar" style="{{{style}}}">
  <p>{{msg}}</p>
  <slot name="action"></slot>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    msg: {
      type: String,
      required: true
    },
    style: {
      type: String
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  watch: {
    show () {
      let self = this
      let second = self.duration*1000

      if(second > 0){
        var t
        if(self.show){
          t = setTimeout(function(){
            self.show = false
          }, second)
        }else{
          clearTimeout(t)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.component-snackbar {
  position: fixed;
  bottom: 10px;
  left: 10px;
  display: flex;
  min-width: 88px;
  height: 36px;
  padding: 10px;
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, .117647) 0 1px 6px, rgba(0, 0, 0, .239216) 0 1px 4px;
  justifycontent: space-between;

  p {
    font-size: 15px;
    line-height: 36px;
    margin: 0;
    margin-right: 50px;
    padding: 0;
  }
}
</style>
