<template>
  <div v-motion="'hover-scale'"
       :initial="{ scale: 1 }"
       :hovered="{ scale: 1.1, transition: { duration: 300 } }">
    懸停縮放效果
  </div>
</template>
<script setup>
// 需要安裝 @vueuse/motion
</script>
<style scoped>
</style>
