import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene5Salon: React.FC = () => {
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

	const salonOpacity = interpolate(frame, [0, 20], [0, 1]);
	const salonSlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);
	const salonTextOpacity = interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0]);
	const proustSlide = interpolate(frame, [105, 115], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const salon2Opacity = interpolate(frame, [180, 200], [0, 1]);
	const salon2Slide = interpolate(
		frame,
		[150, 350],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const salon3Opacity = interpolate(frame, [300, 320], [0, 1]);
	const salon3Slide = interpolate(
		frame,
		[295, 495],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const salon4Opacity = interpolate(frame, [480, 500], [0, 1]);
	const salon4Slide = interpolate(
		frame,
		[460, 660],
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
					transform: `scale(1.2) translateX(${salonSlide}px)`,
					opacity: salonOpacity,
					zIndex: 10,
				}}
			>
				<img src={staticFile('story-proust.webp')} />
			</AbsoluteFill>
			<AbsoluteFill style={{zIndex: 10}}>
				<div
					style={{
						zIndex: 1,
						position: 'absolute',
						textTransform: 'uppercase',
						bottom: 0,
						width: '100%',
						left: 0,
						backgroundColor: 'rgba(0,0,0,.5)',
						opacity: salonTextOpacity,
					}}
				>
					<Title>Salon</Title>
				</div>
				<img
					src={staticFile('marcel-proust.png')}
					style={{
						height: '400px',
						position: 'absolute',
						right: 0,
						bottom: -70,
						transform: `rotate(-20deg) translateY(${proustSlide}%)`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${salon2Slide}px)`,
					opacity: salon2Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-salon.webp')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${salon3Slide}px)`,
					opacity: salon3Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-coffee.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${salon4Slide}px)`,
					opacity: salon4Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-salon-sign.jpeg')} />
			</AbsoluteFill>
		</>
	);
};
