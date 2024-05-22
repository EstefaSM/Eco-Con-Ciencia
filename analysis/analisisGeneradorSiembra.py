import pandas as pd

from data.generators.generadorSiembra import generarDatosSiembra

def construirDataFrameSiembra():
    datosSiembra=generarDatosSiembra()

    siembraDF=pd.DataFrame(datosSiembra)

    print(siembraDF)

construirDataFrameSiembra()