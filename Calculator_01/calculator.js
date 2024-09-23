const displaybtn= document.querySelector('#result')
function clearScreen(){
    displaybtn.value = '';
}

function display(value = 0){
   displaybtn.value += value;
}

function calculate() {
    var p = displaybtn.value;
    let q = eval(p);
    displaybtn.value = q;
}

// let sl = document.querySelectorAll('#check');
// function calculate(value){
//     if(sl.value == '/'){
//         displaybtn.value /= +displaybtn.value
//     }
//     if(sl.value == '-'){
//         displaybtn.value -= +displaybtn.value
//     }
//     if(sl.value == '+'){
//         displaybtn.value += +displaybtn.value
//     }
//     if(sl.value == '*'){
//       displaybtn.value =  (+displaybtn.value * +displaybtn.value)
//     }
// }