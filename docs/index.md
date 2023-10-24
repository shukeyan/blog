---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "个人博客"
  text: ""
  tagline: 学习、问题总结
  actions:
    - theme: brand
      text: 进入
      link: /React/
    - theme: alt
      text: vitePress API
      link: /api-examples
  image: 
    src: /image.png
    alt: sky
features:
  - icon: 🐕
    title: 学习
    details: 技术能力的提升，旧知识的温故知新
  - icon: 🐱
    title: 问题解决分享
    details: 项目问题的记录及解决方案的笔记
  - icon: 🚗
    title: GOOD IDEA
    details: good idea的分享
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>