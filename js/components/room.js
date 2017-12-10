AFRAME.registerPrimitive("a-pook-room", {
	defaultComponents: {
		geometry: {
			primitive: "pook_room"
		},
		material: {
			color: "#444"
		}
	},
	mappings: {
		color: "material.color"
	}
})