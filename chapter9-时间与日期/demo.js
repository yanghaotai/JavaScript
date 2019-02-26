
/*

var box = new Date();  //创建一个日期对象，构造函数里面可以传参数，如果没有传，默认当前时间
alert(box);

alert(Date.parse('2/26/2019'));  //返回的是一个毫秒数

var box = new Date(Date.parse('2/26/2019'));  //把毫秒数转换成看的懂的时间
alert(box);

var box = new Date(1551110400000);  //直接放日期的毫秒数也是可以的
alert(box);

var box = new Date('2/26/2019');  //默认自动后台调用Date.parse
alert(box);

//火狐返回Invalid Date(无效的日期)
//谷歌返回一个混乱的日期
//IE返回一个NaN
var box = new Date('msdfkl 21123');	//乱写的日期格式，会返回Invalid Date(无效的日期)
alert(box);

var box = new Date('May 25, 2007');		//第二种写法
alert(box);

var box = new Date('Thu Apr 12 2007 22:22:22 GMT+0800');	//第三种写法
alert(box);

//1月没有32号，只有31号，多出来的，可以进到2月
//火狐2月1号			向后增加+1
//谷歌Invalid Date(无效的日期)
//IE2月1号
//Opera是1月30号   向前减少-1
var box = new Date('January 32, 2007');
alert(box);


alert(Date.UTC());		//必须传入年份和月份，不传，就各种错误，负值，有NaN

alert(Date.UTC(2007,10));	//返回毫秒数

//UTC世界协调时间，他会按照他的区域基准来计算
var box = new Date(Date.UTC(2007, 10, 15, 17, 22, 45, 15));
alert(box);

//如果不加Date.UTC，那么就会返回本地的时间
var box = new Date(2007, 10, 15, 17, 22, 45, 15);
alert(box);
*/


