<template>
  <section id="services" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Xidmətlər</h2>
        <p class="text-white/70 mt-2">İnfrastrukturunuzu gücləndirən korporativ həllər</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard v-for="s in services" :key="s.title" :service="s" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from '@/ui/parts/ServiceCard.vue'

const services = ref([
  { icon: '☁️', title: 'Cloud Server', desc: 'Yüksək mövcudluqlu, miqyaslana bilən bulud serverləri' },
  { icon: '📧', title: 'Corporate Email', desc: 'Təhlükəsiz, spam filtrləməli korporativ email infrastrukturu' },
  { icon: '📞', title: 'IP Telephony (3CX)', desc: '3CX əsaslı IP telefoniya, IVR və Call Center həlləri' },
  { icon: '🗂️', title: 'Active Directory', desc: 'Mərkəzləşdirilmiş giriş nəzarəti və identifikasiya infrastrukturu' },
  { icon: '🌐', title: 'Web Hosting', desc: 'Yüksək performanslı, təhlükəsiz hosting mühiti' },
  { icon: '🧑‍💻', title: 'IT Outsourcing', desc: 'Tam və ya qismən IT idarəetməsini bizə həvalə edin' }
])
</script>
