
/*
var box = 1;
do {                       //先运行，再判断的循环体
    alert(box);            //打印1，打印2,3,4,5
    box++;                 //box = 2 ++ 3 4 5 6
}while (box<=5);           //判断6<=5,再运行就退出了
                            //当while判断为false时，退出循环
                            //当while判断为true时，执行循环
                            //如果条件一开始不满足，至少会执行一次
                            //切记，循环体的判断要想好，不然可能会出现死循环


var box = 1;
while (box <=5 ){  //先判断，再执行的循环体
    alert(box);
    box++;
};

for (var box = 1;box<=5;box++){    //第一步，声明变量box=1
    alert(box);                      //第二步，判断box<=5,如果返回true执行第三步，否则退出循环
};                                    //第三步，alert(box),输出box
                                        //第四步，box++ ；累增到2
                                        //第五步，去执行第二步  。。。。。

var box = {        //这个对象有三个属性name、age、height
    'name':'lee',
    'age':28,
    'height':179
};
for (var i in box){
    alert(box[i]);
};


for (var box =1;box<=10;box++){
    if (box == 5) break;
    document.write(box+'<br>');
};

for (var box =1;box<=10;box++){
    if (box == 5) continue;
    document.write(box+'<br>');
};



var box = {        //这个对象有三个属性name、age、height
    'name':'lee',
    'age':28,
    'height':179
};

var n = box.name
var a = box.age
var h = box.height
alert(n+a+h);
*/

var box = {        //这个对象有三个属性name、age、height
    'name':'lee',
    'age':28,
    'height':179
};

with (box) {   //with(box)可以将box.给省略掉，这里的name相当于box.name
    var n =name;
    var a =age;
    var h = height;
};
alert(n+a+h)