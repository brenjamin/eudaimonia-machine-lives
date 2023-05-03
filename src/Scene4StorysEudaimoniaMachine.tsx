import {
	AbsoluteFill,
	useCurrentFrame,
	interpolate,
	staticFile,
	Easing,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';

export const Scene4StorysEudaimoniaMachine: React.FC = () => {
	const frame = useCurrentFrame();
	const {width} = useVideoConfig();
	const Title = styled.div`
		font-family: var(--block);
		font-weight: 700;
		font-size: 250px;
		text-align: center;
	`;

	const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const workOpacity = interpolate(frame, [115, 116], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const titleOpacity = interpolate(frame, [124, 125], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const imageSlide = interpolate(frame, [145, 345], [width / 12, -width / 12]);

	const galleryOpacity = interpolate(frame, [145, 160], [0, 1]);

	const officeSlide = interpolate(frame, [200, 400], [width / 12, -width / 12]);

	const officeOpacity = interpolate(frame, [200, 215], [0, 1]);

	return (
		<>
			<AbsoluteFill
				style={{
					opacity: sceneOpacity,
					zIndex: 10,
				}}
			>
				<img
					src={staticFile('work-place-story-title-empty.jpg')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						filter: 'brightness(120%) saturate(1.5)',
					}}
				/>
				<img
					src={staticFile('work-place-story-title-work-only.jpg')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						opacity: workOpacity,
						filter: 'brightness(120%) saturate(1.5)',
					}}
				/>
				<img
					src={staticFile('work-place-story-title.jpeg')}
					style={{
						position: 'absolute',
						inset: 0,
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						opacity: titleOpacity,
						filter: 'brightness(120%) saturate(1.5)',
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.25) translateX(${imageSlide}px)`,
					opacity: galleryOpacity,
					zIndex: 10,
				}}
			>
				<img
					src={staticFile('story-gallery.jpeg')}
					style={{transform: 'translateY(-7%)'}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					transform: `scale(1.25) translateX(${officeSlide}px)`,
					opacity: officeOpacity,
					zIndex: 10,
				}}
			>
				<img
					src={staticFile('story-office-working.webp')}
					style={{transform: 'translateY(7%)'}}
				/>
			</AbsoluteFill>
		</>
	);
};
