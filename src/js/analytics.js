// // intercom
window.intercomSettings = {
  "widget": {
    "activator": "#contact,#contact-text,.intercom-trigger"
  },
  app_id: 'bztln233'
};
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='//widget.intercom.io/widget/bztln233';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

// // heap
window.heap=window.heap||[],heap.load=function(t,e){window.heap.appid=t,window.heap.config=e;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+t+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(t){return function(){heap.push([t].concat(Array.prototype.slice.call(arguments,0)))}},p=["clearEventProperties","identify","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
heap.load("2302605216");

// // ga
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-54353103-1', 'auto');
ga('send', 'pageview');

// // kissmetrics
// var _kmk = _kmk || '66a64190196149aa8ce33a29ec4f847fc2878672';
// function _kms(u){
//   setTimeout(function(){
//       var d = document, f = d.getElementsByTagName('script')[0],
//       s = d.createElement('script');
//       s.type = 'text/javascript'; s.async = true; s.src = u;
//       f.parentNode.insertBefore(s, f);
//       }, 1);
// }

// _kms('//i.kissmetrics.com/i.js');
// _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
