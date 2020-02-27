function _(x){
    return document.getElementById(x);
}
function initMenu(){
	_("sidebar").style.left = _("web").offsetLeft+"px";
	_("sidebar").style.width = _("web").offsetWidth-2+"px";
	_("sidebar").style.display = "block";
}
function loadContent(btn){
	_("sidebar").style.left = btn.offsetLeft+"px";
	_("sidebar").style.width = btn.offsetWidth-2+"px";
	_("web").innerHTML = "Content for "+btn.innerHTML+" loaded";
}
window.addEventListener('load', function(event) { initMenu(); });