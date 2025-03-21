<template>
    <section id="about" class="relative min-h-screen py-20 overflow-hidden">
        <!-- Animated Particles -->
        <div class="particles-container absolute inset-0">
            <div v-for="n in 40" :key="n" 
                class="particle"
                :style="{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `-${Math.random() * 10}s`,
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                }"
            ></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div class="lg:col-span-8 space-y-12">
                    <div class="animate-fade-in">
                        <h2 class="text-4xl md:text-5xl font-bold text-green-400 mb-8">About Agro-tek</h2>
                        <p class="text-xl text-gray-300 mb-12 leading-relaxed">
                            Pioneering sustainable agriculture through innovation and inclusion, making modern farming accessible to everyone.
                        </p>
                    </div>

                    <div class="space-y-12 text-content">
                        <div class="fade-up" style="animation-delay: 0.2s">
                            <h3 class="text-2xl font-bold text-green-400 mb-6">Our Journey</h3>
                            <p class="text-gray-300 leading-relaxed mb-6">
                                Founded with a vision to transform agriculture, Agro-tek has evolved into a pioneering force in agricultural innovation. We began our journey with a simple mission: to make modern farming accessible to everyone.
                            </p>
                            <p class="text-gray-300 leading-relaxed">
                                Our focus on inclusivity, particularly for women farmers and those with disabilities, has shaped our approach to developing practical, user-friendly solutions that address real farming challenges.
                            </p>
                        </div>

                        <div class="fade-up" style="animation-delay: 0.4s">
                            <h3 class="text-2xl font-bold text-green-400 mb-6">Our Mission</h3>
                            <p class="text-gray-300 leading-relaxed mb-6">
                                We're dedicated to bridging the gap between traditional farming wisdom and modern technology. Our platform empowers farmers with accessible technologies, sustainable practices, and community-driven support systems.
                            </p>
                            <p class="text-gray-300 leading-relaxed">
                                Through innovative training programs and digital solutions, we're creating an ecosystem where every farmer can thrive, regardless of their background or circumstances.
                            </p>
                        </div>

                        <div class="fade-up" style="animation-delay: 0.6s">
                            <h3 class="text-2xl font-bold text-green-400 mb-6">Looking Forward</h3>
                            <p class="text-gray-300 leading-relaxed">
                                Our vision extends beyond current achievements. We're committed to expanding our reach to 10 new regions, launching comprehensive mobile training programs, and developing AI-powered crop analysis tools. These initiatives will further our mission of making modern agricultural practices accessible to all farmers.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4">
                    <div class="sticky top-8 space-y-8">
                        <div class="relative rounded-xl overflow-hidden shadow-xl">
                            <img 
                                src="@/assets/img/about-img.jpg" 
                                alt="Farmers in the field" 
                                class="w-full h-[250px] object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-8 fade-up" style="animation-delay: 0.8s">
                            <div>
                                <p class="text-3xl font-bold text-yellow-300">5000+</p>
                                <p class="text-gray-400">Farmers Empowered</p>
                            </div>
                            <div>
                                <p class="text-3xl font-bold text-yellow-300">30%</p>
                                <p class="text-gray-400">Yield Increase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.particle {
    position: absolute;
    background: rgb(34 197 94 / 0.15);
    border-radius: 50%;
    pointer-events: none;
    animation: floatParticle linear infinite;
    box-shadow: 0 0 10px rgb(34 197 94 / 0.2);
}

@keyframes floatParticle {
    0% {
        transform: translateY(100vh) translateX(-100px);
        opacity: 0;
    }
    20% {
        opacity: 0.5;
    }
    80% {
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100px) translateX(100px);
        opacity: 0;
    }
}

.fade-up {
    opacity: 0;
    animation: fadeUp 0.8s ease-out forwards;
}

@keyframes fadeUp {
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
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>