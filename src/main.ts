import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './filters';

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

export class AppModule {
  constructor() {
    this.bootstrap();
  }

  private async bootstrap() {
    return new Vue({
      router,
      pinia,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
}
new AppModule();
