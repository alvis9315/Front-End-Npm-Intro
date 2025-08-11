export const basicMotionCode = `<div 
  v-motion="'slide-left'" 
  :initial="{ x: -100, opacity: 0 }" 
  :enter="{ x: 0, opacity: 1, transition: { delay: 500, duration: 1000 } }">
  滑入效果
</div>`
