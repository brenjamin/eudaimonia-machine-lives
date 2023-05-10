import {AbsoluteFill, staticFile} from 'remotion';

import styled from 'styled-components';

export const Thumbnail: React.FC = () => {
	const BlockTitle = styled.div`
		font-family: var(--block);
		font-size: 250px;
		text-align: center;
		font-weight: bold;
	`;

	return (
		<>
			<AbsoluteFill
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
					gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
					backgroundColor: '#f4d940',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'relative',
					}}
				>
					<BlockTitle
						style={{
							fontSize: '160px',
							width: '100%',
							letterSpacing: '.005em',
						}}
					>
						The Eudaimonia
						<br />
						Machine Lives!
					</BlockTitle>
				</div>

				<div style={{position: 'relative'}}>
					<img
						src={staticFile('column-five-great-room.jpeg')}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							objectPosition: 'center',
						}}
						alt=""
					/>
					<div
						className="starburst-wrapper"
						style={{
							transform: `rotate(15deg)`,
							position: 'absolute',
							top: '4rem',
							right: '4rem',
						}}
					>
						<div
							className="starburst example"
							id="example-2"
							style={{
								backgroundColor: '#f55119',
								width: '12rem',
								height: '12rem',
								fontSize: '4.5rem',
							}}
						>
							<span style={{color: 'white'}}>Salon</span>
						</div>
					</div>
				</div>
				<div style={{position: 'relative'}}>
					<img
						src={staticFile('story-chambers-2.jpeg')}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							objectPosition: 'top',
						}}
						alt=""
					/>
					<div
						className="starburst-wrapper"
						style={{
							transform: `rotate(-15deg)`,
							position: 'absolute',
							top: '4rem',
							left: '4rem',
						}}
					>
						<div
							className="starburst example"
							id="example-2"
							style={{
								backgroundColor: 'var(--blue)',
								width: '15rem',
								height: '15rem',
								fontSize: '2.95rem',
							}}
						>
							<span style={{color: 'black'}}>Deep Work Chambers</span>
						</div>
					</div>
				</div>
				<BlockTitle
					style={{
						fontSize: '200px',
						width: '100%',
						letterSpacing: '.005em',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					Real-World
					<br />
					Examples
				</BlockTitle>
			</AbsoluteFill>
		</>
	);
};
