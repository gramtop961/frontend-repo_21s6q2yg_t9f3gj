<template>
  <section id="team" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Komanda</h2>
        <p class="text-white/70 mt-2">Peşəkar mühəndislər və konsultantlar</p>
      </div>

      <swiper-container
        :slides-per-view="1.2"
        :space-between="16"
        :loop="true"
        :autoplay="{ delay: 2200 }"
        :breakpoints="{ 768: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }"
        class="w-full">
        <swiper-slide v-for="m in members" :key="m.n">
          <div class="glass rounded-2xl p-6 h-64 relative overflow-hidden group">
            <img :src="m.p" alt="avatar" class="absolute -right-6 -bottom-6 w-40 h-40 opacity-20 group-hover:opacity-30 transition" />
            <h3 class="font-semibold">{{ m.n }}</h3>
            <p class="text-white/70 text-sm">{{ m.r }}</p>
            <div class="absolute bottom-4 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition">
              <a href="#" class="hover:text-white">in</a>
              <a href="#" class="hover:text-white">tw</a>
              <a href="#" class="hover:text-white">gh</a>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import 'swiper/element/bundle'
const members = [
  { n: 'Nadir H.', r: 'Cloud Architect', p: 'https://i.pravatar.cc/160?img=12' },
  { n: 'Aysel M.', r: 'Security Engineer', p: 'https://i.pravatar.cc/160?img=32' },
  { n: 'Rauf R.', r: 'Network Specialist', p: 'https://i.pravatar.cc/160?img=24' },
  { n: 'Leyla A.', r: 'DevOps Engineer', p: 'https://i.pravatar.cc/160?img=18' }
]
</script>
