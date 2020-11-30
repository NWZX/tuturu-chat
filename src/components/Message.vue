<template>
    <div
        class="w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:3/12 my-4"
        :class="{ 'ml-auto': spin, 'mr-auto': !spin }"
    >
        <div
            class="bg-gradient-to-b shadow-md pt-1 rounded-xl"
            :class="{ 'from-pink-200 to-green-200': spin, 'from-green-200 to-pink-200': !spin }"
        >
            <div class="text-left ml-1 text-gray-700 font-bold font-code">{{ username.toUpperCase() }}</div>
            <div class="font-roboto text-left break-word p-3">
                {{ message }}
            </div>
        </div>
        <div class="text-right">
            <span class="font-thin font-code">{{ tranformDateToTime(createAt) }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Message',
    props: {
        username: String,
        message: String,
        createAt: String,
        spin: Boolean,
    },
    methods: {
        tranformDateToTime(date: string) {
            const time = new Date(date);
            return `${time.getHours()}:${time.getMinutes()}`;
        },
    },
});
</script>
