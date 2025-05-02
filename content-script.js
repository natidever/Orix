

isLoading = true

let handleDoubleClick=async()=>{

 let selection = window.getSelection()
 let selectedWord = selection.toString()
   
let range = selection.getRangeAt(0)
 let rect = range.getBoundingClientRect()
 console.log("what is this ",rect)





 if(selectedWord && selectedWord.trim()!=""){
 console.log("SELECTED_WORD",selectedWord)

 let translation_popup= document.getElementById("translator-popup")
 
 if(!translation_popup){
   
 translation_popup =document.createElement("div")
 translation_popup.id="translator-popup" 

    document.body.appendChild(translation_popup)
   

 }


 
  

 translation_popup.style.left= `${rect.left + window.scrollX}px`
 translation_popup.style.top=`${rect.top + window.scrollY +10}px`
 translation_popup.style.display = "block"

 let wordDefinition= await fetchDefinition(selectedWord)
  translation_popup.textContent = isLoading?"Loading":wordDefinition

 let updatePopupPosition =()=>{
   console.log("resized")
   let rect = range.getBoundingClientRect()
   translation_popup.style.left= `${rect.left + window.scrollX}px`
 translation_popup.style.top=`${rect.top + window.scrollY +10}px`

 }










 window.addEventListener("resize",updatePopupPosition)

 document.addEventListener("click",()=>{
   console.log("clicked")
    translation_popup.style.display="none"
 })


 
 
 //TODO:Call the google translate api or smt 
 
 
 }else{

 console.log("selected co-ordiante is empty",selectedWord)

 }

 



}


fetchDefinition=async (word)=>{

   try{
      let response= await  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      let data =await   response.json()
       if(response.status==200){
      isLoading= false

         return data[0].meanings[0].definitions[0].definition

       }else{
      isLoading= false

         return "Definition not found"
         
       }
     

   }catch(e){
      console.log(`error during translating`,e)
      return null
   }


   

}



document.addEventListener("dblclick",handleDoubleClick)



