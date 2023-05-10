import {
	AbsoluteFill,
	staticFile,
	Audio,
	interpolate,
	useVideoConfig,
} from 'remotion';
export const BackgroundMusic: React.FC = () => {
	const {fps} = useVideoConfig();
	return (
		<AbsoluteFill>
			<Audio volume={0.095} src={staticFile('background-music.mp3')} />
		</AbsoluteFill>
	);
};
