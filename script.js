document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Simulando um login simples
    if (username === "admin" && password === "1234") {
        errorMessage.textContent = "Login bem-sucedido!";
        errorMessage.style.color = "green";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.style.color = "red";
    }
});
