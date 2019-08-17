import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';
import VueCountdown from '@chenfengyuan/vue-countdown';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(BootstrapVue,axios,VueAxios);
Vue.use(VueSweetalert2);
Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
