import { checkIfValid } from "./validateForm.js";

export function registerEventListener(field) {
    field.addEventListener("blur", () => checkIfValid(field));
    field.addEventListener("invalid", (event) => event.preventDefault());
}
