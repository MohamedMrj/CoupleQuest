from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from API.weather.weather import get_weather_condition,get_temprature


app = FastAPI()
latitude = "58.5942"
longitude = "16.1826"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
    "http://192.168.1.42:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/adventure")
def get_adventure():
    return {
        "activity": "Go for a walk",
        "food": "Try a new restaurant",
        "budget": 500,
        "temprature": get_temprature(latitude, longitude),
        "weather": get_weather_condition(latitude, longitude)
    }
