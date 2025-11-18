<template>
  <div id="home" class="relative min-h-[70vh] flex items-center">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900/60 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">
      <div>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
          HMC Company — Cloud, Email, IP Telephony
        </h1>
        <p class="mt-4 text-white/80 md:text-lg">
          Miqyaslana bilən bulud, korporativ email, 3CX telefoniya, hosting, Active Directory və IT outsourcing.
        </p>
        <div class="mt-8 flex items-center gap-4">
          <a href="#services" class="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition">Başla</a>
          <a href="#contact" class="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Satışla əlaqə</a>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="aspect-video w-full rounded-2xl overflow-hidden glass">
          <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop" alt="cloud" class="w-full h-full object-cover opacity-90" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Simple hero for initial version (no external 3D asset)
</script>
