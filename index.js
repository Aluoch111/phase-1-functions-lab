// Code your solution in this file
function distanceFromHqInBlocks(n){
    if (n < 42){
        return 42 - n ;
    }
    let result = n - 42;
    return result ;
}
function distanceFromHqInFeet(n){
    if (n < 42){
        let result = (42 - n) * 264 ;
        return result; 
    }
    let result = (n - 42) * 264 ;
    return result ;
}
function distanceTravelledInFeet(n,n2){
    if (n > n2){
        let result = (n - n2) * 264 ;
        return result ;
    }
   let result = (n2 - n) * 264;
   return result ;
}
function calculatesFarePrice(n,n2){
    let charges;
    if (distanceTravelledInFeet(n, n2) < 400) {
      return 0;
    } else if (
      distanceTravelledInFeet(n, n2) >= 400 &&
      distanceTravelledInFeet(n, n2) <= 2000
    ) {
      charges = (distanceTravelledInFeet(n,n2) - 400) * 0.02;
    } else if (
      distanceTravelledInFeet(n, n2) > 2000 &&
      distanceTravelledInFeet(n, n2) <= 2500
    ) {
      charges = 25;
    } else {
      return "cannot travel that far";
    }
    return charges;
}
