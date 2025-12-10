// Datei: callback_promise_demo.js

const fs = require('fs');
const fsPromises = require('fs').promises; // Promise-Version für moderne Nutzung
const DATEI_NAME = 'daten.txt';
const DATEI_INHALT = 'Dies ist die ursprüngliche Zeile.\n';
const NEUER_INHALT = 'Daten erfolgreich verarbeitet!';

// --- Vorbereitung: Datei erstellen (Synchron, nur für Demo-Setup) ---
try {
    fs.writeFileSync(DATEI_NAME, DATEI_INHALT);
    console.log(`\nInitialisierung: Datei "${DATEI_NAME}" wurde erstellt.`);
} catch (fehler) {
    console.error("Fehler bei der Initialisierung:", fehler);
}
console.log("-----------------------------------------");


// ===================================================================
// 1. LÖSUNG: CALLBACK HELL (Veraltet und schwer zu warten)
// ===================================================================
function callbackDemo() {
    console.log("1. Starte Callback-Demo...");

    // 1. Lesen (Schritt A)
    fs.readFile(DATEI_NAME, 'utf-8', (fehlerA, daten) => {
        if (fehlerA) {
            console.error(fehlerA);
            return;
        }
        
        const datenProzessiert = daten.toUpperCase(); // Daten verarbeiten

        // 2. Schreiben in eine neue Datei (Schritt B)
        fs.writeFile('callback_ergebnis.txt', datenProzessiert, (fehlerB) => {
            if (fehlerB) {
                console.error(fehlerB);
                return;
            }
            
            // 3. Lesen der neuen Datei (Schritt C)
            fs.readFile('callback_ergebnis.txt', 'utf-8', (fehlerC, neueDaten) => {
                if (fehlerC) {
                    console.error(fehlerC);
                    return;
                }
                
                // 4. Endgültige Aktion
                console.log(`[CALLBACK HELL] Letzter Schritt: ${neueDaten.trim().substring(0, 30)}...`);
                console.log(chalk.red.bold("⚠️ Callback-Kette beendet. (Schwer lesbar)"));
            });
        });
    });
}


// ===================================================================
// 2. LÖSUNG: ASYNC/AWAIT mit FS Promises (Empfohlene Methode)
// ===================================================================
async function promiseDemo() {
    console.log("\n2. Starte Promise (Async/Await) Demo...");
    const ZIEL_DATEI = 'promise_ergebnis.txt';

    try {
        // 1. Lesen (Schritt A)
        const daten = await fsPromises.readFile(DATEI_NAME, 'utf-8');
        
        // 2. Daten verarbeiten
        const datenProzessiert = daten.replace('ursprüngliche', 'PROZESSIERTE');
        
        // 3. Schreiben in eine neue Datei (Schritt B)
        await fsPromises.writeFile(ZIEL_DATEI, datenProzessiert);
        
        // 4. Lesen der neuen Datei (Schritt C)
        const finaleDaten = await fsPromises.readFile(ZIEL_DATEI, 'utf-8');
        
        // 5. Endgültige Aktion
        console.log(`[PROMISE/ASYNC] Letzter Schritt: ${finaleDaten.trim().substring(0, 30)}...`);
        console.log(chalk.green.bold("✅ Promise-Kette beendet. (Einfacher lesbar)"));

    } catch (fehler) {
        console.error(chalk.red("Ein Fehler ist in der Promise-Kette aufgetreten:"), fehler.message);
    }
}

// Führen Sie beide Demos aus (mit kurzer Verzögerung, um die asynchrone Natur zu zeigen)
const chalk = require('chalk');
callbackDemo();
setTimeout(promiseDemo, 100);
