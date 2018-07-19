function sum(){
  let nums = Array.from(arguments);
  return nums.reduce(( a, b ) => a+b, 0 );
}


function sum(...nums){
  return nums.reduce(( a, b ) => a+b, 0 );
}


Function.prototype.myBind = function(context,...bindArgs){
  return (...callArgs) => {
    this.apply(context,bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true


function curriedSum(numArgs){
  let nums= [];

  function _curriedSum(num){
    nums.push(num);
    if (nums.length === numArgs) {
    return nums.reduce((a,b) => a+b , 0);
  }else{
    return _curriedSum;
  }
  }

  
  return _curriedSum;
}

Function.prototype.curry = function(numArgs){
  let args = [];
  const that = this;
  function _curry(arg){
    args.push(arg);
    if (args.length === numArgs) {
    return that.apply(that,args);
  }else{
    return _curry;
  }
  }
  return _curry;
};
