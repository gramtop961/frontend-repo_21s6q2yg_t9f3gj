<template>
  <section id="solutions" class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold">Həllər</h2>
        <p class="text-white/70 mt-2">IaaS, Security, Backup, Monitoring</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="b in blocks" :key="b.t" class="glass rounded-xl p-6 hover:-translate-y-1 transition">
          <h3 class="font-semibold">{{ b.t }}</h3>
          <p class="text-white/70 text-sm mt-1">{{ b.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const blocks = [
  { t: 'Infrastructure-as-a-Service', d: 'Paylaşılan və xüsusi bulud resursları ilə çevik infrastruktur' },
  { t: 'Security', d: 'Firewall, DDoS qorunma, EDR və Zero-Trust modelləri' },
  { t: 'Backup', d: 'Offsite və immutable backup strategiyaları' },
  { t: 'Monitoring', d: 'Real-time monitorinq və hadisə bildirişləri' }
]
</script>
