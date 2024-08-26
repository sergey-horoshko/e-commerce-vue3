import { ref, computed } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCart = defineStore('cart', () => {
  const pending = ref(true);
  const products = ref([]);
  const counter = computed(() => {
    let total = 0;

    products.value.map((item) => {
      total = total + item?.quantity;
    });

    return total;
  });

  const getDataCart = () => {
    pending.value = true;

    setTimeout(() => {
      if (localStorage.getItem('cart')) {
        products.value = JSON.parse(localStorage.getItem('cart'));
      } else {
        products.value = [];
      }

      pending.value = false;
    }, 1500);
  };

  const addProduct = (item) => {
    if (products.value.find((el) => el.id === item.id)) {
      const index = products.value.indexOf(item);

      products.value[index].quantity++;
    } else {
      item.quantity = 1;

      products.value.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(products.value));
  };

  const addQty = (index) => {
    if (products.value[index].quantity !== 100) {
      products.value[index].quantity++;
    }
  };

  const removeQty = (index) => {
    if (products.value[index].quantity !== 1) {
      products.value[index].quantity--;
    }
  };

  const removeProduct = (item) => {
    const index = products.value.indexOf(item);

    products.value.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(products.value));
  };

  return { pending, products, counter, getDataCart, addProduct, addQty, removeQty, removeProduct };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCart, import.meta.hot));
}
