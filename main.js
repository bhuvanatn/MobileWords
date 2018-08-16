const mobileList = {
  List: {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"]
  },

  shortList: [],
  getValues: function(elements) {
    words = "";
    this.shortList.length = 0;
    i = 0;
    for (i = 0; i < elements.length; i++) {
      for (j = i + 1; j < elements.length; j++) {
        arr1 = this.List[elements[i]];
        arr2 = this.List[elements[j]];
        arr1.forEach(function(ele) {
          arr2.forEach(function(ele1) {
            words += ele + ele1 + ",";
          });
        });
      }
      this.shortList.push(words.slice(0, -1));
      return this.shortList;
    }
  }
};
console.log("hello:", mobileList.getValues([2, 3, 7, 8, 5, 6]));
console.log("hello:", mobileList.getValues([4, 5]));
console.log("hello:", mobileList.getValues([6, 7]));
console.log("hello:", mobileList.getValues([9, 7]));

