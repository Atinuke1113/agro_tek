<template>
    <section id="impact" class="py-16 md:px-24 xs:px-10 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16 animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
                <p class="text-xl text-green-100 max-w-3xl mx-auto">
                    Transforming lives and agriculture through sustainable innovation and inclusive practices
                </p>
            </div>

            <!-- Stats Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div v-for="(stat, index) in stats" 
                    :key="stat.value"
                    class="stat-card bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
                    :style="{ animationDelay: `${index * 200}ms` }"
                >
                    <div class="text-4xl md:text-5xl font-bold text-yellow-300 mb-3">{{ stat.value }}</div>
                    <div class="text-lg text-green-100">{{ stat.label }}</div>
                </div>
            </div>

            <!-- Impact Stories -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="impact-content animate-slide-right">
                    <h3 class="text-5xl font-bold text-white mb-6">Making Real Change</h3>
                    <div class="space-y-6">
                        <div v-for="(achievement, index) in achievements" 
                            :key="index"
                            class="flex items-start space-x-4 achievement-card"
                            :style="{ animationDelay: `${index * 300}ms` }"
                        >
                            <div class="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                                <svg class="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path :d="achievement.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold text-yellow-200 mb-2">{{ achievement.title }}</h4>
                                <p class="text-green-100">{{ achievement.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="impact-image animate-slide-left">
                    <div class="relative">
                        <img src="@/assets/img/sustainable.jpg" alt="Impact" class="rounded-2xl shadow-2xl">
                        <div class="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const stats = [
    { value: '10K+', label: 'Farmers Empowered' },
    { value: '30%', label: 'Yield Increase' },
    { value: '15+', label: 'Communities Served' },
    { value: '40%', label: 'Income Growth' }
]

const achievements = [
    {
        title: 'Female Farmer Empowerment',
        description: 'Supporting women in agriculture through training, resources, and market access opportunities.',
        icon: 'M12 4.354a4 4 0 110 5.292V12H5.69a4 4 0 110-5.292V4.354a4 4 0 110 5.292v2.354a4 4 0 110 5.292V20'
    },
    {
        title: 'Sustainable Practices',
        description: 'Implementing eco-friendly farming techniques that preserve natural resources for future generations.',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
    },
    {
        title: 'Technology Integration',
        description: 'Bridging the digital divide by providing accessible agricultural technology solutions.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    }
]
</script>

<style scoped>
.stat-card {
    opacity: 0;
    animation: fadeUp 0.8s ease-out forwards;
}

.achievement-card {
    opacity: 0;
    animation: slideIn 0.8s ease-out forwards;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.animate-slide-right {
    animation: slideRight 1s ease-out forwards;
}

.animate-slide-left {
    animation: slideLeft 1s ease-out forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideLeft {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>