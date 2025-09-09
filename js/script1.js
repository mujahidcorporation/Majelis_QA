const ebooks = [
  {
    title: "Safinatu najah",
    author: "Syekh Salim Bin Stumair al Hadromi",
    category: "fiqih",
    description: "kitab yang sangat mudah di pelajari untuk orang awam yang mau mempelajari hukum hukum islam",
    pdf: "pdf/safinatunajah.pdf"
  },
  {
    title: "nashoihul ibad",
    author: "Syekh Nawawi Al Bantani",
    category: "tasawuf",
    description: "Kitab ini berisi nasehat nasehat",
    pdf: "pdf/Nashoihul Ibad.pdf"
  },
  {
    title: "Nailul Roja'",
    author: "Habib Ahmad Bin Umar Asy-Syathiri",
    category: "fiqih",
    description: "Kitab ini adalah penjelas dari kirab safinatunajah",
    pdf: "pdf/نيل الرجاء.pdf"
  },
   {
    title: "Mukhtarul Hadist Syarif",
    author: "Habib umar bin salim bin hafidz",
    category: "hadist",
    description: "Kitab ini adalah berisi hadist hadist pilihan",
    pdf: "pdf/Kitab - Mukhtarul Hadits  min Syifa'is Saqim.pdf"
  },
  {
    title: "Ratib Al-Athas",
    author: "Habib Umar Bin Abdurahman Al-Athos",
    category: "wirid",
    description: "Kitab ini susunan doa",
    pdf: "pdf/Mengirim email راتب العطاس.pdf"
  },
  {
  title: "Doa Penutup Majelis Al-Bantani",
    author: "Kyai Fakhrudin Al-Bantani",
    category: "wirid",
    description: "Kitab ini susunan doa",
    pdf: "pdf/Doa Penutup Majelis Al Bantai 2020.pdf"
  },
  {
  title: "Mulakhosa Ahkamu al Udhiya",
    author: "Alwi Bin Abdul Qodir Assaqof",
    category: "fiqih",
    description: "Kumpulan Fiqih Seputat qurban",
    pdf: "pdf/ar_molakhs_a7kam_elodhea.pdf"
  },
  {
  title: "tahlilu kamalat",
    author: "-",
    category: "wirid",
    description: "Yasiin,Tahlil",
    pdf: "pdf/تهليل كامل.pdf"
  },
  {
  title: "sifat 20",
    author: "Habib Utsman Bin Yahya",
    category: "tauhid",
    description: "tauhid",
    pdf: "pdf/Kitab Sifat Dua Puluh.pdf"
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
