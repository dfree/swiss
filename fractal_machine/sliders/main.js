(function ($) {
	window.onload = function(e) {
		const anim1 = animatedImage({width:100, height: 70, parent:'stage', autofill: true});// 
		const windowData = {
			width: document.body.clientWidth,
			height: document.body.clientHeight,
		}
		const stripData = {
			image: 'img/castilo.png',
			x: 0,
			y: windowData.height/2 - 300, // TODO: 300 to dynamyc vertical pos
			width: windowData.width,
			height: 300,
		}
		
		setTimeout(() => {
			anim1.setImage(stripData.image);
			anim1.resize(stripData)
		}, 20);
		console.log(anim1);
	};
})({
	id: function(name){
		return document.getElementById(name);
	},
	delay: function(time, func, props){
		var prp = props || [];
		TweenLite.delayedCall(time, func, prp);
	},
	from: function(name, time, props){
		return TweenLite.from(typeof name === "string" ? this.id(name) : name, time, props);
	},
	tween: function(name, time, props){
		return TweenLite.to(typeof name === "string" ? this.id(name) : name, time, props);
	},
	set: function(name, props){
		return TweenLite.set(typeof name === "string" ? this.id(name) : name, props);
	},
	create: function(name, parent, props, src){
		var elem = document.createElement(src === "canvas" ? "canvas" : src ? "img" : "div");

		if(src === "canvas"){
			if(props.width){
				elem.width = props.width;
			}
			if(props.height){
				elem.height = props.height;
			}
		}
		if(src){
			elem.src = src;
		}
		elem.id = name;
		this.id(parent).appendChild(elem);
		props = props || {};
		this.set(elem, props);
		return elem;
	},
	text: function(name, parent, content){
		var text = document.createElement('p');
		text.id = name;
		text.innerHTML = content;
		text.classList.add("text");
		this.id(parent).appendChild(text);
		return text;
	},
	slider: function(name, parent, props){
		var slider = document.createElement('input');
		slider.id = name;
		slider.type = 'range';
		slider.min = props.edge[0];
		slider.max = props.edge[1];
		slider.value = props.value;
		slider.classList.add("slider");
		this.id(parent).appendChild(slider);
		return slider;
	},
	checkbox: function(name, parent, props){
		var slider = document.createElement('input');
		slider.id = name;
		slider.type = 'checkbox';
		slider.value = props.value;
		slider.classList.add("checkbox");
		this.id(parent).appendChild(slider);
		return slider;
	},
	kill: function(name){
		return TweenLite.killTweensOf(typeof name === "string" ? this.id(name) : name);
	}
});