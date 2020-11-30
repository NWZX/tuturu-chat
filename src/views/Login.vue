<template>
    <div class="min-h-screen flex bg-mayuri bg-no-repeat bg-cover bg-center">
        <from
            class="flex flex-wrap m-auto p-8 bg-gray-100 rounded-lg shadow-lg transition ease-in-out duration-1000 delay-500 transform-gpu"
            :class="{ 'opacity-100 translate-y-0': loading, 'opacity-0 -translate-y-8': !loading }"
        >
            <img src="" alt="" />
            <h1 class="w-full text-center font-roboto font-semibold text-2xl">Login</h1>
            <input
                class="w-full p-2 m-2 outline-none shadow-sm focus:shadow-lg hover:shadow-md rounded-xl transition-shadow duration-500"
                type="text"
                name="username"
                id="username"
                v-model="username"
                placeholder="Username"
            />
            <input
                class="w-full p-2 m-2 outline-none shadow-sm focus:shadow-lg hover:shadow-md rounded-xl transition-shadow duration-500"
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="Password"
            />
            <button
                class="w-3/6 p-3 m-2 mx-auto bg-pink-200 focus:shadow-lg focus:outline-none font-roboto font-semibold"
                type="submit"
                @click="login()"
            >
                GO
            </button>
        </from>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useUserStore from '@/store/useUserStore';
import router from '@/router';

const store = useUserStore();

export default defineComponent({
    setup() {
        if (store.status.value.loggedIn) router.push('/');
        const loading = ref(false);
        setTimeout(() => {
            loading.value = true;
        }, 1);
        return {
            loading,
        };
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async login() {
            alert('username:' + this.$data.username + 'password:' + this.$data.password);
            (await store.login({ username: this.$data.username, password: this.$data.password }))
                ? router.push('/')
                : null;
        },
    },
});
</script>

<style></style>
