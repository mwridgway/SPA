define(['knockout', 'text!./page-two.html'], function (ko, templateMarkup) {
    function viewModel() {
        this.context = this;
        this.bindMe = ko.observable("something bound on page-two");
    }

    return { viewModel: viewModel, template: templateMarkup };
});
