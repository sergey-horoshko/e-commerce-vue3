<template>
  <router-link
    :to="`product/${item.id}`"
    class="flex flex-col gap-3 overflow-hidden shadow-lg hover:shadow-cyan-500/50 duration-300 rounded-lg p-4">
    <img
      class="w-full max-h-80 min-h-80 object-cover mx-auto rounded-lg"
      :src="item.image"
      alt="Картинка товара"
    >

    <span class="font-semibold text-xl truncate">
      {{ item.title }}
    </span>

    <span class="font-semibold text-xl">
      {{ item.price }} $
    </span>

    <div class="flex justify-end items-center gap-3">
      <vue-feather
        @click.prevent="changeValue(item)"
        :fill="item?.isFavorite ? 'white' : ''"
        class="cursor-pointer "
        type="heart"
      />

      <vue-feather
        @click.prevent="addProduct(item)"
        class="cursor-pointer "
        type="shopping-cart"
      />
    </div>
  </router-link>
</template>

<script>
import { useFavorites } from '@/stores/favoritesProducts.js'
import { useCart } from '@/stores/cartProducts.js'

export default {
  props: {
    item: {
      type: Object,
      default: null,
    }
  },

  setup() {
    // data
    const favoritesStore = useFavorites()
    const cartStore = useCart()

    // methods
    const { toggleFavorite } = favoritesStore;
    const { addProduct } = cartStore;

    const changeValue = (item) => {
      if (item?.isFavorite) {
        item.isFavorite = false;
      }

      toggleFavorite(item);
    };

    return {
      changeValue,
      toggleFavorite,
      addProduct,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>