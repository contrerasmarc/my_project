// ==========================================================================
// Project:   MyApp - mainPage
// Copyright: @2015 My Company, Inc.
// ==========================================================================
/*globals MyApp */

// This page describes the main user interface for your application.
MyApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['btnNew', 'btnDelete', 'btnEdit', 'btnPrint'],

    btnNew: SC.ImageButtonView.extend({
      layout: {
        width: 24,
        height: 24,
        top: 8,
        left: 8
      },
      image: 'add-button'

    }),
    btnDelete: SC.ImageButtonView.extend({
      layout: {
        width: 24,
        height: 24,
        top: 8,
        left: 36
      },
      image: 'delete-button'               
    }),
    btnEdit: SC.ImageButtonView.extend({
      layout: {
        width: 24,
        height: 24,
        top: 8,
        left: 64
      },
      image: 'edit-button'               
    }),
    btnPrint: SC.ImageButtonView.extend({
      layout: {
        width: 24,
        height: 24,
        top: 8,
        left: 92
      },
      image: 'print'               
    })
  })

});
