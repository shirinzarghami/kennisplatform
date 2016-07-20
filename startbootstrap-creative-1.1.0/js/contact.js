$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            naam: {
                validators: {
                    notEmpty: {
                        message: 'Vul uw voornaam'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Vul uw e-mail'
                    },
                    emailAddress: {
                        message: 'vul een geldig email'
                    }
                }
            },
            bericht: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 200,
                        message:'een bericht kan zijn tussen 10 tot 200 karakters'
                    },
                    notEmpty: {
                        message: 'vul uw bericht'
                    }
                }
            }
        }
    })
    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#contact_form').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });
});