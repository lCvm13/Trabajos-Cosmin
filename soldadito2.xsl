<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/">
  <html>
   <head></head>
   <body>
    <h1>Información de la canción</h1>
    <h2>
     <xsl:value-of select="cancion/titulo"/>
    </h2>
 <div>
    <xsl:for-each select="cancion/letra/estrofa">
     <p><xsl:for-each select="verso"></p>
               <xsl:value-of select="."/>
             </xsl:for-each>
     </xsl:for-each>
<div>
   </body>
  </html>
 </xsl:template>
</xsl:stylesheet>
