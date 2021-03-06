/**
 * Generated by https://github.com/alexander-schranz/sulu-backend-bundle.
 */

define(function () {

    'use strict';

    return {
        header: function () {
            this.sandbox.on('sulu.header.back', function () {
                // TODO FIXME remove this hack when change to new JS structure.
                this.sandbox.emit('sulu.router.navigate', 'forms/' + this.options.language, true, true);
            }.bind(this));

            return {
                tabs: {
                    url: '/admin/content-navigations?alias=sulu_form_form'
                    // alias for a the admin service tagged with `sulu_admin.content_navigation`
                },
                toolbar: {
                    buttons: {
                        save: {},
                        settings: {
                            options: {
                                dropdownItems: {
                                    delete: {}
                                }
                            }
                        }
                    },
                    languageChanger: {
                        preSelected: this.options.language
                    }
                }
            };
        }
    };
});
