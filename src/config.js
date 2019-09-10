'use strict';

const resources = require('./languageResources');

module.exports = {
  allowedApplicationIds: ['amzn1.ask.skill.22313e9d-6469-4244-8c3c-65295579a9c2', ''],
  i18n: {
    resources,
  },
  intentMap: {
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
  },
  logging: true,

  db: {
    DynamoDb: {
      awsConfig: {
        region: 'us-east-1',
      },
      tableName: 'FantasyMusic',
    },
  },

  user: {
    metaData: {
      enabled: true,
    },
  },

  dashbot: {
    alexa: process.env.DASHBOT_ALEXA_KEY,
    google: process.env.DASHBOT_GOOGLE_KEY,
  },

  // CUSTOM
  googleAnalytics: process.env.GOOGLE_ANALYTICS_KEY,

  s3: {
    baseUrl: process.env.S3_BUCKET_URL,
    artworkUrl: `${process.env.S3_BUCKET_URL}/artwork.jpg`,
    audioUrl: `${process.env.S3_BUCKET_URL}/audio.mp3`,
    backgroundUrl: `${process.env.S3_BUCKET_URL}/background.jpg`,
    videoUrl: `${process.env.S3_BUCKET_URL}/video.mp4`,
  },
};
