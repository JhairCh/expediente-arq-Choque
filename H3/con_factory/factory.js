class CanalNotificacion {
    enviar(mensaje) {
        console.log("Enviando notificacion: " + mensaje);
    }
}

class NotificacionEmail extends CanalNotificacion {
    enviar(mensaje) {
        console.log("Enviando por Email: " + mensaje);
    }
}

class NotificacionWhatsApp extends CanalNotificacion {
    enviar(mensaje) {
        console.log("Enviando por WhatsApp: " + mensaje);
    }
}

class NotificacionFactory {
    crearNotificacion(tipo) {
        if (tipo === "email") {
            return new NotificacionEmail();
        }

        if (tipo === "whatsapp") {
            return new NotificacionWhatsApp();
        }

        return null;
    }
}


// Ejemplo de uso
const factory = new NotificacionFactory();

const notificacion = factory.crearNotificacion("whatsapp");

notificacion.enviar("Su orden de trabajo esta lista.");