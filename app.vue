<template>
  <div class="w-full overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
 
  components: {},
};
</script>

<style>
html {
  scroll-behavior: smooth !important;
}

.swiper-pagination-bullet-active {
  background: white !important;
}

@media (min-width: 100px) {
  .container{

width: 100% !important;
}

.container {
        max-width: 100% !important;
    }
}


/* 
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 120ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
} */
</style>
