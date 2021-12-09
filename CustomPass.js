import {
	Vector2
} from 'three';

/**
 * Dot screen shader
 * based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

const CustomPass = {

	uniforms: {

		'tDiffuse': { value: null },
		'time': { value: 0 },
		'progress': { value: 0 },
		'tSize': { value: new Vector2( 256, 256 ) },
		'center': { value: new Vector2( 0.5, 0.5 ) },
		'angle': { value: 1.57 },
		'scale': { value: 1.0 }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform vec2 center;
		uniform float angle;
		uniform float time;
		uniform float progress;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}

		void main() {

			vec2 newUV = vUv;

			vec2 p = 2.*vUv - vec2(1.);

			p += 0.1*cos(2.*p.yx + time);

			newUV.x = mix(vUv.x,length(p),progress);
			newUV.y = mix(vUv.y,0.,progress);

			// COMMENT 1
			vec4 color = texture2D( tDiffuse, newUV );
			gl_FragColor = color;

			// COMMENT 2
			// gl_FragColor = vec4(length(p),0.,0.,1.);
		}`

};

export { CustomPass };
