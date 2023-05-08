import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	Easing,
} from 'remotion';
import styled from 'styled-components';

export const Scene16Houston: React.FC = () => {
	const frame = useCurrentFrame();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 250px;
		text-align: center;
		padding: 0rem 1rem;
	`;

	const numberOpacity = interpolate(frame, [15, 16], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const storyTitleOpacity = interpolate(frame, [45, 46], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const storyTitleOpacity2 = interpolate(frame, [55, 56], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const storyTitleOpacity3 = interpolate(frame, [72, 73], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const diagramOpacity = interpolate(frame, [100, 120], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const houstonOpacity = interpolate(frame, [150, 165], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const houstonMapOpacity = interpolate(frame, [195, 210], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const houstonMapX = interpolate(frame, [270, 285], [0, 120], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const houstonScale = interpolate(frame, [270, 285], [1, 1.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const houstonX = interpolate(frame, [270, 285], [0, 500], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const gallery = interpolate(frame, [390, 400, 620, 630], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const salon = interpolate(frame, [410, 420, 620, 630], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const office = interpolate(frame, [440, 450, 620, 630], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const library = interpolate(frame, [510, 520, 620, 630], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const chambers = interpolate(frame, [540, 550, 620, 630], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const shower = interpolate(frame, [680, 690, 850, 860], [0, 1, 1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const contemplative = interpolate(
		frame,
		[910, 920, 1050, 1061],
		[0, 1, 1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	const showerX = interpolate(frame, [780, 790, 850, 860], [100, 0, 0, 100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
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
					<span style={{opacity: numberOpacity}}>3.</span>&nbsp;
					<span style={{opacity: storyTitleOpacity}}>
						Houston's
						<br />
						<span style={{opacity: storyTitleOpacity2}}>Eudaimonia</span>{' '}
						<span style={{opacity: storyTitleOpacity3}}>Machine</span>
					</span>
				</Title>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '2rem',
					opacity: diagramOpacity,
					padding: '0 4rem',
				}}
			>
				<img
					src={staticFile('houston.jpeg')}
					style={{
						opacity: houstonOpacity,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
					}}
				/>
				<div
					style={{
						opacity: gallery,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(55% 62.5% 15% 28%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: salon,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(55% 70% 15% 0%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: office,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(0% 72.1% 60% 0%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: library,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(0% 72.1% 45% 0%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: chambers,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						backgroundColor: 'black',
						clipPath: 'inset(38% 37.5% 15% 38%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: chambers,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(31% 48% 15% 38%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: shower,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(30.5% 37% 61% 52%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
				<div
					style={{
						opacity: contemplative,
						position: 'absolute',
						width: '45%',
						left: '4rem',
						transform: `translateX(${houstonX}px) scale(${houstonScale})`,
						filter: 'brightness(110%) saturate(140%)',
						clipPath: 'inset(21% 0% 15% 67%)',
					}}
				>
					<img src={staticFile('houston.jpeg')} style={{width: '100%'}} />
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '2rem',
					opacity: diagramOpacity,
					padding: '0 4rem',
				}}
			>
				<div
					style={{
						position: 'absolute',
						width: '45%',
						right: '4rem',
						opacity: houstonMapOpacity,
						transform: `translateX(${houstonMapX}%)`,
					}}
				>
					<svg
						version="1.1"
						id="_x32_"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						width="50px"
						height="50px"
						viewBox="0 0 512 512"
						xml:space="preserve"
						style={{
							position: 'absolute',
							zIndex: 2,
							right: '4.9rem',
							bottom: '18.7rem',
						}}
					>
						<g>
							<path
								fill="var(--yellow)"
								stroke="black"
								strokeWidth="20"
								d="M256.016,0C158.797,0.031,80.094,78.781,80.063,175.953c0.063,14.297,3.031,28.641,7.563,43.797
		c7.969,26.438,21.094,55.328,36.281,84.547c45.563,87.359,110.328,177.391,110.688,177.891L256.016,512l21.391-29.813
		c0.25-0.313,37.969-52.844,76.016-116.266c19.016-31.766,38.141-66.25,52.828-98.859c7.344-16.313,13.578-32.172,18.156-47.313
		c4.531-15.156,7.469-29.5,7.531-43.797C431.906,78.781,353.203,0.031,256.016,0z M373.938,204.594
		c-6.344,21.156-18.25,47.906-32.594,75.359c-21.484,41.266-48.281,84.375-69.625,116.953c-5.719,8.719-10.969,16.609-15.703,23.594
		c-14.891-22-35.594-53.594-55.844-87.75c-17.719-29.906-35.063-61.75-47.656-90.25c-6.297-14.188-11.391-27.547-14.781-39.094
		c-3.422-11.5-5-21.281-4.953-27.453c0.016-34.109,13.75-64.734,36.078-87.156c22.391-22.328,53.016-36.063,87.156-36.094
		c34.109,0.031,64.75,13.766,87.125,36.094c22.359,22.422,36.078,53.047,36.094,87.156
		C379.281,182.344,377.594,192.563,373.938,204.594z"
							/>
							<path
								fill="var(--yellow)"
								stroke="black"
								strokeWidth="20"
								d="M256.016,118.719c-31.594,0-57.219,25.641-57.219,57.234c0,31.609,25.625,57.219,57.219,57.219
		c31.578,0,57.219-25.609,57.219-57.219C313.234,144.359,287.594,118.719,256.016,118.719z"
							/>
						</g>
					</svg>
					<img
						src={staticFile('houston-map.png')}
						style={{position: 'relative', zIndex: 1}}
					/>
				</div>
			</AbsoluteFill>
			<AbsoluteFill>
				<div
					style={{
						transform: `translateX(${showerX}%)`,
						fontSize: '200px',
						position: 'absolute',
						top: '1rem',
						right: '0rem',
					}}
				>
					🚿
				</div>
			</AbsoluteFill>
		</>
	);
};
