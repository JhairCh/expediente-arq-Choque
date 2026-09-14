class CanalNotificacion {
    enviar(mensaje) {
        console.log("Enviando notificacion: " + mensaje);
    }
}


class ServicioWhatsAppExterno {
    mandarMensaje(numero, texto) {
        console.log("WhatsApp enviado a " + numero + ": " + texto);
    }
}


class NotificacionWhatsAppAdapter extends CanalNotificacion {
    constructor() {
        super();
        this.whatsapp = new ServicioWhatsAppExterno();
    }

    enviar(mensaje) {
        this.whatsapp.mandarMensaje(
            "71234567",
            mensaje
        );
    }
}


// Ejemplo de uso

const notificacion = new NotificacionWhatsAppAdapter();

notificacion.enviar("Su orden de trabajo esta lista.");