var findAndReplace = function(phrase, word, replace){
	var reg = new RegExp(word, "gi");
	var new_phrase = phrase.replace(reg, replace);
	return new_phrase;	
}

$(document).ready(function(){
	$("form#find_and_replace").submit(function(event){
		var phrase = ($("input#phrase").val());
		var word_to_find = ($("input#word_to_find").val());
		var replacement = ($("input#replacement").val());
		var result = findAndReplace(phrase, word_to_find, replacement);
		
		$(".new_phrase").text(result);
		$("#result").show();
		
		event.preventDefault();
	});
});