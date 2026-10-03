/* Módulo 2 — Where are my keys?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var SND = ["/z/", "/s/", "/ɪz/"];
var BOX5 = ["Yes, I am.", "Yes, it is.", "Yes, they are.", "It's", "No, I'm not.", "No, it's not.", "No, they're not.", "They're"];
var pic = (n, e, t) => "# " + n + ". <span style=\"font-size:26px;vertical-align:middle\">" + e + "</span> " + t;

MODS[2] = {
  title: "Where are my keys?",
  topic: "Objetos, this/these, plurales y preguntas con where",
  ex: [
    { n: "2", t: "Complete the chart with the words in the box.", h: "Elige el sonido final del plural: /z/, /s/ o /ɪz/.",
      items: [
        "doors = [/z/]", "books = [/s/]", "quizzes = [/ɪz/]",
        { p: "purses", o: SND, a: 2 },
        { p: "umbrellas", o: SND, a: 0 },
        { p: "desks", o: SND, a: 1 },
        { p: "hairbrushes", o: SND, a: 2 },
        { p: "laptops", o: SND, a: 1 },
        { p: "keys", o: SND, a: 0 },
        { p: "energy bars", o: SND, a: 0 },
        { p: "tablets", o: SND, a: 1 },
        { p: "boxes", o: SND, a: 2 }
      ] },

    { n: "3", t: "Complete the questions with this or these. Then answer the questions.", h: "Mira el emoji y la pista. Escribe this o these y responde.",
      bank: ["this", "these"],
      items: [
        pic(1, "📱", "celular"),
        "A: What's [this]?\nB: [It's a cell phone.]",
        pic(2, "💾", "memoria USB"),
        "A: What's {this}?\nB: {It's a flash drive.|It is a flash drive.|It's a USB flash drive.|It's a USB drive.|It's a USB.|It's a memory stick.|It's a pen drive.}",
        pic(3, "✏️✏️✏️✏️✏️", "lápices"),
        "A: What are {these}?\nB: {They're pencils.|They are pencils.}",
        pic(4, "📎📎📎", "clips de papel"),
        "A: What are {these}?\nB: {They're paper clips.|They are paper clips.|They're paperclips.}",
        pic(5, "🕶️", "lentes de sol"),
        "A: What are {these}?\nB: {They're sunglasses.|They are sunglasses.}",
        pic(6, "👜", "bolso"),
        "A: What's {this}?\nB: {It's a purse.|It is a purse.|It's a handbag.|It's a bag.}"
      ] },

    { n: "4", t: "Complete the conversation. Use the words in the box.", h: "Usa las palabras del recuadro.",
      bank: ["a", "'s", "this", "they", "you", "an", "it's", "these", "they're", "you're"],
      items: [
        "Clara: Wow! What's this?",
        "Kevin: [It's] a purse.",
        "Clara: Oh, cool. Thank {you}, Kevin.",
        "Kevin: {You're} welcome.",
        "Eva: Now open {this} box.",
        "Clara: OK. What{'s} this?",
        "Eva: It's {a} tablet case.",
        "Clara: Oh, thank you, Eva. And what are {these}?",
        "Eva: {They}'re sunglasses.",
        "Clara: Thanks! {They're} great!",
        "Laura: Open this, too!",
        "Clara: Oh, it's {an} umbrella. Thanks, Laura!"
      ] },

    { n: "5", t: "Complete the conversations. Use the answers in the box.", h: "Elige la respuesta correcta del recuadro.",
      items: [
        "1. A: Are these your books?\nB: [No, they're not.] My books are in my bag.",
        { p: "2. A: Excuse me. Is this the math class?<br>B: ____ And I'm your teacher.", o: BOX5, a: 1 },
        { p: "3. A: Is my purse on the chair?<br>B: ____ It's under the table.", o: BOX5, a: 5 },
        { p: "4. A: Where's my laptop?<br>B: ____ in your backpack.", o: BOX5, a: 3 },
        { p: "5. A: Where are your glasses?<br>B: ____ in my purse.", o: BOX5, a: 7 },
        { p: "6. A: Hi. Are you in my math class?<br>B: ____ And I'm in your English class, too!", o: BOX5, a: 0 },
        { p: "7. A: Are these your keys?<br>B: ____ Thank you.", o: BOX5, a: 2 },
        { p: "8. A: Excuse me. Are you Min-soo Cho?<br>B: ____ My name is Jin-ho Han. Min-soo isn't in this class.", o: BOX5, a: 4 }
      ] },

    { n: "6", t: "Complete the conversations.", h: "Escribe la palabra que falta.",
      items: [
        "# Conversation 1",
        "A: Oh no! Where [is] my tablet?",
        "B: Is {it} in your backpack?",
        "A: No, it's {not}.",
        "B: Hmm. {Is} it under your math book?",
        "A: Yes, it is! Thank you!",
        "# Conversation 2",
        "A: {Is} this my cell phone?",
        "B: No, {it's|it is} not. It's my cell phone.",
        "A: Sorry. {Where} is my cell phone?",
        "B: Is {it} in your purse?",
        "A: Oh, yes, it {is}. Thanks.",
        "# Conversation 3",
        "A: Where {are} my keys?",
        "B: Are {they} in your pocket?",
        "A: No, they're {not}.",
        "B: {Are} they on the table?",
        "A: Hmm. Yes, {they} are. Thanks.",
        "# Conversation 4",
        "A: {Is} my notebook in your backpack?",
        "B: No, {it's|it is} not. Sorry.",
        "A: Hmm. {Where} is my notebook?",
        "B: {Is} it behind your laptop?",
        "A: Let me see. Yes, it {is}. Thank you!"
      ] }
  ]
};
