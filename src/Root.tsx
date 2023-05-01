// Each <Composition> is an entry in the sidebar!
import {Composition} from 'remotion';
import {Narration} from './Narration';
import {Main} from './Main';
import {Scene1Imagination} from './Scene1Imagination';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={8310}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Narration"
				component={Narration}
				durationInFrames={8310}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Scene1Imagination"
				component={Scene1Imagination}
				durationInFrames={1200}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
		</>
	);
};
