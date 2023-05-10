import {AbsoluteFill, useCurrentFrame, interpolate, staticFile} from 'remotion';
import styled from 'styled-components';

export const Scene17VideoOutro: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--sans);
		font-weight: 700;
		font-size: 150px;
		text-align: center;
		padding: 0rem 1rem;
	`;

	const storyTitleOpacity = interpolate(frame, [10, 11], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile1Opacity = interpolate(frame, [50, 51], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile2Opacity = interpolate(frame, [70, 71], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile3Opacity = interpolate(frame, [90, 91], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile4Opacity = interpolate(frame, [110, 111], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile5Opacity = interpolate(frame, [130, 131], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile6Opacity = interpolate(frame, [150, 151], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile7Opacity = interpolate(frame, [170, 171], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile8Opacity = interpolate(frame, [190, 191], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile9Opacity = interpolate(frame, [210, 211], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile10Opacity = interpolate(frame, [230, 231], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile11Opacity = interpolate(frame, [250, 251], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const tile12Opacity = interpolate(frame, [270, 271], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile13Opacity = interpolate(frame, [290, 291], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile14Opacity = interpolate(frame, [310, 311], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile15Opacity = interpolate(frame, [330, 331], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const tile16Opacity = interpolate(frame, [350, 351], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const slideDown = interpolate(frame, [540, 560], [-100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const slideOut = interpolate(frame, [810, 840], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const question1Translate = interpolate(frame, [560, 570], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question1Opacity = interpolate(frame, [560, 570], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const question2Translate = interpolate(frame, [660, 670], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const question2Opacity = interpolate(frame, [660, 670], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{transform: `translateX(${slideOut}%)`}}>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Title>
					<span style={{opacity: storyTitleOpacity}}>And that's it!</span>
				</Title>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
					gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
				}}
			>
				<div
					style={{
						backgroundColor: 'white',
						border: '12px solid white',
						opacity: tile9Opacity,
					}}
				>
					<img
						src={staticFile('column-five-logo.webp')}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							objectPosition: 'center',
						}}
						alt=""
					/>
				</div>
				<img
					src={staticFile('story-chambers-2.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'top',
						border: '12px solid white',
						opacity: tile8Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('column-five-great-room.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile10Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('story-office-portrait.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile4Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('column-five-office.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile14Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('story-whiteboard.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile6Opacity,
					}}
					alt=""
				/>

				<div
					style={{
						backgroundColor: 'black',
						border: '12px solid white',
						opacity: tile1Opacity,
					}}
				>
					<img
						src={staticFile('story-logo.png')}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							objectPosition: 'center',
							transform: 'translateY(-4%)',
						}}
						alt=""
					/>
				</div>
				<img
					src={staticFile('story-library-reading.jpeg')}
					style={{
						width: '100%',
						height: '175%',
						objectFit: 'cover',
						objectPosition: 'left top',
						border: '12px solid white',
						opacity: tile7Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('column-five-cavern.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile13Opacity,
					}}
					alt=""
				/>

				<img
					src={staticFile('story-salon-sign.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'top',
						border: '12px solid white',
						opacity: tile3Opacity,
					}}
					alt=""
				/>
				<div
					style={{
						backgroundColor: 'white',
						padding: '1rem',
						border: '12px solid white',
						opacity: tile16Opacity,
					}}
				>
					<img
						src={staticFile('houston.jpeg')}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							objectPosition: 'center',
						}}
						alt=""
					/>
				</div>
				<img
					src={staticFile('story-office.webp')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile5Opacity,
					}}
					alt=""
				/>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontFamily: 'var(--block)',
						fontSize: '100px',
						backgroundColor: 'var(--blue)',
						border: '12px solid white',
						opacity: tile15Opacity,
					}}
				>
					<span style={{transform: 'translateY(5px)'}}>Houston</span>
				</div>
				<img
					src={staticFile('column-five-conference-room.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile11Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('story-gallery.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile2Opacity,
					}}
					alt=""
				/>
				<img
					src={staticFile('column-five-library.jpeg')}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center',
						border: '12px solid white',
						opacity: tile12Opacity,
					}}
					alt=""
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					justifyContent: 'space-around',
					alignItems: 'center',
					transform: `translateY(${slideDown}%)`,
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '20px',
						flexDirection: 'column',
						opacity: question1Opacity,
						transform: `translateY(${question1Translate}px)`,
					}}
				>
					<Title
						style={{
							width: '80%',
							fontSize: '70px',
						}}
					>
						<span style={{fontSize: '100px'}}>🧐</span>
						<br />
						What do you think about the Eudaimonia Machines featured in this
						video?
					</Title>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						gap: '20px',
						opacity: question2Opacity,
						transform: `translateY(${question2Translate}px)`,
					}}
				>
					<Title
						style={{
							width: '80%',
							fontSize: '70px',
						}}
					>
						<span
							style={{
								fontSize: '100px',
								filter: 'saturate(150%) brightness(95%)',
							}}
						>
							💡
						</span>
						<br />
						Do you have any ideas about how you would create your own Eudaimonia
						Machine?
					</Title>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
