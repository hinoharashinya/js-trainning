console.log("Todo")

const onClickButton = () => {
  const list = document.getElementById('todo-list')
  const newEl = document.createElement("li")
  const input = document.getElementById('todo-input')
  console.log(input)
  const inputValue = input.value
  newEl.innerText = inputValue
  list.appendChild(newEl)
}

const button = document.getElementById('todo-button')
button.addEventListener('click', onClickButton)


