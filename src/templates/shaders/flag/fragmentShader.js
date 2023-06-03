const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
void main() {
    vec4 texture = texture2D(uTexture, vUv);
    gl_FragColor = texture;
}

`

export default fragmentShader
