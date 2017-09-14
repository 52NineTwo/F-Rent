var gallery = null;
import 'photoswipe/dist/photoswipe.css'
export default {
	install: function (Vue, options) {
		
		Vue.prototype.$photoswipe = function(options){	
			var PhotoSwipe = require("photoswipe");	
			if(!gallery){
				var loadTpl = Vue.extend({
                template: '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>  <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>'
            });	
            	var tpl = new loadTpl().$mount().$el;	
            	document.body.appendChild(tpl);
			}		
				
			var openPhotoSwipe = function() {
				var pswpElement = document.querySelectorAll('.pswp')[0];
				// build items array
				var opt = {
					history: false,
					focus: false,
					showAnimationDuration: 0,
					hideAnimationDuration: 0,
					closeEl:true,
				};
				for (var property in options) {
					opt[property] = options[property];
				}
				
				var items = opt.items;
				items.forEach(function(item,i){
					items[i]={
						src: item.name,
						w: 600,
						h: 400
					}
				});
				gallery = new PhotoSwipe( pswpElement, PhotoSwipe.PhotoSwipeUI_Default, items, opt);
				
				setTimeout(function(){gallery.init();},300);

			};
			openPhotoSwipe();
		}
	 }
};
