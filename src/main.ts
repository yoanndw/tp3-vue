import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')

const backgroundDirective = {
  mounted (el, binding) {
    el.style.backgroundColor = binding.arg || 'yellow'
  }
}

app.directive('focus', {
  mounted: el => el.focus()
})
app.directive('background', backgroundDirective)
