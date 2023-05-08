import {AbsoluteFill, useCurrentFrame, interpolate, staticFile} from 'remotion';
import styled from 'styled-components';

export const Scene15ColumnFiveEnd: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 200px;
		text-align: center;
		color: white;
		letter-spacing: 0.02em;
		padding: 1rem 0;
	`;

	const opacity1 = interpolate(frame, [10, 25], [0, 1]);
	const opacity2 = interpolate(frame, [28, 43], [0, 1]);
	const opacity3 = interpolate(frame, [46, 61], [0, 1]);
	const opacity4 = interpolate(frame, [64, 79], [0, 1]);
	const opacity5 = interpolate(frame, [82, 97], [0, 1]);
	const opacity6 = interpolate(frame, [100, 115], [0, 1]);
	const opacity7 = interpolate(frame, [118, 133], [0, 1]);
	const opacity8 = interpolate(frame, [136, 151], [0, 1]);
	const opacity9 = interpolate(frame, [154, 169], [0, 1]);
	const opacity10 = interpolate(frame, [172, 185], [0, 1]);

	const logoOpacity = interpolate(frame, [190, 205], [0, 1]);
	const logoY = interpolate(frame, [190, 205], [-20, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: 'white',
					display: 'grid',
					gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
					gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
					gap: '1rem',
					padding: '1rem',
				}}
			>
				<img
					src={staticFile('column-five-entrance.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity1,
					}}
				/>
				<img
					src={staticFile('column-five-great-room.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity2,
					}}
				/>
				<img
					src={staticFile('column-five-kitchen.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity3,
					}}
				/>
				<img
					src={staticFile('column-five-cavern.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity10,
					}}
				/>
				<img
					src={staticFile('column-five-booths.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity4,
					}}
				/>
				<img
					src={staticFile('column-five-office.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity9,
					}}
				/>
				<img
					src={staticFile('column-five-hallway.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity5,
					}}
				/>
				<img
					src={staticFile('column-five-library.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity8,
					}}
				/>
				<img
					src={staticFile('column-five-conference-room.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity7,
					}}
				/>
				<img
					src={staticFile('column-five-conf-room-portrait.jpeg')}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						opacity: opacity6,
					}}
				/>
				<img
					src={staticFile('column-five-logo.webp')}
					style={{
						objectFit: 'contain',
						height: '100%',
						width: '100%',
						objectPosition: 'center',
						gridColumn: '2 / span 1',
						gridRow: '2 / span 2',
						opacity: logoOpacity,
						transform: `translateY(${logoY}px)`,
					}}
				/>
			</AbsoluteFill>
		</>
	);
};
