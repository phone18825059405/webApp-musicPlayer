function addClass(el, className) {
	if (!className) return;
	if (el.classList) {
		el.classList.add(className);
	} else {
		el.className += ' ' + className;
	}
};

function removeClass(el, className) {
	if (!className) return;
	if (el.classList) {
		el.classList.remove(className);
	} else {
		el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
};

function hasClass(el, className) {
	if (!className) return false;
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
};

var song = [
		{
			'title':'Always',
			'singer':'太阳的眼泪',
			//'src':'song/Always.mp3'
			'src':'http://cc.stream.qqmusic.qq.com/C200001cMuGa08wPkq.m4a?vkey=18CC4617E8FC6199B316185839ECE26EFAF562E0D5ACC8AA3E79FAD1AFDB0B0E0BA95991EBE233F3C1A85CC46044BC9A0DBE5E6A8E703C9F&guid=5986352425&fromtag=30',
			'lyc':false
		},
		{
			'title':'DAViCHi',
			'singer':'太阳的眼泪',
			//'src':'song/DAViCHi.mp3'
			'src':'http://cc.stream.qqmusic.qq.com/C200003de5C906SZp9.m4a?vkey=535402A7D906EDF027719D656E1FAEFA942BE3FD0F2F7F2E049CBCDC2FA606B4117192FE121108FD1A1DB69807E50266CEEEA25AD4B3B9FB&guid=7571875080&fromtag=30',
			'lyc':false
		},
		{
			'title':'Everytime',
			'singer':'太阳的眼泪',
			//'src':'song/Everytime.mp3'
			'src':'http://cc.stream.qqmusic.qq.com/C200003S1hgM2asCye.m4a?vkey=058FBE2EA87860BB11880925109F737384F281BF1613C01196EA1DCA8D38D369457B4D174106A9E4CCC3593F272A05B7073F5382888485C1&guid=7571875080&fromtag=30',
			'lyc':false
		},
		{
			'title':'夜空中最亮的星',
			'singer':'G.E.M.邓紫棋',
			'src':'song/TheFlashestStarInTheSky.mp3',
			'lyc':'[00:01.03]夜空中最亮的星\n[00:02.28]\n[00:03.37]词曲：逃跑计划\n[00:04.88]演唱：G.E.M.邓紫棋\n[00:05.92]\n[00:08.83]夜空中最亮的星 能否听清\n[00:16.10]那仰望的人 心底的孤独和叹息\n[00:25.76]夜空中最亮的星 能否记起\n[00:32.75]曾与我同行 消失在风里的身影\n[00:41.62]\n[00:42.56]我祈祷拥有一颗透明的心灵\n[00:47.06]和会流泪的眼睛\n[00:51.19]给我再去相信的勇气\n[00:55.76]越过谎言去拥抱你\n[01:00.10]每当我找不到存在的意义\n[01:04.35]每当我迷失在黑夜里\n[01:08.75]夜空中最亮的星\n[01:13.91]请照亮我前行\n[01:17.64]\n[01:22.92]夜空中最亮的星 是否知道\n[01:32.30]曾与我同行的身影 如今在哪里\n[01:37.72]夜空中最亮的星 是否在意\n[01:47.76]是太阳先升起 还是意外先来临\n[01:55.14]\n[01:57.08]我祈祷拥有一颗透明的心灵\n[02:01.51]和会流泪的眼睛\n[02:05.78]给我再去相信的勇气\n[02:10.03]越过谎言去拥抱你\n[02:13.99]每当我找不到存在的意义\n[02:18.84]每当我迷失在黑夜里\n[02:23.02]夜空中最亮的星\n[02:27.33]请照亮我前行\n[02:30.75]\n[02:33.77]夜空中最亮的星  请照亮我前行\n[02:40.48]夜空中最亮的星  请照亮我前行\n[02:49.60]夜空中最亮的星  请照亮我前行\n[02:57.92]夜空中最亮的星  请照亮我前行\n[03:05.93]\n[03:10.75]我不愿忘记你的眼睛\n[03:15.95]给我再去相信的勇气\n[03:20.08]去拥抱你\n[03:24.32]\n[03:25.59]我找不到存在的意义\n[03:28.95]我迷失在黑夜里\n[03:34.87]夜空中最亮的星 请照亮我前行\n[03:45.10]'
		},
		{
			'title':'SayDothing',
			'singer':'太阳的眼泪',
			'src':'song/SayDothing.mp3',
			'lyc':false
		},
		{
			'title':'SeeYouAgain',
			'singer':'太阳的眼泪',
			'src':'song/SeeYouAgain.mp3',
			'lyc':false
		},
		{
			'title':'WannabeByMySide',
			'singer':'太阳的眼泪',
			'src':'song/WannabeByMySide.mp3',
			'lyc':false
		},
		{
			'title':'WindBeneathYourWings',
			'singer':'太阳的眼泪',
			'src':'song/WindBeneathYourWings.mp3',
			'lyc':false
		},
		{
			'title':'WithYou',
			'singer':'太阳的眼泪',
			'src':'song/WithYou.mp3',
			'lyc':false
		},
		{
			'title':'YouAreMyEverything',
			'singer':'太阳的眼泪',
			//'src':'song/YouAreMyEverything.mp3',
			'src':'//dl.stream.qqmusic.qq.com/C200004Obe3Z1ov6Cf.m4a?vkey=1B0DA5C24629C313632A290E7A485785AF9FB53B5CE13F075E142FA1A1F4D65636814B14802B18A027F7BBBEB0184C1DA4703201A6708C94&guid=4513890134&fromtag=30',
			'lyc':false
		}
	];
var player = document.querySelector('#player');
var startCount;
var sIndex = 0;
var lrcColumn;
var lyricsGlobal;
var mode = 0;
//播放暂停一系列操作
function _audio(options){

	this.audioEle     = player || options.audioEle;//音频节点
	this._bottom      = document.querySelector('#progress') || options._bottom;//主功能区
	this.scrollBar    = document.querySelector('#progress') || options.scrollBar;//滚动条
	this.scrollPoint  = document.querySelector('.point') || options.scrollPoint;//滚动小圆点
	this.bar_t        = document.querySelector('.bar-t') || options.bar_t;//上层滚动样式条
	this.bar_b        = document.querySelector('.bar-b') || options.bar_b;//下层滚动样式条
	this.controlBar   = document.querySelector('.line-3') || options.controlBar;//播放控制组
	this.songList     = document.querySelector('.dl-wrapper') || options.songList;//播放列表
	this.modeEle      = document.querySelector('#mode') || options.modeEle;//播放顺序切换的文档节点
	this.lyrics       = document.querySelector('#lyrics') || options.lyrics;//歌词节点
	this.flicker      = false;
	this._bottomH     = this._bottom.offsetHeight;
	//this.sIndex = 0;//默认开始播放的序列
	//this.mode = 0;//播放顺序

	var that = this;
	var startX, moveX = 0, endX, currentX = 0, tempX = 0;//分别为touchstart触点,touchmove滑动距离，touchend触点，
	var scrollEvent = {
		tStart:function(e){

			startX = e.touches[0].pageX;
			tempX = moveX;

			that.scrollBar.addEventListener('touchmove',scrollEvent.tMove,false);
			that.scrollBar.addEventListener('touchend',scrollEvent.tEnd,false);
		},

		tMove:function(e){
			//clearInterval(startCount);
			moveX = e.changedTouches[0].pageX - startX;

			that.audioEle.currentTime = ((currentX + moveX) / that.scrollBar.offsetWidth) * that.audioEle.duration;
			that.scrollPoint.style.left = that.bar_t.style.width = ((currentX + moveX) / that.scrollBar.offsetWidth)*100 + '%';

			if(parseFloat(that.scrollPoint.style.left) < 0){
				that.audioEle.currentTime = 0;
				that.scrollPoint.style.left = that.bar_t.style.width = 0;
				currentX = 0;
				that.scrollBar.removeEventListener('touchend',scrollEvent.tEnd);

			}else if(parseFloat(that.scrollPoint.style.left) > that.scrollBar.offsetWidth){
				that.audioEle.currentTime = that.audioEle.duration;
				that.scrollPoint.style.left = that.bar_t.style.width = '100%';
				currentX = parseFloat(document.defaultView.getComputedStyle(that.scrollPoint, null).left);
				that.scrollBar.removeEventListener('touchend',scrollEvent.tEnd);
			}	
		},

		tEnd:function(e){

			endX = e.changedTouches[0].pageX;

			if(Math.abs(tempX - moveX) < 5){
				that.audioEle.currentTime = ((endX - that.scrollBar.offsetLeft) / that.scrollBar.offsetWidth) * that.audioEle.duration;
				that.scrollPoint.style.left = that.bar_t.style.width = ((endX - that.scrollBar.offsetLeft) / that.scrollBar.offsetWidth)*100 + '%';
			}

			currentX = parseFloat(document.defaultView.getComputedStyle(that.scrollPoint, null).left);
			console.log(currentX);

			//startCount = setInterval(function(){that.count()},1000);
		},
	}

	this.renderLyc();
	this.renderList(song);	//加载播放列表



	this.controlBar.addEventListener('touchstart',function(e){
		e = e || window.e;
		if(e.target.nodeName.toLowerCase() == 'i'){
			that.tStart(e.target);
		}

		switch(e.target.id)
		{
			case 'mode':
			console.log('mode')
			break;
			case 'prev':
			console.log('prev')
			break;
			case 'play':
				console.log('start')
			break;
			case 'next':
			console.log('next')
			break;
			case 'list':
			console.log('list')
			break;
		}
	},false)

	this.controlBar.addEventListener('touchend',function(e){
		e = e || window.e;
		if(e.target.nodeName.toLowerCase() == 'i'){
			that.tEnd(e.target);
		}
		
		switch(e.target.id)
		{
			case 'mode':
			that.changeMode();
			break;
			case 'prev':
				that.prevSong();
			break;
			case 'play':
			//播放暂停图标切换
				if(player.paused){		
					if(that.audioEle.readyState>=2){
						e.target.innerHTML = '&#xe61c;';
						that.audioEle.play();
					}
					
					//that.startPlay();
					//startCount = setInterval(progress.prototype.count,1000);
					startCount = setInterval(function(){that.count()},1000);
				}
				else{
					e.target.innerHTML = '&#xe61e;';
					player.pause();
					clearInterval(startCount);
				}
			break;
			case 'next':
				that.nextSong();
			break;
			case 'list':
			//隐藏显示播放列表
				if(this.style.display == 'block'){
					document.querySelector('#queue').style.display = 'none';
					document.querySelector('#queue').style.opacity = 0;
				}else{
					document.querySelector('#queue').style.display = 'block';
					document.querySelector('#queue').style.opacity = 1;
					document.querySelector('.mask').style.display = 'block';
				}
				//document.querySelector('#list').style.pointerEvents = 'none';
				e.stopPropagation();
			break;
		}

	},false)

	this.scrollBar.addEventListener('touchstart',scrollEvent.tStart,false);

	startCount = setInterval(function(){that.count()},1000);
}

_audio.prototype.tStart = function(ele){
	ele.style.opacity = .7;
}
_audio.prototype.tEnd = function(ele){
	ele.style.opacity = '';
}
_audio.prototype.renderList = function(song){
	//var that = this;
	//渲染播放列表
	var fg = document.createDocumentFragment();
	for(var i=0,len=song.length; i<len; i++){
		var dd = document.createElement('dd');
		dd.className = 'list';
		dd.innerHTML = '<span class="name">'+ song[i]['title'] +'</span><span class="singer"> -'+ song[i]['singer'] +'</span><div class="Icon_pause"><span></span><span></span><span></span><span></span></div><i id="del" class=" iconfont">&#xe620;</i>'
		fg.appendChild(dd);
	}
	this.songList.appendChild(fg);

	
	//console.log(this.list);
}
_audio.prototype.renderLyc = function(){
	var that = this;
	//document.querySelectorAll('.timer')[1].innerHTML = document.documentElement.offsetWidth;
	var ratio = (window.innerWidth*0.625) / 320;
		ratio = ratio>=12?parseInt(ratio):12;
	//调整rem基值
	document.querySelector('html').style.fontSize = ratio +'px';

	//渲染歌词列表
	//var PfontSize = parseInt(ratio*16);
	var wh = window.innerHeight;
	//console.log(this._bottomH);
	var bottomHeight = document.querySelector('.bottom').offsetHeight;
	var column = parseInt((wh - bottomHeight - (ratio*4)) / (ratio*3));
		column = column%2!==0?column:column-1;
		lrcColumn = column;
	 document.querySelector('#lyrics').style.height = column *3 + 'rem';
	 document.querySelector('#lyrics').style.paddingTop = (column-1)/2 *3 + 'rem';
	 
	 console.log(111)
	 window.addEventListener('resize',function(){
	 	that.audioEle.pause();
	 	that.renderLyc();
	 },false)
	//document.querySelector('#show_setting').addEventListener('click',this.renderLyc,false)
}
_audio.prototype.startPlay = function(){//播放音频
	var index = sIndex;
	player.src = song[index]['src'];

	document.querySelector('#lyrics ul').innerHTML = '';
	this.lyrics.querySelector('ul').style.transform = '';
	if(song[index]['lyc'] == false){
		lyricsGlobal = undefined;
		console.log('无歌词')
		document.querySelector('#lyrics ul').innerHTML = '此歌曲暂无歌词';			
		
	}else{
		lyricsGlobal = parseLyric(song[index]['lyc'])//歌词
	}

	player.play();

	if(document.querySelector('.currentsong')){
		document.querySelector('.currentsong').classList.remove('currentsong');
	}

	if(document.querySelector('.Icon_playing')){
		document.querySelector('.Icon_playing').className = 'Icon_pause';
	}
	document.querySelectorAll('.list div')[index].className = 'Icon_playing';
	document.querySelector('.dl-wrapper').children[index].classList.add('currentsong');

	renderLyric(lyricsGlobal);
}
_audio.prototype.nextAdd = function(){
	sIndex ++;
	if(sIndex > song.length-1){
		sIndex = 0
	}
}
_audio.prototype.randomAdd = function(){
	sIndex = parseInt(Math.random() * song.length-1)
}
_audio.prototype.changeMode = function(){//切换播放模式
	mode++;
	if(mode > 2){
		mode = 0;
	}
	switch(mode)
	{
		case 0:
			document.querySelector('.amount .order').innerHTML = '&#xe60d;';
			this.modeEle.innerHTML = '&#xe60d;';
		break;

		case 1:
			document.querySelector('.amount .order').innerHTML = '&#xe612;';
			this.modeEle.innerHTML = '&#xe612;';
		break;

		case 2:
			document.querySelector('.amount .order').innerHTML = '&#xe618;';
			this.modeEle.innerHTML = '&#xe618;';
		break;
	}
	console.log(mode)
}
_audio.prototype.nextSong = function(){//下一首歌曲
	sIndex ++;
	if(sIndex > song.length-1){
		sIndex = 0;
	}
	this.startPlay();
}
_audio.prototype.prevSong = function(){//上一首歌曲
	sIndex --;
	if(sIndex < 0){
		sIndex = song.length-1;
	}
	this.startPlay();
}
_audio.prototype.count = function(){

	var audioEle = this.audioEle;//音频节点
	var scrollBar = this.scrollBar;//滚动条
	var scrollPoint = this.scrollPoint;//滚动小圆点
	var bar_t = this.bar_t;//上层滚动样式条

	//this.bar_b.style.width = (audioEle.buffered.end(audioEle.buffered.length - 1) / audioEle.duration)*100 +'%';

	scrollPoint.style.left = bar_t.style.width = parseInt(audioEle.currentTime) * (scrollBar.offsetWidth / audioEle.duration) + 'px';

	var second = '00',minute = '00';
	var currentTime = parseInt(player.currentTime);

	var minute = parseInt(currentTime/60);
		minute = minute>9?minute:'0'+minute;
	var second = currentTime%60;
		second = second>9?second:'0'+second;
	
	document.querySelectorAll('.timer')[0].innerText = minute+':'+second;

	/*if(parseInt(audioEle.buffered.end(audioEle.buffered.length - 1)) == parseInt(audioEle.currentTime)){
		document.querySelector('.line-1 span').style.visibility = 'visible';
	}else{
		document.querySelector('.line-1 span').style.visibility = 'hidden';
	}*/
	if(audioEle.readyState <= 1){
		document.querySelector('.line-1 span').style.visibility = 'visible';
	}else{
		document.querySelector('.line-1 span').style.visibility = 'hidden';
	}
	//console.log(parseInt(audioEle.buffered.end(audioEle.buffered.length - 1))+'|||'+parseInt(audioEle.currentTime)+'|||'+player.readyState)
	//if(audioEle.)
	if(audioEle.ended){
		//console.log('done');
		switch(mode)
		{
			case 0:
				this.nextAdd();
				this.startPlay();
			break;

			case 1:
				this.randomAdd();
				this.startPlay();
			break;

			case 2:
				sIndex = sIndex;
				this.startPlay();
			break;
		}
	}
}


/*new _audio({
	audioEle:player,
	_bottom:document.querySelector('.bottom'),
	scrollBar:document.querySelector('#progress'),
	scrollPoint:document.querySelector('.point'),
	bar_t:document.querySelector('.bar-t'),
	bar_b:document.querySelector('.bar-b'),
	controlBar:document.querySelector('.line-3'),
	songList:document.querySelector('.dl-wrapper'),
	modeEle:document.querySelector('#mode'),
	lyrics:document.querySelector('#lyrics')
})*/


function a(){
	_audio.call(this);
}
a.prototype = new _audio();
a.prototype.constructor = a;

var list = {
	targetEle:document.querySelectorAll('.list'),
	startTx:0,
	startTy:0,
	endTx:0,
	endTy:0,
	tStart:function( e ){
  				var touches = e.touches[0];
  				list.startTx = touches.clientX;
  				list.startTy = touches.clientY;
  				console.log(list.startTy);
  				this.addEventListener('touchend',list.tEnd,false);
			},
	tEnd: function( e ){
  				var touches = e.changedTouches[0];
    			list.endTx = touches.clientX;
    			list.endTy = touches.clientY;
    			console.log(list.endTy+'|||');
  // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
  				if( Math.abs(list.startTx - list.endTx) < 6 && Math.abs(list.startTy - list.endTy) < 6 ){
   			 		//console.log( 'fire tap event' );
   			 		e.stopPropagation();
   			 		document.querySelector('#lyrics ul').innerHTML = '';
					//console.log(e.target);
					if(e.target.nodeName.toLowerCase() == 'span'){
						var index = Array.prototype.indexOf.call(list.targetEle,e.target.parentNode);
						console.log(index)
						player.src = song[index]['src'];
				
						if(song[index]['lyc'] == false){
							lyricsGlobal = undefined;
							console.log('无歌词')
							document.querySelector('#lyrics ul').innerHTML = '此歌曲暂无歌词';			
							
						}else{
							lyricsGlobal = parseLyric(song[index]['lyc'])//歌词
						}
						
						if(document.querySelector('.Icon_playing')){
							document.querySelector('.Icon_playing').className = 'Icon_pause';
						}
						document.querySelectorAll('.list div')[index].className = 'Icon_playing';

						player.play();
						document.querySelector('#play').innerHTML = '&#xe61c;';

						sIndex = index;

					}else if(e.target.nodeName.toLowerCase() == 'dd'){
						var index = Array.prototype.indexOf.call(list.targetEle,e.target);
						player.src = song[index]['src'];

						if(song[index]['lyc'] == false){
							lyricsGlobal = undefined;
							console.log('无歌词')
							document.querySelector('#lyrics ul').innerHTML = '此歌曲暂无歌词';			
							
						}else{
							lyricsGlobal = parseLyric(song[index]['lyc'])//歌词
						}
						
						if(document.querySelector('.currentsong')){
							document.querySelector('.currentsong').classList.remove('currentsong');
						}

						if(document.querySelector('.Icon_playing')){
							document.querySelector('.Icon_playing').className = 'Icon_pause';
						}
						document.querySelectorAll('.list div')[index].className = 'Icon_playing';
						document.querySelector('.dl-wrapper').children[index].classList.add('currentsong');

						player.play();
						document.querySelector('#play').innerHTML = '&#xe61c;';

						sIndex = index;
					}else if(e.target.id == 'del'){
						var index = Array.prototype.indexOf.call(list.targetEle,e.target.parentNode);
						console.log(index)
						document.querySelector('.dl-wrapper').removeChild(document.querySelectorAll('.list')[index]);
						song.splice(index,1);
						document.querySelector('.amount span').innerHTML = '播放队列('+ song.length +')'
					}

					renderLyric(lyricsGlobal);
  				}
			}
}

document.querySelector('.amount .order').addEventListener('touchend',function(){
	mode++;
	var _mode = document.querySelector('#mode');
	if(mode > 2){
		mode = 0;
	}
	switch(mode)
	{
		case 0:
			this.innerHTML = '&#xe60d;';
			_mode.innerHTML = '&#xe60d;';
		break;

		case 1:
			this.innerHTML = '&#xe612;';
			_mode.innerHTML = '&#xe612;';
		break;

		case 2:
			this.innerHTML = '&#xe618;';
			_mode.innerHTML = '&#xe618;';
		break;
	}
	console.log(mode)
})
document.querySelector('#queue .dl-wrapper').addEventListener('touchstart',list.tStart,false)

document.querySelector('#shut').onclick = shut;
function shut(){
	document.querySelector('#queue').style.display='none';
	document.querySelector('.mask').style.display='none';
}

/*player.addEventListener('playing',function(){
	if(document.querySelector('.Icon_pause')){
		document.querySelector('.Icon_pause').classList.add('Icon_playing')
	}else if(document.querySelector('.Icon_playing')){
		document.querySelector('.Icon_pause').classList.add('Icon_playing')
	}
	//document.querySelectorAll('.Icon_playing')[index].classList.add('Icon_playing')
})
player.addEventListener('pause',function(){
	document.querySelectorAll('.Icon_playing')[index].classList.add('Icon_pause')
})*/
//player.addEventListener('canplay',function(){console.log('canplay:'+player.readyState)})
player.addEventListener('emptied',function(){console.log('网络连接关闭')})
player.addEventListener('empty',function(){console.log('发生错误阻止下载')})
player.addEventListener('loadeddata',function(){
	var duration = parseInt(player.duration);
	var minute = parseInt(duration/60);
		minute = minute>9?minute:'0'+minute;
	var second = duration%60;
		second = second>9?second:'0'+second;
	document.querySelectorAll('.timer')[1].innerHTML = minute + ":" + second;
})
player.addEventListener('progress',function(){
	document.querySelector('.bar-b').style.width = (player.buffered.end(player.buffered.length - 1) / player.duration)*100 +'%';
	//document.querySelector('.bar-b').style.width = (player.buffered.end(0) / player.duration)*100 +'%';
})
player.addEventListener('waiting',function(){console.log('需要缓冲')})
player.oncanplay= function(){console.log('开始播放了')};

document.querySelector('.mask').addEventListener('touchstart',function(){
	console.log('444')
	document.querySelector('#queue').style.display='none';
	this.style.display='none'
})

//
function parseLyric(lrc) {
    var lyrics = lrc.split("\n");
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){

        var lyric = decodeURIComponent(lyrics[i]);

        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        //console.log(timeRegExpArr);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');

        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:[\d.]*/i)[0].slice(1)));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}
