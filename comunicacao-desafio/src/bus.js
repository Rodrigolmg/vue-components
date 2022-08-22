import Vue from 'vue'
export default new Vue({
    methods: {
        userSelecting(user){
            this.$emit('userSelected', user)
        },
        getUser(callback){
            this.$on('userSelected', callback)
        }
    }
})
