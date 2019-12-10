describe("Verify", function() {
    
    //beforeEach
    beforeEach(() => {
    // new calc Obj (doesn't like let or var = calc)
    verifier = new Verify
    })
    describe("Age Check", function(){
        it("should exist", function(){
            expect(verifier.whatCanIDrink).toBeDefined()
        })

        it("should return a message if given 0", function(){
            verifier.whatCanIDrink(0)
            expect(verifier.response).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        })

        it("should return a message if user less than 14", function(){
            verifier.whatCanIDrink(13)
            expect(verifier.response).toBe("Drink Toddy")
        })

        it("should return a message if user less than 18", function(){
            verifier.whatCanIDrink(17)
            expect(verifier.response).toBe("Drink Coke")
        })

        it("should return a message if user is 18", function(){
            verifier.whatCanIDrink(18)
            expect(verifier.response).toBe("Drink Beer")
        })

        it("should return a message if user is 20", function(){
            verifier.whatCanIDrink(20)
            expect(verifier.response).toBe("Drink Beer")
        })

        it("should return a message if user is 30", function(){
            verifier.whatCanIDrink(30)
            expect(verifier.response).toBe("Drink Whisky")
        })

        it("should return a message if you user is incredibly old", function(){
            verifier.whatCanIDrink(140)
            expect(verifier.response).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        })

        it("should return a message with 'Drink' in it", function(){
            verifier.whatCanIDrink(10)
            //expect(verifier.response.indexOf("Drink")).toEqual(0); // be first word of str/repsonse
            expect(verifier.response.indexOf("Drink")).not.toEqual(-1) // "drink"  appears -1 if never appears
        })
    })
})