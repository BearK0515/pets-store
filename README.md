# 寵物商品購物網站 in React

專案使用 React 建立，以貓狗寵物為主題所打造的一個電商購物網站，分別為前台的購物功能、貓狗相關文章查詢；以及後台的訂單、商品管理。 
消費者可以完整的體驗購物流程，從瀏覽單一商品、加入購物車、到最後結帳成立訂單，最後可搜尋訂單查詢購買品項。 
管理員可以在後台針對不同的商品專區進行價格修改，也能夠新增商品進行上下架，最後可以在後台查詢全部消費者的訂單紀錄。

> [DEMO：寵物商品購物網站](https://beark0515.github.io/pets-store/)

> 管理後台：測試帳號：root@root.com / 密碼: 123

![](https://i.imgur.com/PO3Ckmv.png)
![](https://i.imgur.com/s5GjuVT.png)
![](https://i.imgur.com/9SvZx1Q.png)

## 專案簡介

- 前台 (一般訪客/會員) 

  - 商品/文章瀏覽： 

    - 實作頁面為 首頁/關於/全部商品/狗狗專區/貓咪專區/部落格 頁面。
    - 首頁有全部商品瀏覽及品牌介紹。
    - 關於頁有商店聯絡方式、品牌故事及品牌認證。
    - 商品頁按照分類可分為全部商品、貓貓專區與狗狗專區。
    - 商品頁可依照熱銷排行/上架時間/價格由高至低/價格由低至高排序。
    - 商品頁可點擊商品卡片連結到該商品的詳細資料。
    - 商品頁點擊購物車 icon 可將商品加入購物車，並繼續瀏覽，或是按立即結帳至結帳頁。
    - 部落格依照時間由新到舊排序，置頂文章優先放在上方，還有以關鍵字搜尋文章、文章分類的功能。

  - 購物車： 

    - 當加入購物車時，icon 會同步顯示購物車商品數量。
    - 購物車可隨時修改數量，與結帳區同步修正目前數量及金額。
    - 點擊購物車內的"前往結帳"，可進入結帳頁面。內有購物車清單、及填寫訂單相關資料。

  - 登入/註冊/訂單查詢： 

    - 網頁左上方 icon 可跳轉到查詢訂單/購物說明/會員登入/管理員登入，右上方實作首頁按鈕。
    - 查詢訂單可依照訂單編號查詢該筆訂單資料。
    - 會員登入可用 Google/Facebook/Line 登入。

  - 結帳： 

    - 可查看購物商品明細，修改數量小計。
    - 送出訂單前會驗證是否符合格式。
    - 訂單成立後顯示訂單明細。

- 後台 (管理員) 

  - 點擊管理員按鈕，會連結到管理員登入頁面。
  - 在商品列表，管理員有下架商品、點擊商品卡片修改商品價格的權限。
  - 在訂單列表，可看到所有訂單，點擊該筆訂單可看到詳細資料。
  - 有新增商品的權限，可新增3張商品圖片、3張詳情圖片，並預覽圖片樣式。

## 專案 DEMO

### 購物體驗

  - 加入購物車時，icon 會同步顯示購物車商品數量，同時也可以做數量修改。

  ![](https://i.imgur.com/Iz9aJLe.gif)

  - 頁面右側有商品瀏覽紀錄，點擊可到該商品的詳細資料。

  ![](https://i.imgur.com/x5riKcY.gif)

  - 商品可依照熱銷排行/上架時間/價格由高至低/價格由低至高排序。

  ![](https://i.imgur.com/DqGmZA5.gif)

  - 頁面往下滑會彈出置頂按鍵。

  ![](https://i.imgur.com/d49XmaW.gif)


### 管理後台

  - 商品列表，管理員可以下架商品、點擊商品卡片修改商品價格。

  ![](https://i.imgur.com/ikOQySe.gif)

  - 訂單列表，管理員可以查看所有訂單狀態。

  ![](https://i.imgur.com/KRKxZdw.gif)

  - 新增商品，可新增3張商品圖片、3張詳情圖片，並預覽圖片樣式。

  ![](https://i.imgur.com/bM41AFr.gif)


## 開發工具

- Create React App - 建立專案項目環境
- React - Function Components + Hooks
- Prettier - 統一程式碼格式
- AWS - 後端架伺服器用
- [axios: 1.2.2](https://axios-http.com/) - 串接API
- [react-icons: 4.7.1](https://react-icons.github.io/react-icons/) - 各種小 icon 引用
- [react-redux: 8.0.5](https://react-redux.js.org/) - 管理購物車狀態
- [@reduxjs/toolkit: 1.9.2](https://redux-toolkit.js.org/) - 管理購物車狀態
- [react-scroll-to-top: 3.0.0](https://www.npmjs.com/package/react-scroll-to-top) - 置頂按鍵
- [styled-components: 5.3.6](https://styled-components.com/) - 方便的在 JSX 中使用 CSS 樣式
- [sweetalert2: 11.7.0](https://sweetalert2.github.io/) - 美麗的使用彈跳訊息框
- [gh-pages](https://www.npmjs.com/package/gh-pages) - 用於將專案 Demo 部署至 GitHub Pages


## 本地安裝
- 確認本機環境已下載 npm 及 Node.js
- clone 專案至本機
```
https://github.com/BearK0515/pets-store.git
```
- 開啟終端機(Terminal)進入專案資料夾，輸入


```
npm install
```
- 終端機輸入開啟專案

```
npm start
```
- 瀏覽器開啟畫面成功
