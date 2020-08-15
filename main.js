const r = randomi => (Math.random() - 0.5) * randomi
let genStyleObj = randomi => {return {transform: `
    translateX(${r(randomi)}px) translateY(${r(randomi)}px) rotate(${r(randomi * 0.3)}deg)
`}}

let bars = ''
for (let i = 0; i < 4; i++) bars += `
    <div class="bar bar-${i}">
    <div :style="styles[${i}]"/>
    </div>
`

Vue.component('wanderer', {
    template: `<div class="wanderer">${bars}<span class="tm">TM</span></div>`,
    data() {
        return {
            randomi: 35
        }
    },
    computed: {
        styles() {
            let arr = []
            for (let i = 0; i < 4; i++) arr.push(genStyleObj(this.randomi))
            return arr
        }
    },
    methods: {
        modifyRandomi() {
            this.randomi = this.randomi === 35 ? 40 : 35
        }
    },
    mounted() {
        setTimeout(this.modifyRandomi, 0)
        setInterval(this.modifyRandomi, 5001)
    }
})

let app = new Vue({
    el: '#app',
    data: {}
})
