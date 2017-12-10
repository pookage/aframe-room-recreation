AFRAME.registerComponent("y_offsetter", {
	play: function(){
		const { x, y, z } = this.el.getAttribute("position");
		const { height }  = this.el.getAttribute("geometry");

		this.el.setAttribute("position", `${x} ${y +(height/2)} ${z}`);
	}
})