import pandas as pd
import matplotlib.pyplot as plt

# Paso 1: Filtrar y preparar la tabla

# Leer el archivo CSV
dataFrameCalidadAgua = pd.read_csv('data/CalidadAgua.csv', encoding='latin1')

# Lista de ciudades a filtrar
filtrarCiudades = ['Caldas', 'La Estrella', 'Sabaneta', 'Itagüí', 'Envigado', 'Bello', 'Copacabana', 'Girardota', 'Barbosa', 'Medellín']

# Filtrar por las ciudades específicas y seleccionar columnas relevantes
dataFrameFiltrado = dataFrameCalidadAgua[dataFrameCalidadAgua['Municipio'].isin(filtrarCiudades)]
dataFrameFiltrado = dataFrameFiltrado[['Municipio', 'IRCA', 'Nivel de riesgo']]

# Paso 2: Convertir a JSON

# Convertir el DataFrame filtrado a JSON y guardarlo en un archivo
dataFrameFiltrado.to_json('data/calidadAgua_filtrado.json', orient='records')

# Paso 3: Crear la gráfica de barras

# Crear la gráfica de barras con Matplotlib
plt.figure(figsize=(14, 8))

# Iterar sobre cada municipio para crear las barras por nivel de riesgo
for municipio in filtrarCiudades:
    # Filtrar por municipio
    data_municipio = dataFrameFiltrado[dataFrameFiltrado['Municipio'] == municipio]
    
    # Configurar los datos para la gráfica de barras
    niveles_riesgo = data_municipio['Nivel de riesgo']
    irca = data_municipio['IRCA']
    
    # Generar barras para cada nivel de riesgo
    plt.bar(niveles_riesgo, irca, label=municipio, alpha=0.7)
    plt.xlabel('Nivel de riesgo')
    plt.ylabel('IRCA (Calidad)')
    plt.title('Calidad del Agua por Municipio y Nivel de Riesgo')
    plt.legend(loc='best')
    plt.grid(True, axis='y', linestyle='--', alpha=0.7)

    plt.savefig('data/calidadAgua_grafica.png')
    plt.show()
