/*
 * @Author: MaJun
 * Dont't Settle
 * @Date: 2023-05-19 14:40:29
 * @LastEditTime: 2023-05-19 14:57:45
 * @LastEditors: MaJun
 * @Description: I wrote this.
 * @FilePath: /typeScript-study/2、类型声明/1.基础类型.ts
 */
let a:number = 0;
a = 66;

function test(a:string) {
    console.log(a);
}
test('hi')

// 类型声明 指定TS变量（参数、形参）的类型ts编译器，自动检查
// 类型声明给变量设置了变量类型，变量只能储存指定类型的值