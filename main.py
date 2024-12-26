from fastapi import FastAPI
from pydantic import BaseModel

from model_load import predict_data

class ReqDTO(BaseModel):
    education: str
    country: str
    experience: float

app = FastAPI()

@app.get("/")
def greet():
    return {"msg":"hello world"}

@app.get("/predict")
def getPrediction():
    salary= predict_data("Master’s degree", "Germany", 15)
    return {"salary":salary}

@app.post("/predict")
def getPrediction(reqDto: ReqDTO):
    salary= predict_data(reqDto.education, reqDto.country, reqDto.experience)
    return {"salary":salary}