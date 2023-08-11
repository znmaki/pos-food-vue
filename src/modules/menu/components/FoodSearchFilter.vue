<script setup lang="ts">
import { getDate } from '../helpers/getDate';
import DynamicButton from '@/shared/components/DynamicButton.vue';
import Burger from '@/assets/img/burger.png'
import Noodles from '@/assets/img/noodles.png'
import Drinks from '@/assets/img/drinks.png'
import Desserts from '@/assets/img/desserts.png'

</script>

<template>
    <div class="flex mb-[15px]">
        <div className='basis-1/2'>
            <h1 class="text-2xl">Pakecho Restaurant</h1>
            <p className='text-lead-cuztse text-xs'>{{ getDate() }}</p>
            <!-- <button className='btn-collapse' onClick={handleHidden}>{hidden ?
                <IconClose /> :
                <IconMenuBar />}
            </button> -->
        </div>
        <input className='basis-1/2 text-lead-cuztse bg-light-black rounded-md px-5' type="text"
            placeholder='Search menu here...' />
    </div>

    <div class="flex justify-between">
        <DynamicButton type="ButtomWithImg" text="Burger" :img-src="Burger" />
        <DynamicButton type="ButtomWithImg" text="Noodles" :img-src="Noodles" />
        <DynamicButton type="ButtomWithImg" text="Drinks" :img-src="Drinks" />
        <DynamicButton type="ButtomWithImg" text="Desserts" :img-src="Desserts" />
    </div>
</template>

<style scoped></style>