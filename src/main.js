import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Buefy from 'buefy';
import './assets/scss/app.scss';

import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAV1M6O2jtKXLEidiX_nhOeLR1d4LLUokY',
	authDomain: 'fir-vue-67815.firebaseapp.com',
	projectId: 'fir-vue-67815',
	storageBucket: 'fir-vue-67815.appspot.com',
	messagingSenderId: '834425358412',
	appId: '1:834425358412:web:333517818210eed04b4ce9'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
