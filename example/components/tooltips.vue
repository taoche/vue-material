a<template>
  <div class="example-tooltips">
    <h3>基础使用</h3>
    <a href="javascript:void(0)" v-for="n in 4"
      @mouseover="mouseoverHandle($index, $event)"
      @mouseout="mouseoutHandle($index, $event)">target</a>

    <component-tooltips :direction="direction" text="example" :show="show" :target="target"></component-tooltips>

    <example-code>
      <textarea>
      <a href="javascript:void(0)" v-for="n in 4"
        @mouseover="mouseoverHandle($index, $event)"
        @mouseout="mouseoutHandle($index, $event)">target</a>

      <component-tooltips text="example"
        :direction="direction"
        :show="show"
        :target="target"></component-tooltips>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import tooltips from 'src/tooltips/tooltips'
import code from '../example-code'

export default {
  name: 'example-tooltips',
  data () {
    return {
      target: null,
      show: false,
      direction: 'bottom'
    }
  },
  methods: {
    mouseoverHandle ($index, event) {
      let direction = ['top', 'right', 'bottom', 'left']
      this.target = event.target
      this.direction = direction[$index]
      this.show = true
    },
    mouseoutHandle () {
      this.show = false
    }
  },
  components: {
    'component-tooltips': tooltips,
    'example-code': code
  }
}
</script>

<style lang="scss">
.example-tooltips{
  a{
    color: #000;
    display: inline-block;
    margin: 0 20px;

    &:hover{
      color: #000;
    }
  }
}
</style>
