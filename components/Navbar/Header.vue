<template>
    <nav class="bg-white shadow-lg w-full fixed top-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-green-600">Agro-tek</NuxtLink>
          </div>
  
          <div class="md:flex items-center justify-center space-x-16">
            <NuxtLink to="/" 
              class="text-gray-700 hover:text-green-600 transition-colors duration-200"
              :class="{ 'text-green-600': $route.path === '/' }">
              Home
            </NuxtLink>
            <NuxtLink to="/About" 
              class="text-gray-700 hover:text-green-600 transition-colors duration-200"
              :class="{ 'text-green-600': $route.path === '/About' }">
              About
            </NuxtLink>
            <NuxtLink to="/Services" 
              class="text-gray-700 hover:text-green-600 transition-colors duration-200"
              :class="{ 'text-green-600': $route.path === '/Services' }">
              Services
            </NuxtLink>
            <NuxtLink to="/Impact" 
              class="text-gray-700 hover:text-green-600 transition-colors duration-200"
              :class="{ 'text-green-600': $route.path === '/Impact' }">
              Impact
            </NuxtLink>
            <NuxtLink to="/Resources" 
              class="text-gray-700 hover:text-green-600 transition-colors duration-200"
              :class="{ 'text-green-600': $route.path === '/Resources' }">
              Resources
            </NuxtLink>
            <button class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
              Contact Us
            </button>
          </div>
  
         
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-700 hover:text-green-600">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
  
      
        <div v-if="isOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <NuxtLink to="/" 
              class="block text-gray-700 hover:text-green-600 py-2"
              :class="{ 'text-green-600': $route.path === '/' }">
              Home
            </NuxtLink>
            <NuxtLink to="/About" 
              class="block text-gray-700 hover:text-green-600 py-2"
              :class="{ 'text-green-600': $route.path === '/About' }">
              About
            </NuxtLink>
            <NuxtLink to="/Services" 
              class="block text-gray-700 hover:text-green-600 py-2"
              :class="{ 'text-green-600': $route.path === '/Services' }">
              Services
            </NuxtLink>
            <NuxtLink to="/Impact" 
              class="block text-gray-700 hover:text-green-600 py-2"
              :class="{ 'text-green-600': $route.path === '/Impact' }">
              Impact
            </NuxtLink>
            <NuxtLink to="/Resources" 
              class="block text-gray-700 hover:text-green-600 py-2"
              :class="{ 'text-green-600': $route.path === '/Resources' }">
              Resources
            </NuxtLink>
            <button class="w-full text-left bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 mt-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  </script>