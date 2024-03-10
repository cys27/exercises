#include <string>

std::string bmi(double w, double h) 
{
  double bmiVal = w/(h*h);
  if(bmiVal <= 18.5){
    return "Underweight";
  }
  else if(bmiVal > 18.5 && bmiVal <= 25.0){
    return "Normal";
  }
  else if(bmiVal > 25.0 && bmiVal <= 30.0){
    return "Overweight";
  }
  else{
    return "Obese";
  }
}