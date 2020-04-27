import * as alt from 'alt';
import * as systemsAnimation from './animation_exports.mjs';

const animview = new alt.WebView('http://resources/extended-reality/client/animation/webview/index.html');

// Animation
// playAnimation(dictionary, name, durationInMS, flag)
alt.onServer('animation:PlayAnimation', systemsAnimation.playAnimation);