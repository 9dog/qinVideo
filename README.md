# 介绍

`2.0` 后台基于egg.js + mongodb + redis, 新增了评分以及博客功能, 部署上更加简单方便;

## 当前状态

目前正在进行web端的整合与BUG修复, 预计在春节前后将会有在线demo, 当然仅限于PC端, 移动端仍然需要时间

## 目前进度

-   [x] 数据库重新设计与验证
-   [x] 后台面板的对应调整
-   [x] web 端的规划与设计
-   [x] 首页采用服务端渲染
-   [x] animate 子站点开发
-   [x] comic 子站点开发
-   [x] post 子站点开发
-   [x] search 子站点开发
-   [x] user 子站点开发
-   [ ] web端整合优化, 确保部署的简单易用
-   [ ] 移动端开发
-   [ ] blog 子站点开发
-   [ ] 客户端开发

## 后续规划

### 服务端:

1. 重新设计数据库结构, 考虑性能问题, 提高查询效率, 减少资源占用
2. 接口规范化, 内外接口分离, 权限控制
3. 删除云端付费功能, 数据改为本地维护, 使用苹果 CMS 接口
4. 基于 egg.js 开发

### web 端:

1. 视频, 漫画, 文章的站点分离, 每个功能都是的单独的可选模块, 这样可以有更多的可定制化可能;
2. 新增博客模块, 主要功能参考 tumblr, 可以发图, 视频等;
3. 首页采用服务端渲染, 目前采用 Next 开发, 可以直接生成静态页面, 其他的功能就不展开了, 有需要的可以自己开发, 可拓展性还是不错的;
4. 不同页面之间的加载还是有点慢, 这个暂时无解, 毕竟为了拓展性牺牲的就是一体性;

### 移动端

移动端说实话有点麻烦, 毕竟不能像 web 端那样分成几个模块, 这样会体验极差, 所以只能做成一体性的, 预计会在现有的基础上简单改改, 以便适应 2.0 版本即可;

### APP 端:

目前预计是采用 React Native 简单修改开发初版, 以便尽快完成基本功能开发;
等有空了再采用 flutter 迭代开发, 毕竟有现成的东西直接拿来用即可, 全新开发的周期会比较长;

## 后续规划

等所有的功能完成后, 将会考虑推出个性化主题, 毕竟后台确定好了就没啥工作量了, 届时可以大胆发挥, 自由创作
