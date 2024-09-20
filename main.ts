//enum or arry milty jolty hy par dono main fark ye hy k
//enum const k liy use hota jis ki value kabi nhi badalti jsese
// january feb march jab k arry main bhot data hota jsese id user
//enum is ki counting 0 sy start hoti hy ye in ki value hoti hy jese monday ki 0
//hamin is ki value change krna chy to monday=1 koi bhi value assgine kr dete 
//par krni nhi chyy
enum days{monday,
    tuesday,
    wesnesday=3,
    thirsday,
    friday,
    saturday
}
console.log(days.thirsday);//1 tareaka answer 4
console.log(days["saturday"]);//2 tareka answer 6
console.log(days[3]);// number likha to name ayg wednesday

enum colour{red,green,yellow};
let colourName:colour=colour.red;
console.log(colourName);

enum colour1{pink=3,white,purpal,brown};
let nam:string=colour1[4];
console.log(nam);

// const enum
const enum