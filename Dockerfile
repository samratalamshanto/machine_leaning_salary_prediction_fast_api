FROM python:latest
WORKDIR /app
COPY requirement.txt requirement.txt
RUN pip3 install -r requirement.txt
COPY . .
CMD uvicorn main:app --reload --port=8000 --host=0.0.0.0
