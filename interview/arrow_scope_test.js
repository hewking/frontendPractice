var a = "w";
let obj = {
  a: "o",
  print: function () {
    console.log(this.a);
  },
  print2: () => {
    console.log(this.a);
  },
};
let p = obj.print;
let p2 = obj.print2;
obj.print();
obj.print2();
p();
p2();

// print o,w,w,w

// ES6 
const obj2 = { 
    getArrow() { 
      return () => { 
        console.log(this === obj2); 
      }; 
    } 
  };
  
obj2.getArrow()(); // print false

// ES5，由 Babel 转译
var obj3 = { 
    getArrow: function getArrow() { 
      var _this = this; 
      return function () { 
         console.log(_this === obj3); 
      }; 
    } 
 };

 obj3.getArrow()(); // print false
  
