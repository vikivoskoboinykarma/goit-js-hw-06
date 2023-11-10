const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleInputBlur);

function handleInputBlur() {
  const dataValue = parseInt(input.getAttribute("data-length"));
  const inputValueLength = input.value.length;

  if (inputValueLength === dataValue) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}









