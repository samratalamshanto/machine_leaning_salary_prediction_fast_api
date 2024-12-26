from pydantic import BaseModel

class ReqDTO(BaseModel):
    education: str
    country: str
    experience: float

class CommonResponse(BaseModel):
    success: bool
    data: Union[str,None] = None
    msg: Union[str,None] = None
