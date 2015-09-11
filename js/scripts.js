var findAndReplace = function(phrase, word, replace){
	//var lowercase_phrase = phrase.toLowerCase();
	//var lower_word = word.toLowerCase();
	//var lower_replace = replace.toLowerCase();
	var reg = new RegExp(word, "gi");
//  find the letters of word and replace
	var new_phrase = phrase.replace(reg, replace);
	//var new_phrase = lowercase_phrase.replace(reg, lower_replace);
	return new_phrase;	
}




// str = str.replace(/\b([bcdfghjklmnpqrstvwxy]*qu)([a-z]*)\b/gi, "$2$1ay");