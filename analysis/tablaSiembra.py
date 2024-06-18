import pandas as pd
import matplotlib.pyplot as plt

# Leer el archivo CSV
dataFrameSiembra = pd.read_csv('data/Siembra.csv', encoding='latin1')

# Asegurarse de que la columna 'Año' sea de tipo entero
dataFrameSiembra['Ano'] = dataFrameSiembra['Ano'].astype(int)

# Lista de ciudades a filtrar
filtrarCiudades = ['Caldas', 'La Estrella', 'Sabaneta', 'Itagüí', 'Envigado', 'Bello', 'Copacabana', 'Girardota', 'Barbosa', 'Medellín']

# Filtrar por ciudades específicas
dataFrameFiltro = dataFrameSiembra[dataFrameSiembra['Ciudad'].isin(filtrarCiudades)]

# Agrupar por ciudad y año, y sumar el número de árboles sembrados
agruparCiudadAno = dataFrameFiltro.groupby(['Ciudad', 'Ano']).sum()[['Arboles']].reset_index()

# Mostrar los resultados agrupados (opcional, para verificación)
print("Cantidad de árboles sembrados por ciudad y año:")
print(agruparCiudadAno)

# Generar el gráfico
plt.figure(figsize=(10, 6))

for ciudad in filtrarCiudades:
    data_ciudad = agruparCiudadAno[agruparCiudadAno['Ciudad'] == ciudad]
    plt.plot(data_ciudad['Año'], data_ciudad['Arboles'], label=ciudad)

plt.xlabel('Año')
plt.ylabel('Número de Árboles Sembrados')
plt.title('Número de Árboles Sembrados por Año y Municipio')
plt.legend()
plt.grid(True)
plt.savefig('public/data/siembra_plot.png')  # Guardar el gráfico como una imagen

# Mostrar el gráfico (opcional, para verificación)
plt.show()









