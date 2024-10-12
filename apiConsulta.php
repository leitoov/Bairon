<?php
$host = 'localhost'; 
$db = 'c2620852_bairon';
$user = 'c2620852_bairon';
$pass = 'Bairon2024';

$conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

// Obtener los bloques de contenido, sus textos e imágenes para una página
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['pageName'])) {
    $pageName = $_GET['pageName'];

    // Obtener el ID de la página por su nombre
    $stmt = $conn->prepare("SELECT id FROM pages WHERE page_name = ?");
    $stmt->execute([$pageName]);
    $page = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$page) {
        // Si la página no existe
        echo json_encode(['error' => 'Página no encontrada']);
        exit;
    }

    $pageId = $page['id'];

    // Obtener los bloques de contenido asociados a la página
    $stmt = $conn->prepare("SELECT id, content_type FROM content_blocks WHERE page_id = ?");
    $stmt->execute([$pageId]);
    $blocks = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $response = [];

    // Iterar sobre los bloques de contenido
    foreach ($blocks as $block) {
        $blockId = $block['id'];
        $blockType = $block['content_type'];
        
        // Si el bloque es de tipo "text", obtener los textos en diferentes idiomas
        if ($blockType === 'text') {
            $stmt = $conn->prepare("SELECT language, content_text FROM content_texts WHERE block_id = ?");
            $stmt->execute([$blockId]);
            $texts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response[] = [
                'block_id' => $blockId,
                'type' => 'text',
                'texts' => $texts
            ];
        }

        // Si el bloque es de tipo "image", obtener la imagen asociada
        if ($blockType === 'image') {
            $stmt = $conn->prepare("SELECT image_path FROM content_images WHERE block_id = ?");
            $stmt->execute([$blockId]);
            $image = $stmt->fetch(PDO::FETCH_ASSOC);
            $response[] = [
                'block_id' => $blockId,
                'type' => 'image',
                'image' => $image
            ];
        }
    }

    // Devolver la respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
