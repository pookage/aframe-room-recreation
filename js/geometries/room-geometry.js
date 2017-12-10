AFRAME.registerGeometry("pook_room", {
	schema: {},

	//LIFECYCLE
	//-------------------------------------
	init: function(){

		//scope binding
		this.defineLengths = this.defineLengths.bind(this);
		this.defineRoom    = this.defineRoom.bind(this);
		this.definePoints  = this.definePoints;

		//defining the datapoints for the room
		const lengths   = this.defineLengths();
		const room      = this.defineRoom(lengths);
		const points    = this.definePoints(room);


		//create vertices & face indexes from room data
		const vertices = [
			[ points.center.x, points.center.y, points.center.z ], //0
			[ points.a.x, 0, points.a.z ],                         //1
			[ points.b.x, 0, points.b.z ],                         //2
			[ points.c.x, 0, points.c.z ],                         //3
			[ points.d.x, 0, points.d.z ],                         //4
			[ points.e.x, 0, points.e.z ],                         //5
			[ points.f.x, 0, points.f.z ],                         //6
			[ points.g.x, 0, points.g.z ],                         //7
			[ points.h.x, 0, points.h.z ],                         //8
			[ points.i.x, 0, points.i.z ],                         //9
			[ points.j.x, 0, points.j.z ],                         //10
			[ points.k.x, 0, points.k.z ],                         //11
			[ points.l.x, 0, points.l.z ]                          //12
		];
		const faces = [
			[2, 1, 0],
			[3, 2, 0],
			[4, 3, 0],
			[5, 4, 0],
			[6, 5, 0],
			[7, 6, 0],
			[8, 7, 0],
			[9, 8, 0],
			[10, 9, 0],
			[11, 10, 0],
			[12, 11, 0],
			[1, 12, 0]
		];

		//attach vertices
		const geometry = new THREE.Geometry();
		let vertex, vector3;
		for(vertex of vertices){
			vector3 = new THREE.Vector3(vertex[0], vertex[1], vertex[2]);
			geometry.vertices.push(vector3);
		}
		geometry.computeBoundingBox();
		geometry.computeBoundingSphere();

		//attach faces
		let face, face3;
		for(face of faces){
			face3 = new THREE.Face3(face[0], face[1], face[2]);
			geometry.faces.push(face3);
		}

		//setup normals
		geometry.mergeVertices();         
		geometry.computeFaceNormals();    
		geometry.computeVertexNormals();  
		
		this.geometry = geometry;
	},//init


	//UTILS
	//---------------------------------------
	defineRoom: function(lengths){
		const width     = lengths.kl + lengths.ab;
		const depth     = lengths.la + lengths.jk + lengths.hi;
		const height    = 2.6;
		const room      = {
			dimensions : {
				x: width,
				y: height,
				z: depth,
			},
			halves: {
				x: width/2,
				y: height/2,
				z: depth/2
			},
			lengths
		};
		return room;
	},//defineRoom
	defineLengths: function(){
		return {
			ab: 4.10,
			bc: 2.50,
			cd: 0.70,
			de: 1.60,
			ef: 0.10,
			fg: 0.13,
			gh: 3.55,
			hi: 0.36,
			ij: 0.11,
			jk: 3.75,
			kl: 0.36,
			la: 0.12
		};
	},//defineLengths
	definePoints: function(room){
		return({
			center: { x: 0, y: 0, z: 0 },
			a: {
				x: -room.halves.x + room.lengths.kl,
				z: -(room.halves.z)
			},
			b: {
				x: room.halves.x,
				z: -room.halves.z
			},
			c: {
				x: room.halves.x,
				z: -room.halves.z + room.lengths.bc
			},
			d: {
				x: room.halves.x - room.lengths.cd,
				z: -room.halves.z + room.lengths.bc
			},
			e: {
				x: room.halves.x - room.lengths.cd,
				z: room.halves.z - room.lengths.fg
			},
			f: {
				x: room.halves.x - (room.lengths.cd + room.lengths.ef),
				z: room.halves.z - room.lengths.fg
			},
			g: {
				x: room.halves.x - (room.lengths.cd + room.lengths.ef),
				z: room.halves.z
			},
			h: {
				x: -room.halves.x + room.lengths.ij,
				z: room.halves.z
			},
			i: {
				x: -room.halves.x + room.lengths.ij,
				z: room.halves.z - room.lengths.hi
			},
			j: {
				x: -room.halves.x,
				z: room.halves.z - room.lengths.hi
			},
			k: {
				x: -room.halves.x,
				z: -room.halves.z + room.lengths.la
			},
			l: {
				x: -room.halves.x + room.lengths.kl,
				z: -room.halves.z + room.lengths.la
			}
		});
	}//definePoints

})