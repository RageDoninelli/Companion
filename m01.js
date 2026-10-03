/* Módulo 1 — What's your name?
   Formato: {respuesta|alternativa} = espacio a completar · [texto] = ejemplo ya resuelto · "# texto" = subtítulo */
var BQ9 = ["What's your name?","And how do you spell your last name?","Are you Andrea Nelson?","And what's your email address?","What's your phone number?","How do you spell your first name?"];

MODS[1] = {
  title: "What's your name?",
  topic: "Saludos, presentaciones, números y deletreo",
  ex: [
    { n: "1", t: "Complete the conversations. Use the names in the box.", h: "Completa con los nombres del recuadro.",
      bank: ["John", "Mr. Garcia", "Ms. Baker", "Nancy"],
      items: [
        "# Mr. Garcia and Nancy",
        "Mr. Garcia: Hi, [Nancy].",
        "Nancy: Hello, {Mr. Garcia|Mr Garcia}.",
        "# John and Ms. Baker",
        "John: It's nice to meet you, {Ms. Baker|Ms Baker}.",
        "Ms. Baker: Nice to meet you, too, {John}."
      ] },

    { n: "2", t: "Complete the conversations. Use my, your, his, or her.", h: "Usa my, your, his o her.",
      bank: ["my", "your", "his", "her"],
      items: [
        "# Conversation 1",
        "A: Hi. What's [your] name?",
        "B: {My} name is Lisa. And what's {your} name?",
        "A: {My} name is James.",
        "# Conversation 2",
        "A: What's {his} name?",
        "B: {His} name is Michael.",
        "A: And what's {her} name?",
        "B: {Her} name is Susan."
      ] },

    { n: "3", t: "Complete the conversations.", h: "Escribe la palabra que falta.",
      items: [
        "# Conversation 1",
        "A: Hello, [Mr.] Wilson.",
        "B: {Good} morning, David. {How} are you?",
        "A: {I'm|I am} OK, thank you.",
        "# Conversation 2",
        "A: Hi. How are {you}, Mrs. Turner?",
        "B: I'm just {fine|OK}, thank you. How about {you}, {Mr.} Smith?",
        "A: Pretty {good}, thanks.",
        "# Conversation 3",
        "A: How's it {going}, Ken?",
        "B: Great. {How} are you doing?",
        "A: Pretty good."
      ] },

    { n: "4", t: "Choose the correct responses.", h: "Elige la respuesta correcta.",
      items: [
        "1. A: Hi, Tony.\nB: [Hello.]",
        { p: "2. A: My name is Ellen Miller.<br>B:", o: ["It's Williams.", "I'm Rob Williams."], a: 1 },
        { p: "3. A: Hello, Carol. How's it going?<br>B:", o: ["Fine, thanks.", "Nice to meet you, too."], a: 0 },
        { p: "4. A: How do you spell your last name?<br>B:", o: ["R-O-G-E-R-S.", "It's Rogers."], a: 0 },
        { p: "5. A: I'm Rich Martinez.<br>B:", o: ["Nice to meet you, too.", "It's nice to meet you."], a: 1 }
      ] },

    { n: "5", t: "Spell the numbers.", h: "Escribe cada número en letras.", cols: true,
      items: [
        "2 = [two]", "3 = {three}", "8 = {eight}", "1 = {one}", "7 = {seven}", "10 = {ten}",
        "5 = {five}", "6 = {six}", "0 = {zero|oh}", "9 = {nine}", "4 = {four}"
      ] },

    { n: "6", t: "Write the telephone numbers and email addresses.", h: "Teléfonos con guiones (212-555-6115). Emails en minúsculas.",
      items: [
        "1. two-one-two, five-five-five, six-one-one-five\n[212-555-6115]",
        "2. A-M-Y dash L-O-P-E-Z eight-two at C-U-P dot O-R-G\n[amy-lopez82@cup.org]",
        "3. six-oh-four, five-five-five, four-seven-three-one\n{604-555-4731}",
        "4. nine-four-nine, five-five-five, three-eight-oh-two\n{949-555-3802}",
        "5. B-R-I-A-N dot J-O-H-N-S-O-N zero-three-nine at C-U-P dot O-R-G\n{brian.johnson039@cup.org}",
        "6. seven-seven-three, five-five-five, one-seven-seven-nine\n{773-555-1779}",
        "7. M-A-R-I-A-B-R-A-D-Y underscore seven at C-U-P dot O-R-G\n{mariabrady_7@cup.org}",
        "8. T-I-N-A dash F-O-X underscore nine-five-two at C-U-P dot O-R-G\n{tina-fox_952@cup.org}"
      ] },

    { n: "7", t: "Complete the conversations. Write 'm, 're, or 's.", h: "Escribe solo la contracción, con apóstrofo.",
      items: [
        "# Conversation 1",
        "A: What[’s] your name?",
        "B: I{'m} Momoko Sato.",
        "A: It{'s} nice to meet you, Momoko.",
        "# Conversation 2",
        "A: Hello. I{'m} Josh Brown. I{'m} in your English class.",
        "B: Yes, and you{'re} in my math class, too.",
        "# Conversation 3",
        "A: What{'s} his name?",
        "B: It{'s} Chris Allen.",
        "A: He{'s} in our English class.",
        "B: You{'re} right!"
      ] },

    { n: "8", t: "Complete the conversations. Use the words in the box.", h: "Usa las palabras del recuadro.",
      bank: ["am", "he's", "I'm not", "it's", "you", "are", "I'm", "is", "me", "you're"],
      items: [
        "# Conversation 1",
        "Amy: Excuse [me]. Are {you} Alex Walker?",
        "Carlos: No, {I'm not}. {He's} over there.",
        "Amy: Oh, {I'm} sorry.",
        "# Conversation 2",
        "Amy: Excuse me. {Are} you Alex Walker?",
        "Alex: Yes, I {am}.",
        "Amy: Hi, Alex. My name {is} Amy Clark.",
        "Alex: Oh, {you're} in my English class.",
        "Amy: That's right. {It's} nice to meet you.",
        "Alex: Nice to meet you, too."
      ] },

    { n: "9", t: "Complete the conversation. Use the questions in the box.", h: "Elige la pregunta correcta para cada espacio.",
      items: [
        "A: Hi. [Are you Andrea Nelson?]",
        "B: No, I'm not.",
        "A: Oh, I'm sorry.",
        { p: "A:", o: BQ9, a: 0 },
        "B: Kerry Moore.",
        { p: "A:", o: BQ9, a: 5 },
        "B: K-E-R-R-Y.",
        { p: "A:", o: BQ9, a: 1 },
        "B: M-O-O-R-E.",
        { p: "A:", o: BQ9, a: 4 },
        "B: It's 618-555-7120.",
        { p: "A:", o: BQ9, a: 3 },
        "B: It's kmoore19@cup.org."
      ] },

    { n: "10", t: "Hello and good-bye! Complete the conversations.", h: "Elige la expresión correcta.",
      items: [
        "1. A: [Hi.] How are you?\nB: I'm fine, thanks.",
        { p: "2. A: ____", o: ["Hello.", "Good-bye."], a: 1 },
        "B: See you tomorrow.",
        { p: "3. A: ____ Are you Min-ji Park?", o: ["Excuse me.", "Thank you."], a: 0 },
        "B: Yes, I am. It's nice to meet you.",
        { p: "4. A: ____", o: ["Good evening.", "Good night."], a: 0 },
        "B: Hello."
      ] }
  ]
};
