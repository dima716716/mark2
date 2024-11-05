function verify() {
    console.log("n")
    let n = parseInt(number.value);
    console.log(n)


    if (n <= 36 && n % 2 == 1) {
        message = 'Ваше место: Нижнее купе'
        check = true;}
    if (n <= 36 && n % 2 == 0) {
        message = 'Ваше место: Верхнее купе'
        check = true;}
    if (n > 36 && n <= 54 && n % 2 == 1) {
        message = 'Ваше место: Нижнее боковое'
        check = true;}
    if (n > 36 && n <= 54 && n % 2 == 0) {
        message = 'Ваше место: Верхнее боковое'
        check = true;}
    if (n > 54) {
        message = 'Ошибка'
        check = false;}
        document.getElementById("message").value = message;
    }
    
    

function send() {
    if (check) {
        document.getElementById("Enter").submit();
    } else {
        alert("Места с таким номером не существует")
    }
}



let message;
let check;

const number = document.getElementById("n");


const elementVerify = document.getElementById("for_click");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)