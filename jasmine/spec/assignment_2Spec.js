describe("rectIntersect", function() {
    var rectUno = {x: 0, y: 0, width: 5, height: 10};
    var rectDos = {x: 2, y: 2, width: 5, height: 10};
    var rectTres = {x: 0, y: 0, width: 5, height: 10};
    var rectCuatro = {x: 18, y: 18, width: 5, height: 10};

  it("returns true if two rectangle intersects", function(){
    expect(rectIntersect(rectUno, rectDos)).toBeTruthy;
  });

  it("returns false if two rectangles don't intersect ", function(){
    expect(rectIntersect(rectTres, rectCuatro)).toBeFalsy;
  });
});
