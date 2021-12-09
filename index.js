import * as THREE from "./node_modules/three/build/three.module"
var fragment = require("./shader/fragment.glsl")
//var vertex = require("./shader/vertex.glsl")
// import * as gsap from "./node_modules/gsap/gsap-core"

import t1 from './assets/asset1.jpeg'
import t2 from './assets/asset2.jpeg'


class Workspace
{
    constructor()
    {
        const scope = this

        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        )
        document.body.appendChild( renderer.domElement )
        const urls = [t1, t2]
        this.textures = urls.map(url => new THREE.TextureLoader().load(url))
        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0 },
                uTexture: { value: 0 },
                resolution: { value: new THREE.Vector4() }
            },
            vertexShader: vertex,
            fragmentShader: fragment
        })

        this.addObjects = function() {
            scope.textures.forEach( texture => {
                let m = this.material.clone()
                m.uniforms.uTexture = texture
                let obj = THREE.Mesh()
                scope.scene.add(obj)
            })
        }
        this.renderer.render(scene, camera)
    }
}