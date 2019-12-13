<template>
  <div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2019/9/2" placement="top">
          <el-card>
            <h4>49个css知识点</h4>
            <ul>
              <li>1.【负边距】左右边距表现不一致，左为负时，是左移；右为负时，是左拉；上下类似</li>
              <li>2.shape-ouside:circle()加在一个矩形div上浮动起来，右侧放很多字能看出矩形变圆了，但是实际背景色看着还是矩形</li>
              <li>3.阻止外边距合并 overflow:hidden</li>
              <li>4.BFC应用消除浮动的影响 display:flow-root;</li>
              <li>5.flex布局下margin:auto的神奇用法</li>
              <li>6.当flex-grow之和小于1时，只能按比例分配部分剩余空间，而不是全部</li>
              <li>7.【input的宽度】并不是给元素设置display:block就会自动填充父元素宽度。input 就是个例外，其默认宽度取决于size特性的值</li>
              <li>8.【定位特性】绝对定位和固定定位时，同时设置 left 和 right 等同于隐式地设置宽度</li>
              <li>9.层叠上下文：小辈就是小辈，再厉害也只是个小辈</li>
              <li>10.【粘性定位】position:sticky，粘性定位要起作用，需要设置最后滞留位置。chrome有bug，firefox完美</li>
            </ul>
            <p>2019/9/2 14:41</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/19" placement="top">
          <el-card>
            <h4>CSS加载会造成阻塞吗</h4>
            <ul>
              <li>css不会阻塞DOM树的解析</li>
              <li>css加载会阻塞DOM树渲染</li>
              <li>css加载会阻塞后面js语句的执行</li>
              <li>js会阻碍DOM解析</li>
            </ul>
            <h4>解决办法:</h4>
            <ul>
              <li>使用CDN(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)</li>
              <li>对css进行压缩（可以用很多打包工具，比如webpack，gulp等，也可以通过开启gzip压缩）</li>
              <li>合理使用缓存（设置cache-control，expires以及e-tag都是不错的 文件更新后要避免缓存带来的影响，解决防范后面加一个版本号）</li>
              <li>减少http请求数,将多个css文件合并</li>
            </ul>
            <p>2019/9/19 14:00</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/20" placement="top">
          <el-card>
            <h4>不可思议的纯css滚动进度条</h4>
            <ul>
              <li>body线性渐变 background-image:linear-gradient(to right top,#ff00cc 50%,#eeeeee 50%)</li>
              <li>body伪类元素 ::after{content:'';position:fixed;top:5px;left:0;right:0;bottom:0;z-index:-1;background:#fff}</li>
            </ul>
            <p>2019/9/20 9:27</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/20" placement="top">
          <el-card>
            <h4>css实现水平垂直居中的10种方法</h4>
            <div class="wp">
              <div class="m_box size">123</div>
            </div>
            <ul>
              <li>absolute+负margin（需要知道居中元素固定宽高）</li>
              <li>absolute+margin auto（兼容性好 需要知道居中元素固定宽高）</li>
              <li>absolute+calc（依赖calc的兼容性 需要知道居中元素固定宽高 left:calc(50% - 50px);）</li>
              <li>absolute+transform(依赖translate2d的兼容性 不需要知道居中元素的宽高)</li>
              <li>line-height:200px; text-align:center;(父级)display:inline-block;vertical-align:middle;(子级)</li>
              <li>writiing-mode:vertical-lr;text-align:center;(父级) writiing-mode:horizontal-tb;display:inline-block;(子级) display:inline-block;margin:auto;(居中元素)</li>
              <li>table单元格天然就是垂直居中的 只需要加一个水平居中就行 td text-align:center; 居中元素 display:inline-block;</li>
              <li>display:table-cell;vertical-align:middle; (父要设置宽度) display:inline-block;(子)</li>
              <li>display:flex; align-items:center;justify-content:center;(父)</li>
              <li>display:grid;(父) align-self:center;justify-self:center;(子)【兼容性不如flex 不推荐使用】</li>
            </ul>
            <p>2019/9/20 13:56</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/20" placement="top">
          <el-card>
            <h4>word_break、word_warp、white-space</h4>
            <ul>
              <li>white-space:normal | nowarp(永不换行) | pre(preserve) | pre-warp(preserve+warp) | pre-line(preserve+new line+warp);</li>
              <li>word-break:normal | keep-all(所有"单词"一律不拆分换行,只有空格可以触发自动换行) | break-all(所有单词碰到边界一律拆分换行，慎用) ;</li>
              <li>word-warp(overflow-warp):normal | break-word(只有当一个单词一整行都显示不下时，才会拆分换行该单词);</li>
            </ul>
            <p>2019/9/20 17:27</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/23" placement="top">
          <el-card>
            <h4>css3伪类使用技巧和运用(伪类一个冒号表示，伪元素两个冒号表示)</h4>
            <div class="before">
              <h1>before</h1>
              <p>通过 animate/transiton box-shadow实现盒子阴影效果，重绘消耗较多</p>
            </div>
            <div class="after">
              <h1>after</h1>
              <p>通过修改伪元素的透明度实现同样的效果，没有重绘消耗</p>
            </div>
            <div class="mbx">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Pitures</a>
                </li>
                <li>italy</li>
              </ul>
            </div>
            <div class="mymove">
              <div class="box one">
                <div class="item">buy</div>
              </div>
              <div class="box two">
                <div class="item">buy</div>
              </div>
              <div class="mm_box">
                <div class="mm_in">my</div>
              </div>
              <div class="mm_btns">
                <span>button</span>
              </div>
              <div class="mm_jiantou">
                <div class="mm_j2"></div>
              </div>
              <div class="myskey">my box</div>
            </div>
            <div style="display:flex;">
              <div class="mytool">MY TOOL</div>
              <div>
                <h1>Typing Animation</h1>
                <p class="tagline">
                  <span class="tagline-skill">
                    <span class="tagline-skill_inner">webdesign</span>
                  </span>
                </p>
              </div>
            </div>
            <div class="my_content">
              <div class="pre-headline">23 October 1983</div>
              <h1>Welcome The Internet, The Nice Version</h1>
              <p>
                Was Phileas Fogg rich? Undoubtedly. But those who knew him best could not imagine how he had made his fortune, and Mr. Fogg was the last person to whom to apply for the information. He was not lavish, nor, on the contrary, avaricious; for, whenever
                he knew that money was needed for a noble, useful, or benevolent purpose, he supplied it quietly and sometimes anonymously. He was, in short, the least communicative of men. He talked very little, and seemed all the more mysterious for his taciturn
                manner. His daily habits were quite open to observation; but whatever he did was so exactly the same thing that he had always done before, that the wits of the curious were fairly puzzled.
              </p>

              <p>
                Had he travelled? It was likely, for no one seemed to know the world more familiarly; there was no spot so secluded that he did not appear to have an intimate acquaintance with it. He often corrected, with a few clear words, the thousand conjectures
                advanced by members of the club as to lost and unheard-of travellers, pointing out the true probabilities, and seeming as if gifted with a sort of second sight, so often did events justify his predictions. He must have travelled everywhere, at
                least in the spirit.
              </p>
            </div>
            <div class="pageZY">
              <ul>
                <li>
                  <a href="P1.html" target="_blank" data-page="1">青铜-1、伪类实现盒子阴影</a>
                </li>
                <li>
                  <a href="P2.html" target="_blank" data-page="2">青铜-2、伪元素:before实现的面包屑导航栏</a>
                </li>
                <li>
                  <a href="P3.html" target="_blank" data-page="3">青铜-3、伪元素实现悬停时按钮填充和边界浮动动画</a>
                </li>
                <li>
                  <a href="P4.html" target="_blank" data-page="4">青铜-4、伪类after实现的三角箭头</a>
                </li>
                <li>
                  <a href="P5.html" target="_blank" data-page="5">青铜-5、伪类after实现的图片箭头</a>
                </li>
                <li>
                  <a href="P6.html" target="_blank" data-page="6">青铜-6、伪元素实现带角度的底部边界（倾斜的边界）</a>
                </li>
                <li>
                  <a href="P7.html" target="_blank" data-page="7">王者-1、伪元素和平移（translate）变换实现的提示框</a>
                </li>
                <li>
                  <a href="P8.html" target="_blank" data-page="8">王者-2、使用CSS3伪元素实现的自动打字动画</a>
                </li>
                <li>
                  <a href="P9.html" target="_blank" data-page="9">王者-3、CSS3 伪元素构建的文章水印背景</a>
                </li>
                <li>
                  <a href="index.html" target="_blank" data-page="10">王者-4、CSS3 用伪元素做页码摘要</a>
                </li>
              </ul>
            </div>
            <p>2019/9/23 11:15</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/25" placement="top">
          <el-card>
            <h1>css性能优化的8个技巧</h1>
            <ul>
              <li>内联首屏关键css【内联css能够使浏览器开始页面渲染的时间提前，只将渲染首屏内容所需的关键css内联到HTML中】</li>
              <li>
                异步加载css ：
                (1) // 创建link标签
                const myCSS = document.createElement( "link" );
                myCSS.rel = "stylesheet";
                myCSS.href = "mystyles.css";
                // 插入到header的最后位置
                document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
                (2)
                link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'"
                (3)文件压缩
                (4)去除无用css
                <h4>有选择的使用选择器</h4>
                <ol>
                  <li>保持简单，不要使用嵌套过多过于复杂的选择器</li>
                  <li>通配符和属性选择器效率最低，需要匹配的元素最多，尽量避免使用</li>
                  <li>不要使用类选择器和ID选择器修饰元素标签，如h3#content 降低效率</li>
                  <li>不要为了追求速度而放弃可读性与可维护性。</li>
                </ol>
                <h4>减少使用昂贵的属性</h4>
                <p>所有需要浏览器进行操作或计算的属性相对而言都需要花费更大的代价（如：box-shadow/border-radius/filter/opacity/:nth-child）</p>
                <h4>优化重排与重绘</h4>
                <p>
                  重排会导致浏览器重新计算整个文档，重新构建渲染树，降低浏览器渲染速度[改变font-size和font-family、改变元素的内外边距、通过js改变css类、
                  通过js获取DOM元素的位置属性（width，height等）、css伪类激活、滚动滚动条或者改变窗口大小等会导致重排]；flex具有更好的重排性能，建议使用。
                </p>
                <p>避免不必要的重绘（如页面滚动禁用hover事件），改变元素外观会导致重绘。可通过硬件加速和will-change来提升动画性能.</p>
                <p>不要使用@import引入css（会影响浏览器的并行下载）</p>
              </li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2019/9/27" placement="top">
          <el-card>
            <h2>css新特性</h2>
            <ul>
              <li>
                <p>transition:css属性,花费时间,效果曲线(默认ease),延迟时间(默认0)</p>
                <p>
                  /*宽度从原始值到制定值的一个过渡，运动曲线ease,运动时间0.5秒，0.2秒后执行过渡*/
                  <br />transition：width,.5s,ease,.2s
                  <br />/* 可分开为各个属性 */
                  <br />transition-property: width;
                  <br />transition-duration: 1s;
                  <br />transition-timing-function: linear;
                  <br />transition-delay: 2s;
                </p>
                <div class="d_btn">
                  <span>demo</span>
                  <ul>
                    <li>home</li>
                    <li>study</li>
                    <li>summer</li>
                  </ul>
                </div>
                <p>animation:动画名称,一个周期花费时间,运动曲线(默认ease),动画延迟(默认0),播放次数(默认1,是否反向播放动画(默认normal),是否暂停动画(默认running)</p>
                <p>
                  /*无限执行logo2-line动画，每次运动时间2秒，运动曲线为 linear，并且执行反向动画*/
                  <br />animation: logo2-line 2s linear alternate infinite;
                  <br />animation-fill-mode : none | forwards | backwards | both;
                  /*none：不改变默认行为。
                  forwards ：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
                  backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
                  both：向前和向后填充模式都被应用。 */
                </p>
                <div class="logo-box">
                  <div class="logo1">
                    <img src="http://img.52z.com/upload/201707/27/1501121556251740.jpg" />
                  </div>
                  <!-- <div class="logo2">
                    <img src="http://img.52z.com/upload/201707/27/1501121556251740.jpg" />
                  </div>
                  <div class="logo-text">
                    <img src="http://img.52z.com/upload/201707/27/1501121556251740.jpg" />
                  </div>-->
                </div>
                <div class="mymove2">
                  <div class="mymove22"></div>
                </div>
                <div class="myrotate">myrotate</div>
                <div class="myxzq">
                  <h4>选择器</h4>
                  <ul>
                    <li>p~ul [选择前面有p元素的每个ul元素]</li>
                  </ul>
                </div>
                <div class="myfanse">
                  <h4>反射[倒影]</h4>
                  <ul>
                    <li>
                      -webkit-box-reflect:方向[ above-上 | below-下 | right-右 | left-左 ]，偏移量，遮罩图片
                      滤镜： 黑白色filter:grayscale(100%) 褐色filter:sepia(1)
                      饱和度salurate(2) 色相旋转hue-rotate(90deg) 反色 filter:invert(1)
                      透明度opacity(.5) 亮色brightness(.5) 对比度contrast(2) 模糊blur(3px) 阴影drop-shadow(5px 5px 5px #000)
                      <div class="mybelow">
                        <img
                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569661894020&di=cd0df12ddc4162d7ed2b29e9ae7c0d10&imgtype=0&src=http%3A%2F%2Fclubimg.club.vmall.com%2Fdata%2Fattachment%2Fforum%2F201812%2F21%2F215626ci9yvgddppv53slw.jpg"
                          alt="倒影图片"
                        />
                      </div>
                      媒体查询:@media screen and (max-width: 960px) {
                      body {
                      background-color: darkgoldenrod;
                      }
                      }
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </el-card>
        </el-timeline-item>
        <el-timeline-item>
          <el-card>
            <h2>CSS Tricks(技巧)</h2>
            <main>
              多重边框
              <div class="ntht1"></div>
              <div class="ntht2"></div>
            </main>边框内圆角
            <div class="myshadw"></div>圆与椭圆
            <div class="my"></div>
            <button>效果按钮</button>
            <div class="loading">sfdsssssssssssssssssssssssssssssssssssssssss</div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- 回到顶部 -->
    <el-backtop :bottom="30">
      <div>
        <img src="../../../../static/images/top.png" alt="top" width="50px" />
      </div>
    </el-backtop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    // console.log(a);
    // a();
    // var a=6;
    // function a(){
    //   console.log(10)
    // }
    // console.log(a)
    // a();
    // 使用递归方法生成一个2-32之间不重复的长度为5的数组
    this.funnum(5);
    console.log(this.arr);
    // 写一个方法把下划线命名转成驼峰命名a_zeng_end
    console.log(this.tuoFeng("a_zeng_end"));
  },
  methods: {
    funnum(val) {
      let num = Math.floor(Math.random() * 31 + 2);
      if (val < 6 && val > 0) {
        if (this.arr.indexOf(num) == -1) {
          this.arr.push(num);
          val--;
        }
        this.funnum(val);
      }
    },
    tuoFeng(val) {
      let arr = val.split("_");
      let newarr = [];
      arr.map((item, index) => {
        if (index !== 0) {
          if (item[0]) {
            newarr.push(item.replace(item[0], item[0].toUpperCase()));
          }
        }
      });
      newarr.unshift(arr[0].replace(arr[0][0], arr[0][0].toUpperCase()));
      return newarr.join("");
    }
  }
};
</script>
<style scoped>
@import "../../../assets/css/growup.css";
button {
  background-image: linear-gradient(#5187c4, #1c2f45);
  background-size: auto 200%;
  background-position: 0 100%;
  transition: background-position 0.5s;
}
button:hover {
  background-position: 0 0;
}
.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis 2s infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
}
@keyframes ellipsis {
  from {
    width: 2px;
  }
  to {
    width: 15px;
  }
}

main {
  width: 100%;
  padding: 0 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.ntht1 {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fafafa;
  margin: 105px 29px;
  box-shadow: 0 0 0 10px #e8e2d6, 0 0 0 20px #e1d9c9, 0 0 0 30px #d9cfbb,
    0 0 0 40px #d2c6ae, 0 0 0 50px #cabca0, 0 0 0 60px #c3b393,
    0 0 0 70px #bba985, 0 0 0 80px #b4a078;
}
.ntht2 {
  width: 200px;
  height: 120px;
  background: #efebe9;
  border: 5px solid #b4a078;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
}
.myshadw {
  width: 209px;
  height: 100px;
  margin: 29px auto;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f4f0ea;
  outline: 6px solid #b4a078;
  box-shadow: 0 0 0 6px #b4a078;
}
</style>