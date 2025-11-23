# app.py — TravelSmart (Updated for NEW google-genai SDK, NO location finder)

import os
from dotenv import load_dotenv
from google import genai
import streamlit as st

# ----------------------
# Load API Key
# ----------------------
load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise RuntimeError("GOOGLE_API_KEY missing in .env")

client = genai.Client(api_key=API_KEY)

MODEL_NAME = "models/gemini-2.0-flash"   # safe & available model


# ----------------------
# Helper Functions
# ----------------------

def generate_text(prompt_template, user_text):
    """
    Text-only generation for trip planner, weather, hotel/restaurants.
    """
    final_prompt = prompt_template.strip() + "\n\n" + user_text.strip()

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=final_prompt
    )
    return response.text


# ----------------------
# Streamlit UI
# ----------------------

st.set_page_config(page_title="TravelSmart", layout="wide")

st.title("TravelSmart — AI Travel Assistant")

# Removed "Location Finder"
section = st.radio(
    "Choose Section:",
    [
        "Trip Planner",
        "Weather Forecasting",
        "Restaurant & Hotel Planner"
    ]
)

# -------------------------
# Trip Planner
# -------------------------
if section == "Trip Planner":
    st.subheader("Plan a personalized itinerary")

    user_plan = st.text_area("Enter location + days (e.g., 'Manali for 4 days')")

    prompt = """
    You are an expert trip planner. Create:
    - Day-by-day itinerary
    - Hidden gems
    - Best months to visit
    - Hotel suggestions
    - Travel tips
    Return everything in clean markdown.
    """

    if st.button("Plan Trip"):
        try:
            output = generate_text(prompt, user_plan)
            st.markdown(output)
        except Exception as e:
            st.error(e)


# -------------------------
# Weather Forecasting
# -------------------------
if section == "Weather Forecasting":
    st.subheader("7-day Weather Forecast")

    user_weather = st.text_input("Enter location (e.g., 'Mumbai')")

    prompt = """
    Provide a 7-day weather forecast:
    - Temperature range
    - Humidity
    - Wind
    - Rain probability
    - Air quality
    - Short advice for travelers
    Return everything in markdown.
    """

    if st.button("Forecast"):
        try:
            output = generate_text(prompt, user_weather)
            st.markdown(output)
        except Exception as e:
            st.error(e)


# -------------------------
# Restaurants & Hotels
# -------------------------
if section == "Restaurant & Hotel Planner":
    st.subheader("Find Top Restaurants & Hotels")

    user_place = st.text_input("Enter a location (e.g., 'Goa')")

    prompt = """
    Provide:
    - Top 5 mid-range restaurants (rating, address, cost)
    - Top 5 mid-range hotels (rating, address, cost per night)
    Keep it clean & organized in markdown.
    """

    if st.button("Find Now"):
        try:
            output = generate_text(prompt, user_place)
            st.markdown(output)
        except Exception as e:
            st.error(e)


# Footer
st.markdown("---")
st.caption("Powered by Google Gemini (via google-genai SDK). Keep your API key secure.")
