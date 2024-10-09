let companies="Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon,Infosys"
companies=companies.split(',')
console.log(companies)

console.log(companies[0])
let lastIndex=companies.length-1
console.log(companies[lastIndex])
let len=companies.length
if(len%2===1){
    console.log(companies[Math.floor(len/2)])
}
else{
    console.log(companies[len/2-1],companies[len/2])
}
console.log("List of Companies")
for(let i in companies){
    console.log(companies[i].toUpperCase())
}

const sentence = `${companies.slice(0,7).join(', ')} and ${companies[companies.length - 1]} are big IT companies.`;
console.log(sentence)


let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let afterTxt=text.replace(/['.',',']/gi,'')
console.log(afterTxt)

let country=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let arr=[]
for(i=0;i<country.length;i++){
    arr.push(country[i].length)
}
console.log(arr)

let countries = [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ];
  
  let countriesWithLand = [];
  let allCountries = [];
  
  for (let i = 0; i < countries.length; i++) {
    allCountries.push(countries[i][0]); 
    
    if (countries[i][0].includes('land')) {
      countriesWithLand.push(countries[i][0]);
    }
  }
  
  if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
  } else {
    console.log('All these countries are without land:', allCountries);
  }
  


  let arr1=[100,24,50,1,99]
  console.log(arr1.sort((a,b)=>b-a))