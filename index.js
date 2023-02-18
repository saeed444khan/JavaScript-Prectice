/* Arrays ko likhne k do tarike hote hai*/
/*Arrays ka pehla tariqa ARRAYS LITERAL kehlata hy*/
/* var food = ["Pizza ";"Burger";"Snacks"];*/
/*arrays ka dosra tariqa NEW ARRAYS kelata hy*/
/*var foods = new Arrays("Pizza";"Burger";"Snzcks");*/
/*var foods = ["biryani","burger","pizza"];
console.log(foods[1]);*/

/*DATE java language maloom karne k tariqa*/
/*var a = new Date();
console.log(a)*/

/*TOFIXED ka fuction number value desimal value ko fixe karne k liye istemal karte hain*/
/*var average = (15 + 23 + 39) /3;
console.log(average);
var avg = average.toFixed(2);
console.log(avg)*/

/*PRIME NUMBER maloom karne ka tariqa */
/*var num = parseInt(prompt("Please enter your number"))
var isprime = true;
for ( var i=2;i<num;i++){
      var result=num % i;
      if (result == 0){
        console.log("this is not a prime number = " +num+ " I " +i)
        isprime = false;
        break;
      }
      /*else{
        console.log("This is prime munber" +num+ " I = " +i);
      }
}
 if (isprime == true){
    console.log("Number is Prime " +num);
 }*/

/* LOOP BREAK me jaha taq ap ko value chaie os taq loop chalay os k baad break kar dein*/
/*for (var a = 0 ; a  < 10; a++){

    if (a == 5){
        break;
    }
    console.log("A ="+a)
}*/
/*CONTINUE ka fuction list me se jo value continue me di ho gi wo khattam ho jaye gi*/
/*for (var a = 0 ; a  < 10; a++){
    
    if (a == 5){
        continue;
    }
    console.log("A ="+a)
}*/
/* FOR LOOP prectice */
/*for (var i = 0;i < 5; i++){
    console.log(i)
}
for (var a = 10; a > 0 ;a--){
    console.log(a)
}*/
/*FOR LOOP tabel PRECTICE  */
/*var num = parseInt(prompt("Please enter tour number"))
for (var i = 1; i <=10; i++){
    console.log(num+ " x"+i+ "=" +(num*i))
}*/

/* rRANDOM NUMBER PRECTICE*/
/*var a = Math.random();
console.log(a);

var num1 = a * 6;
console.log(num1);

var num2 = num1 + 1;
console.log(num2);*/
/* MATH.FLOOR*/
/*var num3 = Math.floor(num2);
console.log(num3)*/
/* IF ka fuction me ager value true ho gi to value return kare ga varna value show nahi are ga*/
/*ELSE ka fuction me ager value false bhi ho to bhi value return kare ga*/

/*var age = 50
if (age > 60) {
    console.log("if age is "+age)
} else {
    console.log("if age is "+age)
}*/

/* Else if */
/*var score = prompt("what is your score");
score = parseInt(score);
if (score > 80){
    console.log("grade A");
}
else if  (score >70){
    console.log("grade B");
}
else if (score > 60){
    console.log("grade C")
}
else {
    console.log("Failed");
}*/

/*var a1 = '' && false;
console.log(a1)*/

/*NESTED IF if ki body my ek if hy jis ap kuch bhi comperision kar sakte ho*/
/*var score = 82;

if (score >80){
    console.log('Grade A')
    if (score >90){
        console.log("Reward $100")
    }
    else if (score > 85){
        console.log("Reward $50")
        
    }
    else {
        console.log("Reward $20")
    }
    }*/




/*and opretor &&*/
/*  && end  k fuction me ager sari value ture ho gi to true return kre ga ek bhi false mile gi to false return kare ga */
/*var a =6;
var b = 5;

var c = a > b && b < 10 && b == 5;
console.log(c);*/

/* || pipe k fuction me value m kahi value true ho to true return kere ga*/
/*var a = 5;
var b = 6;
var c = a > 4 || b < 5;
console.log(c);*/

/* ! not ka fuction value ager true ho gi to os ko false kar k batay ga*/
/*var a = 50;
var b = ! (a > 40);
console.log(b);
var a = 60;
var b = a <100;
var c = !b;
var d = !(a < 100);
console.log("A ="+a);
console.log("B =" +b);
console.log("C ="+c);
console.log("D ="+d);*/

/* !! doubel NOT ka fuction  ka kam ye hy k ! NOT ka fuction true value ko false return kre to !! NOT ka fuction dobara true return kare ga*/
/*var a = 6;
var b = !a;
var c = !!a;
console.log("a ="+a);
console.log("b ="+b);
console.log("c ="+c);

var score = 60;
var a =  score > 50 && score < 50 && score == 66;
console.log(a);*/

/*comperison opretor prectice*/
/*var a = 5;
var b = 6;
console.log(a==b);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

var a = 5;
var b = "5";
console.log(a==b);
console.log(a===b);*/

/*parseint  parsefloat or number prectice*/
/*var a = 5;
var b = "6";
var c = a + parseInt(b);
console.log(c);

var a = 5;
var b = "6.6"
var c = a + parseFloat(b);
console.log(c);

var a = 5;
var b = prompt("what is your  age");
var c = a + parseInt(b);
console.log(c);

var a = 5;
var b =prompt("what is your age");
var c = Number (b);
var d = a + c;
console.log(d);*/

/*promt fuction prectice*/
/*var name = prompt ("what is your name?");
console.log(name);*/





/* undefined value prectice*/

/*var a;
console.log(a);
a = "hello world";
console.log(a);
a = undefined;
console.log(a);*/

/* null value prectice*/

/*var car = null;
console.log(car);*/

/*value ki type maloom kerne ka fuction*/

/*var age = 66;
var name ="kashif";
var isfeepaid = true;
console.log(typeof age);
console.log(typeof name);
console.log(typeof isfeepaid);*/



/*console.log("saeed khan");
console.log(55);
console.log(19);
console.log("aqsa saeed");
console.log(1995);*/


