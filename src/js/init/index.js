import Vue from 'vue/dist/vue.min';
import Hover from 'js-util/Hover.js';

export default function() {
  // マウスオン制御用クラスの初期化
  const elmHover = document.getElementsByClassName('js-hover');
  for (var i = 0; i < elmHover.length; i++) {
    new Hover(elmHover[i]);
  }

  // Hamburgerボタン
  const vueHamburger = new Vue({
    el: '#hamburger',
    data: {
      isValid: false,
      isOveredHamburger: 0,
      isOpenedNavi: false,
    },
    mounted: function() {
      setTimeout(() => {
        this.isValid = true;
      }, 500);
    },
    methods: {
      mouseoverHamburger: function() {
        this.isOveredHamburger = 1;
      },
      mouseoutHamburger: function() {
        this.isOveredHamburger = 2;
      },
      toggleNavi: function() {
        this.isOpenedNavi = !this.isOpenedNavi;
      }
    }
  })
};
