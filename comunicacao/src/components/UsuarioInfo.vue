<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ reverseName() }}</strong></p>
        <p>Idade do usuário: <strong>{{ age }}</strong></p>
        <button @click="resetName">Reiniciar nome</button>
        <button @click="resetFn">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            // required: true,
            // default: 'Anônimo'
            default: function() {
                return Array(10).fill('RoR').join('')
            }
        },
        resetFn: Function,
        age: Number
    },
    methods: {
        reverseName(){
            return this.name.split('').reverse().join('')
        },
        resetName(){
            this.name = 'Pedro'
            this.$emit('nameChanged', this.name)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
