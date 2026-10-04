/* Módulo 7 — Does it have a view?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E7 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var ROOMS7 = ["bedroom", "bathroom", "kitchen", "living room", "dining room", "garage", "yard"];
var BOX7 = ["No, I don't. I live with my sisters.", "No, I live in an apartment.", "Yes, it has three bedrooms.", "Yes, it has a great view of the city."];

MODS[7] = {
  title: "Does it have a view?",
  topic: "La casa, there is / there are y preguntas con do / does",
  ex: [
    { n: "1", t: "Label the parts of the house.", h: "Elige el nombre en inglés de cada parte de la casa.",
      bank: ROOMS7,
      items: [
        "1. " + E7("🛏️") + "dormitorio → [bedroom]",
        { p: "2. " + E7("🛁") + "baño", o: ROOMS7, a: 1 },
        { p: "3. " + E7("🍳") + "cocina", o: ROOMS7, a: 2 },
        { p: "4. " + E7("🛋️") + "sala de estar", o: ROOMS7, a: 3 },
        { p: "5. " + E7("🍽️") + "comedor", o: ROOMS7, a: 4 },
        { p: "6. " + E7("🚗") + "garaje", o: ROOMS7, a: 5 },
        { p: "7. " + E7("🌳") + "jardín / patio", o: ROOMS7, a: 6 }
      ] },

    { n: "2", t: "Complete the conversation. Use the sentences in the box.", h: "Elige la respuesta de Fernanda.",
      items: [
        "Ji-hye: Do you live in a house, Fernanda?",
        "Fernanda: [No, I live in an apartment.]",
        "Ji-hye: Well, is it very big?",
        { p: "Fernanda:", o: BOX7, a: 2 },
        "Ji-hye: Does it have a view?",
        { p: "Fernanda:", o: BOX7, a: 3 },
        "Ji-hye: Oh, that's great! And do you live alone?",
        { p: "Fernanda:", o: BOX7, a: 0 }
      ] },

    { n: "3", t: "Complete the conversation with the correct words in parentheses.", h: "Escribe la palabra correcta de las dos opciones.",
      items: [
        "Al: [Do] you {live} near here, Brandon? (Do / Does) (live / lives)",
        "Brandon: Yes, I {do}. (do / does) My wife and I {live} on Main Street. (live / lives)",
        "Al: Oh, do you {live} in an apartment? (live / lives)",
        "Brandon: No, we {don't}. (don't / doesn't) We {have} a house. (have / has)",
        "Al: Oh, great! {Do} you {have} children? (Do / Does) (have / has)",
        "Brandon: No, we {don't}. (don't / doesn't) But my mother {lives} with us. (live / lives)",
        "Al: Really? Does she do a lot of work at home?",
        "Brandon: Yes, she {does}. (do / does) In fact, she {cooks} dinner every night! (cook / cooks)",
        "Al: You're lucky! I {live} alone, (live / lives) and I {cook} my own dinner. (cook / cooks)"
      ] },

    { n: "6", t: "Complete the description with 's, are, or aren't.", h: "Escribe 's, are o aren't.",
      bank: ["'s", "are", "aren't"],
      items: [
        "In Martin's apartment, there[’s] a big living room. There {are} two bedrooms and two bathrooms. There {'s|is} no elevator, but there {are} stairs.",
        "He has a lot of books, so there {are} bookcases in the living room and bedrooms. There {aren't} any chairs in the kitchen, but there {'s|is} a big table with chairs in the dining room.",
        "There {'s|is} no coffee maker in the kitchen, but there {'s|is} a microwave oven. There {are} two televisions in Martin's apartment – there {'s|is} one television in the living room, and there {'s|is} one television in the bedroom."
      ] },

    { n: "8A", t: "What's wrong with this house? Write sentences about the house.", h: "Todo está en el lugar equivocado. Elige la oración correcta según la descripción.",
      items: [
        "# La casa: cocina → microondas, fregadero y una cama, sin estufa · comedor → una mesa sin sillas · sala → sofá y una estufa · baño → dos sillones · cuarto del fondo → escritorio, libreros, refrigerador y ropa en el piso, sin cama",
        "1. (stove / kitchen) [There is no stove in the kitchen.]",
        { p: "2. (chairs / dining room)", o: ["There are chairs in the dining room.", "There aren't any chairs in the dining room.", "There is a chair in the dining room."], a: 1 },
        { p: "3. (stove / living room)", o: ["There's a stove in the living room.", "There isn't a stove in the living room.", "There are stoves in the living room."], a: 0 },
        { p: "4. (refrigerator / bedroom)", o: ["There isn't a refrigerator in the bedroom.", "There's a refrigerator in the bedroom.", "There are no refrigerator in the bedroom."], a: 1 },
        { p: "5. (bed / bedroom)", o: ["There's a bed in the bedroom.", "There isn't a bed in the bedroom.", "There are two beds in the bedroom."], a: 1 },
        { p: "6. (armchairs / bathroom)", o: ["There aren't any armchairs in the bathroom.", "There are armchairs in the bathroom.", "There's an armchair in the bathroom."], a: 1 },
        { p: "7. (bed / kitchen)", o: ["There isn't a bed in the kitchen.", "There's a bed in the kitchen.", "There are beds in the kitchen."], a: 1 },
        { p: "8. (bookcases / living room)", o: ["There are bookcases in the living room.", "There's a bookcase in the living room.", "There aren't any bookcases in the living room."], a: 2 }
      ] },

    { n: "9", t: "Choose the correct responses.", h: "Elige la respuesta correcta.",
      items: [
        "1. A: My apartment has a view of the park.\nB: [You're lucky.]",
        { p: "2. A: Do you need living room furniture?<br>B:", o: ["Yes, I do. I need a sofa and a coffee table.", "No, I don't. I need a sofa and a coffee table."], a: 0 },
        { p: "3. A: I really need a new desk.<br>B:", o: ["So let's go shopping this weekend.", "That's great!"], a: 0 },
        { p: "4. A: Do you have chairs in your kitchen?<br>B:", o: ["Yes, I do. I need six chairs.", "Yes, I do. I have six chairs."], a: 1 }
      ] }
  ]
};
