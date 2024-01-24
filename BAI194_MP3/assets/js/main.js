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
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb');
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player  = $('.player')
const progress =$('#progress');

const app={
    currentIndex :0,
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
        ,
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
    defineProperties:function(){
        // định nghĩa thuộc tính 
        Object.defineProperty(this, 'currentSong',{
            get:function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents:function(){
        const _this = this;
        const cdWidth = cd.offsetWidth;
        // xử lí phóng to thu nhỏ cd 
        document.onscroll= function(){
            // console.log(document.documentElement.scrollTop) // cách 1 
            // console.log(window.scrollY)
            const scrollTop= (document.documentElement.scrollTop||window.scrollY)

            const newCdWidth =  cdWidth - scrollTop

            cd.style.width = newCdWidth> 0 ? newCdWidth +'px':0
            cd.style.opacity = newCdWidth/scrollTop
        }
        // xử lí khi click play:
        playBtn.onclick = function () {
            if(audio.paused){
                audio.play();
                player.classList.add('playing');
            }else{
                audio.pause();
                player.classList.remove('playing');
            }
        };
        // khi tiến độ bài hát thay đổi 
        audio.ontimeupdate= function(){
            if(audio.duration){
                const progressPercent= audio.currentTime/audio.duration *100
                progress.value=progressPercent;
            }
            updateProgressColor();
        }
        progress.onchange=function(e){
            const timeAudio = e.target.value/100*audio.duration// timeAudio là % mình chia 100 lấy được số phần trăm * tổng thời gian bài hát.
            audio.currentTime=timeAudio
            updateProgressColor();
        }
        // xử lí cho thanh progress có màu chạy theo 
        function updateProgressColor() {
            const percent = (progress.value - progress.min) / (progress.max - progress.min);
            const color = `linear-gradient(to right, var(--primary-color) ${percent * 100}%, #ddd ${percent * 100}%)`;
            progress.style.background = color;
        }
    },
    loadCurrentSong:function(){
        heading.textContent= this.currentSong.name
        cdThumb.style.backgroundImage =`url('${this.currentSong.image}')`
        audio.src=this.currentSong.path 
    },

    start :function(){
        this.defineProperties();// định nghĩa các thuộc tính cho object
        
        this.handleEvents()// Lắng nghe các sự kiện dom

        this.loadCurrentSong()// tải thông tin bài hát đầu tiên vào UI

        this.render()// render lại playlist
    }
}
app.start()





