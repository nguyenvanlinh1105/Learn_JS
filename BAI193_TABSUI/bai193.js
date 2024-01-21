const $ = document.querySelector.bind(document)
// bind(document) được sử dụng để gắn kết hàm querySelector với đối tượng document. 
const $$ = document.querySelectorAll.bind(document);
// bind(document) được sử dụng để gắn kết hàm querySelectorAll với đối tượng document. 

const tabs = $$('.tab-item');
const panes =$$('.tab-pane')
const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

console.log(tabActive)
tabs.forEach((tab,index) => {
    const pane = panes[index]
    tab.onclick= function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
        Object.assign(line.style,{
            left : this.offsetLeft+'px',
            width:this.offsetWidth+'px'
        })
    }
    }
);












