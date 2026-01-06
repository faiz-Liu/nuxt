<template>
  <div class="wrapper">
    <AppHeader />
    <slot />
    <AppFooter />
    <QuickViewModal />
  </div>
</template>

<script setup>
onMounted(() => {
  if (process.client) {
    initScrollUp()
  }
})

function initScrollUp() {
  const scrollUpBtn = document.createElement('div')
  scrollUpBtn.id = 'scrollUp'
  scrollUpBtn.innerHTML = '<i class="icofont icofont-rounded-up"></i>'
  scrollUpBtn.style.display = 'none'
  document.body.appendChild(scrollUpBtn)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUpBtn.style.display = 'block'
    } else {
      scrollUpBtn.style.display = 'none'
    }
  })

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>
