describe("findAndReplace", function(){
	it("Takes a one word input and finds and replaces the word", function(){
		expect(findAndReplace("happy", "Happy", "pappy")).to.equal("pappy")
	});
});