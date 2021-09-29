import { createApp } from 'vue';

// Main component
import App from './App.vue';

// Extending Vue
import router from '@/router/index';
import store from '@/store/index';

// Style
import '@/assets/styles/main.scss';

// Init Vue
createApp(App).use(router).use(store).mount('#app');
