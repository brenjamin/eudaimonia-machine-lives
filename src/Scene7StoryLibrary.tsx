import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene7StoryLibrary: React.FC = () => {
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

	const libraryOpacity = interpolate(frame, [0, 20], [0, 1]);
	const librarySlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);
	const libraryTextOpacity = interpolate(frame, [0, 20, 80, 100], [0, 1, 1, 0]);

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
	const office5Opacity = interpolate(frame, [450, 470], [0, 1]);
	const office5Slide = interpolate(
		frame,
		[430, 630],
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
					transform: `scale(1.6) translateX(${librarySlide}px)`,
					opacity: libraryOpacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-library-reading.jpeg')}
					style={{transform: 'translate(200px,175px)'}}
				/>
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
						opacity: libraryTextOpacity,
					}}
				>
					<Title>Library</Title>
				</div>
			</AbsoluteFill>
		</>
	);
};
