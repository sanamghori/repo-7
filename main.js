//enum or arry milty jolty hy par dono main fark ye hy k
//enum const k liy use hota jis ki value kabi nhi badalti jsese
// january feb march jab k arry main bhot data hota jsese id user
//enum is ki counting 0 sy start hoti hy ye in ki value hoti hy jese monday ki 0
//hamin is ki value change krna chy to monday=1 koi bhi value assgine kr dete 
//par krni nhi chyy
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 1] = "tuesday";
    days[days["wesnesday"] = 3] = "wesnesday";
    days[days["thirsday"] = 4] = "thirsday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
})(days || (days = {}));
console.log(days.thirsday); //1 tareaka answer 4
console.log(days["saturday"]); //2 tareka answer 6
console.log(days[3]); // number likha to name ayg wednesday
var colour;
(function (colour) {
    colour[colour["red"] = 0] = "red";
    colour[colour["green"] = 1] = "green";
    colour[colour["yellow"] = 2] = "yellow";
})(colour || (colour = {}));
;
var colourName = colour.red;
console.log(colourName);
var colour1;
(function (colour1) {
    colour1[colour1["pink"] = 3] = "pink";
    colour1[colour1["white"] = 4] = "white";
    colour1[colour1["purpal"] = 5] = "purpal";
    colour1[colour1["brown"] = 6] = "brown";
})(colour1 || (colour1 = {}));
;
var nam = colour1[4];
console.log(nam);
