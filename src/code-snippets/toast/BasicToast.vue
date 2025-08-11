<template>
  <div>
    <n-button @click="showSuccess">成功通知</n-button>
    <n-button @click="showError">錯誤通知</n-button>
    <n-button @click="showWarning">警告通知</n-button>
    <n-button @click="showInfo">資訊通知</n-button>
  </div>
</template>
<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()
function showSuccess() { toast.success('成功訊息') }
function showError() { toast.error('錯誤訊息') }
function showWarning() { toast.warning('警告訊息') }
function showInfo() { toast.info('資訊訊息') }
</script>
<style scoped>
</style>
