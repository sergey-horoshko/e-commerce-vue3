<template>
  <div class="flex w-full flex-col items-center justify-center">
    <h1 class="mb-3 mr-auto text-[36px] font-bold">
      {{ product.title }}
    </h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="flex items-start justify-between gap-6">
      <img :src="product.image" alt="" class="max-w-[500px] rounded" />

      <div class="flex flex-col gap-3">
        <span class="text-xl">
          {{ product.description }}
        </span>

        <span class="flex items-center gap-3 text-xl">
          <vue-feather fill="yellow" stroke="yellow" type="star" />

          {{ product.rating.rate }} $
        </span>

        <span class="text-xl"> {{ product.price }} $ </span>

        <div class="flex items-center justify-end gap-3">
          <vue-feather
            :fill="product?.isFavorite ? 'white' : ''"
            class="cursor-pointer"
            type="heart"
            @click.prevent="changeValue(product)"
          />

          <vue-feather class="cursor-pointer" type="shopping-cart" @click.prevent="addProduct(product)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProduct } from '@/stores/product.js';
import { useFavorites } from '@/stores/favoritesProducts.js';
import { useCart } from '@/stores/cartProducts.js';

export default {
  setup() {
    // data
    const productStore = useProduct();
    const favoritesStore = useFavorites();
    const cartStore = useCart();
    const route = useRoute();

    // computed
    const product = computed(() => {
      return productStore.product;
    });

    const pending = computed(() => {
      return productStore.pending;
    });

    // methods
    const { getData } = productStore;
    const { addProduct } = cartStore;
    const { toggleFavorite } = favoritesStore;

    const changeValue = (item) => {
      if (item?.isFavorite) {
        item.isFavorite = false;
      }

      toggleFavorite(item);
    };

    onMounted(async () => {
      await getData(route.params.id);

      if (localStorage.getItem('favorites')) {
        const items = JSON.parse(localStorage.getItem('favorites'));

        if (items.find((el) => el.id === product.value.id)) {
          product.value.isFavorite = true;
        }
      }
    });

    return {
      product,
      pending,
      changeValue,
      addProduct
    };
  }
};
</script>

<style lang="scss" scoped></style>
