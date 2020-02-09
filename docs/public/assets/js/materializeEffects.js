// ==================================================
// Instancias de javascript que necesita materialize
// ==================================================

$('.datepicker').datepicker();
$('.sidenav').sidenav();
$('.fixed-action-btn').floatingActionButton();
$('.modal').modal();
$('.trigger-modal').modal();
$('.materialboxed').materialbox();
$('.tooltipped').tooltip();
$('.collapsible').collapsible();
$('.chips').chips();
$('.dropdown-trigger').dropdown();
$('.carousel').carousel();

// Toasts
function AlertToast(message,icon,color){
    var toastHTML = '<span>'+message+'&nbsp;</span><i class="material-icons'+' '+color+'-text'+'">'+icon+'</i>';
    return M.toast({html: toastHTML, classes: 'rounded'});
}

