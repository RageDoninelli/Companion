/* Módulo 11 — I'm going to have a party.
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E11 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";

MODS[11] = {
  title: "I'm going to have a party.",
  topic: "Meses y fechas, be going to y planes",
  ex: [
    { n: "1A", t: "Months and dates. Put the months in the box in time order.", h: "Escribe los meses en orden, de enero a diciembre.", cols: true,
      bank: ["April", "January", "May", "August", "July", "November", "December", "June", "October", "February", "March", "September"],
      items: [
        "1. [January]", "7. {July}",
        "2. {February}", "8. {August}",
        "3. {March}", "9. {September}",
        "4. {April}", "10. {October}",
        "5. {May}", "11. {November}",
        "6. {June}", "12. {December}"
      ] },

    { n: "1C", t: "Write each date a different way.", h: "Escribe la fecha con el número ordinal en letras.",
      items: [
        "1. January 11th = [January eleventh]",
        "2. March 15th = {March fifteenth}",
        "3. November 1st = {November first}",
        "4. August 16th = {August sixteenth}",
        "5. July 24th = {July twenty-fourth|July twenty fourth}",
        "6. May 10th = {May tenth}",
        "7. February 2nd = {February second}",
        "8. December 27th = {December twenty-seventh|December twenty seventh}"
      ] },

    { n: "2", t: "It's January first. How old are these people going to be on their next birthdays?", h: "Hoy es 1 de enero. Completa con la edad y la fecha del próximo cumpleaños.",
      items: [
        "# Lucas: 16 años, cumple el 12 de abril · Liz: 32 años, cumple el 6 de octubre · Ruth y Sharon: 68 años, cumplen el 21 de septiembre",
        "1. Lucas is going to be [seventeen] on [April twelfth].",
        "2. Liz {is} going to be {thirty-three|thirty three} on {October sixth|October 6th}.",
        "3. Ruth and Sharon {are} going to be {sixty-nine|sixty nine} on {September twenty-first|September twenty first|September 21st}."
      ] },

    { n: "3", t: "Read Tom's calendar. Write sentences about his plans.", h: "Escribe la fecha en letras y going to.",
      items: [
        "# Calendario de Tom (agosto): 4 lunch with Bill · 6 play tennis after work · 8 drive to the beach with Melissa · 10 go shopping after work · 12 work late · 13 meet Melissa for dinner · 15 go to a museum with Livia · 19 buy Kenta's birthday present · 20 go to Kenta's birthday party · 28 see a movie with friends",
        "1. On August [fourth], he's [going to] have lunch with Bill.",
        "2. On August {sixth}, he's {going to} play tennis after work.",
        "3. On August {eighth}, he's {going to} drive to the beach with Melissa.",
        "4. On August {tenth}, he's {going to} go shopping after work.",
        "5. On August {twelfth}, he's {going to} work late.",
        "6. On August {thirteenth}, he's {going to} meet Melissa for dinner.",
        "7. On August {fifteenth}, he's {going to} go to a museum with Livia.",
        "8. On August {nineteenth}, he's {going to} buy Kenta's birthday present.",
        "9. On August {twentieth}, he's {going to} go to Kenta's birthday party.",
        "10. On August {twenty-eighth|twenty eighth}, he's {going to} see a movie with friends."
      ] },

    { n: "4", t: "Complete these sentences. Use the correct form of be going to and the verbs in parentheses.", h: "Escribe be going to + el verbo. Puedes usar la forma corta ('m, 're, 's) o la larga.",
      items: [
        "1. This [is going to be] (be) a very busy weekend.",
        "2. On Friday, my friend Joe and I {are going to see|'re going to see} (see) a movie. After the movie, we {are going to eat|'re going to eat} (eat) dinner at our favorite Mexican restaurant.",
        "3. On Saturday morning, my parents {are going to visit|'re going to visit} (visit). They {are going to drive|'re going to drive} (drive) into the city, and we {are going to go|'re going to go} (go) to the art museum. I think my mother {is going to love|'s going to love} (love) it, but my father {isn't going to like|is not going to like|'s not going to like} (not like) it. Later, we {are going to watch|'re going to watch} (watch) a baseball game on TV. My parents {are going to go|'re going to go} (go) home after dinner.",
        "4. On Sunday, I {am going to get up|'m going to get up} (get up) early. Then I {am going to take|'m going to take} (take) a walk. On Sunday afternoon, I {am going to do|'m going to do} (do) yoga. In the evening, my friend Eve and I {are going to study|'re going to study} (study) together."
      ] },

    { n: "5", t: "Complete these conversations. Write questions with be going to.", h: "Elige la pregunta correcta.",
      items: [
        "# Conversation 1",
        "Eric: [What are you going to do this weekend?]",
        "Alex: This weekend? I'm going to go to the city with my son.",
        { p: "Eric: That's nice.", o: ["Where do you going to stay?", "Where are you going to stay?", "Where you are going to stay?"], a: 1 },
        "Alex: We're going to stay at my sister's apartment. She lives there.",
        { p: "Eric: Really?", o: ["What you are going to do there?", "What do you going to do there?", "What are you going to do there?"], a: 2 },
        "Alex: I think we're going to go to a museum.",
        { p: "Eric:", o: ["Is your sister going to go with you?", "Does your sister going to go with you?", "Is your sister go to go with you?"], a: 0 },
        "Alex: No, my sister isn't going to go with us. She's going to go bike riding.",
        "# Conversation 2",
        "Scott: I'm going to have a birthday party for Ben next Saturday. Can you come?",
        { p: "Emily: Sure.", o: ["Where is the party going to be?", "Where the party is going to be?", "Where does the party going to be?"], a: 0 },
        "Scott: It's going to be at my house. Do you have the address?",
        { p: "Emily: Yes, I do. And", o: ["what time does it going to start?", "what time it is going to start?", "what time is it going to start?"], a: 2 },
        "Scott: It's going to start at seven o'clock.",
        { p: "Emily:", o: ["Is Bob going to be there?", "Does Bob going to be there?", "Is Bob going to there?"], a: 0 },
        "Scott: No, Bob isn't going to be there.",
        { p: "Emily: That's too bad.", o: ["Do you going to bake a cake?", "Are you going to bake a cake?", "You are going to bake a cake?"], a: 1 },
        "Scott: No, I'm not going to bake a cake. I can't bake! I'm going to buy one.",
        "Emily: OK. Sounds good. See you on Saturday."
      ] },

    { n: "6A", t: "Next weekend. What are these people going to do next weekend? Write sentences.", h: "Usa la pista en español y completa con be going to.",
      items: [
        "# 1. " + E11("🚴") + "dos personas andan en bici",
        "[They're going to go bike riding.]",
        "# 2. " + E11("⚽") + "unos chicos juegan fútbol",
        "They're going to {play soccer}.",
        "# 3. " + E11("🎹") + "una mujer toca el piano",
        "She's going to {play the piano}.",
        "# 4. " + E11("🛍️") + "dos amigas van de compras",
        "They're going to {go shopping}.",
        "# 5. " + E11("📚") + "un hombre estudia",
        "He's going to {study}.",
        "# 6. " + E11("♟️") + "dos personas juegan ajedrez",
        "They're going to {play chess}.",
        "# 7. " + E11("🎬") + "dos amigas van al cine",
        "They're going to {go to the movies|see a movie|watch a movie|go to the movie theater}.",
        "# 8. " + E11("🧁") + "un papá y su hija hornean galletas",
        "They're going to {bake cookies|bake|bake a cake|bake cupcakes|bake muffins}.",
        "# 9. " + E11("🐴") + "una mujer monta a caballo",
        "She's going to {go horseback riding|ride a horse|ride horses}."
      ] }
  ]
};
