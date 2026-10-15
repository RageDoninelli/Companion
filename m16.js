/* Módulo 16 — Can I take a message?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E16 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var BOXR16 = ["I'm sorry, but Dr. Silva is in a meeting.", "(604) 555-0662. I'll give her your message.", "Does Dr. Silva have your number?", "Can I take a message?", "Good morning. Oceanside Medical.", "You're welcome. Good-bye."];
var BOXJ16 = ["Thank you very much.", "Good morning. Is Dr. Silva there?", "I don't think so. It's (604) 555-0662.", "Oh.", "Good-bye.", "Yes. This is Brian Jones. Please ask her to call me."];

MODS[16] = {
  title: "Can I take a message?",
  topic: "Llamadas telefónicas, pronombres, invitaciones y like to / love to / want to",
  ex: [
    { n: "1", t: "Make a phone conversation. Use the sentences and questions in the box.", h: "Elige la frase que sigue en la conversación (recepcionista y Mr. Jones).",
      items: [
        "Receptionist: [Good morning. Oceanside Medical.]",
        "Mr. Jones: [Good morning. Is Dr. Silva there?]",
        { p: "Receptionist:", o: BOXR16, a: 0 },
        { p: "Mr. Jones:", o: BOXJ16, a: 3 },
        { p: "Receptionist:", o: BOXR16, a: 3 },
        { p: "Mr. Jones:", o: BOXJ16, a: 5 },
        { p: "Receptionist:", o: BOXR16, a: 2 },
        { p: "Mr. Jones:", o: BOXJ16, a: 2 },
        { p: "Receptionist:", o: BOXR16, a: 1 },
        { p: "Mr. Jones:", o: BOXJ16, a: 0 },
        { p: "Receptionist:", o: BOXR16, a: 5 },
        { p: "Mr. Jones:", o: BOXJ16, a: 4 }
      ] },

    { n: "2", t: "Kate called her friends yesterday. Where were they? Complete the conversations. Use the words in the box.", h: "Usa el emoji y la pista en español para completar con bed, hospital, library, mall, vacation o work.",
      bank: ["bed", "hospital", "library", "mall", "vacation", "work"],
      items: [
        "# 1. " + E16("🛍️") + "centro comercial",
        "Sally: Oh, hi, Kate. Listen. I can't talk right now. I'm [at the mall]. Call me later?",
        "# 2. " + E16("🛏️") + "en la cama",
        "Jay: Kate. Sorry, can you call me in the morning? I'm {in bed}.",
        "# 3. " + E16("🧳") + "de vacaciones",
        "Marcela: I'd love to, but I can't. I'm {on vacation|on holiday|in vacation} with my parents.",
        "# 4. " + E16("🏥") + "hospital (se rompió la pierna)",
        "Bob: Not really. I'm {in the hospital|in hospital|at the hospital}. I broke my leg!",
        "# 5. " + E16("📚") + "biblioteca (susurra)",
        "Angie: Oh, I'm {in the library|at the library}.",
        "# 6. " + E16("☕") + "trabajo (está en la cafetería, atendiendo)",
        "Pedro: Not really. I'm {at work|in work|working}. Call me tonight."
      ] },

    { n: "3", t: "Unscramble the sentences.", h: "Ordena las palabras para formar la oración.",
      items: [
        "1. with · night · I · him · studied · last\n[I studied with him last night.]",
        "2. you · help · I · can\n{Can I help you?}",
        "3. her · the · gave · they · book\n{They gave her the book.}",
        "4. remember · you · me · do\n{Do you remember me?}",
        "5. his · I · call · missed · yesterday\n{I missed his call yesterday.|Yesterday I missed his call.}",
        "6. weekend · last · we · them · visited\n{We visited them last weekend.|Last weekend we visited them.}"
      ] },

    { n: "4", t: "Heidi is checking her voice-mail messages. Complete the messages with the correct pronouns.", h: "Escribe el pronombre: I, you, he, we, me, him, us…",
      items: [
        "# Ann's message",
        "Hello, Miss Anderson. This is Ann Lopez. [I] work at First City Bank. {You} left your wallet here this morning. Please call {me} at (808) 555-1247. I'd like to give it back to {you} before we close today.",
        "# Jim's message",
        "Hey, Heidi. It's Jim. I'm sorry {I} missed your call yesterday. Listen, my friends and I are going to go out for coffee tomorrow morning. {We}'re meeting at my house at 9:00. Would you like to join {us}? Give {me} a call!",
        "# Sarah's message",
        "Hi, Heidi. It's Sarah. Did you see Marco today? {He}'s having a birthday party on Friday. Do you want to go with {me}? I'm going to buy {him} a present later. Call {me}! Thanks!"
      ] },

    { n: "5", t: "Complete the phone conversation. Use the words in the box.", h: "Usa las palabras del recuadro: at, call, does, her, in, please, but, can, have, this.",
      bank: ["at", "call", "does", "her", "in", "please", "but", "can", "have", "this"],
      items: [
        "Allison: Hello?",
        "Evan: Hello. [Can] I speak to Roberta, {please}?",
        "Allison: I'm sorry, {but} she's {in} a meeting. Can I give {her} a message?",
        "Evan: Yes. {This} is Evan Martin. Please ask her to {call} me. I'm {at} work.",
        "Allison: Does she {have} your number?",
        "Evan: Yes, she {does}."
      ] },

    { n: "7", t: "Imagine your friends invite you to do these things. Accept or refuse their invitations as indicated.", h: "Elige la respuesta que acepta o rechaza, según lo que se pide (la parte de escribir con tus propias excusas la convertí en opciones).",
      items: [
        "1. A: Do you want to play soccer with us this afternoon?\nB: (refuse) [I'd like to, but I have to work.]",
        { p: "2. A: Do you want to have dinner with me tomorrow?<br>B: (refuse)", o: ["I'd love to.", "I'm sorry, but I can't. I have to study.", "Yes, I want to."], a: 1 },
        { p: "3. A: Do you want to study at my house after class?<br>B: (accept)", o: ["I'd like to, but I have to work.", "I'm sorry, but I can't.", "I'd like to."], a: 2 },
        { p: "4. A: Do you want to go swimming with me on Saturday morning?<br>B: (accept)", o: ["I'd love to.", "I'm sorry, but I can't. I need to study.", "I'd like to, but I have to babysit."], a: 0 },
        { p: "5. A: Do you want to go hiking with me this weekend?<br>B: (refuse)", o: ["I'd love to.", "I'd like to, but I need to clean my house.", "I'd like to."], a: 1 }
      ] },

    { n: "8", t: "Complete each sentence with like to, love to, or want to.", h: "Escribe like to, love to o want to. Después de “Do you…?” usa want to; después de “Would you…?” usa like to o love to.",
      bank: ["like to", "love to", "want to"],
      items: [
        "1. A: Would you [like to] go to Bill's party on Thursday night?\nB: I'd {love to|like to} go, but I have to study. I have a test on Friday.",
        "2. A: Do you {want to} play tennis after work?\nB: I'd {like to|love to}, but I have to work late.",
        "3. A: Would you {like to|love to} have dinner at our house?\nB: Yes, I'd {love to|like to}!",
        "4. A: Do you {want to} visit the science museum tomorrow?\nB: I'd {like to|love to} go, but I already have plans.",
        "5. A: Would you {like to|love to} go to the movies tonight?\nB: Yes, but I don't {want to} see Horror House 3. I don't like scary movies!",
        "6. A: Do you {want to} leave a message?\nB: Yes, please tell Dr. O'Brien that I'd {like to|love to} speak with her about our meeting."
      ] }
  ]
};
