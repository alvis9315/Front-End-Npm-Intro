<template>
  <div>
    <n-button @click="showCustom">自訂通知</n-button>
    <n-button @click="showPersistent">持久通知</n-button>
    <n-button @click="showAction">可操作通知</n-button>
  </div>
</template>
<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()
function showCustom() {
  toast('自訂通知內容', {
    timeout: 5000,
    position: 'top-left',
    draggable: false,
    showCloseButtonOnHover: true,
    pauseOnHover: true
  })
}
function showPersistent() {
  toast.info('重要通知', {
    timeout: false,
    position: 'top-center',
    closeButton: 'button',
    draggable: false
  })
}
function showAction() {
  toast.warning('確認操作？', {
    timeout: 10000,
    position: 'top-right',
    closeButton: false,
    onClick: () => { toast.success('操作已確認') }
  })
}
</script>
<style scoped>
</style>
