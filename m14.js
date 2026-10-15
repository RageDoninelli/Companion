/* Módulo 14 — I had a good time.
   {respuesta|alternativa} = espacio a completar · [texto] = ejemplo resuelto · "# texto" = subtítulo */
var E14 = (e) => "<span style=\"font-size:24px;vertical-align:middle\">" + e + "</span> ";
var HE = ["He", "She"];
var SENT = (subj, rests) => "{" + subj.flatMap(s => rests.map(r => s + " " + r)).join("|") + "}";
var EMAIL14 = ["answered email.", "answered emails.", "answered his email.", "answered her email.", "answered his emails.", "answered her emails.", "answered an email.", "answered e-mail."];

MODS[14] = {
  title: "I had a good time.",
  topic: "Pasado simple: verbos regulares, irregulares y negativos",
  ex: [
    { n: "1A", t: "Last Saturday. What did these people do last Saturday? Write sentences.", h: "Mira el emoji y la pista, y escribe la oración en pasado.",
      items: [
        "# 1. " + E14("👨‍👩‍👧‍👦") + "visit relatives (varias personas)",
        "[They visited relatives.]",
        "# 2. " + E14("💻") + "answer email (un hombre)",
        SENT(HE, EMAIL14),
        "# 3. " + E14("🏃") + "exercise (dos personas)",
        SENT(["They"], ["exercised.", "worked out.", "ran.", "jogged.", "went running.", "went jogging."]),
        "# 4. " + E14("🧹") + "clean the house (un hombre)",
        SENT(HE, ["cleaned the house.", "cleaned his house.", "cleaned her house."]),
        "# 5. " + E14("🧺") + "do laundry (una mujer)",
        SENT(HE, ["did laundry.", "did the laundry.", "did his laundry.", "did her laundry."]),
        "# 6. " + E14("📚") + "study (una mujer)",
        SENT(HE, ["studied."]),
        "# 7. " + E14("🚗") + "wash the car (un hombre)",
        SENT(HE, ["washed the car.", "washed his car.", "washed her car.", "washed a car."]),
        "# 8. " + E14("🛒") + "go grocery shopping (una mujer)",
        SENT(HE, ["went grocery shopping.", "went shopping.", "went to the supermarket."])
      ] },

    { n: "2", t: "Kim and Alisha are sending text messages. Complete the sentences. Use the simple past form of the verbs in parentheses.", h: "Escribe el verbo en pasado simple.",
      items: [
        "# Alisha: How was your weekend?",
        "# Kim",
        "It was really busy. I [worked] (work) on Friday, then I {invited} (invite) friends over after work. I {cooked} (cook) dinner for them. We {listened} (listen) to music and {talked} (talk) about work, but they {didn't stay|did not stay} (not stay) very late.",
        "# Alisha: What did you do on Saturday and Sunday?",
        "# Kim",
        "I {got up} (get up) early on Saturday because I {played} (play) basketball with Angela. Then I {visited} (visit) relatives. We {walked} (walk) downtown and {ate} (eat) dinner. Oh, and we {saw} (see) a movie. On Sunday, I {studied} (study) for my math test with my friends. I {did} (do) laundry on Sunday afternoon, too.",
        "# Alisha",
        "Wow! That was a busy weekend! I {didn't do|did not do} (not do) much this weekend. I {answered} (answer) email on Friday night and I {watched} (watch) TV, too. On Saturday, I {didn't get up|did not get up} (not get up) early. I {cleaned} (clean) the house and I {went} (go) grocery shopping. I {didn't do|did not do} (not do) anything on Sunday!"
      ] },

    { n: "3", t: "Claudia and Hiro did different things last weekend. Write sentences about them.", h: "Escribe una oración para Claudia y otra para Hiro, en afirmativo o negativo según lo que hicieron.",
      items: [
        "# Claudia: vio TV, fue de compras, cocinó y anduvo en bicicleta. Hiro: jugó tenis, estudió, cocinó y fue a un museo.",
        "1. watch TV\n[Claudia watched TV.] [Hiro didn't watch TV.]",
        "2. go to a museum\n{Claudia didn't go to a museum.|Claudia did not go to a museum.} {Hiro went to a museum.}",
        "3. ride a bicycle\n{Claudia rode a bicycle.|Claudia rode a bike.} {Hiro didn't ride a bicycle.|Hiro did not ride a bicycle.|Hiro didn't ride a bike.|Hiro did not ride a bike.}",
        "4. cook\n{Claudia cooked.} {Hiro cooked.|Hiro cooked, too.|Hiro cooked too.}",
        "5. study\n{Claudia didn't study.|Claudia did not study.} {Hiro studied.}",
        "6. shop\n{Claudia shopped.} {Hiro didn't shop.|Hiro did not shop.}",
        "7. play tennis\n{Claudia didn't play tennis.|Claudia did not play tennis.} {Hiro played tennis.}"
      ] },

    { n: "4", t: "Complete the chart.", h: "Escribe el verbo que falta: presente → pasado.", cols: true,
      items: [
        "buy → [bought]", "go → {went}",
        "come → {came}", "{have} → had",
        "{do} → did", "read → {read}",
        "eat → {ate}", "ride → {rode}",
        "{feel} → felt", "{see} → saw",
        "{meet} → met", "sit → {sat}"
      ] },

    { n: "5", t: "Complete the conversation. Use the simple past forms of the verbs in parentheses.", h: "Escribe el verbo en pasado simple (o did / didn't en las preguntas y negativos).",
      items: [
        "Aaron: So, Beth, [did] you [have] (have) a good summer?",
        "Beth: Well, I {had} (have) an interesting summer. My sister and her family {came} (come) to visit for two weeks.",
        "Aaron: That's nice.",
        "Beth: Yes and no. My sister {didn't feel|did not feel} (not feel) well, so she {sat} (sit) on the sofa and {watched} (watch) TV. She hardly ever {got up} (get up).",
        "Aaron: Oh, well. {Did} her husband and kids {have} (have) a good time?",
        "Beth: I think so. They {played} (play) volleyball and {rode} (ride) their bikes every day.",
        "Aaron: {Did} you {go out} (go out) to any restaurants?",
        "Beth: No, I {cooked} (cook) breakfast, lunch, and dinner every day. They {ate} (eat) a lot of food, but they {didn't wash|did not wash} (not wash) any dishes.",
        "Aaron: That's too bad. {Did} you {relax} (relax) at all last summer?",
        "Beth: Yes. My sister and her family finally {went} (go) home, and then I {relaxed} (relax). I just {read} (read) some books and {listened} (listen) to music."
      ] },

    { n: "6", t: "Unscramble the questions about last summer.", h: "Ordena las palabras para formar la pregunta (la parte de responder con tus datos la omití).",
      items: [
        "# Last summer, … ?",
        "1. did · any · books · you · read · good\n[Did you read any good books?]",
        "2. go · interesting · anywhere · you · did\n{Did you go anywhere interesting?}",
        "3. any · take · did · you · pictures\n{Did you take any pictures?}",
        "4. buy · you · did · anything · interesting\n{Did you buy anything interesting?}",
        "5. did · eat · you · foods · any · new\n{Did you eat any new foods?}",
        "6. games · did · you · any · play\n{Did you play any games?}",
        "7. you · did · sports · play · any\n{Did you play any sports?}",
        "8. you · did · interesting · meet · any · people\n{Did you meet any interesting people?}",
        "9. any · see · you · did · movies · good\n{Did you see any good movies?}"
      ] },

    { n: "7", t: "Summer activities. The Johnson family did many fun activities last summer. Write sentences about them.", h: "Usa la pista en español y escribe la oración en pasado.",
      items: [
        "# 1. " + E14("🐴") + "montan a caballo por el bosque",
        "[They rode horses.]",
        "# 2. " + E14("🍖") + "hacen una parrillada en el patio",
        SENT(["They"], ["had a barbecue.", "had a cookout.", "cooked outside.", "grilled food.", "grilled.", "barbecued."]),
        "# 3. " + E14("🥾") + "caminan por las montañas",
        SENT(["They"], ["went hiking.", "hiked.", "went on a hike."]),
        "# 4. " + E14("🍕") + "comen pizza en casa",
        SENT(["They"], ["ate pizza.", "had pizza.", "ate dinner.", "had dinner.", "ate."]),
        "# 5. " + E14("⛳") + "juegan golf",
        SENT(["They"], ["played golf.", "played mini golf.", "played miniature golf.", "golfed."]),
        "# 6. " + E14("📖") + "leen libros en el sofá",
        SENT(["They"], ["read books.", "read some books.", "read.", "read at home.", "read on the sofa."]),
        "# 7. " + E14("🎬") + "ven una película en el cine",
        SENT(["They"], ["watched a movie.", "saw a movie.", "went to the movies.", "went to the movie theater.", "went to the cinema.", "watched a film.", "saw a film."]),
        "# 8. " + E14("🗽") + "toman fotos frente a la Estatua de la Libertad",
        SENT(["They"], ["took pictures.", "took photos.", "took a picture.", "took a photo.", "took pictures of the Statue of Liberty.", "visited New York.", "visited the Statue of Liberty.", "went to New York.", "went to New York City."])
      ] }
  ]
};
