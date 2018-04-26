'use strict';
function initMeshes() {
    function getTextureMaping(orderline) {
        var faceArray = {
            top : [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .5), new THREE.Vector2(.0, .5) ],
            bottom : [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .5), new THREE.Vector2(.5, .5) ],
            front : [new THREE.Vector2(0, .5), new THREE.Vector2(.5, .5), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1) ],
            back : [new THREE.Vector2(.5, .5), new THREE.Vector2(1, .5), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1) ]
        }
        orderline.geometry.faceVertexUvs[0] = [];

        orderline.geometry.faceVertexUvs[0][0] = [faceArray.top[0], faceArray.top[1], faceArray.top[3]];
        orderline.geometry.faceVertexUvs[0][1] = [faceArray.top[1], faceArray.top[2], faceArray.top[3]];

        orderline.geometry.faceVertexUvs[0][2] = [faceArray.bottom[0], faceArray.bottom[1], faceArray.bottom[3]];
        orderline.geometry.faceVertexUvs[0][3] = [faceArray.bottom[1], faceArray.bottom[2], faceArray.bottom[3]];

        orderline.geometry.faceVertexUvs[0][4] = [faceArray.front[0], faceArray.front[1], faceArray.front[3]];
        orderline.geometry.faceVertexUvs[0][5] = [faceArray.front[1], faceArray.front[2], faceArray.front[3]];

        orderline.geometry.faceVertexUvs[0][6] = [faceArray.front[0], faceArray.front[1], faceArray.front[3]];
        orderline.geometry.faceVertexUvs[0][7] = [faceArray.front[1], faceArray.front[2], faceArray.front[3]];

        orderline.geometry.faceVertexUvs[0][8] = [faceArray.back[0], faceArray.back[1], faceArray.back[3]];
        orderline.geometry.faceVertexUvs[0][9] = [faceArray.back[1], faceArray.back[2], faceArray.back[3]];

        orderline.geometry.faceVertexUvs[0][10] = [faceArray.back[2], faceArray.back[3], faceArray.back[1]];
        orderline.geometry.faceVertexUvs[0][11] = [faceArray.back[3], faceArray.back[0], faceArray.back[1]];

        return faceArray;
    }
    function getBoxTexture() {
        // var map = THREE.ImageUtils.loadTexture( "images/blanktexture.jpg" );
        var map = new THREE.TextureLoader().load( 'images/texture_2.jpg' );
        return map;
    }
    function createContainerType(globalrecipe) {
        var containertype;	
        for (var key in globalrecipe.order.containertypelist) if (globalrecipe.order.containertypelist.hasOwnProperty(key)) {
            containertype = globalrecipe.order.containertypelist[key];
            containertype.geometry = new THREE.BoxBufferGeometry( containertype.physicalsize.width, containertype.physicalsize.height, containertype.physicalsize.length );    
            
            containertype.material = new THREE.MeshLambertMaterial( { transparent: true });
            //todo: check with change xyz parameters
            containertype.offset = { x: -containertype.contentoffset.deltax, y: -containertype.contentoffset.deltaz/2, z: -containertype.contentoffset.deltay }; 		
            var mesh = new THREE.Mesh( containertype.geometry, new THREE.MeshFaceMaterial());  	
        }
        return containertype;
    }
    function createOrderlines(container) {
        for (var p in container.physicalresult.package) if (container.physicalresult.package.hasOwnProperty(p)) {
            var pack = container.physicalresult.package[p];		
                var mesh = new THREE.Mesh(pack.orderline.geometry, pack.orderline.material);                
                mesh.castShadow = true;
                mesh.receiveShadow = true;								
                mesh.userData = Object.assign({}, pack );                
                mesh.position.set(pack.x, pack.z, pack.y);
                mesh.rotation.set(pack.rotation.x, pack.rotation.z, pack.rotation.y);                
            container.mesh.add(mesh);               

            var edges = new THREE.EdgesGeometry( pack.orderline.geometry ); //missing sphere parameters
        
            //todo: BUG lineWidth is not a property of this material
            var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000, lineWidth: 3 } ) );
            line.position.copy(mesh.position);
            line.rotation.copy(mesh.rotation);
            container.mesh.add( line );   
            }	
    }
    function prepareContainer() {
    console.log(globalrecipe)
        
        var containertype = createContainerType(globalrecipe);

        for (var key in globalrecipe.order.orderlinelist.orderline) if (globalrecipe.order.orderlinelist.orderline.hasOwnProperty(key)) {
            var orderline = globalrecipe.order.orderlinelist.orderline[key];

            orderline.geometry = new THREE.CubeGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
            orderline.material = new THREE.MeshLambertMaterial( { map: getBoxTexture(), transparent: true} );

            getTextureMaping(orderline);	
        }		
        for (var key in globalrecipe.containerlist) if (globalrecipe.containerlist.hasOwnProperty(key)) {
            var container = globalrecipe.containerlist[key];   
            container.mesh = new THREE.Mesh();
            var mesh;

            mesh = new THREE.Mesh(globalrecipe.containerlist.geometry, globalrecipe.containerlist.material);
            mesh.position.set(containertype.offset.x, containertype.offset.y, containertype.offset.z);
            //todo: BUG move to another place !!!dont change cas and receive shadow!!!
            // mesh.castShadow = true;
            // mesh.receiveShadow = true;
            container.mesh.add( mesh );   
            createOrderlines(container);
            return container;
        }         
        return container;
    }
    var result = prepareContainer(); 
    return result;
}