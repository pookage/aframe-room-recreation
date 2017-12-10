AFRAME.registerPrimitive("a-furniture", {
	defaultComponents: {
		geometry: {
			primitive: "box",
		},
		material: {
			color: "#444"
		},
		y_offsetter: {}
	},
	mappings: {
		height: "geometry.height",
		width: "geometry.width",
		length: "geometry.depth"
	}
});