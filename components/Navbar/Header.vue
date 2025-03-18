<template>
    <nav :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    ]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200">Agro-tek</NuxtLink>
          </div>
  
       
          <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-16 flex-1">
            <NuxtLink 
              to="/" 
              class="relative text-gray-700 hover:text-green-600 transition-colors duration-200 group"
              :class="{ 'text-green-600': $route.path === '/' }"
            >
              Home
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                :class="{ 'scale-x-100': $route.path === '/' }"></span>
            </NuxtLink>
            <a 
              v-for="(section, index) in sections" 
              :key="index"
              :href="'/#' + section.id"
              class="relative text-gray-700 hover:text-green-600 transition-colors duration-200 group cursor-pointer"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.name }}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </a>
            <NuxtLink 
              to="/resources" 
              class="relative text-gray-700 hover:text-green-600 transition-colors duration-200 group"
              :class="{ 'text-green-600': $route.path === '/Resources' }"
            >
              Resources
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
                :class="{ 'scale-x-100': $route.path === '/Resources' }"></span>
            </NuxtLink>
            <NuxtLink 
              to="/Contact" 
              class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Contact Us
            </NuxtLink>
          </div>
  
        
          <div class="lg:hidden flex items-center space-x-4">
            <button @click="toggleMenu" class="text-gray-700 hover:text-green-600 transition-colors duration-200">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  

        <div v-if="isOpen" 
          class="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          @click="isOpen = false"
          style="margin-top: 4rem; z-index: -1;">
        </div>
  
        <div class="lg:hidden">
          <div class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="{ maxHeight: isOpen ? '400px' : '0' }">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <NuxtLink 
                to="/"
                class="block text-gray-700 hover:text-green-600 py-2 transition-colors duration-200"
                :class="{ 'text-green-600': $route.path === '/' }"
                @click="isOpen = false"
              >
                Home
              </NuxtLink>
              <a 
                v-for="(section, index) in sections" 
                :key="index"
                :href="'/#' + section.id"
                class="block text-gray-700 hover:text-green-600 py-2 transition-colors duration-200 cursor-pointer"
                @click.prevent="scrollToSectionMobile(section.id)"
              >
                {{ section.name }}
              </a>
              <NuxtLink 
                to="/Resources"
                class="block text-gray-700 hover:text-green-600 py-2 transition-colors duration-200"
                :class="{ 'text-green-600': $route.path === '/Resources' }"
                @click="isOpen = false"
              >
                Resources
              </NuxtLink>
              <NuxtLink 
                to="/Contact"
                class="block w-full text-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95 mt-2"
                @click="isOpen = false"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isOpen = ref(false)
  const scrolled = ref(false)
  
  const sections = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Impact', id: 'impact' }
  ]
  
  const scrollToSection = async (sectionId) => {
    // If not on home page, navigate to home first
    if (router.currentRoute.value.path !== '/') {
      await router.push('/')
      // Wait for the navigation and DOM update
      await nextTick()
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }
  
  const scrollToSectionMobile = async (sectionId) => {
    isOpen.value = false // Close mobile menu
    await scrollToSection(sectionId)
  }
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .router-link-active {
    color: #059669;
  }
  </style>