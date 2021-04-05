/** Hex 
  * 
  * Renders a hexagon
  *
  * @prop size The size of the hexagon in pixels
  * @prop rotation The rotation of the hexagon in degrees
  * @prop image The url of background image
  * @prop color The color of the hexagon (any CSS color value is accepted)
  * @prop borderSize The size of the border
  * @prop borderColor The color of the border
  *
  * Example:
  *     <Hex 
  *         size={200}
  *         rotation={60} 
  *         color="var(--purple)"
  *         image="https://placekitten.com/200/300"
  *         borderSize={10}
  *         borderColor="black"
  *     />
  */
export default function Hex({ x, y, size, rotation, image, color, borderSize, borderColor }) {
  // height = 0.5*sqrt(3)*width
  const height = (width) => 0.8660254 * width;
  const [borderWidth, borderHeight] = [size + 2 * borderSize, height(size + 2 * borderSize)];
  const shape = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
  
  const dx = size / 2;
  const dy = Math.sqrt(3) * dx;
  
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: `${borderWidth}px`,
        height: `${borderHeight}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg width={size + 2 * (dx + borderSize)} height={2 * (dy + borderSize)}>
        <path d={`
          m ${dx} ${borderSize} 
          l ${size} 0
          l ${dx} ${dy}
          l ${-dx} ${dy}
          l ${-size} 0
          l ${-dx} ${-dy}
          z`}
          stroke={borderColor}
          strokeWidth={borderSize}
          fill={color}
        />
      </svg>
    </div>
  )
}

Hex.defaultProps = {
  size: 200,
  rotation: 0,
  image: "none",
  color: "var(--purple)",
  borderColor: "transparent",
  borderSize: 0,
};
