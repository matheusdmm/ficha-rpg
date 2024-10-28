import './dice.css';

const DiceRoll: React.FC = () => {
  return (
    <div className="dice dice_second">
      <svg
        width="70"
        height="80"
        viewBox="0 0 70 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.116 23.0459L10.0254 63.0399H56.2066L33.116 23.0459Z"
          fill="#D90707"
        />
        <path
          d="M10.0254 63.0398L34.6411 80L56.2066 63.0398H10.0254Z"
          fill="url(#paint0_linear_3709_88140)"
        />
        <path
          d="M0 60L10.0254 63.0398L34.6411 80L0 60Z"
          fill="url(#paint1_linear_3709_88140)"
        />
        <path
          d="M56.2066 63.0398L69.2822 60L34.6411 80L56.2066 63.0398Z"
          fill="url(#paint2_linear_3709_88140)"
        />
        <path
          d="M33.116 23.0458L69.2822 20L56.2066 63.0398L33.116 23.0458Z"
          fill="url(#paint3_linear_3709_88140)"
        />
        <path
          d="M10.0254 63.0398L33.116 23.0458L0 20L10.0254 63.0398Z"
          fill="url(#paint4_linear_3709_88140)"
        />
        <path d="M0 60L10.0254 63.0398L0 20V60Z" fill="#410101" />
        <path
          d="M69.2822 60L56.2065 63.0398L69.2822 20V60Z"
          fill="url(#paint5_linear_3709_88140)"
        />
        <path
          d="M33.116 23.0458L34.6411 0L0 20L33.116 23.0458Z"
          fill="#940303"
        />
        <path
          d="M69.2822 20L34.6411 0L33.116 23.0458L69.2822 20Z"
          fill="#BA0C0C"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3709_88140"
            x1="33.1294"
            y1="58.2002"
            x2="33.116"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#690905" />
            <stop offset="0.927083" stop-color="#4F0000" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3709_88140"
            x1="17.3205"
            y1="60"
            x2="17.3205"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#460000" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3709_88140"
            x1="51.9617"
            y1="60"
            x2="51.9617"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#480000" />
            <stop offset="0.541667" stop-color="#200200" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3709_88140"
            x1="51.1864"
            y1="21.7132"
            x2="57.7526"
            y2="67.6018"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF0D0D" />
            <stop offset="1" stop-color="#550000" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_3709_88140"
            x1="16.558"
            y1="20"
            x2="9.92389"
            y2="62.9757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CA0000" />
            <stop offset="1" stop-color="#3D0101" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_3709_88140"
            x1="62.7444"
            y1="20"
            x2="62.7444"
            y2="63.0398"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5E0000" />
            <stop offset="1" stop-color="#A80000" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DiceRoll;
