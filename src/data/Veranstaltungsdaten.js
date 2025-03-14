const VSData = [
    {
        title: "IT-Zertifikat der Phil. Fak.: Advanced IT Basics",
        id: "001",
        type: "Seminar",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Laura Pascale Berg"],
        degree: ["IT-Zertifikat der Philosophischen Fakultät"],
        date: {
            weekday: "Mo.",
            time: "10:00 - 11:30",
            place: "103 S93",
        },
        subPages: [
            { title: "Infos zum Kurs, Teilnahmebedingungen", id: "001001", subPages: [] },
            { title: "Computer-Hardware und BIOS / UEFI", id: "001002", subPages: [] },
            { title: "Grundlagen Betriebssysteme", id: "001003", subPages: [] },
            { title: "Betriebssystem Windows", id: "001004", subPages: [] },
            { title: "Open Source", id: "001005",  subPages: [] },
            { title: "Microsoft Office", id: "001006", subPages: [
                { title: "Word", id: "001007", subPages: [] },
                { title: "Excel", id: "001008", subPages: [] },
                { title: "PowerPoint", id: "001009", subPages: [] }
            ] },
            { title: "Libreoffice / Grundlagen Datenbanken", id: "001010", subPages: [] },
            { title: "Bildbearbeitung in Theorie und Praxis", id: "001011", subPages: [] },
            { title: "Datenschutz und Informationssicherheit", id: "001012", subPages: [] },
            { 
                title: "Betriebssystem Linux", 
                id: "001013", 
                subPages: [
                    { title: "Ubuntu-Linux ausprobieren", id: "001014", subPages: [] },
                    { title: "Kommandozeile - Shell - Terminal", id: "001015", subPages: [] },
                    { title: "Computer im Computer: Virtuelle Maschinen (VM)", id: "001016", subPages: [] }
                ] 
            },
            { title: "Netzwerktechnik I", id: "001017", subPages: [] },
            { title: "Netzwerktechnik II - Netzwerksicherheit", id: "001018", subPages: [] },
            { 
                title: "Mail", 
                id: "001019", 
                subPages: [
                    { title: "Übung telnet – Mail über Kommandozeile versenden", id: "001020", subPages: [] }
                ] 
            }
        ],
        content: {
            introduction: "Herzlich Willkommen! In dem Kurs Advanced IT-Basics geht es einmal quer durch die Grundlagen der Informationstechnik...",
            topics: [
              {
                category: "Grundlagen",
                details: [
                  "Computer-Hardware und Informationstechnik",
                  "Betriebssysteme (Windows, Linux), Konsole",
                  "Datenschutz, Informationssicherheit und IT-Sicherheit",
                  "Überblick zur künstlichen Intelligenz"
                ]
              },
              {
                category: "Medien & Internet",
                details: [
                  "Grundlagen des digitalen Audios und Podcasting (Audacity)",
                  "Grundlagen der Bildbearbeitung (GIMP)",
                  "Internetkommunikation & Netzwerksicherheit: Client-Server-Modelle, Webserver (Apache), VPN",
                  "Kommunikationsprotokolle und Identitätsmanagement: E-Mail (POP, IMAP, SMTP), LDAP"
                ]
              }
            ],
            learningGoals: [
            "Hardware und Betriebssysteme: Wie funktioniert ein Rechner?",
            "Konsole: Geschichte, Befehle, Navigation",
            "Datenschutz & IT-Sicherheit: DSGVO, Bedrohungen, Schwachstellen",
            "Bildbearbeitung: Pixel, Auflösung, Farbräume",
            "Internetkommunikation: Webserver, Protokolle, VPN",
            "E-Mail: Mailserver, Verschlüsselung, Sicherheit",
            "Identitätsmanagement: LDAP, Authentifizierung"
            ]
        },
    },
    {
        title: "Media Transformation – Interaktives Erzählen in VR",
        id: "002",
        type: "Übung",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Prof. Dr. Øyvind Eide", "Théo Bouveyron"],
        degree: ["Bachelor Medieninformatik"],
        date: {
            weekday: "Mo.",
            time: "12:00 - 13:30",
            place: "Philosophicum S91",
        },
        subPages: [],
        content: {
            introduction: "In diesem Kurs beschäftigen wir uns mit interaktivem Erzählen in Virtual Reality. Der Ausgangspunkt ist Henrik Ibsens Theaterstück 'Nora oder Ein Puppenheim'.",
            topics: [
                {
                    category: "Grundlagen",
                    details: [
                        "Über Nora und das erzählerische Potenzial von VR",
                        "Technologische Grundlagen für VR-Entwicklung",
                        "Einführung in Version Control für kollaborative Entwicklung"
                    ]
                },
                {
                    category: "Projektarbeit",
                    details: [
                        "Präsentation von Projektideen und regelmäßige Meilensteine",
                        "Arbeitstreffen zur Entwicklung und Diskussion von Projekten",
                        "Iterative Entwicklung mit laufenden Präsentationen"
                    ]
                },
                {
                    category: "Abschluss & Prüfung",
                    details: [
                        "Projekteinreichung mit funktionierendem VR-Projekt",
                        "Erstellung eines Demo-Videos zur Präsentation",
                        "Essay zur kritischen Reflexion des Projekts"
                    ]
                }
            ],
            learningGoals: [
                "Grundlagen des interaktiven Erzählens in VR verstehen",
                "Technische Umsetzung von VR-Projekten in Unity",
                "Version Control für kollaborative Softwareentwicklung anwenden",
                "Kritische Reflexion und Bewertung interaktiver Medienprojekte"
            ]
        }
    },
    {
        title: "IT-Zertifikat der Phil.Fak.: Advanced Web Basics",
        id: "003",
        type: "Seminar",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Susanne Kurz M.A."],
        degree: ["IT-Zertifikat der Philosophischen Fakultät"],
        date: {
            weekday: "Di.",
            time: "12:00 - 13:30",
            place: "103 S89",
        },
        subPages: [],
        content: {
            introduction: "In diesem Seminar beschäftigen wir uns mit der Webentwicklung, insbesondere mit HTML5, CSS3 und JavaScript. Ziel ist es, eine Website zu einem Thema Ihrer Wahl zu entwickeln.",
            topics: [
                {
                    category: "Webentwicklung",
                    details: [
                        "HTML5: Struktur einer Website erstellen",
                        "CSS3: Gestaltung und Layout von Webseiten",
                        "JavaScript: Interaktive Elemente und Funktionalitäten"
                    ]
                },
                {
                    category: "Projektarbeit",
                    details: [
                        "Entwicklung einer eigenen Website zu einem Thema",
                        "Praxisorientierte Übungen zur Umsetzung der Webstandards",
                        "Arbeiten mit eigenem Laptop"
                    ]
                },
                {
                    category: "Abschluss & Zertifikat",
                    details: [
                        "Abschlussprojekt: Entwicklung einer voll funktionsfähigen Website",
                        "Beantragung einer Teilnahmebescheinigung mit Note",
                        "Zertifikat nach erfolgreichem Abschluss aller Module des Programms"
                    ]
                }
            ],
            learningGoals: [
                "Verstehen der Webstandards HTML5, CSS3 und JavaScript",
                "Erstellung einer eigenen Website von der Struktur bis zur Interaktivität",
                "Einführung in die Webentwicklung und praxisorientierte Umsetzung",
                "Erwerb einer Teilnahmebescheinigung und ggf. Zertifikat"
            ]
        }
    },
    {
        title: "Die Digitale Gesellschaft",
        id: "004",
        type: "Hauptseminar",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Prof. Dr. Nils Reiter"],
        degree: ["Master Informationsverarbeitung", "Master Medieninformatik", "Master Informatik"],
        date: {
            weekday: "Di.",
            time: "12:00 - 13:30",
            place: "103 S67",
        },
        subPages: [],
        content: {
            introduction: "In diesem Hauptseminar werden die (informations-)technischen Aspekte gesellschaftlicher und politischer Debatten behandelt, um den Einfluss von Technik auf Entscheidungen und die Rolle von Expert:innen zu verstehen.",
            topics: [
                {
                    category: "Gesellschaftliche & politische Themen",
                    details: [
                        "Wahlen und Wahlcomputer",
                        "Digitale Patientenakte",
                        "Datenschutz-Grundverordnung (DSGVO)",
                        "Digitale Gewalt gegen Frauen",
                        "Digitales Erbe",
                        "Online-Durchsuchung und Staatstrojaner",
                        "Chatkontrolle in der EU",
                        "Folgen von Künstlicher Intelligenz",
                        "Hate Speech"
                    ]
                },
                {
                    category: "Seminararbeit & Studienleistung",
                    details: [
                        "Seminarsitzung gestalten und präsentieren",
                        "Konzept zur Sitzung einreichen",
                        "Gruppenaktivitäten während der Sitzung einplanen",
                        "Mitarbeit an der Seminarpräsentation für die DHCon"
                    ]
                },
                {
                    category: "Seminarstruktur",
                    details: [
                        "Themenvergabe und Schwerpunktssetzung",
                        "Literaturrecherche und Sprechstunden mit dem Dozenten",
                        "Abgabe eines Sitzungs-Konzepts",
                        "Durchführung der Seminarthemen mit Gruppenaktivitäten",
                        "Feedbackgespräch nach jeder Sitzung"
                    ]
                }
            ],
            learningGoals: [
                "Verstehen der Auswirkungen digitaler Technologien auf die Gesellschaft und Politik",
                "Vertieftes Wissen zu aktuellen Themen der digitalen Gesellschaft",
                "Erlernen der Gestaltung und Präsentation von Seminarsitzungen",
                "Kritische Auseinandersetzung mit digitalen gesellschaftlichen Fragen",
                "Mitarbeit an einer Präsentation zur DHCon"
            ]
        },
    },
    {
        title: "Digital Humanities – Theorie und Praxis",
        id: "005",
        type: "Kolloquium",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["apl. Prof. Dr. Gioele Barabucci"],
        degree: ["Bachelor Informationsverarbeitung", "Bachelor Medieninformatik "],
        date: {
            weekday: "Di.",
            time: "12:00 - 13:30",
            place: "Philosophicum, S89",
        },
        subPages: [],
        content: {
            introduction: "Das Kolloquium behandelt die Konzeption, Entwicklung und Anwendung computergestützter Verfahren für geistes- und kulturwissenschaftliche Fragestellungen. Der Schwerpunkt liegt auf der digitalen Verarbeitung kulturellen Erbes, der Modellierung und Analyse von Daten sowie der Entwicklung digitaler Infrastrukturen.",
            topics: [
                {
                    category: "Digital Humanities - Einführung & Theorie",
                    details: [
                        "Überblick über Digital Humanities",
                        "Digitale Editionen und deren Anwendung",
                        "Kritische Reflexion der Digital Humanities und deren Herausforderungen"
                    ]
                },
                {
                    category: "Seminararbeit & Präsentationen",
                    details: [
                        "Auswahl von drei Präsentationsthemen bis zum 15.10.2024",
                        "Vorbereitung von zwei 5-minütigen Kurzpräsentationen im Laufe des Kolloquiums",
                        "Diskussion der präsentierten Artikel in der Sitzung"
                    ]
                },
                {
                    category: "Seminarstruktur & Arbeitsaufgaben",
                    details: [
                        "Präsentation und Diskussion von Themen aus der Digital Humanities",
                        "Behandlung relevanter Artikel und deren Argumentation",
                        "Aktive Teilnahme an der Diskussion – „Hab' ich nicht gelesen“ ist nicht akzeptabel"
                    ]
                }
            ],
            learningGoals: [
                "Verständnis der Digital Humanities und ihrer Bedeutung für die Geisteswissenschaften",
                "Erwerb praktischer Erfahrungen in der Präsentation wissenschaftlicher Themen",
                "Vertieftes Wissen über digitale Editionen, Datenmodellierung und deren Anwendung",
                "Kritische Reflexion und Analyse der Entwicklung von digitalen Tools und Infrastrukturen für die Geisteswissenschaften"
            ]
        },
    },
    {
        title: "Algorithmen und Logik I",
        id: "006",
        type: "Vorlesung",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Susanne Kurz M.A."],
        degree: ["Master Recht der Digitalisierung"],
        date: {
            weekday: "Di.",
            time: "14:00 - 15:30",
            place: "Raum 2.101 im SSC",
        },
        subPages: [],
        content: {
            introduction: "In diesem Kurs werden Sie grundlegende Konzepte der Programmierung und Datenmodellierung lernen, die für die Webentwicklung und das Verständnis von Algorithmen und Logik entscheidend sind.",
            topics: [
                {
                    category: "Datenaufbereitung und Codieren mit HTML und CSS",
                    details: [
                        "Erlernen der Strukturierung von Webinhalten mit HTML",
                        "Verwendung von CSS für Layout und Styling",
                        "Praktische Übungen zur Anwendung von HTML und CSS in Webanwendungen"
                    ]
                },
                {
                    category: "Datenmodellierung",
                    details: [
                        "Untersuchung unterschiedlicher Datenmodellierungskonzepte",
                        "Praktische Arbeit mit JSON (JavaScript Object Notation) und XML (Extensible Markup Language)",
                        "Verstehen der Bedeutung dieser Formate in modernen Webanwendungen"
                    ]
                },
                {
                    category: "Erstes Programmieren mit JavaScript",
                    details: [
                        "Einführung in JavaScript als Programmiersprache für Webanwendungen",
                        "Grundlegende Programmierkonzepte: Variablen, Bedingungen, Funktionen",
                        "Schreiben erster Programme in JavaScript"
                    ]
                }
            ],
            learningGoals: [
                "Erwerb grundlegender Kenntnisse in HTML und CSS für die Webentwicklung",
                "Verständnis für die Strukturierung und Übertragung von Daten mit JSON und XML",
                "Erste Erfahrungen im Programmieren mit JavaScript und grundlegende Programmierlogik"
            ]
        },
    },
    {
        title: "Digital Humanities und Informatik der Geisteswissenschaften",
        id: "007",
        type: "Hauptseminar",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Prof. Dr. Øyvind Eide"],
        degree: ["Master Informationsverarbeitung", "Master Medieninformatik"],
        date: {
            weekday: "Di.",
            time: "14:00 - 15:30",
            place: "Philosophicum S91",
        },
        subPages: [
            { title: "Kursinhalte", id: "007001", subPages: [] },
            { title: "Semesterplan", id: "007002", subPages: [] },
            { title: "Studienleistung", id: "007003", subPages: [] }
        ],
        content: {
            introduction: "In diesem Seminar werden Studierende ein Problemkomplex untersuchen und durch Modellierung sowie Implementierung eines Anwendungssystems Forschungsfragen beantworten.",
            topics: [
                {
                    category: "Projektentwicklung und Themenfindung",
                    details: [
                        "Brainstorming und Präsentation von Projektideen und Interessen",
                        "Selbstpräsentation zur Identifikation von möglichen Gruppenkonstellationen und Projektideen",
                        "Verschiedene Formate für Präsentationen wie schriftlich, Video, Folien, Comics, etc."
                    ]
                },
                {
                    category: "Projektplanung und Umsetzung",
                    details: [
                        "Erstellung und Weiterentwicklung eines Projektplans",
                        "Planung, Durchführung und Abgabe eines Projektes unter Unterstützung der Dozenten",
                        "Projektadministration und Softwareprojektleitung"
                    ]
                },
                {
                    category: "Präsentationen und Feedback",
                    details: [
                        "Präsentation der ersten und weiterentwickelten Projektpläne",
                        "Lageberichte zur regelmäßigen Projektfortschrittsdokumentation",
                        "Abschlusspräsentation und Diskussion der Ergebnisse"
                    ]
                }
            ],
            learningGoals: [
                "Entwicklung und Durchführung eines eigenen Digital Humanities Projekts",
                "Erfahrung in der Gruppenkollaboration und Projektplanung",
                "Verfassen eines selbstevaluierenden Essays und kritische Reflexion des Projektverlaufs"
            ]
        },
    },
    {
        title: "Grundlagen der Computerlinguistik",
        id: "008",
        type: "Seminar",
        semester: "Wintersemester 2024 / 2025",
        teachers: ["Dr. Jürgen Hermes"],
        degree: ["Bachelor Informationsverarbeitung"],
        date: {
            weekday: "Di.",
            time: "16:00 - 17:30",
            place: "S93",
        },
        subPages: [
            { title: "Kursinhalte", id: "008001", subPages: [] },
            { title: "Semesterplan", id: "008002", subPages: [] },
            { title: "Studienleistung und Prüfungsleistung", id: "008003", subPages: [] },
            { title: "Literatur und Ressourcen", id: "008004", subPages: [] }
        ],
        content: {
            introduction: "Dieses Seminar bildet den Einstieg in die computerlinguistische Ausbildung und vermittelt grundlegende Kenntnisse über Sprachverarbeitung, Annotation und Methoden der Computerlinguistik.",
            topics: [
                {
                    category: "Einführung in die Computerlinguistik",
                    details: [
                        "Grundlegende Konzepte der Computerlinguistik",
                        "Einführung in Annotation und Sprachwissenschaft"
                    ]
                },
                {
                    category: "Annotationstechniken",
                    details: [
                        "Annotation auf Zeichen-, Wort- und Satzebene",
                        "Kuratierung und Inter-Rater-Agreement",
                        "Dependencies und Semantik"
                    ]
                },
                {
                    category: "Methoden der Sprachverarbeitung",
                    details: [
                        "Zeichen-, Wort- und Satzebene in der Sprachverarbeitung",
                        "Semantische Annotation und Bedeutung",
                        "Verwendung von Tools wie INCEpTION und Universal Dependencies"
                    ]
                }
            ],
            learningGoals: [
                "Verstehen der grundlegenden Techniken und Methoden der Computerlinguistik",
                "Erlernen von Annotationstechniken auf verschiedenen linguistischen Ebenen",
                "Kenntnisse in der Anwendung von linguistischen Tools und Webservices"
            ]
        },
    },
        {
            title: "Forschungsseminar",
            id: "009",
            type: "Kolloquium",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Jun.-Prof.in Dr. Elisa Cugliana",
                "Prof. Dr. Øyvind Eide",
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Di.",
                time: "18:00 - 19:00",
                place: "IDH-Besprechungsraum",
                frequency: "Nicht jede Woche"
            },
            subPages: [
                { title: "Kursinhalte", id: "009001", subPages: [] },
                { title: "Termine und Themen", id: "009002", subPages: [] },
                { title: "Zielgruppe und Teilnahme", id: "009003", subPages: [] }
            ],
            content: {
                introduction: "Das Forschungsseminar richtet sich an Promovierende und Mitarbeitende des Instituts für Digital Humanities. In diesem Seminar werden aktuelle Forschungsarbeiten präsentiert und diskutiert, sowie die wissenschaftliche Arbeit innerhalb des Instituts gefördert.",
                learningGoals: [
                    "Förderung des wissenschaftlichen Austauschs und Diskurses",
                    "Präsentation von aktuellen Forschungsarbeiten",
                    "Vertiefung und Diskussion aktueller Themen aus den Digital Humanities"
                ]
            },
        },
        {
            title: "Softwaretechnologie: Java I",
            id: "010",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Mi.",
                time: "14:00 - 15:30",
                place: "103 Seminarraum S91",
                additionalSessions: [
                    { weekday: "Di.", time: "10:00 - 11:30", place: "106 Seminarraum S26", type: "Tutorium" },
                    { weekday: "Do.", time: "16:00 - 17:30", place: "103 Seminarraum S55", type: "Tutorium" }
                ]
            },
            subPages: [
                { title: "Kursinhalte", id: "010001", subPages: [] },
                { title: "Studienleistung", id: "010002", subPages: [] },
                { title: "Termine und Themen", id: "010003", subPages: [] }
            ],
            content: {
                introduction: "In diesem Proseminar werden die Grundlagen der Programmierung mit Java vermittelt. Themen umfassen unter anderem Syntax, Objektorientierung und die Standard-Klassenbibliothek.",
                topics: [
                {
                    category: "Einführung in die Programmierung mit Java",
                    details: [
                    "Grundlegende Syntax und Struktur von Java-Programmen",
                    "Installation und Nutzung einer Entwicklungsumgebung (IDE)"
                    ]
                },
                {
                    category: "Variablen, Datentypen und Operatoren",
                    "details": [
                    "Primitive Datentypen und Wrapper-Klassen",
                    "Arithmetische und logische Operatoren"
                    ]
                },
                {
                    category: "Kontrollstrukturen und Methoden",
                    details: [
                    "Bedingungen (if, switch) und Schleifen (for, while, do-while)",
                    "Methoden und Parameterübergabe"
                    ]
                },
                {
                    category: "Objektorientierte Programmierung (OOP) in Java",
                    details: [
                    "Klassen, Objekte, Konstruktoren",
                    "Instanzvariablen und Methoden",
                    "Zugriffskontrolle (private, public, protected)"
                    ]
                },
                {
                    category: "Vererbung und Polymorphismus",
                    details: [
                    "Superklassen und Subklassen",
                    "Überschreiben und Überladen von Methoden",
                    "Abstrakte Klassen und Interfaces"
                    ]
                },
                {
                    category: "Ausnahmebehandlung (Exception Handling)",
                    details: [
                    "try, catch, finally Blöcke",
                    "Eigene Ausnahmeklassen definieren"
                    ]
                },
                {
                    category: "Arbeiten mit der Java Standard-Klassenbibliothek",
                    details: [
                    "Wichtige Klassen aus java.util, java.lang und java.io",
                    "Einfache Datei- und Stream-Operationen"
                    ]
                },
                {
                    category: "Einführung in Datenstrukturen und Algorithmen",
                    details: [
                    "Arrays und ArrayLists",
                    "Einführung in Listen, Stacks und Queues"
                    ]
                },
                {
                    category: "Grundlagen der Rekursion",
                    details: [
                    "Rekursive Methoden und Anwendungsfälle"
                    ]
                },
                {
                    category: "Testen und Debugging von Java-Programmen",
                    details: [
                    "Debugging-Techniken",
                    "Einführung in Unit-Tests mit JUnit"
                    ]
                }
                ],
                learningGoals: [
                "Verständnis für die Grundlagen der Programmierung und der objektorientierten Konzepte in Java",
                "Fähigkeit, einfache Java-Programme zu schreiben und zu strukturieren",
                "Anwendung von Kontrollstrukturen zur Steuerung des Programmflusses",
                "Entwicklung und Nutzung eigener Klassen und Methoden zur besseren Code-Organisation",
                "Verständnis für Vererbung und Polymorphismus zur Wiederverwendung und Erweiterung von Code",
                "Umgang mit Fehlern und deren Behandlung durch Exception Handling",
                "Fähigkeit, grundlegende Datenstrukturen wie Arrays und Listen zu verwenden",
                "Einführung in die Rekursion und deren Anwendung in Programmierproblemen",
                "Kenntnisse im Debugging und Testen von Java-Programmen"
                ]
             },
        },
        {
            title: "Basissysteme der Informationsverarbeitung 1 - BSI 1",
            id: "011",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Susanne Kurz M.A."
            ],
            date: {
                weekday: "Mi.",
                time: "10:00 - 11:30",
                place: "S93"
            },
            content: {
                introduction: "In diesem Seminar werden wir mit JavaScript arbeiten, nach einer kurzen Einführung in die Sprache werden wir uns mit den Besonderheiten von JavaScript beschäftigen und dann das Userinterface mit der Bibliothek React programmieren.",
                topics: [
                {
                    category: "Einführung in die Programmierung mit JavaScript",
                    details: [
                    "Grundlegende Syntax und Struktur von JavaScript-Programmen",
                    "Unterschiede zu anderen Programmiersprachen"
                    ]
                },
                {
                    category: "Variablen, Datentypen und Operatoren",
                    details: [
                    "Variablendeklaration mit var, let und const",
                    "Datentypen und Typkonvertierung in JavaScript"
                    ]
                },
                {
                    category: "Kontrollstrukturen und Funktionen",
                    details: [
                    "Bedingungen (if, switch) und Schleifen (for, while, do-while)",
                    "Arrow Functions und anonyme Funktionen"
                    ]
                },
                {
                    category: "Objektorientierte Programmierung (OOP) in JavaScript",
                    details: [
                    "Prototypenbasierte Vererbung",
                    "ES6-Klassen und Konstruktoren"
                    ]
                },
                {
                    category: "Vererbung und Polymorphismus",
                    details: [
                    "Klassenhierarchien in JavaScript",
                    "Methodenüberschreibung und Polymorphismus"
                    ]
                },
                {
                    category: "Fehlermanagement und Debugging",
                    details: [
                    "Try-Catch-Handling in JavaScript",
                    "Debugging mit den Developer Tools"
                    ]
                },
                {
                    category: "Arbeiten mit der JavaScript Standard-Klassenbibliothek",
                    details: [
                    "Wichtige Objekte: Math, Date, JSON",
                    "Umgang mit asynchronem Code (Promises, Async/Await)"
                    ]
                },
                {
                    category: "Einführung in Datenstrukturen und Algorithmen",
                    details: [
                    "Arrays und Objekte",
                    "Einführung in Maps und Sets"
                    ]
                },
                {
                    category: "Grundlagen der funktionalen Programmierung",
                    details: [
                    "Higher-Order Functions",
                    "Array-Methoden wie map(), filter(), reduce()"
                    ]
                },
                {
                    category: "Testen und Debugging von JavaScript-Programmen",
                    details: [
                    "Unit-Tests mit Jest",
                    "Debugging-Techniken für JavaScript-Code"
                    ]
                }
                ],
                learningGoals: [
                "Verständnis für die Grundlagen von JavaScript und seiner Besonderheiten",
                "Fähigkeit, einfache JavaScript-Programme zu schreiben und zu strukturieren",
                "Anwendung von Kontrollstrukturen zur Steuerung des Programmflusses",
                "Entwicklung und Nutzung eigener Funktionen und Klassen",
                "Verständnis für asynchrones Programmieren und Event-Handling",
                "Sichere Nutzung von modernen JavaScript-Features (ES6+)",
                "Grundkenntnisse in der funktionalen Programmierung mit JavaScript",
                "Kenntnisse im Debugging und Testen von JavaScript-Code",
                "Fähigkeit zur Entwicklung von User Interfaces mit React"
                ]
            },
        },
        {
            title: "Modellierung und digitale Karten",
            id: "012",
            type: "Hauptseminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
              "Prof. Dr. Øyvind Eide"
            ],
            date: {
              weekday: "Mi.",
              time: "10:00 - 11:30",
              place: "Seminargebäude S22"
            },
            content: {
                  introduction: "In diesem Seminar werden wir mit digitalen Karten, GIS und räumlichen Daten in den Geisteswissenschaften arbeiten. Nach einer Einführung in Methoden und Projekte planen und entwickeln die Studierenden eigene Projekte.",
                  topics: [
                    {
                      category: "Einführung in digitale Karten und GIS",
                      details: [
                        "Grundlagen von GIS und räumlicher Analyse",
                        "Vorstellung verschiedener Mapping-Projekte",
                        "Werkzeuge und Plattformen für digitale Karten"
                      ]
                    },
                    {
                      category: "Projektplanung und Präsentation",
                      details: [
                        "Erarbeitung und Vorstellung eigener Projektideen",
                        "Planung und Umsetzung von Studierendenprojekten",
                        "Zwischenberichte und Feedback-Runden"
                      ]
                    },
                    {
                      category: "Datenquellen und -aufbereitung",
                      details: [
                        "Arbeiten mit Geodaten und historischen Karten",
                        "Datenformate und -strukturen in GIS",
                        "Georeferenzierung und Visualisierungstechniken"
                      ]
                    },
                    {
                      category: "Praktische Umsetzung mit GIS- und Mapping-Tools",
                      details: [
                        "Einführung in verschiedene Softwarelösungen (Neatline, Digital Mappa, ESRI Story Maps, etc.)",
                        "Anwendung von Deep Mapping Methoden",
                        "Modellierung und Visualisierung historischer und literarischer Daten"
                      ]
                    },
                    {
                      category: "Projektdurchführung und Abschluss",
                      details: [
                        "Entwicklung eines funktionierenden Projekts in Gruppen",
                        "Letzte Lageberichte und Evaluation",
                        "Abgabe und Präsentation der finalen Projekte"
                      ]
                    }
                  ],
                  learningGoals: [
                    "Grundlagen von GIS und digitalen Karten in den Geisteswissenschaften verstehen",
                    "Kritische Auseinandersetzung mit Methoden und Tools für räumliche Analyse",
                    "Erwerb von Fähigkeiten in der Datenaufbereitung und Geovisualisierung",
                    "Entwicklung eines eigenständigen Projekts mit digitalen Mapping-Techniken",
                    "Reflexion über die Herausforderungen und Grenzen von GIS in den Geisteswissenschaften"
                  ]
             },
          },
        {
            title: "Softwaretechnologie: Java I",
            id: "013",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Mi.",
                time: "14:00 - 15:30",
                place: "Seminarraum S91",
                additionalSessions: [
                    { weekday: "Di.", time: "10:00 - 11:30", place: "106 Seminarraum S26", type: "Tutorium" },
                    { weekday: "Do.", time: "16:00 - 17:30", place: "103 Seminarraum S55", type: "Tutorium" }
                ]
            },
            content: {
                introduction: "In diesem Proseminar werden die Grundlagen der Programmierung mit Java vermittelt. Dazu gehören Syntax, Objektorientierung und die Einführung in die Standard-Klassenbibliothek.",
                topics: [
                    {
                        category: "Grundlagen",
                        details: [
                            "Einführung in Java und Eclipse",
                            "Variablen und Operatoren",
                            "Funktionen, Methoden und Datentypen",
                            "Konditionale Anweisungen",
                            "Schleifen und Kontrollstrukturen"
                        ]
                    },
                    {
                        category: "Objektorientierung",
                        details: [
                            "Arrays und Strings",
                            "Klassen und Objekte",
                            "Statische, private und öffentliche Methoden",
                            "Vererbung und Schnittstellen (Interfaces)"
                        ]
                    },
                    {
                        category: "Fortgeschrittene Themen",
                        details: [
                            "Ein- und Ausgabe in Java",
                            "Fehlerbehandlung mit Exceptions",
                            "Nutzung der Java Standard-Bibliothek",
                            "Best Practices für Softwareentwicklung in Java"
                        ]
                    }
                ],
                learningGoals: [
                    "Grundlagen der Programmierung mit Java verstehen",
                    "Konzepte der objektorientierten Programmierung anwenden",
                    "Softwarestrukturen mit Java effizient gestalten",
                    "Fehlersuche und Debugging in Java-Projekten"
                ]
            },
        },
        {
            title: "Colloquium in Digital Cultural Heritage",
            id: "014",
            type: "Kolloquium",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Øyvind Eide", "Prof. Dr. Eleftheria Paliou"
            ],
            date: {
                weekday: "Mi.",
                time: "18:00 - 19:30",
                place: "Küpperstift Seminarraum 1.01"
            },
            content: {
                introduction: "Das Kolloquium behandelt aktuelle Forschungen im Bereich Digital Cultural Heritage mit Vorträgen von internationalen Wissenschaftler:innen.",
                topics: [
                    {
                        category: "Digitale Archäologie",
                        details: [
                            "GIS-Analysen und Raumstudien in der Archäologie",
                            "3D-Scholarly Editions für Rekonstruktionen",
                            "Anwendungen von Multi-Light Reflectance Technologien"
                        ]
                    },
                    {
                        category: "Datenmodellierung & KI",
                        details: [
                            "Datenmodellierung für byzantinische Siegel",
                            "KI-gestützte Analysen großer Münzfunde",
                            "Soziale Ungleichheit in digitalem Kulturerbe"
                        ]
                    },
                    {
                        category: "Digitale Medien & Repräsentation",
                        details: [
                            "Audiovisuelle Daten als Kulturerbe",
                            "Wissenschaftliche Dokumentation von 3D-Bewegungen",
                            "Digitalisierung von Kulturen des Staunens"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis für aktuelle Forschungen im Bereich Digital Cultural Heritage",
                    "Reflexion der Rolle digitaler Technologien in der Kulturerbeforschung",
                    "Analyse wissenschaftlicher Präsentationen und kritische Auseinandersetzung mit Methoden"
                ]
            },
        },
        {
            title: "Softwaretechnologie: Java I",
            id: "015",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Mi.",
                time: "14:00 - 15:30",
                place: "103 Seminarraum S91"
            },
            content: {
                introduction: "Im Proseminar Softwaretechnologie I werden die Grundlagen der Programmierung mit Java vermittelt, inklusive Syntax, Objektorientierung und der Standard-Klassenbibliothek.",
                topics: [
                    {
                        category: "Einführung in Java",
                        details: [
                            "Programmiersprachen im Überblick",
                            "Eclipse IDE Einführung",
                            "Java Grundlagen und Syntax"
                        ]
                    },
                    {
                        category: "Programmierkonzepte",
                        details: [
                            "Variablen und Operatoren",
                            "Funktionen und Methoden",
                            "Datentypen und Arrays"
                        ]
                    },
                    {
                        category: "Objektorientierte Programmierung",
                        details: [
                            "Konditionale Ausdrücke",
                            "Schleifen und Iterationen",
                            "Objekte, Klassen, Vererbung"
                        ]
                    },
                    {
                        category: "Fehlerbehandlung und Weiterführendes",
                        details: [
                            "Exception Handling",
                            "Abstrakte Methoden und Interfaces",
                            "Ein- und Ausgabe in Java"
                        ]
                    }
                ],
                learningGoals: [
                    "Grundlagen der Programmierung mit Java erlernen",
                    "Verwendung von Objektorientierung und Standard-Klassenbibliothek",
                    "Erstellung und Verwaltung von Java-Anwendungen",
                    "Fehlerbehandlung und Debugging in Java"
                ]
            },
        },
        {
            title: "IT-Zertifikat der Phil. Fak.: Tools & Methods in DH",
            id: "016",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Susanne Kurz M.A."
            ],
            date: {
                weekday: "Do.",
                time: "10:00 - 11:30",
                place: "103 Seminarraum S89"
            },
            content: {
                introduction: "In diesem Seminar wird die Datenmodellierung mit XML und JSON thematisiert und die so entstandenen Datenbasen als serverbasierte Quelle für (selbsterzeugte) dynamische Webportale eingesetzt.",
                topics: [
                    {
                        category: "Datenmodellierung mit XML und JSON",
                        details: [
                            "Einführung in die Datenmodellierung",
                            "Verwendung von XML und JSON für die Datenstrukturierung",
                            "Erstellung und Verwaltung von Datenbasen"
                        ]
                    },
                    {
                        category: "Webentwicklung mit dynamischen Inhalten",
                        details: [
                            "Integration von XML/JSON-Daten in Webportale",
                            "Verwendung von serverbasierten Datenquellen",
                            "Entwicklung dynamischer Webportale"
                        ]
                    },
                    {
                        category: "Projektarbeit und Peer Review",
                        details: [
                            "Erstellung eines funktionierenden Projektes",
                            "Milestones und Peer Review der Projekte",
                            "Abgabe des finalen Projektes"
                        ]
                    }
                ],
                learningGoals: [
                    "Datenmodellierung mit XML und JSON beherrschen",
                    "Integration von dynamischen Daten in Webportale",
                    "Erstellung serverbasierter Datenquellen für Webanwendungen",
                    "Erfolgreiche Durchführung eines Projektes mit Peer Review"
                ]
            },
        },
        {
            title: "Einführung in die Informationsverarbeitung",
            id: "017",
            type: "Vorlesung",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Jun.-Prof.in Dr. Elisa Cugliana",
                "Prof. Dr. Øyvind Eide",
                "Prof. Dr. Nils Reiter",
                "apl. Prof. Dr. Gioele Barabucci"
            ],
            date: {
                weekday: "Do.",
                time: "10:00 - 11:30",
                place: "100 Hörsaal VIII"
            },
            content: {
                introduction: "Diese Vorlesung bietet eine Einführung in die Informationsverarbeitung, einschließlich der grundlegenden Theorien, Konzepte und Technologien der Informatik.",
                topics: [
                    {
                        category: "Grundlagen der Informationsverarbeitung",
                        details: [
                            "Einführung in Informationssysteme",
                            "Datenstrukturen und Algorithmen",
                            "Theorien der Informatik"
                        ]
                    },
                    {
                        category: "Technische Aspekte der Informationsverarbeitung",
                        details: [
                            "Arbeiten mit verschiedenen Softwaretools",
                            "Verarbeitung von Daten in Informationssystemen"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis der grundlegenden Theorien und Konzepte der Informationsverarbeitung",
                    "Fähigkeit, einfache Datenstrukturen und Algorithmen zu verstehen und anzuwenden",
                    "Kenntnis von verschiedenen Informationssystemen und deren Verwendung"
                ]
            },
        },
        {
            title: "Digital Objects",
            id: "018",
            type: "Seminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Susanne Kurz M.A."
            ],
            date: {
                weekday: "Do.",
                time: "12:00 - 13:30",
                place: "103 Seminarraum S89"
            },
            content: {
                introduction: "Das Seminar bietet einen Einblick in die Digitalisierung von 2D und 3D Objekten sowie die retrospektive Digitalisierung von Bildern und Texten auf fragilen Materialien. Es geht um die Erschließung, Sicherung und Veröffentlichung digitaler Objekte im Sammlungskontext und die Bedeutung von Standards und Metadaten.",
                topics: [
                    {
                        category: "Digitalisierung und Erschließung",
                        details: [
                            "Unterschiede zwischen digitalen Bibliotheken, Archiven und Museen",
                            "Unterschiedliche 2D und 3D Digitalisierungsmethoden",
                            "Erschließung und Sicherung von digitalen Objekten",
                            "Retrospektive Digitalisierung von Bildern und Texten"
                        ]
                    },
                    {
                        category: "Technische Aspekte und Standards",
                        details: [
                            "Verwendung von KI in digitalen Sammlungen",
                            "Wichtige Formate, Metadaten und Schnittstellen",
                            "Einführung in FDM (Forschungsdatenmanagement)",
                            "UML für die Datenmodellierung und Softwarearchitekturen (MVC)"
                        ]
                    },
                    {
                        category: "Praktische Anwendungen",
                        details: [
                            "Installation und Konfiguration von CMS und Repository-Software (WordPress, Drupal)",
                            "Digitale Sammlungen anlegen mit DSpace",
                            "Bewertung von Repositorien und deren FDM"
                        ]
                    },
                    {
                        category: "Externe Vorträge und Besuche",
                        details: [
                            "Vorträge von Experten aus den Bereichen Computerlinguistik, Archäoinformatik, digitale Geschichte und Kunstgeschichte",
                            "Besuch des Digitalisierungszentrums der Universitätsbibliothek"
                        ]
                    }
                ],
                learningGoals: [
                    "Verstehen der Unterschiede zwischen digitalen Bibliotheken, Archiven und Museen",
                    "Kenntnis unterschiedlicher 2D und 3D Digitalisierungsmethoden",
                    "Verwendung von KI in digitalen Sammlungen und die Probleme von Bias",
                    "Verständnis von Metadaten, Schnittstellen und Standards sowie deren Bedeutung für digitale Objekte",
                    "Anwendung von FDM und Wissen um Datenmodellierung und Softwarearchitekturen"
                ]
            },
        },
        {
            title: "Sprachliche Informationsverarbeitung",
            id: "019",
            type: "Vorlesung",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Do.",
                time: "12:00 - 13:30",
                place: "103 Seminarraum S91"
            },
            content: {
                introduction: "Die Sprachliche Informationsverarbeitung (Natural Language Processing, Computational Linguistics) befasst sich mit der Verarbeitung natürlicher Sprache mithilfe von Computern. In dieser Vorlesung werden die theoretischen und praktischen Grundlagen der Sprachverarbeitung behandelt, einschließlich quantitativer Methoden und maschinellen Lernens.",
                topics: [
                    {
                        category: "Einführung und Grundlagen",
                        details: [
                            "Ambiguität und linguistische Ebenen",
                            "Übersicht und Einführung in Sprachverarbeitung",
                            "Sprachliche Beschreibungskategorien"
                        ]
                    },
                    {
                        category: "Quantitative Methoden und maschinelles Lernen",
                        details: [
                            "Quantitative Betrachtung von Wörtern",
                            "Zipf'sches Gesetz, Typ-Token-Ratio",
                            "Automatische Vorhersage linguistischer Eigenschaften",
                            "Evaluierung von maschinellen Lernverfahren"
                        ]
                    },
                    {
                        category: "Maschinelles Lernen",
                        details: [
                            "Naive Bayes Klassifikator",
                            "Logistische Regression",
                            "Gradientenabstieg",
                            "Neurale Netzwerke und Word Embeddings"
                        ]
                    },
                    {
                        category: "Praktische Aufgaben und Anwendungen",
                        details: [
                            "Typ-Token-Ratio Berechnung",
                            "Linguistische und nicht-linguistische Annotation",
                            "Handschriftliche Ziffernerkennung mit logistischer Regression",
                            "Multiklassen-Klassifikation mit Word Embeddings"
                        ]
                    }
                ],
                learningGoals: [
                    "Verstehen von Konzepten der Sprachverarbeitung und linguistischen Ebenen",
                    "Anwendung quantitativer Methoden zur Analyse sprachlicher Phänomene",
                    "Kenntnis und Anwendung von maschinellen Lernmethoden in der Sprachverarbeitung",
                    "Praktische Erfahrung mit Aufgaben aus dem Bereich der Sprachverarbeitung, wie z.B. Typ-Token-Ratio und maschinelles Lernen"
                ]
            }
        },
        {
            title: "Deep Learning",
            id: "020",
            type: "Kolloquium",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Dr. Janis Pagel"
            ],
            date: {
                weekday: "Do.",
                time: "12:00 - 13:30",
                place: "106 Seminarraum S24"
            },
            content: {
                introduction: "Im Kurs sollen grundlegende Kenntnisse vermittelt werden, die benötigt werden, um mit Deep Learning Textdaten auswerten und verarbeiten zu können. Dies umfasst die Einführung in Python, Git und Grundlagen des deep-learning-basierten Natural Language Processing.",
                topics: [
                    {
                        category: "Einführungen und Grundlagen",
                        details: [
                            "Einführung in Python und Git",
                            "Grundlagen des Deep Learning",
                            "Datenvorverarbeitung und Troubleshooting"
                        ]
                    },
                    {
                        category: "Deep Learning Modelle",
                        details: [
                            "Feedforward Neural Networks (FFNNs)",
                            "Lineare und logistische Regression",
                            "Gradient Descent und Backpropagation",
                            "Recurrent Neural Networks (RNNs)",
                            "Long Short-Term Memory Units (LSTMs)",
                            "Transformer und BERT"
                        ]
                    },
                    {
                        category: "Praktische Anwendungen",
                        details: [
                            "Evaluierung von Deep Learning Modellen",
                            "Overfitting und Regularisierung",
                            "Dropout und Input Representation",
                            "Word Embeddings und Language Modelling"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis der Grundlagen des Deep Learning für Textdaten",
                    "Kenntnis der Konzepte von Feedforward Neural Networks, RNNs, LSTMs und Transformer",
                    "Praktische Anwendung von Python und Git im Deep Learning Kontext",
                    "Verarbeitung und Auswertung von Textdaten mittels Deep Learning",
                    "Evaluierung und Verbesserung von Deep Learning Modellen"
                ]
            },
        },
        {
            title: "Public Humanities Tools",
            id: "021",
            type: "Übung",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Dr. Jürgen Hermes"
            ],
            date: {
                weekday: "Do.",
                time: "14:00 - 15:30",
                place: "S89"
            },
            content: {
                introduction: "Die Übung beschäftigt sich mit Software-Tools, die für Public Humanities Projekte genutzt werden oder genutzt werden könnten. Es wird ein Überblick über Public Humanities gegeben, und verschiedene Projekte werden vorgestellt.",
                topics: [
                    {
                        category: "Einführung",
                        details: [
                            "Was sind Public Humanities?",
                            "Unterschiedliche Public Humanities Projekte"
                        ]
                    },
                    {
                        category: "Projekte und Tools",
                        details: [
                            "Evaluation / Weiterentwicklung von in PH-Projekten eingesetzten Tools",
                            "Sicherung von Content verschiedener Social-Media-Plattformen",
                            "Durchführung / Veröffentlichung eines eigenen Projekts"
                        ]
                    },
                    {
                        category: "Organisation und Ablauf",
                        details: [
                            "Erstes Drittel: Einführung und Teamaufstellung",
                            "Letztes Drittel: Präsentation der Kleinprojekte im Plenum"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis der Public Humanities und relevanter Software-Tools",
                    "Praktische Umsetzung und Entwicklung von Kleinprojekten",
                    "Erfahrung in der Arbeit mit Public Humanities Projekten und Tools"
                ]
            },
        },
        {
            title: "Anwendungen der Computerlinguistik",
            id: "022",
            type: "Hauptseminar",
            semester: "Wintersemester 2024 / 2025",
            teachers: [
                "Prof. Dr. Nils Reiter"
            ],
            date: {
                weekday: "Do.",
                time: "15:40 - 17:10",
                place: "S89"
            },
            content: {
                introduction: "In diesem Hauptseminar werden Experimente in der Computerlinguistik betrachtet und deren gesamter Lebenszyklus besprochen. Der Fokus liegt auf der Planung und Durchführung von Experimenten, der Auswertung von Datensätzen und der Interpretation sowie dem Bericht der Ergebnisse. Die Studierenden integrieren dabei ihr Wissen aus dem Modul Computerlinguistik.",
                topics: [
                    {
                        category: "Experimentelle Methoden",
                        details: [
                            "Planung und Formulierung einer Hypothese",
                            "Umsetzung des Experiments mit geeigneten Datensätzen",
                            "Auswertung und Interpretation der Ergebnisse",
                            "Bericht über das Experiment"
                        ]
                    },
                    {
                        category: "Experimente",
                        details: [
                            "Extraktion von Paaren aus Begriffen und Definitionen aus englischsprachigen Fließtexten",
                            "Identifikation von Propaganda-Techniken in Nachrichtenüberschriften",
                            "Erkennung von Humor und Offensivität in Tweets und Witzen"
                        ]
                    },
                    {
                        category: "Voraussetzungen und Prüfungsleistung",
                        details: [
                            "Die Kenntnisse aus dem Modul 'Grundlagen der Computerlinguistik' werden vorausgesetzt.",
                            "Die Studienleistung umfasst fünf Hausaufgaben zu verschiedenen Aspekten der Modulprüfung.",
                            "Die Modulprüfung erfolgt durch die selbständige Durchführung eines Experiments und das Schreiben eines wissenschaftlichen Papers."
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis für den gesamten Lebenszyklus eines computerlinguistischen Experiments",
                    "Erfahrung in der Planung, Durchführung und Auswertung von Experimenten",
                    "Fähigkeit, ein Experiment selbstständig durchzuführen und die Ergebnisse zu dokumentieren"
                ]
            }
        },
        {
            title: "IT-Zertifikat der Phil. Fak.: Advanced IT Basics",
        id: "023",
        type: "Seminar",
        semester: "Sommersemester 2024",
        teachers: ["Laura Pascale Berg"],
        degree: ["IT-Zertifikat der Philosophischen Fakultät"],
        date: {
            weekday: "Mo.",
            time: "14:00 - 15:30",
            place: "103 S89",
        },
        subPages: [
            { title: "Infos zum Kurs, Teilnahmebedingungen", id: "013001", subPages: [] },
            { title: "Computer-Hardware und BIOS / UEFI", id: "013002", subPages: [] },
            { title: "Grundlagen Betriebssysteme", id: "013003", subPages: [] },
            { title: "Betriebssystem Windows", id: "013004", subPages: [] },
            { title: "Open Source", id: "013005",  subPages: [] },
            { title: "Microsoft Office", id: "013006", subPages: [
                { title: "Word", id: "013007", subPages: [] },
                { title: "Excel", id: "013008", subPages: [] },
                { title: "PowerPoint", id: "013009", subPages: [] }
            ] },
            { title: "Libreoffice / Grundlagen Datenbanken", id: "013010", subPages: [] },
            { title: "Bildbearbeitung in Theorie und Praxis", id: "013011", subPages: [] },
            { title: "Datenschutz und Informationssicherheit", id: "013012", subPages: [] },
            { 
                title: "Betriebssystem Linux", 
                id: "013013", 
                subPages: [
                    { title: "Ubuntu-Linux ausprobieren", id: "013014", subPages: [] },
                    { title: "Kommandozeile - Shell - Terminal", id: "013015", subPages: [] },
                    { title: "Computer im Computer: Virtuelle Maschinen (VM)", id: "013016", subPages: [] }
                ] 
            },
            { title: "Netzwerktechnik I", id: "013017", subPages: [] },
            { title: "Netzwerktechnik II - Netzwerksicherheit", id: "013018", subPages: [] },
            { 
                title: "Mail", 
                id: "013019", 
                subPages: [
                    { title: "Übung telnet – Mail über Kommandozeile versenden", id: "013020", subPages: [] }
                ] 
            }
        ],
        content: {
            introduction: "Herzlich Willkommen! In dem Kurs Advanced IT-Basics geht es einmal quer durch die Grundlagen der Informationstechnik...",
            topics: [
              {
                category: "Grundlagen",
                details: [
                  "Computer-Hardware und Informationstechnik",
                  "Betriebssysteme (Windows, Linux), Konsole",
                  "Datenschutz, Informationssicherheit und IT-Sicherheit",
                  "Open Source in Theorie und Praxis (z.B. LibreOffice)"
                ]
              },
              {
                category: "Medien & Internet",
                details: [
                  "Grundlagen des digitalen Audios und Podcasting (Audacity)",
                  "Grundlagen der Bildbearbeitung (GIMP)",
                  "Internetkommunikation & Netzwerksicherheit: Client-Server-Modelle, Webserver (Apache), VPN",
                  "Kommunikationsprotokolle und Identitätsmanagement: E-Mail (POP, IMAP, SMTP), LDAP"
                ]
              }
            ],
            learningGoals: [
            "Hardware und Betriebssysteme: Wie funktioniert ein Rechner?",
            "Konsole: Geschichte, Befehle, Navigation",
            "Datenschutz & IT-Sicherheit: DSGVO, Bedrohungen, Schwachstellen",
            "Bildbearbeitung: Pixel, Auflösung, Farbräume",
            "Internetkommunikation: Webserver, Protokolle, VPN",
            "E-Mail: Mailserver, Verschlüsselung, Sicherheit",
            "Identitätsmanagement: LDAP, Authentifizierung"
            ]
        },
        },
        {
            title: "Einführung in die Statistik",
            id: "024",
            type: "Übung",
            semester: "Sommersemester 2024",
            teachers: ["Dr. Jürgen Hermes"],
            degree: ["Bachelor Informationsverarbeitung"],
            date: {
                weekday: "Mi.",
                time: "14:00 - 15:30",
                place: "S89 / Computerpool S60",
            },
            subPages: [],
            content: {
                introduction: "Der Kurs vermittelt die Grundlagen der Statistik und gibt eine grundlegende Einführung in die Programmiersprache R.",
                topics: [
                    {
                        category: "Block bis nach Pfingsten",
                        details: [
                            "Einführung in die Programmiersprache R"
                        ]
                    },
                    {
                        category: "Block nach Pfingsten",
                        details: [
                            "Einführung in die wichtigsten Begriffe und Konzepte der statistischen Auswertung",
                        ]
                    }
                ],
                learningGoals: [
                    "Verstehen der Grundlagen der Programmiersprache R",
                    "Erlernen der statistischen Auswertung"
                ]
            }
        },
        {
            title: "Algorithmen und Logik II",
            id: "025",
            type: "Übung",
            semester: "Sommersemester 2024",
            teachers: ["Susanne Kurz M.A."],
            degree: ["Master Recht der Digitalisierung"],
            date: {
                weekday: "Do.",
                time: "16:00 - 17:30",
                place: "103 Seminarraum S93",
            },
            subPages: [],
            content: {
                introduction: "Datenaufbereitung und Codieren mit HTML und CSS: Sie werden lernen, wie Sie Daten für die Verwendung in Webanwendungen aufbereiten und formatieren können.",
                topics: [
                    {
                        category: "Codieren",
                        details: [
                            "HTML (Hypertext Markup Language) für die Strukturierung von Webinhalten",
                            "CSS (Cascading Style Sheets) für das Styling und Layout"
                        ]
                    },
                    {
                        category: "Datenmodellierung",
                        details: [
                            "Konzepte unterschiedlicher Datenmodellierung",
                            "Praktisches Arbeiten mit den Datenformaten JSON (JavaScript Object Notation) und XML (Extensible Markup Language)"
                        ]
                    },
                    {
                        category: "Erstes Programmieren mit JavaScript",
                        details: [
                            "Einführung in die Programmierung mit JavaScript",
                            "Grundlegende Programmierkonzepte"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis von Datenaufbereitung und Codieren",
                    "Erste Programme schreiben können"
                ]
            },
        },
        {
            title: "Die Digitale Gesellschaft",
            id: "026",
            type: "Hauptseminar",
            semester: "Wintersemester 2023 / 2024",
            teachers: ["Prof. Dr. Nils Reiter"],
            degree: ["Master Informationsverarbeitung | Master Medieninformatik | Master Informatik"],
            date: {
                weekday: "Di.",
                time: "12:00 - 13:30",
                place: "103 Seminarraum S91"
            },
            content: {
                introduction: "Dieses Hauptseminar setzt sich mit den technischen Aspekten aktueller, gesellschaftlicher und politischer Debatten ausseinander. Ziel ist es einerseits, einen Überblick über den Einfluss von Technik auf politische und gesellschaftliche Entscheidungen zu gewinnen, und andererseits zu verstehen, welche technischen Grundlagen in den Bereichen jeweils zu kennen sind.",
                topics: [
                    {
                        category: "Wahlcomputer",
                        details: [
                            "Politische Wahlen online/digital - technischer Sachstand"
                        ]
                    },
                    {
                        category: "Vorstellung",
                        details: [
                            "Unterschiedliche Public Humanities Projekte"
                        ]
                    },
                    {
                        category: "Elektronische Patientenakte (ePA)",
                        details: [
                            "Planung und Umsetzung",
                            "Technischen und organisatorischen Anforderungen"
                        ]
                    },
                    {
                        category: "Datenschutz-Grundverordnung (DSGVO)",
                        details: [
                            "Die Bedeutung von Cookiebannern",
                            "Einschätzung der technischen Regelungen"
                        ]
                    },
                    {
                        category: "Digitale Gewalt gegen Frauen",
                        details: [
                            "Digitale Bedrohungen und Schutz",
                            "Stand der Technik und Rechtslage"
                        ]
                    },
                    {
                        category: "Digitales Erbe",
                        details: [
                            "Erbe von Dateien und Passwörtern",
                            "Rechtliche Regelungen und technische Probleme"
                        ]
                    },
                    {
                        category: "Online-Durchsuchung",
                        details: [
                            "Stand der Diskussion, Stand der Technik"
                        ]
                    },
                    {
                        category: "Chatkontrolle",
                        details: [
                            "Vorschlag auf EU-Ebene, Probleme und Alternativen"
                        ]
                    },
                    {
                        category: "Künstliche Intelligenz und das Urheberrecht",
                        details: [
                            "Urheberrechtsverletzung und Folgen für KI"
                        ]
                    },
                    {
                        category: "Phänomen Hate Speech",
                        details: [
                            "Automatische Erkennung",
                            "Rechtliche und praktische Seite"
                        ]
                    }
                ],
                learningGoals: [
                    "Überblick über den Einfluss von Technik auf politische und gesellschaftliche Entscheidungen gewinnen",
                    "Technische Grundlagen in den jeweiligen Bereichen kennen"]
            }
        }, 
        {
            title: "Basissysteme der Informationsverarbeitung 1 - BSI 1",
            id: "027",
            type: "Seminar",
            semester: "Wintersemester 2023 / 2024",
            teachers: [
                "Susanne Kurz M.A."
            ],
            date: {
                weekday: "Mi.",
                time: "10:00 - 11:30",
                place: "SSC S34"
            },
            content: {
                introduction: "In diesem Seminar werden wir mit JavaScript arbeiten, nach einer kurzen Einführung in die Sprache werden wir uns mit den Besonderheiten von JavaScript beschäftigen und dann das Userinterface mit der Bibliothek React programmieren.",
                topics: [
                {
                    category: "Einführung in die Programmierung mit JavaScript",
                    details: [
                    "Grundlegende Syntax und Struktur von JavaScript-Programmen",
                    "Unterschiede zu anderen Programmiersprachen"
                    ]
                },
                {
                    category: "Variablen, Datentypen und Operatoren",
                    details: [
                    "Variablendeklaration mit var, let und const",
                    "Datentypen und Typkonvertierung in JavaScript"
                    ]
                },
                {
                    category: "Kontrollstrukturen und Funktionen",
                    details: [
                    "Bedingungen (if, switch) und Schleifen (for, while, do-while)",
                    "Arrow Functions und anonyme Funktionen"
                    ]
                },
                {
                    category: "Objektorientierte Programmierung (OOP) in JavaScript",
                    details: [
                    "Prototypenbasierte Vererbung",
                    "ES6-Klassen und Konstruktoren"
                    ]
                },
                {
                    category: "Vererbung und Polymorphismus",
                    details: [
                    "Klassenhierarchien in JavaScript",
                    "Methodenüberschreibung und Polymorphismus"
                    ]
                },
                {
                    category: "Fehlermanagement und Debugging",
                    details: [
                    "Try-Catch-Handling in JavaScript",
                    "Debugging mit den Developer Tools"
                    ]
                },
                {
                    category: "Arbeiten mit der JavaScript Standard-Klassenbibliothek",
                    details: [
                    "Wichtige Objekte: Math, Date, JSON",
                    "Umgang mit asynchronem Code (Promises, Async/Await)"
                    ]
                },
                {
                    category: "Einführung in Datenstrukturen und Algorithmen",
                    details: [
                    "Arrays und Objekte",
                    "Einführung in Maps und Sets"
                    ]
                },
                {
                    category: "Grundlagen der funktionalen Programmierung",
                    details: [
                    "Higher-Order Functions",
                    "Array-Methoden wie map(), filter(), reduce()"
                    ]
                },
                {
                    category: "Testen und Debugging von JavaScript-Programmen",
                    details: [
                    "Unit-Tests mit Jest",
                    "Debugging-Techniken für JavaScript-Code"
                    ]
                }
                ],
                learningGoals: [
                "Verständnis für die Grundlagen von JavaScript und seiner Besonderheiten",
                "Fähigkeit, einfache JavaScript-Programme zu schreiben und zu strukturieren",
                "Anwendung von Kontrollstrukturen zur Steuerung des Programmflusses",
                "Entwicklung und Nutzung eigener Funktionen und Klassen",
                "Verständnis für asynchrones Programmieren und Event-Handling",
                "Sichere Nutzung von modernen JavaScript-Features (ES6+)",
                "Grundkenntnisse in der funktionalen Programmierung mit JavaScript",
                "Kenntnisse im Debugging und Testen von JavaScript-Code",
                "Fähigkeit zur Entwicklung von User Interfaces mit React"
                ]
            },
        },
        {
            title: "Einführung in die Statistik",
            id: "028",
            type: "Übung",
            semester: "Sommersemester 2023",
            teachers: ["Dr. Jürgen Hermes"],
            degree: ["Bachelor Informationsverarbeitung"],
            date: {
                weekday: "Mi.",
                time: "14:00 - 15:30",
                place: "S57 / Computerpool S60",
            },
            subPages: [],
            content: {
                introduction: "Der Kurs vermittelt die Grundlagen der Statistik und gibt eine grundlegende Einführung in die Programmiersprache R.",
                topics: [
                    {
                        category: "Block bis Pfingsten",
                        details: [
                            "Einführung in die Programmiersprache R"
                        ]
                    },
                    {
                        category: "Block nach Pfingsten",
                        details: [
                            "Einführung in die wichtigsten Begriffe und Konzepte der statistischen Auswertung",
                        ]
                    },
                ],
                learningGoals: [
                    "Verstehen der Grundlagen der Programmiersprache R",
                    "Erlernen der statistischen Auswertung"
                ]
            },
        },
        {
            title: "Anatomie der Schriftsprachen",
            id: "029",
            type: "Übung",
            semester: "Wintersemester 2022 / 2023",
            teachers: ["Dr. Jürgen Hermes"],
            degree: ["Master Informationsverarbeitung Master Medieninformatik | Master Linguistik - Computerlinguistik"],
            date: {
                weekday: "Mo.",
                time: "12:00 - 13:30",
                place: "S69",
            },
            subPages: [],
            content: {
                introduction: "Ziel des Kurses ist die Auslotung von Gemeinsamkeiten und Unterschieden verschiedener Schriftsprachen.",
                topics: [
                    {
                        category: "Schriftsprachen",
                        details: [
                            "Zeichensysteme",
                            "Schriftsysteme",
                            "Exkurs Kryptologie"
                        ]
                    },
                    {
                        category: "R-Programmierprojekt",
                        details: [
                            "R und RStudio",
                        ]
                    },
                ],
                learningGoals: [
                    "Erlangen eines besseren Verständnisses von Schriftsprachen",
                    "R-Programmiercode innerhalb der Entwicklungsumgebung RStudio ausführen und auf ihre Anwendung anpassen können"
                ]
            },
        },
        {
            title: "Embeddings",
            id: "030",
            type: "Hauptseminar",
            semester: "Sommersemester 2022",
            teachers: ["Prof. Dr. Nils Reiter"],
            degree: ["Master Informationsverarbeitung | Master Linguistik - Computerlinguistik"],
            date: {
                weekday: "Do.",
                time: "16:00 - 17:30",
                place: "Seminarraum S85"
            },
            content: {
                introduction: "Mit 'Embeddings' wird eine Sammlung von Methoden bezeichnet, um Objekte in hochdimensionalen Vektorräumen zu repräsentieren. Klassifiziert, z. B. nach Wortarten, werden dann nicht mehr (nur) die Oberflächenformen, sondern die Vektoren, die auch Informationen über den Kontext beinhalten.",
                topics: [
                    {
                        category: "Einführung und Grundlagen",
                        details: [
                            "Methoden zum Erzeugen von Embeddings",
                            "Anwendungen von Embeddings",
                            "Forschungen, in denen Embeddings für andere Objekte als Wörter eingesetzt werden"
                        ]
                    },
                    {
                        category: "Praktische Aufgaben und Anwendungen",
                        details: [
                            "Typ-Token-Ratio Berechnung",
                            "Linguistische und nicht-linguistische Annotation",
                            "Handschriftliche Ziffernerkennung mit logistischer Regression",
                            "Multiklassen-Klassifikation mit Word Embeddings"
                        ]
                    }
                ],
                learningGoals: [
                    "Embeddings erzeugen und anwenden können"]
            }
        }, 
        {
            title: "Public Humanities Tools",
            id: "031",
            type: "Übung",
            semester: "Wintersemester 2021 / 2022",
            teachers: ["Dr. Jürgen Hermes"],
            degree: ["Master Informationsverarbeitung | Master Medieninformatik | Master Linguistik - Computerlinguistik"],
            date: {
                weekday: "Mo.",
                time: "12:00 - 13:30",
                place: "Virtueller Raum"
            },
            content: {
                introduction: "Wie der Titel schon sagt, liegt der Fokus der Übung auf Software-Tools, die für Public Humanities Projekte genutzt werden (oder genutzt werden könnten).",
                topics: [
                    {
                        category: "Einführung",
                        details: [
                            "Was sind Public Humanities?"
                        ]
                    },
                    {
                        category: "Vorstellung",
                        details: [
                            "Unterschiedliche Public Humanities Projekte"
                        ]
                    },
                    {
                        category: "Projektvorschläge für die Umsetzung in Teams",
                        details: [
                            "Evaluation / Weiterentwicklung von in PH-Projekten eingesetzten Tools",
                            "Content-Bereitstellung aus verschiedenen Social-Media-Plattformen",
                            "Mapping von Dostojewskis Spuren in Deutschland (real und fiktiv)"
                        ]
                    }
                ],
                learningGoals: [
                    "Verständnis von Public Humanities",
                    "Public Humanities Projekte identifizieren können"]
            }
        }, 
];

export default VSData;