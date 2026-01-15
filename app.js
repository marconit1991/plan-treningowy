// Dane treningowe
const trainingData = {
    sebus: {
        name: "Sebuś",
        goal: "Redukcja 10-20 kg w 3-6 miesięcy",
        equipment: "Hantle 2x20kg",
        limitations: "Lewe kolano (ból), lewy staw skokowy (zerwany więzozrost)",
        avoid: "Głębokich przysiadów, skoków",
        days: {
            1: {
                name: "Górna część (Push)",
                warmup: "10 min",
                exercises: [
                    { name: "Wyciskanie hantli", sets: "3x8-12", rest: "90s", weight: "Start: 2x10kg", note: "poduszki pod plecami", warning: "Nie opuszczaj zbyt nisko!" },
                    { name: "Wyciskanie nad głową", sets: "3x8-12", rest: "90s", weight: "Start: 2x7.5kg" },
                    { name: "Rozpiętki", sets: "3x10-15", rest: "60s", weight: "Start: 2x5kg" },
                    { name: "Biceps", sets: "3x10-12", rest: "60s", weight: "Start: 2x5kg" },
                    { name: "Triceps (francuskie)", sets: "3x10-12", rest: "60s", weight: "Start: 1x5-10kg" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min"
            },
            2: {
                name: "Dolna część",
                warmup: "10 min",
                exercises: [
                    { name: "Martwy ciąg RDL", sets: "3x8-10", rest: "90s", weight: "Start: 2x10kg", warning: "Nie schodź nisko!" },
                    { name: "Wykroki", sets: "3x10-12", rest: "90s", weight: "Start: bez ciężaru", warning: "Płytkie! Jeśli boli kolano - POMIŃ" },
                    { name: "Hip thrust", sets: "3x12-15", rest: "60s", weight: "Start: bez ciężaru", safe: "Bezpieczne!" },
                    { name: "Unoszenie nóg", sets: "3x15-20", rest: "45s", weight: "" },
                    { name: "Deska", sets: "3x30-60s", rest: "60s", weight: "Start: 20-30s" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min"
            },
            3: {
                name: "Górna część (Pull)",
                warmup: "10 min",
                exercises: [
                    { name: "Wiosłowanie", sets: "3x8-12", rest: "90s", weight: "Start: 2x10kg", warning: "Nie schylaj się nisko!" },
                    { name: "Podciąganie do boku", sets: "3x10-12", rest: "90s", weight: "Start: 2x5kg" },
                    { name: "Unoszenie z przodu", sets: "3x10-12", rest: "60s", weight: "Start: 2x5kg" },
                    { name: "Wiosłowanie jednorącz", sets: "3x10-12", rest: "60s", weight: "Start: 1x10kg" },
                    { name: "Martwy ciąg lekki", sets: "3x8-10", rest: "90s", weight: "Start: 2x10kg", warning: "Płytki zakres!" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min"
            },
            4: {
                name: "Full Body",
                warmup: "10 min",
                exercises: [
                    { name: "Martwy ciąg RDL", sets: "3x8-10", rest: "90s", weight: "" },
                    { name: "Wyciskanie nad głową", sets: "3x8-12", rest: "90s", weight: "" },
                    { name: "Wiosłowanie", sets: "3x8-12", rest: "90s", weight: "" },
                    { name: "Hip thrust", sets: "3x12-15", rest: "60s", weight: "" },
                    { name: "Deska", sets: "3x30-60s", rest: "60s", weight: "" },
                    { name: "Unoszenie nóg", sets: "3x15-20", rest: "45s", weight: "" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min"
            }
        }
    },
    kobieta: {
        name: "Alusia",
        goal: "Redukcja 40 kg w 1.5 roku (~2.5 kg/miesiąc)",
        equipment: "Hantle z możliwością transformacji w sztangę",
        limitations: "Bawoli garb, lewe kolano (ból), górna część pleców (ból od siedzącej pracy)",
        avoid: "Podskoków, przysiadów, biegania",
        days: {
            1: {
                name: "Górna część (Push)",
                warmup: "10 min | ⚠️ Rozciągnij klatkę i szyję!",
                exercises: [
                    { name: "Wyciskanie hantli", sets: "3x8-12", rest: "90s", weight: "Start: 2x5kg", note: "poduszki pod plecami", warning: "Głowa w linii z kręgosłupem!" },
                    { name: "Wyciskanie nad głową", sets: "3x8-12", rest: "90s", weight: "Start: 2x3-5kg", warning: "Prosta postawa!" },
                    { name: "Rozpiętki", sets: "3x10-15", rest: "60s", weight: "Start: 2x2.5-5kg" },
                    { name: "Biceps", sets: "3x10-12", rest: "60s", weight: "Start: 2x3-5kg" },
                    { name: "Triceps (francuskie)", sets: "3x10-12", rest: "60s", weight: "Start: 1x3-5kg" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min | ⚠️ Klatka 2x45s, szyja 2x30s, ćwiczenie przy ścianie!"
            },
            2: {
                name: "Dolna część",
                warmup: "10 min",
                exercises: [
                    { name: "Martwy ciąg RDL", sets: "3x8-10", rest: "90s", weight: "Start: 2x5kg", warning: "Nie schodź nisko!" },
                    { name: "Wykroki", sets: "3x10-12", rest: "90s", weight: "Start: bez ciężaru", warning: "Płytkie! Jeśli boli kolano - POMIŃ" },
                    { name: "Hip thrust", sets: "3x12-15", rest: "60s", weight: "Start: bez ciężaru", safe: "Bezpieczne!" },
                    { name: "Unoszenie nóg", sets: "3x15-20", rest: "45s", weight: "" },
                    { name: "Deska", sets: "3x30-60s", rest: "60s", weight: "Start: 20-30s", warning: "Jeśli boli plecy - pomiń" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min | ⚠️ Klatka 2x45s, szyja 2x30s!"
            },
            3: {
                name: "Górna część (Pull)",
                warmup: "10 min | ⚠️ Rozciągnij klatkę i szyję!",
                exercises: [
                    { name: "Wiosłowanie", sets: "3x8-12", rest: "90s", weight: "Start: 2x5kg", warning: "Głowa w linii z kręgosłupem!" },
                    { name: "Podciąganie do boku", sets: "3x10-12", rest: "90s", weight: "Start: 2x2.5-5kg" },
                    { name: "Unoszenie z przodu", sets: "3x10-12", rest: "60s", weight: "Start: 2x2.5-5kg" },
                    { name: "Wiosłowanie jednorącz", sets: "3x10-12", rest: "60s", weight: "Start: 1x5kg" },
                    { name: "Martwy ciąg lekki", sets: "3x8-10", rest: "90s", weight: "Start: 2x5kg", warning: "Jeśli boli plecy - POMIŃ" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min | ⚠️ Klatka 2x45s, szyja 2x30s, ćwiczenie przy ścianie!"
            },
            4: {
                name: "Full Body",
                warmup: "10 min",
                exercises: [
                    { name: "Martwy ciąg RDL", sets: "3x8-10", rest: "90s", weight: "" },
                    { name: "Wyciskanie nad głową", sets: "3x8-12", rest: "90s", weight: "" },
                    { name: "Wiosłowanie", sets: "3x8-12", rest: "90s", weight: "" },
                    { name: "Hip thrust", sets: "3x12-15", rest: "60s", weight: "" },
                    { name: "Deska", sets: "3x30-60s", rest: "60s", weight: "" },
                    { name: "Unoszenie nóg", sets: "3x15-20", rest: "45s", weight: "" }
                ],
                cardio: "10 min - Marsz w miejscu",
                stretching: "5 min | ⚠️ Klatka 2x45s, szyja 2x30s, ćwiczenie przy ścianie!"
            }
        }
    }
};

// Słowniczek ćwiczeń - szczegółowe opisy (skrócona wersja)
const exerciseDictionary = {
    "Wyciskanie hantli": {
        title: "WYCISKANIE HANTLI NA ŁAWCE/ŁÓŻKU (lub bez ławki - rozwiązania)",
        description: "Ćwiczenie trenuje klatkę piersiową (mięśnie piersiowe). Podobne do pompek, ale leżąc z hantlami. WAŻNE: Łokcie muszą być poniżej ciała dla pełnego zakresu ruchu!",
        howTo: [
            "OPCJA A: Użyj poduszek/koców (NAJŁATWIEJSZE) ⭐",
            "• Przygotowanie: Weź 2-3 grube poduszki lub złożone koce, ułóż na podłodze (jedna na drugiej), wysokość 15-25 cm, sprawdź stabilność",
            "• Pozycja: Połóż się na plecach na poduszkach, głowa i górna część pleców na poduszkach, dolna część pleców i biodra na podłodze, nogi zgięte w kolanach, stopy na podłodze",
            "• Weź hantle w obie ręce, unieś nad klatkę piersiową, ramiona wyprostowane (ale lekko ugięte w łokciach), dłonie skierowane do przodu",
            "• Ruch w dół: POWOLI opuszczaj hantle na boki, zegnij ręce w łokciach, opuszczaj do momentu gdy łokcie są poniżej poziomu ciała (WAŻNE!), poczuj rozciąganie w klatce, NIE opuszczaj zbyt nisko - zatrzymaj się gdy ramiona są równolegle do podłogi",
            "• Ruch w górę: POWOLI podnoś hantle z powrotem do góry, wyprostuj ręce (ale nie do końca - zostaw lekko ugięte), wydech przy podnoszeniu",
            "",
            "OPCJA B: Użyj dwóch krzeseł",
            "• Przygotowanie: Weź dwa stabilne krzesła, ustaw równolegle (oparcia do siebie), odległość na szerokość barków, sprawdź stabilność",
            "• Pozycja: Połóż się na plecach między krzesłami, głowa i górna część pleców na oparciach krzeseł, dolna część pleców i biodra między krzesłami (na podłodze lub poduszkach), nogi zgięte w kolanach",
            "• Ruch: Tak samo jak w Opcji A",
            "",
            "OPCJA C: Użyj łóżka (jeśli masz twarde łóżko)",
            "• Przygotowanie: Jeśli masz twarde łóżko (nie za miękkie), możesz użyć go jako ławki, sprawdź czy jest stabilne i nie zapada się",
            "• Pozycja: Połóż się na plecach na łóżku, głowa i górna część pleców na łóżku, nogi zgięte w kolanach (stopy na podłodze lub na łóżku)",
            "• Ruch: Tak samo jak w Opcji A",
            "",
            "OPCJA D: Na podłodze (jeśli nie masz nic innego)",
            "• UWAGA: Na podłodze łokcie NIE będą poniżej ciała, więc zakres ruchu jest ograniczony",
            "• To nie jest idealne, ale lepsze niż nic",
            "• Połóż się na plecach, zgięte nogi, opuszczaj hantle na boki (zatrzymaj się gdy ramiona są równolegle do podłogi)"
        ],
        muscles: "Główne: Klatka piersiowa (mięśnie piersiowe większe). Pomocnicze: Tricepsy (tył ramion), przednie części barków",
        mistakes: [
            "Opuszczanie zbyt nisko (może uszkodzić barki)",
            "Szarpanie hantlami (kontrolowane ruchy!)",
            "Zbyt szybkie ruchy (powoli w dół, powoli w górę)",
            "Wyginanie pleców (trzymaj plecy stabilnie)",
            "Niestabilne podparcie (sprawdź czy poduszki/krzesła są stabilne!)"
        ],
        notes: "NAJLEPSZE: Opcja A (poduszki/kocyki) - łatwe, bezpieczne, skuteczne. Zacznij od lżejszych hantli (10-15kg łącznie). Sprawdź stabilność przed rozpoczęciem. Poproś asekuranta o obserwację techniki. Jeśli nie masz nic, użyj Opcji D (podłoga) - lepsze niż nic!"
    },
    "Wyciskanie nad głową": {
        title: "WYCISKANIE NAD GŁOWĄ",
        description: "Ćwiczenie trenuje barki. Podnosisz hantle nad głowę.",
        howTo: [
            "Usiądź na krześle/ławce z oparciem (ZALECANE - bezpieczniejsze)",
            "Weź hantle w obie ręce, unieś na wysokość barków",
            "Dłonie skierowane do przodu, łokcie skierowane w dół (nie na boki!)",
            "POWOLI podnoś hantle nad głowę (ruch prosto w górę)",
            "POWOLI opuszczaj z powrotem do barków"
        ],
        muscles: "Barki (główne), tricepsy (pomocnicze)",
        mistakes: [
            "Łokcie na boki (powinny być skierowane w dół)",
            "Zbyt szeroki chwyt",
            "Szarpanie",
            "Wyginanie pleców"
        ],
        notes: "Siedząc jest bezpieczniejsze dla pleców. Zacznij od lżejszych hantli."
    },
    "Rozpiętki": {
        title: "ROZPIĘTKI Z HANTLAMI (na ławce/podłodze)",
        description: "Ćwiczenie rozciąga i wzmacnia klatkę piersiową. Ruch podobny do przytulania, ale z hantlami. Bardziej izolowane niż wyciskanie (trenuje głównie klatkę).",
        howTo: [
            "Pozycja startowa",
            "• Połóż się na plecach (na ławce, łóżku lub podłodze)",
            "• Jeśli na podłodze, zegnij nogi w kolanach",
            "• Weź hantle w obie ręce",
            "• Unieś hantle nad klatkę piersiową",
            "• Ręce lekko ugięte w łokciach (nie wyprostowane!)",
            "• Dłonie skierowane do siebie",
            "",
            "Ruch na boki",
            "• POWOLI rozłóż ręce na boki",
            "• Ruch jak przytulanie, ale w odwrotną stronę",
            "• Opuszczaj do momentu, gdy poczujesz rozciąganie w klatce",
            "• NIE opuszczaj zbyt nisko - zatrzymaj się gdy ramiona są równolegle do podłogi",
            "",
            "Ruch z powrotem",
            "• POWOLI złącz ręce z powrotem nad klatką",
            "• Jakbyś przytulał dużą piłkę",
            "• Wydech przy zamykaniu",
            "",
            "Powtórzenie: To jedno powtórzenie. Zrób 10-15 takich powtórzeń."
        ],
        muscles: "Główne: Klatka piersiowa (mięśnie piersiowe). Pomocnicze: Przednie części barków",
        mistakes: [
            "Wyprostowane ręce (powinny być lekko ugięte!)",
            "Opuszczanie zbyt nisko (może uszkodzić barki)",
            "Zbyt szybkie ruchy",
            "Szarpanie"
        ],
        notes: "Użyj lżejszych hantli niż przy wyciskaniu (5-10kg łącznie). Ręce ZAWSZE lekko ugięte!"
    },
    "Biceps": {
        title: "UGINANIE RAMION Z HANTLAMI (BICEPS)",
        description: "Ćwiczenie trenuje bicepsy (przednia część ramion). Podnosisz hantle zginając ręce w łokciach.",
        howTo: [
            "Stań prosto (lub usiądź), stopy na szerokość bioder",
            "Weź hantle w obie ręce, ręce wyprostowane wzdłuż tułowia",
            "POWOLI zginaj ręce w łokciach, podnoś hantle do barków",
            "NIE ruszaj ramionami - tylko przedramiona!",
            "Trzymaj łokcie przy tułowiu (nie odsuwaj na boki)",
            "POWOLI opuszczaj hantle z powrotem"
        ],
        muscles: "Bicepsy (główne), przedramiona (pomocnicze)",
        mistakes: [
            "Ruszanie ramionami (tylko przedramiona!)",
            "Odsuwanie łokci na boki",
            "Szarpanie",
            "Zbyt szybkie ruchy"
        ],
        notes: "Zacznij od lżejszych hantli. Możesz robić na siedząco (łatwiej kontrolować)."
    },
    "Triceps (francuskie)": {
        title: "WYCISKANIE FRANCUSKIE Z HANTLAMI (TRICEPS)",
        description: "Ćwiczenie trenuje tricepsy (tył ramion). Podnosisz hantle zginając ręce za głową.",
        howTo: [
            "Usiądź na krześle/ławce z oparciem (ZALECANE)",
            "Weź jedną hantlę w obie ręce (lub dwie osobno)",
            "Unieś hantlę nad głowę, ręce wyprostowane",
            "Łokcie skierowane do przodu (nie na boki!)",
            "POWOLI zginaj ręce w łokciach, opuszczaj hantlę za głowę",
            "POWOLI prostuj ręce z powrotem nad głową"
        ],
        muscles: "Tricepsy (główne), przedramiona (pomocnicze)",
        mistakes: [
            "Łokcie na boki (powinny być do przodu!)",
            "Zbyt szybkie ruchy",
            "Szarpanie",
            "Opuszczanie zbyt nisko"
        ],
        notes: "Zacznij od lżejszych hantli. Siedząc jest bezpieczniejsze. Możesz użyć jednej hantli w obie ręce."
    },
    "Wiosłowanie": {
        title: "WIOSŁOWANIE Z HANTLAMI W OPADZIE TUŁOWIA",
        description: "Ćwiczenie trenuje plecy. Ruch jak wiosłowanie w łódce, ale z hantlami.",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce",
            "Delikatnie pochyl się do przodu (tylko do 45 stopni - nie zbyt nisko!)",
            "WAŻNE: Plecy proste (nie zaokrąglone!), kolana lekko ugięte",
            "POWOLI podnoś hantle do tułowia, zginając ręce w łokciach",
            "Łokcie blisko tułowia (nie na boki!)",
            "POWOLI opuszczaj hantle z powrotem"
        ],
        muscles: "Plecy (główne), bicepsy, tylne części barków (pomocnicze)",
        mistakes: [
            "Zaokrąglone plecy (ZAWSZE proste!)",
            "Zbyt głęboki opad (tylko 45 stopni)",
            "Łokcie na boki",
            "Szarpanie"
        ],
        notes: "Nie schylaj się zbyt nisko (bezpieczne dla stawu skokowego!). Jeśli boli plecy, zmniejsz opad tułowia."
    },
    "Podciąganie do boku": {
        title: "PODCIĄGANIE HANTLI DO BOKU (BARKI)",
        description: "Ćwiczenie trenuje barki (boczne części). Podnosisz hantle na boki.",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce, ręce wyprostowane wzdłuż tułowia",
            "Dłonie skierowane do siebie",
            "POWOLI podnoś hantle na boki",
            "Ręce wyprostowane (ale lekko ugięte w łokciach)",
            "Podnoś do momentu, gdy ramiona są równolegle do podłogi",
            "NIE podnoś zbyt wysoko - zatrzymaj się na wysokości barków",
            "POWOLI opuszczaj hantle z powrotem"
        ],
        muscles: "Barki - boczne części (główne), przedramiona (pomocnicze)",
        mistakes: [
            "Podnoszenie zbyt wysoko (tylko do barków!)",
            "Szarpanie",
            "Ruszanie tułowiem (tylko ręce!)",
            "Zbyt szybkie ruchy"
        ],
        notes: "Zacznij od lżejszych hantli. To ćwiczenie może być trudne na początku - to normalne!"
    },
    "Unoszenie z przodu": {
        title: "UNOSZENIE HANTLI Z PRZODU (BARKI)",
        description: "Ćwiczenie trenuje przednie części barków. Podnosisz hantle przed sobą.",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce, ręce wyprostowane przed sobą",
            "Dłonie skierowane do siebie",
            "POWOLI podnoś hantle przed sobą",
            "Ręce wyprostowane (ale lekko ugięte w łokciach)",
            "Podnoś do momentu, gdy ramiona są równolegle do podłogi",
            "NIE podnoś zbyt wysoko - zatrzymaj się na wysokości barków",
            "POWOLI opuszczaj hantle z powrotem"
        ],
        muscles: "Barki - przednie części (główne), przedramiona (pomocnicze)",
        mistakes: [
            "Podnoszenie zbyt wysoko (tylko do barków!)",
            "Szarpanie",
            "Ruszanie tułowiem (tylko ręce!)",
            "Zbyt szybkie ruchy"
        ],
        notes: "Zacznij od lżejszych hantli. Możesz robić jedną ręką na raz (łatwiej kontrolować)."
    },
    "Wiosłowanie jednorącz": {
        title: "WIOSŁOWANIE JEDNORĄCZ Z HANTLAMI",
        description: "Ćwiczenie trenuje plecy (jedna strona na raz). Podobne do wiosłowania oburącz, ale bardziej izolowane.",
        howTo: [
            "Stań obok ławki/krzesła",
            "Oprzyj jedną rękę i kolano na ławce (dla równowagi)",
            "Druga noga na podłodze",
            "Weź hantlę w wolną rękę",
            "Delikatnie pochyl się (plecy proste!)",
            "POWOLI podnoś hantlę do tułowia, zginając rękę w łokciu",
            "Łokieć blisko tułowia (nie na bok!)",
            "POWOLI opuszczaj hantlę z powrotem",
            "Zrób 10-12 powtórzeń na jedną rękę, potem zmień stronę"
        ],
        muscles: "Plecy - jedna strona (główne), biceps, tylna część barku (pomocnicze)",
        mistakes: [
            "Zaokrąglone plecy (ZAWSZE proste!)",
            "Łokieć na bok",
            "Szarpanie",
            "Zbyt głęboki opad"
        ],
        notes: "Nie schylaj się zbyt nisko (bezpieczne dla stawu skokowego!). Jeśli nie masz ławki, możesz oprzeć się o ścianę/krzesło."
    },
    "Martwy ciąg lekki": {
        title: "MARTWY CIĄG Z HANTLAMI (lekki, dla pleców)",
        description: "Ćwiczenie trenuje plecy i tył nóg. Podnosisz hantle z podłogi (ale płytko!). WAŻNE: Płytki zakres - nie schylaj się zbyt nisko!",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce, hantle przed sobą na wysokości ud",
            "POWOLI pochyl się do przodu",
            "TYLKO do 30-45 stopni - nie schylaj się zbyt nisko!",
            "Plecy proste (nie zaokrąglone!), kolana lekko ugięte",
            "Hantle opuszczaj wzdłuż nóg",
            "ZATRZYMAJ SIĘ gdy poczujesz rozciąganie w plecach/tylnych udach",
            "NIE schodź niżej!",
            "POWOLI wróć do pozycji wyprostowanej"
        ],
        muscles: "Plecy, tylne części ud (główne), pośladki (pomocnicze)",
        mistakes: [
            "Zaokrąglone plecy (ZAWSZE proste!)",
            "Zbyt głęboki opad (tylko 30-45 stopni!)",
            "Szarpanie",
            "Wyprostowane kolana (lekko ugięte!)"
        ],
        notes: "BARDZO WAŻNE: Płytki zakres - nie schylaj się zbyt nisko! Jeśli boli plecy lub staw skokowy, zmniejsz zakres jeszcze bardziej. Jeśli boli, możesz pominąć to ćwiczenie."
    },
    "Martwy ciąg RDL": {
        title: "MARTWY CIĄG RUMUŃSKI Z HANTLAMI (RDL)",
        description: "Ćwiczenie trenuje tylne części ud i pośladki. Podobne do martwego ciągu, ale bardziej skupia się na tyłach ud. WAŻNE: Bez głębokiego przysiadu - bezpieczne dla kolana!",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce, hantle przed sobą na wysokości ud",
            "Kolana lekko ugięte (nie wyprostowane!)",
            "POWOLI pochyl się do przodu",
            "TYLKO do 30-45 stopni - nie schylaj się zbyt nisko!",
            "Plecy proste (nie zaokrąglone!), kolana lekko ugięte (nie prostuj!)",
            "Hantle opuszczaj wzdłuż nóg",
            "ZATRZYMAJ SIĘ gdy poczujesz napięcie w tylnej części ud",
            "NIE schodź niżej!",
            "POWOLI wróć do pozycji wyprostowanej"
        ],
        muscles: "Tylne części ud, pośladki (główne), plecy - dolna część (pomocnicze)",
        mistakes: [
            "Zaokrąglone plecy (ZAWSZE proste!)",
            "Zbyt głęboki opad (tylko 30-45 stopni!)",
            "Wyprostowane kolana (lekko ugięte!)",
            "Szarpanie"
        ],
        notes: "BARDZO WAŻNE: Nie schodź zbyt nisko - zatrzymaj się gdy czujesz napięcie! Szczególnie delikatnie na lewe kolano - jeśli boli, zmniejsz zakres lub pomiń. Jeśli boli kolano, możesz pominąć to ćwiczenie."
    },
    "Wykroki": {
        title: "WYKROKI Z HANTLAMI (płytkie, bezpieczne dla kolana)",
        description: "Ćwiczenie trenuje uda i pośladki. Robisz krok do przodu i wracasz. WAŻNE: Płytkie wykroki - bez głębokiego zgięcia kolana!",
        howTo: [
            "Stań prosto, stopy na szerokość bioder",
            "Weź hantle w obie ręce (lub trzymaj przy tułowiu) - możesz zacząć bez ciężaru",
            "POWOLI zrób krok do przodu jedną nogą",
            "KRÓTKI krok - nie za daleko!",
            "PŁYTKIE zgięcie - obie nogi lekko ugięte",
            "NIE schodź zbyt nisko! - zatrzymaj się gdy obie nogi są lekko ugięte",
            "WAŻNE: Przednie kolano NIE powinno być zbyt zgięte!",
            "POWOLI wróć do pozycji startowej, cofnij nogę",
            "Zrób 10-12 powtórzeń na jedną nogę, potem zmień nogę"
        ],
        muscles: "Uda - przednie części, pośladki (główne), tylne części ud (pomocnicze)",
        mistakes: [
            "Zbyt głębokie zgięcie kolana (płytkie!)",
            "Zbyt długi krok (krótki!)",
            "Kolano przed stopą (kolano nad stopą!)",
            "Szarpanie"
        ],
        notes: "BARDZO WAŻNE: Krótki wykrok, płytkie zgięcie - nie obciążaj zbyt mocno lewego kolana! Szczególnie delikatnie na lewą nogę - jeśli boli, zmniejsz zakres lub pomiń. Możesz robić bez hantli na początku. Jeśli boli kolano, możesz pominąć to ćwiczenie."
    },
    "Hip thrust": {
        title: "UNOSZENIE BIODER (HIP THRUST) Z HANTLAMI",
        description: "Ćwiczenie trenuje pośladki i tył ud. Podnosisz biodra z podłogi. Bezpieczne dla kolana! - kolana nie są zginane zbyt mocno.",
        howTo: [
            "Połóż się na plecach na podłodze",
            "Zegnij nogi w kolanach, stopy płasko na podłodze (na szerokość bioder)",
            "Ręce wzdłuż tułowia",
            "Połóż hantlę na brzuchu (lub trzymaj przy tułowiu) - możesz zacząć bez ciężaru",
            "POWOLI unieś biodra do góry",
            "Napnij pośladki (ściśnij)",
            "Unieś do momentu, gdy ciało tworzy linię prostą (od kolan do barków)",
            "NIE unoś zbyt wysoko! - tylko do linii prostej",
            "POWOLI opuszczaj biodra z powrotem",
            "Nie kładź całkowicie - zatrzymaj się tuż nad podłogą"
        ],
        muscles: "Pośladki (główne), tylne części ud, plecy - dolna część (pomocnicze)",
        mistakes: [
            "Unoszenie zbyt wysoko (tylko do linii prostej!)",
            "Zbyt szybkie ruchy",
            "Nie napinanie pośladków (ZAWSZE napnij!)",
            "Kładzenie całkowicie na podłogę (zatrzymaj tuż nad)"
        ],
        notes: "Bezpieczne dla kolana! - kolana nie są zginane zbyt mocno. Możesz robić bez hantli na początku. Jeśli masz hantlę, połóż ją na brzuchu. To świetne ćwiczenie - bezpieczne i skuteczne!"
    },
    "Unoszenie nóg": {
        title: "UNOSZENIE NÓG W LEŻENIU (BRZUCH)",
        description: "Ćwiczenie trenuje brzuch (dolne partie). Podnosisz nogi leżąc na plecach. Bezpieczne dla pleców (jeśli robisz prawidłowo).",
        howTo: [
            "Połóż się na plecach na podłodze",
            "Ręce wzdłuż tułowia (lub pod pośladkami dla wsparcia)",
            "Nogi wyprostowane (lub lekko ugięte)",
            "POWOLI unieś nogi do góry",
            "Napnij brzuch",
            "Unieś do momentu, gdy nogi są prostopadle do podłogi (lub lekko niżej)",
            "NIE unoś zbyt wysoko! - tylko do 90 stopni",
            "POWOLI opuszczaj nogi z powrotem",
            "NIE kładź całkowicie - zatrzymaj się tuż nad podłogą"
        ],
        muscles: "Brzuch - dolne partie (główne), górne partie brzucha (pomocnicze)",
        mistakes: [
            "Kładzenie nóg całkowicie (zatrzymaj tuż nad podłogą!)",
            "Zbyt szybkie ruchy",
            "Nie napinanie brzucha (ZAWSZE napnij!)",
            "Wyginanie pleców (trzymaj plecy przy podłodze)"
        ],
        notes: "Możesz robić z lekko ugiętymi nogami (łatwiej). Jeśli boli plecy, połóż ręce pod pośladkami. Zacznij od mniejszej liczby powtórzeń (10-15)."
    },
    "Deska": {
        title: "DESKA (PLANK)",
        description: "Ćwiczenie trenuje cały brzuch i core (środek ciała). Trzymasz pozycję jak w pompkach, ale na przedramionach. Bardzo skuteczne dla stabilności.",
        howTo: [
            "Połóż się na brzuchu",
            "Oprzyj się na przedramionach (łokcie pod barkami)",
            "Dłonie na podłodze (lub zaciśnięte w pięści)",
            "Unieś ciało - opierasz się na przedramionach i palcach stóp",
            "Ciało w linii prostej (od głowy do stóp)",
            "Napnij brzuch - jakbyś chciał wciągnąć pępek",
            "Napnij pośladki - ściśnij",
            "Trzymaj plecy proste - nie wyginaj w dół ani w górę!",
            "Oddychaj spokojnie - wdech nosem, wydech ustami",
            "Trzymaj 30-60 sekund",
            "POWOLI opuść się na podłogę"
        ],
        muscles: "Brzuch - cały, core (główne), plecy, barki, pośladki (pomocnicze)",
        mistakes: [
            "Wyginanie pleców w dół (proste!)",
            "Unoszenie bioder zbyt wysoko (linia prosta!)",
            "Wstrzymywanie oddechu (oddychaj!)",
            "Zbyt długie trzymanie na początku (zacznij od 20-30 sekund)"
        ],
        notes: "Zacznij od krótszego czasu (20-30 sekund). Możesz robić na kolanach (łatwiejsza wersja) - oprzyj się na kolanach zamiast palców stóp. Jeśli boli staw skokowy, możesz oprzeć się na kolanach. To świetne ćwiczenie - bezpieczne i skuteczne!"
    }
};

// Słowniczek rozgrzewki i rozciągania
const warmupDictionary = {
    "Rozgrzewka": {
        title: "🔥 ROZGRZEWKA - Szczegółowy Plan (10 minut)",
        why: "Zapobiega kontuzjom (szczególnie przy Twoich ograniczeniach!), przygotowuje mięśnie i stawy do pracy, poprawia wyniki treningu o 30-40%. OBOWIĄZKOWE przed każdym treningiem!",
        parts: [
            {
                name: "Część 1: Aktywacja krążeniowa (2-3 minuty)",
                exercises: [
                    "Spacer w miejscu - 1 minuta (tempo umiarkowane, podnoszenie kolan, UWAGA: Nie skacz, tylko maszeruj - bezpieczne dla stawu skokowego)",
                    "Marsz z wymachami ramion - 1 minuta (maszeruj w miejscu, wymachuj ramionami do przodu i tyłu, intensywność lekka)"
                ]
            },
            {
                name: "Część 2: Mobilizacja stawów (3-4 minuty)",
                exercises: [
                    "A. Górna część ciała:",
                    "• Krążenia ramion (do przodu) - 2x20 każde ramię osobno (stań prosto, kręć ramieniem w pełnym zakresie, tempo wolne)",
                    "• Krążenia ramion (do tyłu) - 2x20 każde ramię (to samo, ale w przeciwną stronę)",
                    "• Krążenia ramion (oba jednocześnie) - 2x15 do przodu i do tyłu (oba ramiona razem, szerokie kręgi)",
                    "• Rotacje tułowia - 2x10 w każdą stronę (stopy na szerokość bioder, ręce na biodrach, skręty tułowia, UWAGA: Nie skręcaj zbyt mocno)",
                    "• Wymachy ramion (bokiem) - 2x15 (ramiona wyprostowane, wymachy na boki jak skrzydła)",
                    "",
                    "B. Dolna część ciała (tylko dla treningów nóg):",
                    "• Krążenia bioder - 2x15 w każdą stronę (ręce na biodrach, kręcenie biodrami w kółko, UWAGA: Płynne ruchy, bez szarpania)",
                    "• Wymachy nogą do przodu (bez obciążenia) - 2x10 każda noga (trzymaj się czegoś dla równowagi, wymachuj nogą do przodu, UWAGA: Krótki zakres, nie podnoś zbyt wysoko - bezpieczne dla kolana)",
                    "• Wymachy nogą do boku - 2x10 każda noga (wymach nogą na bok, trzymaj się dla równowagi)"
                ]
            },
            {
                name: "Część 3: Dynamiczne rozciąganie (2-3 minuty)",
                exercises: [
                    "A. Dla treningów górnej części ciała:",
                    "• Rozciąganie klatki piersiowej (w drzwiach/przy ścianie) - 2x30 sekund (oprzyj przedramię o framugę/ścianę, delikatnie skręć tułów, poczuj rozciąganie, UWAGA: Nie szarp)",
                    "• Rozciąganie tricepsów - 2x20 sekund każde ramię (zegnij ramię, dłoń za głową, drugą ręką pociągnij za łokieć)",
                    "• Rozciąganie barków (przez klatkę) - 2x20 sekund każde ramię (wyprostuj ramię przed sobą, drugą ręką pociągnij za łokieć w kierunku klatki)",
                    "",
                    "B. Dla treningów dolnej części ciała:",
                    "• Rozciąganie mięśni czworogłowych (stojąc) - 2x30 sekund każda noga (stań na jednej nodze, trzymaj się dla równowagi, zegnij drugą nogę, chwyć za stopę, delikatnie pociągnij do pośladka, UWAGA: Nie ciągnij zbyt mocno, szczególnie lewa noga - kolano!)",
                    "• Rozciąganie mięśni tylnych uda (stojąc) - 2x30 sekund każda noga (postaw jedną nogę na podwyższeniu - krzesło, łóżko, delikatnie pochyl się do przodu, UWAGA: Nie schylaj się zbyt nisko - bezpieczne dla kolana)",
                    "• Rozciąganie pośladków (siedząc) - 2x30 sekund każda strona (jedna noga zgięta, stopa na kolanie drugiej nogi, delikatnie pociągnij kolano do klatki)"
                ]
            },
            {
                name: "Część 4: Aktywacja mięśni (1-2 minuty)",
                exercises: [
                    "Dla treningów górnej części:",
                    "• Pompki na kolanach (lekko) - 1x10-15 (tylko rozgrzewka, nie do zmęczenia!)",
                    "• Lekkie wymachy hantlami - weź lekkie hantle (5-10kg), wykonaj 10-15 wymachów przed sobą",
                    "",
                    "Dla treningów dolnej części:",
                    "• Unoszenie bioder (bez ciężaru) - 1x15 (tylko rozgrzewka)",
                    "• Lekkie wykroki (bez ciężaru) - 1x5 każda noga (UWAGA: Płytkie, bez głębokiego zgięcia!)"
                ]
            }
        ],
        summary: "Aktywacja krążeniowa: 2-3 min | Mobilizacja stawów: 3-4 min | Dynamiczne rozciąganie: 2-3 min | Aktywacja mięśni: 1-2 min | RAZEM: ~10 minut",
        notes: "Rozgrzewka zmniejsza ryzyko kontuzji o 30-50%. Zawsze przed treningiem, nawet jeśli się spieszy. Szczególnie ważne przy Twoich ograniczeniach zdrowotnych!"
    }
};

const cardioDictionary = {
    "Cardio": {
        title: "🏠 CARDIO W DOMU - Szczegółowy Plan (bez sprzętu, bez wychodzenia)",
        why: "Spalanie kalorii bez wychodzenia z domu. Wszystkie ćwiczenia bezpieczne dla stawu skokowego i kolana. Nie wymagają żadnego sprzętu. Możesz robić w małym pomieszczeniu.",
        exercises: [
            {
                name: "1. MARSZ W MIEJSCU (NAJŁATWIEJSZE) ⭐",
                description: "Maszerujesz w miejscu, podnosząc kolana. Bezpieczne dla stawu skokowego (nie skaczesz!).",
                howTo: [
                    "Stań prosto, stopy na szerokość bioder",
                    "POWOLI podnoś kolana (naprzemiennie - lewa, prawa, lewa, prawa)",
                    "Ręce wymachuj naturalnie (jak przy chodzeniu)",
                    "NIE skacz! - tylko podnoś kolana",
                    "Tempo: Umiarkowane (możesz rozmawiać, ale z lekką zadyszką)"
                ],
                time: "5-10 minut ciągłego marszu",
                intensity: "Umiarkowana (60-70% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego! Możesz robić w małym pomieszczeniu. Zacznij od 5 minut, zwiększaj do 10-15 minut."
            },
            {
                name: "2. MARSZ Z WYMACHEM RAMION",
                description: "Marsz w miejscu + intensywniejsze wymachy ramion. Więcej spalania kalorii niż zwykły marsz.",
                howTo: [
                    "Stań prosto, stopy na szerokość bioder",
                    "Podnoś kolana (naprzemiennie)",
                    "Intensywnie wymachuj ramionami: gdy podnosisz lewe kolano, wymachuj prawym ramieniem do góry",
                    "Tempo: Szybsze niż zwykły marsz"
                ],
                time: "5-10 minut",
                intensity: "Umiarkowana do wyższej (70-80% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego! Więcej spalania kalorii. Trenuje też górną część ciała."
            },
            {
                name: "3. MARSZ Z PODNOSZENIEM KOLAN (WYSOKIE KOLANA)",
                description: "Marsz w miejscu, ale podnosisz kolana wyżej. Więcej intensywności, ale nadal bezpieczne.",
                howTo: [
                    "Stań prosto",
                    "Podnoś kolana wyżej (do wysokości bioder lub wyżej)",
                    "Ręce wymachuj naturalnie",
                    "NIE skacz! - tylko podnoś kolana wyżej",
                    "Tempo: Umiarkowane do szybszego"
                ],
                time: "3-5 minut (możesz robić na przemian z zwykłym marszem)",
                intensity: "Wyższa (75-85% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego! Jeśli boli kolano, zmniejsz wysokość podnoszenia. Możesz robić na przemian: 1 minuta wysokie kolana, 2 minuty zwykły marsz."
            },
            {
                name: "4. MARSZ Z WYKROKAMI W MIEJSCU (PŁYTKIE)",
                description: "Robisz wykroki w miejscu (ale płytkie - bezpieczne dla kolana!). Więcej intensywności, trenuje też nogi.",
                howTo: [
                    "Stań prosto",
                    "PŁYTKI wykrok do przodu jedną nogą (krótki krok!)",
                    "Wróć do pozycji startowej",
                    "Zmień nogę",
                    "WAŻNE: Płytkie wykroki - nie schodź zbyt nisko!",
                    "Tempo: Wolne do umiarkowanego"
                ],
                time: "3-5 minut (możesz robić na przemian z marszem)",
                intensity: "Umiarkowana do wyższej (70-80% maksymalnego tętna)",
                notes: "BARDZO WAŻNE: Płytkie wykroki - nie obciążaj zbyt mocno lewego kolana! Jeśli boli kolano, pomiń to ćwiczenie. Możesz robić na przemian: 30 sekund wykroki, 2 minuty marsz."
            },
            {
                name: "5. MARSZ Z PODNOSZENIEM NÓG DO TYŁU (KICKBACKS)",
                description: "Marsz w miejscu, ale podnosisz nogi do tyłu (do pośladków). Trenuje tył nóg i pośladki.",
                howTo: [
                    "Stań prosto",
                    "Podnoś jedną nogę do tyłu (do pośladka)",
                    "Zmień nogę",
                    "Ręce wymachuj naturalnie",
                    "NIE skacz! - tylko podnoś nogi do tyłu",
                    "Tempo: Umiarkowane"
                ],
                time: "3-5 minut",
                intensity: "Umiarkowana (65-75% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego i kolana! Trenuje tył nóg i pośladki. Możesz robić na przemian z marszem."
            },
            {
                name: "6. MARSZ Z PODNOSZENIEM NÓG NA BOKI",
                description: "Marsz w miejscu, ale podnosisz nogi na boki. Trenuje boczne części nóg.",
                howTo: [
                    "Stań prosto",
                    "Podnoś jedną nogę na bok (nie za wysoko!)",
                    "Zmień nogę",
                    "Ręce wymachuj naturalnie",
                    "NIE skacz! - tylko podnoś nogi na boki",
                    "Tempo: Wolne do umiarkowanego"
                ],
                time: "3-5 minut",
                intensity: "Umiarkowana (65-75% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego i kolana! Jeśli boli kolano, zmniejsz zakres lub pomiń. Możesz robić na przemian z marszem."
            },
            {
                name: "7. MARSZ Z ROTACJAMI TUŁOWIA",
                description: "Marsz w miejscu + skręty tułowia. Trenuje całe ciało, więcej spalania kalorii.",
                howTo: [
                    "Stań prosto",
                    "Maszeruj w miejscu",
                    "Delikatnie skręcaj tułów w lewo i prawo (naprzemiennie)",
                    "Ręce wymachuj naturalnie",
                    "Tempo: Umiarkowane"
                ],
                time: "3-5 minut",
                intensity: "Umiarkowana (65-75% maksymalnego tętna)",
                notes: "Bezpieczne dla stawu skokowego! Trenuje całe ciało. UWAGA: Nie skręcaj zbyt mocno - tylko delikatnie!"
            }
        ],
        plans: [
            {
                name: "Wersja Podstawowa (10 minut)",
                exercises: [
                    "Marsz w miejscu: 5 minut",
                    "Marsz z wymachem ramion: 3 minuty",
                    "Marsz w miejscu (schłodzenie): 2 minuty"
                ]
            },
            {
                name: "Wersja Średnia (15 minut)",
                exercises: [
                    "Marsz w miejscu: 3 minuty (rozgrzewka)",
                    "Marsz z wymachem ramion: 4 minuty",
                    "Marsz z wysokimi kolanami: 2 minuty (na przemian: 30s wysokie, 1min zwykły)",
                    "Marsz z podnoszeniem nóg do tyłu: 3 minuty",
                    "Marsz w miejscu (schłodzenie): 3 minuty"
                ]
            },
            {
                name: "Wersja Zaawansowana (20-30 minut)",
                exercises: [
                    "Marsz w miejscu: 2 minuty (rozgrzewka)",
                    "Marsz z wymachem ramion: 5 minut",
                    "Marsz z wysokimi kolanami: 4 minuty (na przemian: 1min wysokie, 1min zwykły)",
                    "Marsz z wykrokami (płytkie): 3 minuty (tylko jeśli kolano nie boli!)",
                    "Marsz z podnoszeniem nóg do tyłu: 3 minuty",
                    "Marsz z rotacjami tułowia: 3 minuty",
                    "Marsz w miejscu (schłodzenie): 3-5 minut"
                ]
            }
        ],
        notes: "Wszystkie ćwiczenia bezpieczne dla stawu skokowego i kolana. Nie wymagają żadnego sprzętu. Możesz robić w małym pomieszczeniu. Zacznij od wersji podstawowej (10 min), stopniowo zwiększaj czas."
    }
};

const stretchingDictionary = {
    "Rozciąganie": {
        title: "🧘 ROZCIĄGANIE - Szczegółowy Plan (5 minut)",
        why: "Szybsza regeneracja (mniej bólu następnego dnia), zachowanie elastyczności, redukcja napięcia mięśniowego, lepszy sen. OBOWIĄZKOWE po każdym treningu!",
        parts: [
            {
                name: "Część 1: Rozciąganie górnej części ciała (2 minuty)",
                exercises: [
                    "Rozciąganie klatki piersiowej (w drzwiach/przy ścianie) - 2x30 sekund każda strona (oprzyj przedramię o framugę/ścianę, delikatnie skręć tułów, oddychaj spokojnie, UWAGA: Nie szarp, trzymaj 30 sekund)",
                    "Rozciąganie tricepsów - 2x30 sekund każde ramię (zegnij ramię, dłoń za głową, drugą ręką pociągnij za łokieć, oddychaj spokojnie)",
                    "Rozciąganie bicepsów - 2x30 sekund każde ramię (wyprostuj ramię przed sobą, drugą ręką pociągnij za palce w dół, UWAGA: Delikatnie, nie szarp)",
                    "Rozciąganie pleców (skłon) - 1x30 sekund (stań prosto, delikatnie pochyl się do przodu tylko do momentu rozciągania, UWAGA: Nie schylaj się zbyt nisko - bezpieczne dla stawu skokowego i kolana)",
                    "Rozciąganie barków (przez klatkę) - 2x30 sekund każde ramię (wyprostuj ramię przed sobą, drugą ręką pociągnij za łokieć w kierunku klatki)"
                ]
            },
            {
                name: "Część 2: Rozciąganie dolnej części ciała (2 minuty)",
                exercises: [
                    "Rozciąganie mięśni czworogłowych (stojąc) - 2x30 sekund każda noga (stań na jednej nodze, trzymaj się dla równowagi, zegnij drugą nogę, chwyć za stopę, delikatnie pociągnij do pośladka, UWAGA: Szczególnie delikatnie na lewą nogę - kolano!)",
                    "Rozciąganie mięśni tylnych uda (stojąc) - 2x30 sekund każda noga (postaw jedną nogę na podwyższeniu max 30-40cm, delikatnie pochyl się do przodu, UWAGA: Nie schylaj się zbyt nisko - bezpieczne dla kolana)",
                    "Rozciąganie pośladków (siedząc) - 2x30 sekund każda strona (jedna noga zgięta, stopa na kolanie drugiej nogi, delikatnie pociągnij kolano do klatki, UWAGA: Jeśli boli kolano, zmniejsz zakres)",
                    "Rozciąganie łydek (stojąc) - 2x30 sekund każda noga (stań w wykroku delikatnym, przenieś ciężar na przednią nogę, UWAGA: Szczególnie delikatnie na lewą nogę - staw skokowy!)"
                ]
            },
            {
                name: "Część 3: Rozciąganie brzucha i tułowia (1 minuta)",
                exercises: [
                    "Rozciąganie brzucha (leżąc na brzuchu) - 1x30 sekund (połóż się na brzuchu, oprzyj się na przedramionach, delikatnie unieś klatkę, UWAGA: Nie unoś zbyt wysoko)",
                    "Rotacje tułowia (siedząc) - 2x20 sekund każda strona (jedna noga zgięta, stopa za kolanem drugiej nogi, skręć tułów, oprzyj się ręką o kolano)"
                ]
            }
        ],
        summary: "Rozciąganie górnej części: 2 min | Rozciąganie dolnej części: 2 min | Rozciąganie brzucha i tułowia: 1 min | RAZEM: ~5 minut",
        rules: [
            "Nie szarp! - Wszystkie ruchy delikatne i kontrolowane",
            "Oddychaj! - Wdech nosem, wydech ustami, spokojnie",
            "Trzymaj 30 sekund - To optymalny czas na rozciąganie",
            "Słuchaj ciała - Jeśli boli, zmniejsz zakres lub pomiń",
            "Szczególnie delikatnie: Lewe kolano (ból przy przykucu), Lewy staw skokowy (zerwany więzozrost)",
            "Nie rozciągaj 'na siłę' - To nie powinno boleć, tylko delikatnie ciągnąć"
        ],
        notes: "Rozciąganie poprawia regenerację o 20-30%. Nawet 5 minut po treningu robi różnicę. Połączenie rozgrzewki i rozciągania = nawet 40% lepsze wyniki w treningu!"
    }
};

// Słowniczek terminów
const termDictionary = {
    "Bawoli garb": {
        title: "BAWOLI GARB (wdowi garb)",
        description: "Bawoli garb (zwany też 'wdowi garb') to nadmierne wygięcie kręgosłupa w odcinku szyjnym i górnym piersiowym, powodujące wysunięcie głowy do przodu i zaokrąglenie górnej części pleców.",
        causes: "Często spowodowany długotrwałym siedzeniem przy biurku, pracą przy komputerze, słabymi mięśniami pleców i szyi.",
        effects: "Może powodować bóle szyi, głowy, górnej części pleców, ograniczenie ruchomości.",
        exercises: [
            "Ćwiczenie przy ścianie - 30-60s, 2-3x dziennie",
            "Rozciąganie klatki piersiowej - 45s, 2-3x dziennie",
            "Rozciąganie szyi - 30s, 2-3x dziennie",
            "Wzmacnianie mięśni między łopatkami - 10-15 powtórzeń, 2-3x dziennie"
        ],
        notes: "WAŻNE: Zawsze utrzymuj prostą postawę podczas ćwiczeń - głowa w linii z kręgosłupem! Unikaj zaokrąglania pleców."
    },
    "RDL": {
        title: "RDL (Rumunian Deadlift)",
        description: "RDL to skrót od 'Rumunian Deadlift' (Rumuński Martwy Ciąg). To wariant martwego ciągu, który bardziej skupia się na tylnych częściach ud i pośladkach.",
        difference: "W przeciwieństwie do klasycznego martwego ciągu, RDL wykonuje się z mniejszym zgięciem kolan i większym pochyleniem tułowia, co bardziej angażuje tyły ud.",
        notes: "W Twoim planie RDL jest wykonywany z płytkim zakresem (tylko 30-45 stopni pochylenia) dla bezpieczeństwa kolan i stawu skokowego."
    },
    "Hip thrust": {
        title: "HIP THRUST",
        description: "Hip thrust to ćwiczenie polegające na unoszeniu bioder z podłogi w pozycji leżącej. Bardzo skuteczne dla wzmocnienia pośladków.",
        why: "To ćwiczenie jest bezpieczne dla kolan, ponieważ kolana nie są zginane zbyt mocno. Idealne dla osób z problemami kolanowymi."
    },
    "Francuskie": {
        title: "WYCISKANIE FRANCUSKIE",
        description: "Wyciskanie francuskie to ćwiczenie na tricepsy (tył ramion), wykonywane przez zginanie rąk za głową.",
        why: "Nazwa 'francuskie' pochodzi prawdopodobnie od francuskich kulturystów, którzy popularizowali to ćwiczenie."
    }
};

let currentPlan = 'sebus';
let currentDay = 1;

function addTermLinks(text) {
    if (!text) return text;
    let result = text;
    result = result.replace(/Bawoli garb/gi, (match) => {
        return `<span class="dictionary-link" onclick="showTermDetails('Bawoli garb')">${match}</span>`;
    });
    result = result.replace(/RDL/gi, (match) => {
        return `<span class="dictionary-link" onclick="showTermDetails('RDL')">${match}</span>`;
    });
    result = result.replace(/Hip thrust/gi, (match) => {
        return `<span class="dictionary-link" onclick="showTermDetails('Hip thrust')">${match}</span>`;
    });
    result = result.replace(/francuskie/gi, (match) => {
        return `<span class="dictionary-link" onclick="showTermDetails('Francuskie')">${match}</span>`;
    });
    return result;
}

function switchPlan(plan) {
    currentPlan = plan;
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if ((plan === 'sebus' && index === 0) || (plan === 'kobieta' && index === 1)) {
            tab.classList.add('active');
        }
    });
    
    // Zmień kolorystykę
    document.body.classList.remove('plan-sebus', 'plan-kobieta');
    if (plan === 'sebus') {
        document.body.classList.add('plan-sebus');
    } else {
        document.body.classList.add('plan-kobieta');
    }
    
    displayWorkout();
}

function selectDay(day) {
    currentDay = day;
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach((btn, index) => {
        btn.classList.remove('active');
        if (index === day - 1) {
            btn.classList.add('active');
        }
    });
    displayWorkout();
}

function displayWorkout() {
    const plan = trainingData[currentPlan];
    const day = plan.days[currentDay];
    const content = document.getElementById('workout-content');

    let html = `
        <div class="workout-section">
            <div class="section-title flex" style="cursor: pointer;" onclick="togglePlanInfo()">
                <span>ℹ️ Informacje o planie</span>
                <span id="plan-info-icon">▼</span>
            </div>
            <div id="plan-info-content" style="display: none;">
                <div class="info-box">
                    <strong>Cel:</strong> ${plan.goal}<br>
                    <strong>Sprzęt:</strong> ${plan.equipment}<br>
                    <strong>Ograniczenia:</strong> ${addTermLinks(plan.limitations)}<br>
                    <strong>UNIKAJ:</strong> ${plan.avoid}
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="section-title flex" style="cursor: pointer; font-size: 18px;" onclick="toggleSection('strategy')">
                        <span>🎯 Strategia Redukcji</span>
                        <span id="strategy-icon">▼</span>
                    </div>
                    <div id="strategy-content" style="display: none; margin-top: 10px;">
                        <div class="info-box">
                            <strong>1. Deficyt kaloryczny (najważniejsze!):</strong><br>
                            • Co to znaczy: Jesz mniej kalorii niż spalasz<br>
                            • Jak to działa: Redukcja 500-750 kcal dziennie = utrata 0.5-1 kg/tydzień<br>
                            • Realistyczny cel: ${plan.goal} przy regularności<br>
                            • Jak to osiągnąć: Jedz mniejsze porcje, unikaj słodyczy, jedz więcej warzyw, śledź kalorie przez pierwsze 2-3 tygodnie<br><br>
                            
                            <strong>2. Trening siłowy (zachowanie masy mięśniowej):</strong><br>
                            • Częstotliwość: 3-4x w tygodniu<br>
                            • Dlaczego ważne: Podczas redukcji możesz tracić mięśnie, trening siłowy je zachowuje<br>
                            • Więcej mięśni = szybszy metabolizm = łatwiejsze spalanie kalorii<br>
                            • Progresja obciążeń: Stopniowo zwiększasz ciężary<br><br>
                            
                            <strong>3. Cardio (spalanie kalorii):</strong><br>
                            • Częstotliwość: 2-3x w tygodniu (może być po treningu siłowym)<br>
                            • Czas: 20-30 minut umiarkowanej intensywności<br>
                            • Jak intensywnie: Powinieneś móc rozmawiać podczas cardio (ale z lekką zadyszką)
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="section-title flex" style="cursor: pointer; font-size: 18px;" onclick="toggleSection('progression')">
                        <span>📈 Progresja</span>
                        <span id="progression-icon">▼</span>
                    </div>
                    <div id="progression-content" style="display: none; margin-top: 10px;">
                        <div class="info-box">
                            <strong>Tydzień 1-4: Faza Adaptacji</strong><br>
                            • Zacznij od lżejszych ciężarów<br>
                            • Naucz się prawidłowej techniki<br>
                            • Zwiększaj ciężar gdy zrobisz 12 powtórzeń we wszystkich seriach<br><br>
                            
                            <strong>Tydzień 5-12: Faza Intensyfikacji</strong><br>
                            • Zwiększ obciążenie gdy zrobisz 12 powtórzeń we wszystkich seriach<br>
                            • Dodaj 1-2 powtórzenia do każdej serii co 2 tygodnie<br>
                            • Skróć przerwy o 10-15 sekund co 2 tygodnie<br>
                            • Zwiększ czas cardio do 15-20 minut<br><br>
                            
                            <strong>Przykładowa progresja obciążeń (Sebuś):</strong><br>
                            • Tydzień 1-2: 2x10kg (20kg łącznie)<br>
                            • Tydzień 3-4: 2x12.5kg (25kg łącznie)<br>
                            • Tydzień 5-6: 2x15kg (30kg łącznie)<br>
                            • Tydzień 7-8: 2x17.5kg (35kg łącznie)<br>
                            • Tydzień 9-12: 2x20kg (40kg łącznie) - maksimum<br><br>
                            
                            <strong>UWAGA:</strong> Jeśli nie masz hantli o różnych ciężarach, zwiększaj liczbę powtórzeń i skracaj przerwy.
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="section-title flex" style="cursor: pointer; font-size: 18px;" onclick="toggleSection('safety')">
                        <span>🚨 Zasady Bezpieczeństwa</span>
                        <span id="safety-icon">▼</span>
                    </div>
                    <div id="safety-content" style="display: none; margin-top: 10px;">
                        <div class="info-box">
                            <strong>Przed każdym treningiem:</strong><br>
                            ✅ Zawsze rozgrzewka (10 minut minimum)<br>
                            ✅ Sprawdź ból - jeśli kolano lub staw skokowy boli, pomiń ćwiczenie<br>
                            ✅ Zacznij od lżejszych ciężarów - lepiej za mało niż za dużo<br>
                            ✅ Prawidłowa technika - poproś asekuranta o obserwację<br><br>
                            
                            <strong>Podczas treningu:</strong><br>
                            ✅ Słuchaj swojego ciała - ból = STOP<br>
                            ✅ Oddychaj - wydech przy wysiłku, wdech przy opuszczaniu<br>
                            ✅ Kontrolowane ruchy - nie szarp, nie pchaj<br>
                            ✅ Stabilna pozycja - szczególnie przy ćwiczeniach stojących<br><br>
                            
                            <strong>Po treningu:</strong><br>
                            ✅ Zawsze rozciąganie (5 minut minimum)<br>
                            ✅ Nawodnienie - pij wodę<br>
                            ✅ Odpoczynek - minimum 1 dzień przerwy między treningami
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="section-title flex" style="cursor: pointer; font-size: 18px;" onclick="toggleSection('diet')">
                        <span>🍎 Dieta - Podstawowe Zasady</span>
                        <span id="diet-icon">▼</span>
                    </div>
                    <div id="diet-content" style="display: none; margin-top: 10px;">
                        <div class="info-box">
                            <strong>Deficit kaloryczny:</strong><br>
                            • Oblicz swoje BMR (podstawowa przemiana materii)<br>
                            • Odejmij 500-750 kcal dziennie<br>
                            • Śledź kalorie przez pierwsze 2-3 tygodnie (żeby zobaczyć ile jesz)<br><br>
                            
                            <strong>Podstawowe zasady:</strong><br>
                            1. Białko: 1.6-2g na kg masy ciała (zachowanie mięśni)<br>
                            2. Węglowodany: Umiarkowane, głównie przed/po treningu<br>
                            3. Tłuszcze: Zdrowe tłuszcze (orzechy, awokado, oliwa)<br>
                            4. Warzywa: Dużo warzyw (niska kaloryczność, dużo błonnika)<br>
                            5. Woda: Minimum 2-3 litry dziennie<br><br>
                            
                            <strong>Przykładowy dzień:</strong><br>
                            • Śniadanie: Jajka + warzywa + pełnoziarniste pieczywo<br>
                            • Obiad: Mięso/drób + warzywa + kasza/ryż<br>
                            • Przed treningiem: Banan lub mała porcja węglowodanów<br>
                            • Po treningu: Białko (np. shake, jajka, kurczak) + węglowodany<br>
                            • Kolacja: Białko + warzywa (lekka kolacja)
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px;">
                    <div class="section-title flex" style="cursor: pointer; font-size: 18px;" onclick="toggleSection('progress')">
                        <span>📊 Śledzenie Postępów</span>
                        <span id="progress-icon">▼</span>
                    </div>
                    <div id="progress-content" style="display: none; margin-top: 10px;">
                        <div class="info-box">
                            <strong>Co mierzyć:</strong><br>
                            1. Waga ciała - raz w tygodniu, rano, na czczo<br>
                            2. Obwody - raz w miesiącu (klatka, talia, biodra, uda)<br>
                            3. Siła - zapisuj ciężary i powtórzenia w dzienniczku<br>
                            4. Zdjęcia - raz w miesiącu (przed/po)<br><br>
                            
                            <strong>Realistyczne oczekiwania:</strong><br>
                            • Tydzień 1-2: Możliwy wzrost wagi (zatrzymanie wody)<br>
                            • Tydzień 3-4: Pierwsze efekty (1-2 kg)<br>
                            • Miesiąc 2-3: Stabilna redukcja (2-4 kg/miesiąc)<br>
                            • Miesiąc 4-6: Kontynuacja redukcji (${plan.goal})
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="workout-section">
            <div class="section-title flex">
                <span>🔥 Rozgrzewka: ${addTermLinks(day.warmup)}</span>
                <a class="exercise-link" onclick="showWarmupDetails()">📖 Jak wykonać?</a>
            </div>
        </div>

        <div class="workout-section">
            <div class="section-title">💪 Trening: ${day.name}</div>
    `;

    day.exercises.forEach((exercise, index) => {
        const exerciseKey = exercise.name.split('(')[0].trim();
        const hasDetails = exerciseDictionary[exerciseKey] || exerciseDictionary[exercise.name];
        
        html += `
            <div class="exercise-item">
                <div class="exercise-header">
                    <div class="exercise-name">${index + 1}. ${exercise.name}</div>
                    ${hasDetails ? `<a class="exercise-link" onclick="showExerciseDetails('${exercise.name}')">📖 Jak wykonać?</a>` : ''}
                </div>
                <div class="exercise-details">
                    <strong>Serie:</strong> ${exercise.sets} | <strong>Przerwa:</strong> ${exercise.rest}
                    ${exercise.weight ? ` | <strong>Ciężar:</strong> ${addTermLinks(exercise.weight)}` : ''}
                    ${exercise.note ? `<br><em>${addTermLinks(exercise.note)}</em>` : ''}
                    ${exercise.warning ? `<div class="warning">⚠️ ${addTermLinks(exercise.warning)}</div>` : ''}
                    ${exercise.safe ? `<div class="safe">✅ ${addTermLinks(exercise.safe)}</div>` : ''}
                </div>
            </div>
        `;
    });

    html += `
        </div>

        <div class="workout-section">
            <div class="section-title flex">
                <span>🏃 Cardio: ${day.cardio}</span>
                <a class="exercise-link" onclick="showCardioDetails()">📖 Jak wykonać?</a>
            </div>
        </div>

        <div class="workout-section">
            <div class="section-title flex">
                <span>🧘 Rozciąganie: ${addTermLinks(day.stretching)}</span>
                <a class="exercise-link" onclick="showStretchingDetails()">📖 Jak wykonać?</a>
            </div>
        </div>
    `;

    content.innerHTML = html;
}

function togglePlanInfo() {
    const content = document.getElementById('plan-info-content');
    const icon = document.getElementById('plan-info-icon');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.textContent = '▲';
    } else {
        content.style.display = 'none';
        icon.textContent = '▼';
    }
}

function toggleSection(sectionName) {
    const content = document.getElementById(sectionName + '-content');
    const icon = document.getElementById(sectionName + '-icon');
    if (content && icon) {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.textContent = '▲';
        } else {
            content.style.display = 'none';
            icon.textContent = '▼';
        }
    }
}

function toggleSection(sectionName) {
    const content = document.getElementById(sectionName + '-content');
    const icon = document.getElementById(sectionName + '-icon');
    if (content && icon) {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            icon.textContent = '▲';
        } else {
            content.style.display = 'none';
            icon.textContent = '▼';
        }
    }
}

function showCardioDetails() {
    const cardio = cardioDictionary["Cardio"];
    
    const modal = document.getElementById('exerciseModal');
    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="modal-title">${cardio.title}</h2>
        
        <div class="info-box">
            <h3>Dlaczego to ważne:</h3>
            <p>${cardio.why}</p>
        </div>

        <div class="modal-section">
            <h3>📋 Ćwiczenia cardio w domu:</h3>
    `;

    cardio.exercises.forEach(ex => {
        html += `
            <div style="margin-bottom: 25px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
                <h4 style="color: #333; margin-bottom: 10px;">${ex.name}</h4>
                <p style="color: #666; margin-bottom: 10px;">${ex.description}</p>
                <strong>Jak wykonać:</strong>
                <ol style="margin-left: 20px; margin-top: 5px;">
        `;
        ex.howTo.forEach(step => {
            html += `<li style="margin-bottom: 5px;">${step}</li>`;
        });
        html += `
                </ol>
                <p style="margin-top: 10px;"><strong>Czas:</strong> ${ex.time}</p>
                <p><strong>Intensywność:</strong> ${ex.intensity}</p>
                <p style="color: #27ae60; margin-top: 10px;"><strong>Uwagi:</strong> ${ex.notes}</p>
            </div>
        `;
    });

    html += `
        </div>

        <div class="modal-section">
            <h3>📊 Plany cardio:</h3>
    `;

    cardio.plans.forEach(plan => {
        html += `
            <div style="margin-bottom: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
                <h4 style="color: #333; margin-bottom: 10px;">${plan.name}</h4>
                <ol style="margin-left: 20px;">
        `;
        plan.exercises.forEach(ex => {
            html += `<li style="margin-bottom: 5px;">${ex}</li>`;
        });
        html += `
                </ol>
            </div>
        `;
    });

    html += `
        </div>

        <div class="info-box">
            <h3>Uwagi:</h3>
            <p>${cardio.notes}</p>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function showExerciseDetails(exerciseName) {
    const exerciseKey = exerciseName.split('(')[0].trim();
    const exercise = exerciseDictionary[exerciseKey] || exerciseDictionary[exerciseName];
    
    if (!exercise) {
        alert('Szczegóły tego ćwiczenia będą wkrótce dostępne!');
        return;
    }

    const modal = document.getElementById('exerciseModal');
    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="modal-title">${exercise.title}</h2>
        
        <div class="modal-section">
            <h3>Co to jest?</h3>
            <p>${exercise.description}</p>
        </div>

        <div class="modal-section">
            <h3>Jak wykonać (krok po kroku):</h3>
            <ol>
    `;

    let stepNumber = 1;
    exercise.howTo.forEach(step => {
        const trimmedStep = step.trim();
        if (trimmedStep === '') {
            // Pusty separator - zakończ listę i zacznij nową z kontynuacją numeracji
            html += `</ol><br><ol start="${stepNumber}">`;
        } else {
            html += `<li>${trimmedStep}</li>`;
            stepNumber++;
        }
    });

    html += `
            </ol>
        </div>

        <div class="modal-section">
            <h3>Jakie mięśnie pracują:</h3>
            <p>${exercise.muscles}</p>
        </div>

        <div class="modal-section">
            <h3>Typowe błędy (czego unikać):</h3>
            <ul>
    `;

    exercise.mistakes.forEach(mistake => {
        html += `<li>${mistake}</li>`;
    });

    html += `
            </ul>
        </div>

        <div class="info-box">
            <h3>Uwagi dla Ciebie:</h3>
            <p>${exercise.notes}</p>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function showWarmupDetails() {
    const warmup = warmupDictionary["Rozgrzewka"];
    
    const modal = document.getElementById('exerciseModal');
    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="modal-title">${warmup.title}</h2>
        
        <div class="info-box">
            <h3>Dlaczego to ważne:</h3>
            <p>${warmup.why}</p>
        </div>
    `;

    warmup.parts.forEach(part => {
        html += `
            <div class="modal-section">
                <h3>${part.name}</h3>
                <ul>
        `;
        part.exercises.forEach(ex => {
            html += `<li>${ex}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    });

    html += `
        <div class="modal-section">
            <h3>⏱️ Podsumowanie czasu:</h3>
            <p><strong>${warmup.summary}</strong></p>
        </div>

        <div class="info-box">
            <h3>Uwagi:</h3>
            <p>${warmup.notes}</p>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function showStretchingDetails() {
    const stretching = stretchingDictionary["Rozciąganie"];
    
    const modal = document.getElementById('exerciseModal');
    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="modal-title">${stretching.title}</h2>
        
        <div class="info-box">
            <h3>Dlaczego to ważne:</h3>
            <p>${stretching.why}</p>
        </div>
    `;

    stretching.parts.forEach(part => {
        html += `
            <div class="modal-section">
                <h3>${part.name}</h3>
                <ul>
        `;
        part.exercises.forEach(ex => {
            html += `<li>${ex}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    });

    html += `
        <div class="modal-section">
            <h3>⏱️ Podsumowanie czasu:</h3>
            <p><strong>${stretching.summary}</strong></p>
        </div>

        <div class="modal-section">
            <h3>💡 Ważne zasady rozciągania:</h3>
            <ul>
    `;
    stretching.rules.forEach(rule => {
        html += `<li>${rule}</li>`;
    });
    html += `
            </ul>
        </div>

        <div class="info-box">
            <h3>Uwagi:</h3>
            <p>${stretching.notes}</p>
        </div>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function showTermDetails(term) {
    const termData = termDictionary[term];
    
    if (!termData) {
        alert('Szczegóły tego terminu będą wkrótce dostępne!');
        return;
    }

    const modal = document.getElementById('exerciseModal');
    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="modal-title">${termData.title}</h2>
        
        <div class="modal-section">
            <h3>Co to jest?</h3>
            <p>${termData.description}</p>
        </div>
    `;

    if (termData.causes) {
        html += `
            <div class="modal-section">
                <h3>Przyczyny:</h3>
                <p>${termData.causes}</p>
            </div>
        `;
    }

    if (termData.effects) {
        html += `
            <div class="modal-section">
                <h3>Efekty:</h3>
                <p>${termData.effects}</p>
            </div>
        `;
    }

    if (termData.difference) {
        html += `
            <div class="modal-section">
                <h3>Różnica:</h3>
                <p>${termData.difference}</p>
            </div>
        `;
    }

    if (termData.why) {
        html += `
            <div class="modal-section">
                <h3>Dlaczego?</h3>
                <p>${termData.why}</p>
            </div>
        `;
    }

    if (termData.exercises) {
        html += `
            <div class="modal-section">
                <h3>Ćwiczenia korekcyjne:</h3>
                <ul>
        `;
        termData.exercises.forEach(ex => {
            html += `<li>${ex}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    }

    if (termData.notes) {
        html += `
            <div class="info-box">
                <h3>Uwagi:</h3>
                <p>${termData.notes}</p>
            </div>
        `;
    }

    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}

// Zamknij modal po kliknięciu poza nim
window.onclick = function(event) {
    const modal = document.getElementById('exerciseModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Inicjalizacja
document.body.classList.add('plan-sebus'); // Domyślnie niebieski dla Sebusia
displayWorkout();
