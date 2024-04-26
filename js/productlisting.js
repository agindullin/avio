const burger = () => {
    const btn = document.querySelector('.burger svg:last-child')
    
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    btn.addEventListener('click', () => {
        off.style.display = 'block'
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
}

const top5 = () => {
    const btnClose = document.querySelector('header div>svg')
    const row = document.querySelector('header>div')
    btnClose.addEventListener('click', () => {
        row.style.display = 'none'
    })
}


const quantitity = () => {
    const spans = document.querySelectorAll('.Quantitity span')
    console.log(spans)
    spans[0].addEventListener('click', () => {
        if (Number(spans[1].innerHTML) - 1 >= 0){
            spans[1].innerHTML = Number(spans[1].innerHTML) - 1
        }
    })
    spans[2].addEventListener('click', () => {
        spans[1].innerHTML = Number(spans[1].innerHTML) + 1
    })  
}


burger()
top5()
quantitity()