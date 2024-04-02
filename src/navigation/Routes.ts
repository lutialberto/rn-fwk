export const ROUTE_COMPONENTS = 'Components';
export const ROUTE_FORMS = 'Forms';
export const ROUTE_PREFERENCES = 'Preferences';
export const ROUTE_HOOKS = 'Hooks';
export const ROUTE_SNIPPETS = 'Snippets';
export const ROUTE_ASSETS = 'Assets';
export const ROUTE_CHARTS = 'Charts';

export const ROUTES = {
  HOME: 'Home',
  PREFERENCES: {
    THEME: `${ROUTE_PREFERENCES}/Theme`,
    SCREEN_CAPTURE: `${ROUTE_PREFERENCES}/ScreenCapture`,
  },
  FORMS: {
    LOGIN: `${ROUTE_FORMS}/Login`,
    REGISTER: `${ROUTE_FORMS}/Register`,
    INPUT_TYPES: `${ROUTE_FORMS}/InputTypes`,
    VALIDATIONS: `${ROUTE_FORMS}/Validations`,
  },
  ASSETS: {
    ICON: `${ROUTE_ASSETS}/Icon`,
  },
  CHARTS: {
    LINE: `${ROUTE_CHARTS}/Line`,
    PROGRESS: `${ROUTE_CHARTS}/Progress`,
    BAR: `${ROUTE_CHARTS}/Bar`,
    STACKED_BAR: `${ROUTE_CHARTS}/StackedBar`,
    PIE: `${ROUTE_CHARTS}/Pie`,
  },
  COMPONENTS: {
    TEXT: `${ROUTE_COMPONENTS}/Text`,
    BUTTON: `${ROUTE_COMPONENTS}/Button`,
    CARD: `${ROUTE_COMPONENTS}/Card`,
    SECTION_LIST: `${ROUTE_COMPONENTS}/SectionList`,
    TAB: `${ROUTE_COMPONENTS}/Tab`,
    SPINNER: `${ROUTE_COMPONENTS}/Spinner`,
    MODAL: `${ROUTE_COMPONENTS}/Modal`,
    CARROUSEL: `${ROUTE_COMPONENTS}/Carrousel`,
    CLIPBOARD: `${ROUTE_COMPONENTS}/Clipboard`,
    SCREEN_CAPTURE_BLOCKER: `${ROUTE_COMPONENTS}/ScreenCaptureBlocker`,
    TEXT_TO_SPEECH: `${ROUTE_COMPONENTS}/TextToSpeech`,
    VIDEO: `${ROUTE_COMPONENTS}/Video`,
  },
  HOOKS: {
    TOAST: `${ROUTE_HOOKS}/Toast`,
    NET_INFO: `${ROUTE_HOOKS}/NetInfo`,
    LOCAL_AUTH: `${ROUTE_HOOKS}/LocalAuthentication`,
    SESSION_STATUS: `${ROUTE_HOOKS}/SessionStatus`,
  },
  SNIPPETS: {
    COMPONENTS: `${ROUTE_SNIPPETS}/Components`,
    CHARTS: `${ROUTE_SNIPPETS}/Charts`,
    FORMS: `${ROUTE_SNIPPETS}/Forms`,
    HOOKS: `${ROUTE_SNIPPETS}/Hooks`,
    NAVIGATION: `${ROUTE_SNIPPETS}/Navigation`,
    SERVICE: `${ROUTE_SNIPPETS}/Service`,
    TAB: `${ROUTE_SNIPPETS}/Tab`,
    DEBUG: `${ROUTE_SNIPPETS}/Debug`,
    GENERAL: `${ROUTE_SNIPPETS}/General`,
  },
};
