/* Módulo 3 — Where are you from?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var P3 = (n, e, t) => "# " + n + ". <span style=\"font-size:26px;vertical-align:middle\">" + e + "</span> " + t;

MODS[3] = {
  title: "Where are you from?",
  topic: "Países, nacionalidades, idiomas y el verbo to be",
  ex: [
    { n: "1A", t: "Complete the chart with the languages and nationalities.", h: "Escribe la nacionalidad y el idioma de cada país.",
      bank: ["Arabic", "Argentine", "Brazilian", "Canadian", "Colombian", "Egyptian", "English", "French", "Japanese", "Korean", "Portuguese", "South Korean", "Spanish", "Turkish"],
      items: [
        "# Country — Nationality — Language",
        "Brazil — [Brazilian] — [Portuguese]",
        "Colombia — {Colombian} — {Spanish}",
        "South Korea — {South Korean|Korean} — {Korean}",
        "Canada — {Canadian} — {English|French}",
        "Turkey — {Turkish} — {Turkish}",
        "Argentina — {Argentine|Argentinian|Argentinean} — {Spanish}",
        "Japan — {Japanese} — {Japanese}",
        "Egypt — {Egyptian} — {Arabic}"
      ] },

    { n: "1B", t: "Where are these cities? Complete the sentences with the countries in part A.", h: "Escribe is/are y el país.",
      items: [
        "1. Istanbul and Ankara [are in Turkey.]",
        "2. Bogotá {is} in {Colombia}.",
        "3. Tokyo {is} in {Japan}.",
        "4. São Paulo and Rio de Janeiro {are} in {Brazil}.",
        "5. Seoul and Daejeon {are} in {South Korea|Korea}.",
        "6. Buenos Aires {is} in {Argentina}.",
        "7. Vancouver and Ottawa {are} in {Canada}.",
        "8. Cairo {is} in {Egypt}."
      ] },

    { n: "2", t: "Complete the conversations with am, 'm, are, 're, is, or 's.", h: "Puedes usar la forma corta ('m, 're, 's) o la larga (am, are, is) cuando tenga sentido.",
      items: [
        "# Conversation 1",
        "A: [Are] you and your family from New Zealand?",
        "B: No, we {'re|are} not. We {'re|are} from Australia.",
        "A: Oh, so you {'re|are} Australian.",
        "B: Yes, I {am}. I{'m|am} from Melbourne.",
        "# Conversation 2",
        "A: {Is} Brazil in Central America?",
        "B: No, it {'s|is} not. It {'s|is} in South America.",
        "A: Oh. {Are} we from Brazil, Dad?",
        "B: Yes, we {are}. We{'re|are} from Brazil originally, but we{'re|are} here in the U.S. now.",
        "# Conversation 3",
        "A: {Is} this your wallet?",
        "B: Yes, it {is}. Thanks.",
        "A: And {are} these your sunglasses?",
        "B: Yes, they {are}.",
        "A: Well, they{'re|are} very nice sunglasses.",
        "B: Thank you!",
        "# Conversation 4",
        "A: {Is} your English teacher from the U.S.?",
        "B: No, she {'s|is} not. She{'s|is} from Canada. Montreal, Canada.",
        "A: {Is} English her first language?",
        "B: No, it {'s|is} not. Her first language {is|'s} French."
      ] },

    { n: "3", t: "Answer the questions.", h: "Usa la pista de cada imagen para responder.",
      items: [
        P3(1, "🇧🇷", "bandera de Brasil"),
        "A: Are they from Colombia?\nB: [No, they're not. They're from Brazil.]",
        P3(2, "👩", "mujer con sari (ropa tradicional de la India)"),
        "A: Is she from India?\nB: Yes, {she is}.",
        P3(3, "🛂", "mujer con pasaporte y bandera de EE. UU."),
        "A: Is she from Canada?\nB: No, {she's not|she isn't|she is not}. {She's|She is} from {the U.S.|the US|the USA|the United States|America}.",
        P3(4, "🇯🇵", "cartel “Welcome to Japan”"),
        "A: Are they in Mexico?\nB: No, {they're not|they aren't|they are not}. {They're|They are} in {Japan}.",
        P3(5, "🗽", "niño con la Estatua de la Libertad (Nueva York)"),
        "A: Is he in Bangkok?\nB: No, {he's not|he isn't|he is not}. {He's|He is} in {New York|New York City|the U.S.|the US|the USA|the United States}.",
        P3(6, "🐪", "camellos y pirámides"),
        "A: Are they in Egypt?\nB: Yes, {they are}."
      ] },

    { n: "4", t: "Spell the numbers.", h: "Escribe cada número en letras.", cols: true,
      items: [
        "14 = [fourteen]", "102 = {one hundred two|one hundred and two}",
        "40 = {forty}", "11 = {eleven}",
        "60 = {sixty}", "30 = {thirty}",
        "13 = {thirteen}", "18 = {eighteen}",
        "27 = {twenty-seven|twenty seven}", "80 = {eighty}"
      ] },

    { n: "5", t: "Complete the conversations with the correct responses.", h: "Elige la respuesta correcta.",
      items: [
        "1. A: Where are they from?\nB: [She's from the U.K., and he's from the U.S.]",
        { p: "2. A: Is your first language English?<br>B:", o: ["No, it's Japan.", "No, it's Japanese."], a: 1 },
        { p: "3. A: What are they like?<br>B:", o: ["They're very serious.", "They're in Hong Kong."], a: 0 },
        { p: "4. A: Who's that?<br>B:", o: ["He's the new math teacher.", "It's my new tablet."], a: 0 },
        { p: "5. A: Where are Rahul and his family?<br>B:", o: ["They're in the U.S. now.", "They're from Mumbai."], a: 0 },
        { p: "6. A: How old is he now?<br>B:", o: ["It's twenty-eight.", "He's twenty-eight."], a: 1 },
        { p: "7. A: What's Marrakech like?<br>B:", o: ["It's in Morocco.", "It's very interesting."], a: 1 }
      ] },

    { n: "7", t: "Complete the conversations. Use the words in the boxes.", h: "Usa las palabras de cada recuadro.",
      items: [
        "# Conversation 1 — her, not, what's, is, she's, where",
        "A: Annette, [what's] your best friend like?",
        "B: {She's} very nice. {Her} name is Valentina. I call her Tina.",
        "A: {Where} is she from? {Is} she from Spain?",
        "B: No, she's {not}. She's from Italy.",
        "# Conversation 2 — are, my, we're, her, we, what's",
        "A: Toshi, are you and Naomi from Japan?",
        "B: Yes, {we} are. {We're} from Osaka.",
        "A: {What's} your first language?",
        "B: {My} first language is Japanese, but Naomi's first language is English. {Her} parents {are} from New York originally."
      ] }
  ]
};
