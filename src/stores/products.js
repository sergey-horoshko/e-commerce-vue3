import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { getProducts } from '@/api/products.js';

export const useProducts = defineStore('products', () => {
  const pending = ref(true);
  const products = ref([]);

  const getData = async () => {
    pending.value = true;

    try {
      products.value = await getProducts();
    } catch (e) {
      console.log(e);
    } finally {
      pending.value = false;
    }
  };

  return { pending, products, getData };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}
