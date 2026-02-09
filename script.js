// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Inputs numéricos
const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

// Color picker
const colorPicker = document.getElementById("colorPicker");

// Salidas
const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbValue");
const hexText = document.getElementById("hexValue");

// Convertir decimal a HEX
function toHex(value) {
    let hex = Number(value).toString(16);
    return hex.length < 2 ? "0" + hex : hex;
}

// Limitar valores entre 0 y 255
function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

// Actualizar todo desde valores RGB
function updateFromRGB(r, g, b) {
    r = clamp(r);
    g = clamp(g);
    b = clamp(b);

    // Sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    // Colores
    const rgbColor = `rgb(${r},${g},${b})`;
    const hexColor = "#" + toHex(r) + toHex(g) + toHex(b);

    colorBox.style.backgroundColor = rgbColor;
    rgbText.textContent = rgbColor;
    hexText.textContent = hexColor;

    // Color picker
    colorPicker.value = hexColor;
}

// Convertir HEX a RGB
function hexToRGB(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

// Eventos sliders
red.addEventListener("input", () =>
    updateFromRGB(red.value, green.value, blue.value)
);

green.addEventListener("input", () =>
    updateFromRGB(red.value, green.value, blue.value)
);

blue.addEventListener("input", () =>
    updateFromRGB(red.value, green.value, blue.value)
);

// Eventos inputs numéricos
redNum.addEventListener("input", () =>
    updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);

greenNum.addEventListener("input", () =>
    updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);

blueNum.addEventListener("input", () =>
    updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);

// Evento color picker
colorPicker.addEventListener("input", () => {
    const { r, g, b } = hexToRGB(colorPicker.value);
    updateFromRGB(r, g, b);
});

// Inicializar
updateFromRGB(0, 0, 0);
