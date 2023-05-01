import {
	AbsoluteFill,
	Easing,
	interpolate,
	useCurrentFrame,
	Sequence,
	staticFile,
} from 'remotion';
import styled from 'styled-components';

export const Scene1Imagination: React.FC = () => {
	const frame = useCurrentFrame();

	const bubbleOpacity1 = interpolate(frame, [10, 17], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity2 = interpolate(frame, [17, 24], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const bubbleOpacity3 = interpolate(frame, [24, 31], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const machineSlide = interpolate(frame, [24, 330], [-180, -40], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const image1Opacity = interpolate(frame, [155, 170], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const image1Translate = interpolate(frame, [155, 170], [-20, -0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const image2Opacity = interpolate(frame, [270, 285], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const image2Translate = interpolate(frame, [270, 285], [-20, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--blue)',
				}}
			>
				<img
					style={{
						position: 'absolute',
						bottom: -200,
						right: -100,
						height: '100%',
					}}
					src={staticFile('man-thinking.png')}
					alt=""
				/>
				<div
					style={{
						position: 'absolute',
						right: 450,
						overflow: 'hidden',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: 500,
						width: 500,
					}}
				>
					<svg
						width="500"
						height="500"
						viewBox="0 0 128 128"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						preserveAspectRatio="xMidYMid meet"
						style={{
							transform: 'scaleX(-1)',
							transformOrigin: 'center',
							position: 'absolute',
							top: 0,
							left: 0,
						}}
					>
						<defs>
							<pattern
								id="image"
								patternUnits="userSpaceOnUse"
								width="300"
								height="250"
							>
								<image
									href={staticFile('eudaimonia-machine.png')}
									x={machineSlide}
									y="-90"
									width="300"
									height="300"
								/>
							</pattern>
						</defs>
						<path
							d="M120.44 51.23a29.87 29.87 0 0 0 2.96-13.02c0-16.6-13.45-30.05-30.05-30.05c-3.89 0-7.61.75-11.03 2.1C77.95 6.45 72.22 4.1 66 4.1c-7.6 0-14.4 3.4-18.9 8.7c-3.5-1.9-7.5-3-11.7-3c-13.4.1-24.3 10.9-24.3 24.3c0 5 1.5 9.7 4.2 13.6c-5 4-8.5 9.9-9.2 16.8C4.8 77.9 14.7 90 28.3 91.3c3.2.3 6.2 0 9.1-.8c1.1 10.7 10.1 19 21.1 19c7 0 13.2-3.4 17-8.6c3.6 2.8 8.1 4.6 13.1 4.6c11 0 20.1-8.5 20.9-19.2C118 82.4 124 73.8 124 63.8c0-4.59-1.33-8.92-3.56-12.57z"
							// fill="#ffffff"
							fill="url(#image)"
							stroke="#000000"
							stroke-width="6"
							stroke-miterlimit="10"
							opacity={bubbleOpacity3}
						></path>
						<path
							d="M24.3 97.3c-4.5-.5-8.5 2.8-9 7.3s2.8 8.5 7.3 8.9c4.5.5 8.5-2.8 9-7.3s-2.8-8.5-7.3-8.9z"
							fill="#ffffff"
							stroke="#000000"
							stroke-width="4.5"
							stroke-miterlimit="10"
							opacity={bubbleOpacity2}
						></path>
						<path
							d="M9 114.3c-3-.3-5.7 1.9-6 4.9s1.9 5.6 4.9 5.9s5.7-1.9 6-4.9c.3-2.9-1.9-5.6-4.9-5.9z"
							fill="#ffffff"
							stroke="#000000"
							stroke-width="4.5"
							stroke-miterlimit="10"
							opacity={bubbleOpacity1}
						></path>
					</svg>
				</div>
				{/* <div
					style={{
						position: 'absolute',
						right: 450,
						overflow: 'visible',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: 500,
						width: 500,
					}}
				>
					<img
						style={{
							zIndex: 1,
							width: 400,
							opacity: bubbleOpacity3,
							transform: 'scale(3)',
						}}
						src={staticFile('eudaimonia-machine.png')}
						alt=""
					/>
				</div> */}

				<div
					style={{
						position: 'absolute',
						height: '100%',
						width: '50%',
						left: 0,
						top: 0,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '2rem',
					}}
				>
					<img
						src={staticFile('happy-people-at-work.jpg')}
						alt=""
						style={{
							width: '675px',
							border: '12px solid white',
							opacity: image1Opacity,
							transform: `translateY(${image1Translate}px)`,
						}}
					/>
					<img
						src={staticFile('happy-people.jpg')}
						style={{
							width: '675px',
							border: '12px solid white',
							opacity: image2Opacity,
							transform: `translateY(${image2Translate}px)`,
						}}
						alt=""
					/>
				</div>
			</AbsoluteFill>
		</>
	);
};
