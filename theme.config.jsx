import { useRouter } from 'next/router'

export default {
  useNextSeoProps() {
    const { basePath } = useRouter()
    if (basePath !== '/') {
      return {
        titleTemplate: '%s – LinqSharp'
      };
    } else {
      return {
        titleTemplate: 'LinqSharp'
      };
    }
  },

  logo: <span>LinqSharp</span>,
  project: {
    link: 'https://github.com/zmjack/linqsharp'
  },
  // ... other theme options
  docsRepositoryBase: 'https://github.com/zmjack/linqsharp-doc-zh',
  search: {
    placeholder: '搜索...'
  },
  toc: {
    title: '大纲'
  },
  editLink: {
    text: '编辑该页',
    component: function (props) {
      return (
        <a
          className={props.className}
          href={`https://github.com/zmjack/linqsharp-doc-zh/blob/main/${props.filePath}`}
        >
          {props.children}
        </a>
      );
    }
  },
  feedback: {
    useLink: () => 'https://github.com/zmjack/linqsharp/issues/new?labels=feedback',
    content: '有疑问？发送反馈 →'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '浅色',
        dark: '深色',
        system: '跟随系统'
      }
    }
  }
}
