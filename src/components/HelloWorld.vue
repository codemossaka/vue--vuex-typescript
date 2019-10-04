<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <input type="text" v-model="inputData">
        <button @click="save">envoyer</button>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {

        @Prop({type: String, default: "", required: true}) private msg!: string;
        public inputData: String = "";

        @Watch("inputData")
        OnChangingInputData(val: string, oldVal: string) {
            // console.log(val, oldVal)
        }

        @Emit("input")
        save() {
            this.$store.dispatch("incr", this.inputData)
          return this.inputData
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
