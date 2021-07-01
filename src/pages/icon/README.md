# 矢量图标

本方案支持`svg`、`antd图标`、`iconfont字体`

## 优缺点

`字体`和`svg`的异同点如下：

### 引用方式
* `字体`：通过引用字体的方式，一次性引入
* `svg`：每个图标可以单独引入

### 扩展
* `字体`：不便于扩展，需要将以前的整个字体替换，如果更新前后图标存在差异，可能会导致以前字体的丢失报错
* `svg`：便于扩展，只需要对相应的图标进行修改，然后单独引入，就可以了

### 适用场景
* `字体`：适用于一次性具备整个项目所有需要用到的图标
* `svg`：适用于一边开发，一边添加图标

结合个人开发经验，本方案主要采用的是`svg`的方式。

## `SVG`图标使用方式

将自己的svg图标，或者[icon-font](https://www.iconfont.cn/)下载的svg图标，放到`src/icons/svg`目录下，并命名为`.svg`后缀的文件

``` tsx
// 导入
import SvgIcon from '@/icons/index'

// 使用
// 这里使用了一个book图标
<SvgIcon icon="book" />
```

## `antd`图标使用方式

``` tsx
// 导入
import {
  ArrowsAltOutlined
} from '@ant-design/icons';

// 使用
<ArrowsAltOutlined />
```

## `icon-font`图标使用方式



