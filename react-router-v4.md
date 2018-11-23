# React Router(v4)

`npm install --save react-router-dom`

包含4个部分，通过一个代码仓库发布了四个npm包：

1. react-router
2. react-router-dom
3. react-router-native
4. react-router-config

## react-router-dom

三个模块/组件

1. 路由器组件
 - `Router`
2. 路由配置组件
 - `Route`
 - `Switch`
3. 路由导航组件
 - `Link`
 - `NavLink`
 - `Redirect`

### Router
路由器、（请求）分发器；用于创建一个历史(`history`)对象

`Router`是低阶组件，react-router的`BrowserRouter`等都是基于该组件创建的高阶组件。（依赖`history`包）

 - `BrowserRouter`
 - `HashRouter`
 - `StaticRouter` 静态路由（通常用于服务端渲染）
 - `MemoryRouter` 用于测试等非浏览器环境（不会读取或写入浏览器地址栏）
 - `NativeRouter` react-native

 通过`history`属性自定义一个history的会话管理对象，通常用于和Redux集成


### Route
路由匹配组件：通过当前访问的路径和当前`Router`的`path`属性匹配

当`Route`不提供`path`属性时，总是会匹配该路由，除非之前已匹配到一个被标记为`exact`或`Switch`包裹的路由

属性：

- `path`
- `exact`
- `strict`
- `sensitive`
- `component`
- `render`
- `children`

`path`属性的值是符合`path-to-regexp`规则的URL路径

`exact`指定当前路由`path`与访问路径进行精确匹配。

`strict`指定访问路径进行匹配时，是否对尾部`/`进行精确匹配，`exact`并不包含`/`进行精确匹配

`sensitive`表示是否对大小写进行精确匹配（大小写是否敏感）

```javascript
// location: http://localhost/ 匹配哪个路由

<Route path="/users" component={UserComponent} />
<Route path="/" component={Component} />

```

匹配到的Route，渲染的组件都会接受三个属性：`match`、`location`、`history`

#### 渲染组件的三种方式：
> `component`、`render`、`children`

##### 通过`component`属性指定需要渲染的组件
`component`不应该被指定为一个类似`component={() => <div />}`的内联函数，因为这样每次都会创建新组件，造成多余的dom操作。

内部通过`React.createElement`创建新组件

##### 通过`render`属性指定一个内联函数的方式
通常在需要向下传递自定义属性的时候使用，`render`提供的内联方法，在路径匹配时，被react-router调用，而不是当作一个组件渲染

##### 通过`<Route children={({ match }) => <div />}`方式提供需要渲染的组件

children属性提供的内联方法无论是否路径匹配都会调用（可以用于依据匹配路径进行条件渲染）



### Switch
用于包裹`Route`组件，作用一是分组路由，二是通过迭代其子元素`Router`，提供唯一路由匹配。（也就是说，只渲染与访问路径匹配的第一个路由的组件）。

```javascript
// location: http://localhost/users 匹配哪个路由

<Route path="/" component={Component} />
<Route path="/users" component={UserComponent} />

```

- `location` 指定其子元素（Route或Redirect）的path属性匹配的路径对象（用这个location代替当前访问路径）
- `children`

### Redirect

### Link

### NavLink

