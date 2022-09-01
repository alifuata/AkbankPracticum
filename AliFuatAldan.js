	//expected function
	function oddishOrEvenish(data){
		//convert input value to char array
		let numArray=Array.from(data.toString());
		let total=0;
		//sum all values in the array
		for(let indis in numArray){
			total+=parseInt(numArray[indis]);
		} 
		//check and return the result
		if(total%2==0) return "Even";
		else return "Odd";
	}
