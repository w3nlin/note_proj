Vue.component("todo",{
  template:`
  <div>
    <h1>代办事项列表</h1>
    <todo-add :tasks="tasks"></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  components:{ 
    todoAdd, //=<todo-add>
    todoList //=<todo-list>
  }//Vue会自动将todoAdd翻译为<todo-add>
})