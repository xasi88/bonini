// Всё содержимое меню Bonini: кафе, разделы и блюда.
// Внутри window.MENU_DATA = { ... } строгий JSON: двойные кавычки, без комментариев и запятых в конце.
// Блюда и цены только со слайдов «Меню» в Instagram @bonini.urus (снято 2026-11-07, исходники/источники.md). Состав не придумывать.
// Эспрессо 150/200 и капучино 200/250: на меню две цены без подписи. «Малый» и «Большой» поставили мы, уточнить у владельца.
// Фото: img/food/<имя>.webp из слайдов меню (исходники/фото-в-меню.py). Блюдо без фото показывает рисунок icon из js/icons.js.
// demo: true. Кнопка заказа не пишет в WhatsApp кафе, а показывает готовое сообщение (CLAUDE.md).
// order: заказ по умолчанию. price null: цену доставки скажет кафе. Способы оплаты уточнить у владельца.
window.MENU_DATA = {
  "cafe": {
    "name": "Bonini Burger",
    "latin": "Bonini",
    "tagline": "Дубайские бургеры",
    "place": "Урус-Мартан",
    "address": "ул. Яндарова, 77б",
    "hours": "Каждый день 09:00 - 00:00",
    "open": 9,
    "close": 24,
    "phone": "79381239696",
    "phoneText": "+7 938 123-96-96",
    "instagram": "bonini.urus",
    "demo": true
  },
  "order": {
    "night": false,
    "pickup": true,
    "places": [
      {
        "name": "Урус-Мартан",
        "price": null
      }
    ],
    "pay": [
      "Наличными при получении",
      "Переводом при получении"
    ]
  },
  "menu": [
    {
      "id": "burgers",
      "title": "Бургеры",
      "note": "",
      "items": [
        {
          "id": "volcano",
          "name": "Вулкан бургер",
          "desc": "",
          "price": 550,
          "icon": "burger",
          "photo": "img/food/volcano.webp",
          "hit": true
        },
        {
          "id": "bonini",
          "name": "Бонини бургер",
          "desc": "",
          "price": 550,
          "icon": "burger",
          "photo": "img/food/bonini.webp",
          "hit": true
        },
        {
          "id": "egg-burger",
          "name": "Эгг бургер",
          "desc": "",
          "price": 400,
          "icon": "burger",
          "photo": "img/food/egg-burger.webp"
        },
        {
          "id": "classic-beef",
          "name": "Классический с говядиной",
          "desc": "",
          "price": 350,
          "icon": "burger",
          "photo": "img/food/classic-beef.webp"
        },
        {
          "id": "classic-chicken",
          "name": "Классический бургер с курицей",
          "desc": "",
          "price": 230,
          "icon": "burger",
          "photo": "img/food/classic-chicken.webp"
        }
      ]
    },
    {
      "id": "combo",
      "title": "Комбо",
      "note": "",
      "items": [
        {
          "id": "volcano-combo",
          "name": "Вулкан комбо",
          "desc": "",
          "price": 700,
          "icon": "combo",
          "photo": "img/food/volcano-combo.webp",
          "hit": true
        },
        {
          "id": "bonini-combo",
          "name": "Бонини комбо",
          "desc": "",
          "price": 700,
          "icon": "combo",
          "photo": "img/food/bonini-combo.webp"
        },
        {
          "id": "egg-combo",
          "name": "Эгг комбо",
          "desc": "",
          "price": 650,
          "icon": "combo",
          "photo": "img/food/egg-combo.webp"
        }
      ]
    },
    {
      "id": "snacks",
      "title": "Закуски и хот-доги",
      "note": "",
      "items": [
        {
          "id": "dynamite",
          "name": "Динамит",
          "desc": "",
          "price": 480,
          "icon": "snack",
          "photo": "img/food/dynamite.webp"
        },
        {
          "id": "tornado",
          "name": "Торнадо",
          "desc": "",
          "price": 480,
          "icon": "snack",
          "photo": "img/food/tornado.webp"
        },
        {
          "id": "kinker",
          "name": "Кинкер",
          "desc": "",
          "price": 165,
          "icon": "wrap",
          "photo": "img/food/kinker.webp"
        },
        {
          "id": "hotdog",
          "name": "Хот-дог",
          "desc": "",
          "price": 150,
          "icon": "hotdog",
          "photo": "img/food/hotdog.webp"
        }
      ]
    },
    {
      "id": "pasta",
      "title": "Паста",
      "note": "",
      "items": [
        {
          "id": "neuro-pasta",
          "name": "Чёрная нейропаста с креветками",
          "desc": "Чёрные спагетти, креветки, устричный соус.",
          "price": 550,
          "icon": "noodles",
          "photo": "img/food/pasta.webp"
        }
      ]
    },
    {
      "id": "coffee",
      "title": "Горячий кофе",
      "note": "",
      "items": [
        {
          "id": "espresso",
          "name": "Эспрессо",
          "desc": "",
          "price": 150,
          "icon": "coffee",
          "options": [
            {
              "name": "Малый",
              "price": 150
            },
            {
              "name": "Большой",
              "price": 200
            }
          ]
        },
        {
          "id": "americano",
          "name": "Американо",
          "desc": "",
          "price": 200,
          "icon": "coffee"
        },
        {
          "id": "cappuccino",
          "name": "Капучино",
          "desc": "",
          "price": 200,
          "icon": "coffee",
          "options": [
            {
              "name": "Малый",
              "price": 200
            },
            {
              "name": "Большой",
              "price": 250
            }
          ]
        },
        {
          "id": "flat-white",
          "name": "Флэт-уайт",
          "desc": "",
          "price": 250,
          "icon": "coffee"
        },
        {
          "id": "latte",
          "name": "Латте",
          "desc": "",
          "price": 250,
          "icon": "coffee"
        },
        {
          "id": "lungo",
          "name": "Лунго",
          "desc": "",
          "price": 200,
          "icon": "coffee"
        },
        {
          "id": "raf",
          "name": "Раф классический",
          "desc": "",
          "price": 300,
          "icon": "coffee"
        },
        {
          "id": "raf-citrus",
          "name": "Раф цитрусовый",
          "desc": "",
          "price": 350,
          "icon": "coffee"
        },
        {
          "id": "raf-banana",
          "name": "Раф с бананом",
          "desc": "",
          "price": 350,
          "icon": "coffee"
        },
        {
          "id": "raf-urbech",
          "name": "Раф с урбечом",
          "desc": "",
          "price": 350,
          "icon": "coffee"
        },
        {
          "id": "cocoa",
          "name": "Какао",
          "desc": "",
          "price": 200,
          "icon": "coffee"
        },
        {
          "id": "hot-choc",
          "name": "Горячий шоколад",
          "desc": "",
          "price": 200,
          "icon": "coffee"
        }
      ]
    },
    {
      "id": "cold",
      "title": "Холодный кофе и тоники",
      "note": "",
      "items": [
        {
          "id": "ice-latte",
          "name": "Айс латте",
          "desc": "",
          "price": 250,
          "icon": "glass"
        },
        {
          "id": "ice-urbech",
          "name": "Айс кофе с урбечом",
          "desc": "",
          "price": 350,
          "icon": "glass"
        },
        {
          "id": "redbull-tonic",
          "name": "Redbull тоник",
          "desc": "",
          "price": 350,
          "icon": "glass"
        },
        {
          "id": "adrenaline-tonic",
          "name": "Adrenaline тоник",
          "desc": "",
          "price": 350,
          "icon": "glass"
        },
        {
          "id": "greench",
          "name": "Greench",
          "desc": "",
          "price": 300,
          "icon": "glass"
        },
        {
          "id": "greench-tonic",
          "name": "Greench тоник",
          "desc": "",
          "price": 350,
          "icon": "glass"
        },
        {
          "id": "lime-energy",
          "name": "Lime Energy",
          "desc": "",
          "price": 300,
          "icon": "glass"
        },
        {
          "id": "lime-tonic",
          "name": "Lime тоник",
          "desc": "",
          "price": 350,
          "icon": "glass"
        },
        {
          "id": "bumble-pomegranate",
          "name": "Бамбл гранатовый",
          "desc": "",
          "price": 550,
          "icon": "glass"
        },
        {
          "id": "bumble-orange",
          "name": "Бамбл апельсин",
          "desc": "",
          "price": 450,
          "icon": "glass"
        }
      ]
    },
    {
      "id": "mojito",
      "title": "Мохито",
      "note": "",
      "items": [
        {
          "id": "mojito",
          "name": "Мохито классический",
          "desc": "",
          "price": 250,
          "icon": "mojito",
          "photo": "img/food/mojito.webp"
        },
        {
          "id": "mojito-strawberry",
          "name": "Мохито клубника",
          "desc": "",
          "price": 250,
          "icon": "mojito"
        },
        {
          "id": "mojito-berry",
          "name": "Мохито ягодный",
          "desc": "",
          "price": 250,
          "icon": "mojito"
        },
        {
          "id": "blue-lagoon",
          "name": "Голубая лагуна",
          "desc": "",
          "price": 250,
          "icon": "mojito"
        },
        {
          "id": "mojito-mango",
          "name": "Мохито манго-маракуйя",
          "desc": "",
          "price": 250,
          "icon": "mojito"
        },
        {
          "id": "mojito-pear",
          "name": "Мохито груша-дыня",
          "desc": "",
          "price": 250,
          "icon": "mojito"
        }
      ]
    },
    {
      "id": "tea",
      "title": "Чай",
      "note": "",
      "items": [
        {
          "id": "assam",
          "name": "Ассам",
          "desc": "",
          "price": 250,
          "icon": "tea",
          "photo": "img/food/tea.webp"
        },
        {
          "id": "earl-grey",
          "name": "Эрл-Грей",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "naglyi-frukt",
          "name": "Наглый фрукт",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "geisha",
          "name": "Гейша",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "watermelon-tea",
          "name": "Арбузный чай",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "thyme-tea",
          "name": "Чай с чабрецом",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "taiga",
          "name": "Таёжный сбор",
          "desc": "",
          "price": 300,
          "icon": "tea"
        },
        {
          "id": "lev",
          "name": "Лев",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "wild-cherry",
          "name": "Дикая вишня",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "graf-orlov",
          "name": "Граф Орлов",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "quince-peach",
          "name": "Айва-персик",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "1001",
          "name": "1001 ночь",
          "desc": "",
          "price": 250,
          "icon": "tea"
        },
        {
          "id": "champagne",
          "name": "Брызги шампанского",
          "desc": "",
          "price": 250,
          "icon": "tea"
        }
      ]
    },
    {
      "id": "author-tea",
      "title": "Авторские чаи",
      "note": "",
      "items": [
        {
          "id": "arab-tea",
          "name": "Арабский чай",
          "desc": "",
          "price": 300,
          "icon": "tea"
        },
        {
          "id": "raspberry-ginger",
          "name": "Малина-имбирь чай",
          "desc": "",
          "price": 350,
          "icon": "tea"
        },
        {
          "id": "sea-buckthorn",
          "name": "Облепиховый чай",
          "desc": "",
          "price": 400,
          "icon": "tea"
        },
        {
          "id": "mango-tea",
          "name": "Манго-маракуйя чай",
          "desc": "",
          "price": 400,
          "icon": "tea"
        }
      ]
    },
    {
      "id": "smoothie",
      "title": "Смузи и коктейли",
      "note": "",
      "items": [
        {
          "id": "smoothie-orange",
          "name": "Смузи апельсин-банан",
          "desc": "",
          "price": 300,
          "icon": "smoothie",
          "photo": "img/food/smoothie.webp"
        },
        {
          "id": "smoothie-strawberry",
          "name": "Смузи клубничный",
          "desc": "",
          "price": 300,
          "icon": "smoothie"
        },
        {
          "id": "smoothie-berry",
          "name": "Смузи ягодный",
          "desc": "",
          "price": 300,
          "icon": "smoothie"
        },
        {
          "id": "smoothie-kiwi",
          "name": "Смузи яблоко-киви",
          "desc": "",
          "price": 300,
          "icon": "smoothie"
        },
        {
          "id": "shake-vanilla",
          "name": "Коктейль ванильный",
          "desc": "",
          "price": 250,
          "icon": "shake",
          "photo": "img/food/shake.webp"
        },
        {
          "id": "shake-strawberry",
          "name": "Коктейль клубничный",
          "desc": "",
          "price": 250,
          "icon": "shake"
        },
        {
          "id": "shake-banana",
          "name": "Коктейль банановый",
          "desc": "",
          "price": 250,
          "icon": "shake"
        },
        {
          "id": "shake-choc",
          "name": "Коктейль шоколадный",
          "desc": "",
          "price": 250,
          "icon": "shake"
        }
      ]
    },
    {
      "id": "fresh",
      "title": "Фреш",
      "note": "",
      "items": [
        {
          "id": "fresh-orange",
          "name": "Апельсиновый фреш",
          "desc": "",
          "price": 350,
          "icon": "fresh",
          "photo": "img/food/fresh.webp"
        },
        {
          "id": "fresh-pineapple",
          "name": "Ананасовый фреш",
          "desc": "",
          "price": 500,
          "icon": "fresh"
        },
        {
          "id": "fresh-apple",
          "name": "Яблочный фреш",
          "desc": "",
          "price": 300,
          "icon": "fresh"
        },
        {
          "id": "fresh-pomegranate",
          "name": "Гранатовый фреш",
          "desc": "",
          "price": 450,
          "icon": "fresh"
        },
        {
          "id": "fresh-mix",
          "name": "Микс фреш",
          "desc": "Яблоко, апельсин.",
          "price": 400,
          "icon": "fresh"
        },
        {
          "id": "fresh-pom-mix",
          "name": "Гранатовый микс",
          "desc": "Гранат, яблоко, апельсин.",
          "price": 450,
          "icon": "fresh"
        }
      ]
    }
  ],
  "spare": []
};
