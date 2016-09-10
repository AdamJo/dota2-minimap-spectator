import { join } from 'path';

import { SeedConfig } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
      'src/client/app/assets/fonts/HypatiaSansPro-Regular.otf'
  ];

  constructor() {
    super();
    this.APP_TITLE = 'Mini Dota 2 Spectator';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.SYSTEM_CONFIG_DEV.paths['firebase'] =
      `${this.APP_BASE}node_modules/firebase/firebase`;

    this.SYSTEM_CONFIG_DEV.paths['angularfire2'] =
      `${this.APP_BASE}node_modules/angularfire2/angularfire2`;

    this.SYSTEM_BUILDER_CONFIG.packages['firebase'] = {
        main: 'firebase.js',
        defaultExtension : 'js'
    };

    this.SYSTEM_BUILDER_CONFIG.packages['angularfire2'] = {
        main: 'angularfire2.js',
        defaultExtension : 'js'
    };

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
