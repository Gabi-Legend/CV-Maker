let generateButton = document.getElementById("genereaza");

generateButton.addEventListener("click", generatePDF);

function generatePDF() {
  // valorile din index
  const nume = document.getElementById("nume").value;
  const email = document.getElementById("e-mail").value;
  const telefon = document.getElementById("nrTelefon").value;
  const adresa = document.getElementById("adresa").value;
  const descriere = document.getElementById("descriere").value;
  const educatie = document.getElementById("educatie").value;
  const experienta = document.getElementById("experienta").value;
  const skills = document.getElementById("skills").value;
  const limbi = document.getElementById("limbi").value;

  const content = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1 style="text-align:center;">${nume}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${telefon}</p>
      <p><strong>Address:</strong> ${adresa}</p>
      <hr>
      <h2>Professional Summary</h2>
      <p>${descriere}</p>
      <h2>Education</h2>
      <p>${educatie}</p>
      <h2>Work Experience</h2>
      <p>${experienta}</p>
      <h2>Skills</h2>
      <p>${skills}</p>
      <h2>Languages</h2>
      <p>${limbi}</p>
    </div>
  `;

  const element = document.createElement("div");
  element.innerHTML = content;

  // html2pdf biblioteca
  html2pdf()
    .from(element)
    .set({
      margin: 10,
      filename: `${nume}_CV.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .save();
}
