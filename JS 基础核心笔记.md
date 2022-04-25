# -------------------------------------------------------- JS 核心基础学习-------------------------------------------------#
F11 或者 toggle full screen  可以让 VSCODE 在全屏之间切换；
# ====================================================基础的基础============================================================

#  JS 基本运行位置

1. alter ("  ") 
2. document.write(" “ )  // output in the body part of the html
3. console.log("hello world") //output in the console 
4. 标识符可以含有：字母、 数字、_ 、 $, 但是不能以数字开头；标识符不能是JS中的关键字或者保留字符；
5. 标识符采用驼峰命名法： 首字母小写，每个单词开头字母大写，其余字母小写： setHandleActive   xxxYyyZzz

#  数据类型

1. 数据类型（字面量的类型） 6种数据类型： 'String' 'Number' 'Bollean' 'Null' 'Undefined' 'Object' (SNBNUO)
2. 字符串中可以使用 \ 做转义字符 str="我说：\“今天天气不错！\""  (\' 表示  ', \" 表示" \n 表示换行 \t 表示制表符 \\表示斜杆\ 第一个是转义；
3. Number 函数 转换数据格式 str='23', age=Number(str)
4. typeof 函数用来检测数据格式,或者变量类型
5. js 中数字最大值： console.log(Number.MAX_VALUE)   => 超过最大值则返回无穷： Infinity Infinity 是个字面量，不需要加引号，加引号就变成字符串了
6. NaN 表示not a number 但是数据类型依然是 number, NaN 和 Infinity 一样是字面量，不需要加引号，但数据类型都是 number （type of NaN) 依然返回 number， 加上双引号就变成了字符串。
7. 如果使用JS进行浮点数运算，可能有误差： 0.1+0.2=0.300000000000004 (在二进制里面不能精确表示1/10)；少用于金钱计算或者精确度要求高的。
8. Boolean 布尔值 bool = true 和 false , typeof bool 返回 boolean 
9. 数据类型 Null 和 Undefined, Null 类型的值就只有一个值： null 比如 var a = null , typeof a 返回数据类型 object, null 专门用来表示一个为空的对象（对象不存在）
10. Undefined 数据类型的值只有undefined, 当声明一个变量，但是没有给变量赋值时候，变量的值就是undefined。 未定义。数据类型也是 undefined

##  数据类型的强制转换

1. 强制的类型转换： 将一个数据类型强制转换成其他数据类型一般是 String, Number, 或者 Boolean ： 
2. String数据类型的强制转换： 
    方法一： 调用 .toString()  例子： var a = 123; a=a.toString(); 调用 toString（）函数将其他数据类型转换成字符串类型, 但是 null和 undefined 数据类型不可以用此方法转换。
    方法二： 调用 String（） 函数，并将被转换数据作为参数，传递给 String(); 例子： a=123, b=String(a), 将number的a 转换成字符串格式并赋值给b, String()可以将 null 和 undefined 转换成字符串格式。String（）函数的适用性更广更好（直接将 null 转换成 “null” ， undefined 同理） 
3. Number数据类型 的强制转换： 
    方式1：调用Number()函数 例子：var a ="1235" b=Number(a) 把a的字符串类型转换成了number型并赋值给b；
       --字符串转数值 (1). 纯数字字符串转数值类型，直接将其转换为number (2) 如果字符串中有非数字内容， 则转换为NaN （局限性）（3）空的字符串 转换为0 
       --布尔值转数值：true 转换成 1， false  转换成 0 例子： a=true 类型是布尔 然后转换 b=Number(a) b结果输出1 类型是数据
       -- null  类型转数值型： a=null 数据类型 object  b=Number(a) 输出结果 0， 数据类型 number
       --undefined 类型转换为数值型： a=undefined b=Number(a) b 结果输出 NaN 数据类型 number
    方式2：专门用来处理字符串内的数字部分读取解析转换
        --parseInt() 把一个字符串转换成一个整数 例子; a="134cf" a的数据类型为String,  b=parseInt(a) b的输出结果是 123 数据类型转换成了 Number 特点：将字符串中有效的整数内容读取然后解析转换成数值型 要求是字符串第一个字母必须是数字 a="ff66cc"则转换不了
        --parseFloat() 把一个字符串 转换成浮点数 例子： a="13.55cf" a的数据类型为String,  b=parseInt(a) b的输出结果是 13.55 数据类型转换成了浮点类型的 Number
        --局限： 如果对非String 使用parseInt()或者parseFloat 转换，则它会先将其转换为String 例子： a=true, b=parseInt(a), 则b f返回 NaN, 
        
4. 数据进制： 如表示16进制数字，则需以0X 开头， var a=0x10, a j就是16进制数字 控制台输出16；八进制数字 需要以0开头； 二进制数据则需以0b开头，但是不是所有浏览器都支持 向a=“070”这样的字符串，如果用 parseInt() 解析 会有些浏览器可以当成八进制解析，有些是10进制解析，如果确保用十进制解析，则用 parseInt(a,10)，第二个参数指定数字进制
5. 转换为布尔值： 
      --将其他数据类型转换为Boolean, 使用 Boolean()函数 例子： var a=123, b=Boolean(a) 则b为布尔类型，输出 true; NaN,Null,undefined 都会转换成 false;
      --字符串转布尔值，除了空串转false，其余都是true
      --对象{}也会转换成 true 例子： a={}; b=Boolean(a); b返回 true

##  运算符（操作符）

* + 加法： 

    1. a=true+1; a 返回2， 当对非number类型的值进行运算时，会将这些值转换为 number 然后在运算 a=true+false, a返回1; a=2+Nan, 返回值 NaN; 任何值和NaN做运算，最后都是NaN;
    2. 两个字符串相加，则字符串相连 (拼串)： a="123"+"456" a 返回“123456” 拼接为一个字符串；
    3. 任何数值和字符串相加，数值则转换为字符串，然后拼串 例子： a=123+'hello" a返回“123hello",数值类型为字符串 a=true+"hello" a 返回 "truehello" 
    4. 用于数据类型转换： 上述方法可用于数字的类型转换 例子 c=123+'' 则c 返回字符串 "123" 因为数值123与字符串空串相加，数值123会先转换为字符串，然后和空串拼串，结果就是数值型123转换为String型 123。类似于 c=String(c)
    a=1+3+'3', a 返回值是字符串'43',因为首先算左边数值1+3=4， 然后4+'3'相当于数字和字符串加法进行转换拼串。a='3'+1+2 则返回字符串 321
* - 减法： 
    1. 减法则可以对两个值进行减法运算，并将结果返回
    2. 数值和数字字符串做减法，则数字字符串首先转换为数字，然后运算： a=100-'1' 返回a=99 ，因为数字字符串首先转换为数值 1， 然后做减法, 但是 a=100 - "hi" 则返回NaN, 字符串必须是数字型，相当于内置调用 Number() 转换后再运算 a= 100-null, 返回 a=100


* */ 乘除法运算：
    1. a=2* undefined 则a返回NaN; a=2*null, a则返回0; a=2*'4'; 则a 返回8； 首先是把非数值部分转换为数值部分，然后运算。
    2. 隐士数值化转换： 任何值做 减 乘 除 运算时首先都自动转换成Number类型 例子： a="123", b=a/1; 或者 b=a*1 或者b=a-0; 那么b 都会被转换成 Number 类型
* % 取余数运算 
    1. a=9%4 则 a 返回1， 余数！

   

* 一元运算符：

    1. 只需要一个操作数 例如 typeof, +(正号) -（负号）： 正号不会对数值型赋值产生影响 a=12 a=+a, a 依然返回12， 负号则取相反数， 例子： a=12, a=-a, a返回-12； a =true, a=-a， 则a 返回 -1 就是先把非数值型转为number型，然后运算。a="18" a=-a, 则a 返回 数值型-18
    2. 数值型转换方法： 用一元运算符 + 例如： a="55" a=+a, 则a 返回数值型 55， 最简单的数值转换方法.  var a = 1 + +"8" + 3 返回12， 数值型。 但是如果不转化： a=1+"8"+3 则返回字符串 183 String 型

    3.  自增 自减 运算符：
        3.1.  通过自增 ++ ，可以使变量在自身基础上增加1; a=1； a++； 则a 返回2； 对一个变量自增以后， 原变量的值会立即增加1；
        3.2. a=3； ++a; a返回值是4， 表达式后加加（等于自增前的值）和表达式前加加（等于自增后的值） 无论是a++还是++a, 都是立即让原变量自加1； 不同的是： a++ 和 ++a 的值不同; 例子： a=3; console.log(a++) 输出3， 说明a++表达式依然是数值3， 但是后续a自增1到4; 但是 a=3； console.log（++a) 则输出4， 表达式 ++a 的值是4， 同时变量a 自增到4；   var a = 10; a++;console.log(a++);console.log(++a) 输出11,13; var a = 10； b = a++ + ++a + a //b=10+12+12=34;   var a = 10; b = a++;  console.log(b) 输出 10; 
    自减 规则类似于自加 （前减减 后减减）

* 逻辑运算符：
    1. ！ 非 &&与 ||或 （逻辑运算符）
    2. ！运算：为任意数据类型做两次!!运算，即可将数据类型转换为布尔值; 
    3. &&与运算 只有两个值都为true时才会返回 true； JS 中的与属于短路的与， 如果第一个值为false，则不会继续看第二个值； 第一个值为true, 则继续检查第二个值；
    4. || 或运算 两个都是false才返回false; 只要有一个true 就会返回 true； || 可以对符号两侧的值进行或运算，并返回原值；如果第一个为 true 则不会检查第二个。如果第一个是true, 则第二个值不看了，直接返回第一个true; 如果第一个值为false 则直接返回第二个值(或运算找true)
    5.  && 与运算：非布尔值的情况： 对于非布尔值，进行与或运算时，会先将其转换为布尔值，然后再运算，并且返回原值！ 例子： var result=1&&2, console.log(result) : 与运算如果两个值都为true， 则返回后面的。如果有false, 则返回靠前的false的值； 总结： 如果第一个为 true, 则必然返回第二个值；如果第一个值为false则直接返回第一个值；返回的原值，不是布尔值；（与运算找false)
    6. 在JS 里可以对非布尔值进行逻辑运算符运算，在别的语言里很少可以，JS 返回值是原值


* 赋值运算符： 
    1. = 可以将右侧的值赋值给符号左侧的变量  a += 5 等价于 a = a+5 "+=" 是一个运算符，不可以加空格； 同理 “-=” “*=”;
    
* 关系运算符：
    1. 如果关系成立，返回 true ;反之，返回 false;  关系包含： >, <, >=, <=; 跟数学里的规则一样；
    2. 非数值情况下： 对于非数值进行比较时， 会将其转换为数字，然后比较 var a=1>'0', 返回 true; a=10>null, 返回 true; a=a0>"hello" ,('hello'会先转换为 NaN,) 返回 false, 任何值和 NaN 做任何比较 都是返回 false. 特殊情况： 如果符号两侧的值都是字符串， （"11"<"5" 返回 true) 则不会将其转换为数字进行比较，则是将字符的 Unicode 比较  ; 比较字符编码时候是一个一个比 ”abc"<"c" 返回 true; 如果一样，比较下一位；（可以借用此，可以对英文进行排序）比较中文时候，没有意义；如果比较两个字符串数字，可能得到非预期结果；所以，注意在比较两个字符串型的数字时候，一定要转型。
    3. Unicode 对应的 Charset="UTF-8" 在字符串中使用转义字符 \u 开头 然后跟着unicode 编码（16进制） （4位编码）;  console.log('\u2620'); 输出 ☠ ； 
    4. 在网页中使用 Unicode编码， 直接： &#编码 要求编码转化成十进制，比如上边例子 2620，需转换成十进制，则是 9760，  
    例子： <h1>&#9760</h1>
    5. == 相等 === 全等 console.log(true =='1') 输出 true, 转换为 number再比较。 特殊情况 console.log(nul == 0) 输出 false. undefined 衍生自null 所以 console.log(undefined == null) 输出 true; NaN 不会和任何值相等 包括NaN 本身 Console.log( NaN == NaN ) 输出 false ; isNaN()是个函数 用来检查是不是 NaN: var b = NaN, console.log(isNaN(b)) 输出 true; === 不会进行数据类型转换。 
    6. != 不相等 ！==不全等 console.log(1 != "1") 输出 false, 可以将变量先转换再对比，转换后 1=1， 所以输出false;  !== 则不会进行数据类型转换， 如果数据类型不同，则直接输出 false. 

* 条件运算符 （三元运算符） 
    1. 语法： 条件表达式？ 语句1 ： 语句2 
    2. 条件运算符执行时， 首先对条件表达式求值， 如果该值为 true, 则执行语句1，并返回结果，如果条件为 false， 则执行语句2， 返回结果。例子; var max=a>b? a:b ; 赋值给max  最大值. max = a > b ? (a > c ? a : c) : (b > c ? b : c) 不推荐 可读性差
    3. 如果条件表达式是非布尔值，则将其先转换为布尔值再进行判断。 例子： 'hello'?alert('1'):alert('2') 则执行语句1. 

* 运算符的优先级
    1. ， 运算符， 逗号 , 可以用来分割多个语句， 例子： 声明变量时候可以用： var a=2,b=3,c=5; 同时声明三个变量，并赋值。 
    2. 运算符的优先级： 和数学中类似; 先乘除 后加减 var result =1 || 2 && 3 返回值是1， 证明 && 与 的优先级高！
    3. 符号优先级表： 表不需要记忆，遇到优先级拿不准的可以使用括号改变

# -----------------------------------------------------基础语法--------------------------------------------------------------
* 代码块： 
    1. 在JS中，可以使用 {} 来为语句分组分块；同一个大括号中的语句，成为一组语句，要么都执行，要么都不执行；一个大括号中的语句也成为代码块。在代码块的后面不需要加 ; 了。 JS 中的代码块只具有分组作用，没有其他用途。 代码块内部的内容，在外部依然可见可用。

* 流程控制语句： 
    * JS中程序是从上到下，一行一行执行的。通过流程控制语句可以控制程序流程：
    
        1. 条件判断语句：

            * if(条件表达式) {语句。。。} 
             使用条件判断语句，可以在执行某段代码之前，先执行判断：先对条件表达式进行求值判断，如果条件表达式为true，则执行后面语句，否则不会执行。 if 语句只能控制紧随其后的语句，否则需要加大括号，搞成代码块。if 后面的代码块不是必须的，但是一般都加大括号变代码块，即使只有一行语句。if (条件1 && 条件2) {语句....} 同时满足条件1,2才会执行

            * if (条件语句){语句。。。} else {语句。。。} 
              if...else...语句： 当语句执行时，先对if 后面的表达式求值判断，如果为true， 执行 if 后的语句，如果是 false， 执行 else 后的语句。 

            * if (条件表达式){
                语句。。。
            }else if(条件表达式){
                语句。。。
            }else if(条件表达式){

            }else{
                语句。。。
            }
            if...else if ....else 语句从上到下，依次对表达式求值判断， 如果为true 则执行当前语句。如果为false， 继续向下判断。如果条件都不满足，执行最后else 后面的语句。 该语句中只会有一个代码块被执行，一旦执行了，后面语句会被忽略，直接结束流程。 
            prompt() 可以弹出一个提示框，该提示框中会带有一个文本框，用户可以在文本框中输入内容。该函数需要一个字符串做参数，字符串作为提示文字。例子： prompt("请输入成绩"); 用户输入的内容将会作为函数的返回值返回，可以定义一个变量接受返回值。
            特别注意： prompt()函数使用时，用户输入的数据类型包括prompt()返回的数据类型都是String。 需要用 parseInt()来数据转换。例子： var age=prompt("请输入年龄:") console.log(typeof age) 输出String。 比较数值大小时候需要数据转换； 可以用 +  转换 例子： var age= +prompt("请输入年龄：") 注意 if (a==10) 判断相等用== 不是用 = 否则就是赋值，if(a=10) 永远为 if(true)
             
        2. 条件分支语句：
             * Switch 语句：
              语法： switch(条件表达式){
                  case 表达式：
                        语句。。。
                        break;
                  case 表达式： 
                        语句。。。
                        break;
                  case 表达式： 
                        语句。。。
                        break;
                  default: 
                        语句。。。
                        break;

              }
              switch ... case...语句在执行时会依次将case后的表达式的值和switch 后的条件表达式的值进行全等比较，如果比较结果为true， 则从当前case 处开始执行代码,并且当前case后的代码都向下的都执行，所以要加break 终止switch语句。 如果比较结果为 false 则继续向下比较。一般情况下，break 都需要加上。 default: 是默认的选择之外执行的情况; 如果所有的比较结果都是 false， 则执行 default 语句；switch 语句和 if 的 功能是有重复的，可以互相实现。 
                var num = +prompt("请输入成绩")
                     switch (true) {
                        case num > 60: // 检测表达式结果是否和switch 里的true 全等
                            alert("Pass");
                            break;
                        default:
                            alert("Fail");
                            break;
                    }

        3. 循环语句： 
           加入需要网页body 里输入很多数： 
           var n=1
           document.write(n++ +"<br/>")
           document.write(n++ +"<br/>")
           document.write(n++ +"<br/>") //document.Write（）函数是写在网页 body 里面的， 所以要加 <br/> 换行。
           如果需要反复执行，则可以通过循环语句执行多次：

           -- while  循环： 
           
                        while (条件表达式){
                            语句。。。

                        } 
            先对条件表达式判断，如果为true, 执行循环体，然后再判断，如果为true， 继续执行，直到条件表达式为 false;
            如果条件表达式写为true, 则陷入死循环，慎用。
            可以使用 break 用来终止循环; 
            创建一个循环，一般需要三步：
            1. 初始化变量
            2. 循环中设置条件表达式
            3. 定义一个更新表达式，每次更新初始化变量
            
            do...while() 循环

            do {
                语句。。。

            }while()

            do...while...循环会先执行循环体，执行完毕后再对 while 的条件表达式判断，如果为 true, 则继续执行 do 里的循环体，如果为false  则终止执行 do ;

            上述两个循环功能类似，不同的是 do...while。。。是先执行，后判断。 第一次执行，不管条件成立与否，都进行，至少执行一次。而 while  不会。

            -- for  循环：

            for语句也是一个循环语句，本质和 while循环一样；
            1. 初始化变量 var i=0;
            2. 创建条件表达式： i<10;
            3. 更新表达式L:i++
            for (var i=0; i<10;i++>)

            for 循环提供了专门位置，放置三个步骤表达式： 

            for (初始化表达式1；条件表达式2；更新表达式3){
                循环体语句。。。

            }
            第一步执行 初始化变量 第二步 执行条件表达式判断，如果true  则执行循环体语句 如果为 false, 跳出循环； 第三步 执行更新表达式； 更新表达式执行完毕后重复第二步；第一步初始化表达式只执行一次；

            for 循环中的部分可以省略: var i=0; for (;i<10;){alert('hello');i++} 如果for 循环中不写任何条件，只写两个 ; for (;;) 则为死循环。 括号里不可以省略分号

        4. break 和 continue 
           break 可以用来退出switch 和循环语句。 if 里面不能使用 break; break 只能在循环里面，在for 循环里的 if 内可以用 break, 用来终止循环。 break 只终止离它最近的循环（ 套娃循环）例子：

           for (var i=0;i<5;i++>){
               console.log(" 外层循环")
               for (j=0;j<5;j++>){
                   break;
                   console.log('内层循环')
               }
           }

           输出结果外外层循环5次， 证明break 只作用于内层循环，只结束当前循环。；
           但是可以为循环语句创建标签lable: 

           outer: for (var i=0;i<5;i++>){
               console.log(" 外层循环")
               for (j=0;j<5;j++>){
                   break outer;
                   console.log('内层循环')
               }
           }
           这样就可以终止外层循环， 只输出一次 外层循环。 因为 outer 是外层循环名字。 


           continue: 跳过当次循环，continue 后面的语句不在执行，而是返回执行下一次循环。

           for (var i=0;i<5;i++){
               if(i==2){
                   continue;
               }
               console.log(i)
           }  // 结果只输出,0，1,3,4，
        同样， continue 只对当前循环有影响，比如在内循环内，只对内循环产生跳过本次循环影响。break  和 continue 的直观区别就是 ： break终止循环，而continue只是跳过一步，继续循环。用处：
         //测试程序性能， 在程序执行前，开启计时器：console.time() 需要一个字符串作为参数，参数作为计时器标； console.time('test')
          //测试程序性能， 在程序执行前，开启计时器：console.time() 需要一个字符串作为参数，参数作为计时器标； console.time('test')
                        
                            console.time('test') //计时器开始
                            for (var i = 2; i <= 10000; i+=2) {

                                var flag = true
                                for (var j = 2; j < Math.sqrt(i); j++) {
                                    if (i % j == 0) {
                                        //一旦进入判断，则i 不可能是质数，此时循环继续执行则没有意义，可以使用break 退出结束内循环。
                                        flag = false;
                                        break;

                                    }
                                }
                                if (flag) {
                                    console.log(i)
                                }
                            }
                            //终止计时器： console.timeEnd();需要计时器名字作为参数，： console.timeEnd(test)
                            console.timeEnd('test')
                 break 可以提高程序性能，避免无效重复循环。Math.sqrt() 可以对一个数进行开方， 优化上面例子 ： j<Math.sqrt()
