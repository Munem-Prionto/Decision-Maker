const result = document.querySelector('.result')

const input_form = document.querySelector('.input-form')
const addIn_form = document.querySelector('.addIn')

var inputs = document.querySelectorAll('.in')
const input_div = document.querySelector('.input-div');

const decide_btn = document.querySelector('#decide-btn');
const reset_btn = document.querySelector('#reset-btn');



const randomNumber = (limit) => {
    return  Math.ceil(Math.random() * limit) ;
}



addIn_form.addEventListener('submit' , e=> {
    e.preventDefault();
    result.innerHTML = '';

    let currentI = inputs.length;
    const html = ` 
        <span class="mx-3">VS</span>
        <input type="text" id="input-${currentI+1}" data-no="${currentI+1}" class="in" required> `;

        input_div.innerHTML += html;
}) 

input_form.addEventListener('submit' , e=> {
    e.preventDefault();
    inputs = document.querySelectorAll('.in')
    console.log(inputs.length);


        let r = randomNumber(inputs.length)
        inputs.forEach((i) => {
            if(+i.getAttribute('data-no') === r) {
                result.innerHTML = `<h2>${i.value}`;
            } 
       })

})


 reset_btn.addEventListener('click', e=> {
    location.reload();
})

