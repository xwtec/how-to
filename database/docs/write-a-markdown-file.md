---
title:
  如何上传图片获得在线地址

author:
  - fisker <lionkay@gmail.com>

contributors:
---

# 如何使用 markdown 语法

## 段落

要表示段落，两段文字间需要有一个空行
如果只需要单纯换行，要在当前行的最末打两个空格

## 标题

在想要设置为标题的文字前面加#来表示
一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。

**注：** _标准语法一般在#后跟个空格再写文字_

示例：

```markdown
# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题
```

效果

<!-- markdownlint-disable MD025 -->

# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

<!-- markdownlint-enable MD025 -->

## 字体

### 加粗

要加粗的文字左右分别用两个`*`号包起来

### 斜体

要倾斜的文字左右分别用一个`*`或`_`(建议)包起来

### 斜体加粗

要倾斜和加粗的文字左右分别用三个`***`或`**_`(建议)包起来

### 删除线

要加删除线的文字左右分别用两个`~`号包起来

示例：

<!-- prettier-ignore-start -->

```markdown
**这是加粗的文字**
_这是倾斜的文字_
*这也是倾斜的文字*
**_这也是斜体加粗的文字_**
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

<!-- prettier-ignore-end -->

效果:

<!-- prettier-ignore-start -->

- **这是加粗的文字**
- _这是倾斜的文字_
- *这也是倾斜的文字*
- **_这也是斜体加粗的文字_**
- ***这是斜体加粗的文字***
- ~~这是加删除线的文字~~

<!-- prettier-ignore-end -->

## 引用

在引用的文字前加`>`即可。引用也可以嵌套，如加两个`>` 三个`>`

示例：

```markdown
> 这是引用的内容
>
> > 这是引用的内容
> >
> > > 这是引用的内容
> > > 这是引用的内容
```

效果:

> 这是引用的内容
>
> > 这是引用的内容
> >
> > > 这是引用的内容
> > > 这是引用的内容

## 分割线

三个或者三个以上的 `-` 或者 `*` 都可以。

示例：

<!-- prettier-ignore-start -->

```markdown
---
----
***
*****
```

<!-- prettier-ignore-end -->

效果:

<!-- prettier-ignore-start -->
<!-- markdownlint-disable MD035 -->

---
----
***
*****

<!-- markdownlint-enable MD035 -->
<!-- prettier-ignore-end -->

## 图片

图片 alt 就是显示在图片下面的文字，相当于对图片内容的解释。
图片 title 是图片的标题，当鼠标移到图片上时显示的内容。title 可加可不加

示例：

```markdown
![baidu](https://www.baidu.com/img/bd_logo1.png "度娘")
```

效果:

![baidu](https://www.baidu.com/img/bd_logo1.png "度娘")

## 列表

### 无序列表

无序列表用 `-` `+` `*` 任何一种都可以

示例：

<!-- prettier-ignore-start -->

```markdown
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```

<!-- prettier-ignore-end -->

效果:

<!-- prettier-ignore-start -->
<!-- markdownlint-disable MD004 MD032 -->

- 列表内容
+ 列表内容
* 列表内容

<!-- markdownlint-enable MD004 MD032 -->
<!-- prettier-ignore-end -->

### 有序列表

数字加点

示例：

```markdown
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

效果:

1. 列表内容
2. 列表内容
3. 列表内容

## 表格

示例：

<!-- prettier-ignore-start -->

```markdown
| 表头 | 表头 | 表头 |
| :- | :-: | -: |
| 左对齐 | 居中对齐 | 右对齐 |
| 内容 | 内容 | 内容 |
```

<!-- prettier-ignore-end -->

效果:

<!-- prettier-ignore-start -->

| 表头 | 表头 | 表头 |
| :- | :-: | -: |
| 左对齐 | 居中对齐 | 右对齐 |
| 内容 | 内容 | 内容 |

<!-- prettier-ignore-end -->

## 代码

代码之间分别用三个反引号包`` ` ``起来，且两边的反引号单独占一行

示例：

````markdown
```js
hello.world()
```
````

效果:

```js
hello.world()
```

---

参考链接: <https://www.jianshu.com/p/191d1e21f7ed>
