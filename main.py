from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from model_load import predict_data

class ReqDTO(BaseModel):
    education: str
    country: str
    experience: float

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def greet():
    return {"msg":"hello world. Welcome to salary prediction Live application...."}

@app.get("/predict")
def getPrediction():
    salary= predict_data("Master’s degree", "Germany", 15)
    return {"salary":salary}

@app.post("/predict")
def getPrediction(reqDto: ReqDTO):
    salary= predict_data(reqDto.education, reqDto.country, reqDto.experience)
    return {"salary":salary}