(function(){
    emailjs.init('user_AzgrtQy9jUnd9u66mxdo8');
 })();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        if (emailjs.sendForm('web_marlon_saravia', 'template_ls2K9dyn_clone', this)) {
            AlertToast('Thanks, message sent', 'done', 'green')
        };
    });
}