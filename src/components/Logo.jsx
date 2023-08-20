function Logo({ size = 100, ...restProps }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...restProps}
    >
      <defs>
        <radialGradient
          cx="31.0724562%"
          cy="36.9463746%"
          fx="31.0724562%"
          fy="36.9463746%"
          r="128.1444%"
          id="radialGradient-1"
        >
          <stop stopColor="#000000" stopOpacity="0.23" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
        </radialGradient>
        <linearGradient
          x1="45.0054879%"
          y1="-24.349978%"
          x2="56.6158141%"
          y2="92.49618%"
          id="linearGradient-2"
        >
          <stop stopColor="#FFFDFF" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="39.3025854%"
          y1="18.5000228%"
          x2="56.2517499%"
          y2="80.2165714%"
          id="linearGradient-3"
        >
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="53.1147799%"
          y1="73.7364963%"
          x2="46.4719619%"
          y2="23.5607547%"
          id="linearGradient-4"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.00884956" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0.7843" offset="100%"></stop>
        </linearGradient>
        <radialGradient
          cx="52.0236884%"
          cy="38.1183925%"
          fx="22.0236884%"
          fy="32.1183925%"
          r="87.154289%"
          id="radialGradient-5"
        >
          <stop stopColor="#000000" stopOpacity="0" offset="0%"></stop>
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="63.26%"></stop>
          <stop stopColor="#000000" stopOpacity="0.3922" offset="69.75%"></stop>
          <stop
            stopColor="#000000"
            stopOpacity="0.993955115"
            offset="99.6991481%"
          ></stop>
          <stop stopColor="#000000" offset="100%"></stop>
        </radialGradient>
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feGaussianBlur
            stdDeviation="8"
            in="SourceGraphic"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g transform="translate(-1.000000, 0.000000)">
        <path
          d="M205.4,6.6 C219.6,7.6 232.7,10 238.5,14 C241.5,16.8 243.7,22.3 244.7,28.7 C245.7,34.6 245.6,41.3 244.5,47.4 C243.4,53.4 241.2,58.9 237.9,62.6 C235.6,65.2 232.8,66.9 229.3,67.5 C221.6,68.7 217.2,61.2 211,50.8 C205.5,41.5 198.8,30.2 187.5,20.2 C183,16.9 179,20.3 181.4,22.9 C193.4,32.9 200.2,44.4 205.8,53.8 C213.2,66.3 218.5,75.3 230.2,73.4 C232.6,73 234.8,72.2 236.8,71.1 C245.8,88.1 250.9,107.5 250.9,128.2 C250.9,161.9 237.3,192.3 215.2,214.4 C193.2,236.4 162.7,250.1 129.1,250.1 C95.5,250.1 65,236.5 43,214.4 C21,192.4 7.3,161.9 7.3,128.2 C7.3,119.9 8.1,111.9 9.7,104.1 C8.9,99.6 8.5,94.7 8.2,91 C7.2,80.2 6.5,65.2 7.7,52.4 C8.6,41.9 10.7,33.1 14.7,30.4 C15,30.2 15.2,30 15.4,29.7 C16.7,28 24.3,23 36,19.7 C41.9,18 48.7,16.9 56.2,16.9 C57.9,16.9 59.7,17 61.5,17.1 C72,17.9 83.3,26.9 91.1,37.8 C94.3,42.3 96.9,47.1 98.6,51.8 C100.3,56.4 101.1,60.8 100.8,64.7 C100.5,68.8 98.9,72.3 95.6,74.6 C89.9,78.7 81.8,76.2 72.6,73.3 C58.3,68.8 41.5,63.5 23.5,77.1 C19,80.3 22.1318684,84.4251312 24.8318684,83.4251312 C41.6318684,69.4251312 57.7087883,74.6103851 71.0087883,78.8103851 C81.7087883,82.2103851 90.4000015,85.1365921 98.6000015,79.3365921 C103.400002,75.8365921 106.40137,69.9449829 106.40137,65.219725 C106.40137,60.4944672 105.899515,55.3047211 103.999515,50.0047211 C102.099515,44.8047211 99.5,39.4 96,34.5 C91.2,27.8 85.1,21.8 78.6,17.5 C94,10.5 111.1,6.6 129.1,6.6 C138.2,6.6 147,7.6 155.5,9.5 C159.1,8 163.9,7.4 168.1,6.8 C172.9,6.4 178.6,6.1 184.8,6.1 C185.7,5.9 186.5,5.9 187.4,5.9 C193.3,5.9 199.4,6.1 205.4,6.6 Z"
          fill="url(#radialGradient-1)"
        ></path>
        <path
          d="M184.6,7 C212.2,7 234.5,15.5 234.5,26 C234.5,34.1 221.3,41 202.6,43.7 C199.9,28.6 181.1,15.9 155.5,10.5 C163.7,8.3 173.8,7 184.6,7 L184.6,7 L184.6,7 Z"
          fill="url(#linearGradient-2)"
        ></path>
        <path
          d="M127.8,7.7 C169.3,7.7 203,25.5 203,47.5 C203,69.5 169.3,87.3 127.8,87.3 C114.9,87.3 102.8,85.6 92.2,82.6 C92.6,82.5 92.9,82.4 93.3,82.4 C96,81.7 98.7,80.2 101.3,77.6 C103.7,74.8 105.4,71.8 106.3,68.4 C107.2,65.1 107.2,61.4 106.3,57.4 C105.4,53.5 104.1,49.8 102.6,46.3 C101,42.8 99.2,39.4 97.1,36.1 C94.6,32.4 91.9,28.9 88.9,25.8 C85.9,22.7 82.5,19.9 78.6,17.5 C91.8,11.4 109,7.7 127.8,7.7 L127.8,7.7 L127.8,7.7 Z"
          fill="url(#linearGradient-3)"
        ></path>
        <path
          d="M186.8,0 C173.2,0 161,1.1 155.5,2.7 C155.2,2.8 154.9,2.9 154.6,3.1 C146.4,1.4 137.8,0.6 129.1,0.6 C108.6,0.6 89.2,5.4 72,14 C68.7,12.6 65.3,11.6 61.9,11.4 C51.6,10.6 42.2,12 34.3,14.2 C22,17.7 13.3,23.4 10.9,25.9 C5.4,30 2.7,40.2 1.6,52.1 C-7.54951657e-15,70.2 1.9,92.7 3.4,101.8 C3.4,102.2 3.6,102.5 3.7,102.8 C2,111 1.1,119.6 1.1,128.3 C1.1,163.6 15.4,195.5 38.6,218.6 C61.8,241.7 93.7,256 129,256 C164.3,256 196.3,241.7 219.4,218.6 C242.5,195.5 256.9,163.6 256.9,128.3 C256.9,106.3 251.3,85.6 241.5,67.6 L242.3,66.8 C246.4,62.2 249,55.7 250.3,48.7 C251.6,41.9 251.6,34.5 250.5,28 C249.2,20.2 246.4,13.4 242.3,9.7 C242.2,9.6 242.1,9.5 242,9.5 C235.3,4.7 221,2 205.7,0.9 C199.5,0.2 193,0 186.8,0 L186.8,0 L186.8,0 Z M187.4,6 C193.3,6 199.4,6.2 205.4,6.7 C219.6,7.7 232.8,10.1 238.5,14.1 C241.5,16.9 243.7,22.4 244.7,28.8 C245.7,34.7 245.6,41.4 244.5,47.5 C243.4,53.5 241.2,59 237.9,62.7 C235.6,65.3 232.8,67 229.3,67.6 C221.6,68.8 217.2,61.3 211,50.9 C205.5,41.6 198.8,30.4 187.5,20.3 C183,17 179,20.4 181.4,23 L181.4,23 C193.4,32.9 200.2,44.5 205.8,53.9 C213.2,66.4 218.5,75.4 230.2,73.5 C232.6,73.1 234.8,72.3 236.8,71.2 C245.8,88.2 251,107.6 251,128.2 C251,161.8 237.4,192.3 215.3,214.3 C193.3,236.3 162.8,249.9 129.1,249.9 C95.4,249.9 65,236.3 42.9,214.3 C20.8,192.3 7.2,161.8 7.2,128.2 C7.2,119.9 8,111.9 9.6,104.1 C8.8,99.6 8.4,94.7 8.1,91 L8.1,90.9 C7.1,80.2 6.4,65.2 7.5,52.4 C8.4,41.9 10.5,33.1 14.5,30.4 C14.8,30.2 15,30 15.2,29.7 C16.5,28 24.2,23 35.9,19.7 C41.8,18 48.6,16.9 56.1,16.9 C57.8,16.9 59.6,17 61.4,17.1 C72,17.9 83.2,26.9 91,37.7 C94.2,42.2 96.8,47 98.5,51.6 C100.2,56.2 101,60.6 100.7,64.5 C100.4,68.6 98.8,72.1 95.5,74.4 C89.8,78.5 81.7,76 72.5,73.1 C58.2,68.6 41.3,63.3 23.4,76.9 L23.4,76.9 C18.9,80.1 22.1,84.7 24.8,83.7 C41.6,69.8 57.4,74.7 70.7,78.9 C81.4,82.3 90.8,85.2 99,79.4 C103.9,75.9 106.2,70.9 106.7,65.1 C107.1,60.3 106.1,55.1 104.2,49.7 C102.3,44.5 99.4,39.2 95.9,34.3 C91.1,27.6 85,21.6 78.5,17.4 C93.9,10.4 111,6.5 129,6.5 C138.1,6.5 146.9,7.5 155.4,9.4 C159,7.9 163.8,7.3 168.1,6.7 L168.1,6.7 C172.9,6.3 178.6,6 184.8,6 L187.4,6 L187.4,6 L187.4,6 Z M200.4,70.8 C188.6,70.8 179.1,80.3 179.1,92.1 C179.1,103.9 188.7,113.4 200.4,113.4 C212.1,113.4 221.7,103.9 221.7,92.1 C221.7,80.3 212.2,70.8 200.4,70.8 L200.4,70.8 L200.4,70.8 Z M67.4,86.4 C44.4,86.4 25.7,105.1 25.7,128 C25.7,151 44.4,169.6 67.4,169.6 C90.4,169.6 109.1,151 109.1,128 C109.1,105 90.4,86.4 67.4,86.4 L67.4,86.4 L67.4,86.4 Z M78.9,108.2 C89.5,108.2 98,116.8 98,127.3 C98,137.8 89.4,146.4 78.9,146.4 C68.4,146.4 59.8,137.8 59.8,127.3 C59.8,116.7 68.3,108.2 78.9,108.2 L78.9,108.2 L78.9,108.2 Z M184.9,124.8 C184.4,124.8 183.9,124.9 183.4,125.1 L124,142.3 C123.9,142.3 123.8,142.4 123.7,142.4 L123.7,142.4 C122,143 120.8,144.6 120.8,146.6 C120.8,148.4 121.9,150 123.5,150.7 L123.5,150.7 L160.1,171.3 L160.1,171.5 C160.1,177.8 157.3,183.6 152.7,187.8 C148.1,192.1 141.6,194.7 134.4,194.7 C129.9,194.7 125.6,193.7 121.8,191.7 C118.1,189.8 114.9,187.1 112.6,183.7 C112.6,183.6 112.5,183.6 112.5,183.6 C111.8,182.5 110.6,181.8 109.2,181.8 C107,181.8 105.2,183.6 105.2,185.8 C105.2,186.7 105.5,187.5 106,188.2 C109.1,192.7 113.3,196.3 118.2,198.8 C123.1,201.3 128.7,202.7 134.4,202.7 C143.6,202.7 152,199.2 158.1,193.7 C162.5,189.7 165.7,184.5 167.2,178.7 C173.2,183.6 181,186.6 189.6,186.6 C198.8,186.6 207.2,183.2 213.3,177.6 C219.5,171.9 223.3,164.1 223.3,155.5 L223.3,154.2 C223.3,154.2 223.3,154.2 223.3,154.1 C223.3,151.9 221.5,150.1 219.3,150.1 C217.1,150.1 215.3,151.9 215.3,154.1 L215.3,154.2 L215.3,154.4 L215.3,155.5 C215.3,161.8 212.5,167.6 207.9,171.8 C203.3,176.1 196.8,178.7 189.6,178.7 C182.7,178.7 176.5,176.3 171.9,172.3 C170.9,171.5 170.1,170.6 169.3,169.6 L188.9,131.6 C189.3,130.9 189.5,130.2 189.5,129.4 C189.3,126.8 187.3,124.8 184.9,124.8 L184.9,124.8 L184.9,124.8 Z"
          fill="#000000"
        ></path>
        <ellipse
          fill="url(#linearGradient-4)"
          cx="50"
          cy="39"
          rx="36.1"
          ry="19"
        ></ellipse>
        <path
          d="M97.4,85.8 C107.5,85.8 111.2,78.8 111.2,70.3 C111.2,65.5 108,55.9 105.7,52.8 L105.193359,53.5222982 C106.293359,57.5222982 106.882357,61.462826 106.582357,65.062826 C106.082357,70.962826 103.75319,75.7280926 98.8531904,79.1280926 C93.9531904,82.7280926 88.6336589,83.2525066 82.8336589,82.1525066 C87.7336589,83.9525066 93.6,85.8 97.4,85.8 Z"
          fillOpacity="0.3922"
          fill="#141414"
        ></path>
        <path
          d="M229.9,76 C233.7,77.2 236.833875,77.1644775 239.533875,76.4644775 C238.733875,74.6644775 237.750037,72.7748291 236.850037,71.0748291 C234.850037,72.1748291 232.744177,73.0204102 230.344177,73.4204102 C228.644177,73.6204102 227.1,73.8 225.7,73.7 C227.1,74.7 228.5,75.6 229.9,76 Z"
          fillOpacity="0.3922"
          fill="#141414"
        ></path>
        <path
          d="M238.8,85.4 C238.8,153.6 183.5,208.9 115.3,208.9 C68.9,208.9 28.4,183.3 7.3,145.4 C15.9,205.1 67.4,251.1 129.5,251.1 C197.7,251.1 253,195.8 253,127.6 C253.1,105.8 247.4,85.3 237.5,67.6 C238.3,73.4 238.8,79.3 238.8,85.4 Z"
          fill="url(#radialGradient-5)"
          filter="url(#filter-6)"
        ></path>
      </g>
    </svg>
  );
}

export default Logo;
