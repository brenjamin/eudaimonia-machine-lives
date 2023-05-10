import {
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useVideoConfig,
} from 'remotion';
export const OutroMusic: React.FC = () => {
	const {fps} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Audio
				volume={(f) =>
					interpolate(
						f,
						[0, fps * 27.5, fps * 27.6, fps * 49, fps * 54],
						[0.14, 0.14, 0.4, 0.4, 0],
						{extrapolateLeft: 'clamp'}
					)
				}
				loop
				src={staticFile('outro.mp3')}
			/>
			;
		</AbsoluteFill>
	);
};
