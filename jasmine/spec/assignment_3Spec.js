describe("decryptAssignment3", function() {
  it("can decrypt a 4 letter word", function(){
    expect(decryptAssignment3(13782180)).toEqual("test");
  });
  it("can decrypt a 7 letter word", function(){
    expect(decryptAssignment3(698108770685)).toEqual("testing");
  });
  it("can decrypt the given string example", function(){
    expect(decryptAssignment3(680131662011)).toEqual("leepdag");
  });
  it("can handle the magic word!", function(){
    expect(decryptAssignment3(667734139064)).toEqual("correct");
  });
  it("can decrypt a really long word", function(){
    var reallyLongWord = assignment3("gilmoregirls");
    expect(decryptAssignment3(reallyLongWord)).toEqual("gilmoregirls");
    pending("TODO determine limits of decrypt function, see explanation");
  });
  // this test failed, which made me very curious about the limits of my function and how I'd be able to refactor to compensate.
});
