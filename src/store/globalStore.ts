import {defineStore} from "pinia";

export const globalStore = defineStore("globalStore", {
    state: () =>
        ({
            loading: false as boolean,
            isProductoNegativo: false as boolean,

            token: localStorage.getItem('token_youtubeapp'),

            isLogin: false,
        }),
});