

$(document).ready(function(){
		arcAnimate();
});
var phi = 0;
var int = (Math.PI)/500;
var direction = false;
var ropeLength = 400;
var center = window.innerWidth/2;
function arcAnimate(){
	if(direction){
		if(phi>(Math.PI)){
			phi = 0;
			direction=false;
		}
		else{
			phi = phi+int;
		}
		phi = (phi>=(Math.PI))?0:(phi+int);
		var $m = center+ropeLength*Math.cos(phi);
		var $n = 250+ropeLength*Math.sin(phi);
		if(!direction){
			$m = center+ropeLength*-1;
			$n = 250+ropeLength*0;
		}
		$("#square").animate({
				marginLeft: $m + 'px',
				marginTop: $n + 'px'
			},5,arcAnimate);
	}
	else{
		if(phi<-(Math.PI)){
			phi = 0;
			direction=true;
		}
		else{
			phi = phi-int;
		}
		var $m = center-ropeLength*Math.cos(phi);
		var $n = 250-ropeLength*Math.sin(phi);
		if(direction){
			$m = center+ropeLength*1;
			$n = 250-ropeLength*0;
		}
		$("#square").animate({
			marginLeft: $m + 'px',
			marginTop: $n + 'px'
		},1,arcAnimate);
	}
};

