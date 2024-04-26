const burger = () => {
    const btn = document.querySelector('.burger svg:last-child')
    
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    btn.addEventListener('click', () => {
        off.style.display = 'block'
        console.log(btn)
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
}

burger()