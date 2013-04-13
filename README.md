##Description
Au clic sur le bouton de la toolbar un nouvel onglet s'ouvre vers la page index de cakebox.
Un autre lien est présent dans l'onglet "fichier" qui redirige vers la page cakebox/watch.php du fichier concerné.  
##Installation
Ouvrez un terminal ssh sur votre serveur en root *(Attention git doit être installer si pas fait aptitude install git)*
```
cd /var/www/rutorrent/plugins
git clone git://github.com/Magicalex/rutorrent-linkcakebox.git linkcakebox
chown -R www-data:www-data /var/www/rutorrent/plugins/linkcakebox
```
##Configuration
Par défaut la config est adapté au script de mardambey, pour ceux qui ont une autre configuration éditez le fichier conf.php
```nano /var/www/rutorrent/plugins/linkcakebox/conf.php``` 
######exemple d'un fichier de configuration :
```php
<?php
$url = 'http://'.$host.'/rutorrent/cakebox/'; //force le http
$local_dl_path = '../../users/'.$user.'/';
$dirpath = '/home/'.$user.'/torrents/';
$onglet = true; //ou false
```
+ La variable **$url** est l'url qui dirige vers le dossier web cakebox.
+ La variable **$local_dl_path** correspond au dossier que cakebox surveille.
+ La variable **$dirpath** correspond au paramètre directory=/home/exemple/ de votre rtorrent.rc.
+ La variable **$onglet** est une option pour choisir d'ouvrir cakebox dans un autre onglet ou pas, true pour ouvrir un autre onglet et false pour ne pas ouvrir un autre onglet.

**Note :** la variable $user récupère le nom de l'utilisateur authentifié au serveur web,
et la variable $host récupère le hostname de votre barre d'adresse.

Auteur : Magicalex