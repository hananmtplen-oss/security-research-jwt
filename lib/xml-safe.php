<?php
libxml_disable_entity_loader(true);
$dom = new DOMDocument();
$dom->loadXML($xml, LIBXML_NOENT);
?>
