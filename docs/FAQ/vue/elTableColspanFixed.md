# ElementUI 表格表头合并后 fixed 失效

## 问题描述

表格表头合并后 fixed 失效

## 问题原因

`el-table-column` 的属性 `fixed`，只能在合并表格的顶层设置生效；而且要设置`width`属性，否则会导致 fixed 的列宽度存在问题；

## 解决方案

1. 在表头的顶层设置`fixed`属性
2. 设置顶层表头的宽度
   eg:

```html {3,4}
<el-table-column
    prop="className"
    label="班级"
    fixed="left"
    width="450px"
    >
    <el-table-column
        prop="score"
        label="成绩"
        fixed="left"
        width="150px" 
    />
    <el-table-column
        prop="sex"
        label="性别"
        fixed="left"
        width="150px"
    />
    <el-table-column
        prop="age"
        label="年龄"
        width="150px"
    />
</el-table-column>

```
