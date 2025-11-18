<template>
  <div>
    <!-- Navbar -->
    <Navbar :scrolled="scrolled" @open-auth="openAuth" />

    <!-- Hero -->
    <section ref="heroRef" class="relative">
      <Hero />
    </section>

    <!-- Core sections (simple) -->
    <section id="services" class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Xidmətlər</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <ServiceCard v-for="s in services" :key="s.title" :service="s" />
        </div>
      </div>
    </section>

    <section id="about" class="py-16 bg-white/5">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-bold">Haqqımızda</h2>
          <p class="text-white/70 mt-3">HMC Company — müəssisələr üçün etibarlı IT partnyoru. Bulud və təhlükəsizlikdən şəbəkə və helpdesk-ə qədər.</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <Stat k="99.9%" v="Uptime" />
          <Stat k="24/7" v="Support" />
          <Stat k="100+" v="Layihə" />
          <Stat k="500+" v="Müştəri" />
        </div>
      </div>
    </section>

    <section id="contact" class="py-16">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-3xl font-bold mb-2">Əlaqə</h2>
          <p class="text-white/70">Suallarınızı göndərin, tez geri dönək.</p>
          <div class="mt-6 aspect-video w-full rounded-xl overflow-hidden">
            <iframe class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.727423258036!2d49.851!3d40.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzMyLjQiTiA0OcKwNTEnMDMuNiJF!5e0!3m2!1sen!2saz!4v1685555555"></iframe>
          </div>
        </div>
        <form @submit.prevent="submit" class="glass rounded-2xl p-6 grid gap-4">
          <div class="grid md:grid-cols-2 gap-4">
            <input v-model="form.name" required placeholder="Ad Soyad" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
            <input v-model="form.email" type="email" required placeholder="Email" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
          </div>
          <input v-model="form.phone" placeholder="Telefon" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
          <textarea v-model="form.message" required placeholder="Mesaj" rows="5" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10"></textarea>
          <button :disabled="loading" class="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60">
            <span v-if="!loading">Göndər</span>
            <span v-else class="animate-pulse">Göndərilir...</span>
          </button>
          <p v-if="done" class="text-green-400">Mesajınız qəbul edildi.</p>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/ui/Navbar.vue'
import Hero from '@/ui/Hero.vue'
import Footer from '@/ui/Footer.vue'
import ServiceCard from '@/ui/parts/ServiceCard.vue'
import Stat from '@/ui/parts/Stat.vue'

const scrolled = ref(false)
const heroRef = ref(null)

const services = [
  { icon: '☁️', title: 'Cloud Server', desc: 'Miqyaslana bilən bulud serverləri' },
  { icon: '📧', title: 'Corporate Email', desc: 'Təhlükəsiz korporativ email' },
  { icon: '📞', title: 'IP Telephony (3CX)', desc: 'IVR və Call Center' },
  { icon: '🗂️', title: 'Active Directory', desc: 'Mərkəzləşdirilmiş identifikasiya' },
  { icon: '🌐', title: 'Web Hosting', desc: 'Yüksək performanslı hosting' },
  { icon: '🧑‍💻', title: 'IT Outsourcing', desc: 'Tam və ya qismən IT idarəetmə' }
]

const form = ref({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const done = ref(false)

async function submit(){
  loading.value = true
  await new Promise(r=>setTimeout(r,600))
  done.value = true
  form.value = { name: '', email: '', phone: '', message: '' }
  loading.value = false
}

const onScroll = () => { scrolled.value = window.scrollY > 10 }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
