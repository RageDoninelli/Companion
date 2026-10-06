/* Módulo 10 — What sports do you like?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E10 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var SP10 = ["hockey", "basketball", "bike riding", "swimming", "baseball", "ice-skating", "hiking", "soccer", "tennis", "football"];
var GP10 = ["go", "play"];
var Q10 = ["Does your husband go snowboarding, too?", "What do you do on the weekends?", "What do you like to do in the summer?", "Who do you practice with?", "What sports do you like?"];
var BOX10 = ["He can play sports well.", "He can't dance at all.", "I hardly ever go hiking.", "I love it.", "She has many talents.", "She tells good jokes."];

MODS[10] = {
  title: "What sports do you like?",
  topic: "Deportes, go / play y can / can't",
  ex: [
    { n: "1A", t: "Sports. Match these sports with the correct pictures.", h: "Mira el emoji y la pista, y elige el deporte en inglés.",
      bank: SP10,
      items: [
        "1. " + E10("🏒") + "hockey sobre hielo → [hockey]",
        { p: "2. " + E10("🏀") + "baloncesto", o: SP10, a: 1 },
        { p: "3. " + E10("🚴") + "andar en bicicleta", o: SP10, a: 2 },
        { p: "4. " + E10("🏊") + "natación", o: SP10, a: 3 },
        { p: "5. " + E10("⚾") + "béisbol", o: SP10, a: 4 },
        { p: "6. " + E10("⛸️") + "patinaje sobre hielo", o: SP10, a: 5 },
        { p: "7. " + E10("🥾") + "senderismo / caminatas", o: SP10, a: 6 },
        { p: "8. " + E10("⚽") + "fútbol", o: SP10, a: 7 },
        { p: "9. " + E10("🎾") + "tenis", o: SP10, a: 8 },
        { p: "10. " + E10("🏈") + "fútbol americano", o: SP10, a: 9 }
      ] },

    { n: "1B", t: "Which sports in part A follow go? Which sports follow play?", h: "Elige si cada deporte va con go o con play.",
      items: [
        "hockey = [play]",
        { p: "basketball", o: GP10, a: 1 },
        { p: "bike riding", o: GP10, a: 0 },
        { p: "swimming", o: GP10, a: 0 },
        { p: "baseball", o: GP10, a: 1 },
        { p: "ice-skating", o: GP10, a: 0 },
        { p: "hiking", o: GP10, a: 0 },
        { p: "soccer", o: GP10, a: 1 },
        { p: "tennis", o: GP10, a: 1 },
        { p: "football", o: GP10, a: 1 }
      ] },

    { n: "2", t: "Complete the conversation. Use the questions in the box.", h: "Elige la pregunta de Katie.",
      items: [
        "Katie: [What do you do on the weekends?]",
        "Isabela: I like to play sports.",
        { p: "Katie: Really?", o: Q10, a: 4 },
        "Isabela: Well, I love to go snowboarding.",
        { p: "Katie:", o: Q10, a: 0 },
        "Isabela: No, he doesn't like cold weather. He likes to play basketball.",
        { p: "Katie:", o: Q10, a: 2 },
        "Isabela: I like to play tennis when the weather is warm.",
        { p: "Katie:", o: Q10, a: 3 },
        "Isabela: I practice with my sister. She loves tennis, too."
      ] },

    { n: "3", t: "Unscramble the questions.", h: "Ordena las palabras para formar la pregunta (la parte de responder con tus datos la omití).",
      items: [
        "1. you · do · like · volleyball\n[Do you like volleyball?]",
        "2. sports · what · do · watch · you\n{What sports do you watch?}",
        "3. you · play · sports · what · do\n{What sports do you play?}",
        "4. swimming · do · you · how · often · go\n{How often do you go swimming?}",
        "5. do · with · who · you · play\n{Who do you play with?|Who do you play sports with?}"
      ] },

    { n: "4", t: "Write questions and answers about these people.", h: "Usa la pista en español y escribe la pregunta con Can y la respuesta corta.",
      items: [
        "# 1. " + E10("🏃") + "Maddie corre un maratón",
        "[Can Maddie run a marathon?]\n[Yes, she can.]",
        "# 2. " + E10("🐴") + "Doug se cae de un caballo",
        "Can Doug {ride a horse|ride horses}?\nNo, he {can't|cannot}.",
        "# 3. " + E10("🧁") + "Mariana hornea",
        "Can Mariana {bake|cook|bake cookies|bake cupcakes|bake muffins}?\nYes, she {can}.",
        "# 4. " + E10("🛹") + "Felipe y Ken andan en skateboard",
        "Can Felipe and Ken {skateboard|ride a skateboard}?\nYes, they {can}.",
        "# 5. " + E10("🏒") + "George juega hockey",
        "Can George {play hockey|play ice hockey}?\nYes, he {can}.",
        "# 6. " + E10("🎾") + "Ana y Debbie juegan tenis",
        "Can Ana and Debbie {play tennis}?\nYes, they {can}."
      ] },

    { n: "6", t: "Choose the correct responses.", h: "Elige la respuesta correcta.",
      items: [
        "1. A: Do you like to play soccer?\nB: [No, I don't.]",
        { p: "2. A: Who do you go bike riding with?<br>B:", o: ["I do.", "My friends from school."], a: 1 },
        { p: "3. A: Who can play the piano?<br>B:", o: ["Marco can.", "Yes, he can."], a: 0 },
        { p: "4. A: Where do you go hiking?<br>B:", o: ["In summer.", "In the mountains."], a: 1 }
      ] },

    { n: "8", t: "Write each sentence a different way. Use the sentences in the box.", h: "Elige la oración del recuadro que dice lo mismo.",
      bank: BOX10,
      items: [
        "1. I don't go hiking very often.\n= [I hardly ever go hiking.]",
        { p: "2. He's a great athlete.", o: BOX10, a: 0 },
        { p: "3. She has a lot of abilities.", o: BOX10, a: 4 },
        { p: "4. I really like it.", o: BOX10, a: 3 },
        { p: "5. He's a terrible dancer.", o: BOX10, a: 1 },
        { p: "6. She's very funny.", o: BOX10, a: 5 }
      ] }
  ]
};
