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
const PLAYER_STORAGE_KEY='LN_PLAYER'
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb');
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player  = $('.player')
const progress =$('#progress');
const btnNext = $('.btn-next')
const btnPrev = $('.btn-prev')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const playlist = $('.playlist')
const app={
    currentIndex :0,
    isPlaying: false,
    isRandom:false,
    isRepeat :false,
    config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
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
    setConfig:function(key,value){
        this.config[key]=value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },  
    render:function(){

        const htmls = this.songs.map((song,index)=>{
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
        playlist.innerHTML = htmls.join('\n')
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
        // xử lí cd quay va dừng 
        const cdThumbAnimate= cdThumb.animate([
            {transform:'rotate(360deg'},
        ],{
            duration:10000,
            iterations: Infinity
        })// trả về một đối tượng. 

        cdThumbAnimate.pause()
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
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        };
        // khi song được play:
        audio.onplay=function(){
            _this.isPlaying=true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        // khi song được pause 
        audio.onpause= function(){
            _this.isPlaying= false;
            player.classList.remove('playing');
            cdThumbAnimate.pause()
        }
        // khi tiến độ bài hát thay đổi 
        audio.ontimeupdate= function(){
            if(audio.duration){
                const progressPercent= audio.currentTime/audio.duration *100
                progress.value=progressPercent;
            }
            updateProgressColor();
        }
        // khi tua bài hát 
        progress.onchange=function(e){
            const timeAudio = e.target.value/100*audio.duration// timeAudio là % mình chia 100 lấy được số phần trăm * tổng thời gian bài hát.
            audio.currentTime=timeAudio
            updateProgressColor();
        }
        // xử lí cho thanh progress có màu chạy theo 
        // function updateProgressColor() {
        //     const percent = (progress.value - progress.min) / (progress.max - progress.min);
        //     const color = `linear-gradient(to right, var(--primary-color) ${percent * 100}%, #ddd ${percent * 100}%)`;
        //     progress.style.background = color;
        // }
        function updateProgressColor(){
            const percent = (progress.value-progress.min)/(progress.max-progress.min);
            const color =`linear-gradient(to right, var(--primary-color) ${percent*100}%, #ddd ${percent*100}%)`;
            progress.style.background=color;
        }
        // next xong 
        btnNext.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();

        }
        // prev song 
        btnPrev.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }
        // random song 
        btnRandom.onclick = function(){
            _this.isRandom= !_this.isRandom
            _this.setConfig('isRandom',_this.isRandom)
            btnRandom.classList.toggle('active', _this.isRandom)

        }
        // audio ended =>next song 
        audio.onended= function(){
            if(_this.isRepeat){
                audio.play();
            }else{
                btnNext.click();
            }
            
        }
        // audio repeat 
        btnRepeat.onclick = function(){
            _this.isRepeat= !_this.isRepeat
            btnRepeat.classList.toggle('active',_this.isRepeat)
            _this.setConfig('isRepeat',_this.isRepeat)
        }
        // xử lí khi click song => play
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode||!e.target.closest('.option')){
               if(songNode){
                    _this.currentIndex=Number(songNode.dataset.index);
                    _this.loadCurrentSong()
                    _this.render();
                    audio.play();
                    // songNode.getAttribute('data-index') có thể lấy index bằng cách này 
               }else if(!e.target.closest('.option')){
                // xử lí vào option
               }
            }
        } 
        
    },
    loadCurrentSong:function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
  
    },
    loadConfig:function(){
        this.isRandom= this.config.isRandom
        this.isRepeat= this.config.isRepeat


        // hoặc sử dụng cách ở phía dưới 
        // Object.assign(this,this.config)
    },
    nextSong:function(){
        this.currentIndex++;
        if(this.currentIndex>=this.songs.length){
            this.currentIndex=0
        }
        this.loadCurrentSong();
    },
    prevSong:function(){
        this.currentIndex--;
        if(this.currentIndex<0){
            this.currentIndex=this.songs.length-1;
        }
        this.loadCurrentSong();
    },
    playRandomSong:function(){
        let newIndex;
        do{
           newIndex = Math.floor(Math.random()*this.songs.length)
        }while(this.currentIndex===newIndex)
        this.currentIndex=newIndex;
        this.loadCurrentSong();
    },
    scrollToActiveSong:function(){
       setTimeout(function(){
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block :'nearest'
            },300);
       })// index 1, 2, 3, thì cho nó kéo xuông thêm nữa. 
    },


    start :function(){
        this.loadConfig();// gán cấu hình từ config vào app 
        btnRandom.classList.toggle('active', this.isRandom)
        btnRepeat.classList.toggle('active', this.isRepeat)
        
        this.defineProperties();// định nghĩa các thuộc tính cho object
        
        this.handleEvents()// Lắng nghe các sự kiện dom

        this.loadCurrentSong()// tải thông tin bài hát đầu tiên vào UI

        this.render()// render lại playlist
    }
}
app.start()





