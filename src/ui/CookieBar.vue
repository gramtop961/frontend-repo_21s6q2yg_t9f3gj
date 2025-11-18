<template>
  <transition name="pop">
    <div v-if="open" class="fixed bottom-4 left-4 right-4 md:left-auto md:w-[420px] z-40 glass rounded-2xl p-4">
      <div class="flex items-start gap-3">
        <div class="text-2xl">🍪</div>
        <div class="text-sm text-white/80">Sayt istifadəçi təcrübəsini yaxşılaşdırmaq üçün cookie fayllarından istifadə edir.</div>
      </div>
      <div class="mt-3 flex justify-end gap-2">
        <button class="px-3 py-1.5 rounded-lg bg-white/10" @click="open=false">Decline</button>
        <button class="px-3 py-1.5 rounded-lg bg-blue-600" @click="accept">Accept</button>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const open = ref(false)
function accept(){
  localStorage.setItem('cookie_accepted','1');
  open.value=false
}
onMounted(()=>{ if(!localStorage.getItem('cookie_accepted')) open.value=true })
</script>
<style scoped>
.pop-enter-active,.pop-leave-active{ transition: transform .25s, opacity .25s }
.pop-enter-from,.pop-leave-to{ transform: translateY(8px) scale(.98); opacity:.0 }
</style>
