// var counter = 0;
// self.onmessage = function(message) {
// 	counter++;
// 	self.postMessage(counter);
// }

findPrime = function(n) {
	for(i=2;i<Math.sqrt(n);i+=1) {
		if(n % i == 0) {
			return false;
		}
	}
	return true;
}

self.onmessage = function(event) {
	// counter++;
	var num = parseInt(event.data.num);
	self.postMessage(findPrime(num));
}