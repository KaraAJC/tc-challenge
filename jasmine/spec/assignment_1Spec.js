var hugeArray = Array.new
describe("sortBiggestDiff", function() {
  it("returns the biggest difference", function(){
    expect(sortBiggestDiff([1,9,3])).toEqual(8);
  });
  it("can handle negative numbers in an array", function(){
    expect(sortBiggestDiff([1,9,3,-4])).toEqual(13);
  });
  it("can handle an enormous array", function(){
    expect(sortBiggestDiff([1,9,3,-4])).toEqual(13);
  });
});

describe("mathBiggestDiff", function() {
  it("also returns the biggest difference", function(){
    expect(mathBiggestDiff([1,9,3])).toEqual(8);
  });
  it("can also handle negative numbers in an array", function(){
    expect(sortBiggestDiff([1,9,3,-4])).toEqual(13);
  });
});