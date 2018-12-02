var fs = require('fs');
var path = process.argv.slice(2)[0];
const testFolder = args[0] + '/';

fs.watch(path, function (event, filename) {
    console.log(filename + ' event: ' + event);
		fs.readFile(testFolder + filename, 'utf-8', (err, data) => {
				if (err) {
				  return console.log(err);
				} else {
				  console.log(data);
				}
		});
});