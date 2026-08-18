<template>
  <div style="padding: 2rem;">
    <h2>Dashboard Utama</h2>
    <p>Selamat datang di Dashboard ERP.</p>
    <Button label="Logout" severity="danger" @click="$router.push('/')" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>