#version 330

uniform sampler2D colorMap;

in vec2 uv;

layout (location = 0) out vec4 color;

void main()
{
   	color = texture(colorMap, uv);
}
