let { SyncHook } = require('tapable');
class Compiler {
    constructor(config) {
        this.config = config;
        this.hooks = {
            run: new SyncHook(),
            done: new SyncHook()
        }
    }
    run() { // 开始编译
        let entries = []
        let modules = [];
        // 确定入口根据配置中的entry找出所有的入口文件
        let entry = path.join(this.config.context,this.config.entry);
        entries.push(entry)
        // 编译模块，从入口文件出发，调用所有的loader对模块进行转义
        // 1. 先读取此模块的内容
        let entryContent = fs.readFileSync(entry,'utf8');
        let entrySource = babelLoader(entryContent);
        let entryModule = {id: './src/index.js',source:entrySource}
        modules.push(entryModule)
        // 先把entryModule编译成抽象语法树，然后找到里面的依赖，require import来找依赖
        // 递归编译所有的模块
        let cssPath= path.join(this.config.context,'./src/index.css');
        let cssContent = fs.readFileSync(cssPath,'utf8');
        let cssSource = cssLoader(cssContent)
        let cssModule = {id: './src/index.css',source:cssSource}
        modules.push(cssModule)
    }
}
function babelLoader(source) {
    return `let sum = function(a,b) {return a+b}`
}
function cssLoader(source) {
    return `
    let style = document.createElement('style);
    style.innerHTML =body{};
    document.head.appendChild(style)`
}
// 获取配置文件
let config = require('./webpack.config');
let compiler = new Compiler(config)
// 加载所有的插件，执行对象的run方法，开始执行编译
for(let plugin of config.plugins) {
    plugin.apply(compiler)
}