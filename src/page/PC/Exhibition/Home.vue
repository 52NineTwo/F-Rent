<template>
  <div>
    <slide style="margin-top: -55px;" :slides="slides" :inv="inv" :style="styleObject" :name="transitionName2" :target="target"></slide>
  </div>
</template>
<script>
  import slide from '@/components/Pcslide/slide.vue'
  export default{
    components: {slide},
    data () {
      return {
        slides: [
          {
            src: 'http://image.heitem.com/rand.jpg',
            href: ''
          },
          {
            src: 'http://image.heitem.com/rand.jpg',
            href: ''
          },
          {
            src: 'http://image.heitem.com/rand.jpg',
            href: ''
          },
          {
            src: 'http://image.heitem.com/rand.jpg',
            href: ''
          },
          {
            src: 'http://image.heitem.com/rand.jpg',
            href: ''
          }
        ],
        inv: 3000,
        styleObject: {
          width: '960px',
          height: '460px',
        },
        transitionName1: 'move',
        transitionName2: 'fade',
        target: '_blank'
      }
    }
  }
</script>