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
        selectText: '选择语言',
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
