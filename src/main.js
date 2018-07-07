import Vue from 'vue';
import 'vue-material-design-icons/styles.css';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App.vue';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
