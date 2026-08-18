<template>
  <div style="text-align: center; margin-top: 5rem;">
    <h2>Halaman Login</h2>
    <p>Silakan masuk ke sistem ERP.</p>
    <!-- Kita pakai tombol PrimeVue untuk tes navigasi -->
    <Button label="Login ke Dashboard" @click="$router.push('/dashboard')" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>