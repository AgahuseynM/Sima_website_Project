import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'material-design-icons-iconfont'
import components from '@/components/UI'
import SwiperClass, {Navigation, Pagination} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperClass.use([Navigation, Pagination])

const app = createApp(App)


components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(VueAwesomeSwiper)
	.use(router)
	.mount('#app')
