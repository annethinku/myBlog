<template>
    <div class="result">
        <div class="re-title">
            一、CSS
        </div>
        <div class="re-content">
            <ul>
                <li>
                   <b> 1.盒模型</b> <br/>
                    盒模型包括边距margin、边框border、填充padding、内容content<br/>
                    W3C盒模型【标准盒模型】：元素宽高大小表现为内容大小 <br/>
                    IE浏览器下的盒模型【怪异盒模型】：元素宽高表现为border边框+内边距padding+内容content,背景会延伸到边框的外延
                </li>
                <li>
                    <b>2.css3新特性</b>
                    <p>word-wrap  文字换行</p>
                    <p>text-overflow 超出指定容器边界如何显示</p>
                    <p>text-decoration 文字渲染</p>
                    <p>text-shadow 文字阴影</p>
                    <p>gradient 渐变效果</p>
                    <p>transition 过渡效果 transition-duration过渡的持续时间</p>
                    <p>transform拉伸、压缩、旋转、偏移等交换</p>
                    <p>animation动画</p>
                    <p>transition和animation的区别：
                        都是随时间改变元素的属性值。
                        transition需要通过一个事件触发动画，animation不需要
                        transition只有两帧from..to.. ，animation是一帧一帧的
                    </p>
                </li>
                <li>
                    <b>3.CSS选择器及其优先级</b>
                    <p>!important</p>
                    <p>内联样式 style=""</p>
                    <p>ID选择器#id</p>
                    <p>类选择器/属性选择器/伪类选择器</p>
                    <p>元素选择器/关系选择器/伪元素选择器html+div>span::after</p>
                    <p>通配符选择器*</p>
                </li>
                <li>
                    <b>4.BFC</b>
                    <p>BFC格式化上下文，是web页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。</p>
                    <p>BFC应用：防止margin重叠、清除内部浮动、自适应两/多栏布局、防止字体环绕</p>
                    <p>触发BFC条件：根元素、float的值不为none、overflow的值不为visible、display的值为inline-block/table-cell/table-caption、position的值为absolute/fixed</p>
                    <p>BFC的特性：内部的box会在垂直方向上一个一个的放置。垂直方向上的距离由margin决定、bfc的区域不会与float元素区域重叠。计算bfc高度时，浮动元素也参与计算。bfc就是页面上的一个独立容器，容器里面的子元素不会影响外界元素。</p>
               </li>
               <li>
                   <b>5.div水平居中</b>
                   <p>
                       行内元素：text-align:center; <br/>
                       块级元素：margin:0 auto;<br/>
                       flex布局:display:flex;justify-content:center;<br/>
                       元素定宽：width:宽度;position:absolute;left:50%;margin-left:-0.5*宽度或position:absolute;left:0;right:0;margin:0 auto;<br/>
                       元素不定宽：position:absolute;left:50%;transform:translate(-50%,0);
                   </p>
               </li>
                <li>
                   <b>6.div垂直居中</b>
                   <p>
                       行内元素：height:高度;line-height:高度 <br/>
                       table: .parent{display:table;}.son{display:table-cell;vertical-algin:middle;}<br/>
                       flex布局:display:flex;align-item:center;<br/>
                       元素定高：height:高度;position:absolute;top:50%;margin-top:-0.5*高度或position:absolute;top:0;bottom:0;margin:auto 0;<br/>
                       元素不定高：position:absolute;top:50%;transform:translate(0,-50%);
                   </p>
               </li>
               <li>
                   <b>7.让其他元素消失</b>
                   <p>
                       visibility:hidden; 元素隐藏，不会改变页面布局，不会触发绑定事件 <br/>
                       display:none;元素隐藏，会改变页面布局，不会触发绑定事件【删除了】<br/>
                       opacity:0;元素隐藏，不会改变页面布局，会触发绑定事件<br/>
                       z-index:-1;置于其他元素下面
                   </p>
               </li>
               <li>
                   <b>8.清除浮动</b>
                   <p>
                      在浮动元素后面添加clear:both的空div元素;
                   </p>
                   <p>
                       给父元素添加overflow:hidden或auto触发BFC;
                   </p>
                   <p>
                       使用伪元素：
                     <pre>
