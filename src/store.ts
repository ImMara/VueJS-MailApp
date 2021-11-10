import { reactive } from 'vue';
import axios from 'axios';

export const store = {
    debug: true,
    state:reactive ( {
        active : false,
        posts: Array<any>(),
    }),
    mutations: {
        setActive() {
            store.state.active = !store.state.active;
            // console.log(store.state.active);
        },
    },
    getters: {
        getActive: (state: any) => {
            return state.active
        }
    }
}