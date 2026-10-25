addEventListener('DOMContentLoaded', () => {
    const history = document.querySelector('.message-history')
    const input = document.getElementById('test')
    const btn = document.getElementById('btn')
    btn.addEventListener('click', (key) => {
        key.preventDefault()
        let smth = document.createElement('p')
        if (key.key == 'Enter') {
            if (input.value.trim().length) {
                smth.textContent = input.value
                history.append(smth)
                input.value = ''
            }
            key.preventDefault()

        }
    })
    input.addEventListener('keydown', (key) => {
        let smth = document.createElement('p')
        if (key.key == 'Enter') {
            if (input.value.trim().length) {
                smth.textContent = input.value
                history.append(smth)
                input.value = ''
            }
            key.preventDefault()

        }
    })
    
})