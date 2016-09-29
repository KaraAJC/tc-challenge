
describe("sortBiggestDiff", function() {
  it("returns the biggest difference", function(){
    expect(sortBiggestDiff([1,9,3])).toEqual(8);
  });
  it("can handle negative numbers in an array", function(){
    expect(sortBiggestDiff([1,9,3,-4])).toEqual(13);
  });
  it("can handle a really random array", function(){
    expect(sortBiggestDiff([3, 2, 1, 5, 3, 7, 4, 7, 9, 5, -2, 0, -23, 44334, 3])).toEqual(44357);
  });
    it("can handle a mixed type array", function(){
    expect(sortBiggestDiff([7,4,3.5, 6.8, "5", "0"])).toEqual(7);
  });
});

describe("mathBiggestDiff", function() {
  it("also returns the biggest difference", function(){
    expect(mathBiggestDiff([1,9,3])).toEqual(8);
  });
  it("can also handle negative numbers in an array", function(){
    expect(mathBiggestDiff([1,9,3,-4])).toEqual(13);
  });
  it("can also handle a really random array", function(){
    expect(mathBiggestDiff([3, 2, 1, 5, 3, 7, 4, 7, 9, 5, -2, 0, -23, 44334, 3])).toEqual(44357);
  });
  it("can also handle a mixed type array", function(){
    expect(mathBiggestDiff([7,4,3.5, 6.8, "5", "0"])).toEqual(7);
  });
});