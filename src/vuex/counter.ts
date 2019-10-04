import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";


@Module
export default class Counter extends VuexModule{
    count: Array<number> = [];

    @Mutation
    increment(delta: number){
        this.count.push(delta)
    }

    @Action({commit: 'increment'})
    incr(data: any){
        return data
    }

}