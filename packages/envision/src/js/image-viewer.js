/**
 * --------------------------------------------------------------------------
 * Licensed under MIT https://github.com/sitevision/envision/blob/master/LICENSE
 * --------------------------------------------------------------------------
 */

import $ from 'jquery';
import { getNodes, lockScroll, unlockScroll } from './util/nodes';
import Util from './util/util';

const ANIMATION = 'env-animation-in-progress';
const BACKDROP = 'env-image-viewer__backdrop';
const BACKDROP_ANIMATION = 'env-image-viewer__backdrop--in';
const EVENT_KEY = `.env.image-viewer`;
const NAME = 'envImageviewer';
const DATA_API_KEY = '.data-api';
const SPINNER_TEMPLATE = `<div class="env-spinner">
                                <div class="env-rect1"></div>
                                <div class="env-rect2"></div>
                                <div class="env-rect3"></div>
                                <div class="env-rect4"></div>
                                <div class="env-rect5"></div>
                             </div>`;

const lang = {
   sv: {
      prev: 'Föregående',
      next: 'Nästa',
      moveto: 'Gå till bild',
   },
   en: {
      prev: 'Previous',
      next: 'Next',
      moveto: 'Move to image',
   },
};

const SELECTORS = {
   ACTIVE_DOT: '.env-is-active',
   DATA_MOVE_TO: '[data-move-to]',
   DATA_MOVE: '[data-move]',
   DATA_IMAGE_VIEWER: '[data-image-viewer]',
   IMAGES: '.env-image-viewer__images',
   INDICATORS: '.env-image-viewer__indicators',
   DATA_SLIDE_TO: '[data-slide-to]',
   SPINNER: '.env-spinner',
};

const ClassName = {
   ACTIVE_DOT: 'env-is-active',
   HIDDEN: 'env-image-viewer--hidden',
   SPINNER_HIDE: 'env-spinner--hide',
};

const Events = {
   CLICK_DATA_API: `click${EVENT_KEY}${DATA_API_KEY}`,
   TOUCHEND: `touchend${EVENT_KEY}`,
   TOUCHMOVE: `touchmove${EVENT_KEY}`,
   TOUCHSTART: `touchstart${EVENT_KEY}`,
};

const BASE_SETTINGS = {
   index: 0,
};

class Imageviewer {
   constructor(element, settings) {
      this.$el = $(element);
      this.$images = this.$el.find(SELECTORS.IMAGES);
      this._isShown = false;

      this.config = $.extend(
         {},
         {
            i18n: Util.getLanguageOptions(settings?.i18n, lang, element),
         },
         this.$el.data()
      );

      const index =
         settings && this.$images.length > settings.index
            ? settings.index
            : BASE_SETTINGS.index;
      this.config.index = index;

      this.$el.on(Events.CLICK_DATA_API, this._click.bind(this));
   }

   next() {
      this.show(this._getNextItemIndex());
   }

   prev() {
      this.show(this._getPrevItemIndex());
   }

   show(index) {
      index = index || 0;
      this.config.index = Number(index);
      const image = $(this.$images[index])[0];
      const href = image.getAttribute('href');

      if (this._isShown) {
         $(SELECTORS.SPINNER).removeClass(ClassName.SPINNER_HIDE);
         this.$btnContainer.addClass(ClassName.HIDDEN);

         const $downloadingImage = this._loadImage(href);

         this.$imgContainer.html($downloadingImage);
         this._setActiveIndicatorElement();
      } else {
         this.$modal = $('<div/>', {
            class: 'env-image-viewer__modal',
         });

         this.$btnContainer = $('<div/>', {
            class: 'env-image-viewer__dialog',
         });

         this.$imgContainer = $('<div/>', {
            class: 'env-image-viewer__modal-container',
         });

         this.$modal.append(this.$btnContainer);
         this.$btnContainer.append(this.$imgContainer);
         this.$modal.appendTo(document.body);

         if (this.$images.length > 1) {
            this.$btnContainer.append(this._getButtons());
            this.$btnContainer.append(this._getIndicators());
         }

         this.$btnContainer.addClass(ClassName.HIDDEN);
         const $downloadingImage = this._loadImage(href);

         this.$imgContainer.html($downloadingImage);

         this._isShown = true;

         lockScroll();

         this._bindContainerEvents();
         this._bindEvents();
         this._showBackdrop();

         $(SPINNER_TEMPLATE).prependTo(this.$modal);
      }
   }

