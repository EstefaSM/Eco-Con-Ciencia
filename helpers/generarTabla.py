#Función genérica para construir un DF en HTML

def crearTablaHTML(dataFrame, nombreTabla):
    #Convertimos el DT en HTML
    archivoHTML=dataFrame.to_html()
    #Abrimos un archivo HTML en una ruta específica
    archivo=open(f"./tables/{nombreTabla}.html","w")
    #Escribimos la información en el archivo HTML
    archivo.write(
        '''
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ''')
    
    archivo.write(archivoHTML)
    archivo.write(
        '''
            </body>
            </html>
        '''
    )
    archivo.close()
        