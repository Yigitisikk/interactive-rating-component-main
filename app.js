const submit = document.querySelector('.submit');
const firstCard = document.querySelector('.card-container');
const secondCard = document.querySelector('.thank-you-card');
const numbers = document.querySelector('.card-container-numbers');
const thankYouMiddle = document.querySelector('.thank-you-card-middle')


submit.addEventListener('click',()=>{
    firstCard.style.display = 'none';
    secondCard.style.display = 'flex';
})

 
for (let number of numbers.children){
    number.addEventListener('click',(e)=>{
        submit.style.pointerEvents = "auto";
        submit.style.opacity = "1";
        for (let number of numbers.children){
            number.classList.remove("select");
            e.target.classList.add("select");
          
        }

        thankYouMiddle.innerHTML = `You selected ${number.innerHTML} out of 5`
    })
}
