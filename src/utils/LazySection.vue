<template>
  <div ref="root">
    <div v-if="visible">
      <slot />
    </div>
    <div v-else class="h-[60vh] grid place-items-center text-white/40">Yüklənir...</div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({ once: { type: Boolean, default: true } })
const root = ref(null)
const visible = ref(false)
let io
onMounted(() => {
  io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      visible.value = true
      if (props.once) io.disconnect()
    }
  }, { rootMargin: '0px 0px -20% 0px' })
  io.observe(root.value)
})
onUnmounted(()=> io && io.disconnect())
</script>
