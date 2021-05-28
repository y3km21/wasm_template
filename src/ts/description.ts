function addDiv() {
  const hello_div = document.createElement("div");
  hello_div.id = "description";
  hello_div.textContent = "This is Wasm Template!";
  return hello_div;
}

export { addDiv };
