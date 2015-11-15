(function(){var e,i,n,t,o,r,s,c,d,a;e=window.device,window.device={},n=window.document.documentElement,a=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return t("iphone")},device.ipod=function(){return t("ipod")},device.ipad=function(){return t("ipad")},device.android=function(){return t("android")},device.androidPhone=function(){return device.android()&&t("mobile")},device.androidTablet=function(){return device.android()&&!t("mobile")},device.blackberry=function(){return t("blackberry")||t("bb10")||t("rim")},device.blackberryPhone=function(){return device.blackberry()&&!t("tablet")},device.blackberryTablet=function(){return device.blackberry()&&t("tablet")},device.windows=function(){return t("windows")},device.windowsPhone=function(){return device.windows()&&t("phone")},device.windowsTablet=function(){return device.windows()&&t("touch")&&!device.windowsPhone()},device.fxos=function(){return(t("(mobile;")||t("(tablet;"))&&t("; rv:")},device.fxosPhone=function(){return device.fxos()&&t("mobile")},device.fxosTablet=function(){return device.fxos()&&t("tablet")},device.meego=function(){return t("meego")},device.cordova=function(){return window.cordova&&"file:"===location.protocol},device.nodeWebkit=function(){return"object"==typeof window.process},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()||device.meego()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.desktop=function(){return!device.tablet()&&!device.mobile()},device.portrait=function(){return window.innerHeight/window.innerWidth>1},device.landscape=function(){return window.innerHeight/window.innerWidth<1},device.noConflict=function(){return window.device=e,this},device.isLowQuality=function(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1},device.isSafari=function(){return-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")},t=function(e){return-1!==a.indexOf(e)},r=function(e){var i;return i=new RegExp(e,"i"),n.className.match(i)},i=function(e){return r(e)?void 0:n.className+=" "+e},c=function(e){return r(e)?n.className=n.className.replace(e,""):void 0},device.ios()?device.ipad()?i("ios ipad tablet"):device.iphone()?i("ios iphone mobile"):device.ipod()&&i("ios ipod mobile"):i(device.android()?device.androidTablet()?"android tablet":"android mobile":device.blackberry()?device.blackberryTablet()?"blackberry tablet":"blackberry mobile":device.windows()?device.windowsTablet()?"windows tablet":device.windowsPhone()?"windows mobile":"desktop":device.fxos()?device.fxosTablet()?"fxos tablet":"fxos mobile":device.meego()?"meego mobile":device.nodeWebkit()?"node-webkit":"desktop"),device.cordova()&&i("cordova"),o=function(){return device.landscape()?(c("portrait"),i("landscape")):(c("landscape"),i("portrait"))},d="onorientationchange"in window,s=d?"orientationchange":"resize",window.addEventListener?window.addEventListener(s,o,!1):window.attachEvent?window.attachEvent(s,o):window[s]=o,o()}).call(this),define("libs/device",function(e){return function(){var i;return i||e.device}}(this)),define("config",["modernizr","libs/device"],function(e,i){var n,t,o=window.location.hostname;0===o.indexOf("localhost")||0===o.indexOf("0.0.0.0")||0===o.indexOf("192.168")?(n="./CDN_PATH",t="local"):(n="http://experiments-cdn.resn.co.nz/./CDN_PATH",t="production");var r={SITE_URL:"http://",APP_URL:"https://apps.facebook.com/",CDN:n,ENV:t,API_URL:{production:"http://api.tumblr.com/v2/blog/resn-experiments.tumblr.com",staging:"http://api.tumblr.com/v2/blog/resn-experiments.tumblr.com",development:"http://api.tumblr.com/v2/blog/resn-experiments.tumblr.com",local:"http://api.tumblr.com/v2/blog/resn-experiments.tumblr.com"},API_KEY:{production:"fyhJ8BevOV9IQmTauwmmjSop85BCx7A5VF8reftzQPEfPLziXU",staging:"fyhJ8BevOV9IQmTauwmmjSop85BCx7A5VF8reftzQPEfPLziXU",development:"fyhJ8BevOV9IQmTauwmmjSop85BCx7A5VF8reftzQPEfPLziXU",local:"fyhJ8BevOV9IQmTauwmmjSop85BCx7A5VF8reftzQPEfPLziXU"},TAGS_POST_ID:131484780899,getAPI:function(){return this.API_URL[this.ENV]},getAPIKey:function(){return this.API_KEY[this.ENV]},GA:{testing:"UA-1854375-56",local:"UA-1854375-56",staging:"UA-1854375-56",production:"UA-1854375-56"},getAnalytics:function(){return this.GA[this.ENV]},OLD_DESKTOP:!e.csstransforms,MOBILE:i.mobile(),TABLET:i.tablet(),IOS:i.ios(),ANDROID:i.android(),HI_DPI:window.devicePixelRatio>1,LOW_QUALITY_MODE:i.isLowQuality(),ISSAFARI:i.isSafari(),ISFIREFOX:navigator.userAgent.toLowerCase().indexOf("firefox")>-1,CONTAINER_SCALE:.8,GRID_VAL:65,FLOWS:{BASIC:"BASIC",EXTENDED:"EXTENDED",MOBILE:"MOBILE",TABLET:"TABLET"},FLOW:"none",FLASH_VESRION:"11.0.0",FLASH:null,FLASH_BYPASS:window.location.href.match(/bypass/),FACEBOOK_APP_IDS:{live:"",staging:"",dev:"",local:"205547496221381"},getFBID:function(){return this.FACEBOOK_APP_IDS[this.ENV]}};return r.BASE_URL=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")+1),r}),require.config({paths:{jquery:"libs/jquery-2.1.3",underscore:"libs/underscore",backbone:"libs/backbone",swfobject:"libs/swfobject",handlebars:"libs/handlebars-v3.0.0",text:"libs/text",TweenMax:"libs/greensock/TweenMax.min",TweenLite:"libs/greensock/TweenLite.min",TimelineLite:"libs/greensock/TimelineLite.min",TimelineMax:"libs/greensock/TimelineMax.min",sylvester:"libs/sylvester-min",console:"util/debugger",modernizr:"empty:",createjs:"shims/shim_createjs","libs/createjs/preloadjs":"libs/createjs/preloadjs-0.6.0.combined","libs/createjs/tweenjs":"libs/createjs/tweenjs-0.6.0.min","libs/createjs/easeljs":"libs/createjs/easeljs-0.8.0.min","libs/createjs/movieclip":"libs/createjs/movieclip-0.8.0.min","libs/createjs/soundjs":"libs/createjs/soundjs-NEXT.combined",rsvp:"libs/rsvp",three:"libs/three/three.min"},shim:{three:{exports:"THREE"},rsvp:{exports:"RSVP"},"libs/console-shim":{exports:"console"},jquery:{exports:"jQuery"},"libs/createjs/movieclip":{deps:["libs/createjs/easeljs","libs/createjs/tweenjs"]},"libs/createjs/tweenjs":{exports:"createjs.Tween",deps:["libs/createjs/easeljs"]},"libs/device":{exports:"device"},underscore:{exports:"_"},backbone:{deps:["underscore","jquery"],exports:"Backbone"},handlebars:{exports:"handlebars"},console:{exports:"console"},"libs/mocha":{exports:"mocha"},"libs/expect":{exports:"expect"},"libs/swfobject":{deps:["jquery"],exports:"swfobject"},"libs/swffit":["libs/swfobject"],"libs/swfmacmousewheel":["libs/swfobject"],"libs/jquery-swfobject":["jquery"]},waitSeconds:0}),define("modernizr",[],function(){return window.Modernizr}),require(["config"],function(e){function i(e){for(var i=document.getElementsByTagName("head")[0],n=0;n<e.length;n++){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e[n]),i.appendChild(t)}}var n=[],t=[],o=null;e.MOBILE?e.FLOW=e.FLOWS.MOBILE:e.OLD_DESKTOP?e.FLOW=e.FLOWS.BASIC:e.TABLET?(e.FLOW=e.FLOWS.TABLET,n.push("main_tablet_extended"),t.push(e.CDN+"/css/all.css")):(e.FLOW=e.FLOWS.EXTENDED,t.push(e.CDN+"/css/all.css"),n.push("main_desktop_extended")),window.location.toString().indexOf("?testing")>-1&&(o="tests/mocha"),i(t),require(n,function(e){o?require([o],function(i){e.start(),i.run()}):e.start()})}),define("loader",function(){});