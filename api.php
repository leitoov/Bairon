<?php
$host = 'localhost'; 
$db = 'c2620852_bairon';
$user = 'c2620852_bairon';
$pass = 'Bairon2024';

$conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);

// Definir el tamaño máximo permitido para las imágenes (2MB)
$maxFileSize = 2 * 1024 * 1024; // 2MB

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Crear una nueva página
    if ($_POST['action'] === 'createPage') {
        $pageName = $_POST['pageName'];
        $stmt = $conn->prepare("INSERT INTO pages (page_name) VALUES (?)");
        $stmt->execute([$pageName]);
        echo "Página creada";
    }

    // Agregar bloque de texto en distintos idiomas
    if ($_POST['action'] === 'addTextBlock') {
        $pageId = $_POST['pageId'];
        $stmt = $conn->prepare("INSERT INTO content_blocks (page_id, content_type) VALUES (?, 'text')");
        $stmt->execute([$pageId]);
        $blockId = $conn->lastInsertId();

        $languages = ['es', 'en'];
        foreach ($languages as $language) {
            if (!empty($_POST["contentText_$language"])) {
                $contentText = $_POST["contentText_$language"];
                $stmt = $conn->prepare("INSERT INTO content_texts (block_id, language, content_text) VALUES (?, ?, ?)");
                $stmt->execute([$blockId, $language, $contentText]);
            }
        }
        echo "Bloque de texto agregado";
    }

    // Subir imagen y agregar bloque de imagen
    if ($_POST['action'] === 'addImageBlock') {
        $pageId = $_POST['pageId'];
        $imageFileType = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
        $validFormats = ['jpg', 'jpeg', 'png', 'gif'];

        // Comprobar el tamaño del archivo
        if ($_FILES['image']['size'] > $maxFileSize) {
            echo "El archivo es demasiado grande. El tamaño máximo permitido es 2MB.";
            exit;
        }

        // Comprobar si el archivo es uno de los formatos permitidos
        if (in_array($imageFileType, $validFormats)) {
            $imagePath = 'uploads/' . basename($_FILES['image']['name']);
            if (move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {
                // Crear bloque de contenido de tipo imagen
                $stmt = $conn->prepare("INSERT INTO content_blocks (page_id, content_type) VALUES (?, 'image')");
                $stmt->execute([$pageId]);
                $blockId = $conn->lastInsertId();

                // Guardar la imagen en la tabla content_images
                $stmt = $conn->prepare("INSERT INTO content_images (block_id, image_path) VALUES (?, ?)");
                $stmt->execute([$blockId, $imagePath]);
                echo "Imagen subida y bloque de imagen creado";
            } else {
                echo "Error al subir la imagen";
            }
        } else {
            echo "Formato de imagen no permitido. Solo se aceptan JPG, PNG y GIF.";
        }
    }
}
?>
