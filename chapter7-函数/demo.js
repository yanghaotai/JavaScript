/*
function box() {    //函数的声明
    alert('我只有被调用才可以执行！');  //函数本身没有运行功能，必须调用才可以执行
}

box();


function box(name,age) {
    alert('你的姓名是：'+name+',年龄是：'+age);
}
box('lee',28);

function box() {              //return表示把这句话字符串返回回来
    return '我只有被调用才可以执行！';
}

//打印出函数调用返回过来的结果
alert(box());


function box(name,age) {
    return('你的姓名是：'+name+',年龄是：'+age);
}
// alert(box('le',22))
var strinfo = box('ss',90);
alert(strinfo)


function box(num) {
    if (num<5) return num;           //当一个函数遇到第一个return，就会终止函数继续往下执行
    return 100;
}
alert(box(3))


function box() {
    return arguments[0]+'|'+arguments[1]+'|'+arguments[2]+'|'+arguments[3];
}
alert(box('lee',22,'计算机','北京'))


function box() {
    return arguments.length;
}
alert(box('lee',23))


function box() {
    sum =0;
    for (var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

alert(box(12,2,33,13));
*/


function box(num) {
    return num+100;
}

function box(num) {    //第二个函数把第一个函数覆盖掉了，不具备重载功能
    return num+200;
}

alert(box(10));  //