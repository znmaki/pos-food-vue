<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
</script>

<template>
    <div class="flex">
        <NavBar/>

        <div class="content-menu">
            <RouterView />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.content-menu {
    @apply basis-[90%] bg-black-cuztse mr-5 my-[10px] px-5 py-[15px] rounded-lg flex justify-between space-x-12;
}
</style>