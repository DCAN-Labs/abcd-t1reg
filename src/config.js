export default {

    // if set to true, the user will be routed to /tutorial instead of /play if
    // they haven't taken a tutorial
  needsTutorial: true,
    // each time the app is run, it will check this manifest and update the firebase database
    // if new entries are there, they will be added, and entries that aren't in the manifest
    // but are in the firebase database will be *removed*
  manifestUrl: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/manifest.json',
  manifestType: 'json',
  widgetType: 'ImageSwipe',
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/abcd-braindr/abcd-t1reg/{0}.gif',
    delimiter: '%',
    leftSwipeLabel: 'Fail',
    rightSwipeLabel: 'Pass',
  },

    // if manifestType = 'pubmed' then you should also include a manifestQuery key.
    // if manifestType = 'json' then you're fine
    // if manifestType = 'github' then you need to provide a github user, repo,
    // and path under manifestGitHub

  // manifestType: 'github',
  // manifestQuery: '(neuroimaging OR "Magnetic Resonance Imaging" OR "MRI") AND brain AND autism',
  // manifestGitHub: { user: 'akeshavan',
  //   repo: 'mHealthLandscape',
  //   path: 'ios',
  // },

  // manifestType: 'S3',
  // manifestS3: {
  //   bucket: 'himatdata',
  //   prefix: 'BeringStrait',
  //   delimiter: '.wav',
  //   max_keys: 10000,
  // },

  // widgetType: 'ImageSwipe', //'BranchingTemplateWidget',
  /* eslint-disable */
  // widgetProperties: {
    // titleKey: 'trackName',
    // textKey: 'description',
    // baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    // delimiter: '%',
    // autoComplete: [
    //   'active data entry',
    //   'passive data entry',
    //   'gamified',
    //   'social media',
    //   'educational',
    //   'sensors',
    // ],
    // stages: [
    //   {
    //     id: 'relevant',
    //     showCriteria: {},
    //     question: 'Is this app about mental health?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'datacollection',
    //     showCriteria: {
    //       node: 'relevant',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Does this app collect user data?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'sensors',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Interoperable with sensors/wearables?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes, sensors',
    //       },
    //     },
    //   },
    //   {
    //     id: 'social',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Is there a social component?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'Not social',
    //         rightSwipeLabel: 'Yes, social',
    //       },
    //     },
    //   },
    //   {
    //     id: 'game',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'Are there game elements?',
    //     responseProperties: {
    //       widgetType: 'TextBinarySwipe',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         leftSwipeLabel: 'No',
    //         rightSwipeLabel: 'Yes',
    //       },
    //     },
    //   },
    //   {
    //     id: 'disorder',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'What disorders does it target?',
    //     responseProperties: {
    //       widgetType: 'TextTagger',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         autoComplete: ['depression', 'anxiety', 'sleep'],
    //       },
    //     },
    //   },
    //   {
    //     id: 'treatment',
    //     showCriteria: {
    //       node: 'datacollection',
    //       statement: '==',
    //       value: 1,
    //     },
    //     question: 'What is the treatment strategy?',
    //     responseProperties: {
    //       widgetType: 'TextTagger',
    //       widgetProperties: {
    //         titleKey: 'trackName',
    //         textKey: 'description',
    //         delimiter: '%',
    //         baseUrlTemplate: 'https://raw.githubusercontent.com/akeshavan/mHealthLandscape/master/ios/{0}.json',
    //         autoComplete: ['CBT', 'journal'],
    //       },
    //     },
    //   },
    // ],
  // },
  /* eslint-enable */
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: 'fish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: 'frog',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: 'duck',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: 'cat',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: 'lion',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true',
    },
  },


    // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

  firebaseKeys: {
    apiKey: 'AIzaSyBHfeBs4icV32AJ_olCT5YfcDUGLraN_Hc',
    authDomain: 'abcd-t1reg.firebaseapp.com',
    databaseURL: 'https://abcd-t1reg.firebaseio.com',
    projectId: 'abcd-t1reg',
    storageBucket: 'abcd-t1reg.appspot.com',
    messagingSenderId: '881072200975'
  },

  app: {
    navbarVariant: 'info',
  },

    // Homepage configuration
    // your app's title and tagline
  home: {
    title: 'ABCD Anatomical Swipes For Science',
    tagline: 'Quality control of ABCD Study anatomical image registrations',
      // background image on Homepage
    backgroundUrl: 'http://www.kurzweilai.net/images/brain-network.png',
  },

    // Play configuration
  play: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg?sanitize=true',

  },

    // Chats configuration
  chats: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg?sanitize=true',
  },

    // Profile configuration
  profile: {
    blankImage: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg?sanitize=true',
  },

    // your app's tutorial page
    // describe your problem and the way you want people to annotate
  tutorial: {
      // there is only 1 available custom animiation right now, and its 'Bubbles'
    customBackgroundAnimation: 'Bubbles',
      // steps have 2 parts, the intro and examples. In the intro you provide
      // text and images. In the examples, you provide text, data pointers, and tutorial steps
      // that the widget will display
    steps: {
      intro: [
        {
            // keep the text really short
          text: 'In the ABCD study, the structural image of the brain is the T1-weighted image. This image is a clear snapshot of the brain at one time-point and is used to measure physically characteristics like shape.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/atlas_justimg.jpg',
        },
        {
            // use \n to linebreak the text
          text: 'Each ABCD participants’ T1-weighted image is registered to the Montreal Neurological Institute (MNI) atlas. The structural image is registered to a common atlas in order to compare subjects’ with different brain shapes.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/mni_final.jpg',
        },
        {
            // use \n to linebreak the text
          text: 'There are 2 types of images to assess the quality of the T1 registration to the MNI atlas. These images are the T1 and MNI atlas overlaid onto each other.',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/2pics_screenshot.JPG',
        },
        {
            // use \n to linebreak the text
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/atlasexampletext.jpg',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/badatlas.jpg',
          image: 'https://raw.githubusercontent.com/DCAN-Labs/abcd-t1reg/master/config/tutorial_imgs/failtext.jpg',
          text: 'T1 poorly registers to MNI by not extending to the atlas boundaries throughout the brain, which makes the entire T1 appear warped',
        },
      ],
      examples: [
        {
            // fill these with examples with respect to the widget you're using
          text: 'swipe right when the image is good quality',
          pointer: 'NDARINV04CLBZAD_baselineYear1Arm1_atlas_in_t1',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'swipe left when its bad',
          pointer: 'sub-NDAREG590BNY__sag_201',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'sub-NDAREW671HZW__ax_86',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },

};
