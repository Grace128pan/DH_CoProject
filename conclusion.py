import pyttsx3
import docx2txt

def read_text_to_audio(file_path):
    # Read the contents of the .docx file
    text = docx2txt.process(file_path)
    
    # Initialize the text-to-speech engine
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)    # Speed percent (can go over 100)
    engine.setProperty('volume', 0.9)  # Volume 0-1
    engine.save_to_file(text, 'conclusions.mp3')  # Convert text to speech and save to an audio file
    engine.runAndWait()

# Example usage
file_path = "conclusion.docx"
read_text_to_audio(file_path)
