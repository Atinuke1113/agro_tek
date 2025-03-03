<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Navbar/Header.vue'
import Footer from '~/components/Navbar/Footer.vue'
</script>

<script>
   
import '~/assets/css/tailwind.css';
</script>

<style scoped>

</style>