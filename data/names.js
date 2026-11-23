// Russian names exercise data. Questions are generated from these lists in names.html.
// official name, familiar form, fact
const FEMALE_NAMES = [
  {"official": "Александра", "familiar": "Саша", "fact": "Alexandra Feodorovna (Александра Фёдоровна, 6 June 1872 – 17 July 1918) was the last Empress of Russia, wife of Nicholas II. Саша is the familiar form of both Александра and Александр."},
  {"official": "Анна", "familiar": "Аня", "fact": "Anna Akhmatova (Анна Андреевна Ахматова, 23 June 1889 – 5 March 1966) was one of the most significant Russian poets of the 20th century, known for her lyric poetry and the epic Requiem."},
  {"official": "Варвара", "familiar": "Варя", "fact": "Varvara Stepanova (Варвара Фёдоровна Степанова, 23 October 1894 – 20 May 1958) was a Russian Constructivist artist known for her bold geometric textile and graphic designs. The name Варвара derives from the Greek for 'foreign' or 'strange' — the same root as 'barbarian'."},
  {"official": "Галина", "familiar": "Галя", "fact": "Galina Ulanova (Галина Сергеевна Уланова, 8 January 1910 – 21 March 1998) was a Soviet prima ballerina, widely considered one of the greatest ballet dancers of the 20th century."},
  {"official": "Дарья", "familiar": "Даша", "fact": "Dasha Zhukova (Дарья Александровна Жукова, born 1981) is a Russian entrepreneur and art collector, founder of the Garage Museum of Contemporary Art in Moscow."},
  {"official": "Екатерина", "familiar": "Катя", "fact": "Catherine the Great (Екатерина Алексеевна, 2 May 1729 – 17 November 1796) was Empress of Russia from 1762 to 1796, the country's longest-ruling female leader."},
  {"official": "Елена", "familiar": "Лена", "fact": "Elena Isinbayeva (Елена Гаджиевна Исинбаева, born 3 June 1982) is a Russian pole vaulter who set 28 world records and won two Olympic gold medals."},
  {"official": "Ирина", "familiar": "Ира", "fact": "Irina Rodnina (Ирина Константиновна Роднина, born 12 September 1949) is a Soviet and Russian pairs figure skater who won three Olympic gold medals in a row, in 1972, 1976 and 1980."},
  {"official": "Ксения", "familiar": "Ксюша", "fact": "Xenia of Saint Petersburg (Ксения Григорьевна Петербургская, c.1730 – c.1803) is a Russian Orthodox saint venerated for her humility and piety."},
  {"official": "Людмила", "familiar": "Люда", "fact": "Lyudmila Pavlichenko (Людмила Михайловна Павличенко, 12 July 1916 – 27 October 1974) was a Soviet sniper credited with 309 confirmed kills in World War II, making her the most successful female sniper in history. The name means 'dear to the people' in Slavic — люд (people) + мила (dear)."},
  {"official": "Любовь", "familiar": "Люба", "fact": "Lyubov Orlova (Любовь Петровна Орлова, 29 January 1902 – 26 January 1975) was a Soviet actress and one of the first major stars of Soviet cinema. Любовь literally means 'love'."},
  {"official": "Мария", "familiar": "Маша", "fact": "Maria Yermolova (Мария Николаевна Ермолова, 15 July 1853 – 12 March 1928) was a celebrated Russian actress of the Maly Theatre, regarded as the greatest tragedienne of the Russian stage."},
  {"official": "Надежда", "familiar": "Надя", "fact": "Nadezhda Krupskaya (Надежда Константиновна Крупская, 26 February 1869 – 27 February 1939) was a Russian Marxist revolutionary and wife of Vladimir Lenin. Надежда means 'hope' in Russian."},
  {"official": "Наталья", "familiar": "Наташа", "fact": "Natalya Goncharova (Наталья Николаевна Гончарова, 27 August 1812 – 26 November 1863) was the wife of Alexander Pushkin, widely regarded as one of the great beauties of her era."},
  {"official": "Нина", "familiar": "Ниночка", "fact": "Nina Berberova (Нина Николаевна Берберова, 8 August 1901 – 26 September 1993) was a Russian-American writer and memoirist whose autobiography The Italics Are Mine is a landmark of Russian émigré literature. Ниночка adds -очка for extra tenderness — a characteristic Russian layering of affectionate suffixes."},
  {"official": "Ольга", "familiar": "Оля", "fact": "Princess Olga of Kiev (Ольга Киевская, c.890 – 11 July 969) was the first ruler of Kievan Rus to convert to Christianity and is venerated as a saint in the Orthodox Church."},
  {"official": "Светлана", "familiar": "Света", "fact": "Svetlana Alexievich (Светлана Александровна Алексиевич, born 31 May 1948) is a Belarusian investigative journalist and prose writer who won the Nobel Prize in Literature in 2015."},
  {"official": "Татьяна", "familiar": "Таня", "fact": "Tatiana Larina (Татьяна Ларина) is the heroine of Pushkin's verse novel Eugene Onegin (Евгений Онегин, 1833). Her famous letter to Onegin is one of the most celebrated passages in Russian literature."},
  {"official": "Тамара", "familiar": "Тома", "fact": "Tamara Karsavina (Тамара Платоновна Карсавина, 9 March 1885 – 26 May 1978) was a Russian ballerina who was a principal dancer at the Imperial Ballet and later co-founded the Royal Academy of Dance in London. The name is of Hebrew origin (תָּמָר), meaning 'date palm'."},
  {"official": "Юлия", "familiar": "Юля", "fact": "Yulia Lipnitskaya (Юлия Олеговна Липницкая, born 5 June 1998) is a Russian figure skater who won Olympic gold in the team event at the 2014 Sochi Games, aged 15."}
];
// official name, familiar form, fact
const MALE_NAMES = [
  {"official": "Александр", "familiar": "Саша", "fact": "Alexander Pushkin (Александр Сергеевич Пушкин, 6 June 1799 – 10 February 1837) is regarded as the greatest Russian poet and the founder of modern Russian literature."},
  {"official": "Алексей", "familiar": "Лёша", "fact": "Alexei Navalny (Алексей Анатольевич Навальный, 4 June 1976 – 16 February 2024) was a Russian opposition politician and anti-corruption activist."},
  {"official": "Андрей", "familiar": "Андрюша", "fact": "Prince Andrei Bolkonsky (Андрей Николаевич Болконский) is a central character in Tolstoy's War and Peace (Война и мир, 1869) — aristocratic, idealistic, and searching for meaning."},
  {"official": "Антон", "familiar": "Тоша", "fact": "Anton Chekhov (Антон Павлович Чехов, 29 January 1860 – 15 July 1904) was a Russian playwright and short story writer, widely regarded as one of the greatest writers in history."},
  {"official": "Борис", "familiar": "Боря", "fact": "Boris Pasternak (Борис Леонидович Пастернак, 10 February 1890 – 30 May 1960) was a Russian poet and novelist, best known for the novel Doctor Zhivago (Доктор Живаго, 1957)."},
  {"official": "Василий", "familiar": "Вася", "fact": "Vasily Kandinsky (Василий Васильевич Кандинский, 16 December 1866 – 13 December 1944) was a Russian painter widely credited as the pioneer of abstract art."},
  {"official": "Владимир", "familiar": "Володя", "fact": "Vladimir Lenin (Владимир Ильич Ленин, 22 April 1870 – 21 January 1924) was a Russian revolutionary and politician who led the Bolshevik Revolution of 1917."},
  {"official": "Григорий", "familiar": "Гриша", "fact": "Grigori Rasputin (Григорий Ефимович Распутин, c.1869 – 30 December 1916) was a Russian mystic who wielded considerable influence over the Romanov royal family."},
  {"official": "Дмитрий", "familiar": "Дима", "fact": "Dmitri Mendeleev (Дмитрий Иванович Менделеев, 8 February 1834 – 2 February 1907) was a Russian chemist who formulated the Periodic Law and created the periodic table."},
  {"official": "Евгений", "familiar": "Женя", "fact": "Yevgeny Yevtushenko (Евгений Александрович Евтушенко, 18 July 1932 – 1 April 2017) was a Soviet poet best known for Babi Yar (1961), a poem denouncing Soviet antisemitism."},
  {"official": "Иван", "familiar": "Ваня", "fact": "Ivan the Terrible (Иван Васильевич, 25 August 1530 – 28 March 1584) was the first Tsar of Russia, who centralised power and expanded the Russian state dramatically."},
  {"official": "Константин", "familiar": "Костя", "fact": "Konstantin Stanislavski (Константин Сергеевич Станиславский, 17 January 1863 – 7 August 1938) was a Russian theatre director who developed the Stanislavski method of acting."},
  {"official": "Михаил", "familiar": "Миша", "fact": "Mikhail Gorbachev (Михаил Сергеевич Горбачёв, 2 March 1931 – 30 August 2022) was the last leader of the Soviet Union, initiating the policies of glasnost and perestroika."},
  {"official": "Николай", "familiar": "Коля", "fact": "Nikolai Gogol (Николай Васильевич Гоголь, 1 April 1809 – 4 March 1852) was a Ukrainian-born Russian writer whose works include Dead Souls (Мёртвые души) and The Government Inspector (Ревизор)."},
  {"official": "Павел", "familiar": "Паша", "fact": "Pavel Tretyakov (Павел Михайлович Третьяков, 27 December 1832 – 16 December 1898) was a Russian merchant and art collector who founded the Tretyakov Gallery in Moscow."},
  {"official": "Пётр", "familiar": "Петя", "fact": "Peter the Great (Пётр Алексеевич, 10 June 1672 – 8 February 1725) was Tsar of Russia who transformed Russia into a major European power and founded St Petersburg."},
  {"official": "Роман", "familiar": "Рома", "fact": "Roman Abramovich (Роман Аркадьевич Абрамович, born 24 October 1966) is a Russian-Israeli businessman and former owner of Chelsea Football Club."},
  {"official": "Сергей", "familiar": "Серёжа", "fact": "Sergei Rachmaninoff (Сергей Васильевич Рахманинов, 1 April 1873 – 28 March 1943) was a Russian composer and pianist, one of the last great representatives of Romanticism."},
  {"official": "Фёдор", "familiar": "Федя", "fact": "Fyodor Dostoevsky (Фёдор Михайлович Достоевский, 11 November 1821 – 9 February 1881) was a Russian novelist whose works include Crime and Punishment and The Brothers Karamazov."},
  {"official": "Юрий", "familiar": "Юра", "fact": "Yuri Gagarin (Юрий Алексеевич Гагарин, 9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who became the first human to journey into outer space on 12 April 1961."}
];
// Facts shown after patronymic questions, by father's name: m (male), f (female), decode, mf, fm.
const PAT_FACTS = {
 "Александр": {
  "m": "Alexander III (Александр Александрович, 10 March 1845 – 1 November 1894) was Emperor of Russia from 1881 to 1894. Both his name and patronymic were Александр/Александрович — his father was Alexander II.",
  "f": "Maria Alexandrovna (Мария Александровна, 8 August 1824 – 3 June 1880) was the wife of Alexander II. Her patronymic Александровна is the female form — used identically to the male Александрович, just with -овна instead of -ович.",
  "decode": "Alexander Nevsky (Александр Невский, c.1220 – 14 November 1263) was a prince of Novgorod famous for defeating the Teutonic Knights at the Battle of the Ice in 1242. His children bore the patronymic Александрович or Александровна.",
  "mf": "Both patronymics derive from the ancient Greek name Ἀλέξανδρος (Alexandros), meaning 'defender of men'. Alexander II's children — including Alexander III (Александрович) and Maria Alexandrovna (Александровна) — both used this patronymic.",
  "fm": "Alexander II (Александр Николаевич, 29 April 1818 – 13 March 1881) was Emperor of Russia, known as the 'Tsar Liberator' for emancipating the serfs in 1861. His children bore the patronymics Александрович or Александровна."
 },
 "Алексей": {
  "m": "Peter the Great's patronymic was Алексеевич — Пётр Алексеевич — because his father was Tsar Alexei I (Алексей Михайлович, 19 March 1629 – 8 February 1676), known as 'the Most Quiet'.",
  "f": "Catherine the Great was given the patronymic Алексеевна on converting to Orthodoxy — in honour of Peter the Great's father Alexei. Алексеевна is the regular soft-ending female patronymic of Алексей.",
  "decode": "Alexei Tolstoy (Алексей Николаевич Толстой, 10 January 1883 – 23 February 1945) was a Soviet writer, author of the science fiction novel Aelita and the historical trilogy Peter the First. His children bore the patronymic Алексеевич or Алексеевна.",
  "mf": "Alexei is derived from the Greek Ἀλέξιος, meaning 'defender'. The soft ending -евич/-евна is required because Алексей ends in й. Alexei Romanov (Алексей Николаевич, 12 August 1904 – 17 July 1918) was the tsarevich and son of Nicholas II.",
  "fm": "Alexei Romanov (Алексей Николаевич, 12 August 1904 – 17 July 1918) was the tsarevich and son of Nicholas II. His own patronymic was Николаевич, but his sons would have been Алексеевичи and daughters Алексеевны."
 },
 "Андрей": {
  "m": "Andrei Sakharov (Андрей Дмитриевич Сахаров, 21 May 1921 – 14 December 1989) was a Soviet nuclear physicist, Nobel Peace Prize laureate, and human rights activist. His children would have borne the patronymic Андреевич or Андреевна.",
  "f": "Андрей ends in й, giving the soft endings -евич and -евна. The name derives from the Greek Ἀνδρέας, meaning 'manly' — the name of the apostle Andrew, patron saint of Scotland and Russia.",
  "decode": "Andrei Gromyko (Андрей Андреевич Громыко, 18 July 1909 – 2 July 1989) was a Soviet statesman and longtime Foreign Minister known in the West as 'Mr Nyet'. Both his name and patronymic were Андрей/Андреевич.",
  "mf": "Anna Akhmatova's real name was Анна Андреевна Горенко — her patronymic Андреевна tells us her father's name was Andrei. She adopted the pen name Akhmatova from a Tatar ancestor.",
  "fm": "Andrei Rublev (Андрей Рублёв, c.1360 – c.1430) was a Russian icon painter whose Holy Trinity icon is considered the greatest work of Russian medieval art. His children would have borne the patronymic Андреевич or Андреевна."
 },
 "Антон": {
  "m": "Anton Chekhov's own patronymic was Павлович — Антон Павлович Чехов. The patronymic Антонович would belong to Chekhov's own children, had he had any. The name Антон derives from the Latin Antonius.",
  "f": "Elizabeth Antonovna (Елизавета Антоновна, 1743–1782) was a Russian princess of the Brunswick line, daughter of Anton Ulrich of Brunswick. Her patronymic Антоновна correctly identifies her father.",
  "decode": "Mark Antony (Marcus Antonius, 83–30 BC) is the Roman general whose name the Russian Антон ultimately derives from — lover of Cleopatra and rival of Augustus. Ivan Antonovich (Иван Антонович, 1740–1764) was the infant Emperor of Russia, known as Ivan VI.",
  "mf": "Ivan Antonovich (Иван Антонович, 23 August 1740 – 16 July 1764) was the infant Emperor of Russia, known as Ivan VI. He was deposed before his second birthday and spent his entire life imprisoned.",
  "fm": "Anna Leopoldovna (Анна Леопольдовна, 18 December 1718 – 19 March 1746) was the mother of Tsar Ivan VI — her son's patronymic Антонович tells us his father was Anton Ulrich of Brunswick, a German prince."
 },
 "Борис": {
  "m": "Boris Nikolayevich Yeltsin (Борис Николаевич Ельцин, 1 February 1931 – 23 April 2007) was the first President of Russia. His own patronymic was Николаевич, but his children bore the patronymic Борисович or Борисовна.",
  "f": "Ksenia Borisovna Godunova (Ксения Борисовна Годунова, c.1582 – 1622) was the daughter of Tsar Boris Godunov. Her patronymic Борисовна correctly identifies her father. After his death she was forced to become a nun.",
  "decode": "Boris Pasternak (Борис Леонидович Пастернак, 10 February 1890 – 30 May 1960) was a Russian poet and novelist awarded the Nobel Prize in Literature in 1958. His children bore the patronymic Борисович or Борисовна.",
  "mf": "Boris and Gleb (Борис и Глеб) were the first saints canonised by the Russian Orthodox Church, in 1071. They were sons of Vladimir the Great — making them Владимировичи — and are venerated as passion-bearers.",
  "fm": "Ksenia Borisovna Godunova (Ксения Борисовна Годунова, c.1582 – 1622) was the daughter of Tsar Boris Godunov — her patronymic Борисовна correctly identifies her father."
 },
 "Василий": {
  "m": "Ivan the Terrible's full name was Иван Васильевич — son of Vasily III. Васильевич uses the soft -ьев- stem because Василий ends in -ий. The phrase 'Иван Васильевич' is so iconic it is the title of a famous Soviet comedy film.",
  "f": "Sophia Vasilyevna Kovalevskaya (Софья Васильевна Ковалевская, 15 January 1850 – 10 February 1891) was the first woman to obtain a doctorate in mathematics in Europe. Her patronymic Васильевна shows her father was named Vasily.",
  "decode": "Vasily Surikov (Василий Иванович Суриков, 24 January 1848 – 19 March 1916) was a Russian painter famous for his monumental historical canvases, including The Morning of the Streltsy Execution.",
  "mf": "Василий derives from the Greek Βασίλειος (Basileios), meaning 'royal' or 'kingly' — the same root as 'basilica' and 'basil' (the herb). Vasily II (Василий Васильевич, 10 March 1415 – 27 March 1462) was Grand Prince of Moscow.",
  "fm": "Vasily Kandinsky (Василий Васильевич Кандинский, 16 December 1866 – 13 December 1944) was a pioneer of abstract art — both his name and patronymic were Василий/Васильевич, meaning his father was also named Vasily."
 },
 "Владимир": {
  "m": "Vladimir Vladimirovich Putin (Владимир Владимирович Путин, born 7 October 1952) is the President of Russia. Both his first name and patronymic are Владимир/Владимирович — his father was also named Vladimir.",
  "f": "Maria Vladimirovna (Мария Владимировна, born 23 December 1953) is a claimant to the Russian imperial throne. Her patronymic Владимировна confirms her father was Grand Duke Vladimir Kirillovich.",
  "decode": "Vladimir the Great (Владимир Святославич, c.958 – 15 July 1015) was Prince of Kiev who converted Kievan Rus to Christianity in 988. His sons all bore the patronymic Владимирович.",
  "mf": "Yaroslav the Wise (Ярослав Владимирович Мудрый, c.978 – 20 February 1054) was one of Vladimir the Great's sons — his patronymic Владимирович names his father. Vladimir's daughters were Владимировны.",
  "fm": "Lenin was known to close associates as Владимир Ильич or simply Володя. The patronymic Владимирович was borne by many of Vladimir the Great's descendants across Kievan Rus."
 },
 "Григорий": {
  "m": "Gregory the Theologian (Григорий Богослов, c.329 – 390) is one of the great Church Fathers venerated in Orthodoxy. The patronymic Григорьевич uses the soft -ьев- stem because Григорий ends in -ий.",
  "f": "Grigori Rasputin (Григорий Ефимович Распутин, c.1869 – 30 December 1916) was a Russian mystic with great influence over the Romanov family. His daughters were indeed Григорьевны — daughters of Grigory.",
  "decode": "Grigory Potemkin (Григорий Александрович Потёмкин, 24 September 1739 – 16 October 1791) was a Russian statesman and favourite of Catherine the Great, famous for allegedly constructing fake villages to impress the Empress.",
  "mf": "Григорий derives from the Greek Γρηγόριος, meaning 'watchful' or 'alert'. Pope Gregory I (c.540 – 604), who sent Augustine to convert England, bore the same name — giving both the Catholic and Orthodox traditions their Gregorii.",
  "fm": "The soft -ьев- stem is required because Григорий ends in -ий — the same pattern as Василий → Васильевич, Дмитрий → Дмитриевич, and Юрий → Юрьевич."
 },
 "Дмитрий": {
  "m": "Dmitri Shostakovich (Дмитрий Дмитриевич Шостакович, 25 September 1906 – 9 August 1975) was a Soviet composer — both his name and patronymic were Дмитрий/Дмитриевич, meaning his father was also named Dmitri.",
  "f": "Lyubov Dmitrievna Mendeleeva (Любовь Дмитриевна Менделеева, 1881–1939) was the daughter of the chemist Dmitri Mendeleev and the wife of the poet Alexander Blok. Her patronymic Дмитриевна names her father.",
  "decode": "Dmitry Donskoy (Дмитрий Иванович Донской, 12 October 1350 – 19 May 1389) was Prince of Moscow who defeated the Golden Horde at the Battle of Kulikovo in 1380 — a decisive moment in Russian history.",
  "mf": "Dmitry Medvedev (Дмитрий Анатольевич Медведев, born 14 September 1965) served as President of Russia 2008–2012. His children would bear the patronymic Дмитриевич or Дмитриевна.",
  "fm": "Dmitri Mendeleev (Дмитрий Иванович Менделеев, 8 February 1834 – 2 February 1907) was the Russian chemist who created the periodic table. His children bore the patronymic Дмитриевич or Дмитриевна."
 },
 "Евгений": {
  "m": "Yevgeny Primakov (Евгений Максимович Примаков, 29 October 1929 – 26 June 2015) was a Soviet and Russian statesman who served as Prime Minister 1998–1999. Евгений derives from the Greek Εὐγένιος, meaning 'well-born' or 'noble'.",
  "f": "Yevgenia Ginzburg (Евгения Соломоновна Гинзбург, 20 December 1904 – 25 May 1977) wrote the celebrated memoir Journey into the Whirlwind (Крутой маршрут). Her patronymic Евгеньевна would belong to a daughter of someone named Евгений.",
  "decode": "Yevgeny Yevtushenko (Евгений Александрович Евтушенко, 18 July 1932 – 1 April 2017) was a Soviet and Russian poet best known for Babi Yar (1961), a poem denouncing Soviet antisemitism.",
  "mf": "Женя is the familiar form of both Евгений and Евгения — one of the few truly gender-neutral familiar names in Russian. The patronymics, however, are not neutral: Евгеньевич is male, Евгеньевна is female.",
  "fm": "Yevgeny Zamyatin (Евгений Иванович Замятин, 1 February 1884 – 10 March 1937) wrote We (Мы), a dystopian novel that influenced Orwell's 1984. His children would have borne the patronymic Евгеньевич or Евгеньевна."
 },
 "Иван": {
  "m": "Ivan the Terrible (Иван Васильевич, 25 August 1530 – 28 March 1584) was the first Tsar of Russia. He made his sons Иван Иванович and Фёдор Иванович — making Иванович one of the most historically repeated patronymics.",
  "f": "Anna Ivanovna (Анна Ивановна, 7 February 1693 – 28 October 1740) was Empress of Russia from 1730 to 1740 — her patronymic Ивановна confirms her father was Ivan V, co-tsar with Peter the Great.",
  "decode": "Ivan Turgenev (Иван Сергеевич Тургенев, 9 November 1818 – 3 September 1883) was a Russian novelist whose works include Fathers and Sons (Отцы и дети) and A Hunter's Sketches (Записки охотника).",
  "mf": "Иван is the Russian form of John, from the Hebrew Yohanan ('God is gracious'). Ivan III (Иван Васильевич, 22 January 1440 – 27 October 1505) was Grand Prince of Moscow who ended Mongol domination of Russia.",
  "fm": "Ivan V (Иван Алексеевич, 6 September 1666 – 8 February 1696) was co-tsar with Peter the Great. His daughter Anna became Empress — Анна Ивановна — making him one of the most historically significant bearers of the name Иван."
 },
 "Константин": {
  "m": "Constantine the Great (Константин Великий, c.272 – 22 May 337) was the first Roman emperor to convert to Christianity, founding Constantinople in 330. The name means 'constant' or 'steadfast'.",
  "f": "Nadezhda Krupskaya (Надежда Константиновна Крупская, 26 February 1869 – 27 February 1939) was Lenin's wife and a leading Bolshevik educator. Her patronymic Константиновна tells us her father was named Konstantin.",
  "decode": "Grand Duke Konstantin Nikolayevich (Константин Николаевич, 21 September 1827 – 25 January 1892) was a Russian naval reformer and brother of Alexander II. His children bore the patronymic Константинович or Константиновна.",
  "mf": "Grand Duke Konstantin Konstantinovich (Константин Константинович, 22 August 1858 – 15 June 1915) was a Russian poet who published under the initials K.R. Both his name and patronymic were Константин/Константинович.",
  "fm": "Konstantin Stanislavski (Константин Сергеевич Станиславский, 17 January 1863 – 7 August 1938) was a theatre director who developed the Stanislavski method of acting. His children bore the patronymic Константинович or Константиновна."
 },
 "Михаил": {
  "m": "Fyodor Dostoevsky's patronymic was Михайлович — Фёдор Михайлович Достоевский. Note the й that appears: Михаил → Михайлович. His father was Mikhail Andreyevich Dostoevsky.",
  "f": "Tsar Alexei I (Алексей Михайлович, 1629–1676) bore the patronymic Михайлович as son of Mikhail Romanov, the dynasty's founder. Alexei's daughters were all Михайловны — daughters of Mikhail.",
  "decode": "Mikhail Lomonosov (Михаил Васильевич Ломоносов, 19 November 1711 – 15 April 1765) was a Russian polymath who founded Moscow State University. His children would have borne the patronymic Михайлович or Михайловна.",
  "mf": "Михаил is the Russian form of Michael, from the Hebrew מִיכָאֵל (Mikha'el) meaning 'Who is like God?'. Mikhail the Brave (Михаил Храбрый, c.1558 – 19 August 1601) was the first ruler to briefly unite Wallachia, Transylvania, and Moldavia.",
  "fm": "Mikhail Gorbachev (Михаил Сергеевич Горбачёв, 2 March 1931 – 30 August 2022) was the last leader of the Soviet Union, awarded the Nobel Peace Prize in 1990. His children bore the patronymic Михайлович or Михайловна."
 },
 "Николай": {
  "m": "Leo Tolstoy's patronymic was Николаевич — Лев Николаевич Толстой — meaning his father was named Nikolai. Николай drops й and adds the soft -евич, giving Николаевич.",
  "f": "The four daughters of Nicholas II — Ольга, Татьяна, Мария, and Анастасия — were all Николаевны, confirming their father was Николай. All four were killed alongside their parents in 1918.",
  "decode": "Nikolai Gogol (Николай Васильевич Гоголь, 1 April 1809 – 4 March 1852) was a Ukrainian-born Russian writer, author of Dead Souls (Мёртвые души) and The Government Inspector (Ревизор).",
  "mf": "Saint Nicholas of Myra (Николай Угодник, c.270 – 343), the model for Santa Claus, is venerated as the patron saint of children, sailors, and Russia — making Николай and its patronymics among the most beloved names in Orthodox tradition.",
  "fm": "Nicholas II (Николай Александрович Романов, 18 May 1868 – 17 July 1918) was the last Emperor of Russia. His patronymic Александрович tells us his father was Alexander III — but his own children all bore the patronymic Николаевич or Николаевна."
 },
 "Павел": {
  "m": "Anton Chekhov's patronymic was Павлович — Антон Павлович Чехов — meaning his father was named Pavel. Павел drops its е before adding -ович: Павел → Павл → Павлович.",
  "f": "Pavel I (Павел Петрович, 1 October 1754 – 23 March 1801) was Emperor of Russia and son of Catherine the Great. His daughters were all Павловны — Grand Duchess Alexandra Pavlovna, Maria Pavlovna, and others.",
  "decode": "Pavel Tretyakov (Павел Михайлович Третьяков, 27 December 1832 – 16 December 1898) was the merchant and art collector who founded the Tretyakov Gallery in Moscow. His children bore the patronymic Павлович or Павловна.",
  "mf": "Павел is the Russian form of Paul, from the Latin Paulus meaning 'small' or 'humble'. The е drops in the patronymic: Павлович, Павловна. Apostle Paul (c.5 – c.64/67 AD) is one of the most venerated saints in the Orthodox Church.",
  "fm": "Grand Duchess Maria Pavlovna (Мария Павловна, 18 April 1890 – 13 December 1958) was a Russian princess who survived the revolution, later worked as a designer in Paris, and wrote two celebrated memoirs of imperial Russia."
 },
 "Пётр": {
  "m": "Uncle Vanya's full name is Иван Петрович Войницкий — his patronymic Петрович tells us his father was named Pyotr. Note that ё becomes е in the patronymic stem: Пётр → Петр + ович = Петрович.",
  "f": "Empress Elizabeth of Russia (Елизавета Петровна, 29 December 1709 – 5 January 1762) was the daughter of Peter the Great — hence her patronymic Петровна. She ruled Russia for twenty years and founded the University of Moscow.",
  "decode": "Peter the Great (Пётр Алексеевич, 10 June 1672 – 8 February 1725) was Tsar of Russia who modernised the country and founded St Petersburg in 1703. His children bore the patronymic Петрович or Петровна.",
  "mf": "Pyotr Ilyich Tchaikovsky (Пётр Ильич Чайковский, 7 May 1840 – 6 November 1893) was the composer of Swan Lake, The Nutcracker, and the 1812 Overture. His children would have borne the patronymic Петрович or Петровна.",
  "fm": "Ivan Pavlov (Иван Петрович Павлов, 26 September 1849 – 27 February 1936) was the physiologist known for his work on conditioned reflexes. His patronymic Петрович tells us his father was named Pyotr."
 },
 "Роман": {
  "m": "Rodion Romanovich Raskolnikov (Родион Романович Раскольников) is the fictional protagonist of Dostoevsky's Crime and Punishment (Преступление и наказание, 1866). His patronymic Романович tells us his father's name was Roman.",
  "f": "Anastasia Romanovna (Анастасия Романовна, c.1530 – 1560) was the first wife of Ivan the Terrible. Her father was Roman Zakharyin-Yuryev — the Romanov dynasty later took its surname from his name.",
  "decode": "Roman Abramovich (Роман Аркадьевич Абрамович, born 24 October 1966) is a Russian-Israeli businessman, formerly the owner of Chelsea Football Club. His patronymic Аркадьевич tells us his father's name was Arkady.",
  "mf": "Роман derives from the Latin Romanus, meaning 'a Roman' or 'from Rome'. Raskolnikov's sister Dunya (Авдотья Романовна Раскольникова) shares the patronymic Романовна — daughter of the same Roman.",
  "fm": "Raskolnikov's sister Dunya's full name is Авдотья Романовна Раскольникова — she shares the patronymic Романовна, confirming they are children of the same father Roman. The Romanov surname also derives from Roman, but as a surname, not a patronymic."
 },
 "Сергей": {
  "m": "Mikhail Gorbachev's patronymic was Сергеевич — Михаил Сергеевич Горбачёв. Сергей drops й and adds the soft -евич. The name Sergei derives from the Latin Sergius, an ancient Roman family name.",
  "f": "Pushkin's patronymic was Сергеевич — Александр Сергеевич Пушкин — meaning his father was Sergei Lvovich Pushkin. Pushkin's daughters bore the patronymic Александровна — Сергеевна would belong to Sergei Lvovich's daughters, not Pushkin's.",
  "decode": "Sergei Rachmaninoff (Сергей Васильевич Рахманинов, 1 April 1873 – 28 March 1943) was a Russian composer and virtuoso pianist. His children bore the patronymic Сергеевич or Сергеевна.",
  "mf": "In everyday speech the patronymic is often shortened to Сергеич — dropping the -ев- — a common phenomenon with long patronymics. Sergei Prokofiev (Сергей Сергеевич Прокофьев, 23 April 1891 – 5 March 1953) bore both names from Сергей.",
  "fm": "Sergei Prokofiev (Сергей Сергеевич Прокофьев, 23 April 1891 – 5 March 1953) was a Soviet composer whose works include Romeo and Juliet and Peter and the Wolf. Both his name and patronymic were Сергей/Сергеевич."
 },
 "Фёдор": {
  "m": "Boris Godunov's full name was Борис Фёдорович Годунов — his patronymic tells us his father was named Fyodor. The ё stays in the patronymic: Фёдор + ович = Фёдорович.",
  "f": "Alexandra Feodorovna (Александра Фёдоровна, 6 June 1872 – 17 July 1918) was the last Empress of Russia. She adopted the patronymic Фёдоровна on converting to Orthodoxy — in honour of the Feodorovskaya icon of the Virgin Mary, patroness of the Romanov dynasty.",
  "decode": "Fyodor Dostoevsky (Фёдор Михайлович Достоевский, 11 November 1821 – 9 February 1881) was a Russian novelist whose works profoundly influenced world literature. His children bore the patronymic Фёдорович or Фёдоровна.",
  "mf": "Фёдор is the Russian form of Theodore, from the Greek Θεόδωρος meaning 'gift of God' (θεός — god, δῶρον — gift). The three Karamazov brothers in Dostoevsky's final novel all share the patronymic Фёдорович.",
  "fm": "The three Karamazov brothers (Дмитрий, Иван, and Алексей) all share the patronymic Фёдорович — their father is Fyodor Pavlovich Karamazov. Their female counterpart would be Фёдоровна."
 },
 "Юрий": {
  "m": "Yuri Dolgoruky (Юрий Владимирович Долгорукий, c.1099 – 15 May 1157) was a Prince of Suzdal credited with founding Moscow in 1147. Юрьевич uses the soft -ьев- stem because Юрий ends in -ий.",
  "f": "Юрий follows the same soft -ий pattern as Василий, Дмитрий, and Григорий: drop -ий, add -ьевна for the female form. Yulia Yuryevna would be the daughter of a Yuri — a common name combination.",
  "decode": "Yuri Gagarin (Юрий Алексеевич Гагарин, 9 March 1934 – 27 March 1968) became the first human in space on 12 April 1961 — a date still celebrated in Russia as Cosmonautics Day.",
  "mf": "Юрий is derived from the Greek Γεώργιος (Georgios), meaning 'farmer' — the same root as George. George the Victorious (Георгий Победоносец) is the patron saint of Russia and England.",
  "fm": "Yuri Gagarin (Юрий Алексеевич Гагарин, 9 March 1934 – 27 March 1968) became the first human in space on 12 April 1961. His children bore the patronymic Юрьевич or Юрьевна."
 },
 "Илья": {
  "m": "Vladimir Lenin's patronymic was Ильич — Владимир Ильич Ленин. This is one of the five irregular biblical patronymics: not Ильяевич but Ильич. Lenin's father was Ilya Nikolayevich Ulyanov (1831–1886), a schoolteacher.",
  "f": "Lenin did have a sister — Анна Ильинична Ульянова (14 August 1864 – 19 June 1935), a revolutionary in her own right. Ильинична is the correct irregular female patronymic of Илья.",
  "decode": "Pyotr Ilyich Tchaikovsky (Пётр Ильич Чайковский, 7 May 1840 – 6 November 1893) was a Russian composer whose works include Swan Lake, The Nutcracker, and the 1812 Overture. Ильич is the irregular patronymic of Илья.",
  "mf": "Ilya is the Russian form of the Hebrew Elijah — the prophet who was taken to heaven in a chariot of fire. The irregular pair Ильич/Ильинична is one of five special biblical cases that must be learned separately.",
  "fm": "Natasha Rostova's full name in War and Peace is Наталья Ильинична Ростова — daughter of Count Ilya Rostov (Илья Андреевич Ростов). The irregular Ильинична correctly identifies her father as Ilya."
 },
 "Лука": {
  "m": "Luka Lukich Khlopov (Лука Лукич Хлопов), the school superintendent in Gogol's The Government Inspector (Ревизор, 1836), has the patronymic Лукич — the irregular form from Лука, not Лукаевич.",
  "f": "Лука is one of the five irregular biblical patronymics. Лукинична is the female form — not the expected Лукаевна. Luka is the Russian form of Luke, the author of the third Gospel.",
  "decode": "In Gorky's play The Lower Depths (На дне, 1902), the wanderer Luka is a central character who preaches compassionate lying. Лукич is his patronymic — the irregular form from the biblical name Лука.",
  "mf": "Лука is one of the rare Russian male names ending in -а. The irregular female patronymic Лукинична must be learned as a special case alongside Ильинична, Никитична, Кузьминична, and Фоминична.",
  "fm": "Saint Luke the Evangelist (Лука, 1st century AD) is venerated in the Orthodox Church on 18 October. Лука is the Russian form of the Latin Lucas, itself from the Greek Λουκᾶς."
 },
 "Никита": {
  "m": "Добрыня Никитич (Dobrynya Nikitich) is one of the three great bogatyrs (heroes) of Russian epic poetry — son of Nikita. His patronymic Никитич is the irregular form, not the expected Никитаевич.",
  "f": "Никитична is the irregular female patronymic of Никита. The daughter of a man named Nikita would be called Никитична. Никита derives from the Greek Νικήτας, meaning 'victor'.",
  "decode": "Nikita Khrushchev (Никита Сергеевич Хрущёв, 15 April 1894 – 11 September 1971) was the leader of the Soviet Union from 1953 to 1964. His own patronymic was Сергеевич — son of Sergei — but his children bore the patronymic Никитич or Никитична.",
  "mf": "Никита is primarily a male name in Russian, though it also exists as a female name. The irregular patronymic pattern reflects its Church Slavonic origin — one of five biblical names with special forms.",
  "fm": "Dobrynya Nikitich (Добрыня Никитич) is one of the three great bogatyrs of Russian epic poetry — the Slavic equivalent of a knight. His patronymic Никитич tells us his father was Nikita."
 }
};
// questions about famous people and characters (typed answers)
const FAMOUS = [
  {"key": "famous_lenin_father", "nameGroup": "famous_Lenin", "type": "Famous figure", "q": "Владимир Ильич Ленин", "context": "What is Lenin's father's name?", "a": "Илья", "fact": "Lenin's father was Ilya Nikolayevich Ulyanov (Илья Николаевич Ульянов, 26 July 1831 – 24 January 1886), a schoolteacher who rose to become a school inspector. Ильич is the irregular patronymic of Илья."},
  {"key": "famous_Lenin_f_pat", "nameGroup": "famous_Lenin", "type": "Famous figure", "q": "Владимир Ильич Ленин", "context": "Lenin had a sister, Anna. What was her patronymic?", "a": "Ильинична", "fact": "Lenin did have a sister — Анна Ильинична Ульянова (14 August 1864 – 19 June 1935), a revolutionary in her own right. Ильинична is the correct irregular female patronymic of Илья."},
  {"key": "famous_yeltsin_father", "nameGroup": "famous_Yeltsin", "type": "Famous figure", "q": "Борис Николаевич Ельцин", "context": "What is Yeltsin's father's name?", "a": "Николай", "fact": "Boris Nikolayevich Yeltsin (Борис Николаевич Ельцин, 1 February 1931 – 23 April 2007) was the first President of Russia, serving from 1991 to 1999. His father was Nikolai Ignátyevich Yeltsin."},
  {"key": "famous_gorbachev_father", "nameGroup": "famous_Gorbachev", "type": "Famous figure", "q": "Михаил Сергеевич Горбачёв", "context": "What is Gorbachev's father's name?", "a": "Сергей", "fact": "Mikhail Sergeyevich Gorbachev (Михаил Сергеевич Горбачёв, 2 March 1931 – 30 August 2022) was the last General Secretary of the Soviet Union and was awarded the Nobel Peace Prize in 1990."},
  {"key": "famous_gorbachev_m_to_f", "nameGroup": "famous_Gorbachev", "type": "Famous figure", "q": "Сергеевич — Gorbachev's patronymic", "context": "Form the female equivalent of this patronymic", "a": "Сергеевна", "fact": "Gorbachev's wife was Raisa Maximovna Gorbacheva (Раиса Максимовна Горбачёва, 5 January 1932 – 20 September 1999), a philosopher and sociologist who was the first Soviet leader's wife to play a prominent public role."},
  {"key": "famous_peter_father", "nameGroup": "famous_PeterGreat", "type": "Famous figure", "q": "Пётр Алексеевич (Пётр Великий)", "context": "What is Peter the Great's father's name?", "a": "Алексей", "fact": "Peter the Great (Пётр Алексеевич, 10 June 1672 – 8 February 1725) was Tsar of Russia from 1682 and Emperor from 1721. His father was Tsar Alexei I (Алексей Михайлович), known as 'the Most Quiet'."},
  {"key": "famous_catherine_father", "nameGroup": "famous_CatherineGreat", "type": "Famous figure", "q": "Екатерина Алексеевна (Екатерина Великая)", "context": "What is Catherine the Great's patronymic father's name?", "a": "Алексей", "fact": "Catherine the Great (2 May 1729 – 17 November 1796) was born Sophie of Anhalt-Zerbst, a German princess. On converting to Russian Orthodoxy she was given the patronymic Алексеевна in honour of Peter the Great's father Alexei."},
  {"key": "famous_pushkin_father", "nameGroup": "famous_Pushkin", "type": "Famous figure", "q": "Александр Сергеевич Пушкин", "context": "What is Pushkin's father's name?", "a": "Сергей", "fact": "Alexander Pushkin (Александр Сергеевич Пушкин, 6 June 1799 – 10 February 1837) is regarded as the greatest Russian poet. His father was Sergei Lvovich Pushkin (Сергей Львович Пушкин, 1770–1848), a literary enthusiast."},
  {"key": "famous_pushkin_pat", "nameGroup": "famous_Pushkin", "type": "Famous figure", "q": "Александр Сергеевич Пушкин", "context": "Form the female patronymic for Pushkin's father's name", "a": "Сергеевна", "fact": "Pushkin's father was Sergei Lvovich Pushkin (Сергей Львович Пушкин). The female patronymic of Сергей is Сергеевна — the soft ending because Сергей ends in й."},
  {"key": "famous_tchaikovsky_father", "nameGroup": "famous_Tchaikovsky", "type": "Famous figure", "q": "Пётр Ильич Чайковский", "context": "What is Tchaikovsky's father's name?", "a": "Илья", "fact": "Pyotr Ilyich Tchaikovsky (Пётр Ильич Чайковский, 7 May 1840 – 6 November 1893) was a Russian composer. His father Ilya Petrovich Tchaikovsky (Илья Петрович Чайковский) was a mining inspector. Like Lenin, his patronymic Ильич is irregular."},
  {"key": "famous_chekhov_father", "nameGroup": "famous_Chekhov", "type": "Famous figure", "q": "Антон Павлович Чехов", "context": "What is Chekhov's father's name?", "a": "Павел", "fact": "Anton Chekhov (Антон Павлович Чехов, 29 January 1860 – 15 July 1904) was a Russian playwright and short story writer. His father Pavel Yegorovich Chekhov (Павел Егорович Чехов) was a grocer in Taganrog."},
  {"key": "famous_tolstoy_father", "nameGroup": "famous_Tolstoy", "type": "Famous figure", "q": "Лев Николаевич Толстой", "context": "What is Tolstoy's father's name?", "a": "Николай", "fact": "Leo Tolstoy (Лев Николаевич Толстой, 9 September 1828 – 20 November 1910) was a Russian novelist. His father Count Nikolai Ilyich Tolstoy (Николай Ильич Толстой) was a model for Nikolai Rostov in War and Peace."},
  {"key": "famous_raskolnikov_father", "nameGroup": "famous_Raskolnikov", "type": "Literary figure", "q": "Родион Романович Раскольников", "context": "What is Raskolnikov's father's name?", "a": "Роман", "fact": "Rodion Romanovich Raskolnikov is the fictional protagonist of Dostoevsky's Crime and Punishment (Преступление и наказание, 1866). His patronymic Романович tells us his father's name was Roman."},
  {"key": "famous_raskolnikov_f_pat", "nameGroup": "famous_Raskolnikov", "type": "Literary figure", "q": "Романович — Raskolnikov's patronymic", "context": "Form the female equivalent of this patronymic", "a": "Романовна", "fact": "Raskolnikov's sister Dunya's full name is Авдотья Романовна Раскольникова — she shares the patronymic Романовна, confirming they are children of the same father Roman."},
  {"key": "famous_karenina_father", "nameGroup": "famous_Karenina", "type": "Literary figure", "q": "Анна Аркадьевна Каренина", "context": "What is Anna Karenina's father's name?", "a": "Аркадий", "fact": "Anna Karenina (Анна Аркадьевна Каренина) is the heroine of Tolstoy's novel of the same name (1878). Her patronymic Аркадьевна uses the soft -ьевна ending because Аркадий ends in -ий."},
  {"key": "famous_bolkonsky_father", "nameGroup": "famous_Bolkonsky", "type": "Literary figure", "q": "Андрей Николаевич Болконский", "context": "What is Prince Andrei's father's name?", "a": "Николай", "fact": "Prince Andrei Bolkonsky (Андрей Николаевич Болконский) is a central character in Tolstoy's War and Peace (Война и мир, 1869). His father, the stern old Prince Nikolai Bolkonsky, is one of the novel's most memorable characters."},
  {"key": "famous_karamazov_father", "nameGroup": "famous_Karamazov", "type": "Literary figure", "q": "Иван Фёдорович Карамазов", "context": "What is Ivan Karamazov's father's name?", "a": "Фёдор", "fact": "Ivan Karamazov is one of the three brothers in Dostoevsky's The Brothers Karamazov (Братья Карамазовы, 1880). Their father Fyodor Pavlovich Karamazov is a debauched landowner — all three brothers are Фёдоровичи."},
  {"key": "famous_natasha_father", "nameGroup": "famous_NatashaRostova", "type": "Literary figure", "q": "Наталья Ильинична Ростова (Наташа)", "context": "What is Natasha Rostova's father's name?", "a": "Илья", "fact": "Natasha Rostova's father in War and Peace is Count Ilya Rostov (Илья Андреевич Ростов) — a warm, generous, and financially reckless man. The irregular patronymic Ильинична correctly identifies her father as Ilya."},
  {"key": "famous_vanya_patronymic", "nameGroup": "famous_UncleVanya", "type": "Literary figure", "q": "Дядя Ваня — Иван Петрович Войницкий", "context": "What is Uncle Vanya's father's name?", "a": "Пётр", "fact": "Uncle Vanya (Дядя Ваня) is Chekhov's play first performed in 1898. Vanya's official name is Иван Петрович Войницкий — his patronymic Петрович means 'son of Pyotr'."},
  {"key": "famous_onegin_father", "nameGroup": "famous_Onegin", "type": "Literary figure", "q": "Евгений Онегин", "context": "If Onegin's father were Владимир, what would his patronymic be?", "a": "Владимирович", "fact": "Pushkin's novel in verse Eugene Onegin (Евгений Онегин, 1833) never reveals Onegin's patronymic. Владимирович follows the regular hard-consonant rule: Владимир + ович. The novel is considered the cornerstone of Russian literature."}
];
