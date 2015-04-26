Package.describe({
  name: "stylish",
  summary: "thesaucecode stylying package, load order controlled once, in once place",
  version: "0.0.3"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use(['jquery', 'fourseven:scss'], 'client');
  
  api.addFiles([
  // Bootstrap 3 font definitions
    'fonts/glyphicons-halflings-regular.eot',
    'fonts/glyphicons-halflings-regular.svg',
    'fonts/glyphicons-halflings-regular.ttf',
    'fonts/glyphicons-halflings-regular.woff',
    'fonts/glyphicons-halflings-regular.woff2'
  ], ['client']);

  // Include bootstrap
  api.addFiles([

    // Bootstrap 3 scss definitions
    'client/bootstrap/scss/_alerts.scss',
    'client/bootstrap/scss/_badges.scss',
    'client/bootstrap/scss/_breadcrumbs.scss',
    'client/bootstrap/scss/_button-groups.scss',
    'client/bootstrap/scss/_buttons.scss',
    'client/bootstrap/scss/_carousel.scss',
    'client/bootstrap/scss/_close.scss',
    'client/bootstrap/scss/_code.scss',
    'client/bootstrap/scss/_component-animations.scss',
    'client/bootstrap/scss/_dropdowns.scss',
    'client/bootstrap/scss/_forms.scss',
    'client/bootstrap/scss/_glyphicons.scss',
    'client/bootstrap/scss/_grid.scss',
    'client/bootstrap/scss/_input-groups.scss',
    'client/bootstrap/scss/_jumbotron.scss',
    'client/bootstrap/scss/_labels.scss',
    'client/bootstrap/scss/_list-group.scss',
    'client/bootstrap/scss/_media.scss',
    'client/bootstrap/scss/_mixins.scss',
    'client/bootstrap/scss/_modals.scss',
    'client/bootstrap/scss/_navbar.scss',
    'client/bootstrap/scss/_navs.scss',
    'client/bootstrap/scss/_normalize.scss',
    'client/bootstrap/scss/_pager.scss',
    'client/bootstrap/scss/_pagination.scss',
    'client/bootstrap/scss/_panels.scss',
    'client/bootstrap/scss/_popovers.scss',
    'client/bootstrap/scss/_print.scss',
    'client/bootstrap/scss/_progress-bars.scss',
    'client/bootstrap/scss/_responsive-embed.scss',
    'client/bootstrap/scss/_responsive-utilities.scss',
    'client/bootstrap/scss/_scaffolding.scss',
    'client/bootstrap/scss/_tables.scss',
    'client/bootstrap/scss/_theme.scss',
    'client/bootstrap/scss/_thumbnails.scss',
    'client/bootstrap/scss/_tooltip.scss',
    'client/bootstrap/scss/_type.scss',
    'client/bootstrap/scss/_utilities.scss',
    'client/bootstrap/scss/_variables.scss',
    'client/bootstrap/scss/_wells.scss',
    'client/bootstrap/scss/mixins/_alerts.scss',
    'client/bootstrap/scss/mixins/_background-variant.scss',
    'client/bootstrap/scss/mixins/_border-radius.scss',
    'client/bootstrap/scss/mixins/_buttons.scss',
    'client/bootstrap/scss/mixins/_center-block.scss',
    'client/bootstrap/scss/mixins/_clearfix.scss',
    'client/bootstrap/scss/mixins/_forms.scss',
    'client/bootstrap/scss/mixins/_gradients.scss',
    'client/bootstrap/scss/mixins/_grid-framework.scss',
    'client/bootstrap/scss/mixins/_grid.scss',
    'client/bootstrap/scss/mixins/_hide-text.scss',
    'client/bootstrap/scss/mixins/_image.scss',
    'client/bootstrap/scss/mixins/_labels.scss',
    'client/bootstrap/scss/mixins/_list-group.scss',
    'client/bootstrap/scss/mixins/_nav-divider.scss',
    'client/bootstrap/scss/mixins/_nav-vertical-align.scss',
    'client/bootstrap/scss/mixins/_opacity.scss',
    'client/bootstrap/scss/mixins/_pagination.scss',
    'client/bootstrap/scss/mixins/_panels.scss',
    'client/bootstrap/scss/mixins/_progress-bar.scss',
    'client/bootstrap/scss/mixins/_reset-filter.scss',
    'client/bootstrap/scss/mixins/_resize.scss',
    'client/bootstrap/scss/mixins/_responsive-visibility.scss',
    'client/bootstrap/scss/mixins/_size.scss',
    'client/bootstrap/scss/mixins/_tab-focus.scss',
    'client/bootstrap/scss/mixins/_table-row.scss',
    'client/bootstrap/scss/mixins/_text-emphasis.scss',
    'client/bootstrap/scss/mixins/_text-overflow.scss',
    'client/bootstrap/scss/mixins/_vendor-prefixes.scss',

    'client/bootstrap/_bootstrap.scss',

    // Bootstrap 3 javascript definitions
    'client/bootstrap/javascripts/bootstrap.js'

  ], ['client']);

  api.addFiles([
    // Bottelio theme common imports
    'client/imports/_variables.import.scss',     
    'client/imports/_mixins.import.scss',     
    'client/imports/_helpers.import.scss',     

     // Third party styling overrides
    'client/third-party-overrides/_chosen.scss',

    // Individual style partials
    'client/styles/_layout.scss',

    // Aggregate Styling
    'client/import.scss'
  ], ['client']);

});
