
/*
var box = ['lee',22,188,new Date()];
alert(box);
alert(box.toString());
alert(box.valueOf());
alert(box.toLocaleString());  //本地格式区域字符串


var box = ['lee',22,178];
alert(typeof box.join('|'));    //方法运行后返回按｜分割的字符串
alert(typeof box);   //原数组没有任何变化，类型还是object

var  box = ['lee',22,178];
alert(box.push('电影','江苏'));    //给数组末尾添加了n个元素，并返回数组最新长度
alert(box);
alert(box.pop());                 //移除数组最后的元素，并且返回移除的元素
alert(box);

var  box = ['lee',22,178];
alert(box.push('电影','江苏'));
alert(box);
alert(box.shift());                 //移除数组开头的一个元素，并且返回移除的元素
alert(box);

var  box = ['lee',22,178];
alert(box);
alert(box.unshift('北京'));                 //给数组前端添加一个元素，并且返回最新的长度
alert(box);

var box = [1,2,3,4,5];
alert(typeof box.reverse());        //方法执行后返回一个逆序后的数组
alert(typeof box);                  //原数组也被逆序了

var box = [4,2,3,8,7];
alert(box.sort());        //从小到大排序
alert(box);


function compare(va1,va2) {
    if (va1 < va2) {
        return -1;
    } else if (va1 > va2) {
        return 1;
    } else {
        return 0;
    }
}

var box = [0,1,5,10,15];
alert(box.sort(compare));
alert(box.reverse());

var box = ['lee',22,178];
var box2 = box.concat('北京');
alert(box2);
alert(box);

var box = ['lee',22,178];
var box2 = box.slice(1);
alert(box2);

var box = ['lee',22,178,'sdd','eewwe'];
var box2 = box.slice(1,3);   // 这里不是从第一个位置取3个，而是从第一个位置取到第3个
alert(box2);

var box = ['lee',22,178,'sdd','eewwe'];
var box2 = box.splice(1,3);   //这里表示从第一位置取3个，而不是从第一个位置取3个
alert(box2);

var box = ['lee',22,178,'sdd','eewwe'];
var box2 = box.splice(1,3);   //这里表示从第一位置取3个，而不是从第一个位置取3个
alert(box2);
alert(box);

var box = ['lee',22,178,'sdd','eewwe'];
var box2 = box.splice(1,0,'rr','dff');   //从第1个插入点插入元素，0表示不删除
alert(box2);
alert(box);
 */


var box = ['lee',22,178];   //替换
var box2 = box.splice(1,1,100);
alert(box2);
alert(box);