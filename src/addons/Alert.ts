// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Swal, {SweetAlertResult} from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export class Alert {
    static okToast(msg: string, titulo = "Ok"): Promise<SweetAlertResult> {
        return Swal.fire({
            toast: true,
            title: titulo,
            position: 'top-end',
            icon: 'success',
            html: msg,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        });
    }

    static ok(msg: string, titulo = "Ok"): Promise<SweetAlertResult> {
        return Swal.fire({
                icon: 'success',
                title: titulo,
                html: msg,
                confirmButtonText: 'Esta bien',
                focusConfirm: true,
                allowOutsideClick: false,
                width:"100%"
        });
    }

    static errorTop(msg: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error', title: 'Ups...', text: msg, toast: true, position: 'top-end', timer: 2500,
        });
    }

    static error(msg: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error', title: 'Ups...', html: msg, confirmButtonText: 'Esta bien'
        });
    }

    static validate(msg: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error', title: 'Error de validación...', html: msg,
        });
    }

    /***
     * Confirma a través de un mensaje si la acción es correcta
     * @param {String} msg Mensaje personalizado
     * @param {String} title Título del mensaje
     * */
    static confirm(msg: string, title = "¿Esta seguro?"): Promise<SweetAlertResult> {
        return Swal.fire({
            title: title,
            html: msg,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        });
    }

    static confirmDeny(msg: string, title = "¿Esta seguro?", confirmText: string, denyText: string): Promise<SweetAlertResult> {
        return Swal.fire({
            title: title,
            html: msg,
            icon: 'question',
            showCancelButton: true,
            showDenyButton: true,
            confirmButtonText: confirmText,
            denyButtonText: denyText,
            cancelButtonText: 'Cancelar',
        });
    }
}
