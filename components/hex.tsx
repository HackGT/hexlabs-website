export default function Hex({ size, rotation, image, color, borderSize, borderColor }) {
  // height = 0.5*sqrt(3)*width
  const height = (width) => 0.8660254 * width;
  const [borderWidth, borderHeight] = [size + borderSize, height(size + borderSize)];
  const shape = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

  return (
    <div
      style={{
        position: "relative",
        width: `${borderWidth}px`,
        height: `${borderHeight}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `${size}px`,
          height: `${height(size)}px`,
          transform: "translate(-50%, -50%)",
          clipPath: shape,
          backgroundColor: color,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: `${borderWidth}px`,
          height: `${borderHeight}px`,
          clipPath: shape, 
          backgroundColor: borderColor,
          zIndex: 90
        }}
      />
    </div>
  );
}

Hex.defaultProps = {
  size: 400,
  rotation: 0,
  image: "none",
  color: "var(--purple)",
  borderColor: "black",
  borderSize: 0,
};
