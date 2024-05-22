import random

def generarDatosDisposicionResiduos():
    listaDatos=[]
    for i in range (500):
        comuna=random.choice(['Comuna 1 Popular', 'Comuna 2 Santa Cruz','Comuna 3 Manrique', 'Comuna 4 Arajuez'])
        totalPoblación=random.choice(['2500', '3000', '3500', '4000'])
        tamanoMuestra=random.choice(['1000', '1500', '2000', '2500'])
        fechaEncuesta=random.choice(['2024-05-14", "2024-05-15'])
        nombreEncuestado=random.choice(['Camila', 'Sebastián', 'Daniela', 'Laura'])
        id=random.randint(0,1000000)
        clasificacion=random.choice(['peligrosidad', 'biodegradabilidad', 'origen'])
        aprovechamiento=random.choice(['reutilización', 'valorización', 'reciclado', 'recuperación'])
        disposicionResiduos=[comuna,totalPoblación,tamanoMuestra,fechaEncuesta,nombreEncuestado,id, clasificacion, aprovechamiento]

        listaDatos.append(disposicionResiduos)

    return listaDatos

#print(generarDatosDisposicionResiduos())