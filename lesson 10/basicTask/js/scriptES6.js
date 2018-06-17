

//ES6
class options {
	constructor (height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	addDiv(){
		let div = document.createElement('div');
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};border: 1px solid red`;
		document.body.appendChild(div);
	}
	
}

const sqr = new options('100px', '100px', '#fff', '10px', 'center');
sqr.addDiv();










