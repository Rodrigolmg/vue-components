<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: <strong>{{ age }}</strong></p>
        <button @click="changeAge">Alterar idade</button>
    </div>
</template>

<script>
    export default {
        props: {
            age: Number
        },
        methods: {
            changeAge(){
                // this.age = 33
                this.$emit('ageChanged', 33)
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
