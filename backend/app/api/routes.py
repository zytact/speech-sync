
import os
import uuid

from fastapi import APIRouter, UploadFile, File

from app.services.diarization_service import run_diarization

router = APIRouter()

UPLOAD_DIR = "app/uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/diarize")
async def diarize_audio(file: UploadFile = File(...)):

    filename = f"{uuid.uuid4()}_{file.filename}"

    file_path = os.path.join(
        UPLOAD_DIR,
        filename
    )

    with open(file_path, "wb") as buffer:

        buffer.write(
            await file.read()
        )

    try:

        results = run_diarization(
            file_path
        )

        return {
            "segments": results
        }

    finally:

        if os.path.exists(file_path):

            os.remove(file_path)

