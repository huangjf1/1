import { createVNode, render } from 'vue'
import XtxMessage from './message.vue'
console.log(XtxMessage)
// 2. 准备一个DOM容器
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-wrapper')
document.body.appendChild(div)
let time = null
export default ({ text, type }) => {
  // 3. 创建虚拟dom          (组件对象， props)
  const vnode = createVNode(XtxMessage, { text, type })
  // 4. 把虚拟dom渲染到div
  render(vnode, div)
  // 5. 设置定时器清空
  clearTimeout(time)
  time = setTimeout(() => {
    render(null, div)
  }, 2000)
  console.log('message.js')
}