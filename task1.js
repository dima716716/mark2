function train() {
    console.log("n")
    let n = parseInt(number.innerText);
    console.log(n)
    let message
    if (n <= 36 && n % 2 == 1) {
        message = 'Ваше место: Нижнее купе'
        document.getElementById("message").innerText = message;}
    if (n <= 36 && n % 2 == 0) {
        message = 'Ваше место: Верхнее купе'
        document.getElementById("message").innerText = message;}
    if (n > 36 && n <= 54 && n % 2 == 1) {
        message = 'Ваше место: Нижнее боковое'}
        document.getElementById("message").innerText = message;
    if (n > 36 && n <= 54 && n % 2 == 0) {
        message = 'Ваше место: Верхнее боковое'}
        document.getElementById("message").innerText = message;
    if (n > 54) {
        message = 'Ошибка'
        document.getElementById("message").innerText = message;}
    }

    
    
    const number = document.getElementById("number");
    const click_ch = document.getElementById("for_click");
    click_ch.addEventListener("click", train);