# =================================================JS 对象学习=================================================================
1. 对象的类型
    JS 中的数据类型： SNBNUO， 其中 O 代表 Object  就是对象！之前5种属于基本数据类型。 以后我们看到的值只要不是前5种，剩下的都是对象 Object;
    基本数据类型的不足体现在，所有基本类型都是单一的值， 值和值之间没有关系；但是对象属于一种复合的数据类型，对象中可以保存多个数据类型的属性！
    * 对象的分类：
    1. 内建对象
      -由ES 标准中定义的对象，在任何的ES的实现中都可以使用；比如; Math String Number Function Boolean Object....
    2. 宿主对象:
        - 由JS 的运行环境提供的对象，目前主要指由浏览器提供的对象。比如： BOM DOM 例如 console.log ()中 console 就是一个对象，由环境提供，叫宿主对象
    3. 自定义对象
        - 由开发人员自己创建的对象；
2. 对象的基本操作：
    1. 创建对象： 
        - var obj = new Object(); // 调用了一个 Object() 函数，如果前面加 new 关键字， 则说明 Object()是一个构造函数 constructor； 
        - 构造函数是专门用来创建对象的函数
        - 使用typeof 检查对象时，会返回 object ；
        - 向对象中添加属性： 在对象中保存的值依附于属性； 语法： 对象.属性名=属性值： 向对象中添加name 属性 ： obj.name="孙悟空"; 
                            var obj = new Object();
                            obj.name = '孙悟空';
                            obj.age=500;
                            obj.性别 = '男';
                            console.log(obj)
                            console.log(typeof obj) // 输出： {name: '孙悟空', age: 500, 性别: '男'} object
        - 读取对象中的属性和属性值： 语法 : object.属性名; 如果读取对象中没有的属性，不会报错，但是返回 undefined
        - 修改对象的属性值： 语法 对象.属性名=新值；
        - 删除对象属性 语法： delete obj.属性；
                    var obj = new Object();
                        obj.name = '孙悟空';
                        obj.age = 500;
                        obj.性别 = '男';
                        delete obj.性别

                    console.log(obj) // 输出： {name: '孙悟空', age: 500} 性别属性被删除了。
    2.  属性名和属性值：
        - 属性名不强制要求遵守标志符的规范 （字母，数字，_,$ 不以数字开头）但是尽量使用时按照标志符规范命名属性。
        - 如果要使用特殊属性名，不能采用 . 的方式操作，需要使用方式: 对象['属性名']=属性值 例子： obj['123']=55; 
          输出时候也是用 console.log(obj['123'])
        -   使用[]这种形式去操作属性，更加的灵活。 在[]中可以直接传递一个变量，这样变量值是多少就会读取哪个属性： 
                            var obj = new Object();
                            obj['暗号']='静夜思'
                            var n='暗号'
                            console.log(obj[n]) 输出： 静夜思

   
        - JS 对象的属性值可以是任意数据类型,甚至也可以是一个对象；
                            var obj = new Object();
                            obj['暗号'] = '静夜思';
                            var obj2 = new Object();
                            obj2[1] = "窗前明月光";
                            obj2[2] = "疑是地上霜";
                            obj.诗词 = obj2
                            console.log(obj) // 输出： {暗号: '静夜思', 诗词: {…}}
                            console.log(obj.诗词[1]) // 输出： 床前明月光

        - in 运算符： 通过该运算符，可以检查一个对象中是否含有指定属性，如果有，返回true, 如果没有；返回false; 语法： '属性名' in 对象
                     注意，属性名作为参数是字符串形式：
                     检查obj 中是否有 test 属性，则 console.log('test' in obj) 输出 false; console.log('诗歌' in obj) 输出 true;

   
3. 基本数据类型和引用数据类型；
      前五种为基本数据类型： SNBUN ; Object 为引用数据类型； 
      - 基本数据类型之间互相独立， Object 引用型数据，变量之间值可以互相传递
      - 栈内存： JS中的基本数据类型都是保存在栈内存（表格，两列：变量名+值）； 基本数据类型的值，直接在栈内存储；值与值之间互相独立存在，修改一个变量的值，不会改变另一个变量值
      - 堆内存： 引用型数据类型（Object）是放在堆内存。堆内存开辟的一个小空间有一个地址，专门存放引用型变量的值； 变量名称依然保存在栈内存；两者通过地址联系： 栈内存表现形式为 对象：地址； 堆内存显示： 【地址】； 地址在的空间储存对象obj的值； 每次创建一个新的对象，堆内存中都会开辟一个新的空间。而栈内存中变量对象保存的是堆内存的地址；相当于钥匙和仓库的关系;
      - 如果两个变量保存的是同一个对象的引用，当一个变量修改属性时候，另一个变量也受影响，因为两个变量公用一把钥匙，对应堆内存中同一个仓库。还有情况 如果 obj2=null, 相当于链接断开，钥匙丢了，obj 不受影响。还有两个对象，内容一样，但是地址不同，console.log (obj2=obj1) 输出 false; 当比较两个基本数据类型时候，就是比较值。 但是比较object 引用型时， 是比较地址。 即使长得一样，但是地址不同，依然返还 false； 相当于双胞胎，但是DNA 钥匙不同；

4. 对象字面量： 
    - var obj = new Object() 是一种方法 
    - 更简单的方法: 使用对象字面量创建对象： var obj={}; 
    - 使用对象字面量，可以直接设置对象属性： var obj2={name:'Tom',age:66,isMale:true}
    - 对象字面量的属性名可以加 "" 也可以不加；建议不加；本质就是字符串； 如果使用特殊名字，必须加引号; 例如：  "%&^878" 
    - 属性名 和属性值 是一组一组的，使用 ：连接，多个属性对之间，用 , 隔开； 最后一个属性对后不用写 , ;
                                    var obj= {
                                            name: 'tom',
                                            age: 34,
                                            isMale:true,
                                            address: {
                                                post: 'L6H6K4',
                                                road: 'dalebrook'
                                            }
                                    }

# ========================================== JS 函数============================================================================
1. 函数 function
    - 函数也是一个对象；一切皆是对象
    - 函数可以封装一些代码，实现一些功能，需要时可以调用执行；
    - 
2. 创建一个函数对象： 
    -  var fun= new Fucntion( console.log('hello'));
    -封装到函数中的代码，不会立即执行；函数中的代码只有在调用时候执行；
    - 调用函数： 语法： 函数对象（）; 例子：
           var fun = new Function(console.log('我是帅哥')); // 开发时候很少用构造函数来创建函数
               fun() // 调用函数 fun();
    - 调用函数时，函数中封装的代码会按照顺序执行；
    - 使用函数声明来创建函数： 
      语法：
                        function 函数名 （[形参。。。。]）{

                                                语句1,2,3
                                                }
      例子：             function fun2{
                            console.log('hello')
                        }
    - 使用函数表达式来创建一个函数： var 函数名 = function (形参。。。){ 函数体 }；如果没有名，就是匿名函数， 没有意义，无法调用。。。
     单纯函数名是指函数对象； 函数名（）: 函数名加（） 表示调用函数；
3. 函数的参数：
    - 定义一个求和的函数： function sum(a,b){return a+b}; 调用 sum(4,5);
    - 函数可以带有多个形参，多个形参之间使用 ， 隔开；形参相当于在函数内部声明了变量，只声明，没有赋值；
    - 在调用函数时，可以在括号中指定实参： sum (4,5); 实参将会赋值给函数中对应的形参， 就是将 4 赋值给 a, 5 赋值给 b ;
    - 调用函数时，解析器不会检查实参的类型，上面例子传string 也可以 ： sum (12,'hello') 输出 12hello,（字符串和数值相加，拼串） 要注意是否可能接收到非法参数，如果有可能，则需要数据类型检查和转换；
    - 调用函数时候，解析器也不会检查实参个数；多余的实参不会被赋值；如果实参数量少于形参数量，则没有实参对应的形参，将会赋值为 undefined；- 函数的实参可以是任意数据类型；
4. 函数的返回值： 
    -function sum(a,b,c){var d=a+b+c; return d；} 使用return 来返回值； 则下次调用函数时候，函数会return返回值； 返回值将会作为函数的执行结果进行返回；可以用变量接受返回值： var result=sum(3,4,5); 函数返回什么，result 就是什么， result = 12；
    function isEven(num){return num%2==0} 优雅的写法， num%2==0 值可以是 true  可以是 false ； console.log(isEven(3)) 输出 false;
    -在函数中，return 返回值后，return后的语句都不会执行；
    -return 后面不跟值，会返回 Undefined； 函数中不写 return 也会返回 Undefined;
    - return 后可以跟任意数据类型的值；
5. 实参可以是任何值：
    - 例子：
                        function sayHello(name,age,gender,address){
                            console.lo个（'my name is' + name +' and i am' + age + ' and I am " + gender + " and live in  " +address}
                        } // 变量太多， 可以打包一起传递：

                    var obj={name: 'philip',age:'88',gender:'male',address:'toronto'}
                    
                    function sayHello2({}){
                        var a={}
                        console.log(a)
                    }
                    sayHello2(obj)  
    - 函数的实参也可以是函数： 递归
    - return 可以用来结束整个函数，return 后面的函数体都不会再执行；break 只会跳出 循环， 而 continue 只跳过当次循环；返回值可以是任意数据类型；例子： 

                   function fun3(){
                       function fun4(){
                           alert('hello')
                       }
                       return fun4
                   }
                   var a=fun3(); 
                   //调用 fun3(), 返回值为对象 fun4 函数，赋值给 a; 则 a() 输出提醒 hello; a 相当于函数 fun4, a() 相当于 fun4()，效果是调用fun4, 也可以写成：fun3()()
6. 立即执行函数：
    - 匿名函数： （function(){alert('hello')}) 
      如果去调用，因为没有用变量接受函数对象，可以直接加（）调用： （function(){alert('hello')})(); 这是立即执行函数，往往只会执行一次； 
7. 对象的属性补充：
    - 属性值也可以是个函数，因为函数也是对象 Object;
                        var obj = {
                                    name: 'tom',
                                    age: 23
                                };
                                obj.test = function() {
                                    console.log(obj.name)
                                };
                                console.log(obj.test) // 输出：ƒ () {console.log(obj.name)}
    - 对象的属性值可以是函数，那么也可以调用这个函数： obj.test() //输出 tom; 相当于 console 的 log  方法；
    - 函数成为对象属性值被保存后，称这个函数为这个对象的方法； 调用这个函数就叫做调用对象的方法（method）；只是名称上的区别；没有其他区别；
    - 枚举对象的属性： 
       1. 使用 for...in 语句： for (var 变量 in 对象) {}; for ... in 语句  对象有几个属性，循环体就执行几次；每次执行时，会将对象里一个属性的名字赋值给变量。例子： 
                                var obj={name:'tom',age: 25, address: 'toroton'};
                                for (var n in obj){
                                    console.log(n)
                                } // 结果输出： name,age,address; 

        这样通过 for (var n in obj) 就把属性名遍历枚举了； 如果继续读取属性值，则可以用 obj[n] 继续读取： console.log(obj[n]); 通过[]传递变量；例子： 
                                var obj={name:'tom',age: 25, address: 'toroton'};
                                for (var n in obj){
                                    console.log(obj[n])
                                } // 结果输出：  'tom',25,'toronto'; 
8. 作用域 
   1. 全局作用域
    - 作用域指一个变量的作用范围；
    - JS 中作用域分为两种: 全局作用域； 局部（函数）作用域；
    - 直接编写在script 标签中的JS 代码，都在全局作用域；
    - 全局作用域，在页面打开时创建，在页面关闭时销毁；在全局作用域中有一个全局对象window，可以直接使用；代表浏览器窗口；由浏览器创建；
    - 在全局作用域中，创建的变量都会作为window 对象的属性保存；var a=20; console.log(window.a) 输出 20; 
    -同理，创建的函数，都会作为window对象的方法进行保存； function fun(){console.log('hello world')} 一般调用函数可以用 fun(); 也可以用 window.fun(); 因为 fun() 是window 对象的方法；
    - 变量的声明提前： 使用 var 关键字声明的变量，会在所有代码执行前被声明；console.log(a) var a=12; 系统不会报错，只会输出 undefined; 相当于： var a; console.log(a); a=12; 但是如果声明变量时没有使用 var 关键字，则变量不会被提前声明；例如： console.log(a) a=12 则会报错；
    - 使用函数声明创建的函数： function fun(){} 可以在所有代码执行之前就被创建； 所以可以在函数声明前调用函数；
    - 使用函数表达式 var fun = function(){} ; 仅仅是提前声明变量，而没有被赋值函数，所以不能提前调用；
    - 全局作用域中的变量都是全局变量；在页面任意部分都可以访问；
  2. 函数作用域：
    - 整体与局部： 学校与班级的类比
    - 调用函数时，创建函数作用域； 函数执行完毕后，作用域销毁；
    - 每调用一次函数，就会创建一次新的函数作用域，并且作用域相互独立；
    - 函数作用域里可以访问全局变量： 
         var a=12; function fun(){console.log(a)} fun();//输出12；说明 a 作为全局变量，可以在函数体内依然访问，所以输出 12；相当于学校操场显示屏，都可以看见； 
    -    var a=12; function fun(){var b=20 console.log(a)} fun() console.log(b); 出现错误，b 不能访问；相当于班级里的黑板，班级外面看不见
    - 总结： 函数可以访问全局，函数外不能访问函数内变量；
    - 当函数作用域中操作变量时，会先在自身作用域中寻找，如果有直接使用，如果没有，则继续向上一级作用域中寻找； 一级一级的找，上一级不一定是全局，有可能是外包函数的；如果全局中依然没有，则报错 reference error ; 如果直接想访问全局变量, 则可以使用 window.变量；
    - 在函数作用域中，也有声明提前特性，使用var 声明的变量可以在所有代码执行前被声明；但是不会被赋值；
                var c=13; function fun5(){
                    console.log(c);
                     c=10
                }
                fun5();//调用fun5 结果输出 13； 首先，函数体内的c 没有 var 声明，则console.log 会继续向上一层寻找 c, 找打全局变量 c 值33, 输出之； 如果函数体内 var c=10, 则函数体内的 c 会被先声明，但是不赋值，再执行 console.log(c), 输出 undefined; 
                console.log(c) //输出 10！ 因为函数体内的 c 没有写 var， 对c 进行赋值10时候，函数会先找c, 结果找到全局变量 c 并且对c 重新赋值 10； 所以最后输出c时候，c 作为全局变量，值变为 10; 如果函数体内 是 var c =10; 那么函数体内的c就是局部变量c, 不会改变全局变量c 的值；
    - 在函数中不适用 var 声明的变量，都会成为全局变量；
                    var c = 13;

                    function fun5() {
                        console.log(c);
                        var c = 10;
                        d = 66;
                    }
                    fun5(); //调用fun5 结果输出 undefined；  var c=10, 则函数体内的 c 会被先声明，但是不赋值，再执行 console.log(c), 输出 undefined; 
                    console.log(c) //输出 13, 输出全局变量13
                    console.log(d) //输出66， 函数体内变量声明没有用var, 则变量默认为全局变量，可以在函数体外继续访问！

    - 定义形参，就相当于在函数作用域中声明了变量！ 

# =======================================================This===================================================================
1. 隐含参数 this
    - function fun1(){}; fun(); 解析器在调用函数时候，都会在函数内部传递一个隐含的参数； 我们传的实参不用管； 隐含参数就叫 this ;
    - function fun2(){console.log(this)} fun2(); //输出结果一个去全局对象 window;
    - this 指向的是一个对象，我们称之为函数执行的上下文对象；
    - 根据函数的调用方式不同，this 会指向不同的对象；
            function fun2(){console.log(this)}; var obj={name:'tom',sayName:fun2}; obj.sayName();// 输出 {name: 'tom', sayName: ƒ};
    - 上面例子说明，this 变成了 Object; 也就是 obj.sayName() 作用的上下文对象；谁调用函数（方法）谁就是this对象；全局调用，那么this 就指向全局；
    - 以函数的形式调用时， this 都是 window; 相当于 window.fun(); 
    - 以方法形式调用时候，this 都是调用方法的对象；（谁调的 this 就是谁）this 指向父类对象；相当于： obj.fun();
                var name='全局的name'; var obj={name:'tom',sayName:fun}; funciton fun(){console.log(this.name)}; 
                fun(); // 全局调用，输出全局name,结果： 全局的name; this 指向全局；
                obj.sayName();// 局部调用；输出父类对象的name,结果： tom； this指向 obj;
    -  var name='全局的name'; var obj={name:'tom',sayName:fun}; funciton fun(){console.log(name)}; 
        fun();//输出全局变量 name的值： 全局的name;
        obj.sayName();//输出全局name,结果依然是： 全局的name; 原因是： fun() 函数体内 console.log 的是 name, 而不是 this.name； this 可以动态改变上下文对象，根据调用者的不同；
