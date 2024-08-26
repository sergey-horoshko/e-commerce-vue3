<template>
  <div class="flex flex-col min-h-60 w-full">
    <h1 class="mr-auto text-[36px] font-bold mb-3">
      Корзина
    </h1>

    <ProgressSpinner v-if="pending" />

    <div
      v-else
      class="flex flex-col justify-center items-start flex-wrap w-full gap-6"
    >
      <CartProduct
        v-for="(product, index) in products"
        :key="product.id"
        :item="product"
        :index="index"
      />

      <div v-if="!products.length">
        У вас нет товаров в корзине
      </div>

      <div
        v-if="total"
        class="text-lg font-bold"
      >
        Общая сумма покупки составит {{ total.toFixed(2) }} $
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import CartProduct from './components/CartProduct.vue'
import { useCart } from '@/stores/cartProducts.js'

export default {
  setup() {
    // data
    const cartStore = useCart()

    // computed
    const total = computed(() => {
      let sum = 0;

      products.value.map((item) => {
        sum = sum + (item.quantity * item.price);
      })

      return sum;
    })

    const pending = computed(() => {
      return cartStore.pending
    })

    const products = computed(() => {
      return cartStore.products
    })

    return {
      products,
      pending,
      total,
    }
  },

  components: { CartProduct },
}
</script>

<style lang="scss" scoped>

</style>