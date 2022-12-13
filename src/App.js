import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)
      
      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)
      // --> [vowels]
      // ACTION ITEM: your Pig Latin logic goes here!
        // if (eachWord[0] === 'a' || eachWord[0] === 'e' || eachWord[0] === 'i' || eachWord[0] === 'o' || eachWord[0] === 'u') {
        //   console.log(eachWord[0])
        //   return eachWord + 'way'
        // } 

        // if first vowel = u && letter before u = q, find index of u, splice up to u, add at end and add way
        const punctuation =  !!eachWord.match(/[.,:!?]/)
          if(punctuation && eachWord.search(/[aeiou]/) === 0){
            let wordStartVowel = eachWord + 'way' 
            let indexOfPunctuation = wordStartVowel.search(/[.,!?;]/)
            console.log("******",indexOfPunctuation);
            return wordStartVowel.slice(0, indexOfPunctuation) + wordStartVowel.slice(indexOfPunctuation + 1, wordStartVowel.length) + wordStartVowel.charAt(indexOfPunctuation)
          }
         else if (eachWord.search(/[aeiou]/) === 0) {
              return eachWord + 'way'
        } else if (vowelsArray[0] === 'u' && eachWord.includes('qu')) {
              return eachWord.slice(eachWord.indexOf(vowelsArray[0]) + 1, eachWord.length) + eachWord.slice(0, eachWord.indexOf(vowelsArray[0]) + 1) + 'ay'
        } else if (eachWord.search(/[aeiou]/) === -1 && eachWord.includes('y')) {
          let indexOfY = eachWord.indexOf('y')
              return eachWord.slice(indexOfY,eachWord.length) + eachWord.slice(0,indexOfY) + "ay"
        } else if (eachWord.search(/[aeiou]/) > 0) {
          let firstVowel = vowelsArray[0]
          let firstIndex = eachWord.indexOf(firstVowel)
              return eachWord.slice(firstIndex, eachWord.length) + eachWord.slice(0,firstIndex) + 'ay'
        } 
        // if()
        // const punct = (string) => {
        //   let punctuation = ".,!?;"
        //   for(let i = 0; i < string.length; i++){
        //     if(string.includes(punctuation)){
        //       let indexOfPunctuation = string.search(/[.,!?;]/)
        //      return string.slice(0, indexOfPunctuation) + string.slice(indexOfPunctuation + 1, string.length) + string.charAt(indexOfPunctuation)
        //     } 
  
        //   }
        // }
        
// ban!ana slice[0, indexOfPunctuation] + [indexOfPunctuation + 1, string.length] + string.charAt[indexOfPunction]

// find punctuation with search returns index 
        // console.log(eachWord.search(/[]/))
        // console.log(eachWord.search(/[aeiou]/))
        // --> input: banana output: 1
        // console.log(vowelsArray[0])
        // ACTION ITEM: this return will be the output of your Pig Latin'd code
        
        return eachWord
        
      })
      
    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)
    // --> final output

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App