2. 对象的批量创建：
    -  工厂创建方法
        * 要大批量的创建对象（ 很多对象共享一个对象结构）将公用的结构提取出来到一个模子里；
                      //创建工厂方法；
                      function createPerson(a,b,c){
                          var obj=new Object();
                          obj.name=a;
                          obj.age=b;
                          obj.address=c;
                          return obj;

                      }
                    var tom= createPerson('tom',18,'toronto') //利用函数创建一个object,实参传入属性值；
                    console.log(tom) // 输出：Object {name: 'tom', age: 18, address: 'toronto'}
        * 使用工厂方法创建的对象，使用的构造函数都是 new Object()； 所以创建的对象都是Object; 导致无法区分多种不同类型的对象：e.g. 狗和人
    - 构造函数： 
        * 创建一个构造函数，专门用来创造Person 对象； 
        * 构造函数也是一个普通函数，创建方式一样，但是习惯命名构造函数的首字母大写；例子：
                    var function Person(){}; var per1=new Person(); 
        * 调用构造函数时候用关键字 new; 例子： var per1 = new Person();
        * 不加 new 时，是普通调用；
        * 构造函数的执行流程: 1. 当用new调用构造函数时候，会立刻创建一个新的对象;2. 将新建的对象，设置为函数中的 this， 构造函数中可以引用this 对象; 3. 逐行执行函数体中的代码；4.并将新建的对象作为返回值返回；例子： 
                          function Person (a,b,c){
                              this. name=a;
                              this.age=b;
                              this.address=c
                          }
                          var per1 = new Person('tom',21,'toronto');
                          var per2 = new Person('john',15,'regina');
                          var per3 = new Person('jack',31,'calgary');
                        console.log(per3) //输出：Person {name: 'jack', age: 31, address: 'calgary'} 这时候输出的是 Person  不是工厂类型的 Object, 这样就可以区分类
        * 使用同一个构造函数创建的对象，称之为一类对象；将一个构造函数称之为类！
        * 通过一个类构造函数创造的对象，称之为该类的实例；the instance of the class; 
        * 使用  （对象 instanceof 类 ）可以用来检查一个对象是否是一个类的实例：
                  console.log( per1 instanceof Person) //输出 true; 
                  console.log( per1 instanceof Object) //输出 true
        * 所有子类都是以Object 为父类，所以 console.log( per1 instanceof Object) //输出 true；
        *  This 的总结：
                **  当以函数调用时， this 是 window;
                ** 当以方法调用时，谁调用方法，this 就是谁；
                **  当以构造函数调用时，this 就是新创建的对象（实例）
    - 构造函数的修改： 
        * 例子：          // 创建一个构造函数 Person  类
                            function Person(a,b,c){
                                this.name=a;
                                this.name=b;
                                this.address=c;
                                this.sayHello=function(){
                                    console.log("hello, I am "+this.name)
                                }
                            }
                            // 创建一个 Person  类的实例： 
                            var per1=new Person('tom',18,'toronto')
                            var per2 = new Person('jack',32,'regina')
                            // sayHello 函数时创建在构造函数内部： 
                            per1.sayHello()// 输出： hello, I am tom
                            per2.sayHello() // 输出： hello, I am jack 

        * 问题： 
           上面例子中可以看到，每一个instance都附带了一个 sayHello 函数，而且每个例子中的sayHello函数时独立的：
                        console.log(per1.sayHello==per2.sayHello) // 输出 false;
            ** 这种情况就说明每一个instance的 sayHello 函数都占了一份内存，虽然sayHello 函数的功能都一样；因为构造函数执行一次，就会创建一次sayHello函数（方法） ；即便是一万次实例，也含有一万个相同的sayHello 方法；（例子： 学校为每一个同学都配一个厕所。。。）
            ** 为了优化，我们可以让所有实例去共享一个方法sayHello;
        * 初级解决方法： 
           ** 将 sayHello 方法提取出，定义到全局作用域；
                                function sayHello(){
                                    console.log("hello, I am " +this.name)
                                    }
                                function Person(a,b,c){
                                                this.name=a;
                                                this.name=b;
                                                this.address=c;
                                                this.sayHello=sayHello;
                                                }
                                var per1=new Person('tom',18,'toronto')
                            var per2 = new Person('jack',32,'regina')
                            // sayHello 函数时创建在构造函数内部： 
                            per1.sayHello()// 输出： hello, I am tom
                            per2.sayHello() // 输出： hello, I am jack 
                            console.log(per1.sayHello==per2.sayHello) // 输出 true;
        
           **  上面的问题是： 将函数定义在全局作用域中，则会污染全局作用域的命名空间；而且定义在全局作用域中也很不安全；（多个程序员互相独立合作，会重复命名有可能）
        * 原型： prototype
          ** 我们创建的每一个函数，解析器都会向函数添加一个属性： prototype:
                 function Person(){}; console.log(Persion.protorype) //输出 {constructor: ƒ} 每一个函数都有自己唯一的 prototype；
          ** prototype 是一个对象（object），我们叫做原型对象；创建的函数里面有一个系统自动加的prototype属性，这个属性指向的是堆内存里的属性值，叫原型对象； 属性变量名在栈内存中保存，同时含有对应地址，地址指向堆内存里的属性值（也就是 prototype 属性的属性值： 原型对象 （prototype object); 每个函数的原型对象都是独立不同的；
          ** 如果函数作为普通函数调用，那么 prototype 没有作用；
          ** 当函数作为构造函数调用时； var mc = new Person() ; 它所创建的对象（instance)中都会有一个隐含的属性，指向该构造函数的原型对象；也就是 mc 中也有一个同样的属性 prototype 指向该构造函数的原型对象；可以通过 __proto__ 来访问该属性； （两个下划线）
                        console.log(mc.__proto__) //输出同样的prototype 对象，是Person()同样的属性，指向同一个 prototype （类的）
          ** instance 实例的 prototype 指向 class  类的 prototype； 原型对象就相当于一个公共区域，所有同一个类的实例都可以访问这个原型对象；
          ** 所以可以将各个实例对象中共有的内容，统一设置到原型对象中：
                            function Myclass(){}; 
                            Myclass.prototype.a=123; // 向构造函数的原型对象中添加属性和属性值 a:123
                            var mc = new Myclass(); 
                            console.log(mc.__proto__.a) // 结果输出 123；
                            console.log(mc.a)// 结果也是 123；说明 mc 会去父类的原型对象里去寻找属性a;
         ** 当访问实例对象的一个属性或方法时候，它会先在自身instance实例的属性中寻找，如果有直接使用；如果没有，就会去父类prototype 的原型对象中寻找；找到后，就直接使用； mc.a 返回；所以如果定义了mc 中属性，则不需要继续找父类prototype 的：
                        
                           function Myclass(){}; 
                            Myclass.prototype.a=123; // 向构造函数的原型对象中添加属性和属性值 a:123
                            var mc = new Myclass(); 
                            mc.a="我属于mc中的“
                            console.log(mc.a) // 结果输出： 我属于mc中的；
        ** 原型就相当于父类学校的操场显示屏，所有实例班级的instance都可以访问到父类原型的属性
        ** 同样的道理，可以向prototype 原型中可以添加方法属性：
                            function Myclass(){}; 
                            Myclass.prototype.sayHello=function(){console.log('hello, i am from proto')}; // 向构造函数的原型对象中添加方法
                            var mc = new Myclass(); 
                            mc.sayHello()// 实例instance mc 可以调用父类原型对象中的方法，结果输出：hello, i am from proto；
        ** 总结： 同意类函数的不同实例中所共有的部分可以提取出来，统一添加到父类的原型对象中；这样所有的子instance 都可以读取调用；也避免了在全局作用域中定义函数；也不用给每个实例重复添加同样的方法或者属性；
        ** 使用 in  检查实例中是否含有某个属性时， 如果实例中没有，但是原型中有，也会返回 true;
                         fucntion Myclass(){};
                         Myclass.prototype.name="我是原型中的名字"
                         var cl1=new Myclass();
                         console.log(cl1.name) //输出： 我是原型中的名字；
                         console.log( 'name' in cl1); //虽然实例cl1中并没有name 属性，但是原型对象里有，继续输出： true ；
        ** 如果想检查实例对象中自己是否有某个属性则用方法：对象实例.hasOwnProperty()来检查：
                         console.log(cl1.hasOwnProperty('name')) // 返回 false;
                         // hasOwnProperty 是一个方法，在原型对象里；哈哈
                         console.log(cl1.__proto__.hasOwnProperty) //输出： ƒ hasOwnProperty() { [native code] }
                         // 但是 console.log(cl1__proto__.hasOwnProperty('hasOwnProperty')) 输出false;
                         //说明 hasOwnProperty 属性来自于原型对象的原型；
                         console.log(cl1.__proto__.__proto__).hasOwnPropery('hasOwnProperty') 输出 true



        ** 原型对象也是对象，也有原型； 当我们在使用一个对象的属性或者方法时， 会先在自身中寻找，如果没有去原型对象中寻找，如果还没有，继续找原型的原型中寻找；知道找到再使用；知道找到Object 对象的原型； Object对象的原型就没有原型了（依然有原型属性，只是原型的属性值为null)，如果依然没有找到，返回undefined
        ** 原型的原型： console.log(cl1.__proto__.__proto__) 输出 object; 一般只有两层原型； 爸爸没有，找爷爷的；Object 是祖爷爷；
3. _toString();
    - 当我们在页面中直接console.log 一个对象时，实际上是输出的对象的 toString()方法的返回值: console.log(per) 和 console.log(per.toString()) 是一样效果；toString() 是在原型的原型里 （Object 的原型）
           function Person(a,b,c){
               this.name=a;
               this.age=b;
               this.address=c;
           }
           var per = new Person('tom',25,'toronto');
           console.log(per)//输出: [Object Object] Person {name: 'tom', age: 25, address: 'toronto'}
    - 如果我们希望在输出时候不输出 [object,object] 可以添加一个 toString()方法； 
           function Person(a,b,c){
               this.name=a;
               this.age=b;
               this.address=c;
           }
           var per = new Person('tom',25,'toronto');
               per.toString()=function(){
                   return "我是快乐小person"
               }
           console.log(per)//输出:我是快乐小person 谷歌chrome  不是，依然输出 per 

    - 也可以修改原型中的toString: 
                                Person.prototype.toString=function(){
                                    return "我是快乐小Person"
                                } // 对其他子对象实例就也起作用了；
        
    
4. 垃圾回收 (GC= gabage collection)
    - 程序跟生活是一样的，也产生垃圾；垃圾多了，程序运行过慢， 需要垃圾回收机制来处理程序运行过程中产生的垃圾；
    - 垃圾的定义： 
        * 例子：
                    var obj = new Object(); //创建一个 obj对象，同时堆内存内开辟储存空间，储存obj的值；
                    obj=null; //让obj 为 null, 则obj 变量名依然在栈内存中，但是变量值（地址）设置为了 null, 地址不在指向堆内存中开辟的储存空间；但是这块空间依然在，堆内存的空间就被浪费了；就成了垃圾；
        * 当一个对象，没有任何变量或者属性对其进行引用时候，这个对象就是垃圾了；这种对象多了，会占用内存空间，导致程序变慢；
        * 上述垃圾必须进行清理； 在JS中拥有自动垃圾回收机制，会自动将垃圾对象从内存中销毁；不需要也不能进行垃圾回收；。。。。裂开。。。。（只需要将不用对对象设置为 Null 即可）

# =======================================================玩转对象=================================================================
1. 内建对象： 数组 Array介绍;
    - 数组也是一个对象； 一切都是对象； 和普通对象功能类似，用来存储值；
    - 不同的是普通对象是使用字符串作为属性名， 数组是使用数字作为索引（index)，操作元素；从0开始的整数作为索引 （id); 
    - 数组的存储性能比普通对象好，所以开发中经常用数组存储一些数据；
    - 创建数组对象： 
         var arr= new Array();
         console.log(typeof arr)  // 输出 object； 数组也是一个对象；
    - 向数组中添加元素： 
         语法： 数组[索引]=值；
               arr[0]=10;
               arr[1]=33;
    - 读取数组的元素： 直接 arr[id] // 若读取不存在的元素，不会报错，返回 undefined;
    - 获取数组的长度或者元素个数；可以使用length 属性， console.log(arr.length); 
    - 对于连续的数组，arr.length 可以获取arr的长度；对于非连续数组，使用 arr.length 会获取数组最大的索引+1；非连续数组，中间位置会空出来，也留位置；
    - 修改数组length,  使用 arr.length=10 //修改的length大于原长度，则多出部分会空出； 如果改的 length 小于原数组长度，则后面多出的元素删除；
    - 向数组最大索引后的位置添加一个元素： arr.push(10) 或者 arr[arr.length]=10; arr[arr.length] 总是向数组最后一个元素之后添加新元素；
2. 使用数组字面量创建数组： 
    - var arr=[1,3,5]; console.log(arr) // 输出 【1,3,5】； 创建时候一起定义数组里的元素；等同于 var arr = new Array(1,3,5);
    - 使用构造函数 Array() 创建数组时，也可以直接定义元素，实参传入，逗号隔开；
    - 创建一个数组，数组中只有一个元素; var arr=[10];是创建一个只含一个元素10的数组， 但是用构造函数 var arr2= new Array(10) 则是创建一个长度为10 的数组 arr2;
    - 数组中的元素可以是任意数据类型； arr = ['hello',0,null,undefined,55, true,{name:'tom'}] 
    - 数组里也可以放数组 比如 二维数组；

3. 数组的玩法：  
    - concat(); 连接两个或者更多的数组，并返回结果；
                                var  arr1=[1,3,5,7,9]
                                var  arr2=[2,4,6,8,10]
                                var  arr3=[a,b,c]
                                var result = arr1.concat(arr2)
                                  
                                console.log(result) // 输出： [1,3,5,7,9,2,4,6,]
        * concat()里面不仅可以传数组，还可以传元素，不会对原数组产生影响， 而且可以数组和元素一块传： .concat(arr1,arr2,'tom','jack')
                                var arr =[1,2,3]
                                var result = arr.concat('d','e','f')
                                console.log(result)// 输出： [1, 2, 3, 'd', 'e', 'f']

    - join(); 把数组的所有元素放入一个字符串，元素通过指定的分隔符进行分割；
        * 可以将数组转换为字符串： 
                    var arr=['hello','你好','谢谢']
                    var result = arr.join('&') //输出： hello&你好&谢谢
                    console.log(result)
                    console.log(typeof result)// 输出：string

        * join() 函数传的参数是字符串，该字符串将作为转换字符串中的分隔符（连接符）；如果不传，默认为逗号，
        * 该方法不会对原数组产生影响，而是把转换后的字符串作为返回值返回；
    - pop(); 删除并返回数组的最后一个元素，并将被删除的元素作为返回值返回；；
    - push(); 向数组的末尾添加一个或更多元素，并返回新数组的的长度；
    - unshift(); 向数组的开头添加一个或更多元素，并返回长度；
      * 向前面插入元素后，后面的元素索引相应增加；
    - reverse(); 颠倒数组中元素的顺序；
        * var arr=[1,3,5,7,9]
              arr.reverse()
              console.log(arr)//输出：[9, 7, 5, 3, 1]
              //.reverse() 将颠倒数组元素的顺序,改变了原数组顺序！；
        * 该方法会改变原数组！

    - shift(); 删除数组的第一个元素，并将删除的元素作为返回值返回；
        * 类似于末尾的 pop（）； 

    - slice(); 从某个已有的数组返回选定的元素；
        * var arr=['孙悟空', '猪八戒', '沙和尚', '唐僧','红孩儿']
           var result= arr.slice(0,2)  // 数组的切片； 从数组中提取指定元素 ; 该方法不会改变原数组，只会把截取的元素封装到新数组并且返回；
           console.log(result)// 输出： ['孙悟空', '猪八戒']
           
        * arr.slice(start,end) 参数需要开始，结尾索引两个参数；//新数组： 包含开始索引，不包含结束索引； 包前不包后；（起闭末开）
        * 第二个参数可以省略不写，此时会截取从开始索引往后的所有元素；
        * 索引可以传递一个负值； arr.slice(1,-1); -1 代表倒数第一个，-2 代表倒数第二个，负值代表从后往前数；

                                        var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧', '红孩儿']
        var result = arr.slice(2, -1) //输出： ['沙和尚', '唐僧']
        console.log(result)
        * 

    - sort(); 对数组元素进行排序；
        * var arr=['b','c','e','a']
              arr.sort();
              console.log(arr) //输出： ['a', 'b', 'c', 'e']
        * .sort() 会改变原数组！ 排序！默认会用 UNICODE 编码进行排序；
        * .sort() 排序时，即使对纯数字数组也是用 UNICODE 编码进行排序；所以对数字进行排序时，可能会出现错误结果；
        * 可以自己指定排序规则：在.sort中添加回调函数：回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为回调函数的实参去调用回调函数；
        * 使用哪个元素调用 它不确定，但肯定是 a 一定在 b 前面； 
        * 浏览器会根据回调函数的返回值来决定顺序，如果返回大于0 的值，则元素会交换位置；,如果返回小于0 的值，元素位置不变； 如果返回0， 则两个元素相等，不用交换位置；
                 var arr=[13,5,8]
                     arr.sort(function(a,b){
                         return a-b; // 如果前面的大， 则换位置到后面；
                         })
                    console.log(arr) // 输出： [5, 8, 13]
                    // 上面为升序排列数组！

    - splice(); 删除元素，并向数组添加新元素； 
        * splice 替代函数，可以用于删除数组中指定元素；
        * 使用splice 会影响到原数组，会将指定元素从原数组中删除，并将被删除元素返回；
        
                                var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧', '红孩儿']
                                var result = arr.splice(0, 2)
                                console.log(arr) //输出： ['沙和尚', '唐僧', '红孩儿']
                                console.log(result) //输出： ['孙悟空', '猪八戒']

        * splice(start, quant) start 表示开始位置的索引，quant 表示删除的数量。splice(1,2) 代表从第1个删除2个元素； 前包；
        * 并向数组添加新元素： 
                        var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧', '红孩儿']
                        arr.splice(1,1,'牛魔王')；
                        console.log(arr) // 输出： ['孙悟空', '牛魔王', '沙和尚', '唐僧', '红孩儿'] 将索引1开始后的一个元素删除，并添加成 '牛魔王' 然后返回新数组；

        * splice(start, quant, newels): 第三个参数及以后也可以添加新元素，并替换掉被删除的元素；如果quant 为0 ，相当于在start前插入元素；
        * 练习： 数组去重
                            var arr = [1, 2, 3, 2, 1, 3, 4, 2, 5];

                                function removeDup(arr) {

                                    for (var i = 0; i < arr.length; i++) {
                                        for (var j = i + 1; j < arr.length; j++)
                                            if (arr[i] == arr[j]) {
                                                arr.splice(j, 1);
                                                j--; // j-- 是为了删除一个后让后面顶上来的元素也进行一次比较去重；
                                            }
                                    };
                                    return arr;
                                }
                                var result = removeDup(arr);
                                console.log(result)
                            

    - toString(); 把数组转化为字符串，并返回结果；
    - valueOf(); 返回数组的原始值；
                                var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧']
                                var result =arr.push('白骨精', '牛魔王')
                                console.log(arr) // 输出： ['孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精', '牛魔王'] length: 6;
                                console.log(result)// 输出： 6
                                 console.log(arr.pop()) // 输出： 牛魔王
                                 console.log(arr)// 输出：['孙悟空', '猪八戒', '沙和尚', '唐僧', '白骨精']
                                 console.log (arr.shift()); // 输出: 孙悟空；
                                 arr.unshift('11','22')
                                 console.log(arr)// 输出：['11', '22', '猪八戒', '沙和尚', '唐僧', '白骨精']
                
4. 数组的遍历：
    - 遍历数组就是将数组中所有的元素都取出来；
                        * 利用 for 循环：
                                        var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧']
                                        for (var i=0;i<arr.length; i++){
                                            console.log(arr[i])} //依次输出arr里的元素；
    - 数组 forEach: // 如果用IE 浏览器，只有IE8 以上版本支持此功能；
        * 一般我们使用 for循环去遍历数组； JS 中还提供了 forEach 方法用来遍历：
        * forEach() 方法需要用一个函数作为参数；直接传一个匿名函数；
                             var arr = ['孙悟空', '猪八戒', '沙和尚', '唐僧']
                             arr.forEach(function（a,b,c）{console.log(a)})   
                             // 像这种 forEach()内作为参数的匿名函数，由我们创建，但是不由我们调用，这种叫回调函数；
                             // 数组中有几个元素，回调函数就会执行几次；每次执行时，浏览器将遍历到的那个元素以实参的形式传递给回调函数；
                             // el 这个形参确实被传了实参，实参是就是数组里的元素！
                             // 浏览器会向回调函数中传递三个参数向形参a,b,c； a 是当前遍历的元素； b 是遍历到的元素index; c 是正在遍历的整个数组对象；a,b,c可以重新叫为： value,index,obj;
5. 函数作为对象所拥有的方法： call()  和 apply() ;
    - call() 和 apply() 都是函数对象的方法，需要通过函数对象来调用： 

                                    function fun(){
                                        alert('我是函数 fun')
                                    }
                                    fun()//调用函数，弹出： 我是函数 fun；
                                    fun.call()// 调用函数对象的方法 call()； 同样弹出alert : 我是函数fun
                                    fun.apply()// 调用函数对象的方法 apply()； 同样弹出alert : 我是函数fun
                                    * fun 是函数对象； fun() 则是调用函数后执行结果；
    - 当对函数调用 call() 和 apply()_都会调用函数执行
    - 在调用 call() 和 apply() 可以将第一个对象指定为参数；此时这个对象将会成为函数执行的this;:
                    var obj={}, obj2={}
                    function fun(a,b){
                        console.log('a='+a)
                        console.log('b='+b)
                    }
                    fun.call(obj)//函数执行的this 就是obj;参数是谁，this 就是谁；
                    fun.apply(obj2)//函数执行的this 是 obj2; 参数是谁，this 就是谁；
                    fun();// 函数执行的this 是 window;
                    fun.call(obj,2,3)// 这种情况第一个obj 指定了 fun 作用的this, 接下来的 2,3 作为实参，传递给fun的形参 a 和 b; 输出 a=2,b=3；
                    fun.apply(obj,2,3) //出现错误
    - call（） 方法可以将实参在对象之后一次传递；
    - apply() 方法传递实参时候需要将实参封装到一个数组里： 实现上面功能需要： 
                                fun.apply(obj,[5,10])// 输出： a=5 b=10
    - This总结：  以函数形式调用时候，this 都是 window; 以方法形式调用时候，this 指调用对象； 谁调的 this 就是谁；以构造函数形式调用时， this 是新创建的对象；使用call()和 apply() 调用时，this 时指定的对象（第一个参数）
6. arguments (参数列表)
    - 在调用函数时，浏览器每次都会传递进两个隐含的参数： 1.函数的上下文对象 this; 2.封装实参的对象 arguments
    - arguments 是一个类数组对象（像数组，但不是数组， 它也可以通过索引来操作数据，也可以获取长度（所传实参的个数）；
    - 在调用函数时候，我们所传递的实参都会封装到 arguments 中；
                                        function fun(){
                                            console.log(arguments)
                                        }
                                        fun();// 输出 object  arguments
                                        console.log(arguments instance of Array) // 输出 false;
                                        console.log(Array.isArray(arguments))// 输出false; 证明 arguments 不是数组；
                                        console.log(arguments.length) // 输出调用函数时候所传实参的个数；
                                        console.log(arguments[0])// 输出所传递的第一个实参；类似数组操作；
                                        console.log(arguments.callee) // callee 是arguments 的一个属性；

    - 即使不定义形参，也可以传入实参，并封装在arguments中，也可以读取by上例；
    - arguments 例有一个属性 callee, callee对应一个函数对象，就是当前执行函数的对象；调用哪个函数，callee就是哪个函数；arguments.callee==fun;
