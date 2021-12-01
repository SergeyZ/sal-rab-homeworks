// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }
/*
function sendRequest(count, name, phone, address, goods, sum) {
    let data = [goods: {title: "Пицца", count: "2", order: [{address:"ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53", sum:"900"}], 
                client: "Иван +7(987)65-43-210" };

    let countOfGoods = goods.length;
    data.order.address = address;
    data.order.sum = sum;
    data.client = name + ' ' + phone ;
   // data.goods.title = goods;
    data.goods.count = countOfGoods;
    let jsonData = JSON.stringify(data);

   for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title)}

    
    return (jsonData) ;
}*/
/*
function sendRequest(name, phone, address, goods, sum) {
   // let data = {client: "Иван +7(987)65-43-210", 
     //           goods: [{title: "Пицца"}, {count: 2}], 
       //         order: {address: "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53", sum: 900}
         //      };
    let data = {client: "Иван +7(987)65-43-210", goods:[], order:{}}
        
    
    
    let countOfGoods = goods.length;
    
    //goods: [ Object({ id: 1, title: 'Пицца', count: 2, price: '500.00' }), 1, null, 1 ]

    for (let i = 0; i <= countOfGoods; i += 1) {
        // goods.push(data.goods[0].title);
        data.goods.push(goods[i]);   ///Добавляем наименование продукта
        data.client = name + ' ' + phone;
        data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
        data.order.sum = sum;
    }

    let jsonData = JSON.stringify(data);




   // let jsonData = JSON.stringify(data); //вывод строки - преобразование в строку массива данных

    return jsonData;
}
*/

title:"Название товара", count:0
address:"адрес", sum:0


function sendRequest(name, phone, address, goods, sum) {
 //1. Задаем объект data, у которого есть три свойства client: string; Order: object; goods: array of object

//Из описания я понял следующее - не нужно указывать имена свойств при создании переменной объекта. Все свойства создаются динамически, если мы к ним обращаемся при присвоении значений
//Поэтому сразу задаю объект data так:
 let data = {goods:[],order:{}}

   
  //Тут задаем длину массива goods (переданную из параметров функции) в переменную countOfGoods
  let countOfGoods = goods.length;  
  

//2.  Строку требуется формировать не каждый раз одну и ту же, ее содержание зависит от входных данных.
//Собираем первую часть строк
//Создаем строку, так как не задали ее в объекте data. Потом прилепим к JSON
let Client = name + ' ' + phone;

data.order = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;

// задаем счетчик цикла, равный количеству записей массива Goods из параметра функции
   for (let i = 0; i <= countOfGoods; i += 1) {

//собираем объект data
//Свойство (объекта data) goods - массив, содержащий объекты-позиции. Каждый такой объект должен содержать два свойства:
//- title - строка, название продукта;
//- count - число, количество единиц продукта в заказе.
//Так как параметр goods функции, судя по всему массив объектов, содержащий свойства
//- id - число, идентификатор товара в базе данных;
//- title - строка, название продукта;
//- count - число, количество единиц продукта в заказе;
//- price - число, стоимость одной единицы товара.
//- sum - число, стоимость заказа с учетом скидок и доставки.
// То пушим таким образом в наш объект data


//Добавляем в массив data.goods название товара и сумму из параметра объекта функции goods строку "Пица, 500":
data.goods.push(goods.title+','+goods.sum);
   }
//Ну а тут преобразуем в строку формата JSON
//склеиваем строку и то что записалось в data
   let jsonData = JSON.stringify(Client + data);

   return jsonData;
}




