
describe("decryptAssignment3", function() {
  it("can decrypt a 4 letter word", function(){
    expect(decryptAssignment3(13782180)).toEqual("test");
  });
  it("can decrypt a 7 letter word", function(){
    expect(decryptAssignment3(698108770685)).toEqual("testing");
  });
  it("can handle the magic word!", function(){
    expect(decryptAssignment3(667734139064)).toEqual("correct");
  });
    it("can handle a mixed type array", function(){
    expect(decryptAssignment3(680131662011)).toEqual("leepdag");
  });
});
