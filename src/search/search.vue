<template>
<div class="component-search">
  <svg viewBox="0 0 20 20" @click="beSearch" class="search-icon">
    <path d="M15.93 14.207c1.16-1.533 1.795-3.416 1.795-5.345C17.725 3.975 13.748 0 8.862 0 3.975 0 0 3.975 0 8.862c0 4.887 3.975 8.863 8.862 8.863 1.93 0 3.812-.636 5.345-1.795l6.07 6.07L22 20.277l-6.07-6.07zM8.862 1.772c3.91 0 7.09 3.18 7.09 7.09 0 3.908-3.18 7.09-7.09 7.09-3.91 0-7.09-3.183-7.09-7.09 0-3.91 3.18-7.09 7.09-7.09z"/>
  </svg>

  <input class="search-input" type="text"
    v-model="queryText"
    :placeholder="placeholder"
    @keyup.enter="beSearch"
    @keyup="emitKeyup"
    @keydown="emitKeydown"
    @input="inputing | debounce 500"/>
</div>
</template>

<script>
export default {
  name: 'component-search',
  props: {
    queryText: String,
    placeholder: {
      type: String,
      default: '请输入关键字'
    },
    onKeyUp: Function,
    onKeyDown: Function,
    onInput: Function
  },
  computed: {
    queryTextLen () {
      return this.queryText.length
    },
    trimQueryText () {
      return this.queryText.trim()
    }
  },
  methods: {
    beSearch () {
      if (!this.queryText.length) return false
      this.$dispatch('search-action', this.trimQueryText)
    },
    emitKeyup (event) {
      this.onKeyUp && this.onKeyUp(this.trimQueryText, event)
    },
    emitKeydown (event) {
      this.onKeyDown && this.onKeyDown(this.trimQueryText, event)
    },
    inputing () {
      this.onInput && this.onInput(this.trimQueryText)
    }
  }
}
</script>

<style lang="scss">
.component-search {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 30px;
  padding: 10px 0;
  border: 1px solid rgba(0,0,0,.16);
  border-radius: 2px;

  justify-content: center;
  align-items: center;
  .search-icon {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    fill: rgba(0,0,0,.56);
  }
  .search {
    margin: auto 8px;
    color: #fff;
  }
  .search-input {
    box-sizing: border-box;
    text-indent: 10px;
    color: rgba(0,0,0,.56);
    border: none;
    outline: none;
    background: transparent;

    flex: 1;
    &::-webkit-input-placeholder {
      color: rgba(0,0,0,.56);
    }
  }
}
</style>
