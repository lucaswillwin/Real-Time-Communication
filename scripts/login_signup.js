const wrapper = document.querySelector('.wrapper')
let btn = document.getElementById('switch')
let lgn = document.getElementById('login_link')

let check = !false

const rb = document.querySelector(".rotate-bg")
    let rbs = rb.getAnimations()[0]

btn.onclick = () => {    
        wrapper.classList.add('active')
        rbs.playbackRate = 1
        rbs.play()

}
lgn.onclick = () => {
        wrapper.classList.remove('active')
        rbs.playbackRate = -1
        rbs.play()
        }