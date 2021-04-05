export default function Hex({size, rotation, background}) {
  return (
    <div
      style={{
        background,
        width: `${size}px`,
        height: `${0.8660254 * size}px`, // height = 0.5*sqrt(3)*width
        transform: `rotate(${rotation}deg)`,
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"
      }}
    >
    </div>
  )
}

Hex.defaultProps = {
  size: 200,
  rotation: 0,
  background: "var(--purple)",
}
