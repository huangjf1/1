import { createApp } from 'vue'
import { NavBar, Picker, Field, Popup } from 'vant';
import App from './App.vue'
import router from './router'
import less from 'less'
import "lib-flexible/flexible.js"
import 'vant/lib/index.css';
const app = createApp(App)
app.use(router)
app.use(less)
app.use(NavBar)
app.use(Picker)
app.use(Field)
app.use(Popup)
app.mount('#app')