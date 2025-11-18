<template>
  <div ref="el" class="glass rounded-2xl p-6 text-center">
    <div class="text-3xl font-extrabold">{{ display }}</div>
    <div class="text-white/70 text-sm mt-1">{{ v }}</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ k: String, v: String })
const display = ref('0')
const el = ref(null)

const animateCount = (target) => {
  const isPercent = target.includes('%')
  const isPlus = target.startsWith('+')
  const num = parseFloat(target.replace(/[+%]/g, ''))
  let start = 0
  const dur = 900
  const startTime = performance.now()
  const step = (now) => {
    const p = Math.min(1, (now - startTime) / dur)
    start = Math.floor(p * num)
    display.value = `${isPlus?'+':''}${start}${isPercent?'%':''}`
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCount(props.k)
      io.disconnect()
    }
  }, { threshold: 0.4 })
  io.observe(el.value)
})
</script>
