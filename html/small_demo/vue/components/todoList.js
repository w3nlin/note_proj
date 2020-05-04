var todoList={
  template:`
  <ul>
    <li v-for="(task,i) of tasks" :key="i">{{i+1}} - {{task}} <button @click="del(i)">x</button></li>
  </ul>`,
  props:["tasks"],
//data:{tasks}
  data(){ return {} },
  methods:{
    del(i){
      this.tasks.splice(i,1);
    }
  }
}