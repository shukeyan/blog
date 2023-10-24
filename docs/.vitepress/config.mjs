import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",

  description: "vue2、vue3、vite、pinia、vue-router、webpack、rollup、three.js、echarts等学习及问题解决",
  base: "/blogs/",
  themeConfig: {
    logo: {src: '-860392153_-771138501_80_80.png', alt: "logo", width: 24, height: 24},

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
    nav: [
      { text: "FAQ", link: "/FAQ" },
    ],

    sidebar: [
      {
        text: "FAQ",
        items: [
          { text: "echarts多个坐标轴0坐标不对齐", link: "/FAQ/echarts/moreAxis" },
          { text: "web集成扫描枪", link: "/FAQ/vue/scanExtens" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
