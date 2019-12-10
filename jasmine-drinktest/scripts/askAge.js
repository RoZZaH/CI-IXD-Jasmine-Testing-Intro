Verify = function(){
    this.response = ""
}

Verify.prototype.whatCanIDrink = function(age){
  if(typeof(age) == "number" && age > 0){
      switch(true) { // check age against this value
        case (age < 0):
            this.response = "Sorry. I can’t tell what drink because that age is incorrect!"
            break;
        case (age < 14):
            this.response = "Drink Toddy"
            break
        case (age < 18 && age >= 14):
            this.response = "Drink Coke"
            break
        case (age < 21 && age >= 18): 
            this.response = "Drink Beer"
            break
        case (age < 130):
            this.response = "Drink Whisky"
            break
        default: 
            this.response = "Sorry. I can’t tell what drink because that age is incorrect!"
        }
    }else{
        this.response = "Sorry. I can’t tell what drink because that age is incorrect!" 
    }
}