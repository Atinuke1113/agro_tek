<template>
    <section id="services" class="py-16 md:py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p class="text-lg text-gray-600">
                    Empowering farmers with innovative solutions and sustainable practices for a more productive agricultural future.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Cards -->
                <div v-for="(service, index) in services" 
                    :key="service.title"
                    class="service-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                    :style="{ animationDelay: `${index * 200}ms` }"
                >
                    <div class="relative overflow-hidden">
                        <div class="h-48 bg-green-100">
                            <img :src="getImageUrl(service.image)" :alt="service.title" class="w-full h-full object-cover">
                        </div>
                        <div class="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-bl-lg">
                            {{ service.category }}
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path v-if="service.iconPath" :d="service.iconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ service.description }}</p>
                        <ul class="mb-4 space-y-2">
                            <li v-for="feature in service.features" :key="feature" 
                                class="flex items-center text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                {{ feature }}
                            </li>
                        </ul>
                        <a href="#" class="text-green-600 hover:text-green-700 font-medium inline-flex items-center group">
                            Learn More
                            <svg class="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {
        // title: 'Smart Farm Management',
        category: 'Technology',
        description: 'Comprehensive farm management solutions powered by IoT and AI to optimize your agricultural operations.',
        image: 'agricultural_technology.jpg',
        features: [
            'Real-time monitoring',
            'Automated irrigation',
            'Yield prediction',
            'Resource optimization'
        ],
        iconPath: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
    },
    {
        // title: 'Advanced Crop Analysis',
        category: 'Analytics',
        description: 'Data-driven crop analysis and monitoring system for maximum yield and quality.',
        image: 'market_price_analysis.jpg',
        features: [
            'Disease detection',
            'Growth tracking',
            'Soil analysis',
            'Weather integration'
        ],
        iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
        // title: 'Market Access Platform',
        category: 'Commerce',
        description: 'Direct connection to buyers and markets, ensuring better prices for your produce.',
        image: 'inclusive_farming.jpg',
        features: [
            'Price monitoring',
            'Buyer networking',
            'Transport logistics',
            'Payment security'
        ],
        iconPath: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    }
]

// Add this function to handle image URLs
const getImageUrl = (imageName) => {
    try {
        return new URL(`../../assets/img/${imageName}`, import.meta.url).href
    } catch (error) {
        console.error(`Error loading image: ${imageName}`, error)
        return ''
    }
}
</script>

<style scoped>
.service-card {
    opacity: 0;
    animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
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

.group:hover svg {
    transform: translateX(5px);
}
</style>