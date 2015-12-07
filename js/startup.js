define(['knockout'], function (ko) {
    ko.components.register('page-one', { require: 'components/page-one/page-one' });

    ko.applyBindings();
});
