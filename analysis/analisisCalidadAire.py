import pandas as pd

from data.generators.generadorCalidadAire import generarDatosCalidadAire

from helpers.generarTabla import crearTablaHTML

import imgkit

#1. Para analizar datos con Python debemos construir un dataframe

def construirDataFrameCalidadAire():
    datosCalidadAire=generarDatosCalidadAire()

    #Contruyo DataFrame
    calidadAireDF=pd.DataFrame(datosCalidadAire, columns=['Comuna', 'Total de población', 'Tamaño muestra', 'ICA', 'Fecha encuesta', 'Nombre', 'ID'])

    print(calidadAireDF)
    crearTablaHTML(calidadAireDF, "CalidadAire")

construirDataFrameCalidadAire()