const { totalmem } = require('os');
const readline = require('readline-sync'); // дополнительный модуль для активного ввода текста с клавиатуры через консоль
const goods = [
    {
        id: 1,
        name: 'Shirt',
        description: 'Simple white man shirt',
        sizes: 'S',
        price: 150,
        available: true
    },
    {
        id: 2,
        name: 'Shoes',
        description: 'Winter woman shoes',
        sizes: '45',
        price: 500,
        available: true
    },
    {
        id: 3,
        name: 'Sun glasses',
        description: 'Aviators',
        sizes: 'none',
        price: 300,
        available: false
    },
    {
        id: 4,
        name: 'Hat',
        description: 'Simple man hat',
        sizes: 'M',
        price: 100,
        available: true
    },
    {
        id: 5,
        name: 'Jeans',
        description: 'Simple black man jeans',
        sizes: 'S',
        price: 100,
        available: false
    }
]
const basket = [
    {
        id: 2,
        amount: 2
    },
    {
        id: 1,
        amount: 1
    }
]

function result(basket){ //подсчет итоговой суммы и итогового количества товаров
    res = {
        totalAmount: 0,
        totalSumm: 0  
    }
    for (let i = 0;i < basket.length; i++){
        res.totalAmount += basket[i].amount
        for (let n = 0; n < goods.length; n++){
            if (basket[i].id == goods[n].id){
                res.totalSumm += goods[n].price * basket[i].amount
            }
        }
    }
    return res
}
function add(add_id, add_amount, basket){ // добавление в корзину товара: add_id - айди нового товара; add_amount - количество товара
    basket.push({id: add_id, amount: add_amount});
    console.log('Busket was successfully updated')
}
function clear(basket){
    basket.length = 0;
    console.log('Busket is now empty.')
}
cashe = basket
while (true){ //Команды: 1 - итоговый счет; 2 - добавить доступный товар в корзину; 3 - Очистить корзину; 4 - вывести весь список на экран; 5 - выйти из программы
    let _input = Number(readline.question('Input number of command: '))
    if (_input == 1){
        console.log(result(cashe))
    } else if (_input == 2){
        add_id = Number(readline.question('Insert id of the product: '));
        for (let i = 0; i < goods.length; i++){
            if (goods[i].id == add_id){
                if (goods[i].available == true){
                    add_amount = Number(readline.question('Insert amount of the products: '));
                    console.log(add(add_id, add_amount, cashe))
                } else {
                    console.log('This product is not available now.')
                }
            } 
        }
    } else if (_input == 3){
        console.log(clear(cashe))
    } else if (_input == 4){
        console.log(cashe)
    } else if (_input == 5){
        break
    }
}