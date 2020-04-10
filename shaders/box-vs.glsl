#version 300 es

in vec4 vertexPosition;

uniform struct{
    mat4 rayDirMatrix;
} camera;

out vec4 rayDir;

void main(void) {
    rayDir = vertexPosition * camera.rayDirMatrix;
    gl_Position = vec4(vertexPosition.xy, 0.999999, 1);
}