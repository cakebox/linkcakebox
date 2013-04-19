plugin.loadLang();
if (theWebUI.theme && theWebUI.theme == 'Oblivion') {
    plugin.loadCSS("linkcakeboxoblivion");
} else {
    plugin.loadCSS("linkcakebox");
}

plugin.onLangLoaded = function()
{
    this.addButtonToToolbar("linkcakebox", theUILang.linkcakebox, plugin.optionlink+"('"+plugin.url+"')", "help");
    this.addSeparatorToToolbar("help");
}

if(plugin.canChangeMenu()) 
{
    theWebUI.urlcakebox = function(dID,fno)
    {
        function bugurl (url)
        {
            url = url.replace("'","%27");
            return url;
        }
 
        var base_path = this.torrents[dID].base_path;
        if (this.files[dID][fno].name != this.torrents[dID].name)
        {
            base_path = base_path+"/"+this.files[dID][fno].name;
        }
        
        base_path = base_path.replace(plugin.dirpath, "");
        var cakeboxUrl = "'"+plugin.url+"watch.php?file="+bugurl(encodeURIComponent(plugin.localDlPath+base_path))+"'";
        return cakeboxUrl;
    }
  
    plugin.createFileMenu = theWebUI.createFileMenu;
    theWebUI.createFileMenu = function( e, id )
    {
        if(plugin.createFileMenu.call(this, e, id))
        {
            if(plugin.enabled)
            {
                var fno = null;
                var table = this.getTable("fls");
                if((table.selCount == 1) && (theWebUI.dID.length==40))
                {
                    var fid = table.getFirstSelected();
                    if(this.settings["webui.fls.view"])
                    {
                        var arr = fid.split('_f_');
                        fno = arr[1];
                    }
                    else
                    {
                        if(!this.dirs[this.dID].isDirectory(fid))
                          fno = fid.substr(3);
                    }
                }
                theContextMenu.add( [theUILang.linkcakeboxmenu, (fno==null) ? null : plugin.optionlink+"("+theWebUI.urlcakebox(theWebUI.dID, fno)+")"] );
            }
            return(true);
        }
        return(false);
    }
}

plugin.onRemove = function()
{
    this.removeSeparatorFromToolbar("linkcakebox");
    this.removeButtonFromToolbar("linkcakebox");
}