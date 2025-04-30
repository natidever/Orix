let handleDoubleClick=()=>{

 let selection = window.getSelection()
 let selectedWord = selection.toString()
 if(selectedWord && selectedWord.trim()!=""){
 console.log("SELECTED_WORD",selectedWord)


 }
 console.log("selected co-ordiante is empty",selectedWord)

}

document.addEventListener("dblclick",handleDoubleClick)

