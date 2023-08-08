const englishScore = document.querySelector('.englishScore')
const mathsScore = document.querySelector('.mathsScore')
const chemistryScore = document.querySelector('.chemistryScore')
const biologyScore = document.querySelector('.biologyScore')
const frenchScore = document.querySelector('.frenchScore')


// output


const englishGrade = document.querySelector('.englishGrade')
const mathsGrade = document.querySelector('.mathsGrade')
const chemistryGrade = document.querySelector('.chemistryGrade')
const biologyGrade = document.querySelector('.biologyGrade')
const frenchGrade = document.querySelector('.frenchGrade')


englishScore.addEventListener('input',calculateEngGrade )
function calculateEngGrade() {
    if(englishScore.value >= 70) {
        englishGrade.value = 'A'
    }else if(englishScore.value >= 60 && englishScore.value < 70){
        englishGrade.value = 'B'
    }else if(englishScore.value >= 50 && englishScore.value < 60){
        englishGrade.value = 'C'
    }   else if(englishScore.value >= 45 && englishScore.value < 50){
    englishGrade.value = 'D'
    }else if(englishScore.value >= 40 && englishScore.value < 45){
        englishGrade.value = 'E'
    }else{
        englishGrade.value = 'F'
    }
}



mathsScore.addEventListener('input',calculateMathsGrade )
function calculateMathsGrade() {
    console.log('click');
    if(mathsScore.value >= 70) {
        mathsGrade.value = 'A'
    }else if(mathsScore.value >= 60 && mathsScore.value < 70){
        mathsGrade.value = 'B'
    }else if(mathsScore.value >= 50 && mathsScore.value < 60){
        mathsGrade.value = 'C'
    }   else if(mathsScore.value >= 45 && mathsScore.value < 50){
    mathsGrade.value = 'D'
    }else if(mathsScore.value >= 40 && mathsScore.value < 45){
        mathsGrade.value = 'E'
    }else{
        mathsGrade.value = 'F'
    }
}

chemistryScore.addEventListener('input',calculateChemGrade )
function calculateChemGrade() {
    if(chemistryScore.value >= 70) {
        chemistryGrade.value = 'A'
    }else if(chemistryScore.value >= 60 && chemistryScore.value < 70){
        chemistryGrade.value = 'B'
    }else if(chemistryScore.value >= 50 && chemistryScore.value < 60){
        chemistryGrade.value = 'C'
    }   else if(chemistryScore.value >= 45 && chemistryScore.value < 50){
        chemistryGrade.value = 'D'
    }else if(chemistryScore.value >= 40 && chemistryScore.value < 45){
        chemistryGrade.value = 'E'
    }else{
        chemistryGrade.value = 'F' 
    }
}



biologyScore.addEventListener('input',calculateBioGrade )
function calculateBioGrade() {
    if(biologyScore.value >= 70) {
        biologyGrade.value = 'A'
    }else if(biologyScore.value >= 60 && biologyGrade.value < 70){
        biologyGrade.value = 'B'
    }else if(biologyScore.value >= 50 && biologyGrade.value < 60){
        biologyGrade.value = 'C'
    }   else if(biologyScore.value >= 45 && biologyGrade.value < 50){
        biologyGrade.value = 'D'
    }else if(biologyScore.value >= 40 && biologyGrade.value < 45){
        biologyGrade.value = 'E'
    }else{
        biologyGrade.value = 'F'
    }
}


frenchScore.addEventListener('input',calculateFrnGrade )
function calculateFrnGrade() {
    if(frenchScore.value >= 70) {
        frenchGrade.value = 'A'
    }else if(frenchScore.value >= 60 && frenchScore.value < 70){
        frenchGrade.value = 'B'
    }else if(frenchScore.value >= 50 && frenchScore.value < 60){
        frenchGrade.value = 'C'
    }   else if(frenchScore.value >= 45 && frenchScore.value < 50){
        frenchGrade.value = 'D'
    }else if(frenchScore.value >= 40 && frenchScore.value < 45){
        frenchGrade.value = 'E'
    }else{
        frenchGrade.value = 'F'
    }
}