import {Sequence} from 'remotion';
import {Narration} from './Narration';
import {Scene1Imagination} from './Scene1Imagination';
import {Scene2TheLeopold} from './Scene2TheLeopold';
import {Scene3Story} from './Scene3Story';

export const Main: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={8310}>
				<Narration />
			</Sequence>
			<Sequence from={0} durationInFrames={330}>
				<Scene1Imagination />
			</Sequence>
			<Sequence from={330} durationInFrames={540}>
				<Scene2TheLeopold />
			</Sequence>
			<Sequence from={870} durationInFrames={650}>
				<Scene3Story />
			</Sequence>
		</>
	);
};
