let carSpeed = prompt("Enter car speed (in km/h):");

function speedDetector(carSpeed) {
  const speedLimit = 70;
  const aboveLimit = 5;

  if (carSpeed <= speedLimit) {
    console.log("Ok");
  } else {
    const yourPoints = (carSpeed - speedLimit) / aboveLimit;
    const Points = parseInt(yourPoints);
    
    if (intPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("You have " + Points + " demerit points");
    }
  }
}


speedDetector(carSpeed);
