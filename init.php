<?php

$user = getUser();
$host = $_SERVER['HTTP_HOST'];
include('conf.php');
$optionlink = $onglet === true ? 'window.open':'window.location.replace';

$jResult .= "plugin.url = '".$url."';";
$jResult .= "plugin.optionlink = '".$optionlink."';";
$jResult .= "plugin.localDlPath = '".$local_dl_path."';";
$jResult .= "plugin.dirpath = '".$dirpath."';";
$theSettings->registerPlugin("linkcakebox");