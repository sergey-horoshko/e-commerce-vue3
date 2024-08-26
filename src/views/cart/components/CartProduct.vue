<template>
  <router-link :to="`product/${item.id}`" class="flex w-full gap-8">
    <img class="h-48 w-48" :src="item.image" alt="Картинка" />

    <div class="flex flex-col gap-4">
      <span class="text-xl font-semibold">
        {{ item.title }}
      </span>

      <span class="text-lg font-bold"> {{ (item.price * item.quantity).toFixed(2) }} $ </span>

      <div
        class="flex h-10 max-w-40 select-none items-center justify-between gap-5 rounded-lg bg-white text-lg text-[#252525]"
      >
        <span @click.prevent="removeQty(index)" class="cursor-pointer p-3"> - </span>

        <span>
          {{ item.quantity }}
        </span>

        <span @click.prevent="addQty(index)" class="cursor-pointer p-3"> + </span>
      </div>
    </div>

    <vue-feather @click.prevent="removeProduct(item)" class="ml-auto cursor-pointer" type="x" />
  </router-link>
</template>

<script>
import { useCart } from '@/stores/cartProducts.js';

export default {
  props: {
    item: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      required: true
    }
  },

  setup() {
    // data
    const cartStore = useCart();

    // methods
    const { addQty, removeQty, removeProduct } = cartStore;

    return {
      addQty,
      removeQty,
      removeProduct
    };
  }
};
</script>

<style lang="scss" scoped></style>
