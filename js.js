$(document).ready(function() {
    alert("shortkeys: a -> focus commentary s -> toggle horizontal/vertical layout d -> show both f -> show source")
    var vertical = true;
    var alignment = "cols";

    $("frame").dblclick(function() {
	$("frameset").attr(alignment,"80%,20%")
    });
    $("*").keydown(function(e) {
	console.log("fsdfsd" + e.which);
	if(e.which == 65){
	    $("frameset").attr(alignment,"100%,0%")
	}
	if(e.which == 70){
	    $("frameset").attr(alignment,"0%,100%")
	}
	if(e.which == 83){
	    $("frameset").attr(alignment,"50%,50%")
	}
	if(e.which == 68){
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
    });
    $("a dt").hover(function() {
	alert("lol")
    });
});

