<template>
  <div>
    
    <!-- <div ref="heroRef" class="fade-up"> -->
    <div>
      <HomeHero />
    </div>
    
    <div ref="aboutRef" class="fade-left" >
      <HomeAbout />
    </div>
    
    <div ref="overviewRef" class="fade-right">
      <HomeOverview />
    </div>
    
    <div ref="servicesRef" class="fade-up-slow">
      <HomeServices />
    </div>

    <div ref="impactRef" class="fade-up">
      <HomeImpact />
    </div>
  </div>
</template>

<script setup>
// Remove the direct import
// import { HomeImpact } from '~/.nuxt/components';

const heroRef = ref(null);
const aboutRef = ref(null);
const overviewRef = ref(null);
const servicesRef = ref(null);
const impactRef = ref(null);

const { observe } = useIntersectionObserver();

onMounted(() => {
  const refs = [heroRef, aboutRef, overviewRef, servicesRef, impactRef];
  
  refs.forEach(ref => {
    if (ref.value) {
      observe(ref.value, () => {
        ref.value.classList.add('visible');
      });
    }
  });
});
</script>

<style scoped>
.fade-in, .fade-up, .fade-left, .fade-right, .fade-up-slow {
  opacity: 0;
  transition: all 1s ease-out;
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.fade-up {
  transform: translateY(50px);
}

.fade-left {
  transform: translateX(-50px);
}

.fade-right {
  transform: translateX(50px);
}

.fade-up-slow {
  transform: translateY(30px);
  transition-duration: 1.5s;
}

.visible {
  opacity: 1;
  transform: translate(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>