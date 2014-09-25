$(document).on('ready', function() {
// #1
	// var firstReverse = function(x) {
	// 	var array = x.split('');
	// 	console.log(array);
	// 	var reversed = [];
	// 	for (var i = array.length - 1; i >= 0; i--){
	// 		var last = array.pop();
	// 		reversed.push(last);
	// 	}
	// 	var combined = reversed.toString();
	// 	return combined;
	// };
  
	// console.log(firstReverse('bananas'));

// #2

	// var wordChange = function(x){
	// 	letter = x[0].toLowerCase();
	// 		var splitUp = x.split('');
	// 		splitUp.shift();
	// 		var joined = splitUp.toString();
	// 		joined = joined.replace(/,/g,'');
	// 		var upperCased = joined.toUpperCase();
	// 	return letter + upperCased;
	// }
	// var combineItAll = function(string){
	// 	var words = string.split(' ');
	// 	var sentance = words.map(wordChange);
	// 	var finalSentance = sentance.join(' ');
	// 	return finalSentance;
	// };

	// var string = 'hello world you are beautiful';
	// var convertedString = combineItAll(string);
	// console.log('convertedString: ', convertedString);

// #3

	var string = "wahoo is the greatest wawawa day ever in colorado!";

	var lettersLowered = function(word){
			for (var i = 0; i < word.length; i++) {
				word[i] = word[i].toLowerCase();
				}
				return word;
			};

	var findRepeats = function(word) {
		word = word.split('');
		var loweredLetters = lettersLowered(word);
		loweredLetters = loweredLetters.sort();
		var letters = [];
		for (var i = 0; i < loweredLetters.length; i++) {
			if ( loweredLetters[i] === loweredLetters[i - 1] || loweredLetters[i] === loweredLetters[i + 1] ){
				letters.push(loweredLetters[i]);
			}
		}	
		return letters;
	};

   	var createObject = function(x){
   		var repeatedObject = {};
   		var num = 0;
   		for (var i = 0; i < x.length; i++){
   			if (x[i] === x[i + 1]){
   				num++;
   			} else if (x[i] !== x[i + 1]){
   				num++;
   				repeatedObject[x[i]] = num;
   				num = 0;
   			}
   		}
   		return repeatedObject;
   	};

   	var objectSeaching = function(x) {
			var winner = {};
			var highValue = 0;
			var indexOfKing = 0;
			var amount = 0;
			for (var i = 0; i < x.length; i++){
				var obj = x[i];
				for (var key in obj) {
					if ( obj[key] > amount ) {
						highValue = key;
						amount = obj[key];
						indexOfKing = i;
					}
				}
			};
			winner['Index'] = indexOfKing;
			winner['Letter'] = highValue;
			winner['Repititions'] = amount;
			return winner;
		};
   	
	var letterCount = function(y){
		var stringSplit = y.split(' ');
		var repeatedLetters = stringSplit.map(findRepeats);
		wordObject = repeatedLetters.map(createObject);
		var theWinner = objectSeaching(wordObject);
		console.log(theWinner);
		 return stringSplit[theWinner.Index];	
	}

		var repititionKing = letterCount(string);
		console.log(repititionKing);
		
		


		
});