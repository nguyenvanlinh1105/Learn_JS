/*
    1. Render songs
    2. Scroll top/// loadCurrentSong 
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
const btnPlay = $('.btn-toggle-play')
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev');
const heading=$('header h2')
const cdThumb = $('.cd-thumb')
const player = $('.player');
const progress = $('.progress')

console.log(progress)
const app={
    currentIndex:0,
    isPlaying:false,
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
    DefineProperties:function(){
        Object.defineProperty(this, 'currentSong',{
            get:function(){
                return this.songs[this.currentIndex]
            }
        })
    },
   
    loadCurrentSong:function(){
        heading.innerText=this.currentSong.name;
        cdThumb.style.backgroundImage=`url('${this.currentSong.image}')`
        audio.src=this.currentSong.path;
    },
    handleEvent:function(){
        const _this = this;
        // cd animate 
        const cdThumbAnimate = cdThumb.animate([// trả về một đối tượng 
            {transform:'rotate(360deg)'}
        ],{
            duration:10000,
            iterations:Infinity
        })
        cdThumbAnimate.pause();

        // scrollTop
        var cdWidth = cd.offsetWidth;
        document.onscroll= function(){
            var scrollTop = window.scrollY||document.documentElement.scrollTop;
            var newScroll = cdWidth-scrollTop;
            cd.style.width = newScroll>0? newScroll+'px':0
            cd.style.opacity = newScroll/cdWidth;
            Object.assign(cd.style,{
                width : newScroll>0? newScroll+'px':0,
                opacity : newScroll/cdWidth
            })
        }
        // pause// play// seek 
        btnPlay.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }
        
        audio.onplay= function(){
            _this.isPlaying = true;
            player.classList.add('playing')
            cdThumbAnimate.play()
        }
        audio.onpause= function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
            cdThumbAnimate.pause();
        }
        // seek
        // thay đổi khi bài hát thay đổi 
        audio.ontimeupdate= function(){
            if(audio.duration){
                var progressPercent= audio.currentTime /audio.duration*100;
                progress.value=progressPercent;
                updateProgressColor();
            }
        }
        // update background theo nhạc 
        progress.onchange=function(){
            var currentPercent = progress.value /100*audio.duration;
            audio.currentTime = currentPercent;
            updateProgressColor();
        }
        function updateProgressColor(){
            var percent = (progress.value-progress.min)/(progress.max-progress.min);
            var color=`linear-gradient(to right , var(--primary-color) ${percent*100}%,#ddd ${percent*100}%)`
            progress.style.background=color
        }
        // next : 

    },
    start:function(){
        this.DefineProperties();
        this.loadCurrentSong();
        this.renderSong();
        this.handleEvent();
        
    }
}

app.start();



