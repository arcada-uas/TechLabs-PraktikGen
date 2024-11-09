async function generatePlan() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const formData = {
        title: "PRAKTIKPLAN",
        subtitle: "Studerandes kontaktuppgifter:",
        date: getDate(),
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        subtitle2: "Företagets kontaktuppgifter:",
        department: document.getElementById('department').value,
        address: document.getElementById('address').value,
        website: document.getElementById('website').value,
        contactPerson: document.getElementById('contactPerson').value,
        contactPhone: document.getElementById('contactPhone').value,
        email: document.getElementById('email').value,
        subtitle3: "Titel & beskrivning:",
        assignment: document.getElementById('assignment').value,
        subtitle4: "Förhandskunskaper:",
        prerequisites: document.getElementById('prerequisites').value,
        subtitle5: "Arbetsuppgifter:",
        tasks: document.getElementById('tasks').value,
    };

     // Add a logo image
    const imgData = './logo_small.png   '; // Placeholder image URL
    doc.addImage(imgData, 'PNG', 110, 0, 80, 40); // Adjust dimensions as needed

    // Add form data to PDF
    doc.setFontSize(20);
    doc.text(formData.title, 20, 20);
    
    doc.setFontSize(16);
    doc.text(formData.subtitle, 20, 30);
    doc.setDrawColor(0);    doc.setFillColor(255, 255, 255);
    doc.rect(20, 35, doc.internal.pageSize.width * 0.8, 25  , 'FD');
    doc.text(`Datum: ${formData.date}`, 25, 42, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Namn: ${formData.name}`, 25, 49, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Telefon: ${formData.phone}`, 25, 56, { maxWidth: doc.internal.pageSize.width * 0.75 });
    
    doc.setFontSize(16);
    doc.text(formData.subtitle2, 20, 70);
    doc.setDrawColor(0);    doc.setFillColor(255, 255, 255);
    doc.rect(20, 75, doc.internal.pageSize.width * 0.8, 46, 'FD');
    doc.text(`Namn/Avdelning: ${formData.department}`, 25, 82, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Adress: ${formData.address}`, 25, 89, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Webbsida: ${formData.website}`, 25, 96, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Kontaktperson/Handledare: ${formData.contactPerson}`, 25, 103, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Telefon: ${formData.contactPhone}`, 25, 110, { maxWidth: doc.internal.pageSize.width * 0.75 });
    doc.text(`Epost: ${formData.email}`, 25, 117, { maxWidth: doc.internal.pageSize.width * 0.75 });
    
    doc.setFontSize(16);
    doc.text(formData.subtitle3, 20, 130);
    doc.setDrawColor(0);    doc.setFillColor(255, 255, 255);
    doc.rect(20, 135, doc.internal.pageSize.width * 0.8, 30, 'FD');
    doc.text(`${formData.assignment}`, 25, 142, { maxWidth: doc.internal.pageSize.width * 0.75 });
    
    doc.setFontSize(16);
    doc.text(formData.subtitle4, 20, 175);
    doc.setDrawColor(0);    doc.setFillColor(255, 255, 255);
    doc.rect(20, 180, doc.internal.pageSize.width * 0.8, 30, 'FD');
    doc.text(`${formData.prerequisites}`, 25, 187, { maxWidth: doc.internal.pageSize.width * 0.75 });
    
    doc.setFontSize(16);
    doc.text(formData.subtitle5, 20, 220);
    // Black border, white fill for box
    doc.setDrawColor(0);    doc.setFillColor(255, 255, 255);
    doc.rect(20, 225, doc.internal.pageSize.width * 0.8, 30, 'FD');
    doc.text(`${formData.tasks}`, 25, 232, { maxWidth: doc.internal.pageSize.width * 0.75 });
   
    doc.save('report.pdf');
}

function toggleForm() {
    if (document.querySelector("#planForm").style.display == "") {
        document.querySelector("#planForm").style.display = "block";
    } else {
        document.querySelector("#planForm").style.display != "none"
    }
}

function getDate()
{
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm}
    today = dd+"."+mm+"."+yyyy;
    return today;
}