<template>
<div class="component-checkbox checkbox"
  :class="{active: isChecked, disabled: isDisabled}"
  @click="changeState" @mousedown="mousedownHandle">
  <input class="checkbox-tag" type="checkbox">
  <div class="checkbox-bd">
    <span class="checkbox-indicator"></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-checkbox',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeState (event) {
      if (this.isDisabled) return false

      this.isChecked = !this.isChecked
      this.$dispatch('checkbox-state-change', event, this.isChecked)
    },
    parseHTML (fragments) {
      let tmp = document.implementation.createHTMLDocument()
      tmp.body.innerHTML = fragments
      return tmp.body.children[0]
    },
    mousedownHandle (event) {
      let domRipple = this.parseHTML(`<span class="ripple"></span>`)

      this.$el.appendChild(domRipple)

      domRipple.addEventListener('animationend', () => {
        domRipple.parentNode.removeChild(domRipple)
      })
    }
  }
}
</script>

<style lang="scss">
.component-checkbox {
  cursor: pointer;

  &.disabled {
    .checkbox-tag {
      display: none;
    }
    .checkbox-bd {
      border: 2px solid #c1c1c1 !important;
      background-color: #c1c1c1;
    }
  }
  .ripple {
    position:absolute;
    display:block;
    background: rgba(#000, .5);
    width:4px;
    height:4px;
    border-radius:50%;
    top: 50%;
    left: 50%;
    margin: -2px;
    animation: checkbox-ripple .8s;
    transform: scale(13);
    opacity: 0;
  }
  @keyframes checkbox-ripple{
    from{
      transform:scale(0);
      opacity:.5;
    }
    to{
      transform:scale(13);
      opacity:0;
    }
  }
}
</style>
