/* Módulo 6 — I ride my bike to school.
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var SND6 = ["/s/", "/z/", "/ɪz/", "irregular"];
var BOX9 = ["He goes to work before noon.", "I don't work far from here.", "Kimberly is Dan's wife.", "She doesn't get up early on Sundays.", "We don't live in the suburbs.", "We take the bus, the train, or the subway."];

MODS[6] = {
  title: "I ride my bike to school.",
  topic: "Familia, presente simple, rutinas y at / in / on",
  ex: [
    { n: "1A", t: "Angela is talking about her family. Complete the sentences with the words in the box.", h: "Usa las palabras del recuadro.",
      bank: ["brother", "father", "parents", "wife", "children", "husband", "sister", "daughters", "mother", "son"],
      items: [
        "# Fotos: Larry (hombre) y Alice (mujer) son los padres de Angela · Nick es el esposo de Angela · Avery y Bella son niñas · Ethan es un niño. Los tres son hermanos.",
        "1. Alice and Larry are my [parents]. Alice is my {mother}, and Larry is my {father}.",
        "2. Nick is my {husband}. I'm his {wife}.",
        "3. Ethan, Avery, and Bella are our {children}. Avery and Bella are our {daughters}, and Ethan is our {son}. Avery is Bella's {sister}, and Ethan is her {brother}."
      ] },

    { n: "2", t: "Complete the conversation with the correct words in parentheses.", h: "Escribe la forma correcta del verbo.",
      items: [
        "Christine: So, do you live downtown, Sarah?",
        "Sarah: Yes, I [live] with my brother. He {has} an apartment near here. (have / has)",
        "Christine: Oh, so you {walk} to work. (walk / walks)",
        "Sarah: Actually, I {don't} walk to work in the morning. (don't / doesn't) I {take} the bus to work, (take / takes) and then I {walk} home at night. (walk / walks) What about you?",
        "Christine: Well, my husband and I {have} a house in the suburbs now, (have / has) so I {drive} to work. (drive / drives)",
        "My husband doesn't {work} downtown. (work / works) He {works} in the suburbs near our house, (work / works) so he {goes} to work by bus. (go / goes)"
      ] },

    { n: "3A", t: "Write the third-person singular forms of these verbs.", h: "Escribe la forma con he / she / it.", cols: true,
      items: [
        "1. dance = [dances]", "2. do = [does]",
        "3. go = {goes}", "4. have = {has}",
        "5. live = {lives}", "6. ride = {rides}",
        "7. sleep = {sleeps}", "8. study = {studies}",
        "9. take = {takes}", "10. use = {uses}",
        "11. walk = {walks}", "12. watch = {watches}"
      ] },

    { n: "3B", t: "Practice the words in part A. Then add them to the chart.", h: "Elige dónde va cada palabra: s = /s/, s = /z/, (e)s = /ɪz/ o irregular.",
      items: [
        "dances = [/ɪz/]", "does = [irregular]",
        { p: "goes", o: SND6, a: 3 },
        { p: "has", o: SND6, a: 3 },
        { p: "lives", o: SND6, a: 1 },
        { p: "rides", o: SND6, a: 1 },
        { p: "sleeps", o: SND6, a: 0 },
        { p: "studies", o: SND6, a: 1 },
        { p: "takes", o: SND6, a: 0 },
        { p: "uses", o: SND6, a: 2 },
        { p: "walks", o: SND6, a: 0 },
        { p: "watches", o: SND6, a: 2 }
      ] },

    { n: "5", t: "Write about Daniela's weekly schedule.", h: "Completa con la forma correcta del verbo y los días.",
      items: [
        "# De lunes a viernes: 7:00 get up · 8:00 go to work · 11:00 have lunch · 2:00 take a walk · 5:00 finish work",
        "# A las 6:00 P.M.: lunes play basketball · martes go to class · miércoles eat dinner with my family · jueves go to class · viernes watch a movie",
        "1. She [gets up] at 7:00 every day.",
        "2. She {goes} to work at 8:00 every day.",
        "3. She {has} lunch at 11:00 every day.",
        "4. She {takes} a walk at 2:00 every day.",
        "5. She {finishes} work at 5:00 every day.",
        "6. She {plays} basketball at 6:00 {on Mondays}.",
        "7. She {goes} to class at 6:00 {on Tuesdays and Thursdays}.",
        "8. She {watches} a movie at 6:00 {on Fridays}."
      ] },

    { n: "7", t: "Complete these conversations with at, in, or on. (If you don't need a preposition, write Ø.)", h: "Escribe at, in, on, o x si no necesitas preposición (Ø).",
      items: [
        "# Conversation 1",
        "A: Do you go to bed [Ø] late [on] weekends?",
        "B: Yes, I do. I go to bed {at} midnight. But I go to bed {x|Ø|0|-} early {on} weekdays.",
        "# Conversation 2",
        "A: Do you study {in} the afternoon?",
        "B: No, I study {in} the morning {on} weekends, and I study {in} the evening {on} Mondays and Wednesdays.",
        "# Conversation 3",
        "A: What time do you get up {in} the morning {on} weekdays?",
        "B: I get up {at} 6:00 {x|Ø|0|-} every day.",
        "# Conversation 4",
        "A: Do you have English class {in} the morning?",
        "B: No, I have English {at} 3:30 {in} the afternoon {on} Tuesdays and Thursdays. {On} Mondays, Wednesdays, and Fridays, our class is {at} 5:00."
      ] },

    { n: "8", t: "Write questions to complete the conversations.", h: "Elige la pregunta correcta (A) para cada respuesta (B).",
      items: [
        "# 1",
        "A: [Do you live alone?]",
        "B: No, I don't live alone. I live with my mom and dad.",
        "# 2",
        { p: "A:", o: ["Do you watch television in the morning?", "Do you watch television in the afternoon?", "Does your family watch television at night?"], a: 1 },
        "B: Yes, my family and I watch television in the afternoon.",
        "# 3",
        { p: "A:", o: ["Do you get up early on Fridays?", "Do you get up early on Saturdays?", "Does she get up early on Fridays?"], a: 0 },
        "B: Yes, I get up early on Fridays.",
        { p: "A:", o: ["What time does he get up on Fridays?", "What time do you get up on Fridays?", "Do you get up at 5:30?"], a: 1 },
        "B: I get up at 5:30.",
        "# 4",
        { p: "A:", o: ["Do your sister drive to work?", "Is your sister drive to work?", "Does your sister drive to work?"], a: 2 },
        "B: No, my sister doesn't drive to work.",
        { p: "A:", o: ["Do she take the bus?", "Does she take the bus?", "Does she takes the bus?"], a: 1 },
        "B: No, she doesn't take the bus. She takes the train.",
        "# 5",
        { p: "A:", o: ["Does your dad work on weekends?", "Do your dad work on weekends?", "Is your dad work on weekends?"], a: 0 },
        "B: No, my dad doesn't work on weekends.",
        { p: "A:", o: ["When do he work?", "Does he work on weekdays?", "When does he work?"], a: 2 },
        "B: He works on weekdays.",
        "# 6",
        { p: "A:", o: ["Does your mom works in the city?", "Does your mom work in the city?", "Do your mom work in the city?"], a: 1 },
        "B: Yes, my mom works in the city. She's a restaurant manager.",
        { p: "A:", o: ["Does she drive to work?", "Do she use public transportation?", "Does she use public transportation?"], a: 2 },
        "B: No, she doesn't use public transportation. She drives to work.",
        "# 7",
        { p: "A:", o: ["Does you have a big lunch on Sundays?", "Do you have a big lunch on Sundays?", "Are you have a big lunch on Sundays?"], a: 1 },
        "B: Yes, we have a big lunch on Sundays.",
        { p: "A:", o: ["What time does you have lunch?", "Where do you have lunch?", "What time do you have lunch?"], a: 2 },
        "B: We have lunch at 1:00."
      ] },

    { n: "9", t: "Write each sentence a different way. Use the sentences in the box.", h: "Elige la oración del recuadro que dice lo mismo.",
      bank: BOX9,
      items: [
        "1. Dan is Kimberly's husband.\n= [Kimberly is Dan's wife.]",
        { p: "2. We have an apartment in the city.", o: BOX9, a: 4 },
        { p: "3. We use public transportation.", o: BOX9, a: 5 },
        { p: "4. He goes to work in the morning.", o: BOX9, a: 0 },
        { p: "5. My office is near here.", o: BOX9, a: 1 },
        { p: "6. She sleeps late on Sundays.", o: BOX9, a: 3 }
      ] }
  ]
};
