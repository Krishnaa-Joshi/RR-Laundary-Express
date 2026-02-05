// Temp Auth 
document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  const otpForm = document.getElementById("otpForm");
  const loader = document.getElementById("authLoader");
  const verifyBtn = document.getElementById("verifyOtpBtn");
  const otpInputs = document.querySelectorAll(".otp-inputs input");

  if (!authForm || !otpForm || !loader || !verifyBtn) return;

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    authForm.classList.add("d-none");
    otpForm.classList.remove("d-none");

    if (otpInputs.length) {
      otpInputs[0].focus();
    }
  });
  
  verifyBtn.addEventListener("click", () => {
    otpForm.classList.add("d-none");
    loader.classList.remove("d-none");

    setTimeout(() => {
      loader.innerHTML = `
        <h4 style="color:#22c55e; font-weight:700;">✔ Verified</h4>
        <p>Redirecting to dashboard…</p>
      `;

      setTimeout(() => {
        console.log("User authenticated (mock)");

        window.location.href = "clientDashborad.html";

      }, 1500);
    }, 2000);
  });

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value && otpInputs[index + 1]) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && otpInputs[index - 1]) {
        otpInputs[index - 1].focus();
      }
    });
  });
});
