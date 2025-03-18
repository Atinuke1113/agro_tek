<template>
  <div class="min-h-screen bg-gray-50 pt-24">
    <!-- Hero Section -->
    <div class="relative overflow-hidden bg-green-600 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center animate-fade-in">
          <h1 class="text-4xl font-bold text-white mb-4">{{ resource.title }}</h1>
          <p class="text-green-100 text-lg">{{ resource.type }} • {{ resource.duration }}</p>
        </div>
      </div>
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Image Section -->
      <div class="rounded-xl overflow-hidden mb-12 shadow-xl animate-scale-up">
        <img :src="getImageUrl(resource.image)" :alt="resource.title" class="w-full h-[400px] object-cover">
      </div>

      <!-- Content Sections -->
      <div class="space-y-12 animate-slide-up">
        <!-- Overview -->
        <section class="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p class="text-gray-600 leading-relaxed">{{ resource.description }}</p>
        </section>

        <!-- Key Points -->
        <section class="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Key Points</h2>
          <ul class="space-y-4">
            <li v-for="(point, index) in resource.keyPoints" :key="index" 
              class="flex items-start space-x-3 animate-fade-in"
              :style="{ animationDelay: `${index * 100}ms` }">
              <span class="text-green-600 mt-1">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span class="text-gray-600">{{ point }}</span>
            </li>
          </ul>
        </section>

        <!-- Additional Resources -->
        <section class="bg-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform">
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">Additional Resources</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <a v-for="(link, index) in resource.additionalResources" 
              :key="index"
              :href="link.url"
              class="flex items-center p-4 border rounded-lg hover:bg-green-50 transition-colors group"
              :style="{ animationDelay: `${index * 100}ms` }">
              <span class="text-green-600 mr-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </span>
              <span class="text-gray-700 group-hover:text-green-700 transition-colors">{{ link.title }}</span>
            </a>
          </div>
        </section>
      </div>

      <!-- Back Button -->
      <div class="mt-12 text-center">
        <NuxtLink to="/resources" 
          class="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Resources
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'resource'
})

const route = useRoute()

// Define resources first
const resources = [
  {
    id: 'sustainable-farming',
    title: 'Sustainable Farming Practices',
    // ... rest of the resource data
  },
  // ... other resources
]

// Then define the computed property
const resource = computed(() => {
  console.log('Current route ID:', route.params.id)
  const found = resources.find(r => r.id === route.params.id)
  if (!found) {
    console.log('Resource not found, returning default')
    return resources[0]
  }
  return found
})

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
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-scale-up {
  animation: scaleUp 0.6s ease-out forwards;
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

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>