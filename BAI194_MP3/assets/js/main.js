/*
    1. Render songs
    2. Scroll top
    3. Play/ pause/ seek
    4. CD rotate
    5. Next/ prev
    6. Random
    7. Next/ Repeat
    8. Active song 

*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd_thumb = $('.cd-thumb');
const cd = $('.cd')
const app={
    songs: [
        {
            name:'Trái đất ôm mặt trời',
            singer:'Kai Dinh',
            path:'./assets/mp3/song1.mp3',
            image:'./assets/img/song1.png'
        },
        {
            name:'Rồi ta sẽ ngắm pháo hoa cùng nhau',
            singer:'O.LEW',
            path:'./assets/mp3/song2.mp3',
            image:'./assets/img/song2.png'
        },
        {
            name:'Yêu em rất nhiều',
            singer:'Hoàng Tôn',
            path:'./assets/mp3/song3.mp3',
            image:'./assets/img/song3.png'
        },
        {
            name:'Lạ lùng',
            singer:'Vũ',
            path:'./assets/mp3/song4.mp3',
            image:'./assets/img/song4.png'
        },
        {
            name:'Chờ đợi có đáng sợ',
            singer:'Andie',
            path:'./assets/mp3/song5.mp3',
            image:'./assets/img/song5.png'
        }
    ],
    render:function(){

        const htmls = this.songs.map(song=>{
            return`
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('\n')
    },
    handleEvent:function(){
        document.onscroll= function(){
            // console.log(document.documentElement.scrollTop) // cách 1 
            // console.log(window.scrollY)
            const cdWidth = cd.offsetWidth;
            const scrollTop= (document.documentElement.scrollTop||window.scrollY)
            cd.style.width
        }
    },
    start :function(){
        this.render()
        this.handleEvent()
    }
}
app.start()