   hide() {
      const removeBackdropCallback = () => {
         this.$backdrop.remove();
         this.$modal.remove();
         this.$btnContainer.remove();
         this.$imgContainer.remove();
         unlockScroll();
      };

      this.$backdrop
         .one('transitionend', removeBackdropCallback)
         .removeClass(BACKDROP_ANIMATION);

      this._isShown = false;
   }

   _click(e) {
      e.preventDefault();
      const $target = $(e.target);
      if ($target.is('img')) {
         this.show(this.$images.index($target.parent()));
      } else if ($target.is('a.env-image-viewer__images')) {
         this.show(this.$images.index($target));
      }
   }

   _loadImage(href) {
      const $downloadingImage = $('<img>');
      const $imageModal = $('.env-image-viewer__dialog');

      $downloadingImage
         .addClass('env-image-viewer__img')
         .attr({
            tabindex: '-1',
            src: href,
         })
         .on('load', () => {
            const imageHeight = $downloadingImage.height();
            const imageWidth = $downloadingImage.width();
            const windowHeight = window.innerHeight;
            const heightModifier = 0.8;
            const defaultWidth = 800;

            if (imageWidth > defaultWidth) {
               $imageModal.css({
                  'max-width': '80%',
               });
            }

            if (windowHeight < imageHeight) {
               $downloadingImage.css({
                  'max-height': windowHeight * heightModifier,
               });
            }

            $(SELECTORS.SPINNER).addClass(ClassName.SPINNER_HIDE);
            this.$btnContainer.removeClass(ClassName.HIDDEN);
            this.$imgContainer.children().eq(0).trigger('focus');
         });

      return $downloadingImage;
   }

   _bindContainerEvents() {
      this.$btnContainer.on(Events.CLICK_DATA_API, SELECTORS.DATA_MOVE, (e) => {
         e.preventDefault();
         if ($(e.currentTarget).data('move') === 'next') {
            this.next();
         } else {
            this.prev();
         }
      });

      this.$btnContainer.on(
         Events.CLICK_DATA_API,
         SELECTORS.DATA_MOVE_TO,
         (e) => {
            const viewerIndex = e.currentTarget.getAttribute('data-move-to');

            if (viewerIndex) {
               this.show(viewerIndex);
            }
         }
      );
   }

   _getButtons() {
      const buttonHTML = `<button type="button" class="env-image-viewer--prev" data-move="prev">
               <svg class="env-image-viewer__prev-icon env-icon env-icon-small">
               <use href="/sitevision/envision-icons.svg#icon-arrow-left"></use>
               </svg>
               <span class="env-assistive-text">${this.config.i18n.prev}</span>
            </button>
            <button type="button" class="env-image-viewer--next" data-move="next">
               <svg class="env-image-viewer__next-icon env-icon env-icon-small">
               <use href="/sitevision/envision-icons.svg#icon-arrow-right"></use>
               </svg>
               <span class="env-assistive-text">${this.config.i18n.next}</span>
            </button>`;

      return buttonHTML;
   }

   _getIndicators() {
      const indicatorItems = this._getIndicatorItems();
      return `<div class="env-image-viewer__indicators">
                  ${indicatorItems}
               </div>`;
   }

   _getIndicatorItems() {
      const activeElementIndex = this.config.index;
      let items = '';

      this.$images.each((index) => {
         const isActive = index === activeElementIndex;
         items += `<button type="button" title="${this.config.i18n.moveto} ${
            index + 1
         }" data-move-to="${index}" class="${
            isActive ? 'env-is-active' : ''
         }"></button>`;
      });

      return items;
   }

