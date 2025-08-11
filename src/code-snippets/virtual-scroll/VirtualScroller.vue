<template>
  <RecycleScroller 
    class="scroller"
    :items="items" 
    :item-size="100" 
    key-field="id" 
    v-slot="{ item }">
    <div class="virtual-item">
      <div class="item-content">
        <div class="item-avatar" :style="{ backgroundColor: item.color }">
          {{ item.type === 'post' ? '📝' : '💬' }}
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.description }}</div>
          <div class="item-meta-info">
            <span class="item-author">👤 {{ item.author }}</span>
            <span class="item-company">🏢 {{ item.company }}</span>
          </div>
        </div>
        <div class="item-meta">
          <div class="item-stats">
            <span>👍 {{ item.likes }}</span>
            <span>👁️ {{ item.views }}</span>
          </div>
          <span class="item-tag">{{ item.tag }}</span>
        </div>
      </div>
    </div>
  </RecycleScroller>
</template>
<script setup>
import { ref } from 'vue'
const items = ref([])
</script>
<style scoped>
</style>
