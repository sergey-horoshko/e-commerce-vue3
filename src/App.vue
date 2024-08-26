<template>
  <TheHeader />
  <main class="container mx-auto my-5 flex h-full min-h-full grow items-start justify-center px-4 py-2">
    <RouterView />
  </main>
  <TheFooter />
</template>

<script>
import { onMounted } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { useFavorites } from '@/stores/favoritesProducts.js';
import { useCart } from '@/stores/cartProducts.js';

export default {
  setup() {
    // data
    const favoritesStore = useFavorites();
    const cartStore = useCart();

    // methods
    const { getData } = favoritesStore;
    const { getDataCart } = cartStore;

    // hooks
    onMounted(() => {
      getData();
      getDataCart();
    });
  },

  components: { TheFooter, TheHeader }
};
</script>
