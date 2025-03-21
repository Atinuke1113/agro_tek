<template>
    <div class="min-h-screen bg-gradient-to-br from-black to-gray-900">
        <!-- Hero Section -->
        <div class="relative h-[60vh] overflow-hidden">
            <img :src="currentResource?.image" :alt="currentResource?.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
            
            <!-- Back Button -->
            <NuxtLink to="/" 
                class="absolute top-8 left-8 flex items-center text-white hover:text-green-400 transition-colors duration-300 z-10">
                <svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to Home
            </NuxtLink>

            <!-- Title Section -->
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div class="container mx-auto">
                    <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                        {{ currentResource?.title }}
                    </h1>
                    <p class="text-xl text-gray-300 max-w-2xl animate-fade-up">
                        {{ currentResource?.summary }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-12">
                    <div class="prose prose-lg prose-invert max-w-none animate-fade-up">
                        <p class="text-gray-300 text-lg">{{ currentResource?.description }}</p>
                    </div>

                    <!-- Features -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div v-for="(feature, index) in currentResource?.features" 
                            :key="index"
                            class="bg-white/5 p-6 rounded-xl border border-green-400/20 animate-fade-up"
                            :style="{ animationDelay: `${index * 100}ms` }"
                        >
                            <h3 class="text-xl font-semibold text-green-400 mb-3">{{ feature.title }}</h3>
                            <p class="text-gray-300">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-1">
                    <div class="sticky top-8 bg-white/5 rounded-xl p-6 border border-green-400/20">
                        <h3 class="text-xl font-bold text-green-400 mb-6">Quick Info</h3>
                        <div class="space-y-4">
                            <div v-for="(info, key) in currentResource?.quickInfo" 
                                :key="key"
                                class="flex justify-between items-center"
                            >
                                <span class="text-gray-400">{{ key }}</span>
                                <span class="text-white font-bold">{{ info }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const resources = {
    'smart-irrigation': {
        title: 'Smart Irrigation Systems',
        summary: 'Advanced irrigation solutions for modern agriculture',
        image: '/img/irrigation.jpg',
        description: 'Our smart irrigation system leverages cutting-edge technology to optimize water usage and improve crop yields. Using IoT sensors and AI-driven analytics, farmers can achieve precise water management.',
        features: [
            {
                title: 'Automated Control',
                description: 'Set up automated watering schedules based on real-time soil conditions'
            },
            {
                title: 'Data Analytics',
                description: 'Track and analyze water usage patterns to optimize irrigation strategies'
            },
            {
                title: 'Mobile Management',
                description: 'Control your irrigation system from anywhere using our mobile app'
            },
            {
                title: 'Weather Integration',
                description: 'Automatically adjust watering based on weather forecasts'
            }
        ],
        quickInfo: {
            'Implementation Time': '2-3 weeks',
            'ROI Period': '6-8 months',
            'Maintenance': 'Quarterly',
            'Support': '24/7 Available'
        }
    },
    'crop-monitoring': {
        title: 'Crop Monitoring',
        summary: 'Real-time monitoring and analysis of crop health',
        image: '/img/monitoring.jpg',
        description: 'Advanced crop monitoring system that helps farmers track crop health, predict yields, and identify potential issues before they become problems.',
        features: [
            {
                title: 'Satellite Imaging',
                description: 'Regular satellite imagery to track crop development'
            },
            {
                title: 'Disease Detection',
                description: 'Early warning system for crop diseases and pests'
            },
            {
                title: 'Yield Prediction',
                description: 'AI-powered yield prediction and optimization'
            },
            {
                title: 'Soil Analysis',
                description: 'Regular soil health monitoring and recommendations'
            }
        ],
        quickInfo: {
            'Setup Time': '1-2 weeks',
            'Coverage': 'Up to 1000 acres',
            'Updates': 'Daily',
            'Accuracy': '95%'
        }
    },
    'market-access': {
        title: 'Market Access',
        summary: 'Connect with buyers and optimize your sales',
        image: '/img/market.jpg',
        description: 'A comprehensive platform connecting farmers directly with buyers, providing market insights, and optimizing pricing strategies.',
        features: [
            {
                title: 'Direct Sales',
                description: 'Connect directly with wholesale buyers and retailers'
            },
            {
                title: 'Price Analytics',
                description: 'Real-time market prices and trend analysis'
            },
            {
                title: 'Logistics Support',
                description: 'Integrated transportation and storage solutions'
            },
            {
                title: 'Quality Control',
                description: 'Standard quality assessment and certification'
            }
        ],
        quickInfo: {
            'Market Reach': 'National',
            'Average ROI': '40%',
            'Payment Time': '3-5 days',
            'Success Rate': '89%'
        }
    }
}

const currentResource = computed(() => {
    return resources[route.params.id]
})

// Redirect if resource not found
onMounted(() => {
    if (!currentResource.value) {
        router.push('/')
    }
})
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.animate-fade-up {
    opacity: 0;
    animation: fadeUp 1s ease-out forwards;
    animation-delay: 200ms;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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
</style>