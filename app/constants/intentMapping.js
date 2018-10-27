'use strict';

module.exports = {
  LaunchIntent: 'LAUNCH',
  YesIntent: 'playRequest',
  'AMAZON.YesIntent': 'playRequest',
  NoIntent: 'StopIntent',
  'AMAZON.NoIntent': 'StopIntent',
  NextIntent: 'notSupported',
  'AMAZON.NextIntent': 'notSupported',
  PreviousIntent: 'notSupported',
  'AMAZON.PreviousIntent': 'notSupported',
  PauseIntent: 'StopIntent',
  'AMAZON.PauseIntent': 'StopIntent',
  ResumeIntent: 'playRequest',
  'AMAZON.ResumeIntent': 'playRequest',
  'AMAZON.LoopOnIntent': 'loopOn',
  'AMAZON.LoopOffIntent': 'loopOff',
  'AMAZON.ShuffleOnIntent': 'notSupported',
  'AMAZON.ShuffleOffIntent': 'notSupported',
  'AMAZON.StartOverIntent': 'repeat',
  RepeatIntent: 'repeat',
  'AMAZON.RepeatIntent': 'repeat',
  'AMAZON.HelpIntent': 'HelpIntent',
  'AMAZON.StopIntent': 'StopIntent',
  CancelIntent: 'StopIntent',
  'AMAZON.CancelIntent': 'StopIntent',
  DefaultFallbackIntent: 'Unhandled',
  'AMAZON.FallbackIntent': 'Unhandled',
};