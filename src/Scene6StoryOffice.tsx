import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene6StoryOffice: React.FC = () => {
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

	const officeOpacity = interpolate(frame, [0, 20], [0, 1]);
	const officeSlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);
	const officeTextOpacity = interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0]);

	const office2Opacity = interpolate(frame, [140, 160], [0, 1]);
	const office2Slide = interpolate(
		frame,
		[120, 320],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const office3Opacity = interpolate(frame, [230, 250], [0, 1]);
	const office3Slide = interpolate(
		frame,
		[210, 410],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const office4Opacity = interpolate(frame, [310, 330], [0, 1]);
	const office4Slide = interpolate(
		frame,
		[290, 490],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const office5Opacity = interpolate(frame, [420, 450], [0, 1]);
	const office5Slide = interpolate(
		frame,
		[400, 600],
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
					transform: `scale(1.2) translateX(${officeSlide}px)`,
					opacity: officeOpacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-office.webp')} />
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
						opacity: officeTextOpacity,
					}}
				>
					<Title>Office</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${office2Slide}px) translateY(-50%)`,
					opacity: office2Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-whiteboard-2.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${office3Slide}px)`,
					opacity: office3Opacity,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-whiteboard.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(2.5) translateX(${office4Slide}px)`,
					opacity: office4Opacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-office.webp')}
					style={{transform: 'translateX(400px)'}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(2.5) translateX(${office4Slide}px)`,
					opacity: office4Opacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-office.webp')}
					style={{transform: 'translateX(300px)'}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(2.5) translateX(${office5Slide}px)`,
					opacity: office5Opacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-office-data.jpeg')}
					style={{transform: 'translateX(400px)'}}
				/>
			</AbsoluteFill>
		</>
	);
};
