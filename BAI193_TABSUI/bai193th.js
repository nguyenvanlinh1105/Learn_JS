const $ = document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document);

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const line = $('.tabs .line')
tabs.forEach(function(tab, index){
    const pane = panes[index]
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
        Object.assign(line.style,{
            left : this.offsetLeft+'px',
            width:this.offsetWidth +'px'
        })
    }
})








