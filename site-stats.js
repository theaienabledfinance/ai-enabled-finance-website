// Single source of truth for stats repeated across pages.
// Update a value here and every page using data-stat="..." updates automatically.
(function(){
  var STATS = {
    subscribers: '759+',
    vaultPrompts: '335+'
  };
  document.querySelectorAll('[data-stat]').forEach(function(el){
    var key = el.getAttribute('data-stat');
    if (STATS[key] !== undefined) el.textContent = STATS[key];
  });
})();
