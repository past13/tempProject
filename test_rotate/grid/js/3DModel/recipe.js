function create3DMeshes() {
    // setStatus('Creating 3D objects...');
    // prepare container type meshes
    
    for (var key in globalvar.order.containertypelist) if (globalvar.order.containertypelist.hasOwnProperty(key)) {
      var containertype = globalvar.order.containertypelist[key];
  
      containertype.geometry = new THREE.BoxBufferGeometry( containertype.physicalsize.width, containertype.physicalsize.height, containertype.physicalsize.length );    
      containertype.material = new THREE.MeshStandardMaterial( { color: 0xa0a0a0 });
      //todo: check with change xyz parameters
      containertype.offset = { x: -containertype.contentoffset.deltax, y: -containertype.contentoffset.deltaz/2, z: -containertype.contentoffset.deltay }; 
      var mesh = new THREE.Mesh( containertype.geometry, new THREE.MeshFaceMaterial() );
    }
  
    // prepare orderline meshes
    for (var key in globalvar.order.orderlinelist.orderline) if (globalvar.order.orderlinelist.orderline.hasOwnProperty(key)) {
      var orderline = globalvar.order.orderlinelist.orderline[key];
  
      orderline.geometry = new THREE.BoxBufferGeometry( orderline.size.width, orderline.size.height, orderline.size.length );
      orderline.material = new THREE.MeshStandardMaterial( { color: orderline.color } );
    }
   
    // create container scenes
    for (var key in globalvar.containerrecipelist.containerrecipe) if (globalvar.containerrecipelist.containerrecipe.hasOwnProperty(key)) {
      var container = globalvar.containerrecipelist.containerrecipe[key];
      // console.log(globalvar)
         
      container.mesh = new THREE.Mesh();
      var mesh;
      mesh = new THREE.Mesh(container.containerlist.geometry, container.containerlist.material);
      mesh.position.set(containertype.offset.x, containertype.offset.y, containertype.offset.z);
      //todo: BUG move to another place !!!dont change cas and receive shadow!!!
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      container.mesh.add( mesh );    
  
      for (var p in container.physicalresult.package) if (container.physicalresult.package.hasOwnProperty(p)) {
        var pack = container.physicalresult.package[p];
      
        mesh = new THREE.Mesh(pack.orderline.geometry, pack.orderline.material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.set(pack.x, pack.z, -pack.y);
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
  }