import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component
// import svg from '@/icons/svg/dashboard.svg'
// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
// console.log(req.keys())
// console.log(req('./dashboard.svg'))
// console.log(svg)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(requireAll(req))
