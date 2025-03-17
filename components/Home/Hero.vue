<template>
  <div class="w-full">
    <div class="hero w-full min-h-[80vh] flex items-center">
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl text-white font-bold mb-6">
            Welcome to <span class="text-green-500">Agro-tek </span>Limited
          </h1>
          <p class="text-xl md:text-2xl text-yellow-200 font-medium mb-8">
            We are breaking the bias by leading the inclusion of female farmers and farmers living with disabilities.
          </p>
          <button class="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition duration-300">
            Learn How
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.hero {
  background-image: url('/assets/img/hero_bg.png');
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 80px;
}


.hero button {
  transition: all 0.3s ease;
}

.hero button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>