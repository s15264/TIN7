/*
Acces the server using: http://localhost:8080/mul?variable1=7&variable2=21
Operations: (add, sub, mul, div) 
*/
var http = require('http');
var url = require('url');


var server = http.createServer((request, res) => {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var num1 = parseInt(query.variable1);
  var num2 = parseInt(query.variable2);
  
    var address = request.url;
	
	 if (address.includes('add')) {
	 operator(address, num1, num2, res);
}
	else if (address.includes('sub')) {
	 operator(address, num1, num2, res);
}
	else if (address.includes('mul')) {
	operator(address, num1, num2, res);
}
	else if (address.includes('div')) {
	 operator(address, num1, num2, res);
}
	
 
	else {
			res.end("Invalid operators");
	  }
	
  


 
});


function check (el1, el2) {
  if(isNaN(el1) || isNaN(el2)) {
    return false;
  } else {
    return true;
  }
}

function operator(sign, var1, var2, result) {	
	if(check(var1, var2) === true) {
	  if (sign.includes("add")) {
		 result.write(var1 + var2 + '');
		 result.end();
	  }
	  if (sign.includes("sub")) {
		 result.write(var1 - var2 + '');
		 result.end();
	  } 
	  if (sign.includes("mul")) {
		 result.write(var1 * var2 + '');
		 result.end();
	  }
	  if (sign.includes("div")) {
		 result.write(var1 / var2 + '');
		 result.end();
	  }
	}
		else {
			result.end("Invalid parameters");
	  }
	  
}


server.listen(8080);

console.log("Server is running");