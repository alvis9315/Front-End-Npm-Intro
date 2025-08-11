<template>
  <div style="position: relative; display: inline-block;">
    <button ref="reference" @click="show = !show" class="floating-btn">
      下拉選單 
      <span class="dropdown-icon" :class="{ 'rotated': show }">▼</span>
    </button>
  <div v-if="show" class="floating-dropdown">
      <ul>
        <li @click="select('選項一')">選項一</li>
        <li @click="select('選項二')">選項二</li>
        <li @click="select('選項三')">選項三</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
function select(option) { show.value = false; alert('你選擇了：' + option) }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  display: inline-block;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.floating-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: #fff;
  color: #222;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  min-width: 160px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
}
.floating-dropdown ul { list-style: none; margin: 0; padding: 0; }
.floating-dropdown li { padding: 0.5rem 1.2rem; cursor: pointer; transition: background 0.2s; }
.floating-dropdown li:hover { background: #f3f4f6; }
</style>
