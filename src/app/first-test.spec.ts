describe('first test', () => {
    let sut; // 'system under test


    // runs a function before every test to clear the state
    // to make sure it's not polluted by previous tests for future tests
    beforeEach(() => {
        sut = {} 
    })

    // customary to put the word 'should' - it will show the string next to the 'fail' result
    // example <'user service getUser method should retrieve the correct user'>
    // that example is what would show when a nested describe and it function's strings are
    // appended together in the console. 
    it("should be true if true", () => {
        sut.a = false; // first a- Arrange - of AAA test structure. 

        // second 'a' is for act
        sut.a = true


        // third 'a', assert
        expect(sut.a).toBe(true); // toBe is a jasmine method called a 'matcher', theres a bunch of them
    
            // this trivial example creates a property on an object, sets it to the opposite boolean value, 
            // and then confirms that it actually did become that. 

            // So, we get an initial state (A1- arrange), change that state (A2- act), and then 
    })
})