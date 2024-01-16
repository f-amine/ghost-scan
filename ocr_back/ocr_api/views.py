from django.shortcuts import render
from rest_framework.decorators import api_view
# Create your views here.
from dotenv import load_dotenv
  # take environment variables from .env.
import google.generativeai as genai
import json
from django.http import JsonResponse
import os
import os
from PIL import Image
from dotenv import load_dotenv
import google.generativeai as genai


def get_gemini_response(input,image,prompt):
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([input,image[0],prompt])
    return response.text

def input_image_setup(uploaded_file):

    if uploaded_file is not None:

        bytes_data = uploaded_file.read()

        image_parts = [
            {
                "mime_type": uploaded_file.content_type,  
                "data": bytes_data
            }
        ]
        return image_parts
    else:
        raise FileNotFoundError("No file uploaded")

def parse_response(response):
    lines = response.split('\n')

    data = {}
    
    for line in lines:
        key, value = line.split('=')
        
        data[key.strip()] = value.strip()

    return data
@api_view(['POST'])
def ocr(request):
    os.getenv("GOOGLE_API_KEY")
    genai.configure(api_key="AIzaSyB2qcLvhEpEM9DoQ5ISgA40CpBSjiGhYL0")
    input_prompt = """
    # Example of a Moroccan name: Amine Frira
    # Example of an ID number: EE665597
    # Example of a Moroccan name in Arabic:  أمين فريرا
    The name in the morrocan ID card is located under "CARTE NATIONALE D'IDENTITE"
    there is a first name and under it the last name gather them both in the name field (under the last name there is always a field called Née le don't include it).
    The ID number is located under the picture.
    The arabic name is located under the " البطاقة الوطنية للتعريف" and to the left of the image.
    Given the ID card:
    extract the values that contain a moroccan name  and an ID number in the format (2 letters then 6 numbers) and the id arabic name ,
    and return them as name=name_extracted and id=id_extracted arabic_name=arabic_name_extracted
    make sure to return only the the name,id and arabic_name don't return any other text:
               """
    image_data = input_image_setup(request.FILES.get('image'))
    response=get_gemini_response(input_prompt,image_data,'You are an expert in Moroccan ID cards, and you are asked to extract the name and ID number from the image below.')
    data=parse_response(response)
    return JsonResponse(data, safe=False)