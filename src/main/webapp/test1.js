/**
 * Project name(项目名称)：JS_switch_case
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:34
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var id = 1;
switch (id)
{
    case 1 :
        console.log("普通会员");
        break;  //停止执行，跳出switch
    case 2 :
        console.log("VIP会员");
        break;  //停止执行，跳出switch
    case 3 :
        console.log("管理员");
        break;  //停止执行，跳出switch
    default :  //上述条件都不满足时，默认执行的代码
        console.log("游客");
}


var id = 1;
switch (id)
{
    case 1 :
    case 2 :
        console.log("VIP会员");
        break;
    case 3 :
        console.log("管理员");
        break;
    default :
        console.log("游客");
}