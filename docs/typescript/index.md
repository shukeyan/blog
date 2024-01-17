# typescript内置方法类型

## Partial

`Partial` 可以将给定类型的所有属性转换为可选的属性， 生成新的类型，此类型包含给定类型的所有属性且所有必须属性转换为可选属性。

```ts
 interface Person {
    name: string;
    age: number;
    address: string;
 }
 type PartialPerson = Partial<Person>;
 /**
  * type PartialPerson = { name?: string; age?: number; address?: string; }
  */
```
`Partial`实现代码:
```ts
type Partial<T> = {
    [P in keyof T]?: T[P]
}
```
- `keyof T`获取给定类型T的所有属性
- `[P in keyof T]` 遍历给定类型T的所有属性
- `?: T[P]` 使用可选属性操作符`?`将属性转换为可选属性。`P`是使用`in`操作符遍历T的属性过程中的属性变量，`T[P]`是T类型对应属性的类型

## Required
`Required` 可以将给定类型的所有属性转换为必选的属性，生成新的类型，此类型包含给定类型的所有属性且所有可选属性转换为必需属性。

```ts
interface Person {
    name?: string;
    age?: number;
    address?: string;
}
type RequiredPerson = Required<Person>;

/**
 * type RequiredPerson = { name: string; age: number; address: string; }
 */

```
`Required`实现代码:
```ts
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```
- `keyof T`获取给定类型T的所有属性
- `[P in keyof T]` 遍历给定类型T的所有属性
- `-?: T[P]` `-?`操作符是必需操作符，可以将可选属性转换为必需属性。

## Readonly
`Readonly` 可以将给定类型的所有属性转换为只读属性，生成新的类型，此类型包含给定类型的所有属性且所有属性转换为只读属性。
```ts
interface Person {
    name: string;
    age: number;
    address: string;
}
type ReadonlyPerson = Readonly<Person>;
/**
 * type ReadonlyPerson = { 
 *  readonly name: string; 
 *  readonly age: number; 
 *  readonly address: string; 
 * }
 * */
```
`Readonly`实现代码:
```ts
type Readonly<T> = {
   readonly [p in keyof T]: T[p];
}
```
- `keyof T`获取给定类型T的所有属性
- `[p in keyof T]` 遍历给定类型T的所有属性
- `readonly [p in keyof T]` 将遍历的所有属性转换为只读属性。

## Pick
`Pick` 可以从给定类型中挑选指定的属性，生成新新的类型，此类型包含给定类型中选定的属性。
```ts
interface Person {
    name: string;
    age: number;
    address: string;
}
type PickPerson = Pick<Person, 'name'|'age'>;

/**
 * type PickPerson = { name: string; age: number; }
 * */
```
`Pick`实现代码:
```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}
```
- `keyof T`获取给定类型T的所有属性
- `K extends keyof T` `T` 是一个类型参数，表示待处理的类型，`K` 是一个类型参数，表示要选取的属性的键集合。 表示 `K` 必须是类型 `T` 的键集合中的一部分。
- `[P in K]` 遍历`K`类型组成的集合




参考：[盘点 TypeScript 内置类型](https://zhuanlan.zhihu.com/p/647257428)


