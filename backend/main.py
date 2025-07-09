from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from tone_utils import rewrite_tone

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RewriteRequest(BaseModel):
    text: str
    tone: str

@app.post("/rewrite")
def rewrite(req: RewriteRequest):
    result = rewrite_tone(req.text, req.tone)
    return {"rewritten": result}
