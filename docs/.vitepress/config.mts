import { defineConfig } from 'vitepress'
// import typedocSidebar from '../api/typedoc-sidebar.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Blog",
  description: "Blog Site",
  srcDir: 'src',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
    ],

    sidebar: {
      "blog": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: 'Blog', link: '/blog', collapsed: false,
              items: [
                { text: 'Nested 1', link: '/blog/nested-1' },
                { text: 'Nested 2', link: '/blog/nested-2' },
                { text: 'a-case-for-nushell', link: '/blog/a-case-for-nushell' },
              ]
            },
            { text: 'Projects', link: '/projects', 
              items: [
                { text: 'torchview', link: '/projects/torchview', 
                  items: [
                    { text: 'examples', link: '/projects/torchview/examples' },
                  ]
                },
              ]
            }
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
