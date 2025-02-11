const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Fungsi untuk menangani input kalkulator
function handleInput(input) {
  if (input === "=") {
    try {
      display.value = eval(display.value); // Eksekusi ekspresi matematika
    } catch {
      display.value = "Error"; // Tangani kesalahan ekspresi
    }
  } else if (input === "ac") {
    display.value = ""; // Hapus semua
  } else if (input === "de") {
    display.value = display.value.slice(0, -1); // Hapus satu karakter
  } else {
    display.value += input; // Tambahkan input ke display
  }
}

// Event listener untuk tombol kalkulator
buttons.forEach((btn) => {
  btn.addEventListener("click", () => handleInput(btn.id));
});

// Event listener untuk input dari keyboard
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Tangani input dari keyboard
  if (!isNaN(key) || ["+", "-", "*", "/", ".", "=", "Enter", "Backspace", "Delete"].includes(key)) {
    if (key === "Enter" || key === "=") {
      handleInput("=");
    } else if (key === "Backspace") {
      handleInput("de");
    } else if (key === "Delete") {
      handleInput("ac");
    } else {
      handleInput(key);
    }
  }
});
