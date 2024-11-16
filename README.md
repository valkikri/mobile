# моё первое приложение 
## документация [test-bc740](https://test-bc740.web.app/) ## 
[документы](https://test-bc740.web.app/) 

## Развёртывание окружения
1. Клонировать репозиторий https://github.com/valkikri/mobile
2. Запустить код
npm install
ionic serve
если не открыл сайт, то ctrl+c и заново ionic serve
##  Двустороннее связывание 


Открываем home.page.html, в файле 8 строка (ngModel), и связываем с переменной, которая записана в home.page.ts (пример переменной с 10 по 14 строку)

<ion-input label="Ввод данных"  [(ngModel)]="Name"></ion-input>
 
       
##  Редактирование синей кнопки на главном экране            


 Заходим в home.page.html (12 строка)
<ion-button (click) = "changeBUTTON()">Добавить символ</ion-button> 
