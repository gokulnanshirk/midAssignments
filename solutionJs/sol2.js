
const users = [
    { id: 1, name: "Gokul" },
    { id: 2, name: "mohan" },
    { id: 3, name: "Suresh" },
    { id: 4, name: "Dinesh" }
  ];
  let button = document.querySelector("#add");
  button.addEventListener("click", function() {
    addItems(input);
  });
  let addItems = function(input) {
    console.log(input.value);
    let newElement = input.value;
    users.unshift({ name: newElement });
    appendNode(users.map(user => user.name));
    input.value = "";
  };

  let container = document.querySelector("#container");
  let input = document.querySelector("#key");
  input.addEventListener("keyup", function(event) {
    filterList(event.target.value);
  });

  let filterList = function(value) {
    let filteredList = users
      .map(user => user.name)
      .filter(name => name.startsWith(value));

    appendNode(filteredList);
  };

  let appendNode = function(list) {
    container.innerHTML = `
      <ul> 
       ${generateLi(list)}
      </ul>
      `;
  };

  let generateLi = function(liItems) {
    return liItems
      .map(
        liItem =>
          `<li>${liItem}  <span id=${liItem} class="delete">X</span></li>`
      )
      .join(" ");
  };

  appendNode(users.map(user => user.name));

  let itemIndex = document.querySelectorAll(".delete");
  console.log(itemIndex);

  let addEvents = function() {
    itemIndex.forEach(item => {
      item.addEventListener("click", function() {
        console.log(item.id);
        users.map(u => {
          if (u.name == item.id) {
            let index = users.indexOf(u);
            console.log(index);
            users.splice(index, 1);
            console.log(users);
          }
        });
        appendNode(users.map(user => user.name));
      });
    });
  };

  addEvents();
