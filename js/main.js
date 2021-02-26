const broj = document.querySelectorAll('.broj')

broj.forEach(broj => {
    broj.innerText = '0'

    const updateBroj = () => {
        const target = +broj.getAttribute('data-target')
        const c = +broj.innerText

        const increment = target / 200

        if(c < target) {
            broj.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateBroj, 1)
        } else{
            broj.innerText = target
        }
    }

    updateBroj()
});















