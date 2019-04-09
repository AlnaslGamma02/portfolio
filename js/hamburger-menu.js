// ハンバーガーメニューのコンストラクタ
var HamburgerMenu = function() {
  // ハンバーガーボタン、ハンバーガーメニュー、背景ボックスの要素オブジェクトを取得
  this.hamburgerBtn = document.getElementById("js-hamburger-btn");
  this.headerMenu = document.getElementById("js-header-menu");
  this.headerMenuBg = document.getElementById("js-header-menu-background");
  // ハンバーガーメニューを表示するときに付与するクラス
  this.activeClass ="is-active";
}
// prototypeにメソッドを定義
HamburgerMenu.prototype = {
  // ハンバーガーメニューの初期化処理
  init: function() {
    this.attachEvent();
  },
  // ハンバーガーメニューを開くときの処理
  open: function() {
    // ハンバーガーメニュー要素にactiveclassクラス名を付与
    this.headerMenu.classList.add(this.activeClass);
    // ハンバーガーボタン要素からハンバーガーアイコンクラスを取り除く
    this.hamburgerBtn.classList.remove("fa-bars");
    // ハンバーガーボタン要素にバツのアイコンクラスを挿入
    this.hamburgerBtn.classList.add("fa-times");
  },
  // ハンバーガーメニューを閉じるときの処理
  close: function() {
    // ハンバーガーメニュー要素からactiveclassクラス名を削除
    this.headerMenu.classList.remove(this.activeClass);
    // ハンバーガーボタン要素からバツのアイコンクラスを取り除く
    this.hamburgerBtn.classList.remove("fa-times");
    // ハンバーガーボタン要素にハンバーガーアイコンクラスを挿入
    this.hamburgerBtn.classList.add("fa-bars");
  },
  // ハンバーガーボタンを押したときの処理
  openAndClose: function() {
    // ハンバーガーメニュー要素にactiveClassがない場合は開き、ある場合は閉じる
    if(!this.headerMenu.classList.contains(this.activeClass)) {
      this.open();
    } else {
      this.close();
    }
  },
  // ハンバーガーボタンをクリックしたときのイベントリスナーを登録
  attachEvent: function() {
    // ハンバーガーボタンをクリックしたら開閉する
    this.hamburgerBtn.addEventListener("click", this.openAndClose.bind(this), false);
    // 背景ボックスをクリックしたら開閉する
    this.headerMenuBg.addEventListener("click", this.openAndClose.bind(this), false);
  }
}
// HTML文書の読み込みが終了したらハンバーガーメニューを生成して初期化する
document.addEventListener("DOMContentLoaded", function() {
  var hamburger = new HamburgerMenu();
  hamburger.init();
});
