# git rev-parse

`git rev-parse`是`git revision-parse`的缩写。它用于用于解析和显示Git对象的引用或标识符的值。

## 用法

### 1. 查询当前的commit
#### 1.1 查询完整的commit
```bash
git rev-parse HEAD  # 获取当前commit的sha1值-->f5818eb0e37715f2a70c0237550e2e03fea9b6a4
```
#### 1.2 查询简短的commit
```bash
git rev-parse --short HEAD  # 获取当前commit的sha1值-->f5818eb
```

### 2. 查询当前的分支
#### 2.1 查询当前本地分支
```bash
git rev-parse --abbrev-ref HEAD  # 获取当前分支名-->master
```
#### 2.2 列出本地所有的分支
```bash
git for-each-ref --format='%(refname:short)' refs/heads/
```

### 3. 工作目录
#### 3.1 查询当前工作目录的绝对路径
```bash
git rev-parse --show-toplevel 
# 获取当前工作目录的绝对路径-->D:/docs/doc
```
#### 3.2 查询当前工作目录的相对路径
```bash
# 其是现对于.git目录的相对路径
git rev-parse --show-prefix # 获取当前工作目录的相对路径-->docs/doc
```