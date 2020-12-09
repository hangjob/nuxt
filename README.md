# nuxt-itnavs

# 官网
[nuxtjs-中文网](https://www.nuxtjs.cn/)
[详细介绍Vuex使用](https://my.oschina.net/u/4326664/blog/4282437)

### asyncData 编写多个接口
```js
async asyncData({ params }) {
    // We can use async/await ES6 feature
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const todos = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );
    return { post: posts.data, todos: todos.data };
},
```
### {app}
app 是 context 中最重要的属性，就像我们 Vue 中的 this，全局方法和属性都会挂载到它里面。因为服务端渲染的特殊性，很多Nuxt提供的生命周期都是运行在服务端，也就是说它们会先于 Vue 实例的创建。因此在这些生命周期中，我们无法通过 this 去获取实例上的方法和属性。使用 app 可以来弥补这点，一般我们会把全局的方法同时注入到 this 和 app 中，在服务端的生命周期中使用 app 去访问该方法，而在客户端中使用 this，保证方法的共用

### 错误页跳转
可以在asyncData的参数添加callback回调，2种跳转方式
```js
async asyncData(context, callback) {
    callback({ statusCode: 404, message: '页面未找到或没有数据！' }) 
    context.error({ statusCode: 404, message: '页面未找到或无数据' })
},
```

### Vue.extend 编程式插入组件 注意要点

1、Vue.extend 获得是一个构造函数，可以通过实例化生成一个 Vue 实例
2、实例化时可以向这个实例传入参数，但是需要注意的是 props 的值需要通过 propsData 属性来传递
3、得到 Vue 实例后，我们需要通过一个目标元素来挂载它，有人首先会想到挂载到 #app 上，这个挂载的过程是将目标元素的内容全部替换，所以一旦挂载到 #app 上，该元素的所有子元素都会消失被替换
4、针对第3点，所以创建了一个 div 元素插入到 body 中，我们将想要挂载的内容替换到这个div上

*Vue.extend 和 Vue.component component 的区别*

1、Vue.component component两者都是需要先进行组件注册后，然后在 template 中使用注册的标签名来实现组件的使用。Vue.extend 则是编程式的写法
2、关于组件的显示与否，需要在父组件中传入一个状态来控制 或者 在组件外部用 v-if/v-show 来实现控制，而 Vue.extend 的显示与否是手动的去做组件的挂载和销毁。
3、Vue.component component 在组件中需要使用 slot 等自定义UI时更加灵活，而 Vue.extend 由于没有 template的使用，没有slot 都是通过 props 来控制UI，更加局限一些。



### 仿站目标
[https://www.vreadtech.com/](https://www.vreadtech.com/)
[https://www.zuoshipin.com/](https://www.zuoshipin.com/)

### https://uiiiuiii.com/ 
参考登录