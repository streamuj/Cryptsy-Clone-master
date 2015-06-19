(function(e,t,n){function G(n,r,i){var o=t.createElement(n);if(r){o.id=s+r}if(i){o.style.cssText=i}return e(o)}function Y(){return n.innerHeight?n.innerHeight:e(n).height()}function Z(e){var t=E.length,n=(q+e)%t;return n<0?t+n:n}function et(e,t){return Math.round((/%/.test(e)?(t==="x"?S.width():Y())/100:1)*parseInt(e,10))}function tt(e,t){return e.photo||e.photoRegex.test(t)}function nt(e,t){return e.retinaUrl&&n.devicePixelRatio>1?t.replace(e.photoRegex,e.retinaSuffix):t}function rt(e){if("contains"in d[0]&&!d[0].contains(e.target)){e.stopPropagation();d.focus()}}function it(){var t,n=e.data(I,i);if(n==null){P=e.extend({},r);if(console&&console.log){console.log("Error: cboxElement missing settings object")}}else{P=e.extend({},n)}for(t in P){if(e.isFunction(P[t])&&t.slice(0,2)!=="on"){P[t]=P[t].call(I)}}P.rel=P.rel||I.rel||e(I).data("rel")||"nofollow";P.href=P.href||e(I).attr("href");P.title=P.title||I.title;if(typeof P.href==="string"){P.href=e.trim(P.href)}}function st(n,r){e(t).trigger(n);D.trigger(n);if(e.isFunction(r)){r.call(I)}}function ot(){var e,t=s+"Slideshow_",n="click."+s,r,i,o,u;if(P.slideshow&&E[1]){r=function(){clearTimeout(e)};i=function(){if(P.loop||E[q+1]){e=setTimeout(V.next,P.slideshowSpeed)}};o=function(){L.html(P.slideshowStop).unbind(n).one(n,u);D.bind(f,i).bind(a,r).bind(l,u);d.removeClass(t+"off").addClass(t+"on")};u=function(){r();D.unbind(f,i).unbind(a,r).unbind(l,u);L.html(P.slideshowStart).unbind(n).one(n,function(){V.next();o()});d.removeClass(t+"on").addClass(t+"off")};if(P.slideshowAuto){o()}else{u()}}else{d.removeClass(t+"off "+t+"on")}}function ut(n){if(!W){I=n;it();E=e(I);q=0;if(P.rel!=="nofollow"){E=e("."+o).filter(function(){var t=e.data(this,i),n;if(t){n=e(this).data("rel")||t.rel||this.rel}return n===P.rel});q=E.index(I);if(q===-1){E=E.add(I);q=E.length-1}}p.css({opacity:parseFloat(P.opacity),cursor:P.overlayClose?"pointer":"auto",visibility:"visible"}).show();if(J){d.add(p).removeClass(J)}if(P.className){d.add(p).addClass(P.className)}J=P.className;M.html(P.close).show();if(!U){U=z=true;d.css({visibility:"hidden",display:"block"});x=G($,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(m);H=g.height()+w.height()+m.outerHeight(true)-m.height();B=y.width()+b.width()+m.outerWidth(true)-m.width();j=x.outerHeight(true);F=x.outerWidth(true);P.w=et(P.initialWidth,"x");P.h=et(P.initialHeight,"y");V.position();ot();st(u,P.onOpen);_.add(C).hide();d.focus();if(P.trapFocus){if(t.addEventListener){t.addEventListener("focus",rt,true);D.one(c,function(){t.removeEventListener("focus",rt,true)})}}if(P.returnFocus){D.one(c,function(){e(I).focus()})}}lt()}}function at(){if(!d&&t.body){Q=false;S=e(n);d=G($).attr({id:i,"class":e.support.opacity===false?s+"IE":"",role:"dialog",tabindex:"-1"}).hide();p=G($,"Overlay").hide();N=e([G($,"LoadingOverlay")[0],G($,"LoadingGraphic")[0]]);v=G($,"Wrapper");m=G($,"Content").append(C=G($,"Title"),k=G($,"Current"),O=e('<button type="button"/>').attr({id:s+"Previous"}),A=e('<button type="button"/>').attr({id:s+"Next"}),L=G("button","Slideshow"),N,M=e('<button type="button"/>').attr({id:s+"Close"}));v.append(G($).append(G($,"TopLeft"),g=G($,"TopCenter"),G($,"TopRight")),G($,false,"clear:left").append(y=G($,"MiddleLeft"),m,b=G($,"MiddleRight")),G($,false,"clear:left").append(G($,"BottomLeft"),w=G($,"BottomCenter"),G($,"BottomRight"))).find("div div").css({"float":"left"});T=G($,false,"position:absolute; width:9999px; visibility:hidden; display:none");_=A.add(O).add(k).add(L);e(t.body).append(p,d.append(v,T))}}function ft(){function n(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();ut(this)}}if(d){if(!Q){Q=true;A.click(function(){V.next()});O.click(function(){V.prev()});M.click(function(){V.close()});p.click(function(){if(P.overlayClose){V.close()}});e(t).bind("keydown."+s,function(e){var t=e.keyCode;if(U&&P.escKey&&t===27){e.preventDefault();V.close()}if(U&&P.arrowKey&&E[1]&&!e.altKey){if(t===37){e.preventDefault();O.click()}else if(t===39){e.preventDefault();A.click()}}});if(e.isFunction(e.fn.on)){e(t).on("click."+s,"."+o,n)}else{e("."+o).live("click."+s,n)}}return true}return false}function lt(){var r,i,o=V.prep,u,f=++K;z=true;R=false;I=E[q];it();st(h);st(a,P.onLoad);P.h=P.height?et(P.height,"y")-j-H:P.innerHeight&&et(P.innerHeight,"y");P.w=P.width?et(P.width,"x")-F-B:P.innerWidth&&et(P.innerWidth,"x");P.mw=P.w;P.mh=P.h;if(P.maxWidth){P.mw=et(P.maxWidth,"x")-F-B;P.mw=P.w&&P.w<P.mw?P.w:P.mw}if(P.maxHeight){P.mh=et(P.maxHeight,"y")-j-H;P.mh=P.h&&P.h<P.mh?P.h:P.mh}r=P.href;X=setTimeout(function(){N.show()},100);if(P.inline){u=G($).hide().insertBefore(e(r)[0]);D.one(h,function(){u.replaceWith(x.children())});o(e(r))}else if(P.iframe){o(" ")}else if(P.html){o(P.html)}else if(tt(P,r)){r=nt(P,r);R=t.createElement("img");e(R).addClass(s+"Photo").bind("error",function(){P.title=false;o(G($,"Error").html(P.imgError))}).one("load",function(){var t;if(f!==K){return}R.alt=e(I).attr("alt")||e(I).attr("data-alt")||"";if(P.retinaImage&&n.devicePixelRatio>1){R.height=R.height/n.devicePixelRatio;R.width=R.width/n.devicePixelRatio}if(P.scalePhotos){i=function(){R.height-=R.height*t;R.width-=R.width*t};if(P.mw&&R.width>P.mw){t=(R.width-P.mw)/R.width;i()}if(P.mh&&R.height>P.mh){t=(R.height-P.mh)/R.height;i()}}if(P.h){R.style.marginTop=Math.max(P.mh-R.height,0)/2+"px"}if(E[1]&&(P.loop||E[q+1])){R.style.cursor="pointer";R.onclick=function(){V.next()}}R.style.width=R.width+"px";R.style.height=R.height+"px";setTimeout(function(){o(R)},1)});setTimeout(function(){R.src=r},1)}else if(r){T.load(r,P.data,function(t,n){if(f===K){o(n==="error"?G($,"Error").html(P.xhrError):e(this).contents())}})}}var r={transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:.9,preloading:true,className:false,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:false,returnFocus:true,trapFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=e("<a/>"),P,H,B,j,F,I,q,R,U,z,W,X,V,$="div",J,K=0,Q;if(e.colorbox){return}e(at);V=e.fn[i]=e[i]=function(t,n){var s=this;t=t||{};at();if(ft()){if(e.isFunction(s)){s=e("<a/>");t.open=true}else if(!s[0]){return s}if(n){t.onComplete=n}s.each(function(){e.data(this,i,e.extend({},e.data(this,i)||r,t))}).addClass(o);if(e.isFunction(t.open)&&t.open.call(s)||t.open){ut(s[0])}}return s};V.position=function(e,t){function f(e){g[0].style.width=w[0].style.width=m[0].style.width=parseInt(e.style.width,10)-B+"px";m[0].style.height=y[0].style.height=b[0].style.height=parseInt(e.style.height,10)-H+"px"}var n,r=0,i=0,o=d.offset(),u,a;S.unbind("resize."+s);d.css({top:-9e4,left:-9e4});u=S.scrollTop();a=S.scrollLeft();if(P.fixed){o.top-=u;o.left-=a;d.css({position:"fixed"})}else{r=u;i=a;d.css({position:"absolute"})}if(P.right!==false){i+=Math.max(S.width()-P.w-F-B-et(P.right,"x"),0)}else if(P.left!==false){i+=et(P.left,"x")}else{i+=Math.round(Math.max(S.width()-P.w-F-B,0)/2)}if(P.bottom!==false){r+=Math.max(Y()-P.h-j-H-et(P.bottom,"y"),0)}else if(P.top!==false){r+=et(P.top,"y")}else{r+=Math.round(Math.max(Y()-P.h-j-H,0)/2)}d.css({top:o.top,left:o.left,visibility:"visible"});e=d.width()===P.w+F&&d.height()===P.h+j?0:e||0;v[0].style.width=v[0].style.height="9999px";n={width:P.w+F+B,height:P.h+j+H,top:r,left:i};if(e===0){d.css(n)}d.dequeue().animate(n,{duration:e,complete:function(){f(this);z=false;v[0].style.width=P.w+F+B+"px";v[0].style.height=P.h+j+H+"px";if(P.reposition){setTimeout(function(){S.bind("resize."+s,V.position)},1)}if(t){t()}},step:function(){f(this)}})};V.resize=function(e){var t;if(U){e=e||{};if(e.width){P.w=et(e.width,"x")-F-B}if(e.innerWidth){P.w=et(e.innerWidth,"x")}x.css({width:P.w});if(e.height){P.h=et(e.height,"y")-j-H}if(e.innerHeight){P.h=et(e.innerHeight,"y")}if(!e.innerHeight&&!e.height){t=x.scrollTop();x.css({height:"auto"});P.h=x.height()}x.css({height:P.h});if(t){x.scrollTop(t)}V.position(P.transition==="none"?0:P.speed)}};V.prep=function(n){function u(){P.w=P.w||x.width();P.w=P.mw&&P.mw<P.w?P.mw:P.w;return P.w}function a(){P.h=P.h||x.height();P.h=P.mh&&P.mh<P.h?P.mh:P.h;return P.h}if(!U){return}var r,o=P.transition==="none"?0:P.speed;x.empty().remove();x=G($,"LoadedContent").append(n);x.hide().appendTo(T.show()).css({width:u(),overflow:P.scrolling?"auto":"hidden"}).css({height:a()}).prependTo(m);T.hide();e(R).css({"float":"none"});r=function(){function c(){if(e.support.opacity===false){d[0].style.removeAttribute("filter")}}var n=E.length,r,u="frameBorder",a="allowTransparency",l;if(!U){return}l=function(){clearTimeout(X);N.hide();st(f,P.onComplete)};C.html(P.title).add(x).show();if(n>1){if(typeof P.current==="string"){k.html(P.current.replace("{current}",q+1).replace("{total}",n)).show()}A[P.loop||q<n-1?"show":"hide"]().html(P.next);O[P.loop||q?"show":"hide"]().html(P.previous);if(P.slideshow){L.show()}if(P.preloading){e.each([Z(-1),Z(1)],function(){var n,r,s=E[this],o=e.data(s,i);if(o&&o.href){n=o.href;if(e.isFunction(n)){n=n.call(s)}}else{n=e(s).attr("href")}if(n&&tt(o,n)){n=nt(o,n);r=t.createElement("img");r.src=n}})}}else{_.hide()}if(P.iframe){r=G("iframe")[0];if(u in r){r[u]=0}if(a in r){r[a]="true"}if(!P.scrolling){r.scrolling="no"}e(r).attr({src:P.href,name:(new Date).getTime(),"class":s+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",l).appendTo(x);D.one(h,function(){r.src="//about:blank"});if(P.fastIframe){e(r).trigger("load")}}else{l()}if(P.transition==="fade"){d.fadeTo(o,1,c)}else{c()}};if(P.transition==="fade"){d.fadeTo(o,0,function(){V.position(0,r)})}else{V.position(o,r)}};V.next=function(){if(!z&&E[1]&&(P.loop||E[q+1])){q=Z(1);ut(E[q])}};V.prev=function(){if(!z&&E[1]&&(P.loop||q)){q=Z(-1);ut(E[q])}};V.close=function(){if(U&&!W){W=true;U=false;st(l,P.onCleanup);S.unbind("."+s);p.fadeTo(P.fadeOut||0,0);d.stop().fadeTo(P.fadeOut||0,0,function(){d.add(p).css({opacity:1,cursor:"auto"}).hide();st(h);x.empty().remove();setTimeout(function(){W=false;st(c,P.onClosed)},1)})}};V.remove=function(){if(!d){return}d.stop();e.colorbox.close();d.stop().remove();p.remove();W=false;d=null;e("."+o).removeData(i).removeClass(o);e(t).unbind("click."+s)};V.element=function(){return e(I)};V.settings=r})(jQuery,document,window)