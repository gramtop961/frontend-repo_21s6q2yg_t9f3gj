<template>
  <div class="glass rounded-2xl p-6 group hover:-translate-y-1 hover:shadow-2xl transition will-change-transform">
    <div class="text-3xl">{{ service.icon }}</div>
    <h3 class="mt-4 font-semibold">{{ service.title }}</h3>
    <p class="text-white/70 text-sm mt-1">{{ service.desc }}</p>
    <button class="mt-4 px-4 py-2 rounded-lg bg-blue-600/90 group-hover:bg-blue-500 transition" @click="open = true">Learn More</button>

    <transition name="fade">
      <div v-if="open" class="fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/60" @click="open = false"></div>
        <div class="absolute inset-0 grid place-items-center p-6">
          <div class="glass rounded-2xl max-w-lg w-full p-6">
            <div class="flex items-center justify-between">
              <h4 class="font-semibold">{{ service.title }}</h4>
              <button @click="open = false">✕</button>
            </div>
            <p class="mt-2 text-white/80 text-sm">Bu xidmət haqqında ətraflı məlumat üçün satış komandamızla əlaqə saxlayın.</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ service: Object })
const open = ref(false)
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity .2s; }
.fade-enter-from,.fade-leave-to{ opacity:0 }
</style>
