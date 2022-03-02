/**
 * Project name(项目名称)：JS_switch_case
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/2
 * Time(创建时间)： 20:38
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function oper(a, b, opr)
{
    switch (opr)
    {
        case "+" :  //正常枚举
            return a + b;
        case "-" :  //正常枚举
            return a - b;
        case "*" :  //正常枚举
            return a * b;
        case "/" :  //正常枚举
            return a / b;
        default :  //异常处理
            return "非预期的 opr 值";
    }
}

console.log(oper(2, 5, "*"));  //返回10