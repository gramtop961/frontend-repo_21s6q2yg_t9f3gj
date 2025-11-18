<template>
  <footer class="relative pt-20 pb-10 bg-slate-950/60">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div>
        <div class="flex items-center gap-3">
          <img src="/logo.svg" class="w-8 h-8" alt="HMC" />
          <span class="font-semibold">HMC Company</span>
        </div>
        <p class="text-white/70 text-sm mt-3">Cloud, Email, IP Telephony, Hosting, AD və Outsourcing üzrə korporativ IT həlləri.</p>
      </div>
      <div>
        <h4 class="font-semibold mb-3">Services</h4>
        <ul class="text-white/70 text-sm space-y-2">
          <li>Cloud Server</li>
          <li>Corporate Email</li>
          <li>IP Telephony (3CX)</li>
          <li>Active Directory</li>
          <li>Web Hosting</li>
          <li>IT Outsourcing</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-3">Contact</h4>
        <ul class="text-white/70 text-sm space-y-2">
          <li>support@hmc.az</li>
          <li>+994 50 000 00 00</li>
          <li>Bakı, Azərbaycan</li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
      <div>© <span>{{ year }}</span> HMC Company. All rights reserved.</div>
      <div class="flex gap-4">
        <a href="#" class="hover:text-white">LinkedIn</a>
        <a href="#" class="hover:text-white">Twitter</a>
        <a href="#" class="hover:text-white">GitHub</a>
      </div>
    </div>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>
