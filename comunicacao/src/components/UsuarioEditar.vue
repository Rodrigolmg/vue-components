<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ age }}</strong></p>
        <button @click="changingAge">Alterar idade</button>
    </div>
</template>

<script>
    import bus from '@/bus'

    export default {
        props: {
            age: Number
        },
        methods: {
            changingAge(){
                this.age += 1
                bus.changeAge(this.age)
            }
        }
    }
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
