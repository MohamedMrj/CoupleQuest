import requests
from ..api_keys.weather_api_key import API_KEY


def get_temprature(latitiude,longitude) -> str:
    try:
        response = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?lat={latitiude}&lon={longitude}&units=metric&appid={API_KEY}"
        )
        response.raise_for_status
    except:
        if response.status_code != 200:
            "Something went wrong with the weather API"
            f"Status code is: " , {response.status_code()}
    temperature = response.json()["main"]["temp"]
    return str(temperature)

def get_weather_condition(latitiude,longitude) -> str:
    try:
        response = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?lat={latitiude}&lon={longitude}&units=metric&appid={API_KEY}"
        )
        response.raise_for_status
    except:
        if response.status_code != 200:
            "Something went wrong with the weather API"
            f"Status code is: " , {response.status_code()}
    weather = response.json()["weather"][0]["main"]
    return weather

