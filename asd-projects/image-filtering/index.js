// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilterNoBackground(inverse);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
     console.log(image[r][c]);
     var pixel = image[r][c];
     var pixelArray = rgbStringToArray(pixel)
     // This is where I’ll modify the color values later
      filterFunction(pixelArray);
     var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel;
    }
    }
  }

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
   for (var r = 0; r < image.length; r++) {
    for (var c = 0; c < image[r].length; c++) {
      if (image[r][c] !== backgroundColor) {
         var pixel = image[r][c];
     var pixelArray = rgbStringToArray(pixel)
     // This is where I’ll modify the color values later
      filterFunction(pixelArray);
     var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(value) {
  if (value < 0) {
    return 0;
  }
  else if (value > 255) {
    return 255;
  }
  else {
    return value;
  }
}
console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125
// TODO 4: Create reddify filter function
function reddify(pixelArray) {
   pixelArray[RED] = 200;
}
var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]
// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 50);
}
function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN] + pixelArray[BLUE]);
}
// CHALLENGE code goes below here
function silhouette(pixelArray) {
  pixelArray[RED] = 0;
  pixelArray[BLUE] = 0;
  pixelArray[GREEN] = 0;
}
function grayscale(pixelArray) {
  var avg = (pixelArray[RED] + pixelArray[GREEN] + pixelArray[BLUE]) / 3;
  pixelArray[RED] = avg;
  pixelArray[GREEN] = avg;
  pixelArray[BLUE] = avg;
}
function inverse(pixelArray) {
  pixelArray[RED] = 255 - pixelArray[RED];
  pixelArray[BLUE] = 255 - pixelArray[BLUE];
  pixelArray[GREEN] = 255 - pixelArray[GREEN];
}