/*player.addEventListener('playing',function(){
	renderLyric(lyricsGlobal)
	//console.log('playing...')
},false)*/
var parsed = {};
function renderLyric(data){
	var frg = document.createDocumentFragment();
	var i = 0;
    for(var k in data){
        var txt = data[k];
        if(!txt)continue;
        parsed[k] = {
            index:i,
            text:txt,
            top: i*3
        };     
        var li = document.createElement('li');
        li.setAttribute('data-column',i);
        li.innerHTML = txt;
        frg.appendChild(li);
        i++;
        //console.log()
    }
    document.querySelector('#lyrics ul').appendChild(frg);
    player.addEventListener("timeupdate",updateLyric,false);
}
//console.log(parsed)
var index_temp;
function updateLyric(){
	if(player.paused || lyricsGlobal ==undefined)return;
    var data = parsed;
    if(!data)return;
    var currentTime = player.currentTime;
    //console.log(currentTime)
    var lrc;
    for(t in data){
    	if(currentTime >= t){
    		lrc = data[t];
    	}
    	//console.log(typeof(t));
    }
    //console.log(lrc);
    if(!lrc || lrc.index == index_temp)return;
    //console.log(lrc);
    var text = lrc.text;

    index_temp = lrc.index;
    //console.log(text);
    if(text.length != 0){
        locationLrc(lrc);     
    }
    function locationLrc(lrc){
    	var lrcEle = document.querySelector('#lyrics ul');
    	if(lrcEle.querySelector('.on')){
    		lrcEle.querySelector('.on').className = '';
    	}

    	if(lrcEle.querySelector('.fadeout')){
    		var fadeouts = document.querySelectorAll('.fadeout');
    		for(var z=0;z<fadeouts.length;z++){
    			removeClass(fadeouts[z],'fadeout');
    		}
    	}
    	//console.log(lrc);
    	lrcEle.children[lrc.index].className = 'on';


    	/*var getIndex = lrcEle.querySelector('.on').getAttribute('data-column');*/
			if(lrcEle.children[lrc.index-(lrcColumn-1)/2]){
    			addClass(lrcEle.children[lrc.index-(lrcColumn-1)/2],'fadeout');
    		}
    		if(lrcEle.children[lrc.index+(lrcColumn-1)/2]){
    			addClass(lrcEle.children[lrc.index+(lrcColumn-1)/2],'fadeout');
    		}

    	lrcEle.style.transform = 'translateY('+(-lrc.top)+'rem)';
    }
}