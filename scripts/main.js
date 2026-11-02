addEventListener('DOMContentLoaded', () => {
    const submit_username = document.getElementById('user-submit')
    const history = document.querySelector('.message-history')
    const input = document.getElementById('test')
    const btn = document.getElementById('btn')
    const creation = document.querySelector('.creation')
    let username = document.getElementById('username')
    let user = null
    let users = document.querySelector('.users')
    
    function get_user () {
        if (user != null) {
            creation.visibility = 'hidden'
        }
    }

    username.addEventListener('keydown', (key) => {
        
        if (key.key == 'Enter' && username.value.length > 1) {
           user = username.value
           users.textContent = user
           get_user()
            // console.log(user)
           username.value = ''
       }
    
    })
    
    submit_username.addEventListener('click', (key) => {
        key.preventDefault()
    
        if (key.key == 'Enter' && username.value.length >1) {
           input.value = 'w'
       }
    })
    
    btn.addEventListener('click', (key) => {
        key.preventDefault()
        let smth = document.createElement('p')
        if (input.value.trim().length) {
            smth.textContent = `${user}: ${input.value}`
            history.append(smth)
            input.value = ''
            }
            
        
    })
    input.addEventListener('keydown', (key) => {
        let smth = document.createElement('p')
        if (key.key == 'Enter') {
            if (input.value.trim().length) {
                smth.textContent = `${user}: ${input.value}`
                history.append(smth)
                input.value = ''
            }
            key.preventDefault()
            
        }
    })
    
})