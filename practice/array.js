const alpArr = ['c','d'];
alpArr.push('e','f'); //add at the end
console.log(alpArr);

alpArr.unshift('a','b');
console.log(alpArr); // add at index0

alpArr.splice(2,0,'hi'); //add at index2 (middle) 2=at index2 0=no remove hi=new element
console.log(alpArr);

alpArr.splice(3,3,'there'); //3=add at index3  3=replace index3(old)
console.log(alpArr);

alpArr.splice(1,1,' ');
console.log(alpArr);

alpArr.pop(); // // remove last index
console.log(alpArr);


// two array
const first = [1,2,3];
const second = [4,5,6];

const comb1 = first.concat(second);
console.log(comb1);

const comb2 = second.concat(first);
console.log(comb2);

const combES6 = [...first,...second];
console.log(combES6);

const SliceFront = combES6.slice(0,3) // take part from combES6 but original still remain
console.log(SliceFront); // new array part from combES6

const SliceRear = combES6.slice(3,6); // rear part of combES6 array
console.log(SliceRear);
console.log(combES6); //but original array still remain
