create database freshUser charset utf8;
use freshUser;
create table userList(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname  VARCHAR(20),
upwd   VARCHAR(50),
uphone VARCHAR(50),
umail  VARCHAR(50)
);
