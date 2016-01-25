<template>
  <div class="example-date-picker">
    <h3>基础使用</h3>
    <input type="text" value="{{date}}" @focus="showDatePicker = true">
    <component-date-picker
      :selected-date-props.sync="date"
      :show.sync="showDatePicker"></component-date-picker>

    <example-code>
      <textarea>
      <input type="text" value="date" @focus="showDatePicker = true">
      <component-date-picker
        :selected-date-props.sync="date"
        :show.sync="showDatePicker"></component-date-picker>
      </textarea>
    </example-code>
  </div>
</template>

<script>
import datePicker from 'vue-material-ui/src/datePicker/datePicker'
import code from '../example-code'

export default {
  name: 'example-datePicker',
  data () {
    return {
      showDatePicker: false,
      date: new Date()
    }
  },
  components: {
    'component-date-picker': datePicker,
    'example-code': code
  }
}
</script>

<style lang="scss">
</style>
