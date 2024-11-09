<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Praktikdokumentgenerator</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./jspdf.umd.min.js"></script>
    <script defer src="./script.js"></script>

</head>
<body>
    <h1>Praktik - Informationsteknik</h1>
    <p>Välkommen! Läs först officiella instruktionerna på <a href="https://start.arcada.fi/sv/utbildningar/informationsteknik/praktik">start.arcada.fi</a></p>
    
    <section>
        <h2>1. Praktikplanen</h2>
        Kolla ifall praktiken duger till Praktik 1 och/eller Praktik 2.<br>
        Fyll i formuläret nedan för att skapa praktikplanen.<br>
        Skicka den till bistromd@arcada.fi för gokännande.<br>
        <button type="button" onclick="toggleForm()">Visa formuläret</button> 

        <form id="planForm">           
            <h3>Studerandes kontaktuppgifter:</h3>
            <label for="name">Namn:</label>
            <input type="text" id="name" name="name"><br>
            <label for="phone">Telefon:</label>
            <input type="tel" id="phone" name="phone"><br>

            <h3>Företagets kontaktuppgifter:</h3>
            <label for="department">Namn/avdelning:</label>
            <input type="text" id="department" name="department"><br>
            <label for="address">Adress:</label>
            <input type="text" id="address" name="address"><br>
            <label for="website">Webbsida:</label>
            <input type="url" id="website" name="website"><br>
            <label for="contactPerson">Kontaktperson/Handledare:</label>
            <input type="text" id="contactPerson" name="contactPerson"><br>
            <label for="contactPhone">Telefon:</label>
            <input type="tel" id="contactPhone" name="contactPhone"><br>
            <label for="email">Epost:</label>
            <input type="email" id="email" name="email"><br>

            <label for="assignment">Arbetstitel & kort beskrivning:</label>
            <textarea rows="4" id="assignment" name="assignment"></textarea><br>
            <label for="prerequisites">Eventuella förhandskunskaper:</label>
            <textarea rows="4" id="prerequisites" name="prerequisites"></textarea><br>
            <label for="tasks">Förväntade arbetsuppgifter:</label>
            <textarea rows="4" id="tasks" name="tasks"></textarea><br>

            <button type="button" onclick="generatePlan()">Skapa praktikplan</button>
        </form>
    <section>

    <section>
        <h2>2. Praktikdagbok</h2>
        Ska ge mig en insikt om hur en typisk vecka såg ut,<br>
        vilka arbetsuppgifter du haft och vilka kunskaper som behövdes.<br>
        Skriv en .docx eller .md enligt <a href="https://start.arcada.fi/system/files/media/file/2019-07/Informationsteknik%20-%20praktikdagbok.pdf" target="_blank">modellen på start.</a><br>
        Skicka den till bistromd@arcada.fi tillsammans med praktikrapporten.<br>
    </section>    
    
    <section>
        <h2>3. Praktikrapport</h2>
        Ska ge mig insikt över företaget i sig, <br>
        hur stort det är och ifall ni haft fredagspizza.<br>
        Skriv en .docx eller .md enligt <a href="https://start.arcada.fi/system/files/media/file/2019-07/Informationsteknik%20-%20praktikrapport.pdf" target="_blank">modellen på start.</a><br>
        Skicka den till bistromd@arcada.fi tillsammans med praktikdagboken.<br>
    </section>
    
</body>
</html>