import { UserType } from '@/datatypes/UserType';
import { computed, ref } from 'vue';

const storedToken = localStorage.getItem('token');

export default function useUserStore() {
    const status = ref({ loggedIn: storedToken ? true : false });
    async function user(): Promise<UserType | undefined> {
        if (!storedToken) return undefined;
        const dUser: UserType = {
            _id: '6e1eeaf6-a790-459e-9fef-303c80273f03',
            username: 'glenn',
            token: storedToken,
        };
        return dUser;
    }
    async function login(data: { username: string; password: string }): Promise<boolean> {
        localStorage.setItem('token', data.password);
        status.value.loggedIn = true;
        return status.value.loggedIn;
    }
    async function logout() {
        status.value.loggedIn = false;
    }
    async function register(data: { username: string; password: string }) {
        status.value.loggedIn = false;
    }

    return {
        status: computed(() => status.value),
        user,
        login,
        logout,
        register,
    };
}
