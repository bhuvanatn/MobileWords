const mobileList = {
    List: {
      2: ["A", "B", "C"],
      3: ["D", "E", "F"],
      4 :[ "G" ,"H", "I"],
      5: ["J", "K", "L"],
      6: ["M", "N", "O"],
      7: ["P", "Q", "R", "S"],
      8: ["T", "U", "V"],
      9: ["W", "X", "Y", "Z"]
  
    },
    shortList: [],
  
    getValues: function(k1, k2) {
      words = ""; 
      this.shortList.length = 0;
      arr1 = this.List[k1];
      arr2 = this.List[k2];
      arr1.forEach(function(ele1) {
        arr2.forEach(function(ele2) {
          words += ele1 + ele2 + ",";
        });
      });
      this.shortList.push(words.slice(0, -1));
      return this.shortList;
    }
  };
  console.log("hello:", mobileList.getValues(2, 3));
  console.log("hello:", mobileList.getValues(4, 5));
  console.log("hello:", mobileList.getValues(6, 7));
  console.log("hello:", mobileList.getValues(9, 7));