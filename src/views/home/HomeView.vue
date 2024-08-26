<template>
  <div class="flex flex-col min-h-60 w-full">
    <h1 class="mr-auto text-[36px] font-bold mb-3">
      Каталог
    </h1>

    <ProgressSpinner v-if="pending" />

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <template v-if="products.length">
        <Product
          v-for="product in products"
          :key="product.id"
          :item="product"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useProducts } from '@/stores/products.js'
import Product from '@/components/product/Product.vue'

export default {
  setup() {
    // data
    const productsStore = useProducts()

    // computed
    const products = computed(() => {
      return productsStore.products
    })

    const pending = computed(() => {
      return productsStore.pending
    })

    // methods
    const { getData } = productsStore

    // hooks
    onMounted(async () => {
      await getData()

      if (localStorage.getItem('favorites')) {
        const items = JSON.parse(localStorage.getItem('favorites'))

        products.value.forEach((element) => {
          element.isFavorite = !!items.find(el => el.id === element.id);
        })
      }
    })

    return {
      products,
      pending
    }
  },

  components: { Product }
}
</script>

<style lang="scss" scoped>

</style>