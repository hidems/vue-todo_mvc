// import './assets/main.css'

import { createApp } from 'vue'
import store from './store'
import App from './components/App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
// import { faUserSecret, faStar } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
// library.add(faUserSecret, faStar)
library.add(fas, far)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app')
