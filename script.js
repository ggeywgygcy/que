const voprosZ = document.getElementById('vopros')
const vvod = document.getElementById('vvod')
const vvodt = document.getElementById('vvodt')
const otpBtn = document.getElementById('otpravka')

console.log(typeof vvod)

voprosZ.onclick = function(){
    vvod.innerHTML = `
    
            <div class="continer" id="vvod1">
                <input type="text" id="vvodt" class="form-control" placeholder="Введите вопрос" aria-label="Username">
                <button type="button" id="otpravka" class="btn btn-dark">Отправить</button> 
            </div>
        
    `
}