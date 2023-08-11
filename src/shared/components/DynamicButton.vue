<script setup lang="ts">
import { ref } from "vue";
import type { Food } from "../../modules/menu/interfaces/food";
import { useOrderStore } from "../../store/order";
import { storeToRefs } from "pinia";

interface Props {
  type: string;
  text?: string;
  style?: string;
  icon?: JSX.Element;
  imgSrc?: string;
  amountOrder?: number;
  orderObject?: Food;
}
const store = useOrderStore();
const { order } = storeToRefs(store)
const props = defineProps<Props>();
const emit = defineEmits(["update:amountOrder"]);

//AQUI ESTA EL PROBLEMA
/* const commonId = Array.isArray(props.orderObject) ? order.value.some(item1 => props.orderObject.some(item2 => item1.id === item2.id)) : false; */
/* const commonId = order.value.some(item => item.id === props.orderObject.id); */
/* console.log(props.orderObject?.name, commonId) */
//console.log(props.orderObject?.name , commonId);


const amount = ref(props!.amountOrder || 0);
/* const amount = ref(commonId ? props!.amountOrder : 0); */


const adjustQuantity = (value: number) => {
  amount.value = Math.max(amount.value + value, 0);
  emit("update:amountOrder", amount.value);

  /* let updatedOrder = { ...props.orderObject, amount: amount }; */
  let updatedOrder = { ...props.orderObject, amount: amount };

  store.setOrder(updatedOrder);
  console.log(props.orderObject?.amount);  
};
</script>

<template>
  <RouterLink :to="{ name: 'menu', params: { typeMenu: props.text!.toLowerCase() } }"
    v-if="props.type === 'ButtomWithImg'" class="btn-icon">
    <img className="max-w-[2rem] mr-2" :src="props.imgSrc" :alt="props.text + ' alt'" />
    {{ props.text }}
  </RouterLink>

  <div v-if="props.type === 'ButtomCounter'" className="flex justify-center">
    <button class="border py-2 px-2 rounded-l-lg rounded-bl-lg bg-primary" @click="adjustQuantity(-1)"
      :class="{ 'bg-primary': amount !== 0, 'bg-[#d9a0a0]': amount === 0 }" :disabled="amount === 0">
      -
    </button>

    <div class="border py-2 px-2 bg-light-black">
      {{ amount }}
    </div>

    <button class="border py-2 px-2 rounded-r-lg bg-primary" @click="adjustQuantity(+1)">
      +
    </button>
  </div>

  <button v-if="props.type === 'ButtomIconText'">
    {{ props.text }}
  </button>
</template>

<style lang="postcss" scoped>
.btn-icon {
  @apply flex justify-center items-center py-3 px-9 bg-light-black rounded-md border-2 border-transparent;
}

.btn-icon:hover {
  @apply cursor-pointer bg-reddish-black border-2 border-primary;
}
</style>
