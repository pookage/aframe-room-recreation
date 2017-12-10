AFRAME.registerPrimitive("a-furniture", {
	defaultComponents: {
		geometry: {
			primitive: "box",
		},
		material: {
			color: "#aaa"
		},
		y_offsetter: {}
	},
	mappings: {
		height: "geometry.height",
		width: "geometry.width",
		depth: "geometry.depth",
		color: "material.color",
		opacity: "material.opacity"
	}
});