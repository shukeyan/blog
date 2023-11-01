# elTable 表头合并

## rowspan

### 效果

![rowspan](/vue/rowspan.png)

### 代码

```html
<el-table :data="list">
  <el-table-column label="鸡舍">
    <el-table-column
      label="栋舍"
      prop="houseName"></el-table-column>
    <el-table-column
      label="栋长"
      prop="houseUserName"></el-table-column>
    <el-table-column
      label="周龄"
      prop="weekAge"></el-table-column>
    <el-table-column
      label="日龄"
      prop="dayAge"></el-table-column>
  </el-table-column>
  <el-table></el-table
></el-table>
```

## colspan

### 效果

![colspan](/vue/colspan.png)

### 代码

```html
<template>
 <el-table :data="list">
        <el-table-column label="鸡舍" :header-cell-style="headerCellStyle">
             <el-table-column label="栋舍" prop="houseName"></el-table-column>
             <el-table-column label="栋长" prop="houseUserName"></el-table-column>
             <el-table-column label="周龄" prop="weekAge"></el-table-column>
             <el-table-column label="日龄" prop="dayAge"></el-table-column>
             <el-table-column label="期初存栏" prop="gender"></el-table-column>
             <el-table-column label="期初存栏" prop="cellName"></el-table-column>
        </el-table-column>
    <el-table>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
           async headerCellStyle({row, column, rowIndex, columnIndex}) {
                if(rowIndex == 1 && columnIndex == 4) {
                    await this.$nextTick()
                    let el = document.getElementsByClassName(column.id)
                    el = el.length && el[0]
                    el.setAttribute('colspan', 2)
                } 
                if(rowIndex == 1 && columnIndex == 5) {
                    await this.$nextTick()
                    let el = document.getElementsByClassName(column.id)
                    el = el.length && el[0]
                    el.style.display = 'none'
                } 
                return {}
            }
        }
    }
</script>
```
