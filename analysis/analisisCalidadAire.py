import pandas as pd

from data.generators.generadorCalidadAire import generarDatosCalidadAire

from helpers.generarTabla import crearTablaHTML

import imgkit

#1. Para analizar datos con Python debemos construir un dataframe

def construirDataFrameCalidadAire():
    datosCalidadAire=generarDatosCalidadAire()

    #Contruyo DataFrame
    calidadAireDF=pd.DataFrame(datosCalidadAire, columns=['Comuna', 'Total de población', 'Tamaño muestra', 'ICA', 'Fecha encuesta', 'Nombre', 'ID'])

    #Limpiando el DataFrame
    #1. Limpiando con reemplazos
    #print(calidadAireDF)

    #calidadAireDF.replace('-',pd.NA, inplace=True)
    #calidadAireDF.replace('sin',pd.NA, inplace=True)

    #2. Limpiando con eliminación
    calidadAireDF.replace('sin',pd.NA, inplace=True)
    calidadAireDF.dropna(inplace=True)

    #3. Filtrando datos
    #Obtener nuevos Dataframes, aplicando condiciones lógicas o contando datos. 
    #Consutar datos específicos
    #filtroICAPositivo=calidadAireDF.query("(ICA>=20) and (ICA<50)")
    #filtroICAModerado=calidadAireDF.query("(ICA>=50) and (ICA>70)")
    filtroICADeficiente=calidadAireDF.query("(ICA>=70)").value_counts()

    #RETO: Sumar valores de ICA, ejemplo, ¿cuántos ICA negativos hay por comuna?
    #Filtro para sacar rangos por categorías. 20-50|50-70|70-100 Establecer rangos
    #Tres filtros en cada elemento
    #Simular datos sucios: -, sin <NA> y eliminar
    #El promedio ayudará a que se hagan las gráficas

    #print(filtroICAPositivo)
    #print("\n")
    #print(filtroICAModerado)
    #print("\n")
    print(filtroICADeficiente)
    
    #print("\n")
    #print(calidadAireDF)
    #crearTablaHTML(calidadAireDF, "CalidadAire")

construirDataFrameCalidadAire()