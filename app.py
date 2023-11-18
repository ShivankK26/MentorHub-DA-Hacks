import streamlit as st
import pandas as pd
import os
from dotenv import load_dotenv
from pandasai.llm.openai import OpenAI
from pandasai import SmartDataframe


OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
load_dotenv()

llm = OpenAI(api_token=OPENAI_API_KEY)
df = pd.read_csv("./mentors.csv")
df = SmartDataframe(df, config={"llm": llm})

# from utils import *


st.set_page_config(
    page_title="MentorHub",
    page_icon="👨‍🏫",
    layout="centered",
    initial_sidebar_state="collapsed",
)


st.title("MentorHub 🤖")
st.header("With Which Mentor You Wanna Connect?", divider="rainbow")


question_1 = st.selectbox(
    "What's your Experience?",
    ("Beginner", "Intermediate", "Advance"),
    key=1,
)


question_2 = st.selectbox(
    "What Shall be the Niche Of Mentor?",
    (
        "Frontend",
        "Backend",
        "Full Stack",
        "Database",
    ),
    key=2,
)

if question_2:
    text = df.chat(
        f"Tell me the names of all those whose main tech stack is {question_2}"
    )
    with st.chat_message("assistant"):
        st.markdown(text)
        print(text)
    print(question_2)


st.warning(
    "PS: You can also Connect with Mentors from Diverse Domains like- Blockchain, Machine Learning, App Development Artificial Intelligence, Cybersecurity, Cloud Computing, Data Analytics! Just Do that By Prompting the Name Of that Domain 🤫!"
)


query = st.text_area("Enter your Query:")

button = st.button("Generate Response")


if button:
    text = df.chat(query)
    with st.chat_message("assistant"):
        st.markdown(text)
        print(text)
