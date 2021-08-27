console.log('Hello')
import anime from 'animejs'

anime({
    targets : '.circle',
    translateX : 100,
    direction : 'alternate',
    loop: true
})