<template>
  <router-link
    :to="`product/${item.id}`"
    class="flex gap-8 w-full">
    <img
      class="h-48 w-48"
      :src="item.image"
      alt="Картинка"
    >

    <div class="flex flex-col gap-4">
      <span class="font-semibold text-xl">
        {{ item.title }}
      </span>

      <span class="font-bold text-lg">
        {{ (item.price * item.quantity).toFixed(2) }} $
      </span>

      <div
        class="flex justify-between items-center gap-5 bg-white rounded-lg max-w-40 text-[#252525] h-10 text-lg select-none	"
      >
        <span
          @click.prevent="removeQty(index)"
          class="cursor-pointer p-3">
          -
        </span>

        <span>
          {{ item.quantity }}
        </span>

        <span
          @click.prevent="addQty(index)"
          class="cursor-pointer p-3">
          +
        </span>
      </div>
    </div>

    <vue-feather
      @click.prevent="removeProduct(item)"
      class="cursor-pointer ml-auto"
      type="x"
    />
  </router-link>
</template>

<script>
import { useCart } from '@/stores/cartProducts.js'

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    index: {
      type: Number,
      required: true,
    }
  },

  setup() {
    // data
    const cartStore = useCart()

    // methods
    const { addQty, removeQty, removeProduct } = cartStore;

    return {
      addQty,
      removeQty,
      removeProduct
    }
  }
}
</script>

<style lang="scss" scoped>

</style>