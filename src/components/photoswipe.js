var gallery = null,
  PhotoSwipeOpen = true,
  loadNode = null,
  beginOpen = false,
  PhotoSwipeAnimateTime = 333;
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js'
export default {
  install: function (Vue, options) {
    Vue.prototype.$photoswipe = function (options) {
      if (beginOpen) return;
      beginOpen = true;
      var loadTpl = Vue.extend({
        data() {
          return {
            show: PhotoSwipeOpen
          }
        },
        template: '<div v-show="show" class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>  <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>',
        methods: {
          delPhotoswipe(){
            this.show = false;
          }
        }
      });
      loadNode = new loadTpl();
      var tpl = loadNode.$mount().$el;
      if (!gallery) {
        document.body.appendChild(tpl);
      }
      loadNode.PhotoSwipeOpen = PhotoSwipeOpen = true;
      var GroupEle = options.event.target.parentNode.parentNode;
      var openPhotoSwipe =  () => {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var opt = {
          getThumbBoundsFn (index) {
            var thumbnail = GroupEle.querySelectorAll('[lazy="loaded"]')[index],
              pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
          },
          index: options.index,
          tapToClose: true
        };

        for (var property in options) {
          opt[property] = options[property];
        }
        try {
          var items = opt.items.slice(0);
        } catch (e) {
          console.error(e.message);
          return;
        }
        items.forEach((item, i) => {
          let el = GroupEle.querySelectorAll('[lazy="loaded"]')[i];
          items[i] = {
            src: item.name + opt.urlid,
            w: el.naturalWidth,
            h: el.naturalHeight,
            msrc: item.name + opt.urlid,
            el: el
          }
        });
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, opt);
        gallery.init();
        gallery.listen('close', function () {
          setTimeout(() => {
            loadNode.delPhotoswipe();
            beginOpen = false;
          }, PhotoSwipeAnimateTime);
        });
      };
      setTimeout(() => {
        openPhotoSwipe();
        beginOpen = false;
        //大图预览时 禁止滑轮滚动
        if (PhotoSwipeOpen)
        window.addEventListener("wheel", event => {
          event.preventDefault();
        }, false);
      }, PhotoSwipeAnimateTime);
    }
  }
};
