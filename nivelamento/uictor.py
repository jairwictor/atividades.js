alturaF = []
alturaM = []
generoF = []
generoM = []

i = 0
while i < 5:
    genero = input("informe F OU M: ")

    if genero == "F":
        altura = float(input("informe a sua altura: "))
        generoF.append(genero)
        alturaF.append(altura)
    elif genero == "M":
        altura = float(input("informe a sua altura: "))
        alturaM.append(altura)
    else: 
        print("Por favor nos informe se seu gênero é feminino ou masculino!")
    
    i += 1

maior = 0 

for i in alturaF:
    if i > maior:
        maior = i

for i in alturaM:
    if i > maior:
        maior = i

menor = 0 

for i in alturaF:
    if menor == 0:
        menor = i
    elif i > maior:
        maior = i

for i in alturaM:
    if menor == 0:
        menor = i
    elif i > maior:
        maior = i

media = sum(alturaM) / len(alturaM)

print("A maior altura foi: ", maior)
print("A menor altura: ", menor)
print("A média de altura masculina foi: ", media)
print("Quantidade de mulheres: ", len(generoF))

