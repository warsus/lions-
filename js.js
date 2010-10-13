$(document).ready(function() {
    alert("shortkeys: a -> focus commentary s -> toggle horizontal/vertical layout d -> show both f -> show source")
    var vertical = true;
    var alignment = "cols";
    
    var focusDoc = function () {
	    $("frameset").attr(alignment,"100%,0%")
    }
    var focusSrc = function () {
	    $("frameset").attr(alignment,"0%,100%")
    }
    var focusBoth = function () {
	$("frameset").attr(alignment,"50%,50%")
    }
    var switchAlignment = function () {
	$("frameset").removeAttr(alignment)
	vertical = !vertical;
	if (vertical){
	    alignment="cols";
	}
	else{
	    alignment="rows";
	}
	$("frameset").attr(alignment,"50%,50%")
    }

    $("frame").dblclick(function() {
	$("frameset").attr(alignment,"80%,20%")
    });
    $("*").keydown(function(e) {
//	console.log("fsdfsd" + e.which);
	if(e.which == 65){
	    focusDoc();
	}
	if(e.which == 70){
	    focusSrc();
	}
	if(e.which == 83){
	    focusBoth();
	}
	if(e.which == 68){
	    switchAlignment();
	}
    });
    $("a dt").hover(function() {
	alert("lol")
    });
});

