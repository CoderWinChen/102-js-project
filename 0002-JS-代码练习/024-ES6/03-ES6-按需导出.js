// 按需导出：每个模块中可以使用多次按需导出export，但是只能使用一次默认导出export default
export let s1 = "aaa"
export let s2 = "bbb"
export function show() {
    console.log('你好');
}


// 按需导出和默认导出可以一起使用，export和export default可以一起使用
export default {
    username: '张三'
}