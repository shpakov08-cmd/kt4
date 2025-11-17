//ex 1
// let phones = [
//     '590.423.4568',
//     '650.124.7234',
//     '650.507.9879',
//     '011.44.1343.529268',
//     '011.44.1344.478968',
//     '011.44.1644.429267',
//     '11.44.1343.52',
//     '11.44.1643.52'
// ];
// let result = [];
// for (let i = 0; i < phones.length; i++) {
//     let phone = phones[i];
//         let lastDotIndex = phone.lastIndexOf('.');
//         let firstPart = phone.substring(0, lastDotIndex + 1);
//         let firstDigit = phone[lastDotIndex + 1];
//         let newPhone = firstPart + firstDigit + '****';
//         result.push(newPhone);
// }

// console.log(result);

// задача 2

// let cards = [
//     '4000 0012 0056 9499',
//     '4000 0013 5456 7379',
//     '4000 0014 1456 9869',
//     '4000 0015 3466 7859',
//     '4000 0016 3556 6899',
//     '4000 0017 4456 4699'
// ];

// let result = [];

// for (let i = 0; i < cards.length; i++) {
//     let card = cards[i];
    
//     let cleanCard = card.replace(/ /g, '');
    
//     let firstPart = cleanCard.substring(0, 4);
    
//     let lastPart = cleanCard.substring(cleanCard.length - 4);
    
//     let encryptedCard = firstPart + '*****' + lastPart;
//     result.push(encryptedCard);
// }

// console.log(result);

//ex3 

// let prices = [
//     'Цена товара - 1200$',
//     'Стоимость - 500$',
//     'Цена не определена', 
//     '9999',
//     'Ценовая категория - больше 300$',
//     'Цена за услугу 500 EUR',
//     '150$',
// ];

// function getInfo(prices) {
//     let startsWithPrice = 0;
//     let endsWithDollar = 0;
    
//     for (let i = 0; i < prices.length; i++) {
//         let price = prices[i];
//                 if (price.startsWith('Цена')) {
//             startsWithPrice++;
//         }
        
//         if (price.endsWith('$')) {
//             endsWithDollar++;
//         }
//     }
    
//     return [startsWithPrice, endsWithDollar];
// }

// console.log(getInfo(prices)); 

//ex 4
// function kingSayd(string) {
//     if (string.startsWith('Король сказал')) {
//         console.log(string);
//     } else {
//         console.log('Король сказал: ' + string);
//     }
// }

// kingSayd("сегодня хорошая погода");
// kingSayd("Король сказал: принесите мне меч");

// //ex 5
// function listFridayToday() {
//     let today = new Date();
//     let dayOfWeek = today.getDay();
    
//     if (dayOfWeek === 5) {
//         console.log("Сегодня пятница!");
//     } else if (dayOfWeek === 6) {
//         console.log("Пятница была вчера");
//     } else if (dayOfWeek === 4) {
//         console.log("Завтра пятница!");
//     } else {
//         let daysUntilFriday;
//         if (dayOfWeek < 5) {
//             daysUntilFriday = 5 - dayOfWeek;
//         } else {
//             daysUntilFriday = 5 + (7 - dayOfWeek);
//         }
//         console.log("Пятница будет через " + daysUntilFriday + " дней");
//     }
// }

// listFridayToday();

