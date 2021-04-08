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
export default function Hex({
  x,
  y,
  size,
  rotation,
  image,
  color,
  borderSize,
  borderColor,
  imgOffsetX,
  imgOffsetY,
  imgWidth,
  imgHeight,
}) {
  // height = 0.5*sqrt(3)*width
  const heightHex = (width) => 0.8660254 * width;
  const [borderWidth, borderHeight] = [
    size + 2 * borderSize,
    heightHex(size + 2 * borderSize),
  ];

  const dx = size / 2;
  const dy = Math.sqrt(3) * dx;
  
  const width = size + 2 * (dx + borderSize);
  const height = 2 * (dy + borderSize);
  const patternId = `hex-img-${image}`;

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
      <svg width={width} height={height}>
        {image === "none" ? (
          <g></g>
        ) : (
          <defs>
            <pattern
              id={patternId}
              x="0"
              y="0"
              width="100%"
              height="100%"
              patternUnits="userSpaceOnUse"
            >
              <image
                href={image}
                x={`${0 + imgOffsetX}`}
                y={`${0 + imgOffsetY}`}
                width={`${imgWidth}%`}
                height={`${imgHeight}%`}
                preserveAspectRatio="xMidYMid slice"
                transform={`rotate(-45) translate(${-width/2} ${height/2})`}
              />
            </pattern>
          </defs>
        )}

        <path
          d={`
          m ${dx} ${borderSize} 
          l ${size} 0
          l ${dx} ${dy}
          l ${-dx} ${dy}
          l ${-size} 0
          l ${-dx} ${-dy}
          z`}
          stroke={borderColor}
          strokeWidth={borderSize}
          transform={`rotate(rotation)`}
          style={{
            fill: image === "none" ? color : `url(#${patternId})`,
          }}
        />
      </svg>
    </div>
  );
}

Hex.defaultProps = {
  size: 200,
  rotation: 0,
  image: "none",
  color: "var(--color-purple)",
  borderColor: "transparent",
  borderSize: 0,
  imgOffsetX: 0,
  imgOffsetY: 0,
  imgWidth: 100,
  imgHeight: 100,
};
