import urllib.request
import json


def obtener_clima(city, api_key):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid=4d31a65b7932fa196a1107fb3fb21e24&units=metric&lang=es"
    with urllib.request.urlopen(url) as response:
        data= response.read()
        jsonData = json.loads(data)
        print(jsonData)

        clima_data = {
            "\N{CITYSCAPE}" "  " "Ciudad":jsonData["name"],
            "\N{THERMOMETER}"" ""Temperatura":jsonData["main"]["temp"],
            "\N{CLOUD}"" ""Descripcion":jsonData["weather"][0]["description"],
            "\N{DROPLET}"" ""Humedad":jsonData["main"]["humidity"],
            "\N{DASH SYMBOL}"" ""Velocidad_Viento":jsonData["wind"]["speed"],
            "\N{WORLD MAP}" "  "  "Coordenadas":{
                "Lon":jsonData["coord"]["lon"],
                "Lat":jsonData["coord"]["lat"],
            "\N{EYES}"" ""Visibilidad":jsonData["visibility"],
            "\N{SUNRISE}"" ""Amanecer":jsonData["sys"]["sunrise"],
            "\N{THERMOMETER}"" ""Temperatura":{
                "Temp_min":jsonData["main"]["temp_min"],
                "Temp_max":jsonData["main"]["temp_max"],
            "\N{WORLD MAP}""  ""Pais":jsonData["sys"]["country"],
            "Presion":jsonData["main"]["pressure"]
            }
            }
            }
        print()
        print(clima_data)
        print()
       
city = input("Ingrese una ciudad:\n")
obtener_clima(city, "4d31a65b7932fa196a1107fb3fb21e24")




