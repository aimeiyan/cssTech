!(function(r,va,wa){r=r("jquery");(function(b){b.fn.fullpage=function(c){function r(){b("body").append('<div id="fp-nav"><ul></ul></div>');m=b("#fp-nav");m.css("color",c.navigationColor);m.addClass(c.navigationPosition);for(var a=0;a<b(".fp-section").length;a++){var d="";c.anchors.length&&(d=c.anchors[a]);var d='<li><a href="#'+d+'"><span></span></a>',e=c.navigationTooltips[a];void 0!=e&&""!=e&&(d+='<div class="fp-tooltip '+c.navigationPosition+'">'+e+"</div>");d+="</li>";m.find("ul").append(d)}}
function N(){b(".fp-section").each(function(){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))});b.isFunction(c.afterRender)&&c.afterRender.call(this)}function O(){if(!c.autoScrolling||c.scrollBar){var a=b(window).scrollTop(),d=0,e=Math.abs(a-b(".fp-section").first().offset().top);b(".fp-section").each(function(c){var f=Math.abs(a-b(this).offset().top);f<e&&(d=c,e=f)});var f=b(".fp-section").eq(d)}if(!c.autoScrolling&&!f.hasClass("active")){D=!0;var E=b(".fp-section.active").index(".fp-section")+
1,g=F(f),h=f.data("anchor");f.addClass("active").siblings().removeClass("active");k||(b.isFunction(c.onLeave)&&c.onLeave.call(this,E,f.index(".fp-section")+1,g),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,h,f.index(".fp-section")+1));G(h,0);c.anchors.length&&!k&&(n=h,location.hash=h);clearTimeout(P);P=setTimeout(function(){D=!1},100)}c.scrollBar&&(clearTimeout(Q),Q=setTimeout(function(){k||p(f)},1E3))}function R(a){return scrollable=a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):
a.find(".fp-scrollable")}function y(a,d){if("down"==a)var c="bottom",f=b.fn.fullpage.moveSectionDown;else c="top",f=b.fn.fullpage.moveSectionUp;if(0<d.length)if(c="top"===c?!d.scrollTop():"bottom"===c?d.scrollTop()+1+d.innerHeight()>=d[0].scrollHeight:void 0,c)f();else return!0;else f()}function la(a){var d=a.originalEvent;if(!S(a.target)){c.autoScrolling&&!c.scrollBar&&a.preventDefault();a=b(".fp-section.active");var e=R(a);k||t||(d=T(d),s=d.y,z=d.x,a.find(".fp-slides").length&&Math.abs(A-z)>Math.abs(u-
s)?Math.abs(A-z)>b(window).width()/100*c.touchSensitivity&&(A>z?b.fn.fullpage.moveSlideRight():b.fn.fullpage.moveSlideLeft()):c.autoScrolling&&!c.scrollBar&&Math.abs(u-s)>b(window).height()/100*c.touchSensitivity&&(u>s?y("down",e):s>u&&y("up",e)))}}function S(a,d){d=d||0;var e=b(a).parent();return d<c.normalScrollElementTouchThreshold&&e.is(c.normalScrollElements)?!0:d==c.normalScrollElementTouchThreshold?!1:S(e,++d)}function ma(a){a=T(a.originalEvent);u=a.y;A=a.x}function q(a){if(c.autoScrolling){a=
window.event||a;var d=Math.max(-1,Math.min(1,a.wheelDelta||-a.deltaY||-a.detail));c.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=b(".fp-section.active");a=R(a);k||(0>d?y("down",a):y("up",a));return!1}}function U(a){var d=b(".fp-section.active").find(".fp-slides");if(d.length&&!t){var e=d.find(".fp-slide.active"),f=null,f="prev"===a?e.prev(".fp-slide"):e.next(".fp-slide");if(!f.length){if(!c.loopHorizontal)return;f="prev"===a?e.siblings(":last"):e.siblings(":first")}t=!0;v(d,
f)}}function V(){b(".fp-slide.active").each(function(){H(b(this))})}function p(a,d,e){var f=a.position();if("undefined"!==typeof f&&(d={element:a,callback:d,isMovementUp:e,dest:f,dtop:f.top,yMovement:F(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:b(".fp-section.active"),leavingSection:b(".fp-section.active").index(".fp-section")+1,localIsResizing:w},!(d.activeSection.is(a)&&!w||c.scrollBar&&b(window).scrollTop()===d.dtop))){if(d.activeSlide.length)var E=
d.activeSlide.data("anchor"),g=d.activeSlide.index();c.autoScrolling&&c.continuousVertical&&"undefined"!==typeof d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&(d.isMovementUp?b(".fp-section.active").before(d.activeSection.nextAll(".fp-section")):b(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()),l(b(".fp-section.active").position().top),V(),d.wrapAroundElements=d.activeSection,d.dest=d.element.position(),d.dtop=d.dest.top,
d.yMovement=F(d.element));a.addClass("active").siblings().removeClass("active");k=!0;W(g,E,d.anchorLink,d.sectionIndex);b.isFunction(c.onLeave)&&!d.localIsResizing&&c.onLeave.call(this,d.leavingSection,d.sectionIndex+1,d.yMovement);na(d);n=d.anchorLink;c.autoScrolling&&G(d.anchorLink,d.sectionIndex)}}function na(a){if(c.css3&&c.autoScrolling&&!c.scrollBar)X("translate3d(0px, -"+a.dtop+"px, 0px)",!0),setTimeout(function(){Y(a)},c.scrollingSpeed);else{var d=oa(a);b(d.element).animate(d.options,c.scrollingSpeed,
c.easing).promise().done(function(){Y(a)})}}function oa(a){var b={};c.autoScrolling&&!c.scrollBar?(b.options={top:-a.dtop},b.element="."+Z):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function pa(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?b(".fp-section:first").before(a.wrapAroundElements):b(".fp-section:last").after(a.wrapAroundElements),l(b(".fp-section.active").position().top),V())}function Y(a){pa(a);b.isFunction(c.afterLoad)&&!a.localIsResizing&&
c.afterLoad.call(this,a.anchorLink,a.sectionIndex+1);setTimeout(function(){k=!1;b.isFunction(a.callback)&&a.callback.call(this)},qa)}function $(){if(!D){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof n,f="undefined"===typeof n&&"undefined"===typeof a&&!t;(b&&b!==n&&!c||f||!t&&I!=a)&&J(b,a)}}}function v(a,d){var e=d.position(),f=a.find(".fp-slidesContainer").parent(),g=d.index(),h=a.closest(".fp-section"),k=h.index(".fp-section"),m=h.data("anchor"),
p=h.find(".fp-slidesNav"),l=d.data("anchor"),r=w;if(c.onSlideLeave){var n=h.find(".fp-slide.active").index(),q;q=n==g?"none":n>g?"left":"right";r||"none"===q||b.isFunction(c.onSlideLeave)&&c.onSlideLeave.call(this,m,k+1,n,q)}d.addClass("active").siblings().removeClass("active");"undefined"===typeof l&&(l=g);c.loopHorizontal||(h.find(".fp-controlArrow.fp-prev").toggle(0!=g),h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));h.hasClass("active")&&W(g,l,m,k);var s=function(){r||b.isFunction(c.afterSlideLoad)&&
c.afterSlideLoad.call(this,m,k+1,l,g);t=!1};c.css3?(e="translate3d(-"+e.left+"px, 0px, 0px)",aa(a.find(".fp-slidesContainer"),0<c.scrollingSpeed).css(ba(e)),setTimeout(function(){s()},c.scrollingSpeed,c.easing)):f.animate({scrollLeft:e.left},c.scrollingSpeed,c.easing,function(){s()});p.find(".active").removeClass("active");p.find("li").eq(g).find("a").addClass("active")}function ca(){da();if(K){if("text"!==b(document.activeElement).attr("type")){var a=b(window).height();Math.abs(a-L)>20*Math.max(L,
a)/100&&(b.fn.fullpage.reBuild(!0),L=a)}}else clearTimeout(ea),ea=setTimeout(function(){b.fn.fullpage.reBuild(!0)},500)}function da(){if(c.responsive){var a=g.hasClass("fp-responsive");b(window).width()<c.responsive?a||(b.fn.fullpage.setAutoScrolling(!1),b("#fp-nav").hide(),g.addClass("fp-responsive")):a&&(b.fn.fullpage.setAutoScrolling(!0),b("#fp-nav").show(),g.removeClass("fp-responsive"))}}function aa(a,b){var e="all "+c.scrollingSpeed+"ms "+c.easingcss3;return b?(a.removeClass("fp-notransition"),
a.css({"-webkit-transition":e,transition:e})):M(a)}function M(a){return a.addClass("fp-notransition")}function ra(a,d){if(825>a||900>d){var c=Math.min(100*a/825,100*d/900).toFixed(2);b("body").css("font-size",c+"%")}else b("body").css("font-size","100%")}function G(a,d){c.menu&&(b(c.menu).find(".active").removeClass("active"),b(c.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));c.navigation&&(b("#fp-nav").find(".active").removeClass("active"),a?b("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):
b("#fp-nav").find("li").eq(d).find("a").addClass("active"))}function F(a){var d=b(".fp-section.active").index(".fp-section");a=a.index(".fp-section");return d==a?"none":d>a?"up":"down"}function x(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),e=a.find(".fp-scrollable");if(e.length)var f=e.get(0).scrollHeight;else f=a.get(0).scrollHeight,c.verticalCentered&&(f=a.find(".fp-tableCell").get(0).scrollHeight);b=h-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));f>b?e.length?
e.css("height",b+"px").parent().css("height",b+"px"):(c.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):a.wrapInner('<div class="fp-scrollable" />'),a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):fa(a);a.css("overflow","")}function fa(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function ga(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+
ha(a)+'px;" />')}function ha(a){var b=h;if(c.paddingTop||c.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom")),b=h-a;return b}function X(a,b){aa(g,b);g.css(ba(a))}function J(a,c){"undefined"===typeof c&&(c=0);var e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);a===n||e.hasClass("active")?ia(e,c):p(e,function(){ia(e,c)})}function ia(a,b){if("undefined"!=typeof b){var c=a.find(".fp-slides"),f=c.find('[data-anchor="'+
b+'"]');f.length||(f=c.find(".fp-slide").eq(b));f.length&&v(c,f)}}function sa(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var e=a.find(".fp-slidesNav");e.addClass(c.slidesNavPosition);for(var f=0;f<b;f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');e.css("margin-left","-"+e.width()/2+"px");e.find("li").first().find("a").addClass("active")}function W(a,b,e,f){var g="";c.anchors.length?(a?("undefined"!==typeof e&&(g=e),"undefined"===typeof b&&(b=a),I=b,location.hash=
g+"/"+b):("undefined"!==typeof a&&(I=b),location.hash=e),B(location.hash)):"undefined"!==typeof a?B(f+"-"+a):B(String(f))}function B(a){a=a.replace("/","-").replace("#","");b("body")[0].className=b("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g,"");b("body").addClass("fp-viewing-"+a)}function ta(){var a=document.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,
null);for(var f in c)void 0!==a.style[f]&&(a.style[f]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[f]));document.body.removeChild(a);return void 0!==b&&0<b.length&&"none"!==b}function ja(){return window.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function T(a){var b=[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;
return b}function H(a){var d=c.scrollingSpeed;b.fn.fullpage.setScrollingSpeed(0);v(a.closest(".fp-slides"),a);b.fn.fullpage.setScrollingSpeed(d)}function l(a){c.scrollBar?g.scrollTop(a):c.css3?X("translate3d(0px, -"+a+"px, 0px)",!1):g.css("top",-a)}function ba(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function ua(){l(0);b("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();b(".fp-section").css({height:"","background-color":"",padding:""});b(".fp-slide").css({width:""});
g.css({height:"",position:"","-ms-touch-action":"","touch-action":""});b(".fp-section, .fp-slide").each(function(){fa(b(this));b(this).removeClass("fp-table active")});M(g);M(g.find(".fp-easing"));g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){b(this).replaceWith(this.childNodes)});b("html, body").scrollTop(0)}function C(a,b){console&&console[a]&&console[a]("fullPage: "+b)}c=b.extend({menu:!1,anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],
slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,easing:"easeInQuart",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,sectionSelector:".section",
slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},c);(function(){c.continuousVertical&&(c.loopTop||c.loopBottom)&&(c.continuousVertical=!1,C("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.continuousVertical&&c.scrollBar&&(c.continuousVertical=!1,C("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
b.each(c.anchors,function(a,c){(b("#"+c).length||b('[name="'+c+'"]').length)&&C("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();b.extend(b.easing,{easeInQuart:function(a,b,c,f,g){return f*(b/=g)*b*b*b+c}});var qa=600;b.fn.fullpage.setAutoScrolling=function(a){c.autoScrolling=a;a=b(".fp-section.active");c.autoScrolling&&!c.scrollBar?(b("html, body").css({overflow:"hidden",height:"100%"}),g.css({"-ms-touch-action":"none","touch-action":"none"}),
a.length&&l(a.position().top)):(b("html, body").css({overflow:"visible",height:"initial"}),g.css({"-ms-touch-action":"","touch-action":""}),l(0),b("html, body").scrollTop(a.position().top))};b.fn.fullpage.setScrollingSpeed=function(a){c.scrollingSpeed=a};b.fn.fullpage.setMouseWheelScrolling=function(a){a?document.addEventListener?(document.addEventListener("mousewheel",q,!1),document.addEventListener("wheel",q,!1)):document.attachEvent("onmousewheel",q):document.addEventListener?(document.removeEventListener("mousewheel",
q,!1),document.removeEventListener("wheel",q,!1)):document.detachEvent("onmousewheel",q)};b.fn.fullpage.setAllowScrolling=function(a){if(a){if(b.fn.fullpage.setMouseWheelScrolling(!0),K||ka)MSPointer=ja(),b(document).off("touchstart "+MSPointer.down).on("touchstart "+MSPointer.down,ma),b(document).off("touchmove "+MSPointer.move).on("touchmove "+MSPointer.move,la)}else if(b.fn.fullpage.setMouseWheelScrolling(!1),K||ka)MSPointer=ja(),b(document).off("touchstart "+MSPointer.down),b(document).off("touchmove "+
MSPointer.move)};b.fn.fullpage.setKeyboardScrolling=function(a){c.keyboardScrolling=a};b.fn.fullpage.moveSectionUp=function(){var a=b(".fp-section.active").prev(".fp-section");a.length||!c.loopTop&&!c.continuousVertical||(a=b(".fp-section").last());a.length&&p(a,null,!0)};b.fn.fullpage.moveSectionDown=function(){var a=b(".fp-section.active").next(".fp-section");a.length||!c.loopBottom&&!c.continuousVertical||(a=b(".fp-section").first());a.length&&p(a,null,!1)};b.fn.fullpage.moveTo=function(a,c){var e=
"",e=isNaN(a)?b('[data-anchor="'+a+'"]'):b(".fp-section").eq(a-1);"undefined"!==typeof c?J(a,c):0<e.length&&p(e)};b.fn.fullpage.moveSlideRight=function(){U("next")};b.fn.fullpage.moveSlideLeft=function(){U("prev")};b.fn.fullpage.reBuild=function(a){w=!0;var d=b(window).width();h=b(window).height();c.resize&&ra(h,d);b(".fp-section").each(function(){parseInt(b(this).css("padding-bottom"));parseInt(b(this).css("padding-top"));c.verticalCentered&&b(this).find(".fp-tableCell").css("height",ha(b(this))+
"px");b(this).css("height",h+"px");if(c.scrollOverflow){var a=b(this).find(".fp-slide");a.length?a.each(function(){x(b(this))}):x(b(this))}a=b(this).find(".fp-slides");a.length&&v(a,a.find(".fp-slide.active"))});b(".fp-section.active").position();d=b(".fp-section.active");d.index(".fp-section")&&p(d);w=!1;b.isFunction(c.afterResize)&&a&&c.afterResize.call(this);b.isFunction(c.afterReBuild)&&!a&&c.afterReBuild.call(this)};var t=!1,K=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
ka="ontouchstart"in window||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,g=b(this),h=b(window).height(),k=!1,w=!1,n,I,m,Z="fullpage-wrapper";b.fn.fullpage.setAllowScrolling(!0);c.css3&&(c.css3=ta());b(this).length?(g.css({height:"100%",position:"relative"}),g.addClass(Z)):C("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");b(c.sectionSelector).each(function(){b(this).addClass("fp-section")});b(c.slideSelector).each(function(){b(this).addClass("fp-slide")});
c.navigation&&r();b(".fp-section").each(function(a){var d=b(this),e=b(this).find(".fp-slide"),f=e.length;a||0!==b(".fp-section.active").length||b(this).addClass("active");b(this).css("height",h+"px");(c.paddingTop||c.paddingBottom)&&b(this).css("padding",c.paddingTop+" 0 "+c.paddingBottom+" 0");"undefined"!==typeof c.sectionsColor[a]&&b(this).css("background-color",c.sectionsColor[a]);"undefined"!==typeof c.anchors[a]&&b(this).attr("data-anchor",c.anchors[a]);if(1<f){a=100*f;var g=100/f;e.wrapAll('<div class="fp-slidesContainer" />');
e.parent().wrap('<div class="fp-slides" />');b(this).find(".fp-slidesContainer").css("width",a+"%");b(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=c.controlArrowColor&&(b(this).find(".fp-controlArrow.fp-next").css("border-color","transparent transparent transparent "+c.controlArrowColor),b(this).find(".fp-controlArrow.fp-prev").css("border-color","transparent "+c.controlArrowColor+" transparent transparent"));c.loopHorizontal||
b(this).find(".fp-controlArrow.fp-prev").hide();c.slidesNavigation&&sa(b(this),f);e.each(function(a){b(this).css("width",g+"%");c.verticalCentered&&ga(b(this))});d=d.find(".fp-slide.active");0==d.length?e.eq(0).addClass("active"):H(d)}else c.verticalCentered&&ga(b(this))}).promise().done(function(){b.fn.fullpage.setAutoScrolling(c.autoScrolling);var a=b(".fp-section.active").find(".fp-slide.active");a.length&&(0!=b(".fp-section.active").index(".fp-section")||0==b(".fp-section.active").index(".fp-section")&&
0!=a.index())&&H(a);c.fixedElements&&c.css3&&b(c.fixedElements).appendTo("body");c.navigation&&(m.css("margin-top","-"+m.height()/2+"px"),m.find("li").eq(b(".fp-section.active").index(".fp-section")).find("a").addClass("active"));c.menu&&c.css3&&b(c.menu).closest(".fullpage-wrapper").length&&b(c.menu).appendTo("body");c.scrollOverflow?("complete"===document.readyState&&N(),b(window).on("load",N)):b.isFunction(c.afterRender)&&c.afterRender.call(this);da();a=window.location.hash.replace("#","").split("/")[0];
if(a.length){var d=b('[data-anchor="'+a+'"]');!c.animateAnchor&&d.length&&(c.autoScrolling?l(d.position().top):(l(0),B(a),b("html, body").scrollTop(d.position().top)),G(a,null),b.isFunction(c.afterLoad)&&c.afterLoad.call(this,a,d.index(".fp-section")+1),d.addClass("active").siblings().removeClass("active"))}b(window).on("load",function(){var a=window.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&J(b,a)})});var P,Q,D=!1;b(window).on("scroll",O);var u=0,A=0,s=0,z=0;b(window).on("hashchange",
$);b(document).keydown(function(a){if(c.keyboardScrolling&&c.autoScrolling&&(40!=a.which&&38!=a.which||a.preventDefault(),!k))switch(a.which){case 38:case 33:b.fn.fullpage.moveSectionUp();break;case 40:case 34:b.fn.fullpage.moveSectionDown();break;case 36:b.fn.fullpage.moveTo(1);break;case 35:b.fn.fullpage.moveTo(b(".fp-section").length);break;case 37:b.fn.fullpage.moveSlideLeft();break;case 39:b.fn.fullpage.moveSlideRight()}});b(document).on("click touchstart","#fp-nav a",function(a){a.preventDefault();
a=b(this).parent().index();p(b(".fp-section").eq(a))});b(document).on("click touchstart",".fp-slidesNav a",function(a){a.preventDefault();a=b(this).closest(".fp-section").find(".fp-slides");var c=a.find(".fp-slide").eq(b(this).closest("li").index());v(a,c)});c.normalScrollElements&&(b(document).on("mouseenter",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!1)}),b(document).on("mouseleave",c.normalScrollElements,function(){b.fn.fullpage.setMouseWheelScrolling(!0)}));b(".fp-section").on("click touchstart",
".fp-controlArrow",function(){b(this).hasClass("fp-prev")?b.fn.fullpage.moveSlideLeft():b.fn.fullpage.moveSlideRight()});b(window).resize(ca);var L=h,ea;b.fn.fullpage.destroy=function(a){b.fn.fullpage.setAutoScrolling(!1);b.fn.fullpage.setAllowScrolling(!1);b.fn.fullpage.setKeyboardScrolling(!1);b(window).off("scroll",O).off("hashchange",$).off("resize",ca);b(document).off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",
c.normalScrollElements).off("mouseout",c.normalScrollElements);b(".fp-section").off("click",".fp-controlArrow");a&&ua()}}})(r);return r});
/*  |xGv00|7c46b4c0330bd67ea8faabc64ed6cb2c */