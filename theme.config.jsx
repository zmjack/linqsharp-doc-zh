import { useRouter } from 'next/router'

export default {
  useNextSeoProps() {
    const { pathname } = useRouter()
    if (pathname !== '/') {
      return {
        titleTemplate: '%s – LinqSharp'
      };
    } else {
      return {
        titleTemplate: 'LinqSharp'
      };
    }
  },
  footer: {
    text: (
      <>
        <span>
          Copyright © 2020 <a href="https://linqsharp.net" target="_blank">
            linqsharp.net
          </a>.
          <br />
          Documentation website powered by <a href="https://nextra.site" target="_blank">
            Nextra
          </a>.
        </span>
      </>
    )
  },
  logo: <img className="logo" src="./logo.svg" alt="LinqSharp" />,
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
