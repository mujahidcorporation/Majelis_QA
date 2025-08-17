const ebooks = [
  {
    title: "سفينة النجا",
    author: "Syekh Salim Bin Stumair al Hadromi",
    category: "fiqih",
    description: "kitab yang sangat mudah di pelajari untuk orang awam yang mau mempelajari hukum hukum islam",
    pdf: "pdf/safinatunajah.pdf"
  },
  {
    title: "نصائح العباد",
    author: "Syekh Nawawi Al Bantani",
    category: "tasawuf",
    description: "Kitab ini berisi nasehat nasehat",
    pdf: "pdf/Nashoihul Ibad.pdf"
  },
  {
    title: "نيل الرجاء",
    author: "Habib Ahmad Bin Umar Asy-Syathiri",
    category: "fiqih",
    description: "Kitab ini adalah penjelas dari kirab safinatunajah",
    pdf: "pdf/نيل الرجاء.pdf"
  },
   {
    title: "مختارالحديث الشريف",
    author: "Habib umar bin salim bin hafidz",
    category: "hadist",
    description: "Kitab ini adalah berisi hadist hadist pilihan",
    pdf: "pdf/Kitab - Mukhtarul Hadits  min Syifa'is Saqim.pdf"
  },
  {
    title: "راتب العطاس",
    author: "Habib Umar Bin Abdurahman Al-Athos",
    category: "wirid",
    description: "Kitab ini susunan doa",
    pdf: "pdf/Mengirim email راتب العطاس.pdf"
  }

];

function displayEbooks(category = "all") {
  const container = document.getElementById("ebook-list");
  container.innerHTML = "";

  const filteredBooks = category === "all" 
    ? ebooks 
    : ebooks.filter(book => book.category === category);

  if (filteredBooks.length === 0) {
    container.innerHTML = "<p>Tidak ada buku dalam kategori ini.</p>";
    return;
  }

  filteredBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "ebook-card";

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Penulis:</strong> ${book.author}</p>
      <p>${book.description}</p>
      <p><em>Kategori: ${book.category}</em></p>
      <a href="${book.pdf}" target="_blank" class="btn-pdf">Baca PDF</a>
    `;

    container.appendChild(card);
  });
}

function filterCategory(category) {
  displayEbooks(category);
}

window.onload = () => displayEbooks();
