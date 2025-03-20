const listEl = document.getElementById("list-items");
const buttonEl = document.getElementById("btn");
const buttonSave=document.getElementById("btn-save");

buttonEl.addEventListener("click", function() {
  const item = document.getElementById("textname").value;
  addList(item);
});

buttonSave.addEventListener("click",function()
{
  saveData();
})

function addList(item) {
  const listItem = document.createElement("li");
  listEl.appendChild(listItem);

  const inputEl=document.createElement("input");
  inputEl.type="checkbox";
  inputEl.style.marginRight="10px";
  listItem.appendChild(inputEl);

  const textEl=document.createElement("text");
  textEl.textContent=("" +item);  
  document.getElementById("textname").value = "";
  listItem.appendChild(textEl);

  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="Delete";
  deleteBtn.style.marginLeft = "25px";
  deleteBtn.style.backgroundColor = "red";
  listItem.appendChild(deleteBtn); 

  listItem.style.marginLeft = "-40px";

  inputEl.addEventListener("change", function () {
    if (inputEl.checked) {
      textEl.style.textDecoration = "line-through";
    } else {
      textEl.style.textDecoration = "none";
    }
  });

  deleteBtn.addEventListener("click",()=>
  {
    listItem.remove();
  }
  );
  
}


function saveData() {
  const items = [];
  document.querySelectorAll("#list-items li").forEach(li => {
    const textElement = li.querySelector("text"); 
    if (textElement) {
      const text = textElement.textContent;
      const checked = li.querySelector("input").checked;
      items.push({ text, checked }); 
    }
  });
  localStorage.setItem("data", JSON.stringify(items));
  alert("Data saved successfully")
}
function retrievedData() {
  const savedItems = JSON.parse(localStorage.getItem("data")) || [];
  savedItems.forEach(item => addList(item.text, item.checked));
}
retrievedData();