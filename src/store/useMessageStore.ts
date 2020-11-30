import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import data from '@/datatypes/data';

interface MessageType {
    _id: string;
    username: string;
    message: string;
    createAt: string;
}

export default function useMessageStore() {
    const dataRef = ref<MessageType[]>(data);
    async function messages(limit?: number, idStart?: string): Promise<MessageType[] | undefined> {
        const indexStart = dataRef.value.findIndex(n => n._id == idStart);
        return dataRef.value.slice(indexStart == -1 ? undefined : indexStart, limit);
    }
    async function push(data: { username: string; message: string }): Promise<boolean> {
        dataRef.value.push({
            _id: uuidv4(),
            username: data.username,
            message: data.message,
            createAt: new Date().toISOString(),
        });
        return true;
    }

    return {
        dataRef,
        messages,
        push,
    };
}