&lt;div class="container clearfix"&gt;
    &lt;div class="left"&gt;&lt;/div&gt;
    &lt;div class="right"&gt;&lt;/div&gt;
&lt;/div&gt;
.clearfix{
    zoom: 1; /*IE6*/
}
.clearfix:after{
    content: ".";
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
}
                     </pre>
                     
                   </p>
                    <div class="banyuan"></div>
               </li>
            </ul>
        </div>
          <div class="re-title">
           二、JS
        </div>
        <div class="re-content">
            <ul>
                <li>
                    <b>1.js数据类型</b>
                    <p>5种基本类型：String/Number/Boolean/Null/Undefined 引用数据类型：Object/Function/Array</p>
                </li>
                <li>
                    <b>2.判断数据类型的方法</b>
                    <p>
                        typeof  无法准确判断 object、null、array类型 返回都是object
                    </p>
                    <p>
                        instanceof  无法准确判断基本数据类型类型 都是false  可判断object、function、array
                    </p>
                    <p>
                        Object.prototype.toString.call()可准确判读任何类型，缺点不容易记，建议封装后使用
                    </p>
                </li>
                <li>
                    <b>
                        3.var、let、const区别
                    </b>
                    <p>
                        var 作用域为该语句所在的函数内且存在变量提升  <br/>
                        let、const 作用域为该语句所在的代码块内且不存在变量提升 未声明不能使用<br/>
                        let声明变量 const声明常量【声明时必须赋值 赋值后不可修改】
                    </p>
                </li>
                <li>
                    <b>
                        4.null和undefined的区别
                    </b>
                    <p>
                        当声明的变量还未被初始化时，默认值为undefined
                    </p>
                    <p>
                        null用来表示不存在的对象
                    </p>
                </li>
                <li>
                    <b>
                        5.定义函数的方法
                    </b>
                    <pre>
函数声明：
function myfun(){}
function (){}匿名函数
()=>{}
函数表达式：
var myf=function(){}
let a=()=>{}
构造函数：
const aa=new Function('a','b','return a+b')
                    </pre>
                </li>
                <li>
                   <b> 6.JS作用域的理解</b>
                   <p>
                       作用域分为全局作用域和函数作用域，函数作用域声明的变量只能在函数内部访问，外界无法访问。
                       没有块级作用域，导致if for逻辑语句中的变量能被外界访问 所以有了es6的le const声明
                   </p>
                </li>
                <li>
                    <b>7.闭包的理解</b>
                    <p>
                        简述为函数中声明函数，函数内部和外部搭建一座桥梁，子函数可访问父函数中的变量，反之不可。
                        保护变量一直存在内存中不被外界污染，闭包很消耗内存，不建议使用。
                    </p>
                </li>
                <li>
                    <b>8.数组去重</b>
                    <p>
       let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
       第一种：console.log(Array.from(new Set(arr)))
       <!-- let newa=[arr[0]];
       for(let i=0;i<arr.length;i++){
           let item=arr[i];
           if(newa.indexOf(item)==-1){
               newa.push(item);
           }
       }
       console.log(newa) -->
                    </p>
                </li>
                <li>
                    <b>9.call、apply、bind的区别</b>
                    <p>
                        三者都是用来将函数绑定在上下文中，用来改变函数中this的指向，不同在于语法不同。
                    </p>
                    <p>
                        call方法接受若干个参数列表
                        apply方法接受一个包含多个参数的数组
                        bind创建一个新的函数，当被调用时，将this设置为提供的值
                    </p>
                </li>
                <li>
                    <b>10.深拷贝和浅拷贝</b>
                    <pre>
