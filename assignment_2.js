// CHALLENGE:
//Create a function that takes two rectangles as parameters and returns true if the rectangles intersect, false otherwise. Assume that the (0,0) of the axis is the top left. (This is actually how iOS positions views in the screen). So a rectangle with origin (0,0), width 10 and height 20 would be on the top left corner taking 10 pixels to the right and 20 pixels down.

// Use Rectangle Definition:
// rect1 = { x: 20, y: 30, width: 40, height: 11 }


// PSEUDOCODE:
// Input - Parameters of two rectangles
// Output - Boolean

// Steps
//    - Take two rectangle Objects
//    - pinpoint if coordinates and w/l of square intersect
//    - if rectangles intersect, return true
//    - else, return false

var rectUno = {x: 0,
               y: 0,
               width: 10,
               height: 10};

var rectDos = {x: 2,
               y: 4,
               width: 5,
               height: 18};

var rectTres = {x: 0, y: 0, width: 5, height: 10};
var rectCuatro = {x: 20, y: 20, width: 5, height: 10};

var rectIntersect = function rectIntersect(rect1, rect2) {
  // range of the rectangle starts from x,y and ends at x+w, y+h
     // var startCorner1 = [rect1.x, rect1.y];
     // console.log(startCorner1);
     // var endCorner1 = [(rect1.x + rect1.width),(rect1.y + rect1.height) ]
     // console.log(endCorner1);

     // var startCorner2 = [rect2.x, rect2.y];
     // console.log(startCorner2);
     // var endCorner2 = [(rect1.x + rect2.width),(rect2.y + rect2.height) ]
     // console.log(endCorner2);
     console.log("rectangle 1: StartX - " + rect1.x + "  StartY -  " + rect1.y + "  EndX - " + (rect1.x + rect1.width) + "  EndY - " + (rect1.y + rect1.height) );
     console.log("rectangle 2: StartX - " + rect2.x + "  StartY -  " + rect2.y + "  EndX - " + (rect2.x + rect2.width) + "  EndY - " + (rect2.y + rect2.height) );
  // could use ranges to compare(reduce?) coordinates to find intersections
  if (rect2.x > rect1.x && rect2.x < (rect1.x + rect1.width) ||
      rect2.y > rect1.y && rect2.y < (rect1.y + rect1.height) ||
      (rect2.x + rect2.width) > rect1.x && (rect2.x + rect2.width) < (rect1.x + rect1.width) ||
      (rect2.y + rect2.height) > rect1.y && (rect2.y + rect2.height) < (rect1.y + rect1.height)) {
    return true;
  } else {
    return false;
  };

};

/* visual for reference...
(startX,startY)   x    (endX(xCoord+width), startY)
              ---------
              |       |
          y   |       |
              |       |
              ---------
(startX,endY(yCoord+Height)) (endX,endY)

is
 - the rect2's startX between rect1's startX and endX?
  if (rect2.x > rect1.x && rect2.x < (rect1.x + rect1.width)) ||
 - the rect2's startY between rect1's startY and endY?
      rect2.y > rect1.y && rect2.y < (rect1.y + rect1.height) ||
 - the rect2's endX between rect1's startX and endX?
      (rect2.x + rect2.width) > rect1.x && (rect2.x + rect2.width) < (rect1.x + rect1.width) ||
 - the rect2's endY between rect1's startY and endY?
      (rect2.y + rect2.height) > rect1.y && (rect2.y + rect2.height) < (rect1.y + rect1.height) {
    return true;
      }
*/
