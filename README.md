# 📉 Callback Hell vs. Async/Await (FS Modul Demo)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Dateisystem](https://img.shields.io/badge/Modul-FS_File_System-yellow)
![Konzept](https://img.shields.io/badge/Konzept-Asynchronität-red)

## Projektübersicht
Dieses Lernprojekt ist eine direkte Demonstration der Entwicklung von **Asynchronität** in Node.js. Es vergleicht zwei Methoden zur Ausführung sequenzieller, nicht blockierender Operationen (Dateisystem I/O):

1.  Die veraltete, verschachtelte Methode (bekannt als **"Callback Hell"**).
2.  Die moderne, saubere Methode mithilfe von **`async/await`** und dem `fs.promises`-Modul.

Ziel ist es, die Lesbarkeit und Wartbarkeit moderner asynchroner Muster zu veranschaulichen.

## 🛠️ Verwendete Technologien
* **Node.js**
* **fs (File System)**: Natives Modul für Dateioperationen.
* **fs.promises**: Die moderne, Promise-basierte API des File Systems.
* **Callback-Funktionen**: Für die veraltete Demo.
* **Async/Await**: Für die saubere, moderne Demo.

## 🔑 Hauptfunktionalitäten
* **Callback Hell:** Zeigt die tiefe Verschachtelung von Callbacks bei der Ausführung von drei aufeinanderfolgenden I/O-Schritten.
* **Async/Await-Lösung:** Zeigt, wie dieselben sequenziellen I/O-Schritte linear und leicht lesbar mit `try...catch` implementiert werden.
* **Dateierstellung:** Erstellt und modifiziert lokale Textdateien (`daten.txt`, `callback_ergebnis.txt`, `promise_ergebnis.txt`).

## ⚙️ Installation und Ausführung

1.  **Code speichern:** Speichern Sie den Code als `callback_promise_demo.js`.
2.  **Ausführung:**
    ```bash
    node callback_promise_demo.js
    ```
    Beide Demos laufen fast gleichzeitig ab, was die nicht blockierende Natur von Node.js unterstreicht.
Wenn Sie mehr erfahren möchten, besuchen Sie https://machinegunsandacameralens.com/
