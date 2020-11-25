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
        this.hooks.run.call() //触发run钩子函数
        // let entries = []
        let chunks = []
        let modules = [];
        let files = [];
        // // 确定入口根据配置中的entry找出所有的入口文件
        let entry = path.join(this.config.context,this.config.entry);
        // entries.push(entry)
        // // 编译模块，从入口文件出发，调用所有的loader对模块进行转义
        // // 1. 先读取此模块的内容
        let entryContent = fs.readFileSync(entry,'utf8');
        let entrySource = babelLoader(entryContent);
        let entryModule = {id: './src/index.js',source:entrySource}
        modules.push(entryModule)
        // // 先把entryModule编译成抽象语法树，然后找到里面的依赖，require import来找依赖
        // // 递归编译所有的模块
        let cssPath= path.join(this.config.context,'./src/index.css');
        let cssContent = fs.readFileSync(cssPath,'utf8');
        let cssSource = cssLoader(cssContent)
        let cssModule = {id: './src/index.css',source:cssSource}
        modules.push(cssModule)
        let chunks = {name: 'main',modules}
        chunks.push(chunk)
        // 把每个chunk转换成一个单独的文件加入到输出列表
        let file = {
            file: this.config.output.filename,
            source:  `这里是源代码`
        }
        files.push(file)
        // 在确定好输出内容后，根据配置确定输出文件名和路径，吧文件写入到文件系统
        let outputPath = path.join(
            this.config.output.path,
            this.config.output.filename
        )
        fs.writeFileSync(outputPath,file.source,'utf8')
        this.hooks.done.call()
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
// 观察者模式
选择排序