<template>
    <section class="relative py-20 bg-black/95">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-green-400 text-center mb-12">Agricultural Resources</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="resource in resources" 
                    :key="resource.id" 
                    class="bg-white/5 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                    <div class="relative h-48">
                        <img :src="resource.image" :alt="resource.title" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-white mb-3">{{ resource.title }}</h3>
                        <p class="text-gray-300 mb-6">{{ resource.summary }}</p>
                        <NuxtLink 
                            :to="`/resources/${resource.id}`"
                            class="inline-block px-6 py-2 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-colors duration-300"
                        >
                            View Details
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const resources = [
    {
        id: 'smart-irrigation',
        title: 'Smart Irrigation Systems',
        summary: 'Advanced irrigation solutions for modern agriculture',
        image: '/img/irrigation.jpg',
    },
    {
        id: 'crop-monitoring',
        title: 'Crop Monitoring',
        summary: 'Real-time monitoring and analysis of crop health',
        image: '/img/monitoring.jpg',
    },
    {
        id: 'market-access',
        title: 'Market Access',
        summary: 'Connect with buyers and optimize your sales',
        image: '/img/market.jpg',
    }
]
</script>