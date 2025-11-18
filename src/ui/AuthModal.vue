<template>
  <transition name="fade">
    <div class="fixed inset-0 z-50" v-if="open">
      <div class="absolute inset-0 bg-black/60" @click="close"></div>
      <div class="absolute inset-0 grid place-items-center p-6">
        <div class="glass rounded-2xl w-full max-w-lg p-6">
          <div class="flex items-center justify-between">
            <h4 class="font-semibold">{{ mode==='signin'?'Sign In':'Sign Up' }}</h4>
            <button @click="close">✕</button>
          </div>
          <form class="grid gap-3 mt-4" @submit.prevent="submit">
            <input v-model="email" type="email" required placeholder="Email" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
            <input v-model="password" type="password" minlength="6" required placeholder="Password" class="px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2"><input type="checkbox" class="accent-blue-600"/> Remember me</label>
              <button type="button" class="text-blue-400" @click="toggle">{{ mode==='signin'?'Create account':'I have an account' }}</button>
            </div>
            <button :disabled="loading" class="mt-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-60">
              <span v-if="!loading">Continue</span>
              <span v-else class="animate-pulse">Yüklənir...</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
const props = defineProps({ })
const emit = defineEmits(['close'])
const open = ref(true)
const mode = ref('signin')
const email = ref('')
const password = ref('')
const loading = ref(false)

function close(){ emit('close') }
function toggle(){ mode.value = mode.value==='signin'?'signup':'signin' }
async function submit(){
  loading.value = true
  await new Promise(r=>setTimeout(r,700))
  loading.value = false
  close()
}
</script>
<style scoped>
.fade-enter-active,.fade-leave-active{ transition: opacity .2s }
.fade-enter-from,.fade-leave-to{ opacity: 0 }
</style>
