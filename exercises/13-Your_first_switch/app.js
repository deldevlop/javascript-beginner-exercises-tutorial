function getColor(selection) {
	//const selection = 'red';
	switch (selection) {
		case 'red':
			return true;
			break;
		case 'green':
			return true;
			break;
		case 'blue':
			return true;
			break;
		// Add more options here
		default:
			return false;  //returns false because the user picked an unavailable color
		// break;               
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if (isAvailable) {
	console.log('Good news! That color ' +colorname+ ' is available');
}

else {
	console.log('We are sorry, that color ' +colorname+ ' is not available');
}

