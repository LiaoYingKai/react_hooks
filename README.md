這是一個關於 react-hooks 的練習
## 31e882b
這一個 commit 爲簡單的範例，使用兩個 components ， Input 主要爲使用者輸入，List 主要爲顯示 TODO 的地方，使用 Home 將兩個 component 引入

爲了使用 hooks 的 API ， 在 list 使用了 useEffect 去計算 TODO 的數量，而在 Home 與 Input 使用了 useState 去初始化 input value 與 list array

## 1071b59 
這一個 commit 爲加入 redux 管理資料後的 todoList，使用 react-redux 7.1 版後，使用 useSelector 與 useDispatch 去連結 redux 

透過 useDispatch 與 redux 的 dispatch 連結，可以使用類似 mapDispatchToProps 的方式與 reducer 連結

透過 useSelector 拿出 redux 內需要的資料