import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'material-design-icons-iconfont'
import components from '@/components/UI'


const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app.mount('#app')
