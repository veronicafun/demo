var lineChartData = {
	//X坐标
	labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"],
	datasets : [
		{	
			//背景颜色
			fillColor : "rgba(255,255,255,0.25)",
			//画笔颜色
			strokeColor : "#dfc118f5",
			//点颜色
			pointColor : "white",
			//点边框颜色
			pointStrokeColor : "#dfc118f5",
			//触发点的颜色
			pointHighlightFill : "grey",
			//出发点边框的颜色
			pointHighlightStroke : "#dfc118f5",
			//Y轴坐标
			data : [70,75,76,58,72,81,55,75,12,18,6,1]
		},
	]

}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData, {
		responsive: true
	});
}