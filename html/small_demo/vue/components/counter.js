//创建components文件夹
  //创建counter.js
Vue.component("counter",{
  template:`
  <div>
    <button @click="change(-1)">-</button>
    <span>{{n}}</span>
    <button @click="change(+1)">+</button>
  </div>
  `,
  data(){//data:function(){
    return {
      n:1
    }
  },
  methods:{
    change(i){
      this.n+=i;
    }
  }
})