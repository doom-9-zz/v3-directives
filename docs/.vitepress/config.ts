import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'v3-directives',
      description: '适用于 Vue3 的指令集合'
    },
    '/en/': {
      lang: 'en-US',
      title: 'v3-directives',
      description: 'Directive collection for vue3'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        sidebar: [
          {
            text: '介绍',
            link: '/home/'
          },
          {
            text: 'copy',
            link: '/copy/'
          },
          {
            text: 'focus',
            link: '/focus/'
          },
          {
            text: 'debounce',
            link: '/debounce/'
          },
          {
            text: 'longpress',
            link: '/longpress/'
          },
          {
            text: 'loading',
            link: '/loading/'
          },
          {
            text: 'imglazyload',
            link: '/imglazyload/'
          },
          {
            text: 'ononce',
            link: '/ononce/'
          },
          {
            text: 'clickoutside',
            link: '/clickoutside/'
          },
          {
            text: 'hover',
            link: '/hover/'
          },
          {
            text: 'textellipsis',
            link: '/textellipsis/'
          },
          {
            text: 'money',
            link: '/money/'
          },
          {
            text: 'doubleclick',
            link: '/doubleclick/'
          },
          {
            text: 'draggable',
            link: '/draggable/'
          }
        ],
        selectText: 'Languages',
        label: '简体中文',
        nav: [
          {
            text: 'Github',
            link: 'https://github.com/doom-9/v3-directives',
            target: '_blank'
          }
        ]
      },
      '/en/': {
        sidebar: [
          {
            text: 'Introduction',
            link: '/en/home/'
          },
          {
            text: 'copy',
            link: '/en/copy/'
          },
          {
            text: 'focus',
            link: '/en/focus/'
          },
          {
            text: 'debounce',
            link: '/en/debounce/'
          },
          {
            text: 'longpress',
            link: '/en/longpress/'
          },
          {
            text: 'loading',
            link: '/en/loading/'
          },
          {
            text: 'imglazyload',
            link: '/en/imglazyload/'
          },
          {
            text: 'ononce',
            link: '/en/ononce/'
          },
          {
            text: 'clickoutside',
            link: '/en/clickoutside/'
          },
          {
            text: 'hover',
            link: '/en/hover/'
          },
          {
            text: 'textellipsis',
            link: '/en/textellipsis/'
          },
          {
            text: 'money',
            link: '/en/money/'
          },
          {
            text: 'doubleclick',
            link: '/en/doubleclick/'
          },
          {
            text: 'draggable',
            link: '/en/draggable/'
          }
        ],
        selectText: '选择语言',
        label: 'English',
        nav: [
          {
            text: 'Github',
            link: 'https://github.com/doom-9/v3-directives',
            target: '_blank'
          }
        ]
      }
    }
  }
})
