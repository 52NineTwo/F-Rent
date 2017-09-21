var gallery = null,
	PhotoSwipeOpen = true,
	loadNode = null,
	beginOpen = false;
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
export default {
	install: function (Vue, options) {		
		Vue.prototype.$photoswipe = function(options){
				
				if(beginOpen) return;	
				beginOpen = true;
				var PhotoSwipe = require("photoswipe");	
				var loadTpl = Vue.extend({
					data: function () {
						return {
							show: PhotoSwipeOpen
						}
					},
					template: '<div v-show="show" class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>  <div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>',
					methods:{
						delPhotoswipe(){
						  this.show = false;
						  //gallery = null;
						}
					}
				});	
				loadNode = new loadTpl();
				var tpl = loadNode.$mount().$el;
				if(!gallery){
            		document.body.appendChild(tpl);
				}
				loadNode.PhotoSwipeOpen =  PhotoSwipeOpen = true;
			var GroupEle = options.event.target.parentNode.parentNode;
			var openPhotoSwipe = function() {
				var pswpElement = document.querySelectorAll('.pswp')[0];
				var opt = {
					getThumbBoundsFn: function(index) {
						
						var thumbnail = GroupEle.querySelectorAll('[lazy="loaded"]')[index],
							pageYScroll = window.pageYOffset || document.documentElement.scrollTop, 
							rect = thumbnail.getBoundingClientRect(); 
							console.log(thumbnail.currentSrc);
						return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
					},
					index:options.index,
					tapToClose:true
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
					var el=GroupEle.querySelectorAll('[lazy="loaded"]')[i];
					_items[i]={
						src: item.name+opt.urlid,
						w: el.naturalWidth,
						h: el.naturalHeight,
						msrc: item.name+opt.urlid,
						el:el
					}
				});
				console.log(_items)
				gallery = new PhotoSwipe( pswpElement, PhotoSwipe.PhotoSwipeUI_Default, _items, opt);
				gallery.init();	
				gallery.framework.bind( gallery.scrollWrap , 'pswpTap', function(e) {
					gallery.close();
				});
				gallery.listen('parseVerticalMargin', function(item) { 
					var gap = item.vGap;
					gap.top = 50; 
					gap.bottom = 100; 
				})
				gallery.listen('close', function() { 
					setTimeout(function(){
						loadNode.delPhotoswipe();
						beginOpen = false;
					},333);
					
				});
			};
			setTimeout(function(){
					openPhotoSwipe();
					beginOpen = false;
					if(PhotoSwipeOpen){
						window.addEventListener("wheel",function(event){
							event.preventDefault();
						},false);
					}
					
			},333);
			
			
		}
	 }
};
