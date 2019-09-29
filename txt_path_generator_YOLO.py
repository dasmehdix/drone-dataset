# This code written by Dasmehdix(Mehdi Ozel)
# The main aim about write this basic code is to given path of images and labels to YOLO-v3 
# The situation is like that: For instance, if you have photos and labels in a folder with YOLO format.When you want to train YOLO, You have to give path of all images in .data file with txt format.
# So, this script is done to write the correct paths to a txt file and train YOLO-v3

import os 
import numpy as np 
import glob

path = '/..The path that contain images and txt labels/..'
path2 = "\\..The path that you want to write your path of images..\\" # like C:\\darknet\\build\\darknet\\x64\\data\\obj\\
os.getcwd()
os.chdir(path)
files = [f for f in glob.glob( "**/*.jpg", recursive=True)]
b = open("petler.txt","w") # you can change the name of petler.txt like what you want to give

for f in files:
    print(f.strip('.jpg'))
    
    a = open(f.strip('.jpg') +".txt","w")
    b.write(path2+f+"\n")
        