7. Date 对象； 
    - 创建date 对象：
                var d = new Date(); // 调用构造函数；
                alert(d)// 弹出： Thu Mar 17 2022 21:40:51 GMT-0400 (Eastern Daylight Time)
                // 如果直接使用一个构造函数创建一个date对象； 则会封装为当前代码执行的时间；
                // 创建一个指定的时间对象，需要在构造函数中传递一个表示时间的字符串：
                   var d = new Date('12/03/2021 11:10:30')
                   console.log(d) // 输出： Fri Dec 03 2021 11:10:30 GMT-0500 (Eastern Standard Time)
    
    - Date() 实参格式(字符串）： '月/日/年 时/分/秒'   
    - Date 对象的玩法
        * getDate(); // 得到一个月中的那一天（1-31）；
           console.log(d.getDate()) // 输出3， 因为d是12月的第三天；      
        * getDay();//返回对象是一周中的某一天；(周几，0 表示周日，返回0-6的值)   
           console.log(d.getDay()) // 输出： 5 因为是周五； 
        * getMonth(); //获取月份；（0-11， 0 代表一月，11 代表十二月） 
        * getFullYear(); // 输出年份；
        * getHours(); getMinutes(); getSeconds();
        * getTime()// 获取当前对象的时间戳
          console.log(d.getTime())// 输出: 1638547830000 这个数字是毫秒数。。。。可以作为时间戳（timestamp)
          // 时间戳值得是格林威治时间 1970年1月1日0分0时0秒到当前时间的毫秒数；
        * 计算机底层在保存时间时候都是用时间戳；
        * 获取当前时间戳方法： time = Date.now()
                             console.log(time) //输出： 1647569323887 是代码879 执行时的时间戳；

                               var start = Date.now();
                                for (var i = 0; i < 100; i++) {
                                    console.log(i)
                                }
                                var end = Date.now();

                                console.log('执行了：' + (end - start) + "毫秒") // 输出： 执行了： 13 毫秒；

8. Math 对象； 
    - 不同于Date(); Date()是一个构造函数 可以 var d= new Date(); 
    - Math 不是构造函数，是工具类，不用创造对象，里面封装了数学运算相关的属性和方法；可以直接用；console.log(Math.PI) //输出： 3.14159
      Math.PI 表述圆周率，PI 是 Math 对象的属性；Math.E 返回自然常数e;

    - Math 作为对象，也有方法： 
        * Math.abs(x)； // 用来计算一个数的绝对值； console.log(Math.abs(-1)) // 输出1； 
        * Math.sqrt(x); // 取平方根；
        * Math.ceil(x); // 上舍入 console.log(Math.ceil(1.1))// 输出2， 对一个数进行向上取整！ 小数位只要有值就自动进1；
        * Math.floor(x);// 下舍入， 只要小数位有值，就对其向下取整： console.log(Math.floor(1.9)) //输出1；
        * Math.round(x);//正常的四舍五入； console.log(Math.round(2.5))// 输出3；
        * Math.random(x);// 可以生成一个0-1直接的随机数；console.log(Math.round(Math.random()*n)) 取 [0,n] 之间整数随机数；
        * 生成一个[x,y]之间的随机数： console.log(Math.round(Math.random()*(y-x))+x)
        * Math.max 和 Math.min 返回最大值和最小值
        * Math.pow(x,y) 返回 x 的 y 次幂
9. 包装类
    - 基本数据类型： String, Number, Boolean, Null, Undefined; 引用数据类型; Object;
    - 在JS中为我们提供了三个包装类；通过这三个包装类，可以将基本数据类型转换为对象；
                    var a=123; 
                    console.log(typeof a) // 输出 number ;
    - 三个包装类是：
        * String() // 可以将基本数据类型字符串转换为 String 对象
        * Number() // 可以将基本数据类型数值转换为 Number 对象
        * Boolean() // 可以将基本数据类型布尔值转换为 Boolean 对象

          var num = new Number(3); //通过 new 调用 Number() 构造函数
             console.log(num) // 输出3；
             console.log(typeof num) // 输出 object; 
             num.hello='abcd' // 向对象num 添加hello属性；
             console.log(num.hello) // 输出： abcd
          var str = new String('hello');
             console.log(str) // 输出 hello；
             console.log(typeof str) // 输出 object; 
        *  在实际应用中不会使用基本数据类型的对象；如果使用基本数据类型对象做比较时，结果不可预期，因为 objects 地址不同，不会 == ；
        * if ({}) 对象转为布尔值都会true;
        * 方法和属性只能依附于 Object， 只能添加给对象，但是s.toString()没有报错；说明浏览器临时使用包装类 将 s 数值型 转换为 对象型，然后调用.toString(); 调完以后，再将其转化为基本数据类型，同时对象销毁；
            var s = 55; s = s.toString(s) // 将 s的 55 数值转换为 字符串 55 ；
            // 
        * 包装类是浏览器自己底层用的；用来临时转换成对象；

10. 字符串的玩法：
    - 主要指的是 string 对象里的方法
        * 在底层，字符串是以字符数组的形式保存的；['h','e','l','l','o',' 'r', ]
           var str='heaao r'; console.log(str[2])// 输出：a; 空格也算一个字符；
        * str.length 代表字符串长度，类似于数组 arr.length；可以用来获取字符串长度；
        * str.charAt(); 返回在指定位置的字符；
            var str="adfertoocd" console.log(str.charAt(5)) //输出：t 
            相当于 str[5]
        * str.charCodeAt(id); 返回索引id 对应的字符的UNICODE;
        * fromCharCode(); 可以根据字符编码获取字符， 但是使用构造函数调用： 
             var str= String.fromCharCode(72); console.log(str) // 输出 H ； UNICODE 表是16进制 需要用OX 开头： fromCharCode(0x2682)
        * concat() 连接两个字符串： var str='hello'; console.log(str.concat('world')); // 输出： hello world; 功能相当于 + 
                        var result = str +'philip';     console.log(result)// 输出：hellophilip; 
                        concat()不改变原字符串，只是把拼接后的字符串返回；
        * indexOf(); 用来检索字符串中是否含有指定内容（从前往后找）： console.log(result.indexOf('p'))// 输出：5； id=5是 字符是 p; 
            -- indexOf() 从左向右，返回第一个指定内容的索引；如果没有 返回 -1; 
            -- indexOf('p',n); 代表从id=n时候开始找字符p，可以指定开始查找的位置；
        * lastindexOf('i'); 该方法作用是返回最后一个字符 i 的索引； （从后往前找）； 找到以后索引值还是从前往后数，索引值不会变；
                       console.log(result.lastIndexOf('i'))// 输出 9 
        * slice(); 切片： 字符串里的.slice()可以从字符串中截取指定内容；
                        var str= 'abcdefghijk'; str.slice(2,4); console.log(str)// 输出： abcdefjhijk; 原数组不变
                        console.log(str.slice(2,4))// 输出： cd (前包后闭)
                        // slice(start,end); 参数为两个，1. 开始位置的索引（包括）；2. 结束位置索引（不包括）
                        -- 如果省略第二个参数，则会截取后面所有的； slice(1);
                        -- 也可以传递负数作为参数，指截取结束点从后面开始数： console.log(str.slice(1,-1))//输出： bcdefghij
        * substring(); 也是可以用来截取字符串，和 slice()类似； 
                                console.log(str.slice(2, 4)); // 输出： cd
                                console.log(str.substring(2, 4)); // 输出： cd
                                console.log(str.substring(4, 2))// 也输出： cd; 自动交换参数位置
                                -- substring(start,end); 两个参数索引，开始和结束位置； 前包后闭
                                --substring() 和 slice() 的区别是： substring()不可以传负数作为参数；
                                --如果传递了赋值，默认为0； substring(1,-1) 相当于 substring(1,0); 
                                -- 而 substring(1,0)由于结束位置参数0 小于开始位置参数1， 则自动交换 转化为 substring(0,1)
        * substr(); 截取字符串；
                                 var str='abcdefg'; console.log(str.substr(1,3))//输出： bcd
                                 -- substr(start,length) 参数start表示开始截取位置索引，length 表示截取长度；
        * split(); 有点像数组里的join() 
          -- split()可以将一个字符串拆分成数组：
              var str='abc,bcd,fcc,hee'; // 如果想用,把str 拆分成数组，则用 split(',')
              console.log(str.split(','))//输出：['abc', 'bcd', 'fcc', 'hee']
              -- split(str); split() 可以传递一个参数，该参数是字符串，并将根据该字符串进行拆分：
                 var str='abbcdaddffdcaeeggann'
                 console.log(str.split('a'))// 输出：  ['', 'bbcd', 'ddffdc', 'eegg', 'nn'] 注意 字符串a 在数组里删去了，因为作为拆分分隔符了；
                -- 如果传一个空串作为参数，则每一个字符都会转为数组中的一个元素；
        * toLowerCase(); toUpperCase(); //改变字符串的大小写；
                  var str = 'abcdef'; console.log(str.toUpperCase())// 输出： ABCDEF
                  var str = 'ABCD'; console.log(str.toLowerCase()) // 输出： abcd
                  -- 都不会影响到原字符串；
11. 正则表达式： 
    - 正则表达式用于定义一些字符串的规则！计算机可以根据正则表达式来检查一个字符串是否符合规则，或者将符合规则部分提取；
        *  正则表达式是一个对象；首先通过构造函数 RegExp() 创建： 
        * RegExp('正则表达式','匹配模式') 需要两个字符串参数: 1. 正则表达式 2. 匹配模式
                            var reg= new RegExp('a'); 
                            console.log(reg) // 输出： /a/
                            console.log(typeof reg) // 输出：object； 证明 reg 是一个 object
        * 使用reg 这个正则检查一个字符串 str 是否复合规则： 
            --正则表达式的测试方法 test() 来检查一个字符串是否复合正则表达式的规则，如果复合，返回 true；否则返回 false
                var str='abc'; var result = reg.test(str); console.log(result) // 输出： true
                var str='bcc'; var result = reg.test(str); console.log(result) // 输出： false
            -- 上述正则表达式可以检查一个字符串中是否含有字符 a ; 只要有a就是true, 正则表达式严格区分大小写；
            -- 匹配模式： 构造函数中可以传递一个匹配模式参数；可以是： i (忽略大小写) g( 全局匹配模式)
                        var reg= new RegExp('a','i'); var str = 'Abff'; console.log(reg.test(str))// 输出 true 

            -- 正则表达式就是找什么就写什么，匹配模式用i 表示忽略大小写；

    - 正则语法：
        * 使用字面量创建正则表达式： 
            --                  var 变量 = /正则表达式/匹配模式；
                                var reg = /a/i;    // 效果等同于： var reg = new RegExp('a','i')
                                console.log(reg) // 输出 object
                                console.log(reg.test('abcd')) // 输出： true
            -- 使用字面量创建更加简单，但是使用构造函数创建，更加灵活；构造函数里传的参数可以是个变量；
                  var str='ef'; var reg = new RegExp(str,'i') 等同于： var reg = new RegExp('ef','i')
            -- 如果找 a 或 b : 
                                var reg = /a|b/ ; // 表示正则表达式寻找 a 或者 b 或者 c

                                       var str = 'acdddf'
                                        var reg = /a|b|c/;
                                        console.log(reg.test(str)) //输出 true
            -- 创建一个正则表达式，来检查一个字符串中是否有字母：
                                         var reg = /[ab]/ 
                                 ** []里面的内容都是或的关系 [ab] == a|b
                                 ** [abcdefg..z] 可以简写成 [a-z]， 代表所有字母；
                                          var reg = /[a-z]/ 表示寻找任意小写字母；
                                          var reg = /[A-Z]/ 表示寻找任意大写字母；
                                          var reg =/[A-z]/ 等同于 var reg = /[A-Z/i  是寻找忽略大小写的任意字母；
                                ** 检查一个字符串中是否含有 abc, adc  或则 aec: 
                                    -- 方法1. var reg = /abc|adc|aec/
                                    -- 方法2. var reg = /a[bde]c/ 表示第一个是a, 第二个是bde随便哪一个，然后第三个是 c
                                ** var reg2 = /[^ab]/  //表示检查字符串除了 ab 是否还有别的；
                                    console.log(reg2.test('abc')) // 返回 true； 因为除了 ab  还有c
                                ** var reg3=/[0-9]/ ； 表示检查是否含有任意数字；
                                ** var reg3=/[^0-9]/ ； 表示检查除了数字是否还有别的；
            -- 字符串和正则相关的方法：
                **  .split()     
                     var str = '1a4b6f8i9'; // 如果想根据任意字母把字符串拆分成数组 用 split()，把正则表达式作为参数传递给split();
                     var result = str.split(/[a-z]/); //输出：['1', '4', '6', '8', '9'] // 这个方法即使不用加 g  全局匹配，也会全都拆了；
                ** .search() ; 可以搜索字符串中是否含有指定内容： 只会查找第一个，即使设置g 全局匹配；
                     var str = 'hello abc hello aec afc'
                     var result = str.search('abc')
                     console.log(result) // 结果输出 6， 因为abc 的索引 a 位置是 6; 功能类似于 .indexOf(); 如果没有 返回 -1; 
                    --  同样 search() 可以接受正则表达式来检查；
                        如果想检查字符串str在是否含有 abc 或者 aec 或者 afc: 
                        var str = 'hello amc hello aec'
                        var result2 = str.search(/a[bef]c/)
                        console.log(result2) // 输出: 16; aec 中的a 位置索引是16；如果没有 返回 -1；
                **  .match(); 找到一个或者多个正则表达式所匹配的内容提取出来；
                      var str = '1a4b6f8i9';
                      var result1 = str. match(/[A-z]/);
                      console.log(result1) // 输出： [a]; 显然只提取了第一个复合条件的 a； 
                      // 默认情况下，match()只返回第一个符合要求的内容，找到后停止检索，可以设置正则表达式为全局匹配模式，这样可以全局寻找匹配；
                      console.log(str.match(/[A-z]/g)) // 输出： ['a', 'b', 'f', 'i']
                      console.log(str.match(/[a-z]/gi)) // 输出： ['a', 'b', 'f', 'i'] 既全局匹配(g），又忽略大小写（i)；
                      ** 可以为一个正则表达式设置多个匹配模式，且顺序无所谓；
                      ** match 会将匹配到的内容封装到数组中返回，即使只查询到一个结果，返回的是数组；
                ** .replace(); 替换， 可以将字符串中的指定内容，替换为新的内容；
                                   
                    -- .replace(str， str2) 需要两个参数: 1. 被替换内容，2. 替换内容；replace()不会影响原结果；而且默认只会替换第一个；
                    -- .replace() 可以接受正则表达式作为参数： 
                                    var str = '1a4b6f8i9'; 
                                    var result= str.replace(/[a-z/,'^_^') 
                                     console.log(result) // 输出：1^_^4b6f8i9 
                                   // 如果想把所有字母换掉，用全局匹配：
                                    var result2= str.replace(/[a-z/g,'^_^') 
                                     console.log(result2) // 输出：1^_^4^_^6^_^8^_^9
                                // 如果字母都不要，则用空串替换；
    - 正则表达式语法： 
        * 通过量词可以设置内容出现的次数；
            -- var reg = /aaaa/ 等同于 var reg = /a{4}/
               {n} 表示正好连续出现n次；
            -- 量词只对它前面的一个内容起作用，/abbb/ 等于 /ab{3}/
            -- 可以用括号实现： /ababab/ 等同于 /(ab){3}/
            --  /ab{1,3}c/ 代表出现a, 然后跟着b b 出现1次到3次，然后跟着c 等同于; /abc|abbc|abbbc/
            --  {m,n} 代表前面内容出现 m  到 n 次
            -- {m,} 代表出现 m 次 及以上；
            -- reg = /ab+c/ + 代表b至少要一个；相当于{1，}
            -- reg = /ab*c/ * 表示0个或者多个 {0，} 有没有都行；
            -- reg = /ab?c/  ? 表示 0个 或者 1 个， 相当于 {0,1}

        * 检查一个字符串中是否以a开头(^)或者结尾($): 
            -- 符号 ^a 代表检查字符串是否以 a 开头；
                         var reg = /^a/ 
                         var str = 'bcad'; console.log(reg.test(str)) // 输出 false
                      
            -- 符号 a$ 代表检查字符串是否以 a  结尾： 
                         var reg = /a$/
                         var str = 'bcad'; console.log(reg.test(str)) // 输出 false
            -- reg = /^a$/ 代表开头必须是a,然后a又做结尾，就是只有一个a； 正则表达式是与关系；
            -- 如果以 a 开头 或者 以 a 结尾 用： reg = /^a|a$/
                       // 练习： 创建一个正则表达式，检测一个字符串是否是一个合法手机号//
                          -- 手机号规则： 11 位， 第一位是1， 第二位是3-9；第三位以后任意9个数字
                           var reg = /^1[3-9][0-9]{9}$/  必须11位数，只能1开头，数字结尾；
                           var phoneNum='13525684485'
                           console.log(reg.test(phoneNum)) //输出 true
        * . 作为元字符，代表任意字符，除了换行和结束符；
            --所以如果要检查一个字符串中是否含有 . :  要告诉浏览器 . 即使单纯的 . ； 通过转义字符 \
                                  var reg = /\./;
                                    var str = 'acb.'
                                    console.log(reg.test(str)) // 输出：true
            -- 如果检查字符串中有没有 \ 则用: 
                                        
                -- \ 在字符串里也是转义字符，如果字符串里表示 \ 也要写  \\
                 var reg = /\\/; var str = 'ab\\c'; console.log(reg.test(str)) // 输出: true;
                console.log(str) // 输出： ab\c
            -- 如果使用构造函数做 var reg2 = new RegExp('\.') 时，由于它的参数是一个字符串，而\是字符串中的转义字符，如果要使用 \ 则需要使用 \\来代替；var reg3 = new RegExp('\\.'); console.log(reg3) // 输出： /\./
            -- \w 表示任意字母,数字，下划线 ; \W 代表除了数字，字母,下划线；
            -- \d 表示任意数字； \D 除了数字
            -- \s 表示空格  \S 表示除了空格；
            -- \b 表示单词边界  \B 表示除了单词边界；child 和 children 的检查； 要检查独立单词 child, 需要用边界 /\bchild\b/ child 需要作为独立单词查找；var reg = /\bchild\b/; console.log(reg.test('some children')) // 输出 ： false
            -- 如果要自动去除字符串前后和中间的空格： 就是使用空串来替换空格： var newstr = str.replace(/\s/g,'') 需要全局匹配
            --如果只去字符串前的空格： var newStr=str.replace(/^\s*/,'') * 代表开头的一个或者多个空格； 
            --如果只去字符串后的空格： var newStr=str.replace(/\s*$/,'') * 代表开头的一个或者多个空格； 
            --如果去字符串前后所有的空格： var newStr=str.replace(/^\s*|\s*$/g,'') * 代表开头的一个或者多个空格； g 代表全局匹配；
        * 邮件的正则表达式： 
            -- 电子邮件格式： abcd@efg.com.cn
                            abcd部分其实可以是任意字母数字下划线 也就是 \w 
                            efg 部分也可以是任意字母数字，最多长度是1
                            .com 部分需要以.开头，不能出现数字，不低于2位，就是任意字母 {2,5}

                            var reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/ 注意 ^ 和 $
            -- 网上有很多常用的正则表达式 哈哈哈

# ============================================= 玩转 DOM =============================================================
               
1. DOM 简介：
    -  文档对象模型 （Document Object Model) 
    - DOM 就是让JS通过其操作网页的； 
         * 文档就是指的网页； 对象是网页里的各个部分； 一切部分皆为对象；使用模型来表示对象之间的关系；这样方便获取对象；（模型如同家谱，或者关系树）HTML DOM 树
        * 节点 node;
            --节点是构成我们网页的基本部分， 网页中的每一个部分都可以称之为一个节点；比如 HTML 标签，
            --节点类型： 文档节点（HTML)； 元素节点（HTML 标签）； 属性节点(元素的属性）；文本节点（标签之间的文字）；相当于四种对象；
        * 取文档内的某个节点，要先从爷爷抓起： 爷爷就是 Document
        * 浏览器为我们提供了文档节点对象，这个对象是window 对象的属性，可以在页面中直接使用，代表整个网页；console.log(document) // 输出整个网页 html
        * 通过获取到对象的id; document 对象有一个方法 叫 .getElementById(); 就是通过id 获取一个元素；
              <button id='btn'>I am a button</button>  document.getElementById('btn'); // 输出： object 这个button 对象：  <button id='btn'>I am a button</button> 
        * 修改对象的文档： btn 有一个属性叫 .innerHTML, 这个属性的属性值对应 “I am a button" , console.log(btn.innerHTML) // 输出： i am a button
        * 我们可以改变这个属性值，来改变btn的文档： 
            btn.innerHTML=" I am still a button" ; 这时候HTML在 btn 的文字就改成了 “ I am still a button" 
        
2. 事件 Event;
    - 事件就是文档或浏览器窗口发生的一些特定的交互瞬间；
        ** JS 与 HTML 之间的交互是通过事件实现的
        ** 对为Web 应用来说，有这些代表性事件： 点击某个元素，将鼠标移动至某个元素上方。按下键盘上某个键，等等；
       
        ** 事件就是用户和浏览器之间的交互行为；
        ** 处理事件： 可以在事件对应的属性中设置一些js代码，这样事件被触发时候这些代码会执行；
                         <button onclick="alert('讨厌，别点我')")>点我</button>
        ** DOM EVENT: onclick(单击); ondblclick(双击)； onmousemove; （鼠标被移动到上面 hover 就反应）; onmouseover; etc.. 
        ** onclick="alert('Danger')" 这种情况下JS 代码和 HTML 内容耦合了，不推荐使用；称为结构和行为耦合，不方便维护，不推荐使用；
        ** 可以为按钮的对应事件绑定一个处理函数来响应事件：当事件被触发时， 函数将被调用（回调函数）；
                        var btn = document.getElementById('btn') // 获取对象  
                        btn.onclick = function(){alert('Danger')} // 为 btn 被click时绑定处理函数；
                        // 单击响应函数，为响应单击事件的函数；如上例
        ** 
3. 文档的加载：
    - 浏览器加载一个页面时，是按照自上向下的顺序逐行加载； 读取一行，运行一行；如果将<script></script>写到页面上面，在代码执行时，页面还没有加载；将JS代码编写到页面下部，就是为了可以在页面加载完毕后再执行JS 代码； 如果想写上面,我们可以找到一个页面加载完成事件，然后在这个完成事件上绑定这些JS 函数；onload 事件可以作为 window 的属性，onload 事件就是在整个页面加载完成之后触发；支持 onload 事件的 JS 对象包含： image, layer, window; 我们就用 window 这个对象， 因为 window 就是整个网页；为window 绑定 onload 事件，然后绑定函数：
      window.onload = function(){JS 代码体}
      // window.onload 作用就是确定回调函数在网页加载完成之后再执行！
      window.onload 事件绑定可以确保我们的代码执行时所有的DOM对象已经加载完毕！
    - 最优方法时将 <script></script> 写在最后面，不用先加载但不执行的情况发生； 不过差距不大；
4. DOM 查询；
    - 通过document 对象调用： 
        * .getElementById(); 通过id 属性获取一个元素节点对象；
          -- .innerHTML 这个属性可以获取到元素内部的html代码； 对于自结束标签(单标签），这个属性没有意义；
          -- 如果需要读取元素节点属性，直接使用 元素.属性名；: 元素.value，id,name..例如：<input class='hello',type='radio',name='gender' value='male'/>
          -- 读取class属性时候不能用 .class 因为class 是保留字，要用 .className
          -- 
        * .getElementsByTagName(); 通过标签名获取一组元素节点对象；返回一个类数组对象，即使查询到的元素只有一个，也会封装到类数组中返回；
           -- var btn01 = document.getElementsByTagName('li')
                   btn01.onclick=function(){
                       for (var i=0; i<btno1.length;i++){
                           console.log(btn01[i].innerHTML)
                       }
                   }
        * .getElementsByName(); 通过 name 属性获取一组元素节点对象；
    - 获取元素节点的子节点：
        * getElementsByTagName() // 通过元素节点调用，而不是 通过 父document节点调用；
          -- 返回当前节点的指定标签名后代节点；
        * childNodes; firstChild; lastChild; 获取当前节点的： 所有子节点，第一子节点；最后一个子节点；这些都是属性 可以 .childNodes 调用
                // 为id 为 btn04 的按钮绑定单级响应函数：查找 # city 下 所有 li  节点: 

                                var btn04 = document.getElementById('btn054')
                                    btn04.onclick = function(){
                                        var city = document.getElementById('city') // 获取 id  为 city  的元素对象；
                                        var lis = city.getElementsByTagName('li') // 在 city 元素对象内找li
                                        for(var i=0; i<lis.length;i++){
                                            console.log(lis[i].innerHTML)
                                        }
                                    }
                // 为 btn05 的按钮绑定单击事件反应函数： 返回# city 的所有子节点：
                                 var btn05=document.getElementById('btn05')
                                 btn05.onclick = function(){
                                     var city =  document.getElementById('city') // 获取 id 为 city 的 节点
                                     var cns5 = city.childNodes           // 返回city 的所有子节点；通过属性读取；
                                     for(var i =0, i<cns5.length; i++){
                                         alert(cns5[i].innerHTML)
                                     }
                                     var cns55=city.children

                                 }
                                 -- childNodes 是一个属性，会获取包括文本节点在内的所有节点！（换行，空格等都是节点！）
                                 -- 根据DOM 标准，标签之间的空白也会当成文本节点！但是 IE8 及一下浏览器不会把空白当子节点；
                                 -- .children 属性 可以获取当前元素的子元素（不是子节点） 子元素就是子标签！（元素即标签）.childNodes 是子节点，包含子元素节点；
             // 为 id 是 btn06 的按钮绑定单击反应函数： 
                                          var btn06 = document.getElementById('btn06') // 获取 id 为 btn06 的元素对象 
                                              btn06.onclick = function() {
                                              // 函数功能1. 返回 # phone的第一个子节点：
                                                var phone = document.getElementById('phone') // 在document 中获取id  为 phone的元素
                                                    var ele1st = phone.firstChild; // .firstChild 是属性，可以用其来查看对象 phone 的第一个子节点；
                                            }   
                                --  .firstChild 属性可以获取到当前元素的第一个子节点， 包括空白文本（空格）； 同理 .lastChild;
                                -- .firstElementChild 属性可以获取当前元素的第一个子元素（不包括空白）// 但是兼容性差，需要 IE9 以上
    - 获取父节点和兄弟节点： 
        * .parentNode 属性可以获取当前节点的父节点： 
            // 返回 id 为 bj 的 父节点： 
                     var bj = document.getElementById('bj');
                     var parentnode = bj.parentNode; //通过 .parentNode 属性来调用父节点；
                     ** .innnerHTML 和 .innerText 
                        .innerText 是获取文本内容 例如： 北京   （返回代码内的文本，自动将标签去除）
                        .innerHTML是获取HTML内容包含标签，例如： <li>北京</li> （返回代码）



        * .previousSibling  属性可以获取当前节点的前一个兄弟节点；.nextSibling 属性可以获取当前节点的下一个兄弟节点： 
            // 返回# android 的前一个兄弟节点： 
               var android = document.getElementById('android')
               var prs = android.previousSibling; // 用属性读取前一个兄弟节点；（节点包含空白文档，空格）
               // .previousElementSibling; 属性则会返回前一个元素兄弟（标签兄弟）// IE8 以下不能用
                   console.log(prs.innerHTML)   
            // 读取 #username的 value 属性值： 
                var um = document.getElementById('username');
                    var value= um.value // 读取 um 对象的属性value的值；文本框 (input) 的 value 属性值就是文本框输入的内容 
                   // 设置 #username 属性 value 的值： 
                      um.value = '新属性值' // 设置value 的新值
            // 返回#bj 的文本值： 
                var bj = document.getElementById('bj')
                 var text = bj.innerText;// 获取文本值
                 var text = bj.innerText; // 也是获取文本值，如果没有标签的话；
                 var text = bj.firstChild.nodeValue   // 元素节点，和文本节点之间的关系是 父子关系；例如'北京' 和 元素： <li>北京</li>
                  ** 对于文本节点，nodevalue属性的值是文本内容！

5. DOM 全选练习： 
    - 点击按钮后，四个选择框全部选中： 
            为全选按钮绑定单击响应函数： var checkedAllBtn = document.getElementById('checkedallbtn');
                                           checkedAllBtn.onclick=function(){
                                               // 设置4个多选框变成选中状态： 首先获取它们， 它们有共同的name  叫 items: 
                                                var items = document.getElementsByName('items')
                                                //把4个选中元素变成选中转态，遍历 Items ,逐个设置： 
                                                for(var i=0;i<items.length;i++){
                                                    //将每个 item 变成选中状态：
                                                    // input 有很多type, 其中一个叫 checkbox; checkbox 对象的属性有一个叫 checked; 
                                                    // .checked 属性会设置或者返回 checkbox 是否应被选中；checkboxObject.checked=true|false;
                                                    // 设置选中： 
                                                    items[i].checked=true;
                                                    // 全不选就改成： 
                                                    items[i].checked=false;
                                                    // 反选，点击按钮后，选中的变没选中，没选中的变选中： 
                                                    if(items[i].checked){
                                                        items[i].checked=false;
                                                    }else {
                                                        items[i].checked=true;
                                                    }
                                                    // 或者： items[i].checked=!items[i].checked (取反)
                                                    //提交：点击按钮以后，将所有选中内容弹出：（弹出的是value 属性值）
                                                    sendBtn.onclick=function(){
                                                        for(var i=0;i<items.length; i++){
                                                            if(items[i].checked){

                                                            alert(items[i].value)
                                                            }
                                                        }
                                                    }
                                                        }
                                                        }     
                                         var checkedAllBox=document.getElementById('checkedall')
                                             checkedAllBox.onclick=function(){
                                                 alert(this===checkedAllBox);//返回 true, 表示 对象 checkedAllBox 以方法的形式调用了 匿名回调函数，这个函数里有内置的属性 this, this 的值就是这个调用对象本身！
                                                 所以全选/全不选可以用： 
                                                 for (var i=0; i<items.length;i++){
                                                     items[i].checked=this.checked; // 让4个选项同时和全选按钮的checked 状态同步，用this 很妙
                                                 }
                                             }                 



    - DOM 查询的其他方法： 
        --  获取 body ： var body = document.getElementsByTagName('body')[0] // 因为返回值是类数组，所以要加索引[0];
            * 在document 对象中有一个属性就叫body, 属性值就是body； 可以直接 var body = document.body
            * document里还有documentElement 属性： var ele = document.documentElement // 保存的是 html 根标签；
            * var all = document.all; all.length = 6; all 代表页面中所有的元素；相当于： var all = document.getElementsByTagName('*')
            // all 已被弃用。。。。等
        -- 根据元素的 class 属性值查询一组元素节点对象： 
            * var boxs = document.getElementsByClassName('box') // 获取一组 class 属性值为 box 的元素节点对象；
            * var divs = document.getElementsByTagName('div') // 获取 document 中所有的 div；
            * var boxdivs = boxs.getElementsByTagName('div') // 只获取对象 boxs 中的 div ; 或者 类似 .box1 div (CSS 选择器)
        -- querySelector方法： （可以根据CSS 查询器作为参数查询）
            * document.querySelector() // 需要一个选择器的字符串作为参数，可以根据一个CSS 选择器查询一个元素节点对象：
                -- var boxdivs = document.querySelector('.boxs div) // 功能等同于上面查询 boxs 对象里的 div
                -- var boxs = document.querySelctor('.box') // 值返回一个 class 属性值为box 的元素节点对象，如果满足条件的有多个，name它只会返回第一个！ 不同于上面返回一组 document.getElementsByClassName('box')，相当于：document.getElementsByClassName('box')[0]
                --  document.querySelectorAll('.box') // 这样 就可以返回所有class 属性为 box的元素，相当于： document.getElementsByClassName('box'), 返回的是类数组，即使只查找到一个；
                -- var box = document.querySelctor('#box') // 同样可以根据 id 名称查找；
6. DOM 的 增删改： 
    - DOM 对象的方法：
        * .appendChild()；//把新的子节点添加到指定父节点；(增)
            -- 创建一个'广州'节点，添加到#city 下： 
              // 创建广州节点： 
               * step1. 创建 <li></li> 元素节点：这个方法时document 对象的，所有调用要： document.createElement();
                 -- .createElement(); 方法可以创建一个元素节点对象，它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并将创造好的元素节点对象作为返回值返回：
                     var li = document.createElement('li') // 创建 <li></li> 元素节点对象，也就是标签名对象；
                     var div = document.createElement('div') // 创建 <div>></div> 元素节点对象，也就是标签名对象；
                     var ul = document.createElement('div') // 创建 <ul>></ul> 元素节点对象，也就是标签名对象；

              
              * step2. 创建广州文本节点；利用 document.createTextNode() 方法；
                    --  .createText() 方法可以创建一个文本节点对象，需要一个文本内容作为参数；并将节点对象返回； 例如：
                                    var gz = document.createTextNode('广州')
               
             *  step 3: li 元素标签对象 和 gz 文本节点对象应该是 父子关系； 认亲： 将 gz 设置为 li 的子节点，用 .appendChild() 方法； 
                        --  父.appendChild(子) 方法可以向一个父节点传递一个子节点；
                              li.appendChild(gz) // 这样就叫把广州作为子节点传递给了父节点 li
                      
             * step4: 创建完li之后， 要把 li  作为子节点，附加到父节点 # city 下： 
                                                var city = document.getElementById('city');
                                                    city.appendChild(li)
             * 上述方法也可以通过属性 innerHTML 添加属性值实现： 
                  --  首先找到广州的父节点元素： city
                  -- 为父节点city 增加新的 innerHTML 属性值： 
                      city.innerHTML+='广州' // 这样同样实现了将子节点广州添加到city 父子节点内
                      // 一般我们会两种方式结合使用； 例如先创建标签元素 li, 然后向li中直接设置innerHTML： 
                                               li.innerHTML='广州'
                                               然后： city.appendChild(li)
            // 将'广州'节点插入到#bj 前面： 
                *  step1. 创建一个广州节点： 如上例；广州节点为 li
                *  step2. 获取 id  为 bj  的节点; var bj = document.getElementById('bj');
                *  step3. 把广州插入到北京前面： 
                     // .insertBefore(); 方法可以在指定的子节点前面插入新的子节点：这个方法一定是父节点调的，作用于两个子节点: 
                         -- // 首先获取父节点 city: 
                            var city  = document.getElementById('city') 
                            // 父节点来调用方法： insertBefore(); 
                            // 语法： city.insertBefore(newChild,refChild) // 把newChild 插入到 refChild 前面；
                              city.insertBefore(li,bj);// 实现了把子节点广州li 插入到另一个子节点北京bj 前面；
            // 使用'广州'节点替换 #bj 节点： 
                   -- .replceChild() 方法可以通过父节点调用,可以将指定的子节点，替换已有的子节点；
                     // 找到 广州 北京 共同的父节点 city 后调用此函数方法 （广州，北京互为兄弟节点，都是 city  的子节点）
                         city.replaceChild(newChild,oldChild) // 新的代替旧的
                         city.replaceChild(gz,bj)
            // 删除北京节点 #bj 
                        -- 删除子节点， 意思还是通过父节点调用 removeChild() 来删除指定子节点；
                                var bj = document.getElementById('bj'); // 获取子节点北京；
                                var city = document.getElementById('city') // city 是北京的父节点
                                city.removeChild(bj)
                        --  如果不知道北京的父节点，还要我删除北京，知道北京了，我们可以顺藤摸瓜，找到北京的父元素： 
                             * .parentNode 可以作为子节点的属性，通过属性可以查找子节点的父节点： 
                                                var bjparent = bj.parentNode;
                                                 bjparent.removeChild(bj) // 通过父节点调用removeChild 删除北京。。。我找我爸杀了我..


            // 设置#bj 内的HTML 代码： 
               var bj = document.getElementById('bj')
               bj.innerHTML='昌平'
          
          
        * 练习： 
            -  点击超链接delete以后，删除员工的信息： (是个表，每一行是员工信息，每行最后一个data  是 delete  超链接)
                // step1. 获取所有超链接： 
                   var  allA = document.getElementsByTagName('a');
                // step2. 为每一个超链接绑定一个单击响应函数： 
                   for(var i=0; i<allA.length; i++){
                       allA[i].onclick=function(){
                           /* 点击超链接以后，超链接会跳转页面，这是超链接的默认行为；但是我们不希望它跳，
                            如果要取消默认行为，可以通过在响应函数的最后，return false 来取消默认行为；
                            点击超链接以后，要删除超链接所在的那一行信息：
                            响应函数里面有一个 this, this 就是指的调用响应函数的对象，这里是 allA[i]; 点谁，this 就是谁；
                            如果我们想通过超链接a 或者 allA[i] 获取到一行的节点，可以利用父子关系： 超链接allA[i]和它所在的行 td 是父子关系，td 和 tr 是父子关系。
                             tr 就是 allA[i].parentNode.parentNode  */
                             // 获取当前的 tr
                             
                               var tr = this.parentNode.parentNode // 获取 allA[i] 的 爷爷节点 tr; 
                                
                             
                                // 如果删除之前，想确认弹出提示框， window 对象的方法有： alert(); prompt(); 还有一个 confirm() 
                                // confirm() 方法显示一个带有消息以及确认和取消按钮的对话框； 该函数需要一个字符串作为参数，该参数将作为提示信息显示在提示框，
                                // 该函数会返回一个布尔值，
                                   
                                  var flag =  confirm('确认删除吗？')

                                //  如果确认删除，则删除当前的 tr: 自杀

                                if(flag){

                                 tr.parentNode.removeChild(tr) ; // 当前 tr  自我删除。。。
                                }

                               // 如果要升级提示框的确认信息 比如： 确认删除 tom 吗？ 我们需要一个动态的参数去动态修改确认信息提示框；
                                // 每一个 tr 里的第一个 td 里含有员工名字，则可以通过该  var person = tr.getElementsByTagName(td)[0].innerHTML, 则会获取改行第一个单元格里的名字：
                                // 更新提示框提示信息： 

                                confirm('确认要删除'+person+'吗？')
                       }

                       return false; 
                   }

            - 添加： 点击 表单的submit 按钮以后，将员工的信息添加到上面员工表中：
                    第一步： 为提交按钮绑定单击响应函数
                     var addEmp = document.getElementById('addEmpButton');
                         addEmp.onclick = function(){
                             // 点击按钮后先获取到用户填写的信息，然后提交到员工表：
                             // 一共有三个文本框，对应 name, email, salary; 如果要获取 name 的输入值，文本框的 .value 属性就是指输入的文本值，首先获取这个 name 文本框对象 通过id; 
                             var nameobj = document.getElementById('emName'); // 获取 name 这个文本框对象；
                             // 如果要得到文本框的内容 则 var name = nameObj.value;
                             同理 email, 和 salary ： 
                             var email = document.getElementById('email').value;
                             var salary = document.getElementById('salary').value;
                             // 接下来是将获取的信息，添加到员工表，员工表需要先创建一个 tr, 然后把 tr 添加到 员工表；

                             var tr = document.createElement('tr)
                             // 创建4个td， 在上面这个 tr  内： 
                             var nameTd = document.createElement('td');
                             var emailTd = document.createElement('td');
                             var salaryTd = document.createElement('td');
                             var deleteTd = document.createElement('td');
                             // 创建一个超链接元素a, 为第四个 td 用；

                             var a = document.createElement('a')
                             // 因为 a 是超链接，需要给 a  添加一个地址属性：
                             a.href = 'javascript:;' // 这个超链接效果等同于， return  false ；


                             // 创建文本节点 （整个流程从外往里步骤） 
                             var nameText = document.createTextNode(name)
                             var emailText = document.createTextNode(email)
                             var salaryText = document.createTextNode(salary)
                             var deleteText = document.createTextNode('delete')
                             // 每一个节点都创建完毕，现在需要搭建在一起： 
                             // 将文本添加到 td 中： 
                             nameTd.appendChild(nameText);
                             emailTd.appendChild(emailText);
                             salaryTd.appendChild(salaryText);
                             // 向 a 中添加文本： 
                             a.appendChild(deleteText);
                             // 将a 添加到 td 中： 
                             deleteTd.appendChild(a);
                             // 4 个 td 已经组装完毕，并且都装配了 文本节点，现在要把 4 个 td  封装到 tr 中 ：
                             tr.appendChild(nameTd);
                             tr.appendChild(emailTd);
                             tr.appendChild(salaryTd);
                             tr.appendChild(deleteTd);
                             // 最后一步： 要把 tr 添加到员工表中：
                             // 首先获取table:
                             var table = document.getElementById('empTable');
                             // 给table  添加 tr: 
                             table.appendChild(tr); // 浏览器还默认给了一个 tbody ，关系是： table>tbody>tr>td; 

                             //  上述方法如果在 table 直接添加 tr ,则新添加的 tr 和 tbody 会成为兄弟关系，这样对以后做 CSS 不利，
                             // 我们推荐在 tbody 这一级添加子元素 tr; 但是HTML 里面不会显示 tbody， 只有内存里有 tbody；所以我们可以先获取 table 中的 tbody: 
                            var tablebody = table.getElementsByTagName('tbody')[0] // 返回的是数组，所以加索引，即使只有一个元素在数组里
                             // 这样我们在 tablebody 里添加子元素 tr  会更合理： 
                                tablebody.appendChild(tr)
                            // 新加的行中 delete 单元格依然还没有绑定单击响应函数，因为之前绑定的是之前一开始加载的行， 后加的行中的delete  要重新绑定单击响应函数： 
                            a.onClick = function(){  allA[i].onclick=function(){
                         
                               var tr = this.parentNode.parentNode // 获取 allA[i] 的 爷爷节点 tr; 
                                                            
                                  var flag =  confirm('确认删除吗？')

                                //  如果确认删除，则删除当前的 tr: 自杀

                                if(flag){

                                 tr.parentNode.removeChild(tr) ; // 当前 tr  自我删除。。。
                                }

                                confirm('确认要删除'+person+'吗？')
                       }

                       return false; 
                   }
                            }
                        // 可以单独创建一个单击响应删除函数，然后绑定： 

                        function del(){
                            
                               var tr = this.parentNode.parentNode // 获取 allA[i] 的 爷爷节点 tr; 
                                                            
                                  var flag =  confirm('确认删除吗？')

                                //  如果确认删除，则删除当前的 tr: 自杀

                                if(flag){

                                 tr.parentNode.removeChild(tr) ; // 当前 tr  自我删除。。。
                                }

                                confirm('确认要删除'+person+'吗？')

                        }
                        // 绑定： 直接就是 object.onClick = del; // 注意不可以用 del(); del() 是调用，要赋值方法对象给object.onClick = del ; 
                             -----------------------------------------------------------------------------
                            //  优化方法： 充分利用 innerHTML;
                            // 本质是向 tbody 里面添加一个 tr ; 创建好 tr 后，tr  是空的， 我们可以直接向创建的新的空tr中添加 HTML ： 
                            tr.innerHTML = '<td>+name+</td>'+
                                            '<td>+email+</td>''+
                                            '<td>+salary+</td>''+
                                            '<td><a href = 'javascript:;'>delete</a></td>'
                            // 为 delete  绑定函数： 获取 a 元素： 
                               var a = tr.getElementsByTagName('a')[0]
                               a.onclick = del ;
                         }
                                

                       
                      // allA[i] 用法问题： 

                      var allA = document.getElementsByTagName('a'); 
                      // 对每个超链接进行函数绑定： 
                      for (i=0; i<allA.length; i++){
                          // for 循环会在页面加载完成之后，立即执行； 而响应函数是在超链接被 onclick 之后回调执行； 
                          // 当响应函数执行时候，for 循环早已执行完毕，i 从 0  到 3， 然后 all[i].onclick=fun(){}只能看到 i= 3, 如果只有 0,1,2 三个超链接，则回调函数返回 undefined
                          allA[i].onclick = fun(){
                              alert(allA[i]) // 返回 undefined
                        
                          }
                      }
            - 操作内联样式： （上面都是操作 HTML,现在使用DOM操作 CSS) 
                
                * 通过 元素.style.样式 = "样式值"
                    // 点击按钮btn01以后，修改 box1 的大小： 
                    // 获取 box1: 
                     var box1 = document.getElementById('box1');
                     // 为按钮绑定单击响应函数： 
                    var btn01 = document.getElementById('btn01');
                    btn01.onclick = function(){
                        // 修改 box1 宽度： 
                        /* 通过JS 修改元素的样式语法： 元素.style.样式名 = 样式值 */
                        box1.style.width = "200px"; // 样式值需要是 字符串；
                        // 注意： 如果CSS的样式名中含有 - （background-color),这种名称在JS中是不合法的，需要将这种样式名修改为驼峰命名： 去掉- ,将后面单词首字母大写： backgroundColor;
                        box1.style.backgroundColor = "yellow" // 可以查看W3S 文档看看CSS里样式语言和JS中样式语言的关联；
                    }
                    // DOM 控制台改的是内联样式，不是样式外联的内容，内联样式有较高的优先级，所以JS 改的样式可以立即显示，如果在样式外联CSS 中 加了 ！important; 则加 !important 的样式拥有最高级,JS DOM 也无法改变覆盖 带有 ！important 标志的 CSS 语句，将导致使JS 修改样式失效，尽量不要使用 !important 在CSS 中；

                * 读取元素的内联样式: 元素.style.样式名；
                    // 点击按钮 btn02后读取元素box1的样式： 
                        var btn02 = document.getElemntById('btn02');
                         btn02.onclick = function(){
                             console.log(box1.style.width) // 输出样式 width 的值： 200px； 这些值都是带 px， 不能直接计算，要 parseInt(width);防止拼串
                         }
                    // 注意： 元素.style.样式名 方法只能读出内联样式的值；设置的也是内联样式的值；无法读取样式表（CSS表）中的样式

                * 读取元素当前的样式： 语法： 元素.currentStyle.样式名； 样式名是驼峰命名格式；// 只有 IE 可以兼容，谷歌chrome不兼容；
                    // 点击按钮 btn03 后读取元素box1的 width 样式： 
                        var btn03 = document.getElemntById('btn03');
                         btn03.onclick = function(){
                             var box1 = document.getElementById('box1')
                             // 如果样式是内联样式；则可以： 
                             console.log(box1.style.width)
                             // 如果样式是样式表中的 样式，可以通过：
                             console.log(box1.currentStyle.width) // .currentStyle 不是专门读取内联或者样式表的，是统一读取当前样式的，不管是内联还是样式表的；谁在生效就获取谁；
                             // 注意： 在其他浏览器中可以使用 .getComputedStyle() 这个方法来获取元素当前的样式； 这个方法是 window 的方法，可以直接使用：
                             // .getComputedStyle() 需要两个参数： 第一个： 要获取样式的元素，第二个： 可以传递一个伪元素，一般都传 null; 函数会返回一个对象： 

                             var obj = getComputedStyle(box1,null) 
                             console.log(obj) // 输出：一个对象中封装了当前元素对应的样式，
                             console.log(obj.width) // 输出 box1 的 width  样式值；颜色输出 rgb 值；如果样式没有设定，可以获取真实值，而不是默认值（比如 auto), 但是该方法不支持IE8及以下浏览器；
                             }
                             // 即兼容IE8又兼容其他浏览器的方法： 
                             // 通过 .currentStyle 和 getComputedStyle() 读取到的样式都是只读的，不能改，只能看。。。 如果要修改，必须通过 obj.style.width = '200px' 这类方法； 
                             // 定义一个函数，来获取指定元素当前的样式： 第一个参数是要获取样式的元素 obj; 第二个是 样式名；
                              
                             function getstyle(obj,name){
                                // return  getComputedStyle(obj,null)[name]; // name 是个变量，不能.name， 不然写死了 // 正常浏览器方式： IE8 不支持； 
                                //  return obj.currentStyle[name];// IE8 方式；
                                // 综合起来： 先判断是否有 getComputedStyle 方法： 
                                 if (window.getComputedStye){
                                     return  getComputedStyle(obj,null)[name]; // getComputedStyle 是全局方法，也就是 window 的属性， 不加 window  直接判断，IE8 会报错， 变量和属性区别就是： 如果变量没找到，返回错误 ; 如果属性没找到，不会报错，只会返回 undefined, 布尔值为0，这样 if 就可以用了，IE8 就不会报错了。。

                                 }else {
                                     return obj.currentStyle[name];// IE8 方式；
                                 }

                             }
                             // 或者写成三元运算符： 
                             return window.getComputedStyle? getComputedStyle(obj.null)[name]:obj.currentStyle[name];

                * 其他样式相关的属性：
                    -- element.clientWidth; element.clientHeight; 这两个元素属性可以获取元素的可见宽度和可见高度；只读的，不能修改； 改只能用 obj.style.样式名='样式值'
                       // 点击 #btn01 按钮，查看 #box1 的可见宽度： 
                            var btn01 = document.getElementById('btn01');
                            btn01.onclick = function(){
                                var box1 = document.getElementById('box1');
                                console.log(box1.clientWidth) // 返回 100; 而不是 100px; 返回值是数值类型，可以直接计算；（client width 返回的不是 纯 width； 而是包含 padding ； 包括内容区加内边距；如果 Padding 是 10px; 返回 120px; 这个值是计算来的 宽度加内边距
                                    // 这些属性都是只读的，不能修改。。
                            }
                    -- element.offsetWidth; 和 element.offsetHeight; 可以获取元素整个的宽度和高度；包括： 内容区，内边距 和 边框； 
                    -- element.offsetParent； 定位父元素：
                            // 可以用来获取当前元素的定位父元素： （不同于父node) 如果没有开启 relative,在这里父元素可以是 body 爷爷
                            // 获取到离我们当前元素最近的开启了定位的祖先元素（比如relative) ,只要position 值不是 static， 都是开启了定位；
                            // 如果都没有定位，会找到爷爷 body; 

                             var op = box1.offsetParent;
                             console.log(op)； // 
                    -- element.offsetLeft; element.offsetTop; 获取当前元素相对于其定位元素的水平和垂直偏移量 （相对于 offsetParent 的偏移量）
                    -- element.scrollHeight; element.scrollWidth; clientHeight 是目前可以看见的区域； scrollHeight 是通过滚动条可以全部看见的滚动区域高度；宽度同理；
                    -- element.scrollLeft; element.scrollTop; 获取的滚动条滚动的距离（水平或竖直距离）
                     // box1.scrollHeight - box1.scrollTop == box1.clientHeight 成立时，证明垂直滚动条已经滚动到最底；水平方向同理；
                     // onscroll 事件将会在滚动条滚动式触发： 
                       var p = document.getElementById('infor');
                        p.onscroll = function(){
                            if  (p.scrollHeight - p.scrollTop == p.clientHeight){
                                //判断滚动条已经滚动到底了， 注册按钮可以选中了
                                var btn = document.getElementById('submit');
                                btn.disabled = 'false' // checkbox.disabled 中 .disabled 数一个属性，可以设置或者返回该 checkbox 是否应该被禁用；不禁用，设置为 'false'; 

                            } 


                        } // 为滚动条p绑定一个onscroll 事件反应函数；当滚动条滚动式，函数触发执行；
7. 事件对象 Event: 
    -  事件对象就是： 当事件的响应函数被触发时，(事件函数被绑定后，函数被调用时都是浏览器调的，)浏览器每次都会将一个事件对象作为实参，传递给响应函数； 
        -- 我们可以先给函数定义一个形参 event: 例如 .onclick = function(event){
                alert('event') // alert内容就是 onclick 这个事件对象； 形参可以叫event 也可以叫e， 传递进的实参都是事件对象； 即使不定义形参，也会传递事件对象以实参形式；
            }
        -- 在这个事件对象中，封装了当前事件相关的一切信息，比如鼠标的坐标，比如键盘哪个按键被按下，还有鼠标滚轮状态等；
            
       
        * 事件实现功能： 当鼠标在 areaDiv中移动时，showMsg中显示鼠标的坐标： 
          <div id = 'areaDiv'></div>
          <div id = 'showMsg'></div>
          window.onload = function() {
            // 获取两个div;
            var areaDiv = document.getElementById('areaDiv')
            var showMsg = document.getElementById('showMsg')
                // 先得知道鼠标是否在 areaDiv 中移动： 有一个事件叫 onmousemove; 该事件将会在鼠标在元素中移动时被触发：
                // 给areaDiv绑定该鼠标移动事件：
            areaDiv.onmousemove = function(event) {
                // 在showMsg中显示鼠标坐标
                // 事件对象： 
                var x = event.clientX;  
                var y = event.clientY;
                // IE8 不支持（没有传递实参事件），IE9 以上和其他浏览器都支持；
                // 在IE8及以下浏览器中 event 是作为全局对象，依附于 window； 要用： alert(window.event)  var x = window.event.clientX
               // 先判断 event 是否存在，如果不存在设定为 window.event:这样可以解决事件的兼容性问题
               event = event || window.event  // 返回那个是 true 的值，或关系运算符；
                // 在showMsg 区域显示坐标信息： 直接设定 innerHTML           
                showMsg.innerHTML = 'x=' + x + ',' + 'y=' + y
            }

        }

          }
    - 练习： div 跟着鼠标移动： 
        * 希望鼠标可以拖拽 div 移动；
              <div id="box1"></div>
        // 使 div 跟随鼠标移动：
        window.onload=function(){
            // 首先指定鼠标是否动没动，用 .onmousemove 事件，绑定事件给 #box1
            var box1 = document.getElementById('box1')
            box1.onmousemove = function(event){
                // 获取鼠标的坐标：
                event = event || window.event; // 解决兼容性问题
                var x = event.clientX; // 水平坐标
                var y = event.clientY; // 数值坐标
            // 更改#box1 的位置， 设置#box1的偏移量：

                    box1.style.left = x+'px'; // 需要加上 px拼串, 因为 x,y 是数值；
                    box1.style.top = y+'px';


            }
               // 上面问题时往左走往右走不动了；因为这个事件是给 #box1 绑定的，当移动到#box1 区域外，onmouse 事件就不被绑定了；
                    // 所以要给整个文档绑定 onmouse ：
                    document.onmousemove = function() {
                        var box1 = document.getElementById('box1')
                        box1.onmousemove = function(event) {

                            //获取鼠标的坐标：
                            event = event || window.event; // 解决兼容性问题
                            var x = event.clientX; // 水平坐标
                            var y = event.clientY; // 数值坐标
                            // 更改#box1 的位置， 设置#box1的偏移量：

                            box1.style.left = x + 'px'; // 需要加上 px拼串, 因为 x,y 是数值；
                            box1.style.top = y + 'px';

                        }
                     //    注意 clientX 和 clientY是用来获取鼠标在当前的可见窗口的坐标； 鼠标坐标总是相对于可见窗口；如果有滚动条，滚动条滚动后，鼠标 和 #box1 会产生距离；
                     // 但是 div 的偏移量是相对于整个页面的，鼠标和 div 的相对对象不同，所以出现了偏差；
                     //   这样除了 clientX 之外还有一个 pageX 坐标，可以获取鼠标相对于当前页面的坐标；但是 IE8 及以下不支持；
                    
    - 事件的冒泡：
        *  准备工作：
                   html:  
                             <div id="box1">我是box1
                                <span id="s1">我是span</span>
                            </div>
                   style: 
                             #box1 {
                                    width: 200px;
                                    height: 100px;
                                    background-color: yellow;
                                }
                                
                                #s1 {
                                    background-color: red;
                                }
                    script:       window.onload = function90{

                                    // 为 s1 绑定一个单击响应函数：
                                    var s1 = document.getElementById('s1');
                                        s1.onclick = function(){
                                            event = event || window.event;
                                            event.cancelBubble = true
                                            alert('我是span的单击响应函数')

                                        }
                                    // 为#box1 绑定单击响应函数：
                                     var box1 = document.getElementById(box1');
                                        box1.onclick = function(){
                                            alert('我是box1的单击响应函数')
                                    // 为 body 也绑定一个单击响应函数： 
                                      document.getElementsByTagName('body')[0].onclick = function(){
                                          alert('我是body 的单击响应函数')
                                      }

                                        }
                                      }             
                              // 上面函数中 span 是 #box1 的子元素，单击了 span， 首先弹出 span 的响应函数，然后再弹出 #box1的响应函数，最后弹出 body 的响应函数； 这就是事件的冒泡；从里向外依次触发相同的事件 onclick，然后各自调用回调函数；（由里及表）、
        * 所谓的冒泡就是事件的向上传导，当后代的元素上的事件被触发时候，其祖先元素的相同事件也会被触发；
            -- 在开发中，大部分情况下冒泡都是有用的；
            -- 如果不希望事件发生冒泡现象，可以对事件对象进行取消冒泡：  
                // 首先找到 event: 
                    var event = event || window.event; 
                // 取消冒泡： 可以将 event  的属性 cancelBubble 的属性值设置为 true,这样事件就不会冒泡了；

                    event.cancelBubble = true; 
 
  
     - 事件的委派或继承： 
          指将事件统一绑定给各元素的共同租元素，这样当后代元素上的事件触发时候，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件； 利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能；
        -- 准备工作： 
                    html>body:
                                        <ul id="u1">
                                            <li><a href='javascript:;' class = "link">超链接1</a></li>
                                            <li><a href='javascript:;' class = "link">超链接2</a></li>
                                            <li><a href='javascript:;' class = "link">超链接3</a></li>

                                        </ul>
                    script: 
                                    window.onload = function() {
            // 单击按钮 #btn01后添加超链接：
                        var btn01 = document.getElementById('btn01');
                        btn01.onclick = function() {
                                // 创建一个 li： 
                                var li = document.createElement("li");
                                li.innerHTML = "<a href='javascript:void(0) class = 'link''>新建超链接</a>"
                                    // 将li 添加到ul 中： 
                                var u1 = document.getElementById('u1');
                                u1.appendChild(li)
                        // 但是新加入的超链接都还没有绑定单击响应函数；后来的超链接需要继续绑定：



                            }
                            // 为每一个超链接都绑定一个单击响应函数：这种操作比较麻烦，只能为已有超链接设置事件；
                            // var allA = document.getElementsByTagName("a");
                            // for (var i = 0; i < allA.length; i++) {
                            //     allA[i].onclick = function() {
                            //         alert('我是 a 的函数')
                            //     }
                            // }
                            //-- 我们希望仅绑定一次事件就可以应用到多个元素上，即使这个元素是后添加的；
                            // 我们需要将事件绑定给这些元素所共同的父元素（祖先元素）， 在这里我们可以绑定给#u1元素（父元素）：
                        u1.onclick = function(evt) {
                            evt = event||window.event

                            // 如果触发事件的对象是期望的元素则执行，否则不执行，比如我们想单击到各个li超链接时候才执行（所有超链接的 calss 都是 link ；可以先判断事件是否是由link 触发的：
                            // 利用this，在这 this代表 #u1， 因为函数时 #u1 绑定的，关键是怎么查谁触发了事件；我们有一个事件的属性： target; event.target会返回触发事件的对象；如果点 li, target 就是 li; 
                            // 
                                 if(evt.target.className == 'link'){

                                alert('我是u1的函数') // 根据冒泡规则，点击 li 也会触发函数弹出 '我是u1的函数'
                                 }

                            }
                            // 利用冒泡原则，给父元素绑定的函数，子元素都会继承，这就是事件的委派
                        }
    - 事件的绑定： 
        -- 准备对一个按钮 btn01 绑定两个函数： 
           HTML>body: 
                              <button id="btn01">点我一下</button>
          <script>:  
                                window.onload = function() {
                                    // 点击按钮 btn01 响应函数：

                                    var btn01 = document.getElementById('btn01')
                                    btn01.onclick = function() {
                                        alert('第一个绑定')
                                    }
                                    btn01.onclick = function() {
                                        alert('第二个绑定')
                                    }
                                    

                                }
                // 上面的执行结果是点击按钮后只弹出：'第二个绑定'； 说明后面的函数把前面的覆盖了；
                 * 使用 对象.事件=函数 的形式绑定响应函数，只能同时为一个元素的一个事件绑定一个响应函数，不能绑定多个，如果绑定多个，则后面的会覆盖掉前面的函数；
        -- 第二种绑定函数的方法： addEventListener(); 为一个元素的相同事件（比如 click) 同时绑定多个回调响应函数；
             事件触发时候，多个函数会按照绑定顺序执行；
            * btn01.addEventListener();需要两个参数： 第一个是事件字符串，不要加 On； 第二个是： 回调函数；当事件触发时，该函数被调用；第三个参数是：是否在捕获阶段触发，需要一个布尔值，一般都传 false:
               btn01.addEventListener('click',function(){
                   alert('1')
               },false)
                btn01.addEventListener('click',function(){
                   alert('2')
               },false)
               // 这样就会一次调用函数，弹出 1 再弹出 2

            * addEventListener() 可以添加绑定多个函数，并且这些函数在事件触发时候可以依次回调执行；// 该方法被 IE9+ 和其他浏览器支持
            // IE8及以下版本可以利用： obj.attachEvent('click',function(){alert('1')}); 后绑定，先执行；

    - 事件的传播： 
        -- 准备工作： 
           HTML>body: 
                                    <div id="box1">
                                        <div id="box2">
                                            <div id="box3"></div>
                                        </div>
                                   </div>
            style:
                                        #box1 {
                                        width: 300px;
                                        height: 300px;
                                        background-color: red;
                                             }
                                    
                                    #box2 {
                                        width: 200px;
                                        height: 200px;
                                        background-color: yellow;
                                          }
                                    
                                    #box3 {
                                        width: 100px;
                                        height: 100px;
                                        background-color: green;
                                         }
            script: 
                                window.onload = function() {
                                // 分别为三个 div 绑定单击响应函数；
                                var box1 = document.getElementById('box1');
                                var box2 = document.getElementById('box2');
                                var box3 = document.getElementById('box3');
                                box1.addEventListener('click', function() {
                                    alert('我是1的函数')
                                }, false)

                                box2.addEventListener('click', function() {
                                    alert('我是2的函数')
                                }, false)

                                box3.addEventListener('click', function() {
                                    alert('我是3的函数')
                                }, false)
                            }
            -- 上面为三个 box 都绑定了单击响应函数，当我们点击 box3时候，三个绑定函数从里到外依次执行，分别弹出 1,2,3； 本质是冒泡规则使 click 事件一直上升到最高级 box1， 这样各个级别的响应函数分别被触发，弹出1,2,3； 这种现象就是事件的传播；
            // 微软公司认为事件应该是由内向外传播；也就是事件触发时，先触发当前元素的响应函数，然后再向当前元素的祖先元素传播；（事件冒泡）
            //倒闭的网景认为：事件应该从外向里传递，事件首先触发元素最外层的祖先元素，然后由外向内传播给后代；（事件捕获） 很奇特。。。
            // 最后W3C综合了两个公司方案，将事件的传播分为了三个阶段： 
                  1. 事件捕获阶段： 在此阶段，由祖先元素向目标元素进行事件捕获，但是默认此阶段不会触发事件。。。
                  2. 目标阶段： 目标阶段一直持续到最内层触发对象；一旦捕获到目标元素，捕获结束，并开始在目标元素上执行事件...
                  3. 冒泡阶段： 事件在目标阶段开始触发执行后继续传播冒泡给祖元素；（执行阶段还是冒泡的，微软建议）
           // 如果想在捕获阶段就开始由外向里触发事件并执行函数，那么可以将 addEventListener（) 的第三个参数从 false 设置为 true; 一般情况下不会希望在捕获阶段执行函数；

    - 练习：
        -- 拖拽：
                      HTML body:  <div id="box1"></div>
                      style:
                                #box1 {
                                            width: 100px;
                                            height: 100px;
                                            background-color: red;
                                            position: absolute;
                                        }

                                         <script>
                                window.onload = function() {
                                    // 函数要实现拖拽 box1 元素：
                                    // 第一步： 当鼠标在被拖拽元素上按下时，开始拖拽；.onmousedown
                                    var box1 = document.getElementById('box1')
                                    box1.onmousedown = function(event) {
                                        event = event||window.event;
                                        var ol = event.clientX - box1.offsetLeft;
                                        var ot = event.clientY - box1.offsetTop;



                                        // alert('鼠标按下，开始拖拽')
                                            // 第二步： 当鼠标移动时，被拖拽元素跟随鼠标移动 .onmousemove
                                            // 为 document 绑定 .onmousemove 事件，因为 要在 document 区域里拖拽；
                                        document.onmousemove = function(event) {
                                            // 鼠标移动要更新 box 的位置： 
                                            event = event || window.event;
                                            // 获取鼠标坐标： 
                                            var x = event.clientX - ol;
                                            var y = event.clientY - ot;
                                            box1.style.left = x + 'px';
                                            box1.style.top = y + 'px';
                                        }

                                        // 第三步： 当鼠标松开时，被拖拽元素固定在当前位置：.onmouseup
                                        box1.onmouseup = function() {
                                            // 取消 document 的 onmousemove 事件：
                                            document.onmousemove = null;

                                        }
                                           // onmouseup 事件绑定给box1之后会有个bug: 因为box1可以全document 移动，如果移动到别的 box2位置上面，box1会被box2 覆盖，box1的松开鼠标的事件不会被触发；
                                            // 这种情况需要把事件给 document 绑定，这样在哪松鼠标都可以停止拖拽： 
                                                     document.onmouseup = function() {
                                                                 document.onmousemove = null
                                                                   // 最后取消 document 的 onmouseup 事件： 
                                                                          document.onmouseup = null;
                                                                         }
                                                                         return false; 
                                                                         }
                                                                     }
                                  </script>
        -- 拖拽2： 
            * 让鼠标的指针和元素对象的相对位置不变，而不是一直在 box 的左上角；希望鼠标点元素的哪后，指针就一直在哪个位置；
               要让元素调整位置：1. 对于元素我们有相对于 body的偏移量.offsetLeft和 .offsettTop ; 2. 对于鼠标，我们有 clientX, clientY, 两者之差就应该是元素的调整量；
               // 求元素box 的水平调整量： 鼠标.clientX - 元素.offsetLeft; 竖直偏移量同理
                  //要在函数 .onmousedown内调整：
                            box1.onmousedown = function(event) {

                                var ol = event.clientX - box1.offsetLeft;
                                var ot = event.clientY - box1.offsetTop; // 详细如上列所写；
        -- 拖拽3： 
            // 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容
            // 如果我们不想要这个功能，则可以通过 return false 来取消默认行为：
            // 
    - 滚轮事件：
        -- 要实现的功能是： 随着鼠标的滚轮滚动，box 高度随之变化： 
        * 准备工作： 
               HTML: <div id='box1'></div>
               Style:   #box1 {
                                width: 100px;
                                height: 100px;
                                background-color: red;
                            }
                Script: 
                             window.onload = function() { // 当鼠标滚轮向下滚动时,box1高度变高，向上滚动式时，box1变短； 
                                var box1 = document.getElementById('box1') // 给 box1 绑定鼠标滚轮滚动事件，.onmousewheel ，会在滚轮滚动式触发；
                                box1.onmousewheel = function(event) {
                                    // alert('滚了')
                                    // 当鼠标滚轮向下滚动时， box1 变长，首先判断鼠标滚轮滚动方向： 
                                    event = event || window.event
                                        // alert(event.wheelDelta) //(.wheelDelta 可以获取鼠标滚轮滚动的值) 向上滚是正数，向下是负数；这个值不看大小，只看正负；
                                        // if (event.wheelDelta > 0) {
                                        //     alert('up')
                                        // } else {
                                        //     alert('down')
                                        // }
                                        // 当滚轮向下时，box1 变长，向上时，box1变短：
                                    if (event.wheelDelta > 0) {
                                        box1.style.height = box1.clientHeight - 10 + 'px'
                                    } else {
                                        box1.style.height = box1.clientHeight + 10 + 'px'
                                            }
                                        }
                                    }
                                // 当滚轮滚动时，如果我们的浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为，如果不希望发生则可以取消默认行为 用 return false; 如果触发事件是通过 addEventListener 方法绑定的，则如果要取消默认行为，不能用 return false; 需要使用 event 来取消默认行为： event.preventDefault(); 专门用于 addEventListener绑定的函数；
    - 键盘事件： 
        -- onkeydown; onkeyup; 只某个键盘按键被按下，或放开： 键盘事件一般绑定给可以获取到焦点的对象： （比如 input 文本框，点击后光标符闪动就是获取焦点，点击按键就会输入文字, 同理也可以给 document 绑定：  
           HTML, body:   <input type='text'>  // 点击输入文本框出现光标闪动，说明获取焦点，点文本框外部，光标消失，表示失去焦点；
           <script>: 
                       window.onload = function(){
                           // 按键被按下： .onkeydown 事件绑定给 对象： 
                           document.onkeydown = function(){
                               if(event.keyCode ===89){

                               console.log('y 按键被按下了')
                               }

                           } // 如果一直按着某个按键不松手，则事件会一直被触发；
                           // 当我们的 onkeydown 连续触发时候，第一次和第二次间隔会长一点，其他的非常快；这是防止误操作，系统设计的；
                           // .onkeyup绑定： onkeyup 不会连续触发，松开后只触发一次；
                           document.onkeyup = function(){
                               console.log('key up 了')
                           }
                        // 成对出现；

                        // 如果希望指定按下的是哪一个键，则调用event 的一个属性： .keyCode 来获取按键的编码，比如 按键 a  对应编码 65
                        // 如果判断y是否被按下:
                        if(event.keyCode === 89){
                            alert('y 被按下')
                        }
                        // 如果判断 y 和 ctrl 是否同时被按下： 除了keyCode属性，event 还包含属性： .altKey; .ctrlKey; shiftKey; 这三个属性用来判断按键： alt,ctrl, 和 shift 是否被按下， 返回值是布尔值；
                        if(event.keyCode ===89 && event.ctrlKey){
                            console.log('按键y 和 ctrl 被同时按下了')
                        }
                        // 获取 input: 
                         var input = document.getElementsByTagName('input')[0];
                         input.onkeydown = function(){
                             console.log('按键按下了')

                         }
                              //在文本框中输入内容，属于 onkeydown 的默认行为，如果在 onkeydown 中使用 return false 取消默认行为，则输入`内容不会出现在文本框中：
                            //return false;
                            // 利用上面特点我们可以让文本框只输入字母，而不能输入文字： 数字编码keyCode： 对应 48-57

                            if(event.keyCode>=48 && event.keyCode<=57){
                                return false
                            }`


                           

                       }
                         // 练习： 键盘上下左右移动 box: 
                                        window.onload = function() {
                                        var box1 = document.getElementById('box1')
                                        document.onkeydown = function(event) {
                                            event = event || window.event;
                                            //alert(event.keyCode) // 左： 37 上 38 右： 39 下 40
                                            switch (event.keyCode) {

                                                case 37:
                                                    box1.style.left = box1.offsetLeft - 10 + 'px';
                                                    break;
                                                case 38:
                                                    box1.style.top = box1.offsetTop - 10 + 'px';
                                                    break;
                                                case 39:
                                                    box1.style.left = box1.offsetLeft + 10 + 'px';
                                                    break;
                                                case 40:
                                                    box1.style.top = box1.offsetTop + 10 + 'px';
                                                    break;

                                            }

                                        }
                                    }

 
 # =======================================玩转BOM===========================================================================
 1. BOM   (Browser Object Model) 浏览器对象模型：
    - BOM 可以让我们通过JS 来操作浏览器，BOM 提供了一组对象，来完成对浏览器的操作
        对象包含： window; navigator;location; history;screen;     
        *  Window 对象： 
            window代表整个浏览器的窗口，同时 window 也是网页中的全局对象； 
        * Navigator 对象： 
            - 代表当前浏览器的信息，通该对象可以识别不同的浏览器；
              console.log(navigator.appName) 
            -  返回浏览器的名称；Netscape 由于历史原因，navigator对象中大部分属性都已经不能帮助我们识别浏览器； 
            - 一般我们只会用 navigator.userAgent 来判断浏览器信息，navigator.userAgent 返回一个字符串，里面包含描述浏览器信息的内容；
                          console.log(navigator.userAgent)
                          // chrome 返回： Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36
                          var ua = navigator.userAgent
                          if(/firefox/i.test(ua)){
                              alert('你是火狐')
                          }else if(/chrome/i.test(ua)){
                              alert('你是chrome')
                          }
            - 
        * Location 
            - 代表当前浏览器的地址栏；网址；通过 location 可以获取地址栏信息，或者操作浏览器跳转页面
                console.log(location) // 返回当前页面的完整路径；
            - 如果直接将 location 修改成一个新的完整路径， 会跳转到新页面，并生成相应历史记录：
                                location = https://www.google.ca/
            - location.assign() 方法时赋值一个新地址，作用和直接改location 一样： location.assign('https://www.google.ca/')
            - location.reload() 方法时直接重新加载当前页面；跟刷新作用一样；如果在方法中传递一个 true 作为参数，则会强制清空缓存再刷新页面；
            - location.replace() 方法可以使用一个新的页面替换当前页面，调用完毕会跳转页面，跟 assign() 类似，但是跳转完没有历史记录，不能回去；

        * History
            - 可以通过该对象操作浏览器的历史记录；由于隐私原因，该对象不能获取到具体的历史记录；只能操作浏览器向前或向后；而且该操作只在当次访问时有效；
                console.log(history.length) // 返回当次访问的所看连接的数量；length 是history 的属性；
                history.back() // 这个方法可以回退到上一个页面；作用和浏览器的回退按钮一样；
                history.forward() // 这个方法可以跳转到下一个页面；作用和浏览器的前进按钮一样；
                history.go() // 这个方法可以用来跳转到指定的页面，需要一个整数作为参数，1. 表示向前跳转 1个 页面，-1 表示向后跳转 1个页面；

        * Screen
                代表用户的屏幕的信息，通过该对象可以获取用户屏幕的相关信息，也就是显示器的相关信息；
         * 这些BOM对象都是在浏览器中作为 window 对象的属性来保存的，也就是都是全局对象，因为 windo 就是全局；我们可以通过window对象来使用，也可以直接使用： 
                    console.log(window.navigator) 或者 console.log(navigator)

2. BOM 里的个别应用
    - BOM 里的 window 对象含有几个常用的关于定时器的方法：
        * window.setInterval()
              
          --  需要实现一个 count 数数功能
              HTML:   <h1 id="count"></h1>


            script:   
                                        window.onload = function() {
                                        var count = document.getElementById('count')
                                            // 使count 中的内容自动切换： 
                                            // for (var i = 1; i < 100; i++) {

                                        //     count.innerHTML = i;
                                        // JS的程序执行速度是非常非常快的，如果希望一段程序可以每间隔一段时间执行一次，可以使用定时调用：
                                        // .setInterval()  方法叫定时调用，可以将一个函数每隔一段时间执行一次；该方法需要两个参数： 1. 回调函数，该函数每隔一段时间，调用一次； 2. 间隔时间毫秒：
                                        // .setInterval(function(){},1000) 代表每隔1秒将函数调用一次；
                                        var num = 1;
                                        var timer = setInterval(function() {
                                                count.innerHTML = num;
                                                num++;
                                                if (num == 10) {
                                                    clearInterval('4') // 该方法可以用来关闭定时器，需要传递一个定时器标识作为参数，此次用4
                                                }
                                            }, 1000)
                                            // 这个方法有一个返回值，会返回一个 number 类型的数据： 
                                        console.log(timer) // 返回一个数字 n （可以是1,2,3,4）， 这个数字就是定时器的标识；
                                    }
    - 利用定时调用实现切换图片练习： 

       *   // 我们想定时切换图片： 
       HTML: <img src = 'image/1.jpg'/>
       script: 
                                        <script>
                                                window.onload = function() {
                                                    // 使图片可以自动切换；
                                                    // 获取 img 的 src  属性
                                                    var btn01 = document.getElementById('btn01')
                                                    var btn02 = document.getElementById('btn02')
                                                    var img = document.getElementsByTagName('img')[0];
                                                    var timer

                                                    var arr = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.jpg", "image/5.jpg"]
                                                        // 创建一个变量，保存当前图片的索引；
                                                    var index = 0； 
                                              
                                                        // 定时切换图片：开启定时器：

                                                    btn01.onclick = function() {
                                                              // 先关闭当前元素上的其他定时器，如果有的话
                                                            clearInterval(timer)
                                                        timer = setInterval(function() {
                                                            index++;
                                                            index = index % 5;
                                                            img.src = arr[index]
                                                        }, 1000)

                                                    }
                                                    btn02.onclick = function() {
                                                        clearInterval(timer)
                                                    }

                                                }  // clearInterval 可以接受任何参数，如果是有效标识，则可以停止该计时器，如果不是有效的，则啥也不做；
                                                // 上述方法，如果连续点击 btn01, 目前来讲我们每点击一次按钮就会开启一个定时器，连续点击多次，则有多个定时器进行图片切换；如果想停止，赋值的 timer 总会储存最后一个 timer, 所以停止按钮btn02只能关闭最后一个定时器； 这样导致图片切换速度过快，并只能关闭最后一个定时器；
                                                // 我们只希望点击btn01时候开启一个定时器，那么我们需要先关闭上一个定时器，来防止多次点击出现多个定时器；

                                            </script>
    - 修改 div 移动练习： 
           // 开启一个定时器，控制 div 的移动； 
                                       <script>
                                        window.onload = function() {
                                            var box1 = document.getElementById('box1')

                                            var dir = 0;
                                            var speed = 5;

                                            setInterval(function() {

                                                switch (dir) {
                                                    case 37:
                                                        box1.style.left = box1.offsetLeft - speed + 'px';
                                                        break;
                                                    case 39:
                                                        box1.style.left = box1.offsetLeft + speed + 'px';
                                                        break;
                                                    case 38:
                                                        box1.style.top = box1.offsetTop - speed + 'px';
                                                        break;
                                                    case 40:
                                                        box1.style.top = box1.offsetTop + speed + 'px';
                                                        break;


                                                }
                                            }, 30)

                                            document.onkeydown = function() {

                                                dir = event.keyCode;
                                                console.log(dir);
                                                if (event.ctrlKey) {
                                                    speed = 20;
                                                } else {
                                                    speed = 5;
                                                }
                                                document.onkeyup = function() {
                                                    dir = 0;
                                                }

                                            }
                                        }
                                            </script>

    - 延时调用， 使用window 对象的方法： 
        * setTimeout() 方法需要两个参数： 1. 回调函数 2. 延时间隔；
            --  延时调用不是马上执行，而是隔一段时间以后再执行；不过只执行一次；
            -- 定时调用 setInterval()；则可以执行多次；
            -- 延时调用停止可以通过 clearTimeout() 方法去取消延时： 
                var timer = setTimeout();// 开启一个延时调用
                 clearTimeout(timer);// 关闭延时调用；
            -- 延时调用和定时调用可以互相代替，定时调用就是多次调用同一个延时调用，而延时调用就是执行一次定时调用；
    - 定时调用实例1： 
        * 要实现的功能： 点击按钮以后使#box1向右移动：
                                            #box1 {
                                            width: 100px;
                                            height: 100px;
                                            background-color: red;
                                            position: absolute;
                                        }
                                           #end {
                                                    width: 0;
                                                    height: 100vh;
                                                    border-left: 1px black solid;
                                                    position: absolute;
                                                    left: 800px;
                                                }
                                    </style>
                                    <script>
                                        window.onload = function() {
                                            var btn = document.getElementsByTagName('button')[0];
                                            var box1 = document.getElementById('box1')
                                            var timer
                                            var speed = 5;
                                            btn.onclick = function() {
                                                clearInterval(timer)
                                                 timer = setInterval(function() {
                                                    box1.style.left = box1.offsetLeft + speed + 'px'
                                                    // 为移动终点设置终点线，800px 时候停止；
                                                    if(box1.style.left>800){
                                                        box1.style.left=800
                                                    }
                                                          // 当元素移动到800px时停止移动：
                                                        if (parseInt(box1.style.left) == 800) {
                                                            clearInterval(timer)
                                                        }

                                                }, 30)
                                            }
                                        }
                                    </script>
                                </head>

                                <body>
                                    <button id="btn01">点击我之后box向右移动</button><br/><br/>
                                    <div id="box1"></div>
                                    <div id='end'></div>
    - 定时器实例2： 
        * 再加一个按钮，向点击按钮后向左移动; 
          提取出一个函数，创建一个可以执行简单动画的函数： 
                                        window.onload = function() {
                                                var btn01 = document.getElementById('btn01')
                                                var btn02 = document.getElementById('btn02')
                                                var box1 = document.getElementById('box1')

                                                var timer;

                                                btn01.onclick = function() {
                                                    move(box1, 5, 800)
                                                };
                                                btn02.onclick = function() {
                                                    move(box1, 20, 0)
                                                };


                                                // 创建一个移动函数来绑定不同的 obj; 
                                                function move(obj, speed, target) {
                                                    clearInterval(timer)
                                                    var current = obj.offsetLeft;

                                                    if (current > target) {
                                                        speed = -speed;
                                                    }
                                                    console.log(speed)
                                                    timer = setInterval(function() {

                                                        // speed 正数向右， 负数向左；// 判断正负值： 如果 
                                                        obj.style.left = obj.offsetLeft + speed + 'px'
                                                            // 当向左移动时，需要判断是否小于target; 向右移动时，需要判断是否大于 target;
                                                        if (speed > 0 && parseInt(obj.style.left) > target) {
                                                            obj.style.left = target + 'px';
                                                        } else if (speed < 0 && parseInt(obj.style.left) < target) {
                                                            obj.style.left = target + 'px'
                                                        }
                                                        // target 是目标位置：
                                                        if (parseInt(obj.style.left) == target) {
                                                            clearInterval(timer)
                                                        }
                                                    }, 30)

                                                }
                                            }
                                </script>

    - 定时器实例3： 
        *    要实现新的功能： 再添加一个box2,还有附带的 按钮3,4 来控制box2 的移动：
             //我们定义的全局变量 timer  是为了避免在同一个对象上重复开启定时器，但是现在  由于当前定时器的标识由全局变量 timer  保存，我们如果点击新的按钮，则当前运行的定时器清空，并开启新的定时器，这样就不能让定时器同时作用在两个对象 box1 和 box2 上了。
             // 我们希望 box1 和 box2 都有各自独立的定时器，我们可以向对象 obj (box1,或者box2) 中添加一个属性： .timer, 然后该属性时一个定时器方法：     var obj.timer = setInterval(function(){},30)  
             
                                  <script>
                                window.onload = function() {
                                    var btn01 = document.getElementById('btn01')
                                    var btn02 = document.getElementById('btn02')
                                    var btn03 = document.getElementById('btn03')
                                    var btn04 = document.getElementById('btn04')
                                    var box1 = document.getElementById('box1')
                                    var box2 = document.getElementById('box2')

                                    var timer;

                                    btn01.onclick = function() {
                                        move(box1, 5, 800)
                                    };
                                    btn03.onclick = function() {
                                        move(box2, 20, 800)
                                    };
                                    btn02.onclick = function() {
                                        move(box1, 20, 0)
                                    };
                                    btn04.onclick = function() {
                                        move(box2, 20, 0)
                                    };


                                    // 创建一个移动函数来绑定不同的 obj; 
                                    function move(obj, speed, target) {
                                        clearInterval(obj.timer)
                                        var current = obj.offsetLeft;

                                        if (current > target) {
                                            speed = -speed;
                                        }
                                        console.log(speed)
                                        obj.timer = setInterval(function() {

                                            // speed 正数向右， 负数向左；// 判断正负值： 如果 
                                            obj.style.left = obj.offsetLeft + speed + 'px'
                                                // 当向左移动时，需要判断是否小于target; 向右移动时，需要判断是否大于 target;
                                            if (speed > 0 && parseInt(obj.style.left) > target) {
                                                obj.style.left = target + 'px';
                                            } else if (speed < 0 && parseInt(obj.style.left) < target) {
                                                obj.style.left = target + 'px'
                                            }
                                            // target 是目标位置：
                                            if (parseInt(obj.style.left) == target) {
                                                clearInterval(timer)
                                            }
                                        }, 30)

                                    }
                                }
                           // 如果我们希望更多动画效果，比如宽度高度等： 

                                                                <script>
                                            window.onload = function() {
                                                var btn01 = document.getElementById('btn01');
                                                var btn02 = document.getElementById('btn02');
                                                var btn03 = document.getElementById('btn03');
                                                var btn04 = document.getElementById('btn04');
                                                var box1 = document.getElementById('box1');
                                                var box2 = document.getElementById('box2');
                                                var timer;

                                                function move(obj, speed, attr, target, callback) {
                                                    clearInterval(obj.timer);
                                                    var current = parseInt(getComputedStyle(obj, null)[attr]);

                                                    if (current > target) {
                                                        speed = -speed;
                                                    }

                                                    obj.timer = setInterval(function() {
                                                        var oldValue = parseInt(getComputedStyle(obj, null)[attr])
                                                        console.log(oldValue)
                                                        obj.style[attr] = oldValue + speed + 'px';
                                                        if (speed > 0 && parseInt(obj.style[attr]) > target) {
                                                            obj.style[attr] = target + 'px';
                                                            console.log(obj.style[attr])

                                                        } else if (speed < 0 && parseInt(obj.style[attr]) < target) {
                                                            obj.style[attr] = target + 'px'
                                                        }
                                                        if (parseInt(obj.style[attr]) == target) {
                                                            clearInterval(timer);
                                                            callback && callback(); // 有回调函数就调，没有就不调
                                                        }
                                                    }, 30)
                                                };

                                                btn03.onclick = function() {

                                                    move(box2, 10, 'width', 800, function() {
                                                        move(box2, 5, 'height', 300, function() {
                                                            move(box2, 5, 'width', 50, function() {
                                                                move(box2, 10, 'height', 50, function() {
                                                                    move(box2, 10, 'left', 50, function() {
                                                                        move(box2, 10, 'top', 200, function() {
                                                                            alert('动画完成！');


                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                }
                                            }
                                
    - 轮播图界面： 
        * 完成轮播图界面; 
                                        <style>
                                        * {
                                            margin: 0;
                                            padding: 0;
                                        }
                                        
                                        #outer {
                                            background-color: greenyellow;
                                            height: 200px;
                                            padding: 5px 0;
                                            margin: 50px auto;
                                            width: 310px;
                                            position: relative;
                                            overflow: hidden;
                                        }
                                        
                                        #imgList {
                                            list-style: none;
                                            width: 2600px;
                                            position: absolute;
                                            left: 0px;
                                        }
                                        
                                        #imgList li {
                                            float: left;
                                            margin: 0 5px;
                                        }
                                        
                                        img {
                                            width: 300px;
                                            height: 200px;
                                        }
                                        
                                        #nav {
                                            position: absolute;
                                            /* 设置位置 */
                                            bottom: 15px;
                                            /* 设置居中： outer 宽度310px, nav 宽度80，最好JS里设置 */
                                        }
                                        
                                        #nav a {
                                            /* 设置超链接浮动 */
                                            float: left;
                                            width: 10px;
                                            height: 10px;
                                            margin: 0 5px;
                                            background-color: red;
                                            opacity: 0.5;
                                        }
                                        /* 设置鼠标移入效果 */
                                        
                                        #nav a:hover {
                                            background-color: grey;
                                        }
                                    </style>
                                    <script>
                                        window.onload = function() {

                                            var imgArr = document.getElementsByTagName("li");
                                            var imgList = document.getElementById('imgList')
                                            var timer;
                                            imgList.style.width = 320 * imgArr.length + 'px';
                                            // 每切换一张图片，ul 元素的left 偏移量向左便宜 320px， 也就是 left: -310px;
                                            // 设置 nav  居中： 
                                            var nav = document.getElementById('nav')
                                            var outer = document.getElementById('outer')
                                            nav.style.left = (outer.offsetWidth - nav.offsetWidth) * 0.5 + 'px'
                                                // 设置第一个图片的超链接为hover 状态默认值
                                            var allA = document.getElementsByTagName('a')
                                            var index = 0;
                                            allA[index].style.backgroundColor = 'grey';
                                            // 为超链接绑定onclick 函数，点击后移动ul
                                            for (var i = 0; i < allA.length; i++) {
                                                allA[i].num = i;
                                                var id = allA[i].num;

                                                allA[i].onclick = function() {
                                                    // 在人工点击的时候，需要把自动轮换的功能关掉，也就是把定时器timer关了，
                                                    clearInterval(timer)
                                                        // 当人工点完了后，自动切换继续开启：最后一步调用回调函数；  
                                                    var index = this.num;
                                                    console.log(index);
                                                    setA();
                                                    this.style.backgroundColor = 'grey';
                                                    move(imgList, 50, -310 * index, 'left', function() {
                                                            autoChange()
                                                        }) // 动画执行完毕开启自动轮换

                                                }
                                            }
                                            // 用函数启动自动轮换：
                                            autoChange();


                                            // 创建一个函数，用来设置选中的 a： 
                                            function setA() {
                                                // 判断当前索引是否是最后一张图片：
                                                if (index >= imgArr.length - 1) {
                                                    // 则将 Index 设置为0；
                                                    index = 0;
                                                    console.log(index)
                                                        // 此时显示的是最后一张图片，和第一张图片是一模一样的，通过CSS 将最后一张切换成第一张：
                                                    imgList.style.left = 0 + "px"; // 这样就不会往回转了；
                                                }
                                                // 遍历超链接，设置背影颜色为红色；
                                                for (var i = 0; i < allA.length; i++) {

                                                    allA[i].style.backgroundColor = '' // 空串代表默认样式！ 因为内联样式优先级高，所以改为默认，回去找 CSS
                                                }
                                            };
                                            // 创建一个函数，让其自动切换图片,并加上标识 timer：
                                            var timer;

                                            function autoChange() {
                                                // 每隔一段时间调用一次 move 函数： 
                                                timer = setInterval(function() {
                                                    // 对索引进行自增，

                                                    index++;
                                                    index %= imgArr.length;
                                                    setA();
                                                    // 执行动画：
                                                    move(imgList, 30, -310 * index, 'left');
                                                    allA[index].style.backgroundColor = 'grey';
                                                }, 2000)

                                            }

                                            // 构造一个move 函数，供ul 元素调用；

                                            function move(obj, speed, target, attr, callback) {
                                                var currentValue = parseInt(getComputedStyle(obj, null)['left'])
                                                if (currentValue > target) {
                                                    speed = -speed;
                                                }
                                                obj.timer = setInterval(function() {
                                                    var oldValue = obj.offsetLeft;

                                                    obj.style.left = oldValue + speed + 'px'

                                                    if (speed > 0 && parseInt(obj.style.left) > target) {
                                                        obj.style.left = target + 'px'
                                                    } else if (speed < 0 && parseInt(obj.style.left) < target) {
                                                        obj.style.left = target + 'px'
                                                    };
                                                    if (parseInt(obj.style.left) == target) {
                                                        clearInterval(obj.timer)
                                                    }

                                                }, 30)

                                                callback && callback();
                                            };


                                        }
                                    </script>
                                </head>

                                <body>

                                </body>
                                <div id="outer">
                                    <ul id="imgList">
                                        <li><img src="./image/1.jpg" </li>
                                            <li><img src="./image/2.jpg" </li>
                                                <li><img src="./image/3.jpg" </li>
                                                    <li><img src="./image/4.jpg" </li>
                                                        <li><img src="./image/5.jpg" </li>
                                                            <li><img src="./image/6.jpg" </li>
                                                                <li><img src="./image/1.jpg" </li>
                                    </ul>
                                    <!-- 创建导航按钮 -->
                                    <div id="nav">
                                        <a href="javascript:;"></a>
                                        <a href="javascript:;"></a>
                                        <a href="javascript:;"></a>
                                        <a href="javascript:;"></a>
                                        <a href="javascript:;"></a>
                                        <a href="javascript:;"></a>


                                    </div>
                                </div>

                                </html>
3. 类的操作： 
                                                        -              * {
                                                                margin: 0;
                                                                padding: 0;
                                                            }
                                                            
                                                            .b1 {
                                                                width: 100px;
                                                                height: 100px;
                                                                background-color: red;
                                                            }
                                                            
                                                            .b2 {
                                                                height: 200px;
                                                                background-color: green;
                                                            }
                                                        </style>
                                                        <scrip>
                                                            window.onload = function() {
                                                                var btn01 = document.getElementById('btn01');
                                                                var box1 = document.getElementById('box1');
                                                                btn01.onclick = function() {
                                                                    // 通过style 属性修改样式：，每修改一次，浏览器重新渲染一次，这样的执行性能比较差；
                                                                    // 当我们要修改多个样式时候，也不太方便； 
                                                                    // 开发中不建议大量的用JS 来修改style 内联样式；

                                                                    /* box1.style.width = 200 + 'px';
                                                                    box1.style.height = 200 + "px";
                                                                    box1.style.backgroundColor = 'green';*/
                                                                    // 希望一行代码可以修改多个样式：修改box的 class 属性：
                                                                    // box1.className = 'b2'

                                                                    // 这样我们只需要修改一次，即可修改多个样式；浏览器只需要重新渲染一次，性能提高，并且这种方式可以使我们表现和行为进一步分离；
                                                                    // 低耦合，高内聚；
                                                                    // 如果我们不希望完全去掉b1, 则需要：
                                                                    //box1.className += " b2" // 记得 b2 前面需要有空格；
                                                                    // 我们可以定义个函数，用来向一个元素中添加指定的class 属性值： 
                                                                    toggleClass(box1, 'bb')
                                                                }

                                                                function addClass(obj, str) {
                                                                    // 检查是否含有当前名称的class :
                                                                    if (!hasClass(obj, str)) {

                                                                        obj.className += ' ' + str;
                                                                    }
                                                                    // 参数obj 代表 class要添加的对象
                                                                }
                                                                // 创建一个函数来检查obj 的class 属性里是否含有某个姓名：
                                                                function hasClass(obj, str) {
                                                                    //利用正则表达式：
                                                                    // var reg = /\bb2\b/; //要检查是否含有b2, 要使用单词边界： \b； 
                                                                    // 为了调用参数，我们用构造函数： 
                                                                    var reg = new RegExp('\\b' +
                                                                        str + '\\b')

                                                                    return (reg.test(obj.className)) // 如果有 b2， 则返回true; 没有返回 false;


                                                                }
                                                                // 创建一个函数，删除一个元素对象中指定的class
                                                                function removeClass(obj, str) {
                                                                    // 要删除一个class  的属性，直接用空串''代替要删除的属性；创建一个正则表达式：
                                                                    var reg = new RegExp('\\b' + str + '\\b')
                                                                    if (reg.test(obj.className)) {

                                                                        obj.className = obj.className.replace(str, '')
                                                                    }


                                                                };

                                                                // toggleClass 可以用来切换一个类，如果元素中具有该类，则删除，如果元素中没有该类，则添加：
                                                                function toggleClass(obj, str) {
                                                                    // 首先判断 obj中是否含有类 str；
                                                                    if (hasClass(obj, str)) {
                                                                        removeClass(obj, str) // 有则删除
                                                                    } else {
                                                                        addClass(obj, str); // 无则添加；
                                                                    }

                                                                }

                                                            }
                                                        </script>
                                                    </head>

                                                    <body>
                                                        <button id="btn01">点击更改样式</button>
                                                        <br><br>
                                                        <div id="box1" class='b1'></div>

                                                    </body>

                                                    </html>                      

    - 二级菜单： 
        *  菜单的展开和叠起来就是修改div 的类： 

                                        window.onload = function() {
                                                /*
                                                * 我们的每一个菜单都是一个 div， 
                                                * 当div具有collapsed 这个类时，div就是叠起来的状态
                                                * 当div没有这个类时，div 就是展开的状态
                                                * 
                                                */
                                                // 功能实现，每次点击就叠起来或者展开，切换菜单的显示状态：
                                                // 每个 div 里有一个 span, span 就是折叠后的显示相， 我们需要绑定单击响应函数： 

                                                var menuSpan = document.querySelectorAll('.menuSpan')
                                                    // 定义一个变量，来保存当前打开的菜单；
                                                var openDiv = menuSpan[0].parentNode; // 第一个是默认打开的

                                                for (var i = 0; i < menuSpan.length; i++) {
                                                    menuSpan[i].onClick = function() {
                                                        // 如果是展开的，我们点击span, 应该要叠起来那个span 所属的 div, 那个 div 与 span 是 父子关系： 
                                                        // this 代表当前点击的span;
                                                        var parentDiv = this.parentNode;
                                                        // 在切换类之前， 获取元素高度： 
                                                        var begin = parentDiv.offsetHeight;
                                                        // 切换当前的 div；
                                                        toggleClass(parentDiv, 'collapsed');
                                                        // 动画效果就是将高度从begin  向 end 过度；
                                                        // 调用 toggleClass 后，我们的div  高度瞬间就变，所以我们将元素的高度重置为 begin;
                                                        parentDiv.style.height = begin + 'px'; // 内联样式，优先级更高，将值换为初始高度，即使点击了 toggle;
                                                        // 改回去高度就可以慢慢做过度效果了，执行动画：
                                                        move(parentDiv, 30, end, 'height', function() {
                                                            parentDiv.style.height = ''; // 取消内联样式高度，回去CSS找；
                                                        });
                                                        // 过度执行完毕后，内联样式的 高度优先级最高，为了让我们可以多次做过度效果，我们需要取消内联样式；采用回调函数；


                                                        // 切换类之后，获取一个新的高度： 
                                                        var end = parentDiv.offsetHeight;
                                                        console.log('begin: ' + begin + '.' + 'end: ' + end)
                                                            // 根据需求，同时只能有一个div 打开： 打开菜单后，要关闭之前打开的菜单：
                                                        if (openDiv != parentDiv && !hasClass(openDiv, 'collapsed')) {
                                                            // 为了统一处理动画过度效果，我们希望在这将 addClass 改为 toggleClass;
                                                            //addClass(openDiv, 'collapsed');
                                                            // 此处 toggle class 不需要有移除功能：只用添加功能，所以加条件 !hasClass(openDiv, 'collapsed')

                                                            toggleClass(openDiv, 'collapsed')
                                                        }
                                                        // 修改 openDiv 让其成为当前打开的div;
                                                        openDiv = parentDiv;


                                                    }
                                                }




                                            }
                                        </script>

    - JSON: 
        -- JSON 本质是特殊形式的字符串： 
            * js 中的对象，只有js 自己认识，其他语言都不认识；我们需要把这个对象传给后端，如果后端是用 java 写的，我们就需要把对象转换成各个语言都认识的格式：
            *   我们把上述对象，转换成字符串模式模式，这样就兼容别的语言了： 这个字符串就是JSON模式；
            * 这种模式可以被任意语言识别，并且会转换成任意语言中的对象；
            * JSON 在开发中主要用于数据的交互；
            * JSON 全写就是： JavaScript Object Notation: JS 对象表示方法
            * JSON 和 对象的格式一样，只不过JSON 字符串中的属性名必须叫双引号： 
                     var obj = '{"name":"PhilipHou","age": 18, "gender": "male"}' // 注意 obj 也需要用 单引号括起来
        -- JSON 分类： 
            * JSON 对象 {} 
                             var obj = '{"name":"PhilipHou","age": 18, "gender": "male"}' ;
            * JSON 数组 []
                             var arr = '[1,3,6,'hello',true]';
        -- JSON 中允许的种类： 
             1. 字符串 2. 数值 3. 布尔值 4. null 5. 对象（不包括函数，只指普通对象） ；6. 数组；
        -- 将JSON 字符串转换为 JS 中的对象： JSON.parse(json)
            * 在JS中，为我们提供了一个工具类，就叫 JSON；
            * 这个对象可以帮助将JSON 和对象之间实现互相转换： 
                --- JSON.parse() 需要将 json 作为参数，并转换为对象，返回；
                        // 将 JSON 转换到对象： 
                             var obj = '{"name":"PhilipHou","age": 18, "gender": "male"}'
                                    console.log(obj)
                                    console.log(typeof obj)
                                    var o = JSON.parse(obj);
                                    console.log(o);
                                    // console.log(o.name) 等同于 console.log(o['name']) // 均输出： PhilipHou
                                    console.log(typeof o)
                                // 输出： 
                                {"name":"PhilipHou","age": 18, "gender": "male"}
                                    JSON.html:12 string
                                    JSON.html:14 {name: 'PhilipHou', age: 18, gender: 'male'}
                                    JSON.html:15 object
                --- 将一个普通JS对象转换为 json 格式： JSON.stringify():
                    
                    var obj3 = {name: '猪八戒'，age:55, gender:'男'} 
                    // 将对象 obj3 转换为 json 格式： 
                     var json1=JSON.stringify(obj3); // 转化为json 模式，属性名也加双引号；
                     console.log(typeof obj3);
                     console.log(typeof json1)
                     console.log(json1)
                     // 输出：                     
                                         object
                                        JSON.html:23 {name: '猪八戒', age: 55, gender: '男'}
                                        JSON.html:24 string
                                        JSON.html:25 {"name":"猪八戒","age":55,"gender":"男"}

                --- eval() 函数可以执行一段字符串形式的js 代码，并将执行结果返回，比如：
                      var str2 = "alert('我是eval 方法')"
                      eval(str2) // 就会弹出提示框，执行代码；
                      // 如果使用 eval() 执行的字符串中含有大括号{}， 它会将大括号当成是代码块，
                      // 如果不希望eval()将 大括号当成代码块，要在字符串的前后加上小括号（）; 例如： 

                      var o2 = "{'name':'悟空','age':25,'gender':'男'}"
                      var o3 = eval('('+o2+')');
                      console.log(o3);
                      console.log(typeof o3) // 输出 object; 
                    *  开发中不建议经常使用 eval()； 执行性能比较差，并且具有安全隐患；...
                       





                                                                                            





                                                                                    

                                                                                            

                                                                                                

                                                                                            





                                                            

                                                                



      





                     


                        



















                    
                  
















                                                                
                                            


                                        


                             


        
           
        
    
    





      




        



           



        



        
            
        

                

              
        







    




