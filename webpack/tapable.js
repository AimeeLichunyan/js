let {SyncHook} = require('tapable');
let hook = new SyncHook();
hook.tap('name',()=> {
    console.log('name')
})
hook.call()