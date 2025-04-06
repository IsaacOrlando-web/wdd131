const favChap = document.getElementById("favchap");
const addBtn = document.getElementById("addBtn");
const chapList = document.getElementById("list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(element => {
    displayList(chapter);
});

addBtn.addEventListener('click', function() {
    // Get the value from the input field
    if(favChap.value != ''){
        const chapValue = favChap.value;
        displayList(favChap.value);
        chaptersArray.push(chapValue);
        setChapterList();
        favChap.value = '';
        favChap.focus();
        chapList.appendChild(newLi);
        //append the button to the li
    }

    removeBtn.addEventListener('click', function() {
        // Remove the li element from the ul
        chapList.removeChild(newLi);
    });
});

function displayList(item) {
    let li = document.getElementById("list");
    let deleteBtn = document.createElement("button");
    li.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");
    li.append(deleteBtn);
    chapList.append(li);
    deleteBtn.addEventListener('click', function() {
        // Remove the li element from the ul
        chapList.removeChild(li);
        deleteChapter(li.textContent);
        this.inputMode.focus();
    });
    console.log('isworking');
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}