// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// เมื่อคลิก hamburger ให้สลับคลาส 'active' สำหรับ nav-links และ 'toggle' สำหรับ hamburger
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // แสดง/ซ่อนเมนู
  hamburger.classList.toggle("toggle"); // เปลี่ยน animation ของ hamburger
});

// Download Button Alert (Placeholder)
document.querySelectorAll(".pack-card .btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // ป้องกันการลิงก์ไปหน้าใหม่
    const packName = e.target.parentElement.querySelector("h4").textContent; // ดึงชื่อแพ็กจาก h4
    alert(`Downloading ${packName}... (Placeholder link)`); // แสดงข้อความแจ้งเตือน
  });
});
