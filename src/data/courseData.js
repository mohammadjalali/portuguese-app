export const sessions = [
  {
    id: 1,
    title: "Saudações e o Alfabeto",
    subtitle: "Greetings & the Alphabet",
    color: "#2D6A4F",
    accent: "#52B788",
    icon: "👋",
    description: "Learn how to greet people and introduce yourself in Portuguese, plus master the alphabet and basic sounds.",
    topics: ["Greetings", "Self-introductions", "The Alphabet", "Nasal sounds", "Diphthongs"],
    vocabulary: [
      {
        word: "Olá",
        translation: "Hello",
        pronunciation: "oh-LAH",
        ipa: "/oˈla/",
        example: "Olá! Eu chamo-me Miguel.",
        exampleTranslation: "Hello! My name is Miguel.",
        category: "greetings",
        youtubeQuery: "como dizer olá em português",
        tip: "Used at any time of day, very common and friendly"
      },
      {
        word: "Bom dia",
        translation: "Good morning",
        pronunciation: "bom DEE-ah",
        ipa: "/bõ ˈdi.ɐ/",
        example: "Bom dia! Como está?",
        exampleTranslation: "Good morning! How are you?",
        category: "greetings",
        tip: "Used from morning until around noon"
      },
      {
        word: "Boa tarde",
        translation: "Good afternoon",
        pronunciation: "BOH-ah TAR-deh",
        ipa: "/ˈboɐ ˈtaɾdɨ/",
        example: "Boa tarde! Tudo bem?",
        exampleTranslation: "Good afternoon! All good?",
        category: "greetings",
        tip: "Used from noon until sunset"
      },
      {
        word: "Boa noite",
        translation: "Good evening / Good night",
        pronunciation: "BOH-ah NOY-teh",
        ipa: "/ˈboɐ ˈnojtɨ/",
        example: "Boa noite! Até amanhã.",
        exampleTranslation: "Good night! See you tomorrow.",
        category: "greetings",
        tip: "Used after sunset, both as a greeting and farewell"
      },
      {
        word: "Adeus",
        translation: "Goodbye",
        pronunciation: "ah-DAY-oos",
        ipa: "/ɐˈdewʃ/",
        example: "Adeus! Até logo!",
        exampleTranslation: "Goodbye! See you later!",
        category: "greetings",
        tip: "More formal goodbye, often used when parting for a long time"
      },
      {
        word: "Até logo",
        translation: "See you later",
        pronunciation: "ah-TAY LOH-goo",
        ipa: "/ɐˈtɛ ˈloɡu/",
        example: "Até logo, amigos!",
        exampleTranslation: "See you later, friends!",
        category: "greetings",
        tip: "Casual farewell, implies you'll see them again soon"
      },
      {
        word: "Obrigado / Obrigada",
        translation: "Thank you",
        pronunciation: "oh-bree-GAH-doo / oh-bree-GAH-dah",
        ipa: "/obɾiˈɡadu/ / /obɾiˈɡadɐ/",
        example: "Obrigado pela ajuda!",
        exampleTranslation: "Thank you for your help!",
        category: "politeness",
        tip: "Men say 'obrigado', women say 'obrigada' — it agrees with the speaker's gender"
      },
      {
        word: "De nada",
        translation: "You're welcome",
        pronunciation: "deh NAH-dah",
        ipa: "/dɨ ˈnadɐ/",
        example: "— Obrigada! — De nada!",
        exampleTranslation: "— Thank you! — You're welcome!",
        category: "politeness",
        tip: "Literally means 'of nothing' — the standard response to 'thank you'"
      },
      {
        word: "Por favor",
        translation: "Please",
        pronunciation: "por fah-VOR",
        ipa: "/puɾ fɐˈvoɾ/",
        example: "Um café, por favor.",
        exampleTranslation: "A coffee, please.",
        category: "politeness",
        tip: "Essential for polite requests; also 'faz favor' in Portugal"
      },
      {
        word: "Desculpe",
        translation: "Excuse me / I'm sorry",
        pronunciation: "desh-KOOL-peh",
        ipa: "/dɨʃˈkulpɨ/",
        example: "Desculpe, onde é a estação?",
        exampleTranslation: "Excuse me, where is the station?",
        category: "politeness",
        tip: "Use to get attention or apologize; 'desculpa' is the informal version"
      },
      {
        word: "Eu chamo-me",
        translation: "My name is (I call myself)",
        pronunciation: "ay-oo SHAH-moo-meh",
        ipa: "/ew ˈʃamu mɨ/",
        example: "Eu chamo-me Ana. E tu?",
        exampleTranslation: "My name is Ana. And you?",
        category: "introductions",
        tip: "Literally 'I call myself' — the reflexive verb chamar-se"
      },
      {
        word: "Eu sou de",
        translation: "I am from",
        pronunciation: "ay-oo soh deh",
        ipa: "/ew ˈso dɨ/",
        example: "Eu sou de Lisboa.",
        exampleTranslation: "I am from Lisbon.",
        category: "introductions",
        tip: "Use 'de' before city names and most countries"
      },
      {
        word: "Sim / Não",
        translation: "Yes / No",
        pronunciation: "see / now",
        ipa: "/sĩ/ / /nɐ̃w̃/",
        example: "Sim, eu falo português. Não, não falo espanhol.",
        exampleTranslation: "Yes, I speak Portuguese. No, I don't speak Spanish.",
        category: "basics",
        tip: "'Não' has a nasal sound — practice the ão diphthong!"
      }
    ],
    grammar: {
      title: "Nasal Vowels",
      explanation: "Portuguese has nasal vowels marked with ~ (tilde) or followed by -m/-n in the same syllable. They are produced with air flowing through the nose.",
      examples: [
        { pattern: "ã / ão", example: "manhã, pão, coração", sound: "nasal 'a' or 'ow'" },
        { pattern: "-em / -en", example: "também, entre", sound: "nasal 'e'" },
        { pattern: "-im / -in", example: "sim, tinto", sound: "nasal 'ee'" },
        { pattern: "-om / -on", example: "com, contar", sound: "nasal 'o'" },
        { pattern: "-um / -un", example: "um, nunca", sound: "nasal 'oo'" }
      ]
    }
  },
  {
    id: 2,
    title: "Informação Pessoal",
    subtitle: "Personal Information",
    color: "#1B4965",
    accent: "#5FA8D3",
    icon: "👤",
    description: "Learn to introduce yourself fully, use personal pronouns, and conjugate key verbs like ser (to be) and ter (to have).",
    topics: ["Personal pronouns", "Verb SER", "Verb TER", "Numbers 0–50", "Nationalities", "Reflexive verb chamar-se"],
    vocabulary: [
      {
        word: "Eu / Tu / Ele / Ela",
        translation: "I / You / He / She",
        pronunciation: "AY-oo / too / EH-leh / EH-lah",
        ipa: "/ew/ / /tu/ / /ˈelɨ/ / /ˈelɐ/",
        example: "Eu sou estudante. Tu és português?",
        exampleTranslation: "I am a student. Are you Portuguese?",
        category: "pronouns",
        tip: "In Portuguese, subject pronouns are often omitted as the verb ending shows the person"
      },
      {
        word: "Nós / Vocês / Eles / Elas",
        translation: "We / You (pl.) / They (m.) / They (f.)",
        pronunciation: "NOSH / voh-SESH / EH-lesh / EH-lash",
        ipa: "/nɔʃ/ / /voˈseʃ/ / /ˈelɨʃ/ / /ˈelɐʃ/",
        example: "Nós somos amigos. Eles são de Lisboa.",
        exampleTranslation: "We are friends. They are from Lisbon.",
        category: "pronouns",
        tip: "In Portugal, 'vocês' is the standard plural 'you'. 'Vós' is archaic."
      },
      {
        word: "Ser (sou / és / é / somos / são)",
        translation: "To be (I am / you are / he is / we are / they are)",
        pronunciation: "soar / ezh / eh / SOH-moosh / sow",
        ipa: "/ˈso/ / /ˈɛʃ/ / /ˈɛ/ / /ˈsomuʃ/ / /ˈsɐ̃w̃/",
        example: "Eu sou portuguesa. Ela é espanhola.",
        exampleTranslation: "I am Portuguese. She is Spanish.",
        category: "verbs",
        tip: "SER is for permanent characteristics: identity, nationality, profession, origin"
      },
      {
        word: "Ter (tenho / tens / tem / temos / têm)",
        translation: "To have",
        pronunciation: "TEN-yoo / tenz / tame / TAY-moosh / tame",
        ipa: "/ˈtɐɲu/ / /tɐ̃jʃ/ / /tɐ̃j/ / /ˈtemuʃ/ / /ˈtɐ̃jʃ/",
        example: "Eu tenho 25 anos. Ela tem um cão.",
        exampleTranslation: "I am 25 years old. She has a dog.",
        category: "verbs",
        tip: "Use TER + anos to express age in Portuguese"
      },
      {
        word: "Chamar-se (chamo-me / chamas-te)",
        translation: "To be called / To call oneself",
        pronunciation: "SHA-moo-meh / SHA-mash-teh",
        ipa: "/ˈʃamu mɨ/ / /ˈʃamaʃ tɨ/",
        example: "Como te chamas? Chamo-me João.",
        exampleTranslation: "What's your name? My name is João.",
        category: "verbs",
        tip: "This is a reflexive verb — the pronoun changes with the subject"
      },
      {
        word: "Qual é a tua nacionalidade?",
        translation: "What is your nationality?",
        pronunciation: "kwahl eh ah TOO-ah nah-see-oh-nah-lee-DAH-deh",
        ipa: "/ˈkwal ˈɛ ɐ ˈtuɐ nasjunɐliˈdadɨ/",
        example: "— Qual é a tua nacionalidade? — Sou brasileiro.",
        exampleTranslation: "— What is your nationality? — I am Brazilian.",
        category: "questions",
        tip: "Nationality adjectives agree in gender and number with the person described"
      },
      {
        word: "De onde és?",
        translation: "Where are you from?",
        pronunciation: "deh ON-deh ezh",
        ipa: "/dɨ ˈõdɨ ˈɛʃ/",
        example: "— De onde és? — Sou do Brasil, de São Paulo.",
        exampleTranslation: "— Where are you from? — I'm from Brazil, from São Paulo.",
        category: "questions",
        tip: "'Onde' = where; 'de onde' = from where"
      },
      {
        word: "Quantos anos tens?",
        translation: "How old are you?",
        pronunciation: "KWAN-toosh AH-noosh tenz",
        ipa: "/ˈkwɐ̃tuʃ ˈɐnuʃ ˈtɐ̃jʃ/",
        example: "— Quantos anos tens? — Tenho vinte e dois anos.",
        exampleTranslation: "— How old are you? — I am 22 years old.",
        category: "questions",
        tip: "Literally: 'How many years do you have?' — TER is used for age"
      },
      {
        word: "Português / Portuguesa",
        translation: "Portuguese (m./f.)",
        pronunciation: "poor-too-GESH / poor-too-GAY-zah",
        ipa: "/puɾtuˈɡeʃ/ / /puɾtuˈɡezɐ/",
        example: "Eu sou portuguesa, sou de Braga.",
        exampleTranslation: "I am Portuguese, I'm from Braga.",
        category: "nationalities",
        tip: "Nationality adjectives change for masculine/feminine and singular/plural"
      },
      {
        word: "Espanhol / Espanhola",
        translation: "Spanish (m./f.)",
        pronunciation: "esh-pan-YOL / esh-pan-YOH-lah",
        ipa: "/ɨʃpɐˈɲɔl/ / /ɨʃpɐˈɲɔlɐ/",
        example: "O Miguel é espanhol. A María é espanhola.",
        exampleTranslation: "Miguel is Spanish. María is Spanish.",
        category: "nationalities",
        tip: "Irregular nationality — the feminine adds -a, plural adds -is for m., -as for f."
      }
    ],
    grammar: {
      title: "Verb SER — Present Tense",
      explanation: "SER (to be) is used for permanent or inherent characteristics. It's irregular and must be memorized.",
      examples: [
        { pattern: "Eu sou", example: "Eu sou estudante.", sound: "I am" },
        { pattern: "Tu és", example: "Tu és muito simpático.", sound: "You are (informal)" },
        { pattern: "Ele/Ela é", example: "Ela é professora.", sound: "He/She is" },
        { pattern: "Nós somos", example: "Nós somos portugueses.", sound: "We are" },
        { pattern: "Vocês/Eles são", example: "Eles são amigos.", sound: "They are" }
      ]
    }
  },
  {
    id: 3,
    title: "Números e Interrogativos",
    subtitle: "Numbers & Question Words",
    color: "#6B2D8B",
    accent: "#C77DFF",
    icon: "🔢",
    description: "Master numbers 0–50, key question words, and continue building on personal information vocabulary.",
    topics: ["Numbers 0–50", "Interrogatives", "Review of SER & TER", "Nationalities review", "Phonetics: ch, lh, nh"],
    vocabulary: [
      {
        word: "zero, um, dois, três",
        translation: "zero, one, two, three",
        pronunciation: "ZEH-roo, oom, doysh, tresh",
        ipa: "/ˈzɛɾu/ /ũ/ /dojʃ/ /tɾɛʃ/",
        example: "O meu número é zero-um-dois-três.",
        exampleTranslation: "My number is 0-1-2-3.",
        category: "numbers",
        tip: "'Um' changes to 'uma' for feminine nouns: uma pessoa, um livro"
      },
      {
        word: "quatro, cinco, seis, sete",
        translation: "four, five, six, seven",
        pronunciation: "KWAH-troo, SEEN-koo, saysh, SEH-teh",
        ipa: "/ˈkwatɾu/ /ˈsĩku/ /ˈsejʃ/ /ˈsɛtɨ/",
        example: "Eu tenho quatro irmãos e seis primos.",
        exampleTranslation: "I have four siblings and six cousins.",
        category: "numbers",
        tip: "'Seis' sounds like English 'say' + 'sh'"
      },
      {
        word: "oito, nove, dez",
        translation: "eight, nine, ten",
        pronunciation: "OY-too, NOH-veh, desh",
        ipa: "/ˈojtʊ/ /ˈnɔvɨ/ /ˈdeʃ/",
        example: "Tenho oito anos. — Eu tenho dez!",
        exampleTranslation: "I am eight years old. — I am ten!",
        category: "numbers",
        tip: "'Dez' sounds like 'desh' in European Portuguese"
      },
      {
        word: "onze até vinte",
        translation: "eleven to twenty",
        pronunciation: "ON-zeh ah-TAY VEEN-teh",
        ipa: "/ˈõzɨ/ ... /ˈvĩtɨ/",
        example: "Tenho dezasseis anos.",
        exampleTranslation: "I am sixteen years old.",
        category: "numbers",
        tip: "16 = dezasseis, 17 = dezassete, 18 = dezoito, 19 = dezanove"
      },
      {
        word: "vinte e um, trinta, quarenta, cinquenta",
        translation: "twenty-one, thirty, forty, fifty",
        pronunciation: "VEEN-teh ee oom, TREEN-tah, kwah-REN-tah, seen-KWEN-tah",
        ipa: "/ˈvĩtɨ i ũ/ /ˈtɾĩtɐ/ /ˈkwaɾẽtɐ/ /sĩˈkwẽtɐ/",
        example: "Tenho vinte e cinco anos.",
        exampleTranslation: "I am twenty-five years old.",
        category: "numbers",
        tip: "Compound numbers use 'e' (and): vinte e três = 23"
      },
      {
        word: "Como?",
        translation: "How? / What? (name)",
        pronunciation: "KOH-moo",
        ipa: "/ˈkomu/",
        example: "Como te chamas?",
        exampleTranslation: "What's your name? (How do you call yourself?)",
        category: "interrogatives",
        tip: "'Como' asks about manner or name; don't confuse with 'o quê' (what thing)"
      },
      {
        word: "Onde?",
        translation: "Where?",
        pronunciation: "ON-deh",
        ipa: "/ˈõdɨ/",
        example: "Onde é a biblioteca?",
        exampleTranslation: "Where is the library?",
        category: "interrogatives",
        tip: "Combine with prepositions: 'de onde' = from where, 'para onde' = to where"
      },
      {
        word: "Qual / Quais?",
        translation: "Which? / What?",
        pronunciation: "kwahl / kwaysh",
        ipa: "/ˈkwal/ / /ˈkwajʃ/",
        example: "Qual é o teu nome? Qual é a tua nacionalidade?",
        exampleTranslation: "What is your name? What is your nationality?",
        category: "interrogatives",
        tip: "'Qual' is used before 'é' where English uses 'what': Qual é...? = What is...?"
      },
      {
        word: "Quanto / Quantos?",
        translation: "How much? / How many?",
        pronunciation: "KWAN-too / KWAN-toosh",
        ipa: "/ˈkwɐ̃tu/ / /ˈkwɐ̃tuʃ/",
        example: "Quantos anos tens? Quanto custa?",
        exampleTranslation: "How old are you? How much does it cost?",
        category: "interrogatives",
        tip: "Agrees in gender/number: quanto/quanta, quantos/quantas"
      },
      {
        word: "Quem?",
        translation: "Who?",
        pronunciation: "kame",
        ipa: "/ˈkɐ̃j/",
        example: "Quem é ela? Ela é a minha professora.",
        exampleTranslation: "Who is she? She is my teacher.",
        category: "interrogatives",
        tip: "Used for people; 'o quê' is used for things"
      }
    ],
    grammar: {
      title: "Consonant Groups: ch, lh, nh",
      explanation: "Three important Portuguese digraphs that are pronounced differently from their letter combinations in English.",
      examples: [
        { pattern: "ch", example: "chave, chávena, chuva", sound: "Like English 'sh' — chave = SHA-veh" },
        { pattern: "lh", example: "ilha, milho, filho", sound: "Like 'lli' in 'million' — milho = MEE-lyoo" },
        { pattern: "nh", example: "galinha, andorinha, vinho", sound: "Like 'ny' in 'canyon' — vinho = VEE-nyoo" }
      ]
    }
  },
  {
    id: 4,
    title: "Profissões e Verbos",
    subtitle: "Professions & Regular Verbs",
    color: "#8B3A0F",
    accent: "#F4A261",
    icon: "💼",
    description: "Learn professions vocabulary, practice regular -ar verb conjugations, and describe yourself in detail.",
    topics: ["Regular -ar verbs", "Professions", "Gender agreement", "Personal descriptions", "Nationalities review"],
    vocabulary: [
      {
        word: "Verbos em -ar: falar",
        translation: "To speak",
        pronunciation: "fah-LAR",
        ipa: "/fɐˈlaɾ/",
        example: "Eu falo inglês e português. Tu falas espanhol?",
        exampleTranslation: "I speak English and Portuguese. Do you speak Spanish?",
        category: "verbs",
        tip: "Pattern: fal- + o/as/a/amos/am. All -ar verbs follow this pattern"
      },
      {
        word: "Morar",
        translation: "To live / To reside",
        pronunciation: "moo-RAR",
        ipa: "/muˈɾaɾ/",
        example: "Eu moro em Lisboa. Onde moras tu?",
        exampleTranslation: "I live in Lisbon. Where do you live?",
        category: "verbs",
        tip: "mor- + o/as/a/amos/am: moro, moras, mora, moramos, moram"
      },
      {
        word: "Trabalhar",
        translation: "To work",
        pronunciation: "trah-bal-YAR",
        ipa: "/tɾɐbɐˈʎaɾ/",
        example: "Ela trabalha num hospital.",
        exampleTranslation: "She works in a hospital.",
        category: "verbs",
        tip: "Note the 'lh' sound: trabalh-: trabalho, trabalhas, trabalha..."
      },
      {
        word: "Estudar",
        translation: "To study",
        pronunciation: "esh-too-DAR",
        ipa: "/ɨʃtuˈdaɾ/",
        example: "Eu estudo Economia na universidade.",
        exampleTranslation: "I study Economics at university.",
        category: "verbs",
        tip: "estud- + o/as/a/amos/am: estudo, estudas, estuda..."
      },
      {
        word: "Gostar de",
        translation: "To like",
        pronunciation: "gosh-TAR deh",
        ipa: "/ɡuʃˈtaɾ dɨ/",
        example: "Eu gosto de música. Gostas de desporto?",
        exampleTranslation: "I like music. Do you like sports?",
        category: "verbs",
        tip: "'Gostar' is always followed by 'de': gostar de + noun/infinitive"
      },
      {
        word: "o/a médico/a",
        translation: "Doctor (m./f.)",
        pronunciation: "oo MEH-dee-koo / ah MEH-dee-kah",
        ipa: "/u ˈmɛdiku/ / /ɐ ˈmɛdikɐ/",
        example: "O João é médico. A Ana é médica.",
        exampleTranslation: "João is a doctor. Ana is a doctor.",
        category: "professions",
        tip: "In Portuguese, no article before profession after SER: 'Sou médico' (not 'Sou um médico')"
      },
      {
        word: "o/a professor/a",
        translation: "Teacher / Professor (m./f.)",
        pronunciation: "oo pro-feh-SOR / ah pro-feh-SOH-rah",
        ipa: "/u pɾufɨˈsoɾ/ / /ɐ pɾufɨˈsoɾɐ/",
        example: "Ela é professora de matemática.",
        exampleTranslation: "She is a mathematics teacher.",
        category: "professions",
        tip: "Masculine ends in -or, feminine adds -a: professor → professora"
      },
      {
        word: "o/a engenheiro/a",
        translation: "Engineer (m./f.)",
        pronunciation: "oo en-jen-YAY-roo / ah en-jen-YAY-rah",
        ipa: "/u ẽʒɨˈɲejɾu/ / /ɐ ẽʒɨˈɲejɾɐ/",
        example: "O Nori é engenheiro e mora em Londres.",
        exampleTranslation: "Nori is an engineer and lives in London.",
        category: "professions",
        tip: "Ends in -eiro/-eira: engenheiro → engenheira"
      },
      {
        word: "o/a jornalista",
        translation: "Journalist (m./f.)",
        pronunciation: "oo / ah zhor-nah-LEESH-tah",
        ipa: "/u ʒuɾnɐˈliʃtɐ/ / /ɐ ʒuɾnɐˈliʃtɐ/",
        example: "A Christine é jornalista alemã.",
        exampleTranslation: "Christine is a German journalist.",
        category: "professions",
        tip: "Professions ending in -ista are the same for masculine and feminine"
      },
      {
        word: "o/a estudante",
        translation: "Student (m./f.)",
        pronunciation: "oo / ah esh-too-DAN-teh",
        ipa: "/u ɨʃtuˈdɐ̃tɨ/ / /ɐ ɨʃtuˈdɐ̃tɨ/",
        example: "Somos estudantes de Economia.",
        exampleTranslation: "We are Economics students.",
        category: "professions",
        tip: "Also same form for both genders — just change the article"
      },
      {
        word: "casado/a, solteiro/a, divorciado/a",
        translation: "Married, single, divorced",
        pronunciation: "kah-ZAH-doo, sol-TAY-roo, dee-vor-see-AH-doo",
        ipa: "/kɐˈzadu/ /sulˈtejɾu/ /divuɾsiˈadu/",
        example: "Sou solteiro. Ela é casada com o Pedro.",
        exampleTranslation: "I am single. She is married to Pedro.",
        category: "personal",
        tip: "Marital status adjectives agree in gender: casado (m.) / casada (f.)"
      },
      {
        word: "Qual é a tua profissão?",
        translation: "What is your profession?",
        pronunciation: "kwahl eh ah TOO-ah pro-fee-SOWNG",
        ipa: "/ˈkwal ˈɛ ɐ ˈtuɐ pɾufisˈɐ̃w̃/",
        example: "— Qual é a tua profissão? — Sou estudante.",
        exampleTranslation: "— What is your profession? — I am a student.",
        category: "questions",
        tip: "The most common way to ask about someone's job in Portuguese"
      }
    ],
    grammar: {
      title: "Regular -ar Verbs — Present Tense",
      explanation: "Most Portuguese verbs end in -ar and follow a predictable pattern. Remove -ar and add the endings.",
      examples: [
        { pattern: "eu -o", example: "falo, moro, trabalho, estudo", sound: "I speak, live, work, study" },
        { pattern: "tu -as", example: "falas, moras, trabalhas, estudas", sound: "You speak, live, work, study" },
        { pattern: "ele/ela -a", example: "fala, mora, trabalha, estuda", sound: "He/She speaks, lives, works, studies" },
        { pattern: "nós -amos", example: "falamos, moramos, trabalhamos", sound: "We speak, live, work" },
        { pattern: "eles/elas -am", example: "falam, moram, trabalham", sound: "They speak, live, work" }
      ]
    }
  }
];

export const courseInfo = {
  title: "Português para Principiantes",
  subtitle: "European Portuguese — A1 Level",
  institution: "NOVA IMS",
  term: "Spring 2026",
  totalSessions: 25,
  assessments: [
    { name: "Final Written Exam", weight: "30%", date: "June 2" },
    { name: "Midterm Written Test", weight: "20%", date: "April 23" },
    { name: "Final Oral Exam", weight: "20%", date: "May 26" },
    { name: "Oral Presentation", weight: "10%", date: "May 14" },
    { name: "Video Presentation 1", weight: "10%", date: "April 30" },
    { name: "Video Presentation 2", weight: "5%", date: "May 12" },
    { name: "Homework Assignments", weight: "5%", date: "Weekly" }
  ]
};
