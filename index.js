function scuberGreetingForFeet(feet) {
  
  if (feet <= 400) {
    return "This one is on me!";
  }
  else if (feet == 2001) {
    return "I will gladly take your thirty bucks.";
  }
  else if (feet > 2500) {
    return ("No can do.");
  }
}

function ternaryCheckCity(checkCity) {
  return checkCity === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  if (tip === "generous")
    return "Thank you so much."
  else if (tip === "not as generous")
    return "Thank you."
  else return "Bye."
}


