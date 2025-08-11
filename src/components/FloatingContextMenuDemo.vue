
<template>
  <div style="position: relative; display: inline-block;">
    <button
      class="floating-btn"
      @contextmenu="openMenu"
    >
      🖱️ 右鍵顯示選單
    </button>
    <div
      v-if="menuOpen"
      ref="floating"
      class="floating-context-menu"
      :style="floatingStyles"
      @mousedown.stop
    >
      <ul>
        <li @click="choose('編輯內容')">✏️ 編輯內容</li>
        <li @click="choose('下載檔案')">⬇️ 下載檔案</li>
        <li @click="choose('移除項目')">🗑️ 移除項目</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import { useFloating, autoUpdate } from '@floating-ui/vue'

const toast = useToast()
const floating = ref(null)
const menuOpen = ref(false)
const mousePosition = ref({ x: 0, y: 0 })

// 虛擬元素: 讓 context menu 出現在滑鼠座標
const virtualReference = ref({
  getBoundingClientRect: () => ({
    x: mousePosition.value.x,
    y: mousePosition.value.y,
    left: mousePosition.value.x,
    top: mousePosition.value.y,
    right: mousePosition.value.x,
    bottom: mousePosition.value.y,
    width: 0,
    height: 0,
    toJSON: () => {}
  })
})

const { floatingStyles, update } = useFloating(virtualReference, floating, {
  placement: 'right-start',
  whileElementsMounted: autoUpdate
})

const openMenu = (e) => {
  e.preventDefault()
  mousePosition.value = { x: e.clientX, y: e.clientY }
  menuOpen.value = true
  // 重新指派虛擬元素座標
  virtualReference.value = {
    getBoundingClientRect: () => ({
      x: e.clientX,
      y: e.clientY,
      left: e.clientX,
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      width: 0,
      height: 0,
      toJSON: () => {}
    })
  }
  update()
}

const choose = (option) => {
  menuOpen.value = false
  
  // 根據選擇的操作顯示不同類型的 toast 通知
  if (option === '編輯內容') {
    toast.info('📝 開始編輯內容...', {
      position: 'top-right',
      timeout: 3000
    })
  } else if (option === '下載檔案') {
    toast.success('⬇️ 檔案下載開始！', {
      position: 'top-right',
      timeout: 3000
    })
  } else if (option === '移除項目') {
    toast.warning('🗑️ 項目已移除', {
      position: 'top-right',
      timeout: 3000
    })
  }
}

const closeMenu = (e) => {
  // 只要不是點在選單上都收合，右鍵也收合
  if (menuOpen.value && (!floating.value || !floating.value.contains(e.target))) {
    menuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousedown', closeMenu)
})
onUnmounted(() => {
  window.removeEventListener('mousedown', closeMenu)
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
  user-select: none;
}
.floating-context-menu {
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  min-width: 120px;
  padding: 0.5rem 0;
}
.floating-context-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.floating-context-menu li {
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.floating-context-menu li:hover {
  background: #7c3aed;
  color: #fff;
}
</style>
