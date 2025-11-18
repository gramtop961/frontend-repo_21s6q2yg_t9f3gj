<template>
  <div id="home" class="relative min-h-[90vh] grid place-items-center">
    <div class="absolute inset-0" style="width: 100%; height: 100%">
      <Spline :scene="splineUrl" style="width: 100%; height: 100%" />
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_4px_40px_rgba(59,130,246,0.45)]">
        Enterprise IT, Cloud və Security həlləri
      </h1>
      <p class="mt-4 text-white/80 md:text-lg">
        Bulud serverlərdən IP telefoniya və korporativ emailə qədər — HMC Company infrastrukturunuzu təhlükəsiz, miqyaslana bilən və yüksək performanslı edir.
      </p>
      <div class="mt-8 flex items-center justify-center gap-4">
        <a href="#services" class="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition">Get Started</a>
        <a href="#contact" class="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Contact Sales</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Spline from '@splinetool/react-spline'
const splineUrl = 'https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode'
</script>
