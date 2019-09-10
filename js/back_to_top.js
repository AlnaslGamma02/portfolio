// 100px下にスクロールした時、Topへ戻るボタンを表示する
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// Topへ戻るボタンをクリックすると一番上に戻る
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}