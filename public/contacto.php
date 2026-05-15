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

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'No se pudo enviar el email. Verifica la configuración de correo de tu servidor.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido.']);
}
?>
