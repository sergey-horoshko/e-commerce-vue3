<template>
  <div class="flex min-h-60 w-full flex-col">
    <h1 class="mb-3 mr-auto text-[36px] font-bold">Корзина</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="flex w-full flex-col flex-wrap items-start justify-center gap-6">
      <CartProduct v-for="(product, index) in products" :key="product.id" :item="product" :index="index" />

      <div v-if="!products.length">У вас нет товаров в корзине</div>

      <div v-if="total" class="text-lg font-bold">Общая сумма покупки составит {{ total.toFixed(2) }} $</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import CartProduct from './components/CartProduct.vue';
import { useCart } from '@/stores/cartProducts.js';

export default {
  setup() {
    // data
    const cartStore = useCart();

    // computed
    const total = computed(() => {
      let sum = 0;

      products.value.map((item) => {
        sum = sum + item.quantity * item.price;
      });

      return sum;
    });

    const pending = computed(() => {
      return cartStore.pending;
    });

    const products = computed(() => {
      return cartStore.products;
    });

    return {
      products,
      pending,
      total
    };
  },

  components: { CartProduct }
};
</script>

<style lang="scss" scoped></style>
