type EmailNotificacion = {
    tipo: "email";
    destinatario: string;
    asunto: string;
    mensaje: string;
};

type SMSNotificacion = {
    tipo: "sms";
    telefono: string;
    mensaje: string;
};

type PushNotificacion = {
    tipo: "push";
    dispositivoId: string;
    titulo: string;
    mensaje: string;
};

type Notificacion = EmailNotificacion | SMSNotificacion | PushNotificacion;

function enviarNotificacion(notificacion: Notificacion): void {
    switch (notificacion.tipo) {
        case "email":
            console.log(`Enviando EMAIL a ${notificacion.destinatario}`);
            console.log(`Asunto: ${notificacion.asunto}`);
            console.log(`Mensaje: ${notificacion.mensaje}`);
        break;

        case "sms":
            console.log(`Enviando SMS a ${notificacion.telefono}`);
            console.log(`Mensaje: ${notificacion.mensaje}`);
        break;

        case "push":
            console.log(`Enviando PUSH al dispositivo ${notificacion.dispositivoId}`);
            console.log(`Título: ${notificacion.titulo}`);
            console.log(`Mensaje: ${notificacion.mensaje}`);
        break;

    default:
        const _exhaustivo: never = notificacion;
        return _exhaustivo;
    }
}

const n1: Notificacion = {
    tipo: "email",
    destinatario: "usuario@mail.com",
    asunto: "Bienvenido",
    mensaje: "Gracias por registrarte"
};

const n2: Notificacion = {
    tipo: "sms",
    telefono: "3001234567",
    mensaje: "Tu código es 1234"
};

const n3: Notificacion = {
    tipo: "push",
    dispositivoId: "abc123",
    titulo: "Nueva alerta",
    mensaje: "Tienes una notificación"
};

enviarNotificacion(n1);
enviarNotificacion(n2);
enviarNotificacion(n3);