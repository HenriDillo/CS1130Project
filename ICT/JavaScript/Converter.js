document.addEventListener('DOMContentLoaded', () => {
    const openTempBtn = document.getElementById("openTempBtn");
    const openHeightBtn = document.getElementById("openHeightBtn");
    const convertBtn = document.getElementById("convertBtn");
    const clearBtn = document.getElementById("clearBtn");
    const returnBtn = document.getElementById("returnBtn");
    const convertHeightBtn = document.getElementById("convertHeightBtn");
    const clearHeightBtn = document.getElementById("clearHeightBtn");
    const returnHeightBtn = document.getElementById("returnHeightBtn");

    openTempBtn.addEventListener("click", () => openConverter('temp-popup-container'));
    openHeightBtn.addEventListener("click", () => openConverter('height-popup-container'));
    convertBtn.addEventListener("click", convertTemperature);
    clearBtn.addEventListener("click", clearValues);
    returnBtn.addEventListener("click", returnToMenu);
    convertHeightBtn.addEventListener("click", convertHeight);
    clearHeightBtn.addEventListener("click", clearHeightValues);
    returnHeightBtn.addEventListener("click", returnToMenu);
});

// Converter Functions
function openConverter(popupId) {
    const tempPopup = document.getElementById('temp-popup-container');
    const heightPopup = document.getElementById('height-popup-container');
    
    // Close all popups first
    tempPopup.style.display = "none";
    heightPopup.style.display = "none";
    
    // Open selected popup
    document.getElementById(popupId).style.display = "block";
}

function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(celsius) && isNaN(fahrenheit)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if (!isNaN(celsius)) {
        fahrenheitInput.value = roundToTwoDecimals((celsius * 9 / 5) + 32);
    } else if (!isNaN(fahrenheit)) {
        celsiusInput.value = roundToTwoDecimals((fahrenheit - 32) * 5 / 9);
    }
}

function convertHeight() {
    const meterInput = document.getElementById("meterInput");
    const feetInput = document.getElementById("feetInput");
    
    const meters = parseFloat(meterInput.value);
    const feet = parseFloat(feetInput.value);

    if (isNaN(meters) && isNaN(feet)) {
        alert("Please enter a valid height.");
        return;
    }

    if (!isNaN(meters)) {
        feetInput.value = roundToTwoDecimals(meters * 3.28084);
    } else if (!isNaN(feet)) {
        meterInput.value = roundToTwoDecimals(feet / 3.28084);
    }
}

function clearValues() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
}

function clearHeightValues() {
    document.getElementById("meterInput").value = "";
    document.getElementById("feetInput").value = "";
}

function returnToMenu() {
    closeConverter('temp-popup-container');
    closeConverter('height-popup-container');
}

function closeConverter(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Utility Function
function roundToTwoDecimals(value) {
    return Math.round(value * 100) / 100;
}