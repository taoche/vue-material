<template>
  <div class="example-tables">
    <h3>基础使用</h3>
    <component-tables :has-checkbox="true" :table-data.sync="mockData"></component-tables>

    <code class="example">
      动态数据 : {{mockData | json}}
    </code>

    <example-code>
      <textarea>
      <component-tables :has-checkbox="true" :table-data.sync="mockData"></component-tables>

      const mockData = [{
        'ID': 1,
        'Name': '测试1',
        'value': '测试11',
        'Status': '筹备中'
      }, {
        'ID': 2,
        'Name': '测试2',
        'value': '测试12',
        'Status': '进行中'
      }, {
        'ID': 3,
        'Name': '测试3',
        'value': '测试13',
        'Status': '已完成'
      }, {
        'ID': 4,
        'Name': '测试4',
        'value': '测试14',
        'Status': '待确认'
      }, {
        'ID': 5,
        'Name': '测试5',
        'value': '测试15',
        'Status': '已验收'
      }]

      data () {
        return {
          mockData: mockData
        }
      }
      </textarea>
    </example-code>

    <h3>固定头部</h3>
    <component-tables :has-checkbox="true" :table-data.sync="mockDataHoldHeader"></component-tables>

    <example-code>
      <textarea>
      <component-tables :has-checkbox="true" :table-data.sync="mockDataHoldHeader"></component-tables>

      const mockDataHoldHeader = [{
        'ID': 1,
        'Name': '测试1',
        'value': '测试11',
        'Status': '筹备中'
      }, {
        'ID': 2,
        'Name': '测试2',
        'value': '测试12',
        'Status': '进行中'
      }, {
        'ID': 3,
        'Name': '测试3',
        'value': '测试13',
        'Status': '已完成'
      }, {
        'ID': 4,
        'Name': '测试4',
        'value': '测试14',
        'Status': '待确认'
      }, {
        'ID': 5,
        'Name': '测试5',
        'value': '测试15',
        'Status': '已验收'
      }, {
        'ID': 6,
        'Name': '测试6',
        'value': '测试16',
        'Status': '已验收'
      }, {
        'ID': 7,
        'Name': '测试7',
        'value': '测试18',
        'Status': '已验收'
      }, {
        'ID': 8,
        'Name': '测试8',
        'value': '测试18',
        'Status': '已验收'
      }]

      data () {
        return {
          mockDataHoldHeader: mockDataHoldHeader
        }
      }
      </textarea>
    </example-code>
  </div>
</template>

<script>
const mockData = [{
  'ID': 1,
  'Name': '测试1',
  'value': '测试11',
  'Status': '筹备中'
}, {
  'ID': 2,
  'Name': '测试2',
  'value': '测试12',
  'Status': '进行中'
}, {
  'ID': 3,
  'Name': '测试3',
  'value': '测试13',
  'Status': '已完成'
}, {
  'ID': 4,
  'Name': '测试4',
  'value': '测试14',
  'Status': '待确认'
}, {
  'ID': 5,
  'Name': '测试5',
  'value': '测试15',
  'Status': '已验收'
}]

const mockDataHoldHeader = [{
  'ID': 1,
  'Name': '测试1',
  'value': '测试11',
  'Status': '筹备中'
}, {
  'ID': 2,
  'Name': '测试2',
  'value': '测试12',
  'Status': '进行中'
}, {
  'ID': 3,
  'Name': '测试3',
  'value': '测试13',
  'Status': '已完成'
}, {
  'ID': 4,
  'Name': '测试4',
  'value': '测试14',
  'Status': '待确认'
}, {
  'ID': 5,
  'Name': '测试5',
  'value': '测试15',
  'Status': '已验收'
}, {
  'ID': 6,
  'Name': '测试6',
  'value': '测试16',
  'Status': '已验收'
}, {
  'ID': 7,
  'Name': '测试7',
  'value': '测试18',
  'Status': '已验收'
}, {
  'ID': 8,
  'Name': '测试8',
  'value': '测试18',
  'Status': '已验收'
}]

import tables from 'vue-material-ui/src/tables/tables'
import code from '../example-code'

export default {
  name: 'example-tables',
  components: {
    'component-tables': tables,
    'example-code': code
  },
  data () {
    return {
      mockData: mockData,
      mockDataHoldHeader: mockDataHoldHeader
    }
  }
}
</script>