   _showBackdrop() {
      this.$backdrop = $('<div/>', {
         class: BACKDROP,
      });

      this.$modal.on(Events.CLICK_DATA_API, (e) => {
         if (this.$backdrop.hasClass(ANIMATION)) {
            return;
         }

         if (e.target !== e.currentTarget) {
            return;
         }

         if (!this._isShown) {
            return;
         }

         this.hide();
      });

      this.$backdrop.appendTo(document.body);

      this.$backdrop
         .one('animationend', this._removeBackdropAnimation)
         .addClass(`${BACKDROP_ANIMATION} ${ANIMATION}`);
   }

   _removeBackdropAnimation(e) {
      $(e.currentTarget).removeClass(ANIMATION);
   }

   _bindEvents() {
      const focusableElements = this.$modal.find('button');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      this.$modal.on('keydown', (e) =>
         this._keydown(e, firstElement, lastElement)
      );
   }

   _keydown(e, firstElement, lastElement) {
      if (/input|textarea/i.test(e.target.tagName)) {
         return;
      }

      switch (e.key) {
         case 'ArrowLeft':
            e.preventDefault();
            this.prev();
            break;
         case 'ArrowRight':
            e.preventDefault();
            this.next();
            break;
         case 'Escape':
            e.preventDefault();
            if (!this.$backdrop.hasClass(ANIMATION)) {
               this.hide();
            }
            break;
         case 'Tab':
            if (e.target.tagName === 'IMG') {
               e.preventDefault();
               firstElement.focus();
            } else if (e.shiftKey) {
               if (e.target === firstElement) {
                  e.preventDefault();
                  lastElement.focus();
               }
            } else if (e.target === lastElement) {
               e.preventDefault();
               firstElement.focus();
            }
            break;
         default:
            return;
      }
   }

   _getNextItemIndex() {
      return this.config.index === this.$images.length - 1
         ? 0
         : this.config.index + 1;
   }

   _getPrevItemIndex() {
      return this.config.index === 0
         ? this.$images.length - 1
         : this.config.index - 1;
   }

   _setActiveIndicatorElement() {
      if (this.$images.length > 0) {
         this.$btnContainer
            .find(SELECTORS.ACTIVE_DOT)
            .removeClass(ClassName.ACTIVE_DOT);

         const indicator = this.$btnContainer
            .find(SELECTORS.INDICATORS)
            .children()[this.config.index];

         if (indicator) {
            $(indicator).addClass(ClassName.ACTIVE_DOT);
         }
      }
   }

   static _init(elements, settings) {
      Util.consoleWarning(
         'component',
         'Image viewer',
         'image-viewer',
         'Image viewer 2'
      );
      const nodes = getNodes(elements);
      if (nodes.length > 0) {
         return nodes.map((node) => {
            if (!node[NAME]) {
               node[NAME] = new Imageviewer(node, settings);
            }
            return node[NAME];
         });
      }
   }

   static _jQueryInterface(settings) {
      return this.each(() => {
         const nodes = getNodes(this);
         nodes.forEach((node) => {
            Imageviewer._init(node, settings);
         });
      });
   }
}

if (typeof document !== 'undefined') {
   window.addEventListener('load', () => {
      const imageViewers = getNodes(SELECTORS.DATA_IMAGE_VIEWER);
      if (imageViewers.length > 0) {
         Imageviewer._init(imageViewers);
      }
   });

   // Deprecated
   const NO_CONFLICT = $.fn[NAME];
   $.fn[NAME] = Imageviewer._jQueryInterface;
   $.fn[NAME].Constructor = Imageviewer;
   $.fn[NAME].noConflict = () => {
      $.fn[NAME] = NO_CONFLICT;
      return Imageviewer._jQueryInterface;
   };
}

export default async (elements, settings) => {
   return Imageviewer._init(elements, settings);
};
