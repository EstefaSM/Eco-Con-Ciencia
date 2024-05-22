import pandas as pd

from data.generators.generadorDisposicionResiduos import generarDatosDisposicionResiduos

def construirDataFrameDisposicionResiduos():
    datosDisposicionResiduos=generarDatosDisposicionResiduos()

    disposicionResiduosDF=pd.DataFrame(datosDisposicionResiduos)

    print(disposicionResiduosDF)

construirDataFrameDisposicionResiduos()