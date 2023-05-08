import {Sequence} from 'remotion';
import {Narration} from './Narration';
import {Scene1Imagination} from './Scene1Imagination';
import {Scene2TheLeopold} from './Scene2TheLeopold';
import {Scene3Story} from './Scene3Story';
import {Scene4StorysEudaimoniaMachine} from './Scene4StorysEudaimoniaMachine';
import {Scene5Salon} from './Scene5Salon';
import {Scene6StoryOffice} from './Scene6StoryOffice';
import {Scene7StoryLibrary} from './Scene7StoryLibrary';
import {Scene8StoryDeepWorkChambers} from './Scene8StoryDeepWorkChambers';
import {Scene9ColumnFiveMedia} from './Scene9ColumnFiveMedia';
import {Scene10GreatRoom} from './Scene10GreatRoom';
import {Scene11ConferenceRooms} from './Scene11ConferenceRooms';

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
			<Sequence from={1500} durationInFrames={300}>
				<Scene4StorysEudaimoniaMachine />
			</Sequence>
			<Sequence from={1780} durationInFrames={620}>
				<Scene5Salon />
			</Sequence>
			<Sequence from={2380} durationInFrames={560}>
				<Scene6StoryOffice />
			</Sequence>
			<Sequence from={2920} durationInFrames={250}>
				<Scene7StoryLibrary />
			</Sequence>
			<Sequence from={3150} durationInFrames={500}>
				<Scene8StoryDeepWorkChambers />
			</Sequence>
			<Sequence from={3650} durationInFrames={560}>
				<Scene9ColumnFiveMedia />
			</Sequence>
			<Sequence from={4190} durationInFrames={500}>
				<Scene10GreatRoom />
			</Sequence>
			<Sequence from={4670} durationInFrames={380}>
				<Scene11ConferenceRooms />
			</Sequence>
		</>
	);
};
