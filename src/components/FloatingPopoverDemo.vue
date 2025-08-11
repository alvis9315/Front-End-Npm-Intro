<template>
  <div style="position: relative; display: inline-block;">
    <button ref="reference" @click="show = !show" class="floating-btn">點擊顯示 Popover</button>
    <div v-if="show" ref="floating" :style="floatingStyles" class="floating-popover">
      這是 Popover 內容！
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useFloating } from '@floating-ui/vue'
const show = ref(false)
const reference = ref(null)
const floating = ref(null)
const { x, y, strategy, update } = useFloating(reference, floating, { placement: 'bottom' })
const floatingStyles = computed(() => ({ 
  position: strategy.value || 'absolute', 
  top: y.value ? `${y.value}px` : '', 
  left: x.value ? `${x.value}px` : '', 
  zIndex: 1000 
}))
watchEffect(() => { if (show.value) update() })
</script>
<style scoped>
.floating-btn { padding: 0.5rem 1.2rem; font-size: 1rem; border-radius: 8px; background: #7c3aed; color: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.floating-popover { padding: 0.7rem 1.2rem; background: #fff; color: #222; border-radius: 8px; font-size: 1rem; box-shadow: 0 2px 12px rgba(0,0,0,0.15); min-width: 160px; }
</style>
