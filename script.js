// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // แสดง/ซ่อนเมนู
      hamburger.classList.toggle("toggle"); // เปลี่ยน animation ของ hamburger
    });
  } else {
    console.error("Hamburger or NavLinks not found in the DOM");
  }

  // Download Button Alert (Placeholder)
  document.querySelectorAll(".pack-card .btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // ป้องกันการลิงก์ไปหน้าใหม่
      const packName = e.target.closest(".pack-card").querySelector("h4").textContent; // ดึงชื่อแพ็กจาก h4
      alert(`Downloading ${packName}... (Placeholder link)`); // แสดงข้อความแจ้งเตือน
    });
  });
});
