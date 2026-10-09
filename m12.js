/* Módulo 12 — How do you feel?
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E12 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var BODY12 = ["arm", "ear", "elbow", "eye", "fingers", "foot", "hair", "hand", "leg", "mouth", "neck", "nose", "shoulder", "stomach", "teeth", "toes"];
var BOX3 = ["Great. See you later.", "How do you feel today?", "I'm fine, thanks. How about you?", "I'm glad to hear that.", "OK. Get some rest.", "So, are you going to go to the meeting this afternoon?", "That's too bad. Are you going to see a doctor?", "What's wrong?"];
var BOX5 = ["My head feels terrible.", "I have a stomachache.", "What's wrong?", "I'm very tired.", "I'm not happy.", "I'm sorry to hear that.", "I'm glad to hear that.", "I have a sore throat."];

MODS[12] = {
  title: "How do you feel?",
  topic: "El cuerpo, enfermedades, medicinas y consejos",
  ex: [
    { n: "1", t: "Label the parts of the body. Use the words in the box.", h: "Mira el emoji y la pista, y elige la parte del cuerpo en inglés.",
      bank: BODY12,
      items: [
        "1. " + E12("👁️") + "ojo → [eye]",
        { p: "2. " + E12("👂") + "oreja", o: BODY12, a: 1 },
        { p: "3. " + E12("👃") + "nariz", o: BODY12, a: 11 },
        { p: "4. " + E12("👄") + "boca", o: BODY12, a: 9 },
        { p: "5. " + E12("🦷") + "dientes", o: BODY12, a: 14 },
        { p: "6. " + E12("💇") + "cabello", o: BODY12, a: 6 },
        { p: "7. cuello", o: BODY12, a: 10 },
        { p: "8. hombro", o: BODY12, a: 12 },
        { p: "9. " + E12("💪") + "brazo", o: BODY12, a: 0 },
        { p: "10. codo", o: BODY12, a: 2 },
        { p: "11. " + E12("✋") + "mano", o: BODY12, a: 7 },
        { p: "12. dedos de la mano", o: BODY12, a: 4 },
        { p: "13. estómago", o: BODY12, a: 13 },
        { p: "14. " + E12("🦵") + "pierna", o: BODY12, a: 8 },
        { p: "15. " + E12("🦶") + "pie", o: BODY12, a: 5 },
        { p: "16. dedos del pie", o: BODY12, a: 15 }
      ] },

    { n: "2", t: "What's wrong with these people? Write sentences.", h: "Usa la pista en español y completa la oración.",
      items: [
        "# 1. " + E12("🦷") + "un hombre se agarra la mejilla",
        "He has a [toothache].",
        "# 2. " + E12("🤒") + "una mujer se toca la garganta",
        "She has a {sore throat}.",
        "# 3. " + E12("👂") + "un hombre se tapa la oreja",
        "He has an {earache|ear ache}.",
        "# 4. " + E12("🤢") + "un hombre se agarra el estómago",
        "He has a {stomachache|stomach ache}.",
        "# 5. " + E12("🤕") + "una persona se agarra la cabeza",
        "{He has|She has} a {headache|head ache}.",
        "# 6. " + E12("😖") + "una mujer se agarra la espalda baja",
        "She has a {backache|back ache}."
      ] },

    { n: "3", t: "Complete the conversations. Use the questions and sentences in the box.", h: "Elige la frase de Camila.",
      items: [
        "# Tuesday morning",
        "Jake: Hi, Camila. How are you?",
        "Camila: [I'm fine, thanks. How about you?]",
        "Jake: Not so good. Actually, I feel really awful.",
        { p: "Camila:", o: BOX3, a: 7 },
        "Jake: I think I have the flu.",
        { p: "Camila:", o: BOX3, a: 6 },
        "Jake: No, I'm going to go home now.",
        { p: "Camila:", o: BOX3, a: 4 },
        "Jake: OK. Thanks.",
        "# Thursday morning",
        { p: "Camila:", o: BOX3, a: 1 },
        "Jake: I feel much better.",
        { p: "Camila:", o: BOX3, a: 3 },
        "Jake: Thanks.",
        { p: "Camila:", o: BOX3, a: 5 },
        "Jake: Yes, I am.",
        { p: "Camila:", o: BOX3, a: 0 }
      ] },

    { n: "4", t: "Complete the sentences with the correct medications.", h: "Escribe la medicina correcta del recuadro.",
      bank: ["nasal spray", "cough syrup", "eye drops", "aspirin", "antacid", "cold pills"],
      items: [
        "1. His nose is very congested. He needs some [nasal spray].",
        "2. I have a horrible cold, so I'm going to buy some {cold pills}.",
        "3. Your eyes look red and tired. Get some {eye drops}.",
        "4. Alan has a stomachache, so he's going to get some {antacid|antacids}.",
        "5. I have a terrible headache. I need some {aspirin}.",
        "6. Mandy's cough sounds awful. I'm going to give her some {cough syrup}."
      ] },

    { n: "5", t: "Write each sentence a different way. Use the sentences in the box.", h: "Elige la oración del recuadro que dice lo mismo.",
      bank: BOX5,
      items: [
        "1. I feel sad.\n= [I'm not happy.]",
        { p: "2. What's the matter?", o: BOX5, a: 2 },
        { p: "3. I'm exhausted.", o: BOX5, a: 3 },
        { p: "4. That's too bad.", o: BOX5, a: 5 },
        { p: "5. That's good.", o: BOX5, a: 6 },
        { p: "6. I have a headache.", o: BOX5, a: 0 },
        { p: "7. My stomach hurts.", o: BOX5, a: 1 },
        { p: "8. My throat is sore.", o: BOX5, a: 7 }
      ] },

    { n: "6", t: "Give these people advice.", h: "Lee la situación y elige el consejo correcto.",
      items: [
        "# 1. " + E12("⛈️") + "una tormenta con rayos; una persona lee en casa",
        "[Don't go outside.]",
        { p: "2. " + E12("🤧") + "una mujer enferma, tosiendo, en una cafetería", o: ["Go home early.", "Don't go home early.", "Work too hard."], a: 0 },
        { p: "3. " + E12("🏃") + "unas atletas después de correr, con vasos en una mesa", o: ["Go outside.", "Don't drink any water.", "Drink some water."], a: 2 },
        { p: "4. " + E12("🧊") + "una persona frente a un refrigerador vacío", o: ["Don't go to the grocery store.", "Go to the grocery store.", "Have a hot drink."], a: 1 },
        { p: "5. " + E12("📚") + "una estudiante estudia a las 11:00 p.m.; mañana tiene clase a las 7:30 a.m.", o: ["Stay up late.", "Don't go home early.", "Don't stay up late."], a: 2 },
        { p: "6. " + E12("❄️") + "un hombre llega del frío y le ofrecen una taza caliente", o: ["Don't have a hot drink.", "Have a hot drink.", "Go outside."], a: 1 },
        { p: "7. " + E12("📦") + "una mujer con dolor de espalda, rodeada de cajas", o: ["Lift heavy things.", "Drink some water.", "Don't lift heavy things."], a: 2 },
        { p: "8. " + E12("💼") + "una mujer estresada en su escritorio, con muchos papeles", o: ["Work too hard.", "Don't work too hard.", "Go to the grocery store."], a: 1 }
      ] }
  ]
};
