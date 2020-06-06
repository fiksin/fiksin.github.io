const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--markdown-project-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/templates/MarkdownProject.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--test-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/pages/Test.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--pagelist-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/pages/Pagelist.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/pages/Projects.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/juliafiksinski/fiksin.github.io/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/juliafiksinski/fiksin.github.io/src/pages/Index.vue")

export default [
  {
    path: "/tags/vue/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--tags--vue-md" */ "/Users/juliafiksinski/fiksin.github.io/src/tags/vue.md")
    }
  },
  {
    path: "/tags/tutorial/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--tags--tutorial-md" */ "/Users/juliafiksinski/fiksin.github.io/src/tags/tutorial.md")
    }
  },
  {
    path: "/projectlist/spotify-lately/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--spotify-lately-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/spotify-lately.md")
    }
  },
  {
    path: "/projectlist/subreddits/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--subreddits-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/subreddits.md")
    }
  },
  {
    path: "/projectlist/peppa/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--peppa-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/peppa.md")
    }
  },
  {
    path: "/projectlist/introduction/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--introduction-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/introduction.md")
    }
  },
  {
    path: "/projectlist/example/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--example-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/example.md")
    }
  },
  {
    path: "/projectlist/biblios/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--biblios-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/biblios.md")
    }
  },
  {
    path: "/test/",
    component: c3
  },
  {
    path: "/projectlist/",
    component: c2,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--src--content--projects--index-md" */ "/Users/juliafiksinski/fiksin.github.io/src/content/projects/index.md")
    }
  },
  {
    path: "/pagelist/",
    component: c4
  },
  {
    path: "/projects/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
