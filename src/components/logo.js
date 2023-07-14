import { useTheme } from '@mui/material/styles';

export const Logo = () => {
	const theme = useTheme();
	const fillColor = theme.palette.primary.main;

	return (
		<svg version="1.0"
			xmlns="http://www.w3.org/2000/svg"
			// width="1600.000000pt"
			// height="1200.000000pt"
			viewBox="0 0 1600.000000 1200.000000"
			// preserveAspectRatio="xMidYMid meet"
			fill="none"
			height="100%"
			// viewBox="0 0 24 24"
			width="100%"
		>

			<g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
				fill="#000000" stroke="none">
				<path d="M6700 5814 l0 -985 228 3 227 3 3 363 2 362 370 0 370 0 2 -362 3
-363 200 -3 c110 -1 210 0 223 3 l22 5 0 980 0 980 -225 0 -225 0 0 -390 0
-390 -370 0 -370 0 0 390 0 390 -230 0 -230 0 0 -986z"/>
				<path d="M8609 6793 c-15 -4 -17 -68 -24 -686 -4 -375 -5 -817 -3 -982 l3
-300 227 -3 228 -2 2 277 3 278 148 3 c81 1 155 -1 163 -6 9 -5 78 -130 153
-278 l137 -269 257 -3 c141 -1 257 0 257 2 0 3 -76 155 -170 339 -93 184 -170
341 -170 350 0 9 22 38 48 64 108 108 176 219 209 343 27 103 23 293 -10 392
-65 203 -234 373 -439 444 -57 20 -104 28 -218 34 -147 9 -771 11 -801 3z
m785 -433 c156 -25 250 -123 250 -260 0 -84 -31 -149 -96 -200 -73 -58 -140
-72 -338 -68 l-165 3 -3 255 c-1 140 0 260 3 267 5 16 258 18 349 3z"/>
				<path d="M10400 5807 l0 -957 225 0 225 0 0 360 c0 198 4 360 8 360 12 0 513
-539 549 -590 8 -11 18 -20 23 -20 9 0 114 113 449 483 68 75 128 137 133 137
4 0 8 -164 8 -365 l0 -365 225 0 225 0 0 956 0 955 -52 -58 c-29 -31 -111
-121 -183 -198 -71 -78 -171 -186 -221 -241 -155 -170 -436 -477 -480 -524
-23 -25 -52 -57 -64 -72 -12 -16 -27 -28 -33 -27 -7 0 -77 73 -157 161 -80 89
-181 200 -226 247 -44 47 -201 219 -349 381 -147 162 -276 304 -286 315 -19
19 -19 -5 -19 -938z"/>
				<path d="M6005 6518 c-22 -11 -149 -83 -282 -160 -269 -155 -283 -167 -283
-254 0 -90 63 -154 150 -154 26 0 58 8 75 18 17 10 53 31 80 46 28 15 139 80
248 143 172 101 201 121 218 154 39 77 13 166 -59 207 -49 27 -95 27 -147 0z"/>
				<path d="M5832 5982 c-37 -12 -93 -62 -108 -98 -71 -171 139 -322 275 -198
111 100 52 286 -95 299 -27 2 -59 1 -72 -3z"/>
				<path d="M5535 5668 c-64 -23 -95 -71 -95 -146 0 -85 15 -98 315 -271 259
-150 272 -156 325 -156 43 0 62 5 85 23 61 48 81 127 49 196 -19 39 -29 45
-342 227 -234 136 -274 151 -337 127z"/>
				<path d="M4554 5263 c-45 -9 -88 -66 -220 -293 -170 -293 -174 -301 -174 -346
0 -54 40 -116 89 -139 49 -22 121 -16 160 12 29 22 326 528 341 583 20 73 -31
158 -108 180 -38 10 -50 11 -88 3z"/>
				<path d="M5132 5263 c-12 -3 -40 -21 -61 -41 -43 -40 -58 -88 -47 -144 4 -18
76 -152 160 -298 133 -229 159 -268 192 -287 107 -62 234 9 234 129 0 45 -12
71 -147 306 -81 141 -160 271 -176 289 -38 43 -90 58 -155 46z"/>
				<path d="M4801 4974 c-18 -10 -44 -34 -57 -54 -48 -72 -44 -157 9 -217 69 -79
176 -85 250 -15 41 39 57 74 57 127 0 103 -60 167 -164 172 -43 3 -71 -1 -95
-13z"/>
			</g>
		</svg>

		// <svg
		//   fill="none"
		//   height="100%"
		//   viewBox="0 0 24 24"
		//   width="100%"
		//   xmlns="http://www.w3.org/2000/svg"
		// >
		//   <path
		//     opacity={0.16}
		//     d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
		//     fill={fillColor}
		//   />
		//   <path
		//     d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
		//     fill={fillColor}
		//   />
		// </svg>
	);
};
