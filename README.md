使用者登入系統
====
使用node.js + express並使用MongoDB作為資料庫的使用者登入系統

專案畫面
---
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/index.png)
-------
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/index2.png)
-------
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/detail.png)
-------
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/edit.png)
-------
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/new.png)
-------
![image](https://github.com/CHUCHUDAN/restaurant_list_refactor/blob/main/public/img/sort.png)
-------
Features - 產品功能
-----
1.使用者可以根據loginSeeder.js中的使用者資料登入。

2.前端會判斷是否符合email格式以及是否有填入資訊，如果沒有會跳出警告提示。

3.後端會判斷帳密是否正確如果不正確會顯示帳密錯誤。

Environment SetUp - 環境建置
-----
1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/)

Installing - 專案安裝流程
----
1.打開你的 terminal，Clone 此專案至本機電腦

    git clone https://github.com/CHUCHUDAN/restaurant_list_refactor.git
    
2.開啟終端機(Terminal)，進入存放此專案的資料夾

    cd restaurant_list_refactor
    
3.安裝 express 套件

    在 Terminal 輸入 npm i express 指令
    
4.安裝nodemon套件
    
    在 Terminal 輸入 npm install nodemon 指令
    
5.請自行新增.env檔案放置與資料庫MongoDB連線相關資料

    MONGODB_URI= "您的MongoDB連線資訊"
    
6.啟動伺服器
  
    在 Terminal 輸入 npm run dev 指令
    
7.當 terminal 出現以下字樣，表示伺服器啟動成功並與資料庫連線成功

    The web is Listen on http://localhost:3000
    Mongodb connected!
    
8.如需使用種子資料請輸入指令

    在 Terminal 輸入 npm run seed 指令
    
Contributor - 專案開發人員
-----
[Daniel Chu](https://github.com/CHUCHUDAN)
