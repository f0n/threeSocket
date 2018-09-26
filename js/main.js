$(function(){
    //var Colores = text;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, .1, 500);
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(0xdddddd);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    var axis = new THREE.AxisHelper(10);
    scene.add (axis);

    var grid  = new THREE.GridHelper(50, 5);
    var color = new THREE.Color("rgb(255,0,0)");
    grid.setColors(color, 0x000000);

    scene.add(grid);

    var cubeGeometry = new THREE.BoxGeometry(15, 1, 5);
    var cubeMaterial = new THREE.MeshLambertMaterial({color:color2});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    var cubeGeometry1 = new THREE.BoxGeometry(15, 1, 5);
    var cubeMaterial1 = new THREE.MeshLambertMaterial({color:color1});
    var cube1 = new THREE.Mesh(cubeGeometry1, cubeMaterial1);

    var planeGeometry = new THREE.PlaneGeometry(30,30,30);
    var planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);





    plane.rotation.x = -.5*Math.PI;
    plane.receiveShadow = true;

    scene.add(plane);

    cube.position.x += 0.001;
    cube.position.y = 2.5;
    cube.position.z = 2.5;

    scene.add(cube);

    cube1.position.x += -5;
    cube1.position.y = 6.5;
    cube1.position.z = 12.5;
    cube1.rotation.x = 30;

    scene.add(cube1);


    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set (15,30,50);

    scene.add(spotLight);

    camera.position.x = 40;
    camera.position.y = 40;
    camera.position.z = 40;

    camera.lookAt(scene.position);
    controles = new THREE.TrackballControls( camera );


    var guiControls = new function(){
        this.rotationX = 0.001;
        this.rotationY = 0.001;
        this.rotationZ = 0.001;
        this.color0 = ["ff00ff"];

    }






    var params = {
        color: 0xff00ff
    };

    //var gui = new dat.GUI();

    //var folder = gui.addFolder( 'MATERIAL' );

    //folder.addColor( params, 'color' );
      //    .onChange( function() { cube.material.color.set( params.color ); } );

//    folder.open();


    render();
    function render() {

      //  cube.cubeMaterial = params.Panel1;
      //  cube.cubeMaterial = params.Panel2;
      //  cube.cubeMaterial = params.Panel3;


        controles.update();
        requestAnimationFrame(render);
        renderer.render(scene,camera);


    }

    $("#webGL-container").append(renderer.domElement);
    renderer.render(scene,camera);


});
