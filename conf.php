<?php
/* Note : Vous pouvez utiliser la variable $user pour récupérer votre nom d'utilisateur
          Vous pouvez utiliser la variable $host pour récupérer votre ip ou nom de domaine

Laisser par défaut si vous avez utilisé le script mardambey
Ou indiquez l'url complète ex : http://../rutorrent/cakebox/ */
$url = 'http://'.$host.'/cakebox/';

/* Indiquer le dossier surveillé par cakebox
Correspond à la varaible define('LOCAL_DL_PATH', 'downloads'); dans config.php de cakebox */
$local_dl_path = 'downloads/';

/* Cette variable correspond à la variable directory de votre .rtorrent.rc
Par défaut directory du script mardambey_script.sh */
$dirpath = '/var/www/cakebox/downloads/';

/* true pour ouvrir cakebox dans un autre onglet
false pour ne pas ouvrir cakebox dans un autre onglet */
$onglet = true;