Technische Dokumentation - Lehre Revamp

Unser Projekt ist eine (aus unserer Sicht) verbesserte Version der lehre.idh Website des Instituts für Digital Humanities an der Universität zu Köln. Im Wesentlichen besteht das Projekt aus einer Mainpage, welche die stattfindenden Veranstaltungen des Instituts auflistet und auf deren detaillierten Sub-Pages weiterleitet, wo der/die User*in weitere Informationen nachlesen kann.

Main Page - Lukas Schleicher
Die Main Page ist die erste Seite, auf der der/die User*in landet. Hier werden alle Veranstaltungen des aktuellen Semesters aufgelistet und nach Wochentagen sortiert angezeigt. Wir haben uns entschieden die Veranstaltungen als Boxen in einem Gitter-Muster anzuordnen, da wir dies für übersichtlicher halten als die Lösung auf der Originalseite. Weiter unten sind Vergangene Semester mit ihren jeweiligen Veranstaltungen zu finden. Jede Veranstaltung verlinkt ihre jeweilige detaillierte Sub-Page.

Navigation - Moritz Schwertzel
Die Navigation wird über einen React Router in App.jsx initiiert und unterscheidet zwischen Hauptseite und Unterseiten. Unterseiten werden mit ihrer individuellen ID aus dem Datensatz geladen. Diese ID bildet dann den URL-Anhang “…/veranstaltung/id”, während die Hauptseite entweder “.../main” oder keinen URL-Anhang hat. Da React Router clientseitig arbeiten, verursacht das wechseln zwischen verschiedenen Seiten keine neue Serverabfragen.

Die Unterseitenkomponente SubP enthält die vier Komponenten Header, Content, Sidebar und Footer. Beim Laden von Unterseiten werden aus dem Datensatz die der ID zugehörigen Veranstaltungsinformationen geladen, um Inhalte (Siehe Abschnitt Content) und Navigationsseiten zu laden. Die Sidebar enthält die Navigation und initiiert einen Navigationsbaum, der mit dem Hauptteil der ID aus der URL gefüttert wird. Zu diesem Zweck wird die ggf. längere ID einer Unterseite auf die ersten 3 Zeichen gesliced um den Navigationsbaum der Veranstaltung zu erhalten. Zusätzlich enthält die Sidebar Komponente die Collapse-Funktion der Sidebar auf Bildschirmen schmaler als 1200px. In einem solchen Fall wird die Sidebar durch einen Button, unter Verwendung eines Hooks, ein- und ausgeklappt.

In der Sidebar befindet sich die Navtree Komponente, welche sich um das Laden der Unterseitenstruktur kümmert, die Navigationsheadline/ den Link zur Hauptveranstaltungsseite zur Verfügung stellt und Navelement Komponenten für jede Unterseite erster Ordnung erstellt.

Navelement bildet das rekursive Herzstück der skalierbaren Navigation. Mit den Parametern id, title und subPages ausgestattet, wird eine Linkbox erstellt, die zur entsprechenden Unterseite führt. Sollten Unterseiten selbst weitere Unterseiten haben, wird das Navelement ausklappbar, um so die Unterseiten zweiter oder tieferer Ordnung freizulegen.

Da es sich um ein Mockup handelt, sind viele Veranstaltungsseiten und Ihre Unterseiten nicht in den Datensatz eingepflegt, was zu leeren Navigationsbäumen oder 404-Links führt. Um letzteres einzufangen, wurde in der Content Komponente eine Abfrage eingeführt, die im Fehlfall eine “Inhalt nicht gefunden” Information und einen Link zur Startseite rendert.

Header und Footer - Christina Schwarz
Header und Footer sind zwei beständige Komponenten, die jeweils auf der Hauptseite und allen Unterseiten geladen werden.
Das Logo im Header dient als Navigation zur Hauptseite. Wie im Abschnitt Navigation beschrieben, fungiert es mithilfe des React Routers und des URL-Anhangs “.../main” als Link. Durch das Styling wirken die Icons im Header und das Wort “Impressum” im Footer anklickbar. Dies soll suggerieren, dass es über dieses Mockup hinaus weiterführende Links geben würde.

Content der Sub-Pages - Lilli Fischer
Die Content-Komponente ist für die Anzeige der detaillierten Veranstaltungsinformationen auf den Unterseiten verantwortlich. Beim Laden einer Veranstaltung wird mit Hilfe der useParams-Funktion die Veranstaltungs-ID aus der URL extrahiert. Anschließend wird der passende Kurs aus dem Datensatz (Veranstaltungsdaten.js) ermittelt und die zugehörigen Informationen dynamisch in die Seite eingefügt. Ein wesentlicher Teil meiner Arbeit bestand darin, die Kurse in die Datei Veranstaltungsdaten.js einzutragen. Die Gestaltung der Content-Seite wurde mithilfe von CSS an das Design der Mainpage angepasst, um ein einheitliches und modernes Layout zu gewährleisten.

Data-handling - Alle
Die grundlegende Datenstruktur ist eine js Datei mit einem Array of Objects, in welchem alle relevanten zu den Veranstaltungen aufgelistet sind (Titel, Zeitpunkt, Ort, Content, etc.). Alle Komponenten extrahieren ihre benötigten Daten aus dieser Datei.