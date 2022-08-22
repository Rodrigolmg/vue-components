<template>
    <div class="contador">
        <span>{{ counter }}</span>
        <button>+</button>
        <button>-</button>
        
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
                this.counter--
            }
        }
    }
</script>

<style>

    .contador span{
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>