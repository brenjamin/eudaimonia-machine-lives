import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene14TheCavern: React.FC = () => {
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

	const cavernOpacity = interpolate(frame, [0, 20], [0, 1]);
	const cavernSlide = interpolate(frame, [0, 285], [width / 12, -width / 12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const cavernTextOpacity = interpolate(
		frame,
		[120, 140, 240, 260],
		[0, 1, 1, 0]
	);

	const cavern2Slide = interpolate(frame, [240, 255], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const cavern3Slide = interpolate(frame, [380, 395], [-100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${cavernSlide}px)`,
					opacity: cavernOpacity,
					zIndex: 12,
				}}
			>
				<img
					src={staticFile('column-five-cavern.jpeg')}
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
						height: '100%',
						width: '100%',
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill style={{zIndex: 12}}>
				<div
					style={{
						zIndex: 12,
						position: 'absolute',
						textTransform: 'uppercase',
						bottom: 0,
						width: '100%',
						left: 0,
						backgroundColor: 'rgba(0,0,0,.5)',
						opacity: cavernTextOpacity,
					}}
				>
					<Title>The Cavern</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{zIndex: 12}}>
				<div
					style={{
						position: 'absolute',
						top: 15,
						left: 15,
						transform: `translateY(${cavern2Slide}%)`,
						fontSize: '200px',
					}}
				>
					🤫
				</div>
				<div
					style={{
						position: 'absolute',
						top: 15,
						right: 15,
						transform: `translateY(${cavern3Slide}%)`,
						fontSize: '200px',
					}}
				>
					🎧
				</div>
			</AbsoluteFill>
		</>
	);
};
