describe("Calculator", function() {
    
    //beforeEach
    beforeEach(() => {
    // new calc Obj (doesn't like let or var = calc)
    calc = new Calculator
    })
    describe("Addition tests", function(){
        it("should return 42", function(){
   //         expect(addition(20,22)).toBe(42)
          //  calc.value = 0
            calc.add(20)
            calc.add(22)
            expect(calc.value).toBe(42)
        })
        it("should return 26", function(){
           // expect(addition(7,19)).toBe(26)
           // calc.value = 0
           calc.add(7)
           calc.add(19)
           expect(calc.value).toBe(26)
        })
        it("should return an error if we don't supply two numbers", function(){
            //expect(addition("Hitchhikers", "Guide")).toBe("Error!")
            spyOn(window, "alert")
            //addition("Hitchhikers", "Guide")
            calc.add("Hitchhikers")
            expect(window.alert).toHaveBeenCalledWith("Error!") // don't have to click ok (automated tests)
        })
    })
}) 