<template>
    <div class="bg-gray-100 min-h-screen rounded lg:m-4 p-4 shadow" id="chat_view">
        <message
            v-for="value in dataMessage"
            :key="value.id"
            :username="value.username"
            :message="value.message"
            :createAt="value.createAt"
            :spin="isUser(value.username, username)"
        />
        <send-message />
    </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue';
import { defineComponent, ref } from 'vue';
import SendMessage from '@/components/SendMessage.vue';
import useUserStore from '@/store/useUserStore';
import useMessageStore from '@/store/useMessageStore';
import router from '@/router';

const { dataRef } = useMessageStore();

export default defineComponent({
    setup() {
        const { status, user } = useUserStore();
        const username = ref('');
        if (!status.value.loggedIn) {
            router.push('/login');
        }
        user().then(value => {
            username.value = value ? value.username : '';
        });

        return {
            username,
        };
    },
    name: 'Chat',
    components: { Message, SendMessage },
    data() {
        return {
            dataMessage: dataRef.value,
        };
    },
    methods: {
        isUser(username: string, username2: string): boolean {
            return username === username2;
        },
    },
});
</script>

<style></style>
