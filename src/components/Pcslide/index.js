import slideComponent from './slide.vue'
const slider = {
  install: function (Vue) {
    Vue.component('slide', slideComponent)
  }
}
export default slider