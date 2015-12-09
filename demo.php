<?php
header("Content-type:text/html;charset=utf-8");
header("Cache-Control:no-cache,must-ravalidate");
//取得用户名
$uemail=$_GET['user_name'];
//连接数据库
mysql_connect('localhost','root','root');  //登陆数据库
mysql_select_db('ajax');//选择数据库
mysql_query('set names utf8');//选择编码方式
//执行一次查询
$sql = "select * from register where email='$uemail'";
$result=mysql_query($sql);       //把查询结果存于$result
$num=mysql_num_rows($result);    //查询结果的行数
mysql_close();                   //关闭链接

if($num>0){
    echo 1;
}
else
    echo 2;