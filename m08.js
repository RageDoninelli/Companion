/* Módulo 8 — Where do you work?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E8 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var JOBS8 = ["lawyer", "photographer", "bellhop", "police officer", "pilot", "nurse", "server", "salesperson", "cashier", "front desk clerk"];
var ADJ8 = ["not stressful", "not difficult", "not dangerous", "not boring"];

MODS[8] = {
  title: "Where do you work?",
  topic: "Trabajos, do / does y adjetivos de opinión",
  ex: [
    { n: "1", t: "Match these jobs with the correct pictures.", h: "Mira el emoji y la pista, y elige el trabajo en inglés.",
      bank: JOBS8,
      items: [
        "1. " + E8("⚖️") + "abogado/a → [lawyer]",
        { p: "2. " + E8("📷") + "fotógrafo/a", o: JOBS8, a: 1 },
        { p: "3. " + E8("🧳") + "botones de hotel (lleva el equipaje)", o: JOBS8, a: 2 },
        { p: "4. " + E8("👮") + "policía", o: JOBS8, a: 3 },
        { p: "5. " + E8("✈️") + "piloto", o: JOBS8, a: 4 },
        { p: "6. " + E8("🩺") + "enfermero/a", o: JOBS8, a: 5 },
        { p: "7. " + E8("🍽️") + "mesero/a", o: JOBS8, a: 6 },
        { p: "8. " + E8("🛍️") + "vendedor/a en una tienda", o: JOBS8, a: 7 },
        { p: "9. " + E8("💵") + "cajero/a", o: JOBS8, a: 8 },
        { p: "10. " + E8("🛎️") + "recepcionista de hotel", o: JOBS8, a: 9 }
      ] },

    { n: "3", t: "Complete the questions in these conversations.", h: "Escribe la pregunta completa (do / does).",
      items: [
        "# Conversation 1",
        "A: Where [does your sister work]?",
        "B: My sister? She works in a restaurant.",
        "A: What [does she do]?",
        "B: She works in the kitchen. She's a chef.",
        "# Conversation 2",
        "A: What {do Victoria and Jon do|do they do}?",
        "B: Victoria and Jon are nurses. And they work together, too.",
        "A: Where {do they work|do Victoria and Jon work}?",
        "B: At Springfield Hospital.",
        "# Conversation 3",
        "A: Where {does your daughter work|does she work}?",
        "B: My daughter works in an office.",
        "A: What {does she do}?",
        "B: She's an accountant.",
        "# Conversation 4",
        "A: What {do you and Don do|do you do}?",
        "B: Don and I? We're software engineers.",
        "A: How {do you like it|do you like your job|do you like your work}?",
        "B: We like it a lot!"
      ] },

    { n: "4", t: "Complete the conversations.", h: "Escribe la palabra o palabras que faltan.",
      items: [
        "# Conversation 1",
        "A: [Do] you [have] a job?",
        "B: Yes, I {do}.",
        "A: Oh, what {do} you {do}?",
        "B: I {'m|am} a graphic designer.",
        "A: Where {do} you {work}?",
        "B: I {work} at home.",
        "A: Oh, wow! How {do} you {like} your job?",
        "B: I really {like} it. It's a great job!",
        "A: What time {do} you start work?",
        "B: I {start|begin} work at 8:00 A.M., and I {finish|stop} at 3:00 P.M.",
        "# Conversation 2",
        "A: My brother {has} a new job.",
        "B: Really? Where {does} he {work}?",
        "A: He {works} at the Town Center Mall.",
        "B: What {does} he {do} there?",
        "A: He {'s|is} a security guard.",
        "B: How {does} he {like} his job?",
        "A: Oh, I guess he {likes} it.",
        "B: What time {does} he {start|begin} work?",
        "A: He {starts|begins} work at 10:00 A.M., and he {finishes|stops} at 6:00 P.M."
      ] },

    { n: "5A", t: "Exciting or boring? Match the adjectives.", h: "Elige el significado de cada adjetivo.",
      bank: ADJ8,
      items: [
        "1. exciting = [not boring]",
        { p: "2. easy", o: ADJ8, a: 1 },
        { p: "3. relaxing", o: ADJ8, a: 0 },
        { p: "4. safe", o: ADJ8, a: 2 }
      ] },

    { n: "5B", t: "Write each sentence two different ways.", h: "Elige la oración que dice lo mismo.",
      items: [
        "1. An actor's job is exciting.\n= [An actor has an exciting job.] / [An actor doesn't have a boring job.]",
        { p: "2. A security guard has a boring job.", o: ["A security guard's job is boring.", "A security guard's job is exciting.", "A security guard doesn't have a boring job."], a: 0 },
        { p: "3. Paul's job is dangerous.", o: ["Paul doesn't have a safe job.", "Paul has a safe job.", "Paul doesn't have a dangerous job."], a: 0 },
        { p: "4. A front desk clerk's job is stressful.", o: ["A front desk clerk has a relaxing job.", "A front desk clerk has a stressful job.", "A front desk clerk doesn't have a stressful job."], a: 1 },
        { p: "5. Amanda has a small apartment.", o: ["Amanda has a big apartment.", "Amanda doesn't have a big apartment.", "Amanda doesn't have a small apartment."], a: 1 },
        { p: "6. Cristina's house is big.", o: ["Cristina doesn't have a big house.", "Cristina has a big house.", "Cristina's house is small."], a: 1 },
        { p: "7. Brenda has a talkative brother.", o: ["Brenda's brother is talkative.", "Brenda's brother isn't talkative.", "Brenda doesn't have a brother."], a: 0 },
        { p: "8. My job is easy.", o: ["I don't have an easy job.", "I have an easy job.", "I have a difficult job."], a: 1 }
      ] }
  ]
};
