<template>
  <section id="about" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold">Haqqımızda</h2>
          <p class="text-white/70 mt-3">Məqsədimiz biznesləri təhlükəsiz və dayanıqlı infrastruktura daşımaqdır. Onlarla təşkilat HMC Company ilə xərclərini optimallaşdırıb və məhsuldarlığını artırıb.</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <Stat k="+500" v="Müştəri" />
          <Stat k="+100" v="Uğurlu layihə" />
          <Stat k="24/7" v="Support" />
          <Stat k="99.9%" v="Uptime" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Stat from '@/ui/parts/Stat.vue'
</script>
