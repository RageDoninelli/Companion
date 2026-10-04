/* Módulo 5 — What time is it?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E5 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var TS5 = ["It's a quarter after five.", "It's a quarter to two.", "It's four-thirty.", "It's nine-oh-three.", "It's ten after eight.", "It's twelve o'clock."];

MODS[5] = {
  title: "What time is it?",
  topic: "La hora, rutinas y present continuous",
  ex: [
    { n: "1", t: "Write each sentence a different way.", h: "Elige la oración que dice la misma hora.",
      items: [
        "1. It's midnight. = [It's twelve o'clock at night.]",
        { p: "2. It's 7:00 A.M.", o: ["It's seven o'clock in the morning.", "It's seven o'clock at night.", "It's seven-thirty in the morning."], a: 0 },
        { p: "3. It's 2:45 P.M.", o: ["It's a quarter after two in the afternoon.", "It's a quarter to three in the afternoon.", "It's a quarter to three at night."], a: 1 },
        { p: "4. It's 9:20 A.M.", o: ["It's twenty after nine in the morning.", "It's twenty to nine in the morning.", "It's nine-twenty at night."], a: 0 },
        { p: "5. It's 6:15 P.M.", o: ["It's a quarter to six in the evening.", "It's six-fifteen in the morning.", "It's a quarter after six in the evening."], a: 2 },
        { p: "6. It's 11:00 P.M.", o: ["It's eleven o'clock at night.", "It's eleven o'clock in the morning.", "It's twelve o'clock at night."], a: 0 },
        { p: "7. It's 3:30 A.M.", o: ["It's three-thirty in the morning.", "It's three-thirty in the afternoon.", "It's a quarter after three in the morning."], a: 0 },
        { p: "8. It's 12:00 P.M.", o: ["It's noon.", "It's midnight.", "It's twelve o'clock at night."], a: 0 }
      ] },

    { n: "2", t: "What time is it in each city?", h: "Son las 10:00 A.M. en Seattle. Cada ciudad de la lista va 1 hora más adelante que la anterior.",
      items: [
        "# Seattle 10:00 A.M. → Phoenix +1 h → Mexico City +2 h → Lima +3 h → La Paz +4 h → Montevideo +5 h",
        "1. It's 10:00 A.M. in Seattle. [It's ten o'clock in the morning.]",
        { p: "2. What time is it in Phoenix?", o: ["It's ten o'clock in the morning.", "It's eleven o'clock in the morning.", "It's eleven o'clock at night."], a: 1 },
        { p: "3. What time is it in Mexico City?", o: ["It's noon.", "It's twelve o'clock at night.", "It's one o'clock in the afternoon."], a: 0 },
        { p: "4. What time is it in Lima?", o: ["It's one o'clock in the afternoon.", "It's one o'clock in the morning.", "It's two o'clock in the afternoon."], a: 0 },
        { p: "5. What time is it in La Paz?", o: ["It's three o'clock in the afternoon.", "It's two o'clock in the afternoon.", "It's two o'clock in the morning."], a: 1 },
        { p: "6. What time is it in Montevideo?", o: ["It's three o'clock in the afternoon.", "It's four o'clock in the afternoon.", "It's three o'clock in the morning."], a: 0 }
      ] },

    { n: "3", t: "What time is it? Use the sentences in the box.", h: "Elige la oración que corresponde a cada hora.",
      bank: TS5,
      items: [
        "1. 5:15 = [It's a quarter after five.]",
        { p: "2. 12:00", o: TS5, a: 5 },
        { p: "3. 1:45", o: TS5, a: 1 },
        { p: "4. 4:30", o: TS5, a: 2 },
        { p: "5. 9:03", o: TS5, a: 3 },
        { p: "6. 8:10", o: TS5, a: 4 }
      ] },

    { n: "4", t: "Complete the sentences. Write each time a different way.", h: "Escribe la palabra que falta.",
      items: [
        "1. It's six in the morning. It's six [A.M.].",
        "2. It's 10:00 P.M. It's ten at {night}.",
        "3. It's 5:15. It's five-{fifteen}.",
        "4. It's 7:00 P.M. It's seven in the {evening}.",
        "5. It's 4:30. It's four-{thirty}.",
        "6. It's 8:00 A.M. It's eight in the {morning}.",
        "7. It's twelve P.M. It's {noon|twelve o'clock}.",
        "8. It's 2:00 P.M. It's two in the {afternoon}.",
        "9. It's twelve A.M. It's {midnight}.",
        "10. It's 6:45. It's a {quarter} to seven.",
        "11. It's 11:15. It's a quarter {after|past} eleven."
      ] },

    { n: "5", t: "What are these people doing? Write sentences.", h: "Mira el emoji y la pista, y escribe la oración con el present continuous.",
      bank: ["call a friend", "drive", "have breakfast", "make coffee", "ride a bike", "shop", "take a walk", "watch a movie", "work"],
      items: [
        "1. " + E5("☕") + "[He's making coffee.]",
        "2. " + E5("💻") + "hombre con laptop → {He's working.|He is working.}",
        "3. " + E5("🚴") + "ciclista → {She's riding a bike.|He's riding a bike.|She is riding a bike.|He is riding a bike.}",
        "4. " + E5("🍿") + "familia en el sofá con palomitas → {They're watching a movie.|They are watching a movie.}",
        "5. " + E5("🚗") + "hombre en su coche → {He's driving.|He is driving.}",
        "6. " + E5("🛍️") + "hombre en una tienda de ropa → {He's shopping.|He is shopping.}",
        "7. " + E5("🍳") + "familia en la mesa por la mañana → {They're having breakfast.|They are having breakfast.}",
        "8. " + E5("🌲") + "dos personas por el bosque → {They're taking a walk.|They are taking a walk.}",
        "9. " + E5("📞") + "mujer hablando por teléfono → {She's calling a friend.|She is calling a friend.}"
      ] },

    { n: "6", t: "Answer these questions.", h: "Usa la pista en español para decir qué hace la persona.",
      items: [
        "# 1. " + E5("📚") + "Salma estudia",
        "A: Is Salma sleeping?\nB: [No, she's not. She's studying.]",
        "# 2. " + E5("💃") + "Richard y Laura bailan",
        "A: Are Richard and Laura playing tennis?\nB: [No, they're not. They're dancing.]",
        "# 3. " + E5("🏊") + "Charles nada",
        "A: Is Charles visiting friends?\nB: No, {he's not|he isn't|he is not}. {He's|He is} swimming.",
        "# 4. " + E5("🍳") + "Jerry cocina",
        "A: Is Jerry eating dinner?\nB: No, {he's not|he isn't|he is not}. {He's|He is} cooking.",
        "# 5. " + E5("🏃") + "Mary y Jennifer corren (jogging)",
        "A: Are Mary and Jennifer checking their messages?\nB: No, {they're not|they aren't|they are not}. {They're|They are} {running|jogging}.",
        "# 6. " + E5("😴") + "Carol duerme",
        "A: Is Carol listening to music?\nB: No, {she's not|she isn't|she is not}. {She's|She is} sleeping.",
        "# 7. " + E5("📖") + "Kevin lee un libro",
        "A: Is Kevin driving?\nB: No, {he's not|he isn't|he is not}. {He's|He is} {reading|reading a book}.",
        "# 8. " + E5("🏀") + "los amigos juegan baloncesto",
        "A: Are the friends watching a movie?\nB: No, {they're not|they aren't|they are not}. {They're|They are} playing {basketball}."
      ] },

    { n: "7", t: "Write questions about these people. Use the words in parentheses.", h: "Escribe solo las preguntas (las respuestas dependían de la imagen).",
      items: [
        "1. (Min / wear jeans) [Is Min wearing jeans?]",
        "2. (Bob / drink soda)\n{Is Bob drinking soda?|Is Bob drinking a soda?}",
        "3. (Jason and Beth / watch a movie)\n{Are Jason and Beth watching a movie?}",
        "4. (Adriana / wear jeans)\n{Is Adriana wearing jeans?}",
        "5. (Amy and Gabriela / chat online)\n{Are Amy and Gabriela chatting online?}",
        "6. (Daniel / talk to Adriana)\n{Is Daniel talking to Adriana?|Is Daniel talking with Adriana?}",
        "7. (Bob / wear shorts)\n{Is Bob wearing shorts?}",
        "8. (Min / talking on the phone)\n{Is Min talking on the phone?|Is Min talking on her phone?}"
      ] },

    { n: "8", t: "Write questions and answers. Use What + doing and the words in parentheses.", h: "Escribe la pregunta (A) y la respuesta (B).",
      items: [
        "1. (Linda / check her messages)\nA: [What is Linda doing?]\nB: [She's checking her messages.]",
        "2. (you and Akira / eat lunch)\nA: [What are you and Akira doing?]\nB: [We're eating lunch.]",
        "3. (Tom and Donna / visit friends)\nA: {What are Tom and Donna doing?}\nB: {They're visiting friends.|They are visiting friends.}",
        "4. (Sandra / get up)\nA: {What is Sandra doing?|What's Sandra doing?}\nB: {She's getting up.|She is getting up.}",
        "5. (you and Isabella / ride bikes)\nA: {What are you and Isabella doing?}\nB: {We're riding bikes.|We are riding bikes.}",
        "6. (Diego and Patricia / work)\nA: {What are Diego and Patricia doing?}\nB: {They're working.|They are working.}",
        "7. (Tim / listen to music)\nA: {What is Tim doing?|What's Tim doing?}\nB: {He's listening to music.|He is listening to music.}",
        "8. (you / study English)\nA: {What are you doing?}\nB: {I'm studying English.|I am studying English.}",
        "9. (Sonya and Annie / have dinner)\nA: {What are Sonya and Annie doing?}\nB: {They're having dinner.|They are having dinner.}",
        "10. (I / finish this exercise)\nA: {What am I doing?}\nB: {You're finishing this exercise.|You are finishing this exercise.}"
      ] }
  ]
};
