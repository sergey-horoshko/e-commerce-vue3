import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia'
import { getProduct } from '@/api/products.js';

export const useProduct = defineStore('product', () => {
  const pending = ref(true);
  const product = ref([]);

  const getData = async (id) => {
    pending.value = true;

    try {
      product.value = await getProduct(id);
    } catch (e) {
      console.log(e)
    } finally {
      pending.value = false;
    }
  };

  return { pending, product, getData }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProduct, import.meta.hot))
}