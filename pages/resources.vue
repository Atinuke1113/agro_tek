<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-green-600 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mt-10 mb-4 animate-fade-in">
            Our Resources
          </h1>
          <p class="text-green-100 text-lg max-w-2xl mx-auto animate-slide-up">
            Access our comprehensive collection of farming guides, market insights, and technical resources.
          </p>
        </div>
      </div>
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
    </div>

    <!-- Resources Grid -->
    <div class="max-w-7xl mx-auto px-4 py-10">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Resource Cards -->
        <div v-for="(resource, index) in resources" 
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          :class="{'animate-fade-in': true}"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img :src="getImageUrl(resource.image)" :alt="resource.title" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-950 bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <NuxtLink 
                :to="`/resources/${resource.id}`" 
                class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                View Details
              </NuxtLink>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ resource.title }}</h3>
            <p class="text-gray-600 mb-4">{{ resource.description }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <span class="mr-3">{{ resource.type }}</span>
              <span>{{ resource.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const resources = [
  {
    id: 'sustainable-farming',  // Make sure these IDs match exactly
    title: 'Sustainable Farming Practices',
    description: 'Learn about eco-friendly farming methods and sustainable agricultural practices.',
    image: 'sustainable.jpg',
    type: 'Guide',
    duration: '15 min read'
  },
  {
    id: 'crop-disease',
    title: 'Crop Disease Management',
    description: 'Comprehensive guide on identifying and treating common crop diseases.',
    image: 'crop_disease_management.jpg',
    type: 'Tutorial',
    duration: '20 min read'
  },
  {
    id: 'market-analysis',
    title: 'Market Price Analysis',
    description: 'Current market trends and price analysis for agricultural products.',
    image: 'market_price_analysis.jpg',
    type: 'Report',
    duration: '10 min read'
  },
  {
    id: 'smart-irrigation',
    title: 'Smart Irrigation Systems',
    description: 'Modern irrigation techniques and water management strategies.',
    image: 'smart_irrigation.jpg',
    type: 'Guide',
    duration: '12 min read'
  },
  {
    id: 'organic-certification',
    title: 'Organic Certification',
    description: 'Step-by-step guide to obtaining organic farming certification.',
    image: 'organic_certification.jpg',
    type: 'Guide',
    duration: '25 min read'
  },
  {
    id: 'agri-tech',
    title: 'Agricultural Technology',
    description: 'Latest technological innovations in modern farming.',
    image: 'agricultural_technology.jpg',
    type: 'Article',
    duration: '18 min read'
  }
]

// Function to get image URL
const getImageUrl = (imageName) => {
  try {
    return new URL(`../assets/img/${imageName}`, import.meta.url).href
  } catch (error) {
    console.error(`Error loading image: ${imageName}`, error)
    return '' // Return empty string or a default image path
  }
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>