//- tsd install jquery

///ts:ref=jquery.d.ts
/// <reference path="../typings/jquery/jquery.d.ts"/> ///ts:ref:generated

// include - http://bit.ly/1A12GxJ
(function(a){a.fn.inc=function(b,c,d,e){return this.length&&b?this.each(function(){e=a(this);a.ajax({url:b,success:function(f,g,h){e.html(a.isFunction(c)?c(f,b):f);a.isFunction(d)&&d(b,g,h)}})}):this};
a(function(){a('[class*="inc:"]').each(function(){var b=/inc:(\S+)/.exec(this.className||"");b&&a(this).inc(decodeURI(b[1]))})})})(jQuery);

