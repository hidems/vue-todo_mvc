// import './assets/main.css'

import { createApp } from 'vue'
import store from './store'
import App from './components/App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faStar)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app')
