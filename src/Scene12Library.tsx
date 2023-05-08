import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene12Library: React.FC = () => {
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
	const librarySlide = interpolate(frame, [0, 300], [width / 12, -width / 12]);
	const libraryTextOpacity = interpolate(
		frame,
		[0, 20, 120, 140],
		[0, 1, 1, 0]
	);
	const library2Opacity = interpolate(frame, [180, 200], [0, 1]);
	const library2Slide = interpolate(
		frame,
		[179, 379],
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
					transform: `scale(1.2) translateX(${librarySlide}px)`,
					opacity: libraryOpacity,
					zIndex: 12,
				}}
			>
				<img
					src={staticFile('column-five-library.jpeg')}
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
						opacity: libraryTextOpacity,
					}}
				>
					<Title>Library</Title>
				</div>
			</AbsoluteFill>
		</>
	);
};
