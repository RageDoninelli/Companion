/* Módulo 4 — Is this coat yours?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var CL4 = ["belt", "jacket", "high heels", "sneakers", "skirt", "cap", "T-shirt", "shorts", "blouse", "socks"];
var E4 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";

MODS[4] = {
  title: "Is this coat yours?",
  topic: "Ropa, pronombres posesivos, present continuous y and / but / so",
  ex: [
    { n: "1", t: "Label the clothes. Use the words in the box.", h: "Mira la pista y elige la palabra en inglés.",
      bank: CL4,
      items: [
        "1. " + E4("🧥") + "chaqueta → [jacket]",
        { p: "2. " + E4("👚") + "blusa", o: CL4, a: 8 },
        { p: "3. cinturón", o: CL4, a: 0 },
        { p: "4. falda", o: CL4, a: 4 },
        { p: "5. " + E4("👠") + "tacones", o: CL4, a: 2 },
        { p: "6. " + E4("🧢") + "gorra", o: CL4, a: 5 },
        { p: "7. " + E4("👕") + "camiseta", o: CL4, a: 6 },
        { p: "8. " + E4("🩳") + "pantalones cortos", o: CL4, a: 7 },
        { p: "9. " + E4("🧦") + "calcetines", o: CL4, a: 9 },
        { p: "10. " + E4("👟") + "zapatillas deportivas", o: CL4, a: 3 }
      ] },

    { n: "2", t: "What clothes don't belong?", h: "Escribe las 2 prendas que no pertenecen a cada grupo (en cualquier orden).",
      items: [
        "# For work: shirt, shorts, tie, belt, swimsuit, shoes, jacket",
        "Don't belong: [shorts] and [swimsuit]",
        "# For home: T-shirt, shorts, suit, dress, jeans, pajamas, coat",
        "Don't belong: {suit|coat} and {coat|suit}",
        "# For cold weather: boots, scarf, shorts, pants, sweater, gloves, T-shirt",
        "Don't belong: {shorts|T-shirt} and {T-shirt|shorts}",
        "# For warm weather: swimsuit, T-shirt, boots, sneakers, shorts, sweater, cap",
        "Don't belong: {boots|sweater} and {sweater|boots}"
      ] },

    { n: "4B", t: "Complete the conversations with the correct words in parentheses.", h: "Escribe la palabra correcta de las dos opciones.",
      items: [
        "# Conversation 1",
        "A: [Whose] (Whose / His) T-shirt is this? Is it Ayumi's?",
        "B: No, it's not {hers} (her / hers). It's {mine} (my / mine).",
        "# Conversation 2",
        "A: Are these {your} (your / yours) jeans?",
        "B: No, they aren't {my} (my / mine) jeans. Let's ask Mohammed. I think they're {his} (his / he's).",
        "# Conversation 3",
        "A: Are these Stephanie's and Jennifer's socks?",
        "B: No, they aren't {theirs} (their / theirs). They're {yours} (your / yours).",
        "A: I don't think so. These socks are white, and {mine} (my / mine) are blue."
      ] },

    { n: "7", t: "Complete the sentences.", h: "Usa is/are wearing o isn't/aren't wearing, según la escena.",
      items: [
        "# 1. " + E4("🏃") + "Jamie corre bajo la lluvia",
        "My name's Jamie. [I'm wearing] a T-shirt and shorts. {I'm wearing|I am wearing} sneakers, too. {It's|It is} raining, but {I'm not wearing|I am not wearing} a raincoat.",
        "# 2. " + E4("⛄") + "Maria, en invierno, sentada en la nieve",
        "It's winter, so Maria {isn't wearing|is not wearing|'s not wearing} high heels – she {'s wearing|is wearing} boots. She {'s wearing|is wearing} a scarf, but she {isn't wearing|is not wearing|'s not wearing} a hat.",
        "# 3. " + E4("☀️") + "Richard y Meg corren por la playa; hace sol y calor",
        "It's very sunny today, so Richard and Meg {are wearing|'re wearing} sunglasses. It's hot, so Richard {is wearing|'s wearing} shorts and Meg {is wearing|'s wearing} light pants. {They aren't wearing|They're not wearing|They are not wearing} sweaters."
      ] },

    { n: "8", t: "Complete these sentences with and, but, or so.", h: "and = y · but = pero · so = por eso / así que",
      bank: ["and", "but", "so"],
      items: [
        "1. He's wearing jeans and sneakers, [and] he's wearing a T-shirt.",
        "2. It's very cold outside, {but} I'm not wearing a coat.",
        "3. Her skirt is blue, {and} her blouse is blue, too.",
        "4. It's raining, {so} I need an umbrella.",
        "5. He's wearing an expensive suit, {but} he's wearing sneakers.",
        "6. It's summer and it's very sunny, {so} it's hot."
      ] }
  ]
};
