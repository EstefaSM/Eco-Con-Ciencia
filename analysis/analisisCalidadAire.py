import pandas as pd
import matplotlib as plt

dataFrameCalidadAire = pd.read_csv('data/calidadAire.csv', encoding='latin1')

filtrarMunicipios = [ 'Caldas', 'La Estrella', 'Sabaneta', 'Itagüí', 'Envigado', 'Bello', 'Copacabana', 'Girardota', 'Barbosa', 'Medellín'] 

dataFrameFiltro = dataFrameCalidadAire[dataFrameCalidadAire['Municipio'].isin(filtrarMunicipios)]

print (dataFrameCalidadAire)
