<template>
  <div style="position: relative; display: inline-block;">
    <button ref="reference" @mouseenter="show = true" @mouseleave="show = false" class="floating-btn">滑鼠移到我 (有箭頭)</button>
    <div v-if="show" ref="floating" :style="floatingStyles" class="floating-tooltip">
  <span ref="arrow" :style="arrowStyles" class="floating-arrow" />
      這是有箭頭的 Tooltip！
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useFloating, arrow as arrowMiddleware, offset } from '@floating-ui/vue'
const show = ref(false)
const reference = ref(null)
const floating = ref(null)
const arrow = ref(null)
const { x, y, strategy, middlewareData, update } = useFloating(reference, floating, {
  placement: 'top',
  middleware: [
    offset(12), // 添加 12px 的間距
    arrowMiddleware({ element: arrow })
  ]
})
const floatingStyles = computed(() => ({ 
  position: strategy.value || 'absolute', 
  top: y.value ? `${y.value}px` : '', 
  left: x.value ? `${x.value}px` : '', 
  zIndex: 1000 
}))
const arrowStyles = computed(() => {
  const { x: arrowX, y: arrowY } = middlewareData.value.arrow || {}
  return {
    left: arrowX !== undefined ? `${arrowX}px` : '',
    top: arrowY !== undefined ? `${arrowY}px` : ''
  }
})
watchEffect(() => { if (show.value) update() })
</script>
<style scoped>
.floating-btn { padding: 0.5rem 1.2rem; font-size: 1rem; border-radius: 8px; background: #7c3aed; color: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.floating-tooltip { padding: 0.5rem 1rem; background: #fff; color: #374151; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 0.95rem; box-shadow: 0 2px 12px rgba(0,0,0,0.15); white-space: nowrap; pointer-events: none; position: relative; }
.floating-arrow { position: absolute; width: 16px; height: 8px; background: #fff; clip-path: polygon(50% 100%, 0 0, 100% 0); top: 100%; left: 50%; transform: translateX(-50%); border-left: 1px solid #e5e7eb; border-top: 1px solid #e5e7eb; }
</style>
