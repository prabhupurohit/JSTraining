//worker.js

var sum = 0;

for(i =0; i< 100000000; i++) {
	sum += i;
}

postMessage(sum);