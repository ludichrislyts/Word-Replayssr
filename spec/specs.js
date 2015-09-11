describe("findAndReplace", function(){
	it("Takes a one word input and finds and replaces the word", function(){
		expect(findAndReplace("happy", "Happy", "pappy")).to.equal("pappy")
	});
	
	it("Takes a two word input and finds and replaces one word", function(){
		expect(findAndReplace("Happy pappy", "happy", "pappy")).to.equal("pappy pappy")
	});
	
	it("Takes a multiple word input with duplicate words and finds and replaces the duplicate word", function(){
		expect(findAndReplace("happy happy pappy", "Happy", "pappy")).to.equal("pappy pappy pappy")
	});

	it("Takes a multiple phrase and finds and replaces the duplicate words, case insensitive", function(){
		expect(findAndReplace("Super happy Slap Happy Pappy loves the happy flappy clappy clowns", "Happy", "pappy")).to.equal("Super pappy Slap pappy Pappy loves the pappy flappy clappy clowns")
	});	
	
	it("Takes a multiple phrase with symbols and still finds and replaces the duplicate words, case insensitive", function(){
		expect(findAndReplace("\"Super-happy\" Slap Happy Pappy loves the happy, flappy clappy clowns", "Happy", "pappy")).to.equal
							 ("\"Super-pappy\" Slap pappy Pappy loves the pappy, flappy clappy clowns")
	});

});