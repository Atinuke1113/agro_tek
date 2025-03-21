<template>
    <section class="relative min-h-screen flex items-center py-20 md:px-24 xs:px-10">
        <!-- Background Image Container -->
        <div class="absolute inset-0 z-0">
            <img 
                src="@/assets/img/new_hero.jpg" 
                alt="Agricultural background" 
                class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>

        <!-- Content Container -->
        <div class="container mx-auto relative z-10">
            <div class="max-w-3xl">
                <h1 class="text-5xl md:text-7xl text-white font-bold mb-6 opacity-0 animate-title">
                    Welcome to <span class="text-green-400">Agro-tek </span>Limited
                </h1>
                <p class="text-xl md:text-2xl text-yellow-200 font-medium mb-12 opacity-0 animate-text">
                    We are breaking the bias by leading the inclusion of female farmers and farmers living with disabilities.
                </p>
                <NuxtLink 
              to="/resources" 
              class="bg-green-600 text-white text-2xl px-10 py-5 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
             Learn How
            </NuxtLink>
            </div>
        </div>

        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
    </section>
</template>

<style scoped>
.hero {
  background-image: url('/assets/img/new_hero.jpg');
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.animate-title {
  animation: slideUp 1s ease-out forwards;
}

.animate-text {
  animation: slideUp 1s ease-out forwards;
  animation-delay: 0.3s;
}

.animate-buttons {
  animation: slideUp 1s ease-out forwards;
  animation-delay: 0.6s;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

.hero button {
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>