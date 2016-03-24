<template>
<div class="component-table">
  <div class="container">
    <table>
      <thead>
        <tr>
          <th v-if="hasCheckbox">
            checkbox
            <div><checkbox :is-checked.sync="checkedAllState"></checkbox></div>
          </th>
          <th>
            Table attribute name
            <div>attribute name</div>
          </th>
          <th>
            Value
            <div>Value</div>
          </th>
          <th>
            Description
            <div>Description</div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(index,item) in tableData"
          @click="rowSelect(index)"
          track-by="$index"
          :class="{active: item.checked}">
          <td v-if="hasCheckbox"><checkbox :is-checked="item.checked"></checkbox></td>
          <td v-for="ele in item.value">{{ele}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'component-table',
  props: {
    tableData: null,
    hasCheckbox: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      checkedAllState: false
    }
  },

  watch: {
    checkedAllState (value) {
      this.tableData.forEach((item)=>{
        item.checked = value
      })
    }
  },

  methods: {
    rowSelect (index) {
      this.tableData[index].checked = !this.tableData[index].checked
    }
  },

  components: {
    checkbox: require('../checkbox/checkbox')
  }
}
</script>

<style lang="scss">
.component-table {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 48px;
  border: 1px solid rgba(0, 0, 0, .12);
  background: #fff;
  & > .container {
    overflow-y: auto;
    table {
      width: 100%;
      border-spacing: 0;
      td,
      th {
        font-size: 14px;
        font-weight: 100;
        line-height: 48px;
        height: 48px;
        padding: 0 25px;
        color: #757575;
      }
      th {
        line-height: 0;
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        white-space: nowrap;
        color: transparent;
        border: none;
      }
      thead {
        th > div {
          line-height: normal;
          position: absolute;
          top: 0;
          margin-left: -25px;
          padding: 15px 25px;
          color: rgba(0, 0, 0, .54);
          background: transparent;
        }
      }
      tbody {
        tr {
          cursor: pointer;
          td {
            border-top: 1px solid rgba(0, 0, 0, .12);
          }
          &.active {
            background: #f5f5f5;
          }
          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
}

</style>
