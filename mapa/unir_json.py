import os
import json

pasta = "zonas"

arquivos = [f for f in os.listdir(pasta) if f.endswith(".json")]

geojson_unificado = {
    "type": "FeatureCollection",
    "features": []
}

for arquivo in arquivos:
    caminho_arquivo = os.path.join(pasta, arquivo)

    with open(caminho_arquivo, "r", encoding="utf-8") as f:
        geojson_data = json.load(f)

        if "features" in geojson_data:
            geojson_unificado["features"].extend(geojson_data["features"])
        else:
            print(f"Atenção: {arquivo} não contém 'features'.")

caminho_saida = "sp_zonas_unificado.geojson"
with open(caminho_saida, "w", encoding="utf-8") as f:
    json.dump(geojson_unificado, f, indent=4)

print(f" Arquivo salvo como {caminho_saida}")
