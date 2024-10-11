module.exports = {
  FeatureName: 'mep actions',
  features: [

    {
      tcid: '1',
      name: 'confirm the default experience on stage',
      path: '/drafts/nala/features/personalization/mep-actions/pzn-actions?mep=%2Fdrafts%2Fnala%2Ffeatures%2Fpersonalization%2Fmep-actions%2Fpzn-actions.json--default',
      data: {
        headerCount: 7,
        sec6: 'Base page text. Section 6',
        sec3: 'Base page text. Section 3',
        sec4: 'Base page text. Section 4',
        sec2: 'Base page text. Section 2',
        sec8: 'Base page text fragment',
        secLast: 'Base page text fragment',
      },
      tags: '@mep @mepact @mepact1 @smoke @regression @milo',
    },

    {
      tcid: '2',
      name: 'confirm the altered experience on stage',
      path: '/drafts/nala/features/personalization/mep-actions/pzn-actions?mep=%2Fdrafts%2Fnala%2Ffeatures%2Fpersonalization%2Fmep-actions%2Fpzn-actions.json--all',
      data: {
        headerCount: 12,
        sec6: 'Section 6 replacement',

        sec3: 'Base page text. Section 3',
        appendedH3: 'Appended to 3',
        appendedH3Second: 'Kick things off with hundreds of premium and free presets you can access with your Lightroom subscription.',

        prependedH3: 'Prepended to 4',
        prependedH3text: 'Kick things off with hundreds of premium and free presets you can access with your Lightroom subscription.',
        sec4: 'Base page text. Section 4',

        sec2: 'Base page text. Section 2',
        insertedSec2: 'Inserted before section2 text',

        sec8: 'Replaced basepage fragment',
        sec8Text: 'Kick things off with hundreds of premium and free presets you can access with your Lightroom subscription.',

        sec9: 'Inserted after basepage fragment',
        sec10: 'Inserted after replaced fragment',
        sec10link: 'Explore the premium collection',
        secLast: 'Inserted after replaced fragment',
      },
      tags: '@mep @mepact @mepact2 @smoke @regression @milo',
    },
  ],
};
