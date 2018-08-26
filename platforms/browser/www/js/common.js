var user_id = window.localStorage.getItem("user_id");
var member_srl = window.localStorage.getItem("member_srl");
var language = window.localStorage.getItem("language");
var uuid=device.uuid;
var room_no=0;
var menu;
function main_show() {
  location.replace('main.html') ;  
}





function open_url(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
}
function open_web(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_system', 'location=no');
}

function open_left() {
    UIkit.offcanvas.show('#offcanvas-left');
    load_left();
}

function open_right() {
    UIkit.offcanvas.show('#offcanvas-right');
    //load_right();
}

// msg 
function alertDismissed() {
    // do something
}


function alert_msg(title,msg) {
    var title=title;
    var msg=msg;
   navigator.notification.alert(
    msg,  // message
    alertDismissed,         // callback
    title,            // title
    'OK'                  // buttonName
);
}

// 프레임워크7 용으로 만들어서 테스트 해 본 경우 
function alert_msg_7(title,msg) {
    var title=title;
    var msg=msg;
      app.dialog.confirm("msg", "title",  function () {
        alert_msg("경고","테스트");
      
    });
   
}

function alertDismissed() {
    // do something
}

function open_news(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
}

function open_down(url) {
  var url=url
  var ref = cordova.InAppBrowser.open(url, '_system', 'location=no');


}


// 종류
function exit_show() {
navigator.notification.confirm("종료하시겠습니까? ", onConfirm, "Confirmation", "Yes,No"); 
}

function onConfirm(button) {
    if(button==2){//If User selected No, then we just do nothing
        return;
    }else{
        navigator.app.exitApp();// Otherwise we quit the app.
    }
}


  function onBackKeyDown() {
    console.log("뒤로가기 "+menu);
    if (menu=="chat_open") {
      close_chat_room(); //대화방 나가기 
      
    }    }

// 로그아웃
function logout() {
  window.localStorage.removeItem("user_id");
  window.localStorage.clear();
    window.localStorage.removeItem("member_srl");
  window.localStorage.clear();
  window.localStorage.removeItem("user_idx");
  window.localStorage.clear();
  user_id=null;
  member_srl=null;
   location.replace('login.html') ;

}


function site_list() {
  $("#site_list").show();
    $("#alarm_list").hide();
    $("#site_list").html('');
   $.post("http://topnailart.iwinv.net/sitelist_new.php",
   {
    
       },
   function(data){
     $("#site_list").html(data);
   
    
   });

}
function site_show() {
   location.replace('main.html') ;

  }
function alarm_show() {
$("#site_list").hide();
    $("#alarm_list").show();
    $("#alarm_list").html('');
   $.post("http://topnailart.iwinv.net/alarm_list.php",
   {
    
       },
   function(data){
     $("#alarm_list").html(data);
   
    
   });
 

}
function dashboard() {
   location.replace('dashboard.html') ;  
}