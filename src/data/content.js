export const profile = {
name: 'Dawood Ayoob Shiekh',
title: 'AI/ML Engineer',
summary:
'I build intelligent systems end‑to‑end: data → models → product. Passionate about RAG, LLM ops, and production‑grade ML.',
location: 'Bangalore',
email: 'sdawood329663@gmail.com',
socials: {
github: 'https://github.com/sheikhdawood',
linkedin: 'https://linkedin.com/in/dawood-ayoob-sheikh',
twitter: 'https://x.com/yourhandle',
website: 'https://yourdomain.com'
},
heroCTAs: [
  { label: 'Download CV', href: '/cv.pdf', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'View Projects', href: '#projects' },
],
}

export const skills = [
{
group: 'AI/ML',
items: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'RAG', 'LangChain', 'LLMOps']
},
{
group: 'Backend',
items: ['FastAPI', 'Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']
}
]


export const projects = [
{
title: 'Vid2Text-RAG',
description:
"A Streamlit app that: Takes a YouTube video link Extracts its audio Transcribes it to text using Faster Whisper Lets you ask questions about the transcript using Groq's open-source LLMs Allows you to download the transcript as a .txt file",
stack: ['Streamlit', 'FastAPI', 'Pinecone', 'HF Embeddings', 'LangChain'],
highlights: ['Multi‑tenant vectorization', 'Chart generation', 'Company‑level insights'],
links: [
{ label: 'Code', href: 'https://github.com/sheikhdawood/Vid2Text-RAG' },
],
},
{
title: 'Qur\'anic Multilingual Translator',
description:
'Fine‑tuned M2M100/Qwen for Arabic→EN/HI/ZH with PEFT & LoRA; includes bias mitigation + scholar review workflow.',
stack: ['Transformers', 'PEFT', 'LoRA', 'Gradio'],
highlights: ['High BLEU on eval set', 'Human‑in‑the‑loop review'],
links: [
{ label: 'Code', href: 'https://github.com/sheikhdawood/AI-based-translation' },
],
},
{
title: 'MCQ Generator',
description:
'Upload PDFs/text → LLM-generated questions with answers insight JSON → Plotly visualizations + chat-based modifications.',
stack: ['Streamlit', 'Plotly', 'Gemini', 'LangChain'],
highlights: ['Interactive charts', 'Chat modding'],
links: [
{ label: 'Code', href: 'https://github.com/sheikhdawood/MCQ_Generator' },
],
},
{
title: 'Attendance Management',
description:
'Employee Attendance Tracking System is a FastAPI-based application that securely manages employee attendance by combining image-based check-in/check-out with real-time location verification. It stores attendance data in MongoDB, including timestamps, employee ID, location, and photos, and provides both individual summaries and overall attendance statistics through dedicated APIs. The system supports authentication, admin control, and analytics, enabling efficient monitoring of employee presence, absenteeism, and patterns, while being easily extensible for features like leave management or biometric login.',
stack: ['Streamlit', 'Plotly', 'Gemini', 'LangChain'],
highlights: ['Interactive charts', 'Chat modding'],
links: [
{ label: 'Code', href: 'https://github.com/sheikhdawood/Ateendance_Management' },
],
},
]


export const experience = [
{
role: 'AI/ML Engineer',
company: 'Aseef IT holding Co.',
period: 'Aug, 2024 — Present',
bullets: [
'Designed RAG platform with FAISS/Pinecone; 35% faster query times.',
'Productionized LLM inference with streaming + observability.',
'Led MLOps: CI/CD for models, feature store, eval harness.',
],
}
]


export const education = [
{
degree: 'B.Tech in Computer Science',
institute: 'The Oxford College of Engineering',
period: 'Nov 2020 — June 2024',
details: 'Specialization in Computer Science.'
}
]


export const certificates = [
{ title: 'Complete Generative AI Course With Langchain and Huggingface', issuer: 'Krish Naik', year: '2023' },
{ title: 'AWS Certified Machine Learning - Specialty', issuer: 'AWS', year: '2023' },
]