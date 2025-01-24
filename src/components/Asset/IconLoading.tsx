import * as React from "react"
const IconLoading = (props : React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16em"
    height="16em"
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "0 0",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={41}
      fill="none"
      stroke="#a2a1a1"
      strokeDasharray="64.40264939859075 64.40264939859075"
      strokeLinecap="round"
      strokeWidth={8}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={32}
      fill="none"
      stroke="#a2a1a1"
      strokeDasharray="50.26548245743669 50.26548245743669"
      strokeDashoffset={50.265}
      strokeLinecap="round"
      strokeWidth={8}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
)
export default IconLoading
