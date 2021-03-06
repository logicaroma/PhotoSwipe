// PhotoSwipe - http://www.photoswipe.com/
// Copyright (c) %%year%% by Code Computerlove (http://www.codecomputerlove.com)
// Licensed under the MIT license
// version: %%version%%

(function(window, Util){
	
	/*
	 * Class: Code.PhotoSwipe.DocumentOverlayClass
	 */
	Code.PhotoSwipe.DocumentOverlayClass = Code.PhotoSwipe.ElementClass.extend({
		
		/*
		 * Function: init
		 */
		init: function(options){
			
			this.settings = {
				zIndex: 1000
			};
			
			Util.extend(this.settings, options);
			
			this._super(options);
			
			// Create element and append to body
			this.el = Util.DOM.createElement('div', { 'class': Code.PhotoSwipe.DocumentOverlayClass.CssClasses.documentOverlay }, '');
			Util.DOM.setStyle(this.el, {
				left: 0,
				position: 'absolute',
				zIndex: this.settings.zIndex,
				top: 0
			});
			Util.DOM.hide(this.el);
			Util.DOM.appendToBody(this.el);
			
		},
		
		
		/*
		 * Function: resetPosition
		 */
		resetPosition: function(){
			
			// Set the height and width to fill the document
			Util.DOM.width(this.el, Util.DOM.bodyOuterWidth());
			var newHeight = Util.DOM.bodyOuterHeight();
			if (Util.DOM.windowHeight > newHeight){
				newHeight = Util.DOM.windowHeight;
			}
			Util.DOM.height(this.el, newHeight);
			
		}
	
	});
	
	
	Code.PhotoSwipe.DocumentOverlayClass.CssClasses = {
		documentOverlay: 'ps-document-overlay'
	};

})
(
	window,
	Code.PhotoSwipe.Util
);
