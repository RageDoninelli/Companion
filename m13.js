/* Módulo 13 — How do I get there?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var BOX13 = ["Excuse me. Can you help me?", "Is there a restroom around here?", "Next to the Chinese restaurant?", "Thanks a lot.", "Where on West Street?"];

MODS[13] = {
  title: "How do I get there?",
  topic: "Lugares de la ciudad, preposiciones de lugar y direcciones",
  ex: [
    { n: "1A", t: "Places. Complete these sentences with the correct places.", h: "Escribe el nombre del lugar en inglés.",
      items: [
        "1. I work at a [bookstore]. I love books, so it's a great job.",
        "2. I'm going to go to the {bank}. I need a new debit card.",
        "3. My car is almost out of gasoline. Is there a {gas station} near here?",
        "4. Are you going to the {post office}? I need some stamps.",
        "5. On Sundays, I buy food for my family at the {supermarket}.",
        "6. We're going to have an espresso at the {coffee shop} before class.",
        "7. Anita is going to get some medicine at the {drugstore|pharmacy}.",
        "8. My son is going to school next week. We're going to the {department store} downtown to buy him a backpack."
      ] },

    { n: "2", t: "Look at the map. Complete the sentences with the prepositions in the box.", h: "Usa la pista en español para elegir la preposición.",
      bank: ["across from", "behind", "between", "next to", "on", "on the corner of"],
      items: [
        "1. The department store is [on] Brown Street.",
        "2. The hospital is {behind|across from} the bank. (detrás de / enfrente de, al otro lado de West St.)",
        "3. The bookstore is {on the corner of} Fox Street and Second Avenue. (en la esquina de)",
        "4. The Chinese restaurant is on West Street, {between} the coffee shop and the supermarket. (entre)",
        "5. The shoe store is {next to} the drugstore. (al lado de)",
        "6. The Mexican restaurant is {across from} the park. (enfrente de, al otro lado de Fourth Ave.)"
      ] },

    { n: "4", t: "Complete the conversation. Use the sentences and questions in the box.", h: "Elige la frase de Tom.",
      items: [
        "Tom: [Excuse me. Can you help me?]",
        "Woman: Sure.",
        { p: "Tom:", o: BOX13, a: 1 },
        "Woman: Yes, there is. It's in the supermarket on West Street.",
        { p: "Tom:", o: BOX13, a: 4 },
        "Woman: It's on the corner of West Street and Third Avenue.",
        { p: "Tom:", o: BOX13, a: 2 },
        "Woman: Yes, that's right. It's right next to the Chinese restaurant.",
        { p: "Tom:", o: BOX13, a: 3 },
        "Woman: You're welcome."
      ] },

    { n: "5", t: "Complete the sentences with the opposites.", h: "Escribe la palabra opuesta.",
      items: [
        "1. The post office isn't on the right. It's on the [left].",
        "2. The Empire State Building is far from here, but Central Park is {near|close to} here. You can walk there.",
        "3. Don't walk down Columbus Avenue. Walk {up} Columbus Avenue.",
        "4. The New London Hotel isn't in front of the bank. It's {behind} it.",
        "5. Don't turn left on Sixteenth Street. Turn {right}."
      ] }
  ]
};
