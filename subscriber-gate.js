// Shared "subscriber" cookie logic used across all pages.
// A visitor is only marked subscribed when they click through to the real
// Beehiiv subscribe page — simply browsing the site no longer sets this
// (previously prompts.html set it on every page load, which meant anyone
// who ever visited that page got full access everywhere without ever
// entering an email).
(function(){
  function setCookie(n,v,d){var e=new Date();e.setTime(e.getTime()+(d*864e5));document.cookie=n+"="+v+";expires="+e.toUTCString()+";path=/;SameSite=Lax";}
  function getCookie(n){var m=document.cookie.match(new RegExp('(^| )'+n+'=([^;]+)'));return m?m[2]:null;}
  function isSubscriber(){return getCookie('taief_subscriber')==='true';}
  window.taief_isSubscriber = isSubscriber;

  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href*="beehiiv.com/subscribe"]');
    if (a) setCookie('taief_subscriber', 'true', 365);
  });

  function updateNav(){
    if (!isSubscriber()) return;
    document.querySelectorAll('[data-sub-href]').forEach(function(el){
      el.href = el.getAttribute('data-sub-href');
      el.onclick = null;
      el.removeAttribute('onclick');
    });
  }
  document.addEventListener('DOMContentLoaded', updateNav);
})();
