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
const playlist= $('.playlist')
const cd = $('.cd')
console.log(cd)
console.log(playlist)

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
    renderSong:function(){
        var html = app.songs.map(function(song,index){
            return`
            <div data-index=${index} class="song ${index===this.currentIndex?'active':'' }">
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
        playlist.innerHTML = html.join("")
    },

    handleEvent:function(){
        const _this = this;
        // scrollTop
        var cdWidth = cd.offsetWidth;
        document.onscroll= function(){
            var scrollTop = window.scrollY||document.documentElement.scrollTop;
            var newScroll = cdWidth-scrollTop;
            cd = newScroll>0? newScroll:0+'px'
        }
    },
    start:function(){
        this.renderSong();
        this.handleEvent();
    }
}

app.start();



