const click_ch = document.getElementById("for_click")

function find_en(){

    if(document.getElementsByClassName('block4')[0].innerHTML==='Романов'){
    document.getElementsByClassName('block1')[0].innerHTML = 'MVD IN THE REPUBLIC OF TATARSTAN'
    document.getElementsByClassName('block4')[0].innerHTML='Romanov'
    document.getElementsByClassName('block5')[0].innerHTML='Dmitriy'
    document.getElementsByClassName('block6')[0].innerHTML='Vladimirovich'
    document.getElementsByClassName('block7')[0].innerHTML='male'
    document.getElementsByClassName('block9')[0].innerHTML='Chistopol Republic of Tatarstan'
    document.getElementsByClassName('block10')[0].innerHTML='Tatarstan'
    }
    else{
    
    if(document.getElementsByClassName('block4')[0].innerHTML==='Romanov'){
        document.getElementsByClassName('block1')[0].innerHTML = 'МВД ПО РЕСПУБЛИКЕ ТАТАРСТАН'
        document.getElementsByClassName('block4')[0].innerHTML='Романов'
        document.getElementsByClassName('block5')[0].innerHTML='Дмитрий'
        document.getElementsByClassName('block6')[0].innerHTML='Владимирович'
        document.getElementsByClassName('block7')[0].innerHTML='муж.'
        document.getElementsByClassName('block9')[0].innerHTML='г. Чистополь Республика'
        document.getElementsByClassName('block10')[0].innerHTML='Татарстан'
        }
    }
}
click_ch.addEventListener("click", find_en)