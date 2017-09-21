var gallery = false;
var PhotoSwipeOpen = true;
var loadNode = null;
import 'photoswipe/dist/photoswipe.css'
export default {
	install: function (Vue, options) {
		
		Vue.prototype.$photoswipe = function(options){
			var PhotoSwipe = require("photoswipe");	
				var loadTpl = Vue.extend({
					data: function () {
						return {
							show: PhotoSwipeOpen
						}
					},
					template: '<div v-if="show" class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>  <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>',
					methods:{
						delPhotoswipe(){
						  this.show = false;
						  gallery = null;
						}
					}
				});	
				loadNode = new loadTpl();
            	var tpl = loadNode.$mount().$el;

            	document.body.appendChild(tpl);
				loadNode.PhotoSwipeOpen =  PhotoSwipeOpen = true;
				
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
				try{
					var _items=opt.items.slice(0);
				}catch(e){
					console.error(e.message);
					return;
				}
				_items.forEach(function(item,i){
					_items[i]={
						src: item.name+opt.urlid,
						w: 600,
						h: 400
					}
				});
				gallery = new PhotoSwipe( pswpElement, PhotoSwipe.PhotoSwipeUI_Default, _items, opt);
				setTimeout(function(){
					gallery.init();		
				},300);
				gallery.listen('close', function() { loadNode.delPhotoswipe() });
			};
			openPhotoSwipe();
			
		}
	 }
};
