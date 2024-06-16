import pandas as pd

# Cargar el CSV en un DataFrame
dfCalidadAire = pd.read_csv('data/calidadAire.csv')

# Eliminar filas con valores nulos
df = dfCalidadAire.dropna()

# Eliminar duplicados
df = dfCalidadAire.drop_duplicates()

# Mostrar las primeras filas del DataFrame limpio y ordenado
print(dfCalidadAire.head())

#Mostrar la información en React a través de JSon
dfCalidadAire.to_json('calidadAire.json', orient='records')

df.to_csv('calidad_aire_limpio.csv', index=False)

