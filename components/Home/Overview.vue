<template>
    <section class="relative py-24 overflow-hidden">
        <!-- Keep existing background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-circles">
                <div v-for="n in 8" :key="n" 
                    class="circle"
                    :style="{
                        '--delay': `${n * -4}s`,
                        '--size': `${Math.random() * 200 + 100}px`,
                        left: `${Math.random() * 100}%`,
                    }"
                ></div>
            </div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <!-- Modified counter section - removed v-scroll-reveal -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                <div v-for="stat in stats" :key="stat.value" 
                    class="text-center transform hover:scale-105 transition-all duration-500 fade-up"
                    :style="{ animationDelay: '200ms' }"
                >
                    <div class="relative">
                        <svg class="w-24 h-24 mx-auto animate-spin-slow" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" 
                                class="text-green-200/20" stroke-width="8"/>
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" 
                                class="text-green-400" stroke-width="8"
                                stroke-dasharray="283" :stroke-dashoffset="stat.progress"/>
                        </svg>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">{{ stat.value }}</span>
                        </div>
                    </div>
                    <h4 class="text-lg text-gray-300 mt-4">{{ stat.label }}</h4>
                </div>
            </div>

            <!-- Modified features section - removed v-scroll-reveal -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div v-for="(feature, index) in features" :key="feature.title"
                    class="text-center transform hover:-translate-y-2 transition-all duration-500 fade-up"
                    :style="{ animationDelay: `${index * 200}ms` }"
                >
                    <div class="relative w-24 h-24 mx-auto mb-6">
                        <div class="absolute inset-0 bg-green-400/20 rounded-full animate-ping-slow"></div>
                        <div class="relative z-10 w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <svg class="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path :d="feature.iconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-4">{{ feature.title }}</h3>
                    <p class="text-gray-300 leading-relaxed">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const stats = [
    { value: '85%', label: 'Success Rate', progress: 42 },
    { value: '10K+', label: 'Farmers Reached', progress: 85 },
    { value: '95%', label: 'Satisfaction', progress: 14 },
    { value: '24/7', label: 'Support', progress: 0 }
]

const features = [
    {
        title: 'Smart Farming',
        description: 'Leverage IoT and AI technologies to optimize your farming operations and increase yield.',
        iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    },
    {
        title: 'Market Access',
        description: 'Connect directly with buyers and get better prices for your agricultural products.',
        iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
        title: 'Expert Support',
        description: 'Get guidance from agricultural experts and access to latest farming practices.',
        iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    }
]
</script>

<style scoped>
.fade-up {
    opacity: 0;
    animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.floating-circles .circle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0) 70%);
    border-radius: 50%;
    animation: float 20s linear infinite;
    animation-delay: var(--delay);
}

@keyframes float {
    0% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
    }
    20% {
        opacity: 0.5;
    }
    80% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
    }
}

.animate-spin-slow {
    animation: spin 8s linear infinite;
}

.animate-ping-slow {
    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes ping {
    75%, 100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

section {
    background: linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.95));
}
</style>