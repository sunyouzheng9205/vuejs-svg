<template>
  <div class="icons-container">
    <div class="icons-wrapper">
      <div v-for="item in iconsMap" :key="item" @click="handleClipboard(generateIconCode(item), $event)">
        <el-tooltip placement="top">
          <div slot="content">
            {{generateIconCode(item)}}
          </div>
          <div class="icon-item">
            <div>
              <span class="svg-wrap" @click.stop>
                <svg-icon :icon-class="item" />
              </span>
            </div>
            <span>{{item}}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '@/utils/svgConfig/generateIconsView'
import clipboard from '@/utils/svgConfig/clipboard'

export default {
  name: 'icons',
  data () {
    return {
      iconsMap: []
    }
  },
  mounted () {
    const iconsMap = icons.state.iconsMap.map((i) => {
      return i.default.id.split('-')[1]
    })
    this.iconsMap = iconsMap
  },
  methods: {
    generateIconCode (symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    handleClipboard (text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.icons-container {
  overflow: hidden;
  .icons-wrapper {
    margin: 0 auto;
    .icon-item {
      margin: 20px;
      height: 110px;
      text-align: center;
      width: 110px;
      float: left;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
      .svg-wrap {
        cursor: help;
      }
      &>span {
        display: block;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }
}
</style>
