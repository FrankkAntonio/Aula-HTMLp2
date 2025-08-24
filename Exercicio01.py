
alturas = []
alturas_masculino = []
contador_feminino = 0


for i in range(1, 16):
    print(f"\nPessoa {i}:")

    while True:
        try:
            altura = float(input("Digite a altura: "))
            if altura <= 0:
                print("Altura deve ser um valor positivo.")
                continue
            break
        except ValueError:
            print("Por favor, digite um número válido para a altura.")

    while True:
        genero = input(
            "Digite o gênero (M para masculino, F para feminino): ").strip().upper()
        if genero in ['M', 'F']:
            break
        else:
            print("Entrada inválida. Digite 'M' para masculino ou 'F' para feminino.")

    alturas.append(altura)

    if genero == 'M':
        alturas_masculino.append(altura)
    elif genero == 'F':
        contador_feminino += 1


maior_altura = max(alturas)
menor_altura = min(alturas)
media_masculino = sum(alturas_masculino) / \
    len(alturas_masculino) if alturas_masculino else 0


print("\n--- Resultados ---")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
if alturas_masculino:
    print(f"Média de altura do gênero Masculino: {media_masculino:.2f} m")
else:
    print("Não há pessoas do gênero Masculino para calcular a média.")
print(f"Número de pessoas do gênero Feminino: {contador_feminino}")
