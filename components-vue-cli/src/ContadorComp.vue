<template>
    <div class="contador">
        <span>{{ counter }}</span>
        <button @click="sum">+</button>
        <button @click="sub">-</button>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            sum(){
                this.counter++
            },
            sub(){
                if(this.counter > 0) this.counter--
            }
        }
    }
</script>

<style scoped>

    span{
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>