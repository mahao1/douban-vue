// The Vue build version to load with the `import` command

//引入jquery
import $ from 'jquery';
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import animate from 'animate.css'
Vue.use(animate)

Vue.prototype.$http = axios; // 绑定到vue原型
//import bootstrap from 'bootstrap';
//饿了么框架 链接：http://element-cn.eleme.io/#/zh-CN/component/quickstart
import ElementUI from 'element-ui';
//全局引入饿了么框架里边的组件，可以在页面级直接调用 具体使用查看上边链接
Vue.use(ElementUI);

//全局引入bootstrap的css
//import 'bootstrap/dist/css/bootstrap.css';
//全局引入饿了么框架的css
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

// import "./assets/css/reset.css";
import "./main.css";
//全局引入iocnfont图标
import './assets/font/iconfont.css';

Vue.config.productionTip = false

//引入过滤器
import filters from './filters/index.js';
//配置全局过滤器
//Object.keys() 返回数组 [索引]
Object.keys(filters).forEach((key)=>{
	Vue.filter(key,filters[key]);
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
