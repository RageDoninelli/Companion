/* Módulo 15 — Where were you born?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var BOX15 = ["I was sixteen.", "No, I wasn't. I was born in Europe.", "We came here for my father's job.", "I was born in Brussels.", "No, it wasn't. I loved it!", "No, I'm from Belgium.", "We moved here in 2009.", "Yes, they were. We were all born there."];
var TF15 = ["True", "False"];
var DWW15 = ["did", "was", "were"];
var US15 = "the U.S.|the US|the USA|the United States|America";

MODS[15] = {
  title: "Where were you born?",
  topic: "Pasado de to be (was / were), datos de vida y preguntas",
  ex: [
    { n: "1", t: "Complete the conversation. Use the sentences in the box.", h: "Elige la respuesta de Marie.",
      items: [
        "Jason: Were you born here in the U.S., Marie?",
        "Marie: [No, I wasn't. I was born in Europe.]",
        "Jason: Oh, were you born in France?",
        { p: "Marie:", o: BOX15, a: 5 },
        "Jason: Really? What city were you born in?",
        { p: "Marie:", o: BOX15, a: 3 },
        "Jason: Were your parents born in Brussels, too?",
        { p: "Marie:", o: BOX15, a: 7 },
        "Jason: And why did you come to the U.S.?",
        { p: "Marie:", o: BOX15, a: 2 },
        "Jason: So when did you move here?",
        { p: "Marie:", o: BOX15, a: 6 },
        "Jason: Really? How old were you then?",
        { p: "Marie:", o: BOX15, a: 0 },
        "Jason: Was it scary?",
        { p: "Marie:", o: BOX15, a: 4 }
      ] },

    { n: "2", t: "Complete these conversations with was, wasn't, were, or weren't.", h: "Escribe was, wasn't, were o weren't.",
      bank: ["was", "wasn't", "were", "weren't"],
      items: [
        "# Conversation 1",
        "Sandra: [Were] you born in the U.S., Ivan?",
        "Ivan: Yes, I {was}. My brother and I {were} born here in Miami.",
        "Sandra: I {was} born here, too. What about your parents? {Were} they born here?",
        "Ivan: Well, my father {wasn't}. He {was} born in Cuba, but my mother {was} born in the U.S. – in Detroit.",
        "Sandra: Detroit? Really? My parents {were} born in Detroit, too!",
        "# Conversation 2",
        "Kristin: I called you on Saturday, but you {weren't} home.",
        "Jennifer: No, I {wasn't}. I {was} at the beach all weekend.",
        "Kristin: That's nice. How {was} the weather there?",
        "Jennifer: It {was} beautiful.",
        "Kristin: {Were} your parents there?",
        "Jennifer: No, they {weren't}. I {was} with my sister. It {was} great!",
        "# Conversation 3",
        "Mindy: {Were} you in college last year, Alan?",
        "Alan: No, I {wasn't}. I graduated from college two years ago.",
        "Mindy: So where {were} you last year?",
        "Alan: I {was} in Japan.",
        "Mindy: Oh! {Were} you in Tokyo?",
        "Alan: No, I {wasn't}. I {was} in Osaka. I had a job there.",
        "Mindy: What {was} the job?",
        "Alan: I {was} an English teacher."
      ] },

    { n: "3", t: "Write four sentences about each person.", h: "Completa las oraciones con los datos de cada persona (año, lugar y verbo en pasado).",
      items: [
        "# 1. Marie Curie, scientist (1867–1934) · born in Poland · won Nobel Prizes in 1903 and 1911",
        "[Marie Curie was a scientist. She was born in 1867 in Poland. She won Nobel Prizes in 1903 and 1911. She died in 1934.]",
        "# 2. Gabriel García Márquez, author (1927–2014) · born in Colombia · wrote One Hundred Years of Solitude, 1967",
        "Gabriel García Márquez {was} an {author|writer}. He {was} born in {1927} in {Colombia}. He {wrote} One Hundred Years of Solitude in {1967}. He {died} in {2014}.",
        "# 3. Maya Angelou, author (1928–2014) · born in the U.S. · wrote I Know Why the Caged Bird Sings, 1969",
        "Maya Angelou {was} an {author|writer}. She {was} born in {1928} in {" + US15 + "}. She {wrote} I Know Why the Caged Bird Sings in {1969}. She {died} in {2014}.",
        "# 4. Pat Morita, actor (1932–2005) · born in the U.S. · was in the movie The Karate Kid, 1984",
        "Pat Morita {was} an {actor}. He {was} born in {1932} in {" + US15 + "}. He {was} in the movie The Karate Kid in {1984}. He {died} in {2005}.",
        "# 5. Grace Kelly, actress (1929–1982) · born in the U.S. · married Prince Rainier III of Monaco, 1956",
        "Grace Kelly {was} an {actress}. She {was} born in {1929} in {" + US15 + "}. She {married} Prince Rainier III of Monaco in {1956}. She {died} in {1982}.",
        "# 6. Salvador Dalí, artist (1904–1989) · born in Spain · painted The Persistence of Memory, 1931",
        "Salvador Dalí {was} an {artist}. He {was} born in {1904} in {Spain}. He {painted} The Persistence of Memory in {1931}. He {died} in {1989}."
      ] },

    { n: "4", t: "Complete these questions. Use the words in the box.", h: "Escribe la palabra interrogativa que falta.",
      bank: ["How", "How old", "What", "When", "Where", "Who", "Why"],
      items: [
        "1. A: [What] was your favorite subject in high school?\nB: It was art.",
        "2. A: {Who} was your favorite teacher?\nB: My art teacher, Mrs. Heintz.",
        "3. A: {When} did you graduate from high school?\nB: In 2006.",
        "4. A: {Where} did you go to college?\nB: I went to Duke University.",
        "5. A: {Why} did you study physics?\nB: Because I wanted to become an astronaut!",
        "6. A: {How} were your professors in college?\nB: They were great.",
        "7. A: {How old} were you when you graduated?\nB: I was 22 years old."
      ] },

    { n: "5", t: "Write whether each sentence is true or false. Correct the false sentences.", h: "Elige True o False. Si es falsa, elige la corrección.",
      items: [
        "1. Students usually go to middle school before elementary school.\n[False. Students usually go to middle school after elementary school.]",
        { p: "2. Students often study in the library.", o: TF15, a: 0 },
        { p: "3. Students never eat lunch in the cafeteria.", o: TF15, a: 1 },
        { p: "Corrección:", o: ["Students usually eat lunch in the cafeteria.", "Students never eat lunch at home.", "Students always study in the cafeteria."], a: 0 },
        { p: "4. Physical education classes are almost always in an auditorium.", o: TF15, a: 1 },
        { p: "Corrección:", o: ["Physical education classes are almost always in a gym.", "Physical education classes are never in a gym.", "Physical education classes are almost always in a library."], a: 0 },
        { p: "5. Students usually study history and science in high school.", o: TF15, a: 0 }
      ] },

    { n: "6", t: "Unscramble the questions about your elementary school days.", h: "Ordena las palabras para formar la pregunta (la parte de responder con tus datos la omití).",
      items: [
        "1. was · your · of · school · how · first · day\n[How was your first day of school?]",
        "2. your · was · teacher · who · favorite\n{Who was your favorite teacher?}",
        "3. favorite · was · your · what · class\n{What was your favorite class?}",
        "4. your · who · best · were · friends\n{Who were your best friends?}",
        "5. spend · did · your · where · you · free · time\n{Where did you spend your free time?}",
        "6. leave · did · when · you · elementary · school\n{When did you leave elementary school?}"
      ] },

    { n: "7", t: "Childhood memories. Complete the questions with did, was, or were.", h: "Elige did, was o were (la parte de responder con tus datos la omití).",
      items: [
        "1. A: [Were] you born here?",
        { p: "2. A: ____ you grow up in a big city?", o: DWW15, a: 0 },
        { p: "3. A: ____ you play sports?", o: DWW15, a: 0 },
        { p: "4. A: ____ your home near your school?", o: DWW15, a: 1 },
        { p: "5. A: ____ you ride a bus to school?", o: DWW15, a: 0 },
        { p: "6. A: ____ you a good student?", o: DWW15, a: 2 },
        { p: "7. A: ____ your teachers nice?", o: DWW15, a: 2 },
        { p: "8. A: ____ you have a lot of friends?", o: DWW15, a: 0 },
        { p: "9. A: ____ your grandparents live near you?", o: DWW15, a: 0 },
        { p: "10. A: ____ both your parents work?", o: DWW15, a: 0 }
      ] }
  ]
};
