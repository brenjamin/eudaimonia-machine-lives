import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene8StoryDeepWorkChambers: React.FC = () => {
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

	const chambersOpacity = interpolate(frame, [0, 20], [0, 1]);
	const chambersSlide = interpolate(frame, [0, 200], [width / 12, -width / 12]);
	const chambersTextOpacity = interpolate(
		frame,
		[0, 20, 80, 100],
		[0, 1, 1, 0]
	);

	const chambers2Opacity = interpolate(frame, [140, 160], [0, 1]);
	const chambers2Slide = interpolate(
		frame,
		[120, 320],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const chambers3Opacity = interpolate(frame, [230, 250], [0, 1]);
	const chambers3Slide = interpolate(
		frame,
		[210, 380],
		[width / 12, -width / 12],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const blur = interpolate(frame, [350, 360], [0, 4], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const overlayOpacity = interpolate(frame, [350, 380], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const relaxOpacity = interpolate(frame, [375, 390], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const relaxY = interpolate(frame, [375, 390], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${chambersSlide}px)`,
					opacity: chambersOpacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-chambers.jpeg')}
					style={{transform: 'translateY(-700px)'}}
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
						opacity: chambersTextOpacity,
					}}
				>
					<Title>Deep Work Chambers</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${chambers2Slide}px) translateY(-50%)`,
					opacity: chambers2Opacity,
					zIndex: 11,
				}}
			>
				<img
					src={staticFile('story-chambers-2.jpeg')}
					style={{transform: 'translateY(250px)'}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.2) translateX(${chambers3Slide}px)`,
					opacity: chambers3Opacity,
					filter: `blur(${blur}px)`,
					zIndex: 11,
				}}
			>
				<img src={staticFile('story-wellness.jpeg')} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'rgba(0,0,0,.8)',
					opacity: overlayOpacity,
					alignItems: 'center',
					justifyContent: 'space-evenly',
					flexDirection: 'row',
					zIndex: 11,
				}}
			>
				<div
					style={{
						fontSize: '400px',
						color: 'white',
						opacity: relaxOpacity,
						transform: `translateY(${relaxY}px)`,
					}}
				>
					💆‍♂️
				</div>
			</AbsoluteFill>
		</>
	);
};
