<template>
  <section id="contact" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold">Əlaqə</h2>
          <p class="text-white/70 mt-2">Suallarınızı bizə göndərin, 24/7 dəstəkdə yanınızdayıq.</p>
          <div class="mt-6 aspect-video w-full rounded-xl overflow-hidden">
            <iframe class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.727423258036!2d49.851!3d40.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzMyLjQiTiA0OcKwNTEnMDMuNiJF!5e0!3m2!1sen!2saz!4v1685555555"></iframe>
          </div>
          <div class="mt-4 space-y-2 text-sm text-white/80">
            <div>Email: support@hmc.az</div>
            <div>Telefon: +994 50 000 00 00</div>
            <div>Ünvan: Bakı, Azərbaycan</div>
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
          <p v-if="done" class="text-green-400">Mesajınız qəbul edildi. Tezliklə əlaqə saxlayacağıq.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const form = reactive({ name: '', email: '', phone: '', message: '' })
const loading = ref(false)
const done = ref(false)

async function submit() {
  loading.value = true
  done.value = false
  try {
    // Placeholder API request
    await new Promise(r => setTimeout(r, 800))
    done.value = true
    Object.assign(form, { name: '', email: '', phone: '', message: '' })
  } catch (e) {
    // handle
  } finally { loading.value = false }
}
</script>
