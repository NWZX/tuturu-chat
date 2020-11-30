<template>
    <div class="w-full sticky bottom-0 mt-8" :class="{ 'mr-auto': spin, 'ml-auto': !spin }">
        <form class="w-full flex">
            <textarea
                class="w-10/12 shadow-lg resize-none outline-none border-gray-500 border-solid mx-4 lg:mx-8 mb-4 p-2"
                :rows="autoRow"
                :placeholder="placeholder"
                @keyup="addRow()"
                v-model="message"
            />
            <button
                class="w-2/12 text-gray-700 bg-pink-300 rounded shadow-lg mx-4 lg:mx-8 mb-4 p-2"
                type="button"
                @click="sendMessage()"
            >
                SEND
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMessageStore from '@/store/useMessageStore';
import useUserStore from '@/store/useUserStore';

const { push } = useMessageStore();
const { user } = useUserStore();

export default defineComponent({
    name: 'SendMessage',
    data() {
        return {
            autoRow: 1,
            message: '',
        };
    },
    props: {
        placeholder: String,
    },
    methods: {
        sendMessage() {
            user().then(value => {
                console.log({ username: value?.username, message: this.$data.message });
                if (value)
                    push({ username: value.username, message: this.$data.message }).then(result => {
                        if (result) {
                            this.$data.message = '';
                            const view = document.getElementById('chat_view');
                            if (view) window.scrollBy(0, view.scrollHeight);
                        }
                    });
            });
        },
        addRow() {
            const row = this.$data.message.match(/\n/g)?.length || 0;
            if (row < 7 || this.$data.autoRow < 7) this.$data.autoRow = row + 1;
        },
    },
});
</script>
