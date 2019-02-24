
/*
var box = 100;
++box;   //前置递增，box = box + 1
alert(box);

var box = 100;
--box;   //前置递减，box = box - 1
alert(box);

var box = 100;
box++; //后置递增，box = box + 1
alert(box);

var box = 100;
box--;   //后置递减，box = box - 1
alert(box);

var box = 100;
var age = ++box;   //先box累加到101，然后赋值给age
alert(age);

var box = 100;
var age = box++;   //先box赋值给age100，然后在box累加101
alert(age);
alert(box);

var box = '89';
box++;           //++如果对数值字符串，有个隐形的转型功能 90
alert(box);

var box = 'ab';
box++;           //NaN
alert(box);

var box = false;
box++;           //1
alert(box);

var box = 100;
+box;          //正数，负数 +box正数，-box就是负数
alert(box);

var box = '89'
alert(typeof +box); //+号，有个自动转型的功能 89

var box = 100 +'100';  //这是时候的加号就是字符串连接符，而不是加法运算符，只要其中有一个是字符串，那么就自动使用字符串连接符 100100
alert(box)

var box = '你的年龄是：' + 10 + 20;  //字符串连接操作：你的年龄是:1020
alert(box);
var box = 10 + 20 +'你的年龄是：' ;  //30你的年龄是:
alert(box);
var box = '你的年龄是：'+ (10 + 20) ;  //括号强制优先级
alert(box);

var box = 10 + {} ;  //10+{} 10[obeject Obeject]类型是string，字符串
alert(box);

var box = 10 + {
    toString:function () {  //如果对象toString返回的是数值，那么就按数值来30
        return 20
    }
    };
alert(typeof box);

var box = 100 - true;
alert(box);  //99
var box = 100 - '';
alert(box);  //100
var box = 100 - 'lee';
alert(box); //NaN
*/

