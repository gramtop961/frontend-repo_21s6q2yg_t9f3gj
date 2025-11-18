<template>
  <section id="pricing" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold">Qiymət paketləri</h2>
          <p class="text-white/70 mt-2">Sadə və şəffaf qiymətləndirmə</p>
        </div>
        <div class="glass rounded-full px-2 py-1 flex items-center gap-2">
          <button :class="['px-3 py-1 rounded-full', period==='monthly'?'bg-blue-600':'']" @click="period='monthly'">Monthly</button>
          <button :class="['px-3 py-1 rounded-full', period==='yearly'?'bg-blue-600':'']" @click="period='yearly'">Yearly</button>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="p in plans" :key="p.name" class="relative glass rounded-2xl p-6 hover:-translate-y-1 transition shadow-xl">
          <div v-if="p.popular" class="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-xs animate-pulse">Most Popular</div>
          <h3 class="font-semibold">{{ p.name }}</h3>
          <div class="text-4xl font-extrabold mt-3">{{ price(p.price) }}</div>
          <ul class="text-white/70 text-sm mt-3 space-y-2">
            <li v-for="f in p.features" :key="f">• {{ f }}</li>
          </ul>
          <button class="mt-6 w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500">Select</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const period = ref('monthly')
const plans = ref([
  { name: 'Starter', price: 19, features: ['1 vCPU', '2GB RAM', '20GB SSD'] },
  { name: 'Business', price: 49, features: ['2 vCPU', '4GB RAM', '60GB SSD'], popular: true },
  { name: 'Enterprise', price: 99, features: ['4 vCPU', '8GB RAM', '200GB SSD'] }
])
const price = (p) => (period.value==='monthly' ? `$${p}/mo` : `$${p*10}/yr`)
</script>
