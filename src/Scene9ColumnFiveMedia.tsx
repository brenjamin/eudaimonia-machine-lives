import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	Easing,
} from 'remotion';
import styled from 'styled-components';

export const Scene9ColumnFiveMedia: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 250px;
		text-align: center;
	`;

	const numberOpacity = interpolate(frame, [15, 16], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const storyTitleOpacity = interpolate(frame, [40, 41], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const storyLogoOpacity = interpolate(frame, [80, 90], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const skylineSlide = interpolate(frame, [90, 120], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const starburstScale = interpolate(frame, [170, 180], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
		easing: Easing.bounce,
	});
	const imagesOpacity = interpolate(frame, [195, 215], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const colorOpacity = interpolate(frame, [255, 275], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const greenOpacity = interpolate(frame, [315, 335], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const rachelOpacity = interpolate(frame, [410, 425], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const aaronAndDavidOpacity = interpolate(frame, [460, 480], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Title>
					<span style={{opacity: numberOpacity}}>2.</span>&nbsp;
					<span style={{opacity: storyTitleOpacity}}>Column Five Media</span>
				</Title>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'black',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: storyLogoOpacity,
				}}
			>
				<img
					src={staticFile('story-logo.png')}
					style={{position: 'relative', zIndex: 1}}
				/>
				<img
					style={{
						transform: `translateY(${skylineSlide}%)`,
						position: 'absolute',
						bottom: -50,
						width: '100%',
						left: 'auto',
						right: 'auto',
					}}
					src={staticFile('skyline.png')}
				/>
				<div
					className="starburst-wrapper"
					style={{
						transform: `rotate(15deg) scale(${starburstScale})`,
					}}
				>
					<div className="starburst example" id="example-2">
						<span>Pop-up shop</span>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'black',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: storyLogoOpacity,
				}}
			>
				<img
					src={staticFile('story-logo.png')}
					style={{position: 'relative', zIndex: 1}}
				/>
				<img
					style={{
						transform: `translateY(${skylineSlide}%)`,
						position: 'absolute',
						bottom: -50,
						width: '100%',
						left: 'auto',
						right: 'auto',
					}}
					src={staticFile('skyline.png')}
				/>
				<div
					className="starburst-wrapper"
					style={{
						transform: `rotate(15deg) scale(${starburstScale})`,
					}}
				>
					<div className="starburst example" id="example-2">
						<span>Pop-up shop</span>
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{opacity: imagesOpacity, zIndex: 1}}>
				<img src={staticFile('story-pop-up.jpeg')}></img>
				<img
					src={staticFile('story-color.jpeg')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						opacity: colorOpacity,
					}}
				></img>
				<img
					src={staticFile('story-green.jpeg')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						opacity: greenOpacity,
					}}
				></img>

				<img
					src={staticFile('aaron-and-david.webp')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						opacity: aaronAndDavidOpacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('rachel.png')}
					style={{
						position: 'absolute',
						bottom: 0,
						left: 0,
						opacity: rachelOpacity,
						height: '800px',
					}}
					alt=""
				/>
			</AbsoluteFill>
		</>
	);
};
