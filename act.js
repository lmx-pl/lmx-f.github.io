(function(){var SCRIPT_ID='__lumex_url_replacer_v2';if(window[SCRIPT_ID]){console.log('Lumex URL replacer: Script already executed');return;}
window[SCRIPT_ID]=true;console.log('Lumex URL replacer: Script started');var actual='https://player-frontend.stage.lumex.me',re=/^(https?:\/\/)?([\w-]+\.)?lumex\.([\w-]+)(\/.*)?$/i,delay=5000,max=1000*60*60*24,dry=[];function replace(){console.log('Lumex URL replacer: Running replace function');if(delay<max)delay++;setTimeout(replace,delay);var old,src,ds,i=findFrame(function(f){src=f.src||(f.dataset&&f.dataset.src);if(src){old=src.match(re);if(old){var protocol=old[1]||'https://';var subdomain=old[2]||'';var newDomain=actual.replace(/^https?:\/\//,'');var path=old[4]||'';var newSrc=protocol+newDomain+path;console.log('Lumex URL replacer: Replacing',src,'with',newSrc);if(f.src){f.src=newSrc;}
if(f.dataset&&f.dataset.src){f.dataset.src=newSrc;}
return true;}}
return false;});if(!i){console.log('Lumex URL replacer: No matching iframe found');return;}
console.log('Lumex URL replacer: iframe updated');}
function findFrame(fn){if(document.body){var frames=document.body.getElementsByTagName('iframe');for(var i=0;i<frames.length;i++){if(fn(frames[i])){return frames[i];}}}
return null;}
function checkIframes(){var frames=document.getElementsByTagName('iframe');console.log('Lumex URL replacer: Found '+frames.length+' iframes');for(var i=0;i<frames.length;i++){var src=frames[i].src||(frames[i].dataset&&frames[i].dataset.src);if(src&&re.test(src)){console.log('Lumex URL replacer: Matching URL found: '+src);}}}
replace();checkIframes();setInterval(replace,5000);console.log('Lumex URL replacer: Script initialization complete');})();
