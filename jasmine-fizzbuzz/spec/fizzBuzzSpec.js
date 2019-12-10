//describe("My FizzBuzz Game", function() {
    
    /*
    //beforeEach
    beforeEach(() => {
    // new calc Obj (doesn't like let or var = calc)
    verifier = new fizzBuzz - don't need instance of fizzBuzz just a function
    }) */
    describe("Fizz Buzz Tests", function(){
        it("should exist", function(){
            expect(fizzBuzz).toBeDefined()
        })

        it("should fizzBuzz", function(){
            var verifier = fizzBuzz(15)
            expect(verifier).toBe("Fizz-Buzz!")
        })

        it("should fizz", function(){
            var verifier = fizzBuzz(81)
            expect(verifier).toBe("Fizz!")
        })

        it("should buzz", function(){
            var verifier = fizzBuzz(25)
            expect(verifier).toBe("Buzz!")
        })

        it("should pass number silenty", function(){
            var verifier = fizzBuzz(44)
            expect(verifier).toBe(44)
        })
    })
//})