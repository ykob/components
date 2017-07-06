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
      isOpenedNavi: false,
    },
    methods: {
      toggleNavi: function() {
        this.isOpenedNavi = !this.isOpenedNavi;
      }
    }
  })
};
