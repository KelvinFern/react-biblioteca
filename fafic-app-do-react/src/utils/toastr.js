import toastr from "toastr";
import 'toastr/build/toastr.min.css';

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "800",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function buildMessagem(titulo, mensagem, classe){
    toastr[classe](mensagem, titulo)
}

export function messagemSucesso(mensagem){
    buildMessagem("Sucesso",mensagem,"success")
}
export function messagemErro(mensagem){
    buildMessagem("Erro",mensagem,"error")
}

