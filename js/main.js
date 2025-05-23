$(function(){
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/


  // ハンバーガーメニューのクリックイベント
  $(".toggle_btn").on("click",
    function(){
      if ($("#header").hasClass("open")) {
        // メニューを閉じる！
        $("#header").removeClass("open")
      } else {
        $("#header").addClass("open")
      }
    }
  );









  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
  });
});
