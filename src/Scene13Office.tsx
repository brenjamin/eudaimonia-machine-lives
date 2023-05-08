import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene13Office: React.FC = () => {
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
	const officeSlide = interpolate(frame, [0, 285], [width / 12, -width / 12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const officeTextOpacity = interpolate(frame, [0, 20, 120, 140], [0, 1, 1, 0]);

	const office2Slide = interpolate(frame, [410, 425], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<AbsoluteFill
				style={{
					transform: `scale(1.4) translateX(${officeSlide}px)`,
					opacity: officeOpacity,
					zIndex: 12,
				}}
			>
				<img
					src={staticFile('column-five-office.jpeg')}
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
						opacity: officeTextOpacity,
					}}
				>
					<Title>office</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill style={{zIndex: 12}}>
				<svg
					fill="#fff"
					height="400px"
					width="400px"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 284.999 284.999"
					stroke="#f55119"
					strokeWidth={2}
					xml:space="preserve"
					style={{
						position: 'absolute',
						bottom: -30,
						right: 15,
						transform: `translateY(${office2Slide}%)`,
					}}
				>
					<g>
						<g>
							<path
								d="M278.222,33.93H74.64c-1.794,0-3.514,0.714-4.794,1.985l-67.86,67.861C0.724,105.047,0,106.77,0,108.57v135.712
			c0,3.748,3.037,6.788,6.778,6.788h271.443c3.741,0,6.778-3.04,6.778-6.788V40.718C285,36.97,281.963,33.93,278.222,33.93z
			 M271.424,237.503H13.576V115.357H74.64c3.76,0,6.797-3.04,6.797-6.788V47.497h189.987V237.503z"
							/>
							<path
								d="M61.063,135.709c-3.742,0-6.778,3.04-6.778,6.788v50.898c0,3.748,3.036,6.779,6.778,6.779h169.651
			c3.742,0,6.779-3.031,6.779-6.779V91.604c0-3.748-3.037-6.779-6.779-6.779h-67.86c-3.742,0-6.778,3.031-6.778,6.779v44.104H61.063
			V135.709z M190.006,149.285v37.323h-74.657v-37.323H190.006z M67.86,149.285h33.931v37.323H67.86V149.285z M203.563,186.607
			v-37.323h20.373v37.323H203.563z M223.937,98.393v37.316h-54.285V98.393H223.937z"
							/>
						</g>
					</g>
				</svg>
			</AbsoluteFill>
		</>
	);
};
