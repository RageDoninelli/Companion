/* Módulo 9 — I always eat breakfast.
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E9 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var FR9 = ["blueberries", "oranges", "apples", "bananas"];
var VG9 = ["lettuce", "broccoli", "potatoes", "carrots"];
var GR9 = ["rice", "cereal", "bread", "crackers"];
var DA9 = ["milk", "cheese"];
var FO9 = ["butter", "olive oil"];
var MP9 = ["chicken", "beans", "nuts", "fish"];

MODS[9] = {
  title: "I always eat breakfast.",
  topic: "Comida, some / any, a / an y adverbios de frecuencia",
  ex: [
    { n: "1", t: "Write the names of the foods.", h: "Mira el emoji y la pista, y elige el nombre en inglés.",
      items: [
        "# Fruit",
        "1. " + E9("🫐") + "arándanos → [blueberries]",
        { p: "2. " + E9("🍊") + "naranjas", o: FR9, a: 1 },
        { p: "3. " + E9("🍎") + "manzanas", o: FR9, a: 2 },
        { p: "4. " + E9("🍌") + "plátanos", o: FR9, a: 3 },
        "# Vegetables",
        { p: "5. " + E9("🥬") + "lechuga", o: VG9, a: 0 },
        { p: "6. " + E9("🥦") + "brócoli", o: VG9, a: 1 },
        { p: "7. " + E9("🥔") + "papas", o: VG9, a: 2 },
        { p: "8. " + E9("🥕") + "zanahorias", o: VG9, a: 3 },
        "# Grains",
        { p: "9. " + E9("🍚") + "arroz", o: GR9, a: 0 },
        { p: "10. " + E9("🥣") + "cereal", o: GR9, a: 1 },
        { p: "11. " + E9("🍞") + "pan", o: GR9, a: 2 },
        { p: "12. galletas saladas", o: GR9, a: 3 },
        "# Dairy",
        { p: "13. " + E9("🥛") + "leche", o: DA9, a: 0 },
        { p: "14. " + E9("🧀") + "queso", o: DA9, a: 1 },
        "# Fats and oils",
        { p: "15. " + E9("🧈") + "mantequilla", o: FO9, a: 0 },
        { p: "16. " + E9("🫒") + "aceite de oliva", o: FO9, a: 1 },
        "# Meat and other proteins",
        { p: "17. " + E9("🍗") + "pollo", o: MP9, a: 0 },
        { p: "18. " + E9("🫘") + "frijoles", o: MP9, a: 1 },
        { p: "19. " + E9("🥜") + "nueces / frutos secos", o: MP9, a: 2 },
        { p: "20. " + E9("🐟") + "pescado", o: MP9, a: 3 }
      ] },

    { n: "2", t: "Complete the sentences with the articles a or an. If you don't need an article, write Ø.", h: "Escribe a, an, o x si no necesitas artículo (Ø).",
      items: [
        "1. This is [a] tomato.",
        "2. This is {x|Ø|0|-|a} yogurt.",
        "3. This is {a} potato.",
        "4. This is {an} egg.",
        "5. This is {an} onion.",
        "6. This is {x|Ø|0|-} rice."
      ] },

    { n: "4", t: "Complete the conversations with some or any.", h: "Escribe some o any.",
      bank: ["some", "any"],
      items: [
        "# Conversation 1",
        "A: What do you eat for lunch?",
        "B: Well, I usually have [some] noodles in broth.",
        "A: That sounds good. Do you have {any} vegetables?",
        "B: No, I don't eat {any} vegetables for lunch.",
        "A: Really? Do you have anything else?",
        "B: Well, I usually have {some} fruit – grapes or strawberries, but I don't eat {any} dessert.",
        "A: Do you drink anything with your lunch?",
        "B: I always have {some} water and coffee. I don't put {any} milk in my coffee, but I like {some} sugar in it.",
        "# Conversation 2",
        "A: What do you want for dinner?",
        "B: Let's make {some} chicken soup.",
        "A: Good idea. Do we have {any} chicken?",
        "B: Yes, we have {some} chicken, but we don't have {any} vegetables. Let's get {some} celery and onions.",
        "A: OK. Do we need {any} pasta for the soup?",
        "B: Yes, let's get {some} pasta. Oh, and {some} garlic, too.",
        "A: Great. We have {some} salt and pepper, so we don't need {any} spices.",
        "B: Yeah, but let's get {some} bread. And {some} crackers, too."
      ] },

    { n: "6A", t: "Food habits. Put the adverbs in the correct places.", h: "Elige la oración con el adverbio en el lugar correcto.",
      items: [
        "1. In Japan, people have fish for breakfast. (sometimes)\n[In Japan, people sometimes have fish for breakfast.]",
        { p: "2. In Canada, people have salad for breakfast. (hardly ever)", o: ["In Canada, people have hardly ever salad for breakfast.", "In Canada, people hardly ever have salad for breakfast.", "In Canada, people have salad for breakfast hardly ever."], a: 1 },
        { p: "3. Some people in South Korea eat pickled vegetables for breakfast. (always)", o: ["Some people in South Korea eat always pickled vegetables for breakfast.", "Some people in South Korea eat pickled vegetables for breakfast always.", "Some people in South Korea always eat pickled vegetables for breakfast."], a: 2 },
        { p: "4. Americans put cream in their coffee. (often)", o: ["Americans often put cream in their coffee.", "Americans put often cream in their coffee.", "Americans put cream in their coffee often."], a: 0 },
        { p: "5. Brazilians make drinks with fruit. (often)", o: ["Brazilians make often drinks with fruit.", "Brazilians often make drinks with fruit.", "Brazilians make drinks often with fruit."], a: 1 },
        { p: "6. In England, people put milk in their tea. (usually)", o: ["In England, people put usually milk in their tea.", "In England, people put milk usually in their tea.", "In England, people usually put milk in their tea."], a: 2 },
        { p: "7. Some people in Mexico eat pasta. (never)", o: ["Some people in Mexico never eat pasta.", "Some people in Mexico eat never pasta.", "Some people in Mexico eat pasta never."], a: 0 },
        { p: "8. In China, people put sugar in their tea. (hardly ever)", o: ["In China, people put hardly ever sugar in their tea.", "In China, people hardly ever put sugar in their tea.", "In China, people put sugar hardly ever in their tea."], a: 1 }
      ] }
  ]
};
