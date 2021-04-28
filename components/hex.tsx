function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function rotate(rotation, [x, y]) {
  const rot = deg2rad(rotation);
  const rx = x * Math.cos(rot) - y * Math.sin(rot);
  const ry = x * Math.sin(rot) + y * Math.cos(rot);
  return [rx, ry];
}

function translate(dx, dy, [x, y]) {
  return [x + dx, y + dy];
}

// height of hexagon = 0.5*sqrt(3)*width
function heightHex(width) {
  return 0.8660254 * width;
}

function pathStr(coords) {
  const m = `M ${coords[0][0]} ${coords[0][1]}`;
  const l = coords
    .slice(1)
    .map(([x, y]) => `L ${x} ${y}`)
    .join(" ");
  return `${m} ${l} Z`;
}

function boundingBox(coords) {
  const fst = ([x, _]) => x;
  const snd = ([_, y]) => y;

  const xs = coords.map(fst);
  const ys = coords.map(snd);

  const [minX, minY] = [Math.min(...xs), Math.min(...ys)];
  const [maxX, maxY] = [Math.max(...xs), Math.max(...ys)];

  const [x, y] = [minX, minY];
  const [width, height] = [maxX - minX, maxY - minY];
  
  return {
    x,
    y,
    width,
    height,
  };
}

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
  imageDx,
  imageDy,
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
  transform,
}) {
  const dx = size / 2;
  const dy = Math.sqrt(3) * dx;

  // curry helpers

  const getCoords = () => {
    const dh = size / 2;
    const points = [
      [-dh, dy],
      [dh, dy],
      [dh + dx, 0],
      [dh, -dy],
      [-dh, -dy],
      [-(dh + dx), 0],
    ];
    return points;
  };
  
  // curry rotate helper
  const rotateH = (coord) => rotate(rotation, coord);

  let coords = getCoords().map(rotateH);
  const { x: ox, y: oy, width, height } = boundingBox(coords);
  
  // curry translate helper
  const translateH = (coord) => translate(-ox, -oy, coord);
  coords = coords.map(translateH);

  const patternId = `hex-img-${image}`;

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        transform,
      }}
    >
      <svg
        width={width}
        height={height}
        style={{
          overflow: "visible"
        }}
      >
        {image === "none" ? (
          (null)
        ) : (
          <defs>
            <pattern
              id={patternId}
              x="0"
              y="0"
              width="100%"
              height="100%"
              patternUnits="userSpaceOnUse"
              patternTransform={`translate(${imageDx} ${imageDy})`}
            >
              <image
                href={image}
                x={`${0 + imgOffsetX}`}
                y={`${0 + imgOffsetY}`}
                width={`${imgWidth}%`}
                height={`${imgHeight}%`}
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
        )}

        <path
          d={pathStr(coords)}
          stroke={borderColor}
          strokeWidth={borderSize}
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
  imageDx: 0,
  imageDy: 0,
  color: "var(--color-purple)",
  borderColor: "transparent",
  borderSize: 0,
  imgOffsetX: 0,
  imgOffsetY: 0,
  imgWidth: 100,
  imgHeight: 100,
  transform: "none",
};
