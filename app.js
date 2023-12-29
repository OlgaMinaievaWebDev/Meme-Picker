import { cats } from "./data.js";

//get array of emotions form dataCats array
function getEmotionArray(cats) {
  const emotionsArray = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

console.log(getEmotionArray(cats));


