import getData from "./getData.js";

//IIFE fonksiyonu modulümüze parametresini gönderir ve sonucu console'a bastırır
(async () => {
    const result = await getData(1)
    console.log(result);
})()