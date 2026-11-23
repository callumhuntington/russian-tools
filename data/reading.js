// Reading passages: dialogue lines (speaker '' = narration), tap-to-translate glosses, key words and a bank of questions (a = index of the right option).
const PASSAGES = [
 {
  "id": "vokzal",
  "topic": "vokzal",
  "title": "На вокзале",
  "difficulty": "Tom's story, part 1",
  "intro": "Tom arrives in St Petersburg. К = Катя, Т = Том.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Это Том. Том — студент. Он из Лондона. Это вокзал в Санкт-Петербурге. Вокзал большой. Вот касса, а вот выход. Где Катя? А, вот она! Катя — подруга Тома."
   },
   {
    "speaker": "К",
    "text": "Привет, Том!"
   },
   {
    "speaker": "Т",
    "text": "Привет, Катя! Как дела?"
   },
   {
    "speaker": "К",
    "text": "Отлично! А у тебя?"
   },
   {
    "speaker": "Т",
    "text": "Тоже отлично."
   },
   {
    "speaker": "К",
    "text": "Это твоя сумка?"
   },
   {
    "speaker": "Т",
    "text": "Да, это моя сумка. А это мой рюкзак."
   },
   {
    "speaker": "К",
    "text": "Хорошо. Вот такси. Пока, вокзал!"
   }
  ],
  "vocab": {
   "студент": "student",
   "лондона": "London (из Лондона — from London)",
   "вокзал": "railway station",
   "санкт-петербурге": "St Petersburg (в — in)",
   "большой": "big",
   "касса": "ticket office",
   "выход": "exit",
   "подруга": "friend (woman)",
   "тома": "Tom's",
   "твоя": "your (ты)",
   "сумка": "bag",
   "рюкзак": "rucksack",
   "такси": "taxi",
   "отлично": "excellent",
   "тоже": "also, too"
  },
  "keywords": [
   {
    "rus": "вокзал",
    "eng": "station"
   },
   {
    "rus": "касса",
    "eng": "ticket office"
   },
   {
    "rus": "выход",
    "eng": "exit"
   },
   {
    "rus": "большой",
    "eng": "big"
   },
   {
    "rus": "подруга",
    "eng": "friend (f)"
   },
   {
    "rus": "твоя",
    "eng": "your"
   }
  ],
  "questions": [
   {
    "q": "Is Tom a student?",
    "opts": [
     "Yes",
     "No",
     "It doesn't say"
    ],
    "a": 0
   },
   {
    "q": "Is the station small?",
    "opts": [
     "Yes",
     "No, it's big",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Who is Katya?",
    "opts": [
     "Tom's sister",
     "Tom's friend",
     "a taxi driver",
     "Tom's teacher"
    ],
    "a": 1
   },
   {
    "q": "Whose bag is it?",
    "opts": [
     "Katya's",
     "Tom's",
     "the driver's"
    ],
    "a": 1
   },
   {
    "q": "Where is Tom from?",
    "opts": [
     "London",
     "Moscow",
     "St Petersburg",
     "Manchester"
    ],
    "a": 0
   },
   {
    "q": "How does Katya say she is?",
    "opts": [
     "Отлично",
     "Нормально",
     "Плохо",
     "Неплохо"
    ],
    "a": 0
   },
   {
    "q": "How do they leave the station?",
    "opts": [
     "by taxi",
     "by metro",
     "on foot",
     "by bus"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gostinica",
  "topic": "gostinica",
  "title": "В гостинице",
  "difficulty": "Tom's story, part 2",
  "intro": "Tom checks in. И = Ирина Петровна, the receptionist; Т = Том.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Вечер. Это гостиница «Нева». Гостиница старая, но хорошая. Вот администратор. Её зовут Ирина Петровна."
   },
   {
    "speaker": "И",
    "text": "Добрый вечер!"
   },
   {
    "speaker": "Т",
    "text": "Добрый вечер! Меня зовут Том Смит."
   },
   {
    "speaker": "И",
    "text": "Ваш паспорт, пожалуйста."
   },
   {
    "speaker": "Т",
    "text": "Вот он."
   },
   {
    "speaker": "И",
    "text": "Спасибо. Ваша комната — номер 12. Вот ключ."
   },
   {
    "speaker": "Т",
    "text": "Спасибо!"
   },
   {
    "speaker": "",
    "text": "Комната маленькая, но окно большое. А там — Нева!"
   }
  ],
  "vocab": {
   "вечер": "evening",
   "гостиница": "hotel",
   "старая": "old",
   "но": "but",
   "хорошая": "good",
   "администратор": "receptionist",
   "её": "her",
   "зовут": "they call (её зовут — her name is)",
   "ваш": "your (вы)",
   "ваша": "your (вы)",
   "паспорт": "passport",
   "комната": "room",
   "номер": "number; hotel room",
   "ключ": "key",
   "маленькая": "small",
   "окно": "window",
   "большое": "big",
   "там": "there"
  },
  "keywords": [
   {
    "rus": "гостиница",
    "eng": "hotel"
   },
   {
    "rus": "старая",
    "eng": "old"
   },
   {
    "rus": "ваш, ваша",
    "eng": "your (вы)"
   },
   {
    "rus": "номер",
    "eng": "hotel room"
   },
   {
    "rus": "ключ",
    "eng": "key"
   },
   {
    "rus": "маленькая",
    "eng": "small"
   }
  ],
  "questions": [
   {
    "q": "Is the hotel new?",
    "opts": [
     "Yes",
     "No, it's old",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Who is Ирина Петровна?",
    "opts": [
     "the receptionist",
     "Tom's friend",
     "a waiter",
     "Katya's mum"
    ],
    "a": 0
   },
   {
    "q": "What is Tom's room number?",
    "opts": [
     "12",
     "21",
     "7",
     "2"
    ],
    "a": 0
   },
   {
    "q": "Is the room big?",
    "opts": [
     "Yes",
     "No, it's small",
     "It doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What is big?",
    "opts": [
     "the window",
     "the room",
     "the key",
     "the bag"
    ],
    "a": 0
   },
   {
    "q": "What time of day is it?",
    "opts": [
     "evening",
     "morning",
     "afternoon",
     "night"
    ],
    "a": 0
   },
   {
    "q": "What does the receptionist ask for?",
    "opts": [
     "his passport",
     "his ticket",
     "his phone",
     "money"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "kafe",
  "topic": "kafe",
  "title": "В кафе «Самовар»",
  "difficulty": "Tom's story, part 3",
  "intro": "Breakfast. Д = Денис, the waiter; Т = Том; К = Катя.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Утро. Том и Катя — в кафе «Самовар». Вот меню, а вот официант. Его зовут Денис."
   },
   {
    "speaker": "Д",
    "text": "Доброе утро! Что вы хотите?"
   },
   {
    "speaker": "Т",
    "text": "Чай с лимоном, пожалуйста, и блины."
   },
   {
    "speaker": "К",
    "text": "А мне — кофе и сырники."
   },
   {
    "speaker": "Д",
    "text": "Хорошо."
   },
   {
    "speaker": "",
    "text": "Вот чай, кофе, блины и сырники. Блины очень вкусные!"
   }
  ],
  "vocab": {
   "утро": "morning",
   "меню": "menu",
   "официант": "waiter",
   "его": "his",
   "зовут": "they call (его зовут — his name is)",
   "хотите": "you want (что вы хотите? — what would you like?)",
   "лимоном": "lemon (с лимоном — with lemon)",
   "блины": "pancakes",
   "мне": "to me (а мне… — and for me…)",
   "сырники": "cottage-cheese fritters",
   "очень": "very",
   "вкусные": "tasty",
   "чай": "tea",
   "кофе": "coffee"
  },
  "keywords": [
   {
    "rus": "официант",
    "eng": "waiter"
   },
   {
    "rus": "что вы хотите?",
    "eng": "what would you like?"
   },
   {
    "rus": "с лимоном",
    "eng": "with lemon"
   },
   {
    "rus": "блины",
    "eng": "pancakes"
   },
   {
    "rus": "а мне…",
    "eng": "and for me…"
   },
   {
    "rus": "вкусные",
    "eng": "tasty"
   }
  ],
  "questions": [
   {
    "q": "What time of day is it?",
    "opts": [
     "morning",
     "afternoon",
     "evening",
     "night"
    ],
    "a": 0
   },
   {
    "q": "Who is Денис?",
    "opts": [
     "the waiter",
     "Tom's brother",
     "the cook",
     "Katya's friend"
    ],
    "a": 0
   },
   {
    "q": "What does Tom order?",
    "opts": [
     "tea with lemon and pancakes",
     "coffee and fritters",
     "tea and fritters",
     "coffee and pancakes"
    ],
    "a": 0
   },
   {
    "q": "What does Katya order?",
    "opts": [
     "coffee and fritters",
     "tea with lemon",
     "pancakes",
     "juice"
    ],
    "a": 0
   },
   {
    "q": "What is the café called?",
    "opts": [
     "Самовар",
     "Утро",
     "Нева",
     "Тройка"
    ],
    "a": 0
   },
   {
    "q": "What are very tasty?",
    "opts": [
     "the pancakes",
     "the fritters",
     "the tea",
     "the coffee"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "semya_kati",
  "topic": "semya",
  "title": "Семья Кати",
  "difficulty": "from Лист 7",
  "intro": "Katya describes her family.",
  "dialogue": [
   {
    "speaker": "",
    "text": "Меня зовут Катя. Это моя семья. Мой папа — Михаил Петрович, он преподаватель. Моя мама — Ирина. У меня есть брат, его зовут Дима. Он студент. Моя бабушка живёт в Москве. У нас есть кот, его зовут Бегемот. Я люблю свою семью."
   }
  ],
  "vocab": {
   "семья": "family",
   "папа": "dad",
   "преподаватель": "teacher",
   "мама": "mum",
   "брат": "brother",
   "студент": "student",
   "бабушка": "grandmother",
   "живёт": "lives",
   "москве": "Moscow (в Москве — in Moscow)",
   "нас": "us (у нас есть — we have)",
   "кот": "cat",
   "люблю": "I love",
   "свою": "my (own)",
   "меня": "me (у меня есть — I have)"
  },
  "keywords": [
   {
    "rus": "у меня есть",
    "eng": "I have"
   },
   {
    "rus": "преподаватель",
    "eng": "teacher"
   },
   {
    "rus": "живёт",
    "eng": "lives"
   },
   {
    "rus": "у нас есть",
    "eng": "we have"
   },
   {
    "rus": "я люблю",
    "eng": "I love"
   }
  ],
  "questions": [
   {
    "q": "Katya's father is a teacher.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Katya has a sister.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Dima is a student.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "Katya's grandmother lives in Moscow.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   },
   {
    "q": "The family has a dog.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 1
   },
   {
    "q": "Katya's patronymic is Михайловна.",
    "opts": [
     "Правда",
     "Неправда"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "semya_marii",
  "topic": "semya",
  "title": "Моя семья",
  "difficulty": "from lesson 7",
  "intro": "Maria introduces her family (from the class slides).",
  "dialogue": [
   {
    "speaker": "",
    "text": "Давайте познакомимся! Меня зовут Мария. Моя фамилия — Иванова. Это моя семья."
   },
   {
    "speaker": "",
    "text": "Это мой отец. Его зовут Николай. А это моя мать. Её зовут Наталья. Мой папа и моя мама — это мои родители."
   },
   {
    "speaker": "",
    "text": "А это мой брат. Его зовут Андрей. Это его жена. Её зовут Катя. Это их дети: сын Дима и дочь Наташа. Дима — мой племянник, а Наташа — моя племянница. Я их тётя."
   },
   {
    "speaker": "",
    "text": "А это моя бабушка и мой дедушка. Я их внучка, а Андрей — их внук. Это моя тётя Елена и её муж Михаил. Михаил — мой дядя, а я его племянница."
   },
   {
    "speaker": "",
    "text": "Вот наш дом. Это наша собака. Его зовут Шарик. А где наша кошка? Вот она! Мурка!"
   }
  ],
  "vocab": {
   "давайте": "let's",
   "познакомимся": "get acquainted",
   "фамилия": "surname",
   "отец": "father",
   "мать": "mother",
   "родители": "parents",
   "жена": "wife",
   "их": "their",
   "дети": "children",
   "сын": "son",
   "дочь": "daughter",
   "племянник": "nephew",
   "племянница": "niece",
   "тётя": "aunt",
   "внучка": "granddaughter",
   "внук": "grandson",
   "муж": "husband",
   "дядя": "uncle",
   "наш": "our",
   "наша": "our",
   "дом": "house",
   "собака": "dog",
   "кошка": "cat"
  },
  "keywords": [
   {
    "rus": "фамилия",
    "eng": "surname"
   },
   {
    "rus": "родители",
    "eng": "parents"
   },
   {
    "rus": "их",
    "eng": "their"
   },
   {
    "rus": "племянник, племянница",
    "eng": "nephew, niece"
   },
   {
    "rus": "наш, наша",
    "eng": "our"
   }
  ],
  "questions": [
   {
    "q": "Мария, твоя фамилия — Петрова?",
    "opts": [
     "Нет, Иванова.",
     "Да, Петрова.",
     "Нет, Смирнова."
    ],
    "a": 0
   },
   {
    "q": "Мария, Наталья — твоя сестра?",
    "opts": [
     "Нет, это моя мать.",
     "Да, это моя сестра.",
     "Нет, это моя тётя."
    ],
    "a": 0
   },
   {
    "q": "Мария, Дима — твой дядя?",
    "opts": [
     "Нет, это мой племянник.",
     "Да, это мой дядя.",
     "Нет, это мой брат."
    ],
    "a": 0
   },
   {
    "q": "Мария, Андрей — твой отец?",
    "opts": [
     "Нет, это мой брат.",
     "Да, это мой отец.",
     "Нет, это мой дядя."
    ],
    "a": 0
   },
   {
    "q": "Мария, Шарик — твоя кошка?",
    "opts": [
     "Нет, это наша собака.",
     "Да, это наша кошка.",
     "Нет, это мой брат."
    ],
    "a": 0
   },
   {
    "q": "Мария, Михаил — твой брат?",
    "opts": [
     "Нет, это мой дядя.",
     "Да, это мой брат.",
     "Нет, это мой отец."
    ],
    "a": 0
   },
   {
    "q": "Мария, Елена — твоя племянница?",
    "opts": [
     "Нет, это моя тётя.",
     "Да, это моя племянница.",
     "Нет, это моя мать."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "metro_conversation",
  "title": "Разговор в метро",
  "difficulty": "easy",
  "intro": "А bumps into his fellow student Б, who has a companion В.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Здравствуй, Ваня. Куда ты едешь?"
   },
   {
    "speaker": "Б",
    "text": "Домой, на улицу Волгина. А ты едешь в университет?"
   },
   {
    "speaker": "А",
    "text": "Нет, я тоже еду домой. Я теперь живу на улице Вавилова."
   },
   {
    "speaker": "Б",
    "text": "Познакомьтесь. Это моя подруга Мари, она англичанка."
   },
   {
    "speaker": "В",
    "text": "Здравствуйте, Миша."
   },
   {
    "speaker": "А",
    "text": "Простите, вас зовут Мэри?"
   },
   {
    "speaker": "В",
    "text": "Нет, Мари. Это французское имя. Но я не говорю по-французски."
   }
  ],
  "vocab": {
   "здравствуй": "hello (informal)",
   "куда": "where to?",
   "едешь": "you are going",
   "домой": "home",
   "улицу": "street (acc.)",
   "университет": "university",
   "тоже": "also / too",
   "еду": "I am going",
   "теперь": "now",
   "живу": "I live",
   "улице": "street (prep.)",
   "познакомьтесь": "let me introduce you",
   "моя": "my",
   "подруга": "female friend",
   "англичанка": "Englishwoman",
   "простите": "excuse me",
   "зовут": "they call (name)",
   "французское": "French",
   "имя": "name",
   "говорю": "I speak",
   "по-французски": "in French"
  },
  "keywords": [
   {
    "rus": "куда",
    "eng": "where to?"
   },
   {
    "rus": "домой",
    "eng": "home (direction)"
   },
   {
    "rus": "улица",
    "eng": "street"
   },
   {
    "rus": "подруга",
    "eng": "female friend"
   },
   {
    "rus": "англичанка",
    "eng": "Englishwoman"
   },
   {
    "rus": "имя",
    "eng": "name"
   },
   {
    "rus": "по-французски",
    "eng": "in French"
   }
  ],
  "questions": [
   {
    "q": "What is the name of А?",
    "opts": [
     "Ваня",
     "Миша",
     "Мари",
     "Борис"
    ],
    "a": 1
   },
   {
    "q": "Where does А now live?",
    "opts": [
     "улица Волгина",
     "улица Вавилова",
     "улица Пушкина",
     "улица Ленина"
    ],
    "a": 1
   },
   {
    "q": "Where is Б going?",
    "opts": [
     "To university",
     "To the shops",
     "Home",
     "To the metro"
    ],
    "a": 2
   },
   {
    "q": "What nationality is В?",
    "opts": [
     "French",
     "Russian",
     "American",
     "English"
    ],
    "a": 3
   },
   {
    "q": "Which language does В say she does not speak?",
    "opts": [
     "Russian",
     "English",
     "French",
     "German"
    ],
    "a": 2
   },
   {
    "q": "What is the name of Б?",
    "opts": [
     "Миша",
     "Ваня",
     "Мари",
     "Наташа"
    ],
    "a": 1
   },
   {
    "q": "Where is Б going home to?",
    "opts": [
     "улица Вавилова",
     "улица Пушкина",
     "улица Волгина",
     "улица Ленина"
    ],
    "a": 2
   },
   {
    "q": "What does В say about her name?",
    "opts": [
     "It is a Russian name",
     "It is a French name",
     "It is an English name",
     "It is a German name"
    ],
    "a": 1
   },
   {
    "q": "Was А going to university?",
    "opts": [
     "Yes",
     "No",
     "He doesn't say",
     "He was already there"
    ],
    "a": 1
   },
   {
    "q": "How does А greet Б at the start?",
    "opts": [
     "Добрый день",
     "Здравствуйте",
     "Привет",
     "Здравствуй"
    ],
    "a": 3
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "restaurant",
  "title": "В ресторане",
  "difficulty": "easy",
  "intro": "Джон (Д), an Englishman visiting Moscow, sits down at a restaurant. Официантка (О) comes to take his order.",
  "dialogue": [
   {
    "speaker": "О",
    "text": "Здравствуйте. Добрый день."
   },
   {
    "speaker": "Д",
    "text": "Здравствуйте. Простите, вы говорите по-английски?"
   },
   {
    "speaker": "О",
    "text": "Нет, я не говорю по-английски. Вы говорите по-русски?"
   },
   {
    "speaker": "Д",
    "text": "Да, немного. Где меню, пожалуйста?"
   },
   {
    "speaker": "О",
    "text": "Вот меню."
   },
   {
    "speaker": "Д",
    "text": "Спасибо. Это борщ?"
   },
   {
    "speaker": "О",
    "text": "Да, это борщ. Со сметаной."
   },
   {
    "speaker": "Д",
    "text": "Хорошо. Борщ, пожалуйста. И вино. Белое вино есть?"
   },
   {
    "speaker": "О",
    "text": "Да, есть. Пожалуйста."
   },
   {
    "speaker": "Д",
    "text": "Спасибо!"
   }
  ],
  "vocab": {
   "добрый": "good",
   "день": "day",
   "говорите": "you speak",
   "по-английски": "in English",
   "по-русски": "in Russian",
   "немного": "a little",
   "меню": "menu",
   "борщ": "beetroot soup",
   "со": "with",
   "сметаной": "sour cream (instr.)",
   "хорошо": "good / fine",
   "белое": "white",
   "вино": "wine",
   "есть": "there is / is available"
  },
  "keywords": [
   {
    "rus": "немного",
    "eng": "a little"
   },
   {
    "rus": "меню",
    "eng": "menu"
   },
   {
    "rus": "борщ",
    "eng": "beetroot soup"
   },
   {
    "rus": "сметана",
    "eng": "sour cream"
   },
   {
    "rus": "белое вино",
    "eng": "white wine"
   },
   {
    "rus": "есть",
    "eng": "there is / is available"
   }
  ],
  "questions": [
   {
    "q": "What nationality is Джон?",
    "opts": [
     "American",
     "French",
     "English",
     "Australian"
    ],
    "a": 2
   },
   {
    "q": "Does the waitress speak English?",
    "opts": [
     "Yes, a little",
     "Yes, very well",
     "No",
     "She doesn't say"
    ],
    "a": 2
   },
   {
    "q": "What food does Джон order?",
    "opts": [
     "Салат",
     "Борщ",
     "Шоколад",
     "Сметана"
    ],
    "a": 1
   },
   {
    "q": "What does Джон ask about the dish before ordering?",
    "opts": [
     "Whether it is fresh",
     "Whether it is expensive",
     "Whether it is borsch",
     "Whether it comes with bread"
    ],
    "a": 2
   },
   {
    "q": "What does Джон drink with his meal?",
    "opts": [
     "Чай",
     "Водка",
     "Пиво",
     "Вино"
    ],
    "a": 3
   },
   {
    "q": "Does the борщ come with something?",
    "opts": [
     "Хлеб",
     "Сахар",
     "Сметана",
     "Шоколад"
    ],
    "a": 2
   },
   {
    "q": "How does Джон describe his Russian?",
    "opts": [
     "Very good",
     "A little",
     "Not at all",
     "Only reading"
    ],
    "a": 1
   },
   {
    "q": "What colour wine does Джон ask for?",
    "opts": [
     "Red",
     "White",
     "Rosé",
     "He doesn't specify"
    ],
    "a": 1
   },
   {
    "q": "What does Джон ask for before ordering food?",
    "opts": [
     "Water",
     "The bill",
     "The menu",
     "A table"
    ],
    "a": 2
   },
   {
    "q": "How does the waitress greet Джон?",
    "opts": [
     "Привет",
     "Здравствуй",
     "Добрый день",
     "До свидания"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "hotel",
  "title": "В гостинице",
  "difficulty": "easy",
  "intro": "Лука (Л), a Neapolitan visiting Moscow, arrives at his hotel. Администратор (А) is at the desk.",
  "dialogue": [
   {
    "speaker": "Л",
    "text": "Здравствуйте. Меня зовут Лука. Я живу в Неаполе."
   },
   {
    "speaker": "А",
    "text": "Здравствуйте. Вы говорите по-русски?"
   },
   {
    "speaker": "Л",
    "text": "Да, немного. Я изучаю русский язык."
   },
   {
    "speaker": "А",
    "text": "Хорошо! Вы говорите по-русски очень хорошо."
   },
   {
    "speaker": "Л",
    "text": "Спасибо! Простите, где метро?"
   },
   {
    "speaker": "А",
    "text": "Метро? Вот. Прямо и направо."
   },
   {
    "speaker": "Л",
    "text": "А автобус тоже там?"
   },
   {
    "speaker": "А",
    "text": "Да, автобус и троллейбус."
   },
   {
    "speaker": "Л",
    "text": "Отлично. Спасибо!"
   },
   {
    "speaker": "А",
    "text": "Пожалуйста. До свидания!"
   }
  ],
  "vocab": {
   "меня": "me (acc.)",
   "зовут": "they call (name)",
   "живу": "I live",
   "говорите": "you speak",
   "по-русски": "in Russian",
   "немного": "a little",
   "изучаю": "I am studying",
   "русский": "Russian",
   "язык": "language",
   "очень": "very",
   "метро": "metro",
   "прямо": "straight on",
   "направо": "to the right",
   "автобус": "bus",
   "тоже": "also",
   "там": "there",
   "троллейбус": "trolleybus",
   "отлично": "excellent"
  },
  "keywords": [
   {
    "rus": "изучаю",
    "eng": "I am studying"
   },
   {
    "rus": "язык",
    "eng": "language"
   },
   {
    "rus": "прямо",
    "eng": "straight on"
   },
   {
    "rus": "направо",
    "eng": "to the right"
   },
   {
    "rus": "троллейбус",
    "eng": "trolleybus"
   },
   {
    "rus": "отлично",
    "eng": "excellent"
   }
  ],
  "questions": [
   {
    "q": "Where is Лука from?",
    "opts": [
     "Rome",
     "Milan",
     "Naples",
     "Turin"
    ],
    "a": 2
   },
   {
    "q": "Why does Лука speak some Russian?",
    "opts": [
     "He has a Russian wife",
     "He is studying Russian",
     "He lived in Moscow",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does the administrator say about Лука's Russian?",
    "opts": [
     "It needs improvement",
     "It is very good",
     "It is a little strange",
     "It is bad"
    ],
    "a": 1
   },
   {
    "q": "What does Лука ask the administrator to help him find?",
    "opts": [
     "A restaurant",
     "A taxi",
     "The metro",
     "The post office"
    ],
    "a": 2
   },
   {
    "q": "How does the administrator direct Лука?",
    "opts": [
     "Left and then straight on",
     "Straight on and turn right",
     "Right and then left",
     "Straight on and turn left"
    ],
    "a": 1
   },
   {
    "q": "Is there a bus stop near the metro?",
    "opts": [
     "No",
     "Yes, bus and trolleybus",
     "Yes, bus only",
     "He doesn't ask"
    ],
    "a": 1
   },
   {
    "q": "Where does Лука normally live?",
    "opts": [
     "In Moscow",
     "In Rome",
     "In Naples",
     "In Milan"
    ],
    "a": 2
   },
   {
    "q": "How does Лука describe his Russian at first?",
    "opts": [
     "Very good",
     "A little",
     "Not at all",
     "Only reading"
    ],
    "a": 1
   },
   {
    "q": "What does the administrator say when Лука thanks him at the end?",
    "opts": [
     "Спасибо",
     "Привет",
     "Пожалуйста",
     "Хорошо"
    ],
    "a": 2
   },
   {
    "q": "Where is Лука speaking from at the start of the conversation?",
    "opts": [
     "A restaurant",
     "A metro station",
     "A hotel",
     "A bus stop"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "belgrade",
  "title": "Юлия в Белграде",
  "difficulty": "easy",
  "intro": "Юлия (Ю), a Russian student, now lives in Belgrade. She speaks to her friend Анна (А) on the phone.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Привет, Юля! Где ты теперь живёшь?"
   },
   {
    "speaker": "Ю",
    "text": "Привет, Аня! Я теперь живу в Белграде."
   },
   {
    "speaker": "А",
    "text": "В Белграде? Это в Сербии?"
   },
   {
    "speaker": "Ю",
    "text": "Да, в Сербии. Белград — красивый город."
   },
   {
    "speaker": "А",
    "text": "Ты говоришь по-сербски?"
   },
   {
    "speaker": "Ю",
    "text": "Немного. Но я понимаю, потому что я говорю по-русски."
   },
   {
    "speaker": "А",
    "text": "Ты едешь домой в Москву?"
   },
   {
    "speaker": "Ю",
    "text": "Нет, я не еду. Я изучаю язык здесь."
   },
   {
    "speaker": "А",
    "text": "Понятно. До свидания, Юля!"
   },
   {
    "speaker": "Ю",
    "text": "До свидания, Аня!"
   }
  ],
  "vocab": {
   "теперь": "now",
   "живёшь": "you live",
   "живу": "I live",
   "Белград": "Belgrade",
   "Сербии": "Serbia (prep.)",
   "красивый": "beautiful",
   "город": "city / town",
   "говоришь": "you speak",
   "по-сербски": "in Serbian",
   "немного": "a little",
   "понимаю": "I understand",
   "потому что": "because",
   "по-русски": "in Russian",
   "едешь": "you are going",
   "домой": "home",
   "изучаю": "I am studying",
   "язык": "language",
   "здесь": "here",
   "понятно": "I see / understood"
  },
  "keywords": [
   {
    "rus": "красивый",
    "eng": "beautiful"
   },
   {
    "rus": "город",
    "eng": "city / town"
   },
   {
    "rus": "по-сербски",
    "eng": "in Serbian"
   },
   {
    "rus": "потому что",
    "eng": "because"
   },
   {
    "rus": "понятно",
    "eng": "I see / understood"
   },
   {
    "rus": "здесь",
    "eng": "here"
   }
  ],
  "questions": [
   {
    "q": "Where does Юлия now live?",
    "opts": [
     "Moscow",
     "Warsaw",
     "Belgrade",
     "Sofia"
    ],
    "a": 2
   },
   {
    "q": "In which country is Belgrade?",
    "opts": [
     "Russia",
     "Serbia",
     "Poland",
     "Bulgaria"
    ],
    "a": 1
   },
   {
    "q": "Does Юлия speak Serbian?",
    "opts": [
     "Yes, very well",
     "A little",
     "Not at all",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Why does Юлия understand Serbian?",
    "opts": [
     "She studied it at university",
     "Because she speaks Russian",
     "She lived in Serbia before",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Is Юлия going back to Moscow?",
    "opts": [
     "Yes, soon",
     "No",
     "She doesn't know",
     "Yes, next week"
    ],
    "a": 1
   },
   {
    "q": "What is Юлия doing in Belgrade?",
    "opts": [
     "Working",
     "Studying the language",
     "Visiting friends",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does Юлия say about Belgrade?",
    "opts": [
     "It is very big",
     "It is a beautiful city",
     "It is cold",
     "It is expensive"
    ],
    "a": 1
   },
   {
    "q": "What is the name of Юлия's friend?",
    "opts": [
     "Наташа",
     "Мари",
     "Анна",
     "Мэри"
    ],
    "a": 2
   },
   {
    "q": "How are the two friends speaking?",
    "opts": [
     "In person in Moscow",
     "On the phone",
     "By letter",
     "In Belgrade"
    ],
    "a": 1
   },
   {
    "q": "How does Юлия address her friend informally?",
    "opts": [
     "Анна",
     "Аня",
     "Анечка",
     "Аннушка"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "spartak",
  "title": "На стадионе",
  "difficulty": "easy",
  "intro": "Вадим (В) and his friend Борис (Б) are going to watch Spartak Moscow play. They talk on the metro.",
  "dialogue": [
   {
    "speaker": "В",
    "text": "Борис! Привет! Ты едешь на стадион?"
   },
   {
    "speaker": "Б",
    "text": "Да! Спартак играет сегодня. Это матч!"
   },
   {
    "speaker": "В",
    "text": "Я знаю. Спартак — мой любимый клуб."
   },
   {
    "speaker": "Б",
    "text": "И мой тоже! Ты живёшь далеко от стадиона?"
   },
   {
    "speaker": "В",
    "text": "Нет, я живу на улице Волгина. Это близко."
   },
   {
    "speaker": "Б",
    "text": "Хорошо. Я еду на автобусе обычно, но сегодня на метро."
   },
   {
    "speaker": "В",
    "text": "Метро быстрее. Где твой билет?"
   },
   {
    "speaker": "Б",
    "text": "Вот он. А твой?"
   },
   {
    "speaker": "В",
    "text": "Вот мой билет. Отлично!"
   },
   {
    "speaker": "Б",
    "text": "Спартак — чемпион!"
   }
  ],
  "vocab": {
   "стадион": "stadium",
   "играет": "is playing",
   "сегодня": "today",
   "матч": "match",
   "знаю": "I know",
   "мой": "my",
   "любимый": "favourite",
   "клуб": "club",
   "тоже": "also / too",
   "живёшь": "you live",
   "далеко": "far",
   "от": "from",
   "близко": "close / nearby",
   "обычно": "usually",
   "быстрее": "faster",
   "твой": "your (informal)",
   "билет": "ticket",
   "отлично": "excellent",
   "чемпион": "champion"
  },
  "keywords": [
   {
    "rus": "стадион",
    "eng": "stadium"
   },
   {
    "rus": "играет",
    "eng": "is playing"
   },
   {
    "rus": "сегодня",
    "eng": "today"
   },
   {
    "rus": "любимый",
    "eng": "favourite"
   },
   {
    "rus": "далеко",
    "eng": "far"
   },
   {
    "rus": "близко",
    "eng": "close / nearby"
   },
   {
    "rus": "обычно",
    "eng": "usually"
   },
   {
    "rus": "билет",
    "eng": "ticket"
   }
  ],
  "questions": [
   {
    "q": "Where are Вадим and Борис going?",
    "opts": [
     "To the cinema",
     "To the restaurant",
     "To the stadium",
     "To the hotel"
    ],
    "a": 2
   },
   {
    "q": "Which football club is playing today?",
    "opts": [
     "Динамо",
     "Спартак",
     "ЦСКА",
     "Локомотив"
    ],
    "a": 1
   },
   {
    "q": "Whose favourite club is Спартак?",
    "opts": [
     "Only Вадим's",
     "Only Борис's",
     "Both of theirs",
     "Neither of theirs"
    ],
    "a": 2
   },
   {
    "q": "Does Вадим live far from the stadium?",
    "opts": [
     "Yes, very far",
     "No, it is close",
     "He doesn't say",
     "He lives in another city"
    ],
    "a": 1
   },
   {
    "q": "How does Борис usually travel to the stadium?",
    "opts": [
     "By metro",
     "By trolleybus",
     "By bus",
     "By taxi"
    ],
    "a": 2
   },
   {
    "q": "How is Борис travelling today?",
    "opts": [
     "By bus",
     "By trolleybus",
     "By metro",
     "On foot"
    ],
    "a": 2
   },
   {
    "q": "What does Вадим say about the metro?",
    "opts": [
     "It is expensive",
     "It is faster",
     "It is far",
     "It is slow"
    ],
    "a": 1
   },
   {
    "q": "What does Борис show Вадим?",
    "opts": [
     "His passport",
     "His ticket",
     "His phone",
     "His metro card"
    ],
    "a": 1
   },
   {
    "q": "What street does Вадим live on?",
    "opts": [
     "улица Вавилова",
     "улица Ленина",
     "улица Волгина",
     "улица Пушкина"
    ],
    "a": 2
   },
   {
    "q": "What does Борис shout at the end?",
    "opts": [
     "Спартак играет!",
     "Спартак — чемпион!",
     "Спартак — клуб!",
     "Спартак — матч!"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "vokzal",
  "title": "На вокзале",
  "difficulty": "easy",
  "intro": "Анна (А) is at Moscow's Leningradsky station and asks a passerby (Б) for help.",
  "dialogue": [
   {
    "speaker": "А",
    "text": "Простите, пожалуйста. Где здесь касса?"
   },
   {
    "speaker": "Б",
    "text": "Касса? Прямо и налево."
   },
   {
    "speaker": "А",
    "text": "Спасибо. А туалет где?"
   },
   {
    "speaker": "Б",
    "text": "Туалет — направо."
   },
   {
    "speaker": "А",
    "text": "Понятно. А где ресторан? Я не знаю этот вокзал."
   },
   {
    "speaker": "Б",
    "text": "Ресторан? Вон там, налево."
   },
   {
    "speaker": "А",
    "text": "Отлично! Когда работает ресторан?"
   },
   {
    "speaker": "Б",
    "text": "Не знаю. Я думаю, что он работает сейчас."
   },
   {
    "speaker": "А",
    "text": "Спасибо большое!"
   },
   {
    "speaker": "Б",
    "text": "Пожалуйста. До свидания!"
   }
  ],
  "vocab": {
   "простите": "excuse me",
   "пожалуйста": "please / you're welcome",
   "касса": "ticket desk",
   "прямо": "straight on",
   "налево": "to the left",
   "спасибо": "thank you",
   "туалет": "toilet",
   "направо": "to the right",
   "понятно": "I see / understood",
   "ресторан": "restaurant",
   "знаю": "I know",
   "вокзал": "station",
   "отлично": "excellent",
   "когда": "when",
   "работает": "is open / works",
   "думаю": "I think",
   "что": "that (conjunction)",
   "сейчас": "now / right now",
   "большое": "big / (thank you very much)"
  },
  "keywords": [
   {
    "rus": "касса",
    "eng": "ticket desk"
   },
   {
    "rus": "вокзал",
    "eng": "station"
   },
   {
    "rus": "прямо",
    "eng": "straight on"
   },
   {
    "rus": "налево",
    "eng": "to the left"
   },
   {
    "rus": "направо",
    "eng": "to the right"
   },
   {
    "rus": "когда работает",
    "eng": "when is it open"
   },
   {
    "rus": "сейчас",
    "eng": "now / right now"
   }
  ],
  "questions": [
   {
    "q": "Where is Анна?",
    "opts": [
     "At the airport",
     "At the hotel",
     "At the station",
     "At the post office"
    ],
    "a": 2
   },
   {
    "q": "Where is the ticket desk?",
    "opts": [
     "Straight on and right",
     "Straight on and left",
     "To the right",
     "Over there on the left"
    ],
    "a": 1
   },
   {
    "q": "Where is the toilet?",
    "opts": [
     "To the left",
     "Straight on",
     "To the right",
     "Over there"
    ],
    "a": 2
   },
   {
    "q": "Where is the restaurant?",
    "opts": [
     "Straight on and left",
     "To the right",
     "Over there on the left",
     "Straight on"
    ],
    "a": 2
   },
   {
    "q": "Does Анна know the station well?",
    "opts": [
     "Yes, she knows it well",
     "No, she doesn't know it",
     "She's been here before",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What does Анна ask about the restaurant?",
    "opts": [
     "What it serves",
     "How much it costs",
     "When it is open",
     "Where exactly it is"
    ],
    "a": 2
   },
   {
    "q": "Does the passerby know when the restaurant opens?",
    "opts": [
     "Yes, it opens at noon",
     "No, but he thinks it is open now",
     "Yes, it is closed",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "How does Анна thank the passerby at the end?",
    "opts": [
     "Спасибо",
     "Пожалуйста",
     "Спасибо большое",
     "Очень приятно"
    ],
    "a": 2
   },
   {
    "q": "How does the passerby direct Анна to the toilet?",
    "opts": [
     "Прямо и налево",
     "Прямо и направо",
     "Налево",
     "Направо"
    ],
    "a": 3
   },
   {
    "q": "How does the passerby say goodbye?",
    "opts": [
     "Привет!",
     "До свидания!",
     "Пока!",
     "Спасибо!"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "o_rossii",
  "title": "О России",
  "difficulty": "easy",
  "intro": "Two students, Карлос (К) and Ольга (О), talk about Russia before class.",
  "dialogue": [
   {
    "speaker": "К",
    "text": "Ольга, ты знаешь, где Иркутск?"
   },
   {
    "speaker": "О",
    "text": "Да, конечно. Иркутск в Сибири."
   },
   {
    "speaker": "К",
    "text": "А где Сибирь?"
   },
   {
    "speaker": "О",
    "text": "Сибирь — в России. Это очень большой регион."
   },
   {
    "speaker": "К",
    "text": "Когда работает музей в Иркутске?"
   },
   {
    "speaker": "О",
    "text": "Не знаю. Почему ты спрашиваешь?"
   },
   {
    "speaker": "К",
    "text": "Я еду в Иркутск в августе."
   },
   {
    "speaker": "О",
    "text": "Отлично! Ты едешь на поезде?"
   },
   {
    "speaker": "К",
    "text": "Да, на поезде. По Транссибирской магистрали!"
   },
   {
    "speaker": "О",
    "text": "Замечательно! Это красивый маршрут."
   }
  ],
  "vocab": {
   "знаешь": "you know",
   "конечно": "of course",
   "сибири": "Siberia (prep.)",
   "сибирь": "Siberia",
   "большой": "big / large",
   "регион": "region",
   "когда": "when",
   "работает": "is open / works",
   "музей": "museum",
   "почему": "why",
   "спрашиваешь": "you are asking",
   "еду": "I am going",
   "августе": "August (prep.)",
   "отлично": "excellent",
   "едешь": "you are going",
   "поезде": "train (prep.)",
   "замечательно": "wonderful",
   "красивый": "beautiful",
   "маршрут": "route"
  },
  "keywords": [
   {
    "rus": "конечно",
    "eng": "of course"
   },
   {
    "rus": "большой",
    "eng": "big / large"
   },
   {
    "rus": "музей",
    "eng": "museum"
   },
   {
    "rus": "поезд",
    "eng": "train"
   },
   {
    "rus": "маршрут",
    "eng": "route"
   },
   {
    "rus": "замечательно",
    "eng": "wonderful"
   }
  ],
  "questions": [
   {
    "q": "Where is Irkutsk?",
    "opts": [
     "In Moscow",
     "In Siberia",
     "In Ukraine",
     "In the Crimea"
    ],
    "a": 1
   },
   {
    "q": "What does Ольга say about Siberia?",
    "opts": [
     "It is cold",
     "It is very big",
     "It is beautiful",
     "It is in Ukraine"
    ],
    "a": 1
   },
   {
    "q": "What does Карлос ask about the museum?",
    "opts": [
     "Where it is",
     "How much it costs",
     "When it is open",
     "What is inside"
    ],
    "a": 2
   },
   {
    "q": "Does Ольга know when the museum is open?",
    "opts": [
     "Yes, it opens at 10",
     "No, she doesn't know",
     "Yes, it is closed",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "When is Карлос going to Irkutsk?",
    "opts": [
     "In July",
     "In September",
     "In August",
     "In June"
    ],
    "a": 2
   },
   {
    "q": "How is Карлос travelling to Irkutsk?",
    "opts": [
     "By plane",
     "By bus",
     "By train",
     "By car"
    ],
    "a": 2
   },
   {
    "q": "What is the Trans-Siberian called in Russian?",
    "opts": [
     "Транссибирская магистраль",
     "Транссибирский поезд",
     "Сибирский маршрут",
     "Сибирская дорога"
    ],
    "a": 0
   },
   {
    "q": "What does Ольга say about the Trans-Siberian route?",
    "opts": [
     "It is long",
     "It is beautiful",
     "It is expensive",
     "It is famous"
    ],
    "a": 1
   },
   {
    "q": "Why is Карлос asking about the museum?",
    "opts": [
     "He works there",
     "He is going to Irkutsk",
     "He is studying museums",
     "He doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Where is the conversation taking place?",
    "opts": [
     "On the train",
     "In Siberia",
     "Before class",
     "In a museum"
    ],
    "a": 2
   }
  ],
  "topic": "penguin"
 },
 {
  "id": "mary_manchester",
  "title": "Мэри в Манчестере",
  "difficulty": "easy",
  "intro": "Мэри Робинсон (М) is back in England. Her friend Наташа (Н) calls her from Moscow.",
  "dialogue": [
   {
    "speaker": "Н",
    "text": "Мэри! Привет! Где ты сейчас?"
   },
   {
    "speaker": "М",
    "text": "Привет, Наташа! Я в Манчестере. В Англии."
   },
   {
    "speaker": "Н",
    "text": "Ты живёшь в центре города?"
   },
   {
    "speaker": "М",
    "text": "Нет, я живу не в центре. Я живу в институте."
   },
   {
    "speaker": "Н",
    "text": "В институте? Ты изучаешь русский язык там?"
   },
   {
    "speaker": "М",
    "text": "Да! Я изучаю русский язык в институте в Манчестере."
   },
   {
    "speaker": "Н",
    "text": "И ты говоришь по-русски очень хорошо!"
   },
   {
    "speaker": "М",
    "text": "Спасибо. Я говорю по-русски, но я не говорю по-итальянски."
   },
   {
    "speaker": "Н",
    "text": "А где живёт твой брат?"
   },
   {
    "speaker": "М",
    "text": "Он живёт в Лондоне, в центре."
   }
  ],
  "vocab": {
   "сейчас": "now / right now",
   "манчестере": "Manchester (prep.)",
   "англии": "England (prep.)",
   "живёшь": "you live",
   "центре": "centre (prep.)",
   "города": "city (gen.)",
   "институте": "institute (prep.)",
   "изучаешь": "you are studying",
   "язык": "language",
   "говоришь": "you speak",
   "по-русски": "in Russian",
   "хорошо": "well / good",
   "по-итальянски": "in Italian",
   "твой": "your (informal)",
   "брат": "brother",
   "лондоне": "London (prep.)"
  },
  "keywords": [
   {
    "rus": "сейчас",
    "eng": "now / right now"
   },
   {
    "rus": "центр",
    "eng": "centre"
   },
   {
    "rus": "институт",
    "eng": "institute"
   },
   {
    "rus": "изучаю",
    "eng": "I am studying"
   },
   {
    "rus": "по-итальянски",
    "eng": "in Italian"
   },
   {
    "rus": "твой",
    "eng": "your (informal)"
   }
  ],
  "questions": [
   {
    "q": "Where is Мэри when Наташа calls?",
    "opts": [
     "In Moscow",
     "In London",
     "In Manchester",
     "In Brighton"
    ],
    "a": 2
   },
   {
    "q": "Does Мэри live in the city centre?",
    "opts": [
     "Yes, in the centre",
     "No, she lives at the institute",
     "No, she lives in the suburbs",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "What is Мэри studying in Manchester?",
    "opts": [
     "English",
     "Italian",
     "Russian",
     "French"
    ],
    "a": 2
   },
   {
    "q": "What does Наташа say about Мэри's Russian?",
    "opts": [
     "It needs work",
     "It is very good",
     "It is a little strange",
     "It is getting better"
    ],
    "a": 1
   },
   {
    "q": "Which language does Мэри say she does NOT speak?",
    "opts": [
     "Russian",
     "English",
     "French",
     "Italian"
    ],
    "a": 3
   },
   {
    "q": "Where does Мэри's brother live?",
    "opts": [
     "In Manchester",
     "In Brighton",
     "In Oxford",
     "In London"
    ],
    "a": 3
   },
   {
    "q": "Where exactly in London does her brother live?",
    "opts": [
     "In the suburbs",
     "In the centre",
     "Near the station",
     "She doesn't say"
    ],
    "a": 1
   },
   {
    "q": "Where is Наташа calling from?",
    "opts": [
     "Manchester",
     "London",
     "Moscow",
     "Brighton"
    ],
    "a": 2
   },
   {
    "q": "Where is Мэри's institute?",
    "opts": [
     "In London",
     "In Manchester",
     "In Moscow",
     "In Brighton"
    ],
    "a": 1
   },
   {
    "q": "How does Мэри address Наташа at the start?",
    "opts": [
     "Здравствуйте",
     "Привет",
     "Добрый день",
     "Простите"
    ],
    "a": 1
   }
  ],
  "topic": "penguin"
 }
];
