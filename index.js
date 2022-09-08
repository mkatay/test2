console.log("a node futtatja ezt a fájlt!")

const szam=Math.round(Math.random()*100)
console.log(`A véletlen szám: ${szam}`)

if(szam>=50)
    console.log("Gratula!")
else
    console.log("Sajnálom...")
//rövidebben
szam>=50 ? console.log("Gratulálok!!!") : console.log("Öszintén sajnálom!")

import { diakok } from "./adatok.js"

console.log(`a diákok létszáma:${diakok.length}`)