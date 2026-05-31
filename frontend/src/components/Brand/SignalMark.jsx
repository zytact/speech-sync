const SignalMark = ({ className = "", title = "SpeechSync signal mark" }) => (
  <svg
    className={`signal-mark ${className}`.trim()}
    viewBox="0 0 48 48"
    role="img"
    aria-label={title}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="currentColor" />
    <path
      d="M10 31V17M16 36V12M22 28V20M28 36V12M34 31V17M40 25V23"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="square"
    />
    <path
      d="M9 24H13.5L16 16L22 32L28 16L34 32L36.5 24H41"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      opacity="0.72"
    />
  </svg>
);

export default SignalMark;
