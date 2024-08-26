<template>
  <TheHeader />
  <main class="flex justify-center items-start h-full min-h-full grow container py-2 px-4 my-5 mx-auto">
    <RouterView />
  </main>
  <TheFooter />
</template>

<script>
import { onMounted } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { useFavorites } from '@/stores/favoritesProducts.js'
import { useCart } from '@/stores/cartProducts.js'

export default {
  setup() {
    // data
    const favoritesStore = useFavorites()
    const cartStore = useCart()

    // methods
    const { getData } = favoritesStore
    const { getDataCart } = cartStore

    // hooks
    onMounted(() => {
      getData();
      getDataCart();
    });
  },

  components: { TheFooter, TheHeader },
}
</script>
