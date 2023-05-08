// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';

Config.setMaxTimelineTracks(20);
Config.setImageFormat('jpeg');
Config.setQuality(100);
Config.setCrf(17);
Config.setOverwriteOutput(true);
