this.food = "salad"
//const food = "salad"

const meal = {
  food: "hamburger",
  regularFunction: function () {
    console.log(this.food)
  },
  arrowFunction: () => {
    console.log(this.food)
  }
}

//with this.food at the start of the program the result would be:
meal.arrowFunction() //Salad
meal.regularFunction() //Hamburger

/* //with const food  at the start of the program the result would be:
meal.arrowFunction() //undefined
meal.regularFunction() //Hamburger */