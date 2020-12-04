// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/*
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

import './styles/main.css'
*/

import DefaultLayout from '~/layouts/Default.vue'

import Buefy from 'buefy'
import '~/styles/main.scss'

export default function (Vue, {router, head, isClient}) {
	Vue.use(Buefy)
	Vue.component('Layout', DefaultLayout)
}