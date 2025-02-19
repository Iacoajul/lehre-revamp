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
            { 
                title: "Open Source", 
                id: "001005", 
                subPages: [
                ] 
            },
            { title: "Microsoft Office", id: "001006", subPages: [
                { title: "Word", id: "001007", subPages: [] },
                { title: "Excel", id: "001008", subPages: [] },
                { title: "PowerPoint", id: "001009", subPages: [] }
            ] },
            { title: "Libreoffice (inklusive Base-Datenbanksoftware) / Grundlagen Datenbanken", id: "001010", subPages: [] },
            { title: "Bildbearbeitung in Theorie und Praxis", id: "001011", subPages: [] },
            { title: "Datenschutz und Informationssicherheit", id: "001012", subPages: [] },
            { 
                title: "Betriebssystem Linux", 
                id: "001013", 
                subPages: [
                    { title: "Ubuntu-Linux ausprobieren", id: "001014", subPages: [] },
                    { title: "Kommandozeile - Shell - Terminal", id: "001015", subPages: [] },
                    { title: "Fake-Computer im Computer: Virtuelle Maschinen (VM) einsetzen", id: "001016", subPages: [] }
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
        content: "content"
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
        content: "content"
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
        content: "content"
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
        content: "content"
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
        content: "content"
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
        content: "content"
    },
    //-----------------Test, später mit richtigen VS-Daten überschreiben--------------------
    {
        title: "Digital Humanities – Theorie und Praxis",
        id: "005",
        type: "Kolloquium",
        semester: "Sommersemester 2024",
        teachers: ["apl. Prof. Dr. Gioele Barabucci"],
        degree: ["Bachelor Informationsverarbeitung", "Bachelor Medieninformatik "],
        date: {
            weekday: "Di.",
            time: "12:00 - 13:30",
            place: "Philosophicum, S89",
        },
        subPages: [],
        content: "content"
    },
    {
        title: "Digital Humanities – Theorie und Praxis",
        id: "005",
        type: "Kolloquium",
        semester: "Wintersemester 2023 / 2024",
        teachers: ["apl. Prof. Dr. Gioele Barabucci"],
        degree: ["Bachelor Informationsverarbeitung", "Bachelor Medieninformatik "],
        date: {
            weekday: "Di.",
            time: "12:00 - 13:30",
            place: "Philosophicum, S89",
        },
        subPages: [],
        content: "content"
    },


];

export default VSData;