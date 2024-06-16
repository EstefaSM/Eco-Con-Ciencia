import pandas as pd
import matplotlib.pyplot as plt

# Leer el archivo CSV
dataFrameSiembra = pd.read_csv('data/Siembra.csv')

dataFrameSiembra['Fecha'] = dataFrameSiembra['Fecha'].astype('datetime64[ms]')

# Lista de ciudades a filtrar
filtrarCiudades = ['Caldas', 'La Estrella', 'Sabaneta', 'Itagüí', 'Envigado', 'Bello', 'Copacabana', 'Girardota', 'Barbosa', 'Medellín']

# Filtrar por ciudades específicas
dataFrameFiltro = dataFrameSiembra[dataFrameSiembra['Ciudad'].isin(filtrarCiudades)]

# Mostrar el DataFrame filtrado (opcional, para verificación)
print("Datos filtrados por ciudades:")
print(dataFrameFiltro)

# Agrupar por ciudad y sumar el número de árboles sembrados
agruparCiudad = dataFrameFiltro.groupby['Ciudad'].sum()[['Arboles']].reset_index()

# Mostrar los resultados agrupados
print("Cantidad de árboles sembrados por ciudad:")
print(agruparCiudad)

# Convertir el DataFrame agrupado a JSON y guardarlo en un archivo
agruparCiudad.to_json('public/data/siembra.json', orient='records')

# Mostrar el archivo JSON generado (opcional, para verificación)
with open('public/data/siembra.json', 'r') as f:
    datos_json = f.read()
    print("Datos JSON generados:")
    print(datos_json)