浅拷贝：
function qianKb(obj){
    let kb={};
    for(let i in obj){
        kb[i]=obj[i];
    }
    return kb;
}
console.log(qianKb({aa:'一个aa'}));
深拷贝，遍历对象的每一个属性
function deepClone(obj){
    let result;
    if(typeof obj=='object'){
        result=isArray(obj)?[]:{};
        for(let i in obj){
            result[i]=isObject(obj[i])||isArray(obj[i])?deepClone(obj[i]):obj[i];
        }
    }else{
        result=obj;
    }
    return result;
}
function isObject(obj){
    return Object.prototype.toString.call(obj)=='[object Object]';
}
function isArray(obj){
    return Object.prototype.toString.call(obj)=='[object Array]';
}
                    </pre>
                </li>
                <li>
                    <b>11.防抖和节流</b>
                    <pre>
防抖：
function debounce(fn,delay){
    let timer=null;
    return function(){
        if(timer){clearTimeout(timer)}
        timer=setTimeout(()=>{
            fn.apply(this,arguments);
        },delay)
        }
}
节流：
function JieLiu(fn,cy){
    let start=Date.now();
    let now;
    let timer;
    return function(){
        now=  Date.now();
        clearTimeout(timer);
        if(now-start>=cy){
            fn.apply(this,arguments);
            start=now;
        }else{
            timer=setTimeout(()=>{
                fn.apply(this,arguments);
            },delay)
        }
    }
}
                    </pre>
                </li>
                <li>
                    <b>12.JS实现继承</b>
                     <pre>
创建一个类:
function Animal(name,color){
    this.name=name||'Animal';
    this.color=color||'black';
    this.sleep=function(){
        console.log(this.name+'正在睡觉！');
    }
}
Animal.prototype.eat=function(food){
    console.log(this.name+'在吃'+food);
}
原型链继承：new了一个空对象，这个空对象指向Animal，而Cat.prototype指向空对象，这种就是原型链的继承。
function Cat(name){
    this.name=name||'tom';
}
Cat.prototype=new Animal();
var cat=new Cat();
cat.color.push('red');//['black','red']
cat.sleep()//tom正在睡觉！
cat.eat('flash')//tom正在吃flash
var new_cat=new Cat();
new_cat.color//['black','red']
特点：基于原型链，既是父类的实例也是子类的实例
缺点：无法实现多继承，所有新实例都会共享父类实例的属性
构造继承：
function Dog(name){
  Animal.call(this);
  this.name=name||'dog';
}
var dog=new Dog();
dog.color.push('blue');
dog.color//['black','blue']
dog.sleep()//dog正在睡觉！;
dog.eat('food')//Uncaught TypeError: dog.eat is not a function
var new_dog=new Dog();
new_dog.color//['black']
特点：可实现多继承（call多个），解决了所有实例共享父类实例的属性问题。
缺点：只能继承父类实例的属性方法，不能继承原型上的属性和方法。
组合继承：
function Mouse(name){
   Animal.call(this);
   this.name=name||'mouse';
}
Mouse.prototype=new Animal();
Mouse.prototype.constructor=Mouse;
特点：可以继承实例属性和方法，也可以继承原型属性和方法。
缺点：调用了两次父类构造函数，生成了两份实例。
                     </pre>
                </li>
            </ul>
        </div>
        <div class="re-title">
           三、Vue
        </div>
        <div class="re-content"></div>
          <div class="re-title">
          四、浏览器
        </div>
        <div class="re-content"></div>
          <div class="re-title">
           五、性能优化
        </div>
        <div class="re-content"></div>
    </div>
</template>
<script>
export default {
    mounted(){


    }
}
</script>
<style scoped>
    .result{
        width: 1000px;
        margin: 0 auto;
    }
    .re-title{
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0;
    }
    .re-content ul li{
        font-size: 16px;
        color: #333;
    }
      .re-content ul li b{
          display: block;
          margin: 20px 0 10px;
      }
      .banyuan{
          width: 50px;
          height: 0;
         border:50px red solid;
         border-color: red transparent transparent transparent;
       
      }
</style>