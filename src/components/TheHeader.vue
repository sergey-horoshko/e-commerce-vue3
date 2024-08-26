<template>
  <header class="flex items-center justify-center bg-[#252525] py-2 px-4">
    <div class="flex items-center justify-between w-full container">
      <router-link to="/">
        <img
          alt="Лого"
          class="max-w-16 w-full"
          src="@/assets/header-logo.svg"
        >
      </router-link>

      <div class="flex items-center gap-3">
        <router-link
          class="relative"
          to="/favorites">
          <span
            v-if="favoritesCounter"
            class="flex justify-center absolute -bottom-2 duration-300 items-center bg-white w-5 h-5 text-[11px] rounded-full text-[#252525]"
          >
            {{ favoritesCounter }}
          </span>
          <vue-feather
            class="cursor-pointer "
            type="heart"
          />
        </router-link>

        <router-link
          class="relative"
          to="/cart">
          <span
            v-if="cartCounter"
            class="flex justify-center absolute -bottom-2 duration-300 items-center bg-white w-5 h-5 text-[11px] rounded-full text-[#252525]"
          >
            {{ cartCounter }}
          </span>

          <vue-feather
            class="cursor-pointer "
            type="shopping-cart"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useFavorites } from '@/stores/favoritesProducts.js'
import { useCart } from '@/stores/cartProducts.js'

export default {
  setup() {
    // data
    const favoritesStore = useFavorites()
    const cartStore = useCart()

    // computed
    const favoritesCounter = computed(() => {
      return favoritesStore.counter
    })

    const cartCounter = computed(() => {
      return cartStore.counter
    })

    return {
      favoritesCounter,
      cartCounter
    }
  }
}
</script>