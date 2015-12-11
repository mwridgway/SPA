define(['knockout', 'text!./page-one.html'], function (ko, templateMarkup) {
    function viewModel() {
        this.context = this;
        this.bindMe = ko.observable("something bound on page-one");
    }

    return { viewModel: viewModel, template: templateMarkup };
});
