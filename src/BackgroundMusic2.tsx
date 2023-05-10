import {
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useVideoConfig,
} from 'remotion';
export const BackgroundMusic2: React.FC = () => {
	const {fps} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Audio
				volume={(f) =>
					interpolate(f, [0, fps * 97, fps * 98], [0.095, 0.095, 0], {
						extrapolateRight: 'clamp',
						extrapolateLeft: 'clamp',
					})
				}
				src={staticFile('background-music.mp3')}
			/>
		</AbsoluteFill>
	);
};
