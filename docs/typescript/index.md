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

## `Record`

`Record` 将给定属性类型转换为对象类型，接收两个泛型参数，第一个参数是属性名，第二个参数是属性值的类型，返回一个对象类型。
```ts
interface Person {
    name: string;
    age: number;
    address: string;
}
type RecordPerson = Record<'name' | 'age' | 'address', Person>;
/**
 * 
 * type RecordPerson = { 
 *  name: Person; 
 *  age: Person; 
 *  address: Person; 
 * }
 * */
```
实现代码:
```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
}
```
- `K extends keyof any` 表示 `K` 必须是任意类型的键集合中的一部分

## `Exclude`
`Exclude`  从给定的联合类型中剔除指定的类型。
```ts
type Person = 'name' | 'age' | 'address';

type ExcludePerson = Exclude<Person, 'age'>;
/**
 * type ExcludePerson =  'name' | 'address'
 * */
```
实现代码:
```ts
type Exclude<T, U> = T extends U ? never : T;
```
- `T extends U ? never : T` 使用条件类型来判断类型 `T` 是否可以赋值给类型 `U`。如果可以赋值，即 `T` 是 `U` 的子类型，那么返回 `never` 类型，表示排除该类型。如果不可以赋值，即 `T` 不是 `U` 的子类型，那么返回 `T` 类型本身。

## `Extract`
`Extract` 从给定的联合类型中提取指定的类型。
```ts
type Person = 'name' | 'age' | 'address';
type ExtractPerson = Extract<Person, 'name' | 'address'>;
/**
 * type ExtractPerson = 'name' | 'address'
 * */
```
实现代码:
```ts
type Extract<T, U> = T extends U ? T : never;
```
- `T extends U ? T : never` 这是一个条件类型，它使用了类型的条件判断。如果类型 `T` 可以赋值给类型 `U`，则返回类型 `T` 本身，表示要提取该类型。如果类型 `T` 不能赋值给类型 `U`，则返回 `never` 类型，表示不提取该类型。

## `Omit`
`Omit` 从一个对象类型中排除指定的属性，属性是一个联合类型。
```ts
interface Person {
    name: string;
    age: number;
    address: string;
}
type OmitPerson = Omit<Person, 'age'>;
/**
 * type OmitPerson = { name: string; address: string; }
 * */
```
实现代码:
```ts
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```
- `K extends keyof T` 表示 `K` 必须是类型 `T` 的键集合中的一部分。

## `NonNullable`
`NonNullable` 从给定的联合类型中剔除 `null` 和 `undefined` 类型。

```ts
type Person = 'name' | 'age' | 'address' | null | undefined;
type NonNullablePerson = NonNullable<Person>;
/**
 * type NonNullablePerson = 'name' | 'age' | 'address'
 * */
```
实现代码:
```ts
type NonNullable<T> = T & {};
```

- `T & {}` 将 `T` 这是一个交叉类型的表达式。交叉类型用于将多个类型合并为一个类型。在这里，`T` 和`{}`（空对象字面量类型）进行交叉操作，表示将类型 `T` 和`空对象类型`合并为一个新的类型。

## `Parameters`

`Parameters` 从一个函数类型中提取参数类型，返回一个新的元组类型。它接受一个函数类型作为参数，并返回一个元组类型，其中包含了函数的每个参数类型。
```ts
function fn(a: string, b: number, c: boolean): void {}
type FnParams = Parameters<typeof fn>;
/**
 * type FnParams = [string, number, boolean];
 * */
```

实现代码:
```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

在 `TypeScript` 中，`infer` 是一个关键字，用于在条件类型中推断类型变量。条件类型是一种在类型系统中进行条件判断的方式，它可以根据不同的条件选择不同的类型。`infer` 关键字可以用于条件类型中的 `extends` 子句中，用于推断类型变量的具体类型。

在条件类型中，通常使用infer关键字将类型变量绑定到待推断的类型上。这样，在使用条件类型时，可以通过`infer`关键字来提取和操作这个类型。

在这个例子中，我们定义了一个`Parameters<T>`条件类型，它接受一个函数类型T作为参数。通过`infer`关键字，我们将类型变量`P`绑定到函数类型的参数上。如果T是一个函数类型，那么`Parameters<T>`将返回`P`，即函数的参数类型；否则，返回`never`。

`infer`关键字的使用使得我们可以在条件类型中进行类型推断，从而更加灵活地操作和处理不同类型的情况。

## `ConstructorParameters`
`ConstructorParameters` 从构造函数类型中提取构造函数的参数类型。
`ConstructorParameters` 接受一个构造函数类型作为参数，并返回一个元组类型，该元组类型包含了构造函数的参数类型。

```ts
class Person {
  constructor(name: string, age: number) {
    // constructor implementation
  }
}
type PersonConstructorParams = ConstructorParameters<typeof Person>;
/**
 * type PersonConstructorParams = [string, number];
 */

```
代码实现:
```ts
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
```
- `type ConstructorParameters<T extends abstract new (...args: any) => any>`：通过 `type` 关键字定义了一个类型别名 `ConstructorParameters<T extends abstract new (...args: any) => any>`，其中 `T` 是类型参数，表示待处理的抽象构造函数类型。
- `T extends abstract new (...args: infer P) => any ? P : never`：这是一个条件类型的表达式。条件类型用于根据某个条件选择不同的类型。在这里，`T extends abstract new (...args: infer P) => any` 是一个条件，如果 `T` 是一个抽象构造函数类型，那么 `P` 将被推断为构造函数的参数类型数组。而 `? P` 表示当条件成立时，返回 `P`，即参数类型数组；而 `: never` 表示当条件不成立时，返回 `never` 类型。


## 参考：

[盘点 TypeScript 内置类型](https://zhuanlan.zhihu.com/p/647257428)          
[extends的用法规则](https://www.jb51.net/article/279266.htm#_label3_1_2_3)


