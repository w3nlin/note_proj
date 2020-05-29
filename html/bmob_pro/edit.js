//创建components文件夹
  //创建counter.js
Vue.component("edit",{
  template:`
  <div>
	<h1 class="page_t">EDIT</h1>
  <div :class="sCla" v-if="show_suc_prompting" class="p_fix" >{{suc_prompting}}</div>   
  <div :class="sCla" class="p_fix" v-if="show_now">{{now_prompting}}</div>
  <b>
  添加问题:
  </b>
<div class="p_rela p_rela_1">
  <input id="t_title" :class="bClass_t" class="t_title" onchange="" @input="change_color_t" @focus="clear_t" v-model="t_title"/>
  <span class="iconfont icon-cuowu" @click="clear_title"></span>  
</div>
  <br/>
  <b>
  填写答案:
  </b>
<div class="p_rela p_rela_2">
  <textarea id="t_content" :class="bClass_c" class="t_content" onchange="" cols="15" rows="20" maxlength="-1" @input="change_color_c" @focus="clear_c" v-model="t_content" /></textarea>
  <span class="iconfont icon-cuowu" @click="clear_content"></span>
</div>
  <br/>  
  <button class="submit" @click="add_data">提交</button>	<br/>
  </div>
  `,
  data(){//data:function(){
    return {
      clear_t_t_f:true,
  clear_c_t_f:true,
  t_title:"面试题",
  t_content:"答案暂未填写",
  all_data:[],
  suc_prompting:"",
  show_suc_prompting:false,
  show_now:false,
  edit_color:"grey",
  bClass_t:{
        color_grey_t:true,
        color_black_t:false
  },
  bClass_c:{
        color_grey_c:true,
        color_black_c:false
  },
  sCla:{
	c_red:false,
	c_white:true,
	c_green:false
  }
    }
  },
  methods:{
    clear_title(){this.t_title=""},
	  clear_content(){this.t_content=""},
	  /*-----------------*/
	  clear_t(){
		  if(this.clear_t_t_f){
				this.t_title="";
				this.clear_t_t_f=false;
		  }	
	  },
	  /*-----------------*/
	  clear_c(){
		  if(this.clear_c_t_f){
				this.t_content="";
				this.clear_c_t_f=false;
		  }	
	  },
	  /*-----------------*/
	  change_color_t(){
			this.bClass_t.color_grey_t=false;
			this.bClass_t.color_black_t=true;
	  },
	  change_color_c(){
			this.bClass_c.color_grey_c=false;
			this.bClass_c.color_black_c=true;
	  },
	  
	  
	  /*-----------------*/
	  get_table(){
	    var This=this;
		console.log("查询");
            const query = Bmob.Query("table_1");
			query.find().then(res => {
				console.log(res)
				This.all_data=res;
		});
	  },
	  /*-----------------*/
	  add_data(){
		var This=this;
		if(This.t_title!=""){
			This.change_color_t();
			This.change_color_c();
			if(This.t_content==""){
				This.t_content="暂无内容";
			}
			This.show_now=true;
			This.sCla.c_red=false;
			This.sCla.c_white=true;
			This.sCla.c_green=false;
			This.now_prompting="正在提交..";
		}else{	
			This.show_now=true;
			This.now_prompting="问题不能为空";
			This.sCla.c_red=true;
			This.sCla.c_white=false;
			This.sCla.c_green=false;
			console.log(This.sCla.c_red);
			setTimeout(function(){
				This.show_now=false;
			},3000)
			return false;
		}
		console.log(123456);
		const query = Bmob.Query('table_1');
		if(This.t_title!=""&&This.t_content!=""){
			query.set("table_title",This.t_title)
			query.set("table_content",This.t_content)
			query.save().then(res => {
				This.sCla.c_red=false;
			    This.sCla.c_white=false;
				This.sCla.c_green=true;
				This.show_now=false;
				This.suc_prompting="提交成功";
				This.show_suc_prompting=true;
				setTimeout(function(){
					This.suc_prompting="";
					This.show_suc_prompting=false;
				},3000)
			  console.log(res);
			  //This.get_table();
			}).catch(err => {
			  This.sCla.c_red=true;
			  This.sCla.c_white=false;
			  This.sCla.c_green=false;
			  This.show_now=false;
			  console.log(err);
			  This.suc_prompting="提交失败";
				This.show_suc_prompting=true;
				setTimeout(function(){
					This.suc_prompting="";
					This.show_suc_prompting=false;
				},3000)
			})
		}
	  },
	  /*-----------------*/
	  delete_data(){
		var This=this;
		const query = Bmob.Query('table_1');
		query.find().then(res => { 
			console.log(res);
			query.destroy(res[res.length-1].objectId).then(res => {
			  console.log(res);
			  This.get_table();
			}).catch(err => {
			  console.log(err)
			});
		});
	  }
	  
  }
})