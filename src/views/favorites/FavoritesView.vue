<template>
  <div class="flex min-h-60 w-full flex-col">
    <h1 class="mb-3 mr-auto text-[36px] font-bold">Избранное</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Product v-for="product in products" :key="product.id" :item="product" />

      <div v-if="!products.length">У вас нет товаров в избранном</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useFavorites } from '@/stores/favoritesProducts.js';
import Product from '@/components/product/Product.vue';

export default {
  setup() {
    // data
    const favoritesStore = useFavorites();

    // computed
    const products = computed(() => {
      return favoritesStore.products;
    });

    const pending = computed(() => {
      return favoritesStore.pending;
    });

    return {
      products,
      pending
    };
  },

  components: { Product }
};
</script>

<style lang="scss" scoped></style>
