/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
  
var user_id = window.localStorage.getItem("user_id");
var member_srl = window.localStorage.getItem("member_srl");
var language= window.localStorage.getItem("language");
var ref_join;
console.log(member_srl);
var app = {
    // Application Constructor
    initialize: function() {

        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

           app.onmain();
    },

    onmain : function() {

         // main_show();
          
    var reg_id=device.uuid;
       // 기기 번호 검출 

          console.log('Received Event: ' + reg_id);

          push = PushNotification.init({
    android: {
        senderID: "754220946157"
    },
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
});
          PushNotification.hasPermission(function(data) {
    if (data.isEnabled) {
        console.log('isEnabled');
    }
});


push.on('registration', function(data) {
    
      reg_save(data.registrationId);
  
   
   
});

push.on('notification', function(data) {
  // alert(data.message);
 // display_call_info(data.message);
    modal = UIkit.modal.blockUI(data.message); 
       setTimeout(function(){ modal.hide() }, 1000)
 
  //alert_msg("알람",data.message);
 
 
    
   
});

push.on('error', function(e) {
    // e.message
    alert_msg("경고",e.message);
});

//start_app();

   location.replace('main.html') ;

        
    }

};

function start_app() {
    // 로그인 처리 가 빠져 있기 때문에 바로 연결
    
     
}
 
function alert_msg(title,msg,btn) {
    // alert 대신 사용할 함수 
    var title=title;
    var msg=msg;
    var btn=btn;

      navigator.notification.alert(
                  msg,  // message
                  alertend,         // callback
                  title,            // title
                  btn                  // buttonName
              );


}

function reg_save(reg_id) {
      var reg_id=reg_id;
      var deviceid=device.uuid;
       
         $.post("https://topnailart.iwinv.net/gcm_reg_app.php",
   {
    reg_id:reg_id,
    uuid:deviceid
   },
   function(data){
    var data;
    
   //  alert("ok");
   })
       } 
