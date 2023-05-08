import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene10GreatRoom: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 200px;
		text-align: center;
		color: white;
		letter-spacing: 0.02em;
		padding: 1rem 0;
	`;

	const greatOpacity = interpolate(frame, [0, 20], [0, 1]);
	const greatSlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);
	const greatTextOpacity = interpolate(
		frame,
		[160, 180, 280, 300],
		[0, 1, 1, 0]
	);
	const great2Opacity = interpolate(frame, [140, 160], [0, 1]);
	const great2Slide = interpolate(
		frame,
		[120, 320],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const great3Opacity = interpolate(frame, [300, 320], [0, 1]);
	const great3Slide = interpolate(
		frame,
		[295, 495],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const great4Opacity = interpolate(frame, [385, 405], [0, 1]);
	const great4Slide = interpolate(
		frame,
		[365, 565],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${greatSlide}px)`,
					opacity: greatOpacity,
					zIndex: 10,
				}}
			>
				<img src={staticFile('column-five-entrance.jpeg')} />
			</AbsoluteFill>

			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${great2Slide}px)`,
					opacity: great2Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('column-five-great-room.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill style={{zIndex: 11}}>
				<div
					style={{
						zIndex: 1,
						position: 'absolute',
						textTransform: 'uppercase',
						bottom: 0,
						width: '100%',
						left: 0,
						backgroundColor: 'rgba(0,0,0,.5)',
						opacity: greatTextOpacity,
					}}
				>
					<Title>The Great Room</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${great3Slide}px)`,
					opacity: great3Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('column-five-kitchen.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${great4Slide}px)`,
					opacity: great4Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('column-five-booths.jpeg')} />
			</AbsoluteFill>
		</>
	);
};
