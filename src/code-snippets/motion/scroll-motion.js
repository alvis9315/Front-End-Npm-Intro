export const scrollMotionCode = `<div 
  v-motion="'scroll-left'"
  :initial="{ x: -100, opacity: 0 }"
  :visible="{ x: 0, opacity: 1, transition: { duration: 1000, delay: 200 } }">
  滾動時觸發的動畫
</div>`
