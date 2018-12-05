import Vue from 'vue'
import SvgIcon from '@/components/svg/Svg.vue'// svg组件
import generateIconsView from './generateIconsView.js'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./../../../static/svg/', true, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap)
