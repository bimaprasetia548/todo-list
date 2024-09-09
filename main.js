const btn = document.getElementById("btn");
const input = document.getElementById('add');

btn.addEventListener("click", (e) => {
  const value = input.value;

  if(value !== "") {
   addList(value)
  }

  input.value = "";
})

const addList = (value) => {
  const listItem = document.querySelector('.list');
  const msg = document.querySelector('.msg');
    listItem.classList.add("animation")
    listItem.innerHTML += items(value);
    msg.innerHTML = message();
  
  setTimeout(function() {
    listItem.classList.remove("animation")
    msg.innerHTML = "";
  }, 1000);
 
 ceckList(listItem)
 deleteItem(listItem);
}


const ceckList = (list) => {
  const item = list.querySelectorAll('.item');
  item.forEach( data => {
    const ceck = data.querySelector(".edit .ceck");
    const text = data.querySelector("p");
    ceck.addEventListener("click", () => {
     text.classList.add("ceckList");
    })
  })
}

 

const deleteItem = (list) => {
  const item = list.querySelectorAll(".item");
  const confirm = document.querySelector(".confirm")
  const msg = document.querySelector('.msg');
  item.forEach((data, i) => {
    const del = data.querySelector(".edit .delete");
    del.addEventListener("click", () => {
          data.classList.add("opacity")
          msg.innerHTML = deleteMsg();
          setTimeout(function() {
            list.removeChild(data)
            msg.innerHTML = "";
          }, 1000);
    })
  })
  
}



const message = () => {
  return `<p class="success">berhasil menambah list</p>`
}
const deleteMsg = () => {
  return `<p class="delete-msg">berhasil menghapus list</p>`
}

const items = (list) => {
return `<div class="item">
          <p>${list}</p>
          <div class="edit">
            <div class="ceck">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="delete" >
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
         </div>`
}


