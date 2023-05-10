// Each <Composition> is an entry in the sidebar!
import {Composition} from 'remotion';
import {Main} from './Main';
import {Thumbnail} from './Thumbnail';
import {Still} from 'remotion';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={9120}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Still id="Thumbnail" component={Thumbnail} width={1920} height={1080} />
		</>
	);
};
