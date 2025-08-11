<template>
  <div style="position: relative; display: inline-block;">
    <button ref="reference" @mouseenter="show = true" @mouseleave="show = false" class="floating-btn">
      滑鼠移到我
    </button>
    <div
      v-if="show"
      ref="floating"
      :style="floatingStyles"
      class="floating-tooltip"
    >
      這是自動定位的 Tooltip！
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useFloating } from '@floating-ui/vue'

const show = ref(false)
const reference = ref(null)
const floating = ref(null)

const { x, y, strategy, update } = useFloating(reference, floating, {
  placement: 'top',
  middleware: [
    // 可加 offset、shift、arrow 等 middleware
  ]
})

const floatingStyles = computed(() => ({
  position: strategy.value || 'absolute',
  top: y.value ? `${y.value}px` : '',
  left: x.value ? `${x.value}px` : '',
  zIndex: 1000,
}) )

watchEffect(() => {
  if (show.value) update()
})
</script>

<style scoped>
.floating-btn {
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  background: #7c3aed;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.floating-tooltip {
  padding: 0.5rem 1rem;
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.95rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  white-space: nowrap;
  pointer-events: none;
}
</style>
