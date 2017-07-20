function howManyPhones(){
	var taxRate = 0.08;
	var phonePrice = 500;
	var accPrice = 20;

	var threshold = prompt('How much do you want to spend on your phone?');

	function getTotal(){
		var total = (phonePrice * numberOfPhones+ accPrice * numberOfAcc)*(1+taxRate);
		console.log('Your final total is $' + total.toFixed(2));
	}

	function getPhone(){
		for(i=0; ; i++){
			if(i*phonePrice*(1+taxRate) >= threshold - (phonePrice*(1+taxRate)) ){
				numberOfPhones = i;
				console.log('You can buy ' + numberOfPhones + ' phones with $' + threshold + '.');
				break;
			}
		}
	}

	function getAcc(){
		for (i=0; ; i++){
			if((numberOfPhones* phonePrice + i * accPrice) *(1+taxRate) > threshold-accPrice){
				numberOfAcc = i;
				console.log('You can also buy ' + numberOfAcc + ' accessories on top of that!');
				break;
			}
		}
	}
	getPhone();
	getAcc();
	getTotal();
}