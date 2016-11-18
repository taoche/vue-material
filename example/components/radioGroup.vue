<template>
  <div class="example-radio">
    <h3>基础使用</h3>
    <component-radio-group name="example" :options="options" :value.sync="model"></component-radio-group>

    <code class="example">
      选择的radio : {{activeName | json}}
    </code>

    <component-radio-group name="example" :options="options" :value.sync="model2" label-right></component-radio-group>

    <code class="example">
      选择的radio : {{activeName | json}}
    </code>

    <component-radio-group name="example" :options="options" label-right disabled></component-radio-group>

    <example-code>
      <textarea>
      <component-radio-group name="example" :options="options"></component-radio-group>
      <component-radio-group name="example" :options="options" label-right></component-radio-group>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import radioGroup from 'src/radio/radioGroup'
import code from '../example-code'

export default {
  name: 'example-radio-group',
  components: {
    'component-radio-group': radioGroup,
    'example-code': code
  },
  data () {
    return {
      options: [{
        value: '0',
        text: '男'
      }, {
        value: '1',
        text: '女'
      }, {
        value: '2',
        text: '未知'
      }],
      model: '1',
      model2: ''
    }
  }
}
</script>

<style lang="scss">
.component-radio-group {
  margin-top: 20px;
}
</style>
