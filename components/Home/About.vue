<template>
    <div class="mt-24 relative min-h-screen">
    
        <div class="moving-bg pt-10">
            <h2 class="text-white text-center text-4xl font-bold">About Us</h2>
            <div class="container mx-auto px-4 py-16">
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
               
                    <div class="text-content">
                        <h2 class="text-4xl font-bold text-yellow-200 mb-6">About Agro-tek Limited</h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-200 leading-relaxed">
                                At Agro-tek Limited, we are pioneering sustainable agricultural solutions with a focus on inclusivity and innovation. Our mission is to transform the agricultural landscape by empowering farmers, particularly women and those with disabilities.
                            </p>
                            <p class="text-lg text-gray-200 leading-relaxed">
                                Founded with a vision to break barriers in agriculture, we have consistently worked towards creating opportunities for underrepresented groups in the farming sector. Our approach combines traditional farming wisdom with modern agricultural technology.
                            </p>
                            <div class="mt-8">
                                <h3 class="text-2xl font-semibold text-yellow-200 mb-4">Our Core Values</h3>
                                <ul class="list-none space-y-3">
                                    <li class="flex items-center text-white">
                                        <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Inclusivity in Agriculture
                                    </li>
                                    <li class="flex items-center text-white">
                                        <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Sustainable Farming Practices
                                    </li>
                                    <li class="flex items-center text-white">
                                        <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Community Empowerment
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                  
                    <div class="image-content">
                        <div class="relative">
                            <div class="absolute -top-4 -left-4 w-full h-full  rounded-lg">
                                <img 
                                src="@/assets/img/about-img.jpg" 
                                alt="Farmers at work" 
                                class="w-full h-[500px] object-cover rounded-lg shadow-xl"
                            />
                            </div>
                            <img 
                                src="@/assets/img/rectangle.jpg" 
                                alt="Farmers at work" 
                                class="w-full h-[500px] object-cover rounded-lg shadow-4xl"
                            />
                        </div>
                        <div class="stats-box bg-green-600 p-6 rounded-lg shadow-lg mt-6">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="text-center">
                                    <h4 class="text-3xl font-bold text-white">1000+</h4>
                                    <p class="text-gray-100">Farmers Supported</p>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-3xl font-bold text-white">50+</h4>
                                    <p class="text-gray-100">Communities Reached</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
  const route = useRoute()
  if (route.hash) {
    const element = document.querySelector(route.hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<style scoped>
.moving-bg {
    background: linear-gradient(45deg, 
        rgba(0, 0, 0, 0.9),
        rgba(0, 50, 0, 0.8)),
        url('/assets/img/farm-pattern.jpg');
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    min-height: 100vh;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.text-content {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
}

.image-content {
    opacity: 0;
    animation: slideIn 1s ease-out 0.5s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>