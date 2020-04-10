#version 300 es

precision highp float;

out vec4 fragmentColor;

uniform struct {
    vec3 color;
} material;

void main(void) {
    fragmentColor = vec4(material.color.xyz, 1);
}
