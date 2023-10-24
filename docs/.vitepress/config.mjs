import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",

  description: "vue2、vue3、vite、pinia、vue-router、webpack、rollup、three.js、echarts等学习及问题解决",
  base: "/blog/",
  themeConfig: {
    logo: { src: "/-860392153_-771138501_80_80.png", alt: "logo", width: 24, height: 24 },

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      "/Vue/": { base: "/Vue/", items: vueSide() },
      "/React/": { base: "/React/", items: reactSide() },
      "/FAQ/": { base: "/FAQ/", items: faqSide() },
    },

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});

// 导航
function nav() {
  return [
    { text: "Vue", link: "/Vue/" },
    { text: "React", link: "/React/" },
    { text: "FAQ", link: "/FAQ/echarts/moreAxis" },
  ];
}

// FAQ侧边栏
function faqSide() {
  return [
    {
      text: "FAQ",
      items: [
        { text: "echarts多个坐标轴0坐标不对齐", link: "/echarts/moreAxis" },
        { text: "web集成扫描枪", link: "/vue/scanExtens" },
      ],
    },
  ];
}

// vue侧边栏
function vueSide() {
  return [
    {
      text: "Vue",
      items: [],
    },
  ];
}

// react侧边栏
function reactSide() {
  return [
    {
      text: "React",
      items: [],
    },
  ];
}
