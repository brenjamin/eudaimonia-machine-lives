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
	const logoOpacity = interpolate(frame, [80, 90], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const newportSlide = interpolate(frame, [110, 140], [100, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const blur = interpolate(frame, [205, 220], [0, 4], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const planOpacity = interpolate(frame, [205, 220], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const thinkingOpacity = interpolate(frame, [240, 255], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const thinkingY = interpolate(
		frame,
		[240, 255, 440, 455],
		[-20, 0, 0, -250],
		{
			extrapolateRight: 'clamp',
		}
	);
	const diagramOpacity = interpolate(frame, [280, 295], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const diagramY = interpolate(frame, [280, 295, 440, 455], [-20, 0, 0, -250], {
		extrapolateRight: 'clamp',
	});

	const machineY = interpolate(frame, [440, 455], [20, 0], {
		extrapolateRight: 'clamp',
	});

	const machineOpacity = interpolate(frame, [440, 455], [0, 1], {
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
					backgroundColor: 'white',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: logoOpacity,
					filter: `blur(${blur}px)`,
				}}
			>
				<img
					src={staticFile('column-five-logo.webp')}
					style={{position: 'relative', zIndex: 1, width: '60%'}}
				/>
				<img
					style={{
						transform: `translateY(${newportSlide}%)`,
						position: 'absolute',
						bottom: -400,
						width: '102%',
						left: 'auto',
						right: 'auto',
					}}
					src={staticFile('newport-beach.png')}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					opacity: planOpacity,
					background: 'rgba(255,255,255,.9)',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					flexDirection: 'row',
				}}
			>
				<div
					style={{
						fontSize: '300px',
						lineHeight: 0,
						opacity: thinkingOpacity,
						transform: `translateY(${thinkingY}px)`,
					}}
				>
					🤔
				</div>
				<svg
					width="475px"
					height="475px"
					viewBox="0 0 1024 1024"
					class="icon"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						opacity: diagramOpacity,
						transform: `translateY(${diagramY}px)`,
					}}
				>
					<path
						d="M658.461676 324.594173V95.397443h-270.868862v41.672133h229.19673V512.118771h-83.344266v41.672132h208.360664v-41.672132h-83.344266v-145.852465h229.19673v520.901659h-229.19673v-187.524597h-41.672132v187.524597h-479.229527v-333.377062h145.852465v-41.672132h-145.852465v-375.049195h145.852465v-41.672133h-187.524597v833.442655h833.442654v-604.245925z"
						fill="#f55119"
					/>
					<path
						d="M825.150207 407.938439v416.721327h-166.688531v62.508199H887.658406v-479.229526zM554.281344 824.659766h-416.721327v62.508199h479.229527v-145.852464h-62.5082zM554.281344 178.741709h62.5082v333.377062h-62.5082z"
						fill="#f55119"
						fillOpacity={0.6}
					/>
				</svg>
				<img
					src={staticFile('eudaimonia-machine-sm.png')}
					style={{
						position: 'absolute',
						bottom: 0,
						left: '50%',
						opacity: machineOpacity,
						transform: `translateX(-50%) translateY(${machineY}px) scaleX(-1)`,
					}}
					alt=""
				/>
			</AbsoluteFill>
		</>
	);
};
