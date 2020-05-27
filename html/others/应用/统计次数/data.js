const data=`
		js:
1.普通函数和箭头函数的区别
2.闭包
4.原型链
5.token
6.面向对象的理解
7.ES6新特性
8.两种类型之间的继承方式
9.箭头函数
10.JSONP的跨域原理
11.axios怎么跨域
14.localstorage和sessionstorage和cookie的区别
17.作用域链，原型链
18.防抖节流以及应用场景
20.组件间通讯
27.jscore和dom
	--this指向、sessionStorage和localStorage、js数组去重的方法，对象转数组，深拷贝和浅拷贝的区别，封装promise，正则
	--面向对象原理和应用，原型链，闭包，es6新特性，重点是promise和es7的async，数组去重，json字符串解析，防抖节流写例子
	--数组api,es6新特性,new promise使用场景，js原型，es6，普通函数和箭头函数的this指向，如何判断对象是否为数组，promise的理解，闭包的理解，事件队列
	--闭包，原型链，js变量函数声明提前，对闭包的理解，promise的理解，面向对象的理解，手写promise实例，数组去重，解析url为对象
	--es6新特性：var let const，箭头函数，模板字符串。怎样给数组添加或删除新元素，对闭包的了解，对promise的理解，
	--js减少代码行数，封装行数和插件，axios ajax的封装，为什么要用事件委托，冒泡排序
47.substring subtr第二个下标，	
58.for循环和let9-1的递减
59.var const let的区别
60.es6实现9-1，一秒减一次减到0，数组结构，参数结构，
69.手写实际例子来阐述对原型链的理解，闭包的作用
70.手写js单例模式，描述用途
71.js实现对元素的拖拽功能
72.斐波那契求n项的方法
73.js设计模式
74.数据类型判断
81.递归
83.js的工厂函数和单例模式
83.js的工厂函数和单例模式
	function(){
		return new Xxxx();
	}
	这就是工厂函数，可以根据不同的参数创建不同的对象
	var obj=null;
	function fun(){
		if(obj==null){
			obj=new Xxxx()
		}
	       	return obj
	}
	这个是单例模式
	如果已经有这个对象了，就不用再重复创建，直接返回现有对象使用，如果没有该对象才创建新对象，以此保证只有一个对象在内存中
85.点击事件怎么传参以及接收参数
88.回文，也叫回环 （判断一个单词是否是回文），回文就是首位颠倒调换位置后还是对称
89.dom添加元素，字符串次数，css和js分别实现三角形，正则(所有-替换成$)
90.找出下列数组的最大差值，如输入10，5，11，7，8，9，输出6
91.冒泡与捕获的区别
100.数组中常用的API，ES7(async&await)
102.数组去重，倒序输出，删除公共字符，扁平化
108.以下代码的输出结果是
	let a=3;
	let b=new Number(3);
	let c=3;
	console.log(a==b);
	console.log(a===b);
	console.log(b==c);
109.单击按钮时，event.target是什么?
	div onclick="console.log('first div')"
		--div onclick="console.log('second div')"
			--button onclick="console.log('button')"    标签内容button
110.以下代码的输出结果是
	setTimeout(function(){console.log（1）}，0)；
	new Promise(function(resolve,reject){
		console.log(2);
		setTimeout(function(){resolve()},0)
	}).then(function(){console.log(3)})
	process.nextTick(function(){
		console.log(4)
	}) 
	console.log(5)
	-----------------------------------------------------
	setTimeout(function(){console.log（1）}，0)；
	new Promise(function(resolve){
		console.log(2);
		for(var i=1;i<10000;i++){
			i==9999&&resolve()
		}
		console.log(3)
	}) .then(function(){console.log(4)});
	console.log(5)
111.实现一个flatten函数，可使数组扁平化
	flatten([1,2,3,[4,5],[[6],7]]) //结果为[1,2,3,4,5,6,7]
112.js原始类型(symbol这个也被问到)和引用类型
122.两个数组合并成一个数组，并且要按顺序排序
123.数组去重 数组排序 检测字符串中出现次数最多的哪个字母 经常问，也有笔试需要写代码
125.构造函数封装一个模态框
127.js异步原理，计数器
128.正则
	\\d，转义字符，保住\d
	以字符串方式创建正则，小心\d \s等单斜线和js字符串里的转义字符冲突，导致正则验证不准确
	
	以字符串方式创建正则，必须将其中的\d \s 等单\改为\\，意为不让js按转义字符解析\d
135.判断数组的方法，es6中有哪些函数，原生对象有哪些
137.对以下数据做处理，使得输出结果为 '256'
	const ary=[{a:6},{a:1},{a:5},{a:2}];
	const filterMapReduce=(ary)=>{  }
139.写一个函数判断字符串中的两字符是否匹配，如"(){}"、"({aa})"为true,"(})}"为false
140.实现数组元素的全排列组合，([1,2,3]->[[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]])
141.详细描述ajax的步骤
143.介绍下Set、Map、WeakSet和WeakMap的区别
146.js数据类型有哪些，怎么判断
147.防抖节流 应用场景，手写代码
148.手写原生js实现点击列表弹出相应内容
153.原型和原型链是什么，最顶端object的原型是什么，Function的呢
161.es6用的多吗，用的比较难的有哪些，set和map用过吗，有什么区别
162.画过图表吗，echarts性能不好，还知道什么别的吗
170.es6用到过哪些
171.promise用过吗，具体是什么原理，有什么作用,.then里面的函数是怎么执行的
172.async await，后面可以跟.then吗
176.怎样实现dom优化
177.为什么减少全局变量可以实现dom的优化
178.正则表达式的/i是什么，match和test的区别
179.slice和splice的区别
182.多维数组转一维数组
183.es5、es6
184.数组api问的特别多
185.原型链 闭包 作用域 ，


CSS:
--元素居中方法，flex布局，父元素包裹子元素，如何水平垂直居中，css3里面的动画，css和js分别实现三角形，
50.scss的用法和好处
53.使用iconfont图片，把图片写在css代码，通过css通用图片路径和class这样就一次请求也不用发
54.自适应，屏幕适配
55.media响应式布局，meta加视口命令，css重置，
57.position共几种，float原理
65.css居中浮动弹性   居中说越多越好
66.import和link的区别
75.画圆和三角形
97.弹性和浮动的实际例子
105.css中是元素不可见的方法有哪些
106.使用css画出一个三角形
121.div垂直居中的方案
132.css布局 二栏布局 居中布局  高度坍塌 
144.BFC是什么，有什么作用，怎么使用
151.css怎么布局，浮动和弹性，说说弹性布局有哪些属性和对应的值
174.数组api，forEach和map的区别


jQuery:
15.jQuery手写表格
44.jQuery的特点
67.jQuery查找元素和dom的区别
131.jQuery插件封装
133.vue和jquery的混用 ，平安公司



html5:
13.h5和css3的新特性
  --es6新特性，css3新特性质,sessionstorage和localstorage，
152.webstorage了解吗，说一下和cookie有什么区别，事件执行的底层原理了解吗，怎么实现的

vue:
3.路由守卫
12.vue的路由模式
16.vue的生命周期
19.双向数据绑定原理
21.路由传参
23.vuex
26.vue生命周期，vue的监听，计算属性，vuex，路由守卫，双向绑定原理，指令，权限管理，组件传参方法，
28.computed和watch的区别，vuex怎么保存登陆状态
	--vue组件传值，mvvm的理解，vue中封装过哪些组件，v-if和v-show，如何实现双向绑定,v-show和v-if，路由守卫，
	--路由守卫,vue生命周期，vue生命周期钩子夯实，router路由，组件间传参，vuewx状态管理，vue生命周期，绑定原理，
	--vue全家桶全部内容，路由守卫，vue组件之间通信方式，虚拟dom树，v-if和v-show的区别，v-if中key的作用，vuex组件间的传参(父与子，兄弟)，vue的绑定原理
	--v-if和v-show的使用场景，加:key="i"与不加的区别
	--为什么要用虚拟dom树，watch的两个参数
	--vue的生命周期，组件通信
41.computed和watch的区别
	
48.vue-router
76.mutation action getter computed这些具体用法
86.怎么调用mutation里面的方法，vue的按需加载，组件通信，动态路由，路由守卫，如何使用vue的一些库，如elementui
95.vue动态路由，vue的实现原理，
101.vuex-router原理及作用
104.vue中怎么封装方法，method&computed&watch的区别
113.v-for中key的作用
114.vue中data是对象和是函数的区别
117.vue-router的原理是什么
119.vuex的几个属性是哪些，作用是什么
126.vue生命周期，钩子函数
129.什么情况下再添加两个钩子函数，会不会自定义指令，自定义指令又引发两个钩子函数
130.4个生命周期8个函数
149.vue路由守卫有哪些，分别在什么场合使用
150.vue有哪些内置组件，有什么作用
154.说一下你用路由守卫实现了哪些功能
155.vue的数据是怎么实现响应式加载的，有什么缺点
158.axios拦截用过吗，怎么用的
163.vue的混编技术是怎么实现的。
165.路由守卫有哪些钩子函数，项目中用它实现了哪些功能，具体怎么使用的，功能是怎么是怎么实现的
166.vue插槽知道吗，slot
167.vue生命周期说下，一个父组件中嵌套了一个或多个子组件，生命周期是怎样的
168.组件间怎么传参，父组件怎么调用子组件中的方法(ref知道吗)
169.vuex中的mutation和action的有什么区别
173.diff算法，v-model原理



其他:
22.移动端的适配
24.跨域请求问题
25.兼容问题
	--hash和history，性能优化，重绘和回流,跨域,keep-alive,封装数据,拦截器,跨域，keep-alive的两种函数的作用，密码加密保存
	--跨域的解决方案，跨域，对项目有过哪些优化，为什么减少重排重绘，http状态，路由实现原理，浏览器缓存
	--谷歌和ie的并发请求个数是多少个，
45.浏览器的本地存储
46.插槽
49.兼容性
51.一个5M的图片怎么怎么从数据库访问，这张图片放在哪里，如何处理
52.要做服务器负载均衡，减轻服务器压力，减少服务器请求次数，优化图片，不用logo和精灵图片
56.git和svn的区别
61.异步请求的defer属性
62.nodejs的理解,
64.模块化的amd和cmd    模块化，东哥视频里有
68.跨域cors、jsonp，还有一个叫做nginx来着?
77.网页优化
78.权限管理，登陆加密
79.绕过前端直接在地址栏输入url访问没有权限的页面怎么处理
80.页面的加载过程
82.url输入到浏览器发生的过程
84.小程序生命周期
87.缓存以及缓存的增删改查
92.如果后台是java，跨域要怎么解决
93.版本迭代以后相同网址怎么区分加载的是当前版本的页面还是之前的
94.html语义化，angular.js
96.如何解决跨域，除了cors，jsonp，还有webpack中的proxy代理
98.给个url地址栏转成json串形式
99.执行函数顺序的 宏任务微任务，东哥视频里有
103.路由有几种模式
107.http状态码有哪些？分别代表什么含义
116.seo了解过吗
118.hash和history的不同
120.网站优化具体有哪些
124.异步的原理
134.很多家问token
136.后端给了个接口，前端没有登陆，是什么状态
138.请用代码写出前端技术中异步操作的几种方式
142.http的缓存策略有哪些，并解释其缓存原理
145.html的离线缓存有哪些，有什么区别
156.keep-alive用过吗，vue的页面缓存是怎么实现的
157.前端三大框架，区别，优缺点
159.跨域怎么解决的，在哪里配置的
160.router和route的区别，带地址跳转用哪个
164.nui-app用过吗
175.webpack打包
180.数据库条件查询
181.懒加载
`;