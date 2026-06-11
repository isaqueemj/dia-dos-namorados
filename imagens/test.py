import os

extensoes_imagem = [".png", ".jpeg", ".jpg", ".bmp", ".webp", ".gif"]

pasta = os.path.dirname(os.path.abspath(__file__))

contador = 1

for arquivo in os.listdir(pasta):
    caminho_antigo = os.path.join(pasta, arquivo)

    if (
        os.path.isfile(caminho_antigo)
        and arquivo != os.path.basename(__file__)
        and os.path.splitext(arquivo)[1].lower() in extensoes_imagem
    ):
        novo_nome = f"foto{contador}.jpg"
        caminho_novo = os.path.join(pasta, novo_nome)

        os.rename(caminho_antigo, caminho_novo)

        print(f"{arquivo} -> {novo_nome}")
        contador += 1

print("Renomeação concluída!")