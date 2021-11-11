import { reactive } from 'vue';

export const store = {
    debug: true,
    state:reactive ( {
        active : false
    }),
    mutations: {
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        setActive() {
            store.state.active = !store.state.active;
            // console.log(store.state.active);
        },
    }
}