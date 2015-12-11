define(['knockout'], function (ko) {
    ko.components.register('page-one', { require: 'components/page-one/page-one' });
    ko.components.register('page-two', { require: 'components/page-two/page-two' });

    ko.applyBindings();
});
