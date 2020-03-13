$(document).ready(function(){
	$(document).on("click", ".soluDiv > button", function(){
		let x = $(this).attr("id");
		$("#demo"+x).toggle();

		let result ="";
		switch(x){
			case "btn1":
				result = getArea(5, 8);
				break;
			case "btn2":
				let array = [1,2,3,4];
				result = getFirstElement(array);
				break;
			case "btn3":
				result = nextEdge(8, 10);
				break;
			case "btn4":
				result = isSameNum(3, 3);
				break;
			case "btn5":
				result = addUpTo(5);
		}
		$("#demo"+x).html(result);
	});

	function getArea(b, h){
		return b*h/2 ;
	}
	function getFirstElement(a){
		return a[0];
	}
	function nextEdge(a, b){
		return a+b-1 ;
	}
	function isSameNum(a, b){
		if (a==b){
			return true;
		}
		return false;	
	}
	function addUpTo(n) {
		let sum = 0;
		for(i=1; i<=n; i++){
			sum += i;
		}
		return sum;
	}
});