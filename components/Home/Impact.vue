<template>
    <div class="relative min-h-screen bg-gray-50">
      
        <div class="pt-20 pb-16">
            
            <div class="text-center mb-16 px-4" data-aos="fade-down">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
                <div class="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Transforming lives through sustainable agriculture and inclusive farming practices
                </p>
            </div>

             <div class="container mx-auto px-4 mb-16">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="impact-card" data-aos="zoom-in" data-aos-delay="0">
                        <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">12,298</div>
                        <p class="text-gray-600">Smallholder farmers impacted</p>
                    </div>
                    <div class="impact-card" data-aos="zoom-in" data-aos-delay="100">
                        <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">1,502</div>
                        <p class="text-gray-600">Female farmers empowered</p>
                    </div>
                    <div class="impact-card" data-aos="zoom-in" data-aos-delay="200">
                        <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">3,397</div>
                        <p class="text-gray-600">Farmers with disabilities supported</p>
                    </div>
                    <div class="impact-card" data-aos="zoom-in" data-aos-delay="300">
                        <div class="text-4xl md:text-5xl font-bold text-green-600 mb-2">224</div>
                        <p class="text-gray-600">Communities reached</p>
                    </div>
                </div>
            </div>

  
            <div class="bg-white py-16">
                <div class="container mx-auto px-4">
                    <h3 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Impact Stories</h3>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                       
                        <div class="story-card" data-aos="fade-up" data-aos-delay="0">
                            <div class="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                                <img src="@/assets/img/women_in_agriculture.jpg" alt="Farmer success story" class="w-full h-full object-cover">
                            </div>
                            <div class="p-6">
                                <h4 class="text-xl font-semibold mb-2">Women in Agriculture</h4>
                                <p class="text-gray-600 mb-4">
                                    Empowering female farmers through training and resources, leading to increased crop yields and financial independence.
                                </p>
                                <button class="text-green-600 font-semibold hover:text-green-700">
                                    Read More →
                                </button>
                            </div>
                        </div>

                   
                        <div class="story-card" data-aos="fade-up" data-aos-delay="100">
                            <div class="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                                <img src="@/assets/img/inclusive_farming.jpg" alt="Community impact" class="w-full h-full object-cover">
                            </div>
                            <div class="p-6">
                                <h4 class="text-xl font-semibold mb-2">Inclusive Farming</h4>
                                <p class="text-gray-600 mb-4">
                                    Creating opportunities for farmers with disabilities through adaptive equipment and specialized training programs.
                                </p>
                                <button class="text-green-600 font-semibold hover:text-green-700">
                                    Read More →
                                </button>
                            </div>
                        </div>

                        
                        <div class="story-card" data-aos="fade-up" data-aos-delay="200">
                            <div class="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                                <img src="@/assets/img/community_growth.jpg" alt="Sustainable farming" class="w-full h-full object-cover">
                            </div>
                            <div class="p-6">
                                <h4 class="text-xl font-semibold mb-2">Community Growth</h4>
                                <p class="text-gray-600 mb-4">
                                    Building stronger communities through sustainable farming practices and knowledge sharing.
                                </p>
                                <button class="text-green-600 font-semibold hover:text-green-700">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="container mx-auto px-4 py-16">
                <h3 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our SDG Contributions</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="sdg-card" data-aos="fade-up" data-aos-delay="0">
                        <div class="icon-wrapper mb-4">
                            <i class="fas fa-hand-holding-heart text-4xl text-green-600"></i>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">No Poverty</h4>
                        <p class="text-gray-600">
                            Supporting farmers with resources and training to increase their income and break the cycle of poverty.
                        </p>
                    </div>

                    <div class="sdg-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="icon-wrapper mb-4">
                            <i class="fas fa-seedling text-4xl text-green-600"></i>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">Zero Hunger</h4>
                        <p class="text-gray-600">
                            Improving agricultural productivity to ensure food security in rural communities.
                        </p>
                    </div>

                    <div class="sdg-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-wrapper mb-4">
                            <i class="fas fa-users text-4xl text-green-600"></i>
                        </div>
                        <h4 class="text-xl font-semibold mb-2">Reduced Inequalities</h4>
                        <p class="text-gray-600">
                            Creating inclusive opportunities for marginalized groups in agriculture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'


onMounted(() => {
   
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
.impact-card {
    @apply bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl;
}

.story-card {
    @apply bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl;
}

.story-card:hover {
    transform: translateY(-5px);
}

.sdg-card {
    @apply bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:bg-green-50;
}

.icon-wrapper {
    @apply flex items-center justify-center;
}
</style>