function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightCm = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById("result");

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultElement.textContent = "Por favor, ingresa valores válidos para peso y altura.";
        resultElement.style.color = "red";
        return;
    }

    const heightM = heightCm / 100;
    const imc = weight / (heightM * heightM);
    const imcRounded = imc.toFixed(2);

    let interpretation = "";
    let color = "";

    if (imc < 18.5) {
        interpretation = "Bajo peso";
        color = "#ffa500"; // Naranja
    } else if (imc < 24.9) {
        interpretation = "Peso normal";
        color = "#28a745"; // Verde
    } else if (imc < 29.9) {
        interpretation = "Sobrepeso";
        color = "#ff9800"; // Amarillo oscuro
    } else {
        interpretation = "Obesidad";
        color = "#dc3545"; // Rojo
    }

    resultElement.textContent = `Tu IMC es ${imcRounded} (${interpretation}).`;
    resultElement.style.color = color;
}
