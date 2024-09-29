const voprosZ = document.getElementById('vopros')
const vvod = document.getElementById('vvod')
const vvodt = document.getElementById('vvodt')
const otpBtn = document.getElementById('otpravka')
const vop = document.getElementById('vvodtvop')
const vopV = document.getElementById('suka')
//const butty = document.getElementById('butty')

console.log(typeof vvodt)

// voprosZ.onclick = function(){
//     vvod.innerHTML = `
    
//             <div class="continer" id="vvod1">
//                 <input type="text" id="vvodt" class="form-control" placeholder="Введите вопрос" aria-label="Username">
//                 <button type="button" id="otpravka" class="btn btn-dark">Отправить</button> 
//             </div>
//         `
// }

otpBtn.onclick = ()=>{
    // vopV.insertAdjacentHTML('beforeend', insertAdd(vvodt.textContent))
    vopV.innerHTML = `
    
    <div class="continer" id="vopross">
                 <div class="continer" id="vopross12">
                     <label for="exampleFormControlInput1" class="form-label"></label>
                     <h1>${vvodt.textContent}</h1>
                </div>
            </div>
    
    `
    
}

function insertAdd(title){
    return `
    
        <div class="continer" id="vopross">
                 <div class="continer" id="vopross12">
                    <input type="text" id="vvodtvop" class="form-control" placeholder="${title}" disabled aria-label="Username">
                </div>
    `
}

// butty.onclick = function(){
//     vopV.innerHTML = `
    
//     <div class="continer" id="vopross">
//                  <input type="text" id="vvodtvop" class="form-control" placeholder="" disabled aria-label="Username">
//     </div>`
//     // vopV.insertAdjacentHTML('beforeend', insertAdd(vvodt.textContent))
    
// }