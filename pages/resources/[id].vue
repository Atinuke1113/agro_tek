<template>
    <div class="min-h-screen bg-gradient-to-br from-black to-gray-900">
        <!-- Hero Section -->
        <div class="relative h-[60vh] overflow-hidden">
            <div class="absolute inset-0 bg-green-900/20"></div>
            
            <!-- Back Button -->
            <NuxtLink to="/#resources" 
                class="absolute top-8 left-8 flex items-center text-white hover:text-green-400 transition-colors duration-300 z-10">
                <svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to Resources
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

        <!-- Content will be added here -->
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// Sample data - replace with your actual data source
const resources = {
    'smart-irrigation': {
        title: 'Smart Irrigation Systems',
        summary: 'Advanced irrigation solutions for modern agriculture',
        // Add more details as needed
    },
    'crop-monitoring': {
        title: 'Crop Monitoring',
        summary: 'Real-time monitoring and analysis of crop health',
        // Add more details as needed
    },
    'market-access': {
        title: 'Market Access',
        summary: 'Connect with buyers and optimize your sales',
        // Add more details as needed
    }
}

const currentResource = computed(() => {
    return resources[route.params.id]
})

// Redirect if resource not found
if (!currentResource.value) {
    router.push('/')
}
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