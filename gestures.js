downX = 0;
downY = 0;
upX = 0;
upY = 0;


$("#gestureArea").mousedown(function(event) {
	downX = event.pageX;
	downY = event.pageY;

	$("#gestureResult").text("mouse down");
});
$("#gestureArea").mouseup(function(event) {
	upX = event.pageX;
	upY = event.pageY;
	if(upX < downX)
		$("#gestureResult").text("swipe left");
	else if(upX > downX)
		$("#gestureResult").text("swipe right");
	else if(upX == downX)
		$("#gestureResult").text("mouse up");
});
