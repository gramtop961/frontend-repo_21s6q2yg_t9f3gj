<template>
  <header :class="['fixed top-0 inset-x-0 z-50 transition-all', scrolled ? 'backdrop-blur-md bg-slate-900/70 shadow-lg py-2' : 'bg-transparent py-4']">
    <nav class="max-w-7xl mx-auto px-4 flex items-center justify-between gap-6">
      <a href="#" class="flex items-center gap-3">
        <img src="/logo.svg" class="w-9 h-9" alt="HMC" />
        <span class="font-semibold tracking-tight">HMC Company</span>
      </a>
      <div class="hidden md:flex items-center gap-6 text-sm">
        <a v-for="i in items" :key="i.href" :href="i.href" class="hover:text-white/90 text-white/70 transition">{{ i.label }}</a>
      </div>
      <div class="hidden md:flex items-center gap-3">
        <button class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition" @click="$emit('open-auth')">Sign In</button>
        <button class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition">Sign Up</button>
      </div>
      <!-- Mobile -->
      <button class="md:hidden p-2 rounded-lg bg-white/10" @click="open = true">
        <span class="i">☰</span>
      </button>
    </nav>

    <!-- Offcanvas -->
    <transition name="slide">
      <div v-if="open" class="fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/60" @click="open = false"></div>
        <div class="absolute right-0 top-0 h-full w-80 glass p-6">
          <div class="flex items-center justify-between mb-6">
            <span class="font-semibold">Menyu</span>
            <button class="p-2" @click="open = false">✕</button>
          </div>
          <div class="grid gap-4">
            <a v-for="i in items" :key="i.href" :href="i.href" class="py-2 border-b border-white/10">{{ i.label }}</a>
            <div class="flex gap-3 pt-2">
              <button class="flex-1 px-4 py-2 rounded-lg bg-white/10" @click="$emit('open-auth')">Sign In</button>
              <button class="flex-1 px-4 py-2 rounded-lg bg-blue-600">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ scrolled: Boolean })
const open = ref(false)
const items = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]
</script>

<style scoped>
.slide-enter-active,.slide-leave-active{ transition: transform .3s ease; }
.slide-enter-from,.slide-leave-to{ transform: translateX(100%); }
</style>
