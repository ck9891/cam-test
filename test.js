var SITE=SITE||{};!function($,e,t){"use strict";var
n=e.console,i=$(e),a=$("body");SITE={init:function(){var e=this,n;for(n in
e)if(e.hasOwnProperty(n)){var
i=e[n];i.init!==t&&i.init()}}},SITE.scrollTo={selector:$("a.scrollTo"),init:function(){this.selector.on("click",function(){var
e=$(this).attr("href");return n.log("Smooth Scroll to
"+e),$("html,body").animate({scrollTop:$(e).offset().top}),!1})}},SITE.mobileMenu={selector:".hamburger",isOpen:!1,init:function(){var
e=this,t=$(e.selector);t.on("click",function(){return
e.toggleNav(),!1})},toggleNav:function(){n.log("Toggling Nav");var
e=this;e.isOpen?(a.removeClass("show-menu"),SITE.toggleTabIndex.elements($("#mainNav").find("a"),!1)):(a.addClass("show-menu"),SITE.toggleTabIndex.elements($("#mainNav").find("a"),!0)),e.isOpen=!e.isOpen}},SITE.windowResized={resized:!1,init:function(){var
e=this;i.on("resize",function(){e.resized=!0}),setInterval(function(){e.resized&&(e.resized=!1,e.tasks())},0)},tasks:function(){SITE.relocateMainNav.init(),SITE.changeHeaderMargin.init(),SITE.mobileMenu.isOpen=!0,SITE.mobileMenu.toggleNav()}},SITE.stickMainNav={nav:$("#mainNav"),header:$("#mainHeader"),scrolled:!1,init:function(){var
e=this;i.on("scroll",function(){var
t=e.header.outerHeight()-e.nav.outerHeight()+2;i.innerWidth()>=990&&a.scrollTop()>t?e.header.css("transform","translateY(-"+t+"px"):e.header.css("transform","translateY(0px")})}},SITE.relocateMainNav={nav:$("#mainNav"),header:$("#mainHeader"),headerContainer:$("#mainHeader
.container"),init:function(){i.innerWidth()>=990?(this.headerContainer.append(this.nav),SITE.toggleTabIndex.elements(this.nav.find("a"),!0),a.removeClass("show-mobile-nav-link")):(this.header.after(this.nav),SITE.toggleTabIndex.elements(this.nav.find("a"),!1),a.addClass("show-mobile-nav-link"))}},SITE.changeHeaderMargin={header:$("#mainHeader"),nav:$("#mainNav >
.nav"),init:function(){var
e=this;i.innerWidth()>=990?this.nav.removeAttr("style"):this.nav.removeAttr("style").css("padding-top",this.header.outerHeight()),setTimeout(function(){a.css("padding-top",e.header.outerHeight())},10)}},SITE.toggleTabIndex={elements:function(e,t){$.each(e,function(e,n){t?$(n).removeAttr("tabindex"):$(n).attr("tabindex","-1")})}},SITE.revealContent={items:$("[data-reveal-content]"),triggers:$("[data-reveal-trigger]"),openedItem:null,init:function(){var
e=this;e.triggers.on("click",function(t){var
n=$(this),i=n.parent("div").data("manageMargin"),a=0;return
i&&(a=e.getElHeight(n.next("[data-hidden-content]"))),e.hideContent(),setTimeout(function(){$("html,body").animate({scrollTop:n.offset().top-$("#mainHeader").outerHeight()},100,function(){e.openedItem!==n[0].hash&&e.revealContent(t,n,a)})},550),!1})},getElHeight:function(e){var
t=e.outerHeight(!0)+25;return
t},revealContent:function(e,t,n){this.triggers.removeClass("reveal"),this.items.css("margin-bottom",""),t.parent("div").css("margin-bottom",n),t.addClass("reveal"),this.openedItem=t[0].hash},hideContent:function(){n.log("hiding
content"),this.triggers.removeClass("reveal"),this.items.css("margin-bottom","")}},$(document).ready(function(){SITE.init()})}(jQuery,this),function(){var
e=document.querySelectorAll(".social-share"),t={init:function(){e&&[].forEach.call(e,function(e){e.addEventListener("click",function(e){e.preventDefault(),t.windowPopup(this.href,500,300)})})},windowPopup:function(e,t,n){var
i=screen.width/2-t/2,a=screen.height/2-n/2;window.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+t+",height="+n+",top="+a+",left="+i)}};t.init()}();
