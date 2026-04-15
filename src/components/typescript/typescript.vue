<!--
 * @Author: zengxiaorong zxr1543109808@163.com
 * @Date: 2026-04-15 14:05:28
 * @LastEditors: zengxiaorong zxr1543109808@163.com
 * @LastEditTime: 2026-04-15 14:07:16
 * @FilePath: \myBlog\src\components\typescript\ts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="typescript-intro">
        <h1>TypeScript 简介</h1>
        <p>
            TypeScript 是由微软开发的开源编程语言。它是 JavaScript 的一个超集，添加了可选的静态类型和基于类的面向对象编程。
        </p>
        <h2>主要特性</h2>
        <ul>
            <li>静态类型检查</li>
            <li>支持最新的 JavaScript 特性</li>
            <li>强大的类型推断</li>
            <li>更好的代码可维护性</li>
        </ul>
        <h2>示例代码</h2>
        <pre>
            <code>
                // TypeScript 示例
                function greet(name: string): string {
                    return `Hello, ${name}!`;
                }
                let user: string = "World";
                console.log(greet(user));
            </code>
        </pre>
        <h2>为什么使用 TypeScript？</h2>
        <ol>
            <li>减少运行时错误</li>
            <li>提升开发效率</li>
            <li>更好的编辑器支持和自动补全</li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "TypeScriptIntro"
};
</script>

<style scoped>
.typescript-intro {
    max-width: 700px;
    margin: 40px auto;
    padding: 24px;
    background: #f9f9f9;
    border-radius: 8px;
    font-family: 'Segoe UI', Arial, sans-serif;
}
h1 {
    color: #3178c6;
}
pre {
    background: #272822;
    color: #f8f8f2;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
}
</style>