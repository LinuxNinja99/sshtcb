firebase.initializeApp({
         apiKey: "AIzaSyBJryNuKe3EsfkAIM41peATaO4Kybq4sFg",
         authDomain: "sshtcb.firebaseapp.com",
         databaseURL: "https://sshtcb-default-rtdb.firebaseio.com",
          projectId: "sshtcb",
          storageBucket: "sshtcb.appspot.com",
          messagingSenderId: "1066557088064",
          appId: "1:1066557088064:web:ba547ff13881dbd2c01aa5",
          measurementId: "G-CEG9HSP3PY",
        });
         var log = firebase.database().ref('log');
         $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
         data = data.trim().split('\n').reduce(function(obj, pair) {
         pair = pair.split('=');
         return obj[pair[0]] = pair[1], obj;
         }, {});
         var newLog = log.push();
         newLog.set({
         object: $(data)
        });  
});
