import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");

//highlight emotion when picking it
emotionRadios.addEventListener("change", highlightCheckedOption);

getImageBtn.addEventListener("click", renderCat);

function highlightCheckedOption(e) {
  //remove any highlight
  const radios = document.getElementsByClassName("radio");
  for (const radio of radios) {
    radio.classList.remove("highlight");
  }
  // remove all instances of the highlight class
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;

    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
      }
      return cat.emotionTags.includes(selectedEmotion);
    });
    return matchingCatsArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
  }
}

function renderCat() {}

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
