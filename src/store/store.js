import { createStore } from 'vuex'

const store = createStore({
    state: function () {
        return {
            message: 'SALAM DUNYA',
        }
    },

    getters: {
        getMessage: function (state) {
            return state.message
        }
    },

    mutations: {

    },

    actions: {

    }
})

export {
    store
}