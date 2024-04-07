<?php
// Path to the file on the server
$file = '/AI-VIS-EthiCards.zip';

// Path to the text file that stores the download count
$counter_file = '/download_counter.txt';

// Check if the counter file exists; if not, create it and initialize with 0
if (!file_exists($counter_file)) {
    file_put_contents($counter_file, 0);
}

// Read the current value of the counter
$downloads = file_get_contents($counter_file);

// If the file is accessed, increment the download count
if (isset($_GET['download'])) {
    $downloads++;
    file_put_contents($counter_file, $downloads);
    
    // Process the file download
    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($file).'"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        flush(); // Flush system output buffer
        readfile($file);
        exit;
    }
}
?>
