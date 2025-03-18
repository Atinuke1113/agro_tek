export default defineNuxtRouteMiddleware((to) => {
  if (to.params.id) {
    console.log('Resource ID:', to.params.id)
  }
})