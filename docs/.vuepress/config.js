module.exports = {
    base: '/blog/',
    title: 'blog',
    description: 'Vuepress blog demo',
    themeConfig: {
        logo: '/assets/img/logo.png',
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/webzhangyang/blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
        ]
    }
  }