<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld @input="getData" :msg="'countdown ' + number"/>
    <div v-for="t in count">{{t}}</div>
    <hr>
    <i>{{count.length}}</i>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {

    number: number= 0;

    mounted() {
      window.setInterval(() => {
        this.number++
      }, 10000)
    }

    get count() {
      return this.$store.state.counter.count
    }
    getData(data: any){
      console.log("data ", data)
      // this.$store.commit("add", data)
    }

  }
</script>
