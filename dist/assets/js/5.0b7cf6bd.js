(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,n,r){"use strict";r.r(n);var t=r(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"文件目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件目录")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("├── scripts ------------------------------- 构建相关的文件，一般情况下我们不需要动\n│   ├── git-hooks ------------------------- 存放git钩子的目录\n│   ├── alias.js -------------------------- 别名配置\n│   ├── config.js ------------------------- 生成rollup配置的文件\n│   ├── build.js -------------------------- 对 config.js 中所有的rollup配置进行构建\n│   ├── ci.sh ----------------------------- 持续集成运行的脚本\n│   ├── release.sh ------------------------ 用于自动发布新版本的脚本\n├── dist ---------------------------------- 构建后文件的输出目录\n├── examples ------------------------------ 存放一些使用Vue开发的应用案例\n├── flow ---------------------------------- 类型声明，使用开源项目 [Flow](https://flowtype.org/)\n├── packages ------------------------------ 存放独立发布的包的目录\n├── test ---------------------------------- 包含所有测试文件\n├── src ----------------------------------- 这个是我们最应该关注的目录，包含了源码\n│   ├── compiler -------------------------- 编译器代码的存放目录，将 template 编译为 render 函数\n│   ├── core ------------------------------ 存放通用的，与平台无关的代码\n│   │   ├── observer ---------------------- 响应系统，包含数据观测的核心代码\n│   │   ├── vdom -------------------------- 包含虚拟DOM创建(creation)和打补丁(patching)的代码\n│   │   ├── instance ---------------------- 包含Vue构造函数设计相关的代码\n│   │   ├── global-api -------------------- 包含给Vue构造函数挂载全局方法(静态方法)或属性的代码\n│   │   ├── components -------------------- 包含抽象出来的通用组件\n│   ├── server ---------------------------- 包含服务端渲染(server-side rendering)的相关代码\n│   ├── platforms ------------------------- 包含平台特有的相关代码，不同平台的不同构建的入口文件也在这里\n│   │   ├── web --------------------------- web平台\n│   │   │   ├── entry-runtime.js ---------- 运行时构建的入口，不包含模板(template)到render函数的编译器，所以不支持 `template` 选项，我们使用vue默认导出的就是这个运行时的版本。大家使用的时候要注意\n│   │   │   ├── entry-runtime-with-compiler.js -- 独立构建版本的入口，它在 entry-runtime 的基础上添加了模板(template)到render函数的编译器\n│   │   │   ├── entry-compiler.js --------- vue-template-compiler 包的入口文件\n│   │   │   ├── entry-server-renderer.js -- vue-server-renderer 包的入口文件\n│   │   │   ├── entry-server-basic-renderer.js -- 输出 packages/vue-server-renderer/basic.js 文件\n│   │   ├── weex -------------------------- 混合应用\n│   ├── sfc ------------------------------- 包含单文件组件(.vue文件)的解析逻辑，用于vue-template-compiler包\n│   ├── shared ---------------------------- 包含整个代码库通用的代码\n├── package.json -------------------------- 不解释\n├── yarn.lock ----------------------------- yarn 锁定文件\n├── .editorconfig ------------------------- 针对编辑器的编码风格配置文件\n├── .flowconfig --------------------------- flow 的配置文件\n├── .babelrc ------------------------------ babel 配置文件\n├── .eslintrc ----------------------------- eslint 配置文件\n├── .eslintignore ------------------------- eslint 忽略配置\n├── .gitignore ---------------------------- git 忽略配置\n")])])])])}],!1,null,null,null);s.options.__file="index.md";n.default=s.exports}}]);