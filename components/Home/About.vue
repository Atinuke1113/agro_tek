<template>
    <section id="about" class="moving-bg mt-28">
        <h2 class="text-4xl text-center  font-bold text-white pt-16">About Us</h2>
        <div class="container mx-auto px-4 py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="text-content">
                    <p class="text-xl text-gray-300 mb-8">
                        At Agro-tek, we're committed to revolutionizing agriculture through innovative technology 
                        and sustainable practices. Our mission is to empower farmers, particularly women and 
                        those with disabilities, to achieve greater productivity and financial independence.
                    </p>
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-yellow-200 mb-2">Our Vision</h3>
                                <p class="text-gray-400">
                                    To create an inclusive agricultural ecosystem where every farmer has access to 
                                    modern farming technologies and sustainable practices.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                                    <svg class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-yellow-200 mb-2">Our Approach</h3>
                                <p class="text-gray-400">
                                    We combine cutting-edge technology with traditional farming wisdom to create 
                                    solutions that are both innovative and practical.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image-content relative">
                    <div class="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                        <img 
                            src="@/assets/img/about-img.jpg" 
                            alt="Farmers in the field" 
                            class="absolute inset-0 w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                    </div>
                    <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
                    <div class="absolute -top-10 -right-10 w-48 h-48 bg-green-500 rounded-full opacity-20 blur-3xl"></div>
                </div>
            </div>
        </div>
    </section>
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

    // Initialize AOS
    if (typeof window !== 'undefined') {
        window.AOS.init({
            duration: 1000,
            once: true,
            offset: 50
        })
    }
})
</script>

<style scoped>
.moving-bg {
    background: linear-gradient(45deg, 
        rgba(0, 0, 0, 0.92),
        rgba(0, 40, 0, 0.85));
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

.image-content::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    background: linear-gradient(45deg, rgba(0, 128, 0, 0.1), rgba(0, 255, 0, 0.05));
    border-radius: 20px;
    z-index: -1;
}
</style>