<template>
  <header class="flex items-center justify-center bg-[#252525] px-4 py-2">
    <div class="container flex w-full items-center justify-between">
      <router-link to="/">
        <img alt="Лого" class="w-full max-w-16" src="@/assets/header-logo.svg" />
      </router-link>

      <div class="flex items-center gap-3">
        <router-link class="relative" to="/favorites">
          <span
            v-if="favoritesCounter"
            class="absolute -bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] text-[#252525] duration-300"
          >
            {{ favoritesCounter }}
          </span>
          <vue-feather class="cursor-pointer" type="heart" />
        </router-link>

        <router-link class="relative" to="/cart">
          <span
            v-if="cartCounter"
            class="absolute -bottom-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] text-[#252525] duration-300"
          >
            {{ cartCounter }}
          </span>

          <vue-feather class="cursor-pointer" type="shopping-cart" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useFavorites } from '@/stores/favoritesProducts.js';
import { useCart } from '@/stores/cartProducts.js';

export default {
  setup() {
    // data
    const favoritesStore = useFavorites();
    const cartStore = useCart();

    // computed
    const favoritesCounter = computed(() => {
      return favoritesStore.counter;
    });

    const cartCounter = computed(() => {
      return cartStore.counter;
    });

    return {
      favoritesCounter,
      cartCounter
    };
  }
};
</script>
