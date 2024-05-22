import random

def generarDatosSiembra():
    listaDatos=[]
    for i in range (500):
        corregimiento=random.choice(['Comuna 1 Popular', 'Comuna 2 Santa Cruz','Comuna 3 Manrique', 'Comuna 4 Arajuez'])
        totalPoblación=random.choice(['2500', '3000', '3500', '4000'])
        tamanoMuestra=random.choice(['1000', '1500', '2000', '2500'])
        ica=random.randint(20, 100)
        fechaEncuesta=random.choice(['2024-05-14", "2024-05-15'])
        nombreEncuestado=random.choice(['Valentina', 'Juan', 'Julián', 'Laura'])
        id=random.randint(0,1000000)
        calidadAire=[corregimiento,totalPoblación,tamanoMuestra,ica,fechaEncuesta,nombreEncuestado,id]

        listaDatos.append(calidadAire)

    return listaDatos

