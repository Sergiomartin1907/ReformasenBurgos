<?php
header('Content-Type: application/json');

// Permitir solicitudes CORS si es necesario
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del cuerpo JSON
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
    $phone = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $projectType = isset($data['projectType']) ? strip_tags(trim($data['projectType'])) : '';
    $description = isset($data['description']) ? strip_tags(trim($data['description'])) : '';

    if (empty($name) || empty($phone) || empty($email) || empty($projectType)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Faltan campos obligatorios.']);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Email no válido.']);
        exit;
    }

    // Configuración del correo
    $recipient = "sergiomartinrodriguez99@outlook.es";
    $subject = "Nuevo Presupuesto Web - $name";

    $email_content = "Has recibido una nueva solicitud de presupuesto desde la web:\n\n";
    $email_content .= "Nombre: $name\n";
    $email_content .= "Teléfono: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Tipo de Obra: $projectType\n\n";
    $email_content .= "Descripción del Proyecto:\n$description\n";

    // Headers
    $email_headers = "From: webmaster@".$_SERVER['HTTP_HOST']."\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/".phpversion();

    // Enviar al destinatario (propietario del sitio)
    $sentToOwner = mail($recipient, $subject, $email_content, $email_headers);

    // Enviar correo de confirmación al usuario que rellenó el formulario
    $userSubject = "Confirmación de recepción - Burgos Reformas Integrales";
    $userContent = "Hola $name,\n\n";
    $userContent .= "Hemos recibido su solicitud de presupuesto. Estos son los datos que nos ha facilitado:\n\n";
    $userContent .= "Nombre: $name\n";
    $userContent .= "Teléfono: $phone\n";
    $userContent .= "Email: $email\n";
    $userContent .= "Tipo de Obra: $projectType\n\n";
    $userContent .= "Descripción del Proyecto:\n$description\n\n";
    $userContent .= "Nos pondremos en contacto con usted lo antes posible.\n\nSaludos,\nBurgos Reformas Integrales";

    // Cabeceras para el email al usuario (From debe ser el propietario para evitar rechazo)
    $userHeaders = "From: " . $recipient . "\r\n";
    $userHeaders .= "Reply-To: " . $recipient . "\r\n";
    $userHeaders .= "X-Mailer: PHP/".phpversion();

    $sentToUser = false;
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sentToUser = mail($email, $userSubject, $userContent, $userHeaders);
    }

    if ($sentToOwner) {
        http_response_code(200);
        $msg = 'Mensaje enviado correctamente.';
        if (!$sentToUser) {
            $msg .= ' No se pudo enviar la confirmación al email del usuario.';
        }
        echo json_encode(['success' => true, 'message' => $msg]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'No se pudo enviar el email al propietario. Verifica la configuración de correo de tu servidor.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido.']);
}
?>
