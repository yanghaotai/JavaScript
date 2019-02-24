
/*
var box = 100; //单行语句
var age = 20;  //另一条单行语句

{                                 //用花括号包含的语句集合，叫做复合语句，单位一个
                                //一对花括号，表示一个复合语句，处理时候可以当做一条单行语句来对待
    var height = 200;           //复合语句，一般称之为代码块
    var wight = 300;
}

var box = 100;
if (box > 50) alert(box); //if里面的括号（box>50）返回的结果转换成布尔值是true的时候，则执行后面的一条语句，否则不执行

var box = 100;
if (box > 50);            //if语句里的表达式如果返回false，只会不执行后面的一条语句，第二条语句和if语句无关，所有会执行
alert(box);
alert('不管你的if是true还是false，我都会执行到！');

var box = 100;
if (box > 50) {   //这里是一条复合语句，被当作一条语句来对待了，代码块的功能体现出来了
    alert(box);
    alert('不管你的if是true还是false，我都会执行到！');
};

var box = 100;
if (0){  //123会自动转成true，0转换成了false，'lee'转成了true
    alert(box);
};

var box = 100;
if (box > 50) {
    alert('box大于50');
} else {
    alert('box小于等于50');
};

var box = 100;
if (box >= 100) {
    alert('甲');
} else if (box >= 90) {
    alert('乙');
}else if (box >= 80) {
    alert('丙');
} else if (box >= 70) {
    alert('丁');
} else if (box >= 60) {
    alert('及格');
} else {
    alert('不及格');
};
*/

var box = 1;
switch (box) {  //switch(box) box就是要比较的变量
    case 1:
        alert('one');
        break;        //break中途退出，防止穿透
    case 2:           //if(box == 2)
        alert('two');
        break;
    case 3:
        alert('three');
        break;
    default:            //相当于if语句里的else
        alert('出错！')
};


