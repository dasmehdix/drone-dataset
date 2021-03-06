# drone-dataset [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Drone dataset to lock on enemy drones

This dataset prepared for academical and competition purpose. Main idea of this dataset is to guide our drone to other drones. Dataset includes ~1400 drone images and label files. The label files are in format of both .txt and .xml. So, You can use it with Tensorflow, Darknet and PyTorch too. Most of images taken from Google and Yandex's image search toolbox with image(web) scrapers. The other images are cropped from drone videos that downloaded from Youtube. Results are pretty good(%86mAP).


Here is the [link](https://www.kaggle.com/dasmehdixtr/drone-dataset-uav) of dataset
### Is it working really?!
  ![s](https://github.com/dasmehdix/drone-dataset/blob/master/example_yolo.gif)
### Answer: Yes, even with tiny one like above!
# Some Results
![image1](https://github.com/dasmehdix/drone-dataset/blob/master/results_of_yolo/chart1d2.png)
###### 500 Photo Yolo-v3 weights
![image2](https://github.com/dasmehdix/drone-dataset/blob/master/results_of_yolo/chart2d4.png)
###### Full Dataset Darknet53 weights
![image3](https://github.com/dasmehdix/drone-dataset/blob/master/results_of_yolo/chart3d5.png)
###### Full Dataset Yolo-v3 weights (tuned)
![image4](https://github.com/dasmehdix/drone-dataset/blob/master/results_of_yolo/chart4d6.png)
###### Full Dataset Yolov3-tiny weights
![image5](https://github.com/dasmehdix/drone-dataset/blob/master/results_of_yolo/chart5d9.png)
###### Full Dataset Yolov3-tiny weights(tuned)
## Bonus-1
The xmlparser is written to solve a issue that occured in labelimg. When I labeled photos with LabelImg, there was no problem firstly. Then, when I changed the path of images(and format of images like jpg or png) the xml files become a problem. Because the path in the label xml file and the image path looks diffrent. So, instead of labelling the photos again, [kubilay](https://github.com/kubilaysalih) write a script to change the path in the label xml files, so easyly we can train our images in every PC.


## Bonus-2

I also added a python script(txt_path_generator_yolo) to write the path of images in a txt file to train YOLO-v3.

## Suggestion
Images are in diffrent format like jpg, png or jpeg. I suggest you to convert all of them to jpg format.
**For windows,**

1.  Open cmd
2.  Go to the path that contain images
3.  Run this command:
```
ren *. *.jpg
```

## You can cite me from [google scholar](https://scholar.google.com/citations?user=aqPpehwAAAAJ&hl=tr) or [researchgate](https://www.researchgate.net/profile/Mehdi-Oezel). Or, just mention link of the dataset which is enough for me. This dataset is freely available for academical and fun purpose :)
