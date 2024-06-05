export function checkIfValid(field) {
    const errorMessageElement = field.nextElementSibling;

    field.setCustomValidity("");
    let errorMessage = "";

    if (field.value.trim() === "") {
        errorMessage = "Este campo no puede estar vacío";
        field.setCustomValidity(errorMessage);
    }

    if (field.name == "name") {
        if (field.value.length > 10) {
            errorMessage = "El nombre no puede exceder 10 caracteres";
            field.setCustomValidity(errorMessage);
        }
    }

    if (field.name == "price") {
        if (isNaN(field.value)) {
            errorMessage = "El precio debe ser un número";
            field.setCustomValidity(errorMessage);
        } else if (field.value.length > 10) {
            errorMessage = "El precio no puede exceder 10 caracteres";
            field.setCustomValidity(errorMessage);
        }
    }

    if (field.name == "image") {
        const urlPattern = new RegExp('^(https?:\\/\\/)?'+
          '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' +
          '((\\d{1,3}\\.){3}\\d{1,3}))' +
          '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' +
          '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' +
          '(\\#[-a-zA-Z\\d_]*)?$','i');
        
        if (!urlPattern.test(field.value)) {
            errorMessage = "La URL de la imagen no es válida";
            field.setCustomValidity(errorMessage);
        }
    }

    if (!field.checkValidity()) {
        errorMessageElement.textContent = errorMessage;
        errorMessageElement.style.display = 'block';
    } else {
        errorMessageElement.textContent = '';
        errorMessageElement.style.display = 'none';
    }
}