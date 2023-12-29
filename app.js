import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

//highlight emotion when picking it
emotionRadios.addEventListener("change", highlightCheckedOption);

function highlightCheckedOption(e) {
  //remove any highlight
  const radios = document.getElementsByClassName("radio");
  for (const radio of radios) {
    radio.classList.remove("highlight");
  }

  //add highlight onchange
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

//get array of emotions form dataCats array
function getEmotionArray(cats) {
  const emotionsArray = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let radioItems = "";
  const emotions = getEmotionArray(cats);
  for (const emotion of emotions) {
    radioItems += `
   <div class="radio">
     <label for="${emotion}">${emotion}</label>
     <input 
     type="radio"
     id="${emotion}" 
     value="${emotion}"
     name="emotions">
    </div> 
`;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
