<template>
  <div>
    <!-- Preloader -->
    <transition name="fade">
      <div v-if="loading" class="fixed inset-0 z-50 grid place-items-center bg-slate-950">
        <div class="flex flex-col items-center gap-4">
          <img src="/logo.svg" alt="HMC" class="w-20 h-20 animate-pulse" />
          <p class="text-slate-300">Yüklənir...</p>
        </div>
      </div>
    </transition>

    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 right-0 h-1.5 z-40">
      <div class="h-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Navbar -->
    <Navbar :scrolled="scrolled" @open-auth="openAuth" />

    <!-- Hero (Spline 3D) -->
    <section ref="heroRef" class="relative min-h-[90vh] overflow-hidden">
      <Hero />
      <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/10 to-slate-950/80"></div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300/70 animate-bounce">Scroll</div>
    </section>

    <!-- Lazy loaded sections -->
    <LazySection :once="false"><Services /></LazySection>
    <LazySection><Solutions /></LazySection>
    <LazySection><Team /></LazySection>
    <LazySection><Pricing /></LazySection>
    <LazySection><About /></LazySection>
    <LazySection><Contact /></LazySection>

    <!-- Footer -->
    <Footer />

    <!-- Modals -->
    <AuthModal v-if="authOpen" @close="authOpen = false" />
    <CookieBar />

    <!-- Floating actions -->
    <FloatingButtons />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/ui/Navbar.vue'
import Hero from '@/ui/Hero.vue'
import Services from '@/ui/Services.vue'
import Solutions from '@/ui/Solutions.vue'
import Team from '@/ui/Team.vue'
import Pricing from '@/ui/Pricing.vue'
import About from '@/ui/About.vue'
import Contact from '@/ui/Contact.vue'
import Footer from '@/ui/Footer.vue'
import CookieBar from '@/ui/CookieBar.vue'
import AuthModal from '@/ui/AuthModal.vue'
import FloatingButtons from '@/ui/FloatingButtons.vue'
import LazySection from '@/utils/LazySection.vue'

const loading = ref(true)
const progress = ref(0)
const scrolled = ref(false)
const authOpen = ref(false)
const heroRef = ref(null)

const openAuth = () => (authOpen.value = true)

const onScroll = () => {
  const st = window.scrollY
  const dh = document.body.scrollHeight - window.innerHeight
  progress.value = Math.min(100, (st / dh) * 100)
  scrolled.value = st > 10
}

onMounted(() => {
  setTimeout(() => (loading.value = false), 800)
